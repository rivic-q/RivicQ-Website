# RivicQ Website

RivicQ's corporate website — a React SPA with Express backend. Built with Vite, TypeScript, and Tailwind CSS.

## Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS (CDN), Vite
- **Backend:** Express 5, Node.js 20+
- **APIs:** Brevo SMTP (email)
- **Routing:** HashRouter (SPA)

## Prerequisites

- Node.js 20+

## Setup

1. Install dependencies:
   ```
   npm install
   ```
2. Copy `.env.example` to `.env` and fill in the values:
   ```
   cp .env.example .env
   ```
3. Required env vars:
   | Variable | Description |
   |----------|-------------|
   | `SMTP_USER` | Brevo SMTP username |
   | `SMTP_PASS` | Brevo SMTP password |
   | `SMTP_FROM` | Sender email address |
   | `CORS_ORIGIN` | Comma-separated allowed origins |
4. Start development server:
   ```
   npm run dev
   ```

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start dev server + Vite HMR |
| `npm run build` | Build production assets |
| `npm run start` | Start production server |
| `npm run lint` | TypeScript type checking |
| `npm run format` | Format code with Prettier |
| `npm run prod:check` | Build + syntax check |

## Structure

```
├── App.tsx              # Route definitions + page titles
├── components/          # Shared UI components
├── pages/               # Route page components
├── services/            # API service layer
├── server.js            # Express backend
├── public/              # Static assets (favicon, robots.txt, sitemap)
├── dist/                # Build output (gitignored)
└── .env                 # Environment config (gitignored)
```
