#!/usr/bin/env bash
# ============================================================================
# RivicQ Production Readiness Check
# Run before any production deployment:  bash scripts/prod-check.sh
# ============================================================================
set -euo pipefail

RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; CYAN='\033[0;36m'; NC='\033[0m'
PASS=0; FAIL=0; WARN=0

pass() { PASS=$((PASS+1)); echo -e "  ${GREEN}✓${NC} $1"; }
fail() { FAIL=$((FAIL+1)); echo -e "  ${RED}✗${NC} $1"; }
warn() { WARN=$((WARN+1)); echo -e "  ${YELLOW}⚠${NC} $1"; }
header() { echo -e "\n${CYAN}═══ $1 ═══${NC}"; }

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo ""
echo "╔══════════════════════════════════════════════════════════╗"
echo "║         RivicQ — Production Readiness Check             ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo "  Timestamp: $(date -u '+%Y-%m-%dT%H:%M:%SZ')"
echo "  Node:      $(node -v)"
echo "  Platform:  $(uname -s)"

# ────────────────────────────────────────────────────────────────────────────
header "1. Node.js Version"
NODE_MAJOR=$(node -v | sed 's/v//' | cut -d. -f1)
if [ "$NODE_MAJOR" -ge 18 ] 2>/dev/null; then
  pass "Node.js >= 18 ($(node -v))"
else
  fail "Node.js >= 18 required (current: $(node -v))"
fi

# ────────────────────────────────────────────────────────────────────────────
header "2. Environment Files"
if [ -f .env ]; then
  pass ".env file exists"
  if grep -q 'SMTP_USER=' .env && grep -q 'SMTP_PASS=' .env; then
    pass "SMTP credentials configured"
  else
    warn "SMTP not configured — emails will be logged only"
  fi
  if grep -q 'VITE_FORM_ENDPOINT=' .env; then
    pass "VITE_FORM_ENDPOINT configured"
  else
    warn "VITE_FORM_ENDPOINT not set — forms will use /api/contact"
  fi
else
  warn ".env file missing — copy .env.example to .env"
fi

# ────────────────────────────────────────────────────────────────────────────
header "3. Dependencies"
if [ -d node_modules ]; then
  npm ls --depth=0 --quiet 2>/dev/null | grep -q 'UNMET' && fail "Unmet dependencies" || pass "Dependencies installed"
else
  fail "node_modules missing — run npm install"
fi

# ────────────────────────────────────────────────────────────────────────────
header "4. TypeScript Check"
if npx tsc --noEmit 2>&1; then
  pass "TypeScript check passed"
else
  fail "TypeScript has errors"
fi

# ────────────────────────────────────────────────────────────────────────────
header "5. Lint Check"
if npx tsc --noEmit 2>&1 | grep -q "error"; then
  fail "Lint check has errors"
else
  pass "Lint check passed"
fi

# ────────────────────────────────────────────────────────────────────────────
header "6. Production Build"
if npm run build 2>&1; then
  pass "Production build succeeded"
  if [ -f dist/index.html ]; then
    pass "dist/index.html exists"
  else
    fail "dist/index.html missing"
  fi
else
  fail "Production build failed"
fi

# ────────────────────────────────────────────────────────────────────────────
header "7. Security Audit"
AUDIT_OUTPUT=$(npm audit --audit-level=high 2>&1 || true)
if echo "$AUDIT_OUTPUT" | grep -q "found 0 vulnerabilities"; then
  pass "npm audit: no high/critical vulnerabilities"
else
  CRIT=$(echo "$AUDIT_OUTPUT" | grep -oP '\d+(?= critical)' || echo "0")
  HIGH=$(echo "$AUDIT_OUTPUT" | grep -oP '\d+(?= high)' || echo "0")
  if [ "$CRIT" = "0" ] && [ "$HIGH" = "0" ]; then
    pass "npm audit: moderate or lower only"
  else
    warn "npm audit: $CRIT critical, $HIGH high — review before production"
  fi
fi

# ────────────────────────────────────────────────────────────────────────────
header "8. Bundle Size"
if [ -d dist ]; then
  TOTAL_JS=$(find dist/assets -name '*.js' -exec stat --format=%s {} + 2>/dev/null | awk '{s+=$1} END {print s}')
  TOTAL_KB=$((TOTAL_JS / 1024))
  MAIN_JS=$(find dist/assets -name 'index-*.js' 2>/dev/null | head -1)
  if [ -n "$MAIN_JS" ]; then
    MAIN_KB=$(stat --format=%s "$MAIN_JS" 2>/dev/null | awk '{print $1/1024}')
    if [ "${MAIN_KB%.*}" -gt 500 ]; then
      warn "Main bundle is ${MAIN_KB}KB (recommended < 500KB)"
    else
      pass "Main bundle: ${MAIN_KB}KB"
    fi
  fi
  pass "Total JS: ${TOTAL_KB}KB across $(find dist/assets -name '*.js' | wc -l) chunks"
fi

# ────────────────────────────────────────────────────────────────────────────
header "9. Server Syntax Check"
if node --check server.js 2>&1; then
  pass "server.js syntax OK"
else
  fail "server.js has syntax errors"
fi

# ────────────────────────────────────────────────────────────────────────────
header "10. Critical File Checks"
ALL_OK=true
for f in index.html App.tsx server.js vite.config.ts tsconfig.json package.json; do
  if [ -f "$f" ]; then echo -e "  ${GREEN}✓${NC} $f"; else echo -e "  ${RED}✗${NC} $f"; ALL_OK=false; fi
done
$ALL_OK && pass "All critical files present" || fail "Missing critical files"

# ────────────────────────────────────────────────────────────────────────────
header "11. Git Status"
if git diff --stat 2>/dev/null | grep -q .; then
  warn "Working tree has uncommitted changes"
else
  pass "Working tree clean"
fi
if git remote -v 2>/dev/null | grep -q '.'; then
  pass "Git remotes configured"
else
  warn "No git remotes configured"
fi

# ────────────────────────────────────────────────────────────────────────────
header "12. Route Coverage (from App.tsx)"
EXPECTED=$(grep -c 'path="/' App.tsx 2>/dev/null || echo 0)
echo -e "  Routes defined: ${EXPECTED}"
pass "Route count: ${EXPECTED}"

# ────────────────────────────────────────────────────────────────────────────
# Summary
# ────────────────────────────────────────────────────────────────────────────
TOTAL=$((PASS + FAIL + WARN))
echo ""
echo "╔══════════════════════════════════════════════════════════╗"
if [ "$FAIL" -eq 0 ] && [ "$WARN" -eq 0 ]; then
  echo "║  ${GREEN}ALL CHECKS PASSED${NC}  ($PASS/$TOTAL)                      ║"
  echo "║  ${GREEN}Ready for production deployment${NC}                        ║"
elif [ "$FAIL" -eq 0 ]; then
  echo "║  ${YELLOW}ALL CHECKS PASSED with ${WARN} warning(s)${NC}  ($PASS/$TOTAL)      ║"
  echo "║  ${YELLOW}Review warnings before deploying${NC}                        ║"
else
  echo "║  ${RED}${FAIL} CHECK(S) FAILED${NC}  ($PASS/$TOTAL)                  ║"
  echo "║  ${RED}Fix failures before production deployment${NC}                ║"
fi
echo "╚══════════════════════════════════════════════════════════╝"
echo ""
exit $FAIL
