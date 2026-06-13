export function ComplianceBadge({ text }: { text: string }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '3px 10px', borderRadius: 4,
      background: 'rgba(16,185,129,0.1)', color: 'var(--rq-success)',
      border: '1px solid rgba(16,185,129,0.25)',
      fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem',
      fontWeight: 500, letterSpacing: '0.03em',
    }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      {text}
    </span>
  );
}
