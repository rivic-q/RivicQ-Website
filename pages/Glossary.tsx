import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { glossary } from '../data/glossary';

export default function Glossary() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <SectionHeader
        title="Glossary"
        subtitle="Terms and definitions for post-quantum cryptography and quantum-safe infrastructure."
        badge={<Badge variant="blue">Reference</Badge>}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {glossary.map(entry => (
          <div key={entry.term} style={{ border: '1px solid var(--rq-border)', borderRadius: 8, padding: 16 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, color: 'var(--rq-blue)', fontSize: '0.85rem', marginBottom: 4 }}>{entry.term}</div>
            <p style={{ color: 'var(--rq-muted)', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>{entry.definition}</p>
            {entry.related && (
              <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
                {entry.related.map(r => (
                  <span key={r} style={{
                    padding: '1px 6px', borderRadius: 3, fontSize: '0.7rem',
                    background: 'rgba(14,165,233,0.1)', color: 'var(--rq-blue)',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>{r}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
