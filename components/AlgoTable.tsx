export function AlgoTable({ data }: {
  data: { label: string; value: string; note?: string; highlight?: boolean }[];
}) {
  return (
    <div style={{
      border: '1px solid var(--rq-border)', borderRadius: 8, overflow: 'hidden',
      fontSize: '0.85rem',
    }}>
      {data.map((row, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px',
          borderBottom: i < data.length - 1 ? '1px solid var(--rq-border)' : 'none',
          background: row.highlight ? 'rgba(37,99,235,0.05)' : 'transparent',
        }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", color: 'var(--rq-blue)', fontWeight: 500, minWidth: 140, fontSize: '0.8rem',
          }}>{row.label}</span>
          <span style={{ color: 'var(--rq-text)' }}>{row.value}</span>
          {row.note && <span style={{ color: 'var(--rq-muted)', fontSize: '0.75rem', marginLeft: 'auto' }}>{row.note}</span>}
        </div>
      ))}
    </div>
  );
}
