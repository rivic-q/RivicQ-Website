import { Badge } from './Badge';

export function MilestoneTimeline({ items }: {
  items: { date: string; label: string; highlight?: boolean }[];
}) {
  return (
    <div style={{ position: 'relative', paddingLeft: 24 }}>
      <div style={{
        position: 'absolute', left: 7, top: 4, bottom: 4, width: 2,
        background: 'var(--rq-border)',
      }} />
      {items.map((m, i) => (
        <div key={i} style={{
          position: 'relative', paddingBottom: i < items.length - 1 ? 20 : 0, paddingLeft: 20,
        }}>
          <div style={{
            position: 'absolute', left: -17, top: 4, width: 12, height: 12, borderRadius: '50%',
            background: m.highlight ? 'var(--rq-blue)' : 'var(--rq-bg)',
            border: `2px solid ${m.highlight ? 'var(--rq-blue)' : 'var(--rq-border)'}`,
          }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: 'var(--rq-muted)' }}>{m.date}</span>
            <span style={{ fontSize: '0.9rem' }}>{m.label}</span>
            {m.highlight && <Badge>Now</Badge>}
          </div>
        </div>
      ))}
    </div>
  );
}
