import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from "@google/genai";
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import { getPrisma } from './src/db/prisma.js';
import { sendLeadNotification } from './src/mailer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');
const sourceIndexFile = path.join(__dirname, 'index.html');
const distIndexFile = path.join(distDir, 'index.html');

dotenv.config();

const prisma = await getPrisma();

app.use(helmet());

const RATE_LIMIT_WINDOW = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000');
const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100');

const apiLimiter = rateLimit({
  windowMs: RATE_LIMIT_WINDOW,
  max: RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false
});

app.use('/api/', apiLimiter);

const app = express();
const port = process.env.PORT || 3000;

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const corsOrigins = process.env.CORS_ORIGIN 
  ? process.env.CORS_ORIGIN.split(',').map((origin) => origin.trim())
  : ['http://localhost:3000', 'http://localhost:5173'];

app.use(cors({
  origin: corsOrigins,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(express.static(distDir));

// rate limiting is handled by express-rate-limit (apiLimiter)
const rateLimitMiddleware = (req, res, next) => next();

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateInquiryPayload = (payload) => {
  const errors = [];
  
  if (payload.name && payload.name.length > 200) {
    errors.push('Name is too long');
  }
  
  if (payload.email && !validateEmail(payload.email)) {
    errors.push('Invalid email format');
  }
  
  if (payload.message && payload.message.length > 5000) {
    errors.push('Message is too long');
  }
  
  if (payload.company && payload.company.length > 200) {
    errors.push('Company name is too long');
  }
  
  return errors;
};

app.post('/api/scan-security', rateLimitMiddleware, async (req, res) => {
  try {
    const { code } = req.body;
    if (!code) return res.status(400).json({ error: "No code provided." });
    if (typeof code !== 'string') return res.status(400).json({ error: "Invalid code format." });
    if (code.length > 50000) return res.status(400).json({ error: "Code exceeds maximum length." });

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Perform a detailed technical security audit on the provided code snippet. 
      Focus on cryptographic vulnerabilities and quantum readiness.
      
      Auditing Requirements:
      1. Identify legacy/weak algorithms (e.g., RSA < 3072, ECC with small curves, SHA-1, MD5).
      2. Detect quantum vulnerabilities like "Harvest Now, Decrypt Later" exposure.
      3. Recommend specific Post-Quantum Cryptography (PQC) migration paths using NIST standards (ML-KEM, ML-DSA).
      
      OUTPUT FORMAT:
      Return ONLY a JSON array of objects. Do not include preamble or explanation.
      Structure: [{"file": string, "algo": string, "status": "CRITICAL"|"VULNERABLE"|"QUANTUM-WEAK"|"SAFE", "recommendation": string}]
      
      Code to Audit:
      ${code}`,
      config: {
        responseMimeType: "application/json",
        systemInstruction: "You are a world-class cryptographic security auditor specializing in NIST PQC standards. Your output must be valid JSON array."
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Empty response from AI");
    }

    const report = JSON.parse(text);
    res.json({ success: true, report });
  } catch (error) {
    console.error("AI Scan Error:", error);
    res.status(500).json({ error: "Audit service failed." });
  }
});

app.post('/api/contact', rateLimitMiddleware, async (req, res) => {
  const contactSchema = z.object({
    type: z.string().optional(),
    name: z.string().min(1).max(200).optional(),
    email: z.string().email().optional(),
    company: z.string().max(200).optional(),
    role: z.string().max(200).optional(),
    message: z.string().max(5000).optional(),
    timeline: z.string().optional(),
    documentType: z.string().optional(),
    organization: z.string().optional()
  });

  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: 'Validation failed', details: parsed.error.errors });
  }

  const { type, name, email, company, role, message, timeline, documentType, organization } = parsed.data;
  const timestamp = new Date().toISOString();

  console.log(`\n========= NEW INQUIRY RECEIVED [${timestamp}] =========`);
  console.log(`TYPE:     ${type?.toUpperCase() || 'GENERAL'}`);
  console.log(`FROM:     ${name} <${email}>`);

  const leadData = {
    type: type || 'GENERAL',
    name: name || null,
    email: email || null,
    company: company || null,
    role: role || null,
    organization: organization || null,
    timeline: timeline || null,
    documentType: documentType || null,
    message: message || null,
    source: req.headers.referer || 'direct',
    timestamp
  };

  // Persist to DB if available, otherwise fall back to file storage
  if (prisma) {
    try {
      await prisma.lead.create({ data: {
        type: leadData.type,
        name: leadData.name,
        email: leadData.email,
        company: leadData.company,
        role: leadData.role,
        organization: leadData.organization,
        timeline: leadData.timeline,
        documentType: leadData.documentType,
        message: leadData.message,
        source: leadData.source
      } });
      await prisma.auditLog.create({ data: { action: 'lead:create', resource: 'Lead', meta: JSON.stringify({ source: leadData.source }) } });
    } catch (dbErr) {
      console.error('Error writing lead to DB:', dbErr.message);
    }
  }

  const leadsFile = path.join(__dirname, 'leads.json');
  let leads = [];
  if (fs.existsSync(leadsFile)) {
    try { leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8')); } catch (e) { console.error('Error reading leads file:', e); }
  }
  leads.push(leadData);
  try { fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2)); } catch (e) { console.error('Error writing leads file:', e); }

  const typeLabels = {
    'beta-signup': 'Beta Signup Request',
    'demo-request': 'Dashboard Demo Request',
    'pitch-deck': 'Pitch Deck/Whitepaper Request',
    'general': 'General Inquiry'
  };

  const emailHtml = `
    <h2>New ${typeLabels[type] || 'Inquiry'} from RivicQ Website</h2>
    <p><strong>Name:</strong> ${name || 'N/A'}</p>
    <p><strong>Email:</strong> ${email || 'N/A'}</p>
    <p><strong>Company:</strong> ${company || 'N/A'}</p>
    <p><strong>Role:</strong> ${role || 'N/A'}</p>
    <p><strong>Message:</strong><br/>${(message || 'N/A').replace(/\n/g, '<br/>')}</p>
    <p style="font-size:12px;color:#666;">Timestamp: ${timestamp} • Source: ${leadData.source}</p>
  `;

  // Send notification if mailer configured (non-blocking)
  sendLeadNotification({ subject: `[RivicQ] ${typeLabels[type] || 'New Inquiry'}: ${name || email}`, html: emailHtml, replyTo: email });

  res.json({ success: true, message: "Inquiry recorded successfully." });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use((req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API route not found.' });
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  if (fs.existsSync(distIndexFile)) {
    return res.sendFile(distIndexFile);
  }

  return res.sendFile(sourceIndexFile);
});

app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ error: 'Internal server error.' });
});

app.listen(port, () => {
  console.log(`RivicQ Server Live: http://localhost:${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
