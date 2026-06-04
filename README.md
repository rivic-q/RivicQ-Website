# RivicQ Website

RivicQ's corporate website — a React SPA deployed on GitHub Pages. Built with Vite, TypeScript, and Tailwind CSS.

## Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS (CDN), Vite
- **Hosting:** GitHub Pages (static)
- **Forms:** Configurable endpoint (Web3Forms, Formspree, or custom)
- **Routing:** HashRouter (SPA)

## Setup

1. Install dependencies:
   ```
   npm install
   ```
2. Start dev server:
   ```
   npm run dev
   ```
3. For form submissions, set `VITE_FORM_ENDPOINT` in `.env` (optional — defaults to `/api/contact` for local server)

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Build production assets |
| `npm run preview` | Preview production build |
| `npm run lint` | TypeScript type checking |
| `npm run format` | Format code with Prettier |

## Deploy

Push to `main` — the GitHub Actions workflow at `.github/workflows/deploy.yml` builds and deploys to GitHub Pages automatically. Set `VITE_FORM_ENDPOINT` as a repository secret or in your form service dashboard.

## Structure

```
├── App.tsx              # Route definitions + page titles
├── components/          # Shared UI components
├── pages/               # Route page components
├── services/            # API service layer (form submission)
├── public/              # Static assets (favicon, robots.txt, .well-known)
├── dist/                # Build output (gitignored)
└── .env                 # Optional env config (gitignored)
```
