# RivicQ Website - Testing and Production Checklist

## A) Automated Checks (must pass)

Run from project root:

```bash
npm install
npm run prod:check
npm run build
```

Expected:
- Build completes without errors
- Server syntax check passes

## B) Runtime Smoke Test

1. Start server:

```bash
npm run start
```

2. Open in browser:
- http://localhost:3000
- Navigate core routes: Home, Products, Platform, Pricing, Trust, Resources

3. API checks:
- Submit lead form on Pricing page
- Submit scanner demo request on Resources page
- Confirm server logs the request

## C) Manual QA

- Responsive layout on desktop and mobile
- Navigation links functional
- No blank pages for any route
- Footer social/contact links open correctly
- Form validation works (required fields, email format)
- Error messages shown when API is unavailable

## D) Security Baseline Before Public Launch

- Use Node.js 20+
- Set environment variables via .env (never hardcode keys)
- Restrict CORS origins for production domains
- Add rate limiting and Helmet middleware
- Add input validation for all API request bodies
- Add persistent storage for inquiries (not console only)

## E) Deployment Readiness

- Production domain configured
- SSL certificate active
- Environment variables configured in hosting provider
- Build artifact generated from CI
- Post-deploy smoke test completed

## F) Go/No-Go Criteria

Go only if all below are true:
- Automated checks pass
- Core pages and forms work in production
- No broken routes
- Security baseline implemented
- Contact and lead flows persist data reliably
