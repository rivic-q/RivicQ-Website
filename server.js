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

/**
 * ====================================================================
 *  PRODUCTION HEALTH: Environment validation on startup
 * ====================================================================
 */
const REQUIRED_ENV_VARS = ['VITE_FORM_ENDPOINT'];
const ENV_CHECKS = [];

const checkEnv = (name, required, hint) => {
  const ok = !required || !!process.env[name];
  ENV_CHECKS.push({ name, required, ok, hint });
  return ok;
};

checkEnv('NODE_ENV', false, 'Set to "production" for production deployments');
checkEnv('PORT', false, 'Defaults to 3000');
checkEnv('CORS_ORIGIN', false, 'Comma-separated allowed origins');
checkEnv('SMTP_USER', false, 'Required for email delivery');
checkEnv('SMTP_PASS', false, 'Required for email delivery');
checkEnv('SMTP_HOST', false, 'Defaults to smtp-relay.brevo.com');
checkEnv('RATE_LIMIT_WINDOW_MS', false, 'Defaults to 900000 (15 min)');
checkEnv('RATE_LIMIT_MAX_REQUESTS', false, 'Defaults to 100');
checkEnv('VITE_FORM_ENDPOINT', true, 'Required — set to /api/contact or third-party endpoint');

for (const env of REQUIRED_ENV_VARS) {
  if (!process.env[env]) {
    console.error(`[FATAL] Missing required env var: ${env}`);
  }
}

/**
 * ====================================================================
 *  SMTP Transporter with startup verification
 * ====================================================================
 */
const smtpConfigured = process.env.SMTP_USER && process.env.SMTP_PASS;
let transporter = null;
let smtpVerified = false;

if (smtpConfigured) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 8000,
  });

  if (process.env.NODE_ENV === 'production') {
    transporter.verify()
      .then(() => {
        smtpVerified = true;
        console.log('[SMTP] Connection verified successfully');
      })
      .catch((err) => {
        console.error(`[SMTP] Verification failed: ${err.message}`);
        console.error('[SMTP] Emails will be logged locally only');
      });
  }
} else {
  console.warn('[SMTP] Not configured — emails logged locally only');
  console.warn('[SMTP] Set SMTP_USER and SMTP_PASS in .env to enable delivery');
}

/**
 * ====================================================================
 *  Express App Setup
 * ====================================================================
 */
const app = express();
const port = process.env.PORT || 3000;

app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}));

const corsOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map(o => o.trim())
  : ['http://localhost:3000', 'http://localhost:5173', 'https://rivicq.de', 'https://www.rivicq.de'];

app.use(cors({
  origin: corsOrigins,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
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

/**
 * ====================================================================
 *  Rate Limiting (in-memory with periodic cleanup)
 * ====================================================================
 */
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000');
const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100');
const RATE_LIMIT_CLEANUP_INTERVAL = 5 * 60 * 1000;

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

const cleanupInterval = setInterval(() => {
  const cutoff = Date.now() - RATE_LIMIT_WINDOW;
  let cleared = 0;
  for (const [ip, data] of rateLimitMap.entries()) {
    data.timestamps = data.timestamps.filter(ts => ts > cutoff);
    if (data.timestamps.length === 0) {
      rateLimitMap.delete(ip);
      cleared++;
    }
  }
  if (cleared > 0) {
    console.log(`[RateLimit] Cleaned up ${cleared} stale entries (total: ${rateLimitMap.size})`);
  }
}, RATE_LIMIT_CLEANUP_INTERVAL);

cleanupInterval.unref();

/**
 * ====================================================================
 *  Input Validation & Sanitization
 * ====================================================================
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[a-zA-Z\s\-'.,()]+$/;
const SANITIZE_REGEX = /<[^>]*>|javascript:|data:|on\w+=/gi;

const sanitize = (value) => {
  if (typeof value !== 'string') return value;
  return value.replace(SANITIZE_REGEX, '').trim();
};

const validateEmail = (email) => EMAIL_REGEX.test(email);

const validateInquiryPayload = (payload) => {
  const errors = [];

  if (!payload.name || typeof payload.name !== 'string' || payload.name.trim().length < 2) {
    errors.push('Name is required (min 2 characters)');
  } else if (payload.name.length > 200) {
    errors.push('Name is too long (max 200 characters)');
  } else if (!NAME_REGEX.test(payload.name)) {
    errors.push('Name contains invalid characters');
  }

  if (!payload.email || typeof payload.email !== 'string') {
    errors.push('Email is required');
  } else if (!validateEmail(payload.email)) {
    errors.push('Invalid email format');
  }

  if (payload.message && typeof payload.message === 'string') {
    if (payload.message.length > 5000) {
      errors.push('Message is too long (max 5000 characters)');
    }
  }

  if (payload.company && typeof payload.company === 'string') {
    if (payload.company.length > 200) {
      errors.push('Company name is too long (max 200 characters)');
    }
  }

  if (payload.role && typeof payload.role === 'string' && payload.role.length > 200) {
    errors.push('Role is too long (max 200 characters)');
  }

  return errors;
};

/**
 * ====================================================================
 *  Leads persistence with file rotation
 * ====================================================================
 */
const MAX_LEADS_PER_FILE = 10000;

const persistLead = (leadData) => {
  const leadsDir = path.join(__dirname, 'data');
  if (!fs.existsSync(leadsDir)) {
    fs.mkdirSync(leadsDir, { recursive: true });
  }

  const dateStr = new Date().toISOString().split('T')[0];
  const leadsFile = path.join(leadsDir, `leads-${dateStr}.json`);

  let leads = [];
  if (fs.existsSync(leadsFile)) {
    try {
      leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8'));
    } catch (e) {
      console.error('Error reading leads file:', e);
      leads = [];
    }

    if (leads.length >= MAX_LEADS_PER_FILE) {
      const fallback = path.join(leadsDir, `leads-${dateStr}-${Date.now()}.json`);
      fs.renameSync(leadsFile, fallback);
      console.log(`[Leads] Rotated to ${fallback}`);
      leads = [];
    }
  }

  leads.push(leadData);
  fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));
  return leadsFile;
};

/**
 * ====================================================================
 *  API Routes
 * ====================================================================
 */
app.post('/api/contact', rateLimitMiddleware, csrfCheck, async (req, res) => {
  const errors = validateInquiryPayload(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ error: 'Validation failed.', details: errors });
  }

  const {
    type, subject, product, interest, product_interest,
    name, email, company, role, message, timeline, documentType, organization,
  } = req.body;
  const timestamp = new Date().toISOString();

  const resolvedType = type || subject || 'general';
  const sanitizedName = sanitize(name);
  const sanitizedCompany = sanitize(company || '');
  const sanitizedMessage = sanitize(message || '');
  const sanitizedRole = sanitize(role || '');
  const sanitizedProduct = sanitize(product || product_interest || '');

  console.log(`\n========= NEW INQUIRY [${timestamp}] =========`);
  console.log(`TYPE:     ${resolvedType.toUpperCase()}`);
  if (sanitizedProduct) console.log(`PRODUCT:  ${sanitizedProduct}`);
  if (interest) console.log(`INTEREST: ${interest}`);
  console.log(`FROM:     ${sanitizedName} <${email}>`);
  if (sanitizedCompany) console.log(`COMPANY:  ${sanitizedCompany} (${sanitizedRole || 'N/A'})`);
  if (organization) console.log(`ORG TYPE: ${organization}`);
  if (timeline) console.log(`TIMELINE: ${timeline}`);
  if (documentType) console.log(`DOCUMENT: ${documentType}`);
  console.log(`MESSAGE:  ${sanitizedMessage}`);
  console.log(`============================================\n`);

  const leadData = {
    timestamp,
    type: resolvedType,
    subject: subject || undefined,
    product: sanitizedProduct || undefined,
    interest: interest || undefined,
    name: sanitizedName,
    email,
    company: sanitizedCompany || undefined,
    role: sanitizedRole || undefined,
    organization: organization || undefined,
    timeline: timeline || undefined,
    documentType: documentType || undefined,
    message: sanitizedMessage || undefined,
    source: req.headers.referer || 'direct',
  };

  persistLead(leadData);

  const typeLabels = {
    'beta-signup': 'Beta Signup Request',
    'demo-request': 'Dashboard Demo Request',
    'pitch-deck': 'Pitch Deck/Whitepaper Request',
    'general': 'General Inquiry',
    'Encryption Beta Signup': 'Beta Signup Request',
    'Enterprise Inquiry': 'Enterprise Inquiry',
    'Investor Interest — Pre-Seed / Seed Round': 'Investor Interest',
    'Partnership Inquiry': 'Partnership Inquiry',
    'CSPM+QBOM Pilot Request': 'Pilot Program Request',
    'Investor Relations': 'Investor Interest',
    'Partnership': 'Partnership Inquiry',
    'Pilot Program': 'Pilot Program Request',
    'Enterprise Encryption Suite': 'Enterprise Encryption Suite',
    'CSPM Scanner': 'CSPM Scanner',
    'QBOM Analyzer': 'QBOM Analyzer',
    'CloudHSM / vHSM': 'CloudHSM / vHSM',
    'RQSP Protocol': 'RQSP Protocol',
    'Developer SDK': 'Developer SDK',
  };

  const escapeHtml = (str) => {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  const emailHtml = `
    <h2>New ${typeLabels[resolvedType] || typeLabels[type] || 'Inquiry'} from RivicQ Website</h2>
    <table style="border-collapse:collapse;width:100%">
      <tr style="border-bottom:1px solid #e5e7eb">
        <td style="padding:8px;font-weight:bold;color:#374151">Name:</td>
        <td style="padding:8px">${escapeHtml(sanitizedName)}</td>
      </tr>
      <tr style="border-bottom:1px solid #e5e7eb">
        <td style="padding:8px;font-weight:bold;color:#374151">Email:</td>
        <td style="padding:8px"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
      </tr>
      ${sanitizedProduct ? `<tr style="border-bottom:1px solid #e5e7eb">
        <td style="padding:8px;font-weight:bold;color:#374151">Product:</td>
        <td style="padding:8px">${escapeHtml(sanitizedProduct)}</td>
      </tr>` : ''}
      ${interest ? `<tr style="border-bottom:1px solid #e5e7eb">
        <td style="padding:8px;font-weight:bold;color:#374151">Interest:</td>
        <td style="padding:8px">${escapeHtml(interest)}</td>
      </tr>` : ''}
      ${sanitizedCompany ? `<tr style="border-bottom:1px solid #e5e7eb">
        <td style="padding:8px;font-weight:bold;color:#374151">Company:</td>
        <td style="padding:8px">${escapeHtml(sanitizedCompany)}</td>
      </tr>` : ''}
      ${sanitizedRole ? `<tr style="border-bottom:1px solid #e5e7eb">
        <td style="padding:8px;font-weight:bold;color:#374151">Role:</td>
        <td style="padding:8px">${escapeHtml(sanitizedRole)}</td>
      </tr>` : ''}
      ${timeline ? `<tr style="border-bottom:1px solid #e5e7eb">
        <td style="padding:8px;font-weight:bold;color:#374151">Timeline:</td>
        <td style="padding:8px">${escapeHtml(timeline)}</td>
      </tr>` : ''}
      ${organization ? `<tr style="border-bottom:1px solid #e5e7eb">
        <td style="padding:8px;font-weight:bold;color:#374151">Organization:</td>
        <td style="padding:8px">${escapeHtml(organization)}</td>
      </tr>` : ''}
      ${documentType ? `<tr style="border-bottom:1px solid #e5e7eb">
        <td style="padding:8px;font-weight:bold;color:#374151">Document:</td>
        <td style="padding:8px">${escapeHtml(documentType)}</td>
      </tr>` : ''}
    </table>
    <h3 style="margin-top:20px;color:#374151">Message:</h3>
    <p style="background:#f9fafb;padding:16px;border-radius:8px">${escapeHtml(sanitizedMessage) || 'N/A'}</p>
    <p style="color:#6b7280;font-size:12px;margin-top:20px">
      <strong>Timestamp:</strong> ${timestamp}<br>
      <strong>Source:</strong> ${req.headers.referer || 'direct'}
    </p>
  `;

  if (transporter) {
    try {
      const label = typeLabels[resolvedType] || typeLabels[type] || 'New Inquiry';
      const productSuffix = sanitizedProduct ? ` — ${sanitizedProduct}` : '';
      await transporter.sendMail({
        from: `"RivicQ Website" <${process.env.SMTP_FROM || 'noreply@rivicq.de'}>`,
        to: 'hello@rivicq.de',
        subject: `[RivicQ] ${label}${productSuffix}: ${sanitizedName} from ${sanitizedCompany || email}`,
        html: emailHtml,
        replyTo: email,
      });
      console.log('[Email] Sent successfully to hello@rivicq.de');
    } catch (emailError) {
      console.error('[Email] Error sending:', emailError.message);
    }
  }

  res.json({ success: true, message: 'Inquiry recorded successfully.' });
});

app.get('/.well-known/security.txt', (req, res) => {
  const securityFile = path.join(distDir, '.well-known', 'security.txt');
  if (fs.existsSync(securityFile)) {
    return res.type('text/plain').sendFile(securityFile);
  }
  res.type('text/plain').status(404).send('Not found');
});

/**
 * ====================================================================
 *  Enhanced Health Check Endpoint
 * ====================================================================
 */
app.get('/api/health', (req, res) => {
  const buildExists = fs.existsSync(distIndexFile);
  const uptime = process.uptime();

  res.json({
    status: buildExists ? 'ok' : 'degraded',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    uptime: Math.floor(uptime),
    checks: {
      build: buildExists ? 'ok' : 'missing',
      smtp: smtpConfigured ? (smtpVerified ? 'verified' : 'configured') : 'not-configured',
      rateLimitEntries: rateLimitMap.size,
    },
    version: '1.0.0',
  });
});

app.get('/api/health/env', (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    return res.json({ checks: ENV_CHECKS });
  }
  res.status(403).json({ error: 'Not available in production' });
});

/**
 * ====================================================================
 *  Error Handling & Fallback
 * ====================================================================
 */
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
  console.error('[Server Error]', err);
  res.status(500).json({ error: 'Internal server error.' });
});

/**
 * ====================================================================
 *  Server Start
 * ====================================================================
 */
app.listen(port, () => {
  console.log(`\n╔══════════════════════════════════════════╗`);
  console.log(`║   RivicQ Server Live                    ║`);
  console.log(`║   Port:     ${String(port).padEnd(28)}║`);
  console.log(`║   Env:      ${(process.env.NODE_ENV || 'development').padEnd(28)}║`);
  console.log(`║   SMTP:     ${(smtpConfigured ? 'configured' : 'not configured').padEnd(28)}║`);
  console.log(`║   Build:    ${(fs.existsSync(distIndexFile) ? 'found' : 'not found (dev mode)').padEnd(28)}║`);
  console.log(`╚══════════════════════════════════════════╝\n`);
});

export default app;
