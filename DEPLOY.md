# RivicQ Website — Deployment Guide

## Architecture

```
┌─────────────────────────┐      ┌──────────────────────────┐
│  GitHub Pages (SPA)     │ ──→  │  Render (Express API)    │
│  https://rivicq.de      │      │  https://rivicq-api.onrender.com │
│  Static React + Vite    │      │  POST /api/contact       │
│                         │      │  GET  /api/health        │
└─────────────────────────┘      └──────────────────────────┘
```

## 1. GitHub Pages (Frontend)

Already configured:
- `public/CNAME` → `rivicq.de`
- `.github/workflows/deploy.yml` — auto-deploys on push to `main`

### Domain DNS

| Type | Name | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| TXT | `@` | `github.com/rivic-q/RivicQ-Website` |
| CNAME | `www` | `rivic-q.github.io/RivicQ-Website` |

## 2. Render (Backend API)

### Deploy on Render

1. Go to https://dashboard.render.com
2. New → Web Service
3. Connect your GitHub repo
4. Render auto-detects `render.yaml` — or manually configure:
   - **Name:** `rivicq-api`
   - **Runtime:** Node
   - **Build Command:** `npm ci && npm run build`
   - **Start Command:** `npm start`
   - **Plan:** Free
5. Add environment secrets:
   - `SMTP_USER` — Brevo SMTP username
   - `SMTP_PASS` — Brevo SMTP password
6. Set env vars:
   - `NODE_ENV=production`
   - `CORS_ORIGIN=https://rivicq.de,https://www.rivicq.de`
7. Deploy

### After deploy

1. Copy the Render URL (e.g., `https://rivicq-api.onrender.com`)
2. Go to GitHub repo → Settings → Secrets and variables → Actions
3. Add secret: `VITE_FORM_ENDPOINT=https://rivicq-api.onrender.com/api/contact`

## 3. Custom Domain (api.rivicq.de)

Optional — point a subdomain to Render:

| Type | Name | Value |
|------|------|-------|
| CNAME | `api` | `rivicq-api.onrender.com` |

Then update:
- GitHub secret `VITE_FORM_ENDPOINT` → `https://api.rivicq.de/api/contact`
- Render env `CORS_ORIGIN` → add `https://api.rivicq.de`

## 4. SMTP (Brevo)

1. Sign up at https://www.brevo.com
2. SMTP & API → SMTP keys → Create key
3. Set `SMTP_USER` and `SMTP_PASS` as Render secrets
4. Verify sender email (`noreply@rivicq.de`) in Brevo

## Manual build check

```bash
npm run build       # Vite build → dist/
npm run lint        # TypeScript check
npm run prod:check  # Production checklist (if configured)
```
