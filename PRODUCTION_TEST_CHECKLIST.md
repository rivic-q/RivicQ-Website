# RivicQ — Production Readiness Checklist

## Prerequisites

- [ ] Node.js >= 18 installed
- [ ] `.env` file created (copy `.env.example`)
- [ ] SMTP credentials configured (or acknowledge email logging only)
- [ ] `VITE_FORM_ENDPOINT` configured (`/api/contact` or third-party)
- [ ] SSL/TLS certificate active on production domain
- [ ] Production domain DNS pointing to server

## Automated Checks

```bash
# Full production readiness scan
bash scripts/prod-check.sh

# Individual checks
npm run typecheck       # TypeScript strict check
npm run build           # Production build
node --check server.js  # Server syntax check
npm audit --audit-level=high  # Security audit
```

## Cryptographic Accuracy (Deep Tech Audit)

Before going live, verify all cryptography claims are accurate:

### Algorithm References
- [ ] **ML-KEM** referred to as "FIPS 203" (not "Kyber" in official docs)
- [ ] **ML-DSA** referred to as "FIPS 204" (not "Dilithium" in official docs)
- [ ] **SLH-DSA** referred to as "FIPS 205" (not "SPHINCS+" in official docs)
- [ ] **AES-256-GCM** accuracy — already quantum-safe for symmetric encryption
- [ ] **ChaCha20-Poly1305** — accurate as mobile/low-power symmetric cipher
- [ ] **Hybrid KDF** (X25519 + ML-KEM) — correct dual-key derivation approach
- [ ] **CNSA 2.0** — Commercial National Security Algorithm Suite 2.0 (correct)
- [ ] **PKCS#11, KMIP** — correct HSM interface standards

### Compliance Claims
- [ ] **FIPS 140-3 Level 3** — clearly states "in certification" where applicable
- [ ] **DORA** — Digital Operational Resilience Act (correct, effective Jan 2025)
- [ ] **NIS2** — EU Network & Information Security Directive 2 (correct)
- [ ] **BSI TR-02102** — German cryptographic guideline (correct)
- [ ] **PCI DSS v4.0** — Payment card industry standard (correct)
- [ ] **EU AI Act** — AI cryptographic security requirements (correct)

### Security Claims
- [ ] "Post-quantum" vs "quantum-safe" vs "quantum-resistant" used consistently
- [ ] HSM claims differentiate between "certified" and "in certification"
- [ ] QRNG claims reference "quantum tunneling" or "quantum random number generation" accurately
- [ ] No overstatement of security guarantees (e.g., "unbreakable")
- [ ] Beta/prototype status clearly marked on unfinished products

## Server & API Checks

- [ ] `server.js` starts without errors
- [ ] `/api/health` returns `{"status":"ok"}`
- [ ] POST `/api/contact` accepts valid payload
- [ ] POST `/api/contact` rejects invalid payload with 400
- [ ] Rate limiting returns 429 after excessive requests
- [ ] CSRF check blocks cross-origin POST in production
- [ ] Static assets served from `dist/`
- [ ] SPA fallback works for all routes

## Functional Checks

- [ ] Home page loads
- [ ] All 30+ routes render without blank pages
- [ ] Product pages display algorithm specs
- [ ] Enterprise form submits and persists to `data/leads-*.json`
- [ ] Beta signup form submits and persists
- [ ] Responsive layout on mobile (375px) and desktop (1440px)
- [ ] Navigation menu works (desktop dropdown + mobile hamburger)
- [ ] Footer links resolve correctly

## Security Baseline

- [ ] Helmet middleware active (CSP disabled intentionally)
- [ ] CORS restricted to known origins
- [ ] Rate limiting enabled for POST endpoints
- [ ] Input validation on all API endpoints
- [ ] XSS sanitization on stored data
- [ ] Payload size limited (10kb)
- [ ] `.env` not committed to repository
- [ ] `leads.json` / `data/leads-*.json` in `.gitignore`
- [ ] `security.txt` served at `/.well-known/security.txt`

## Performance

- [ ] Build completes with no errors
- [ ] Main JS bundle < 500KB (currently ~410KB)
- [ ] Lazy loading verified (code-split routes)
- [ ] No console errors in browser
- [ ] No 404s on static assets

## Deployment

- [ ] CI pipeline passes
- [ ] Staging deployment verified
- [ ] Production domain configured
- [ ] Environment variables set in hosting provider
- [ ] Post-deploy smoke test completed
- [ ] SSL certificate active and auto-renewal configured

## Go / No-Go

**Go only if ALL below are true:**

- [ ] Automated checks pass (`bash scripts/prod-check.sh`)
- [ ] No high/critical npm audit vulnerabilities
- [ ] TypeScript check passes (`npm run typecheck`)
- [ ] Production build succeeds (`npm run build`)
- [ ] Core pages load without errors
- [ ] All forms submit successfully
- [ ] Cryptographic claims are accurate
- [ ] Security baseline implemented
- [ ] `.env` configured in production environment
- [ ] SSL certificate active
