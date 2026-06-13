export function Terminal({ children }: { children: string }) {
  return (
    <div style={{
      background: 'var(--rq-code-bg)', border: '1px solid var(--rq-border)',
      borderRadius: 8, padding: '16px 20px', fontFamily: "'JetBrains Mono', monospace",
      fontSize: '0.8rem', color: 'var(--rq-blue)', lineHeight: 1.7, overflowX: 'auto',
    }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f' }} />
      </div>
      <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>{children}</pre>
    </div>
  );
}
