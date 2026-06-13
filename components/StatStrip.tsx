export function StatStrip({ items }: {
  items: { value: string; label: string }[];
}) {
  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: 0,
      border: '1px solid var(--rq-border)', borderRadius: 8, overflow: 'hidden',
      background: 'linear-gradient(135deg, rgba(37,99,235,0.02) 0%, rgba(37,99,235,0.02) 100%)',
    }}>
      {items.map((item, i) => (
        <div key={i} style={{
          flex: '1 1 160px', padding: '20px 16px', textAlign: 'center',
          borderRight: i < items.length - 1 ? '1px solid var(--rq-border)' : 'none',
          borderBottom: '1px solid transparent',
          transition: 'background 200ms',
        }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(37,99,235,0.04)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700,
            background: 'linear-gradient(135deg, var(--rq-encrypt), var(--rq-blue))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>{item.value}</div>
          <div style={{ color: 'var(--rq-muted)', fontSize: '0.8rem', marginTop: 2 }}>{item.label}</div>
        </div>
      ))}
    </div>
  );
}
