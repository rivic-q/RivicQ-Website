import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');
const sourceIndexFile = path.join(__dirname, 'index.html');
const distIndexFile = path.join(distDir, 'index.html');

dotenv.config();

const smtpConfigured = process.env.SMTP_USER && process.env.SMTP_PASS;
let transporter = null;

if (smtpConfigured) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
} else {
  console.warn('SMTP not configured — emails will be logged locally only.');
  console.warn('Set SMTP_USER and SMTP_PASS in .env to enable email delivery.');
}

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}));

const corsOrigins = process.env.CORS_ORIGIN 
  ? process.env.CORS_ORIGIN.split(',').map((origin) => origin.trim())
  : ['http://localhost:3000', 'http://localhost:5173', 'https://rivicq.de', 'https://www.rivicq.de'];

app.use(cors({
  origin: corsOrigins,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

const csrfCheck = (req, res, next) => {
  if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(req.method)) {
    const origin = req.headers.origin || '';
    const referer = req.headers.referer || '';
    const allowed = corsOrigins.some(o => origin.startsWith(o) || referer.startsWith(o));
    if (!allowed && process.env.NODE_ENV === 'production') {
      return res.status(403).json({ error: 'Cross-site request blocked.' });
    }
  }
  next();
};

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(express.static(distDir, { dotfiles: 'allow' }));

const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000');
const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100');

const rateLimitMiddleware = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress || 'unknown';
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;
  
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, timestamps: [now] });
    return next();
  }
  
  const userData = rateLimitMap.get(ip);
  userData.timestamps = userData.timestamps.filter(ts => ts > windowStart);
  
  if (userData.timestamps.length >= RATE_LIMIT_MAX) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }
  
  userData.timestamps.push(now);
  userData.count = userData.timestamps.length;
  next();
};

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

app.post('/api/contact', rateLimitMiddleware, csrfCheck, async (req, res) => {
  const errors = validateInquiryPayload(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ error: "Validation failed.", details: errors });
  }

  const { type, name, email, company, role, message, timeline, documentType, organization } = req.body;
  const timestamp = new Date().toISOString();

  console.log(`\n========= NEW INQUIRY RECEIVED [${timestamp}] =========`);
  console.log(`TYPE:     ${type?.toUpperCase() || 'GENERAL'}`);
  console.log(`FROM:     ${name} <${email}>`);
  if (company) console.log(`COMPANY:  ${company} (${role || 'N/A'})`);
  if (organization) console.log(`ORG TYPE: ${organization}`);
  if (timeline) console.log(`TIMELINE: ${timeline}`);
  if (documentType) console.log(`DOCUMENT: ${documentType}`);
  console.log(`MESSAGE:  ${message}`);
  console.log(`=======================================================\n`);

  const leadData = {
    timestamp,
    type: type || 'GENERAL',
    name,
    email,
    company,
    role,
    organization,
    timeline,
    documentType,
    message,
    source: req.headers.referer || 'direct'
  };

  const leadsFile = path.join(__dirname, 'leads.json');
  let leads = [];
  if (fs.existsSync(leadsFile)) {
    try {
      leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8'));
    } catch (e) {
      console.error('Error reading leads file:', e);
    }
  }
  leads.push(leadData);
  fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));

  const typeLabels = {
    'beta-signup': 'Beta Signup Request',
    'demo-request': 'Dashboard Demo Request',
    'pitch-deck': 'Pitch Deck/Whitepaper Request',
    'general': 'General Inquiry'
  };

  let emailHtml = `
    <h2>New ${typeLabels[type] || 'Inquiry'} from RivicQ Website</h2>
    <table style="border-collapse: collapse; width: 100%;">
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 8px; font-weight: bold; color: #374151;">Name:</td>
        <td style="padding: 8px;">${name}</td>
      </tr>
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 8px; font-weight: bold; color: #374151;">Email:</td>
        <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
      </tr>
      ${company ? `<tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 8px; font-weight: bold; color: #374151;">Company:</td>
        <td style="padding: 8px;">${company}</td>
      </tr>` : ''}
      ${role ? `<tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 8px; font-weight: bold; color: #374151;">Role:</td>
        <td style="padding: 8px;">${role}</td>
      </tr>` : ''}
      ${timeline ? `<tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 8px; font-weight: bold; color: #374151;">Timeline:</td>
        <td style="padding: 8px;">${timeline}</td>
      </tr>` : ''}
      ${organization ? `<tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 8px; font-weight: bold; color: #374151;">Organization:</td>
        <td style="padding: 8px;">${organization}</td>
      </tr>` : ''}
      ${documentType ? `<tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 8px; font-weight: bold; color: #374151;">Document:</td>
        <td style="padding: 8px;">${documentType}</td>
      </tr>` : ''}
    </table>
    <h3 style="margin-top: 20px; color: #374151;">Message:</h3>
    <p style="background: #f9fafb; padding: 16px; border-radius: 8px;">${message?.replace(/\n/g, '<br>') || 'N/A'}</p>
    <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
      <strong>Timestamp:</strong> ${timestamp}<br>
      <strong>Source:</strong> ${req.headers.referer || 'direct'}
    </p>
  `;

  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"RivicQ Website" <${process.env.SMTP_FROM || 'noreply@rivicq.de'}>`,
        to: 'hello@rivicq.de',
        subject: `[RivicQ] ${typeLabels[type] || 'New Inquiry'}: ${name} from ${company || email}`,
        html: emailHtml,
        replyTo: email
      });
      console.log('Email sent successfully to hello@rivicq.de');
    } catch (emailError) {
      console.error('Error sending email:', emailError.message);
    }
  }

  res.json({ success: true, message: "Inquiry recorded successfully." });
});

app.get('/.well-known/security.txt', (req, res) => {
  res.type('text/plain').sendFile(path.join(distDir, '.well-known', 'security.txt'));
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
