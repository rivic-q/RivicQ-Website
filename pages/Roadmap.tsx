import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';

const phases = [
  { phase: 'Q3 2026', title: 'CloudHSM GA + QBOM v1.0', items: ['FIPS 140-3 certification complete', 'AWS / Azure marketplace listing', 'Enterprise multi-tenant EaaS', 'QBOM specification v1.0 release'] },
  { phase: 'Q4 2026', title: 'SDK v1.0 + RQSP Beta', items: ['SDK stable release (Python, Go, Rust, Java, Node)', 'CLI tooling GA with QBOM scan', 'RQSP protocol beta (TLS 1.3 extension)', 'CBOM+QBOM GitHub Actions marketplace'] },
  { phase: 'Q1 2027', title: 'RQSP v1.0 + EaaS GA', items: ['RQSP protocol specification v1.0', 'TLS 1.3 hybrid PQ extension RFC', 'Reference implementation audit', 'EaaS global region deployment'] },
  { phase: 'H2 2027', title: 'Platform GA + US Market', items: ['Full encryption platform commercial launch', 'SOC 2 Type II certification', 'US market entry (HSM + EaaS)', 'ISO 27001 certification'] },
];

export default function Roadmap() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <SectionHeader
        title="Roadmap"
        subtitle="Encryption platform development milestones and commercial launch timeline."
        badge={<Badge variant="encrypt">Encryption Timeline</Badge>}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {phases.map(p => (
          <div key={p.phase} style={{ border: '1px solid var(--rq-border)', borderRadius: 10, padding: 20 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: 'var(--rq-encrypt)', marginBottom: 4 }}>{p.phase}</div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, margin: '0 0 8px' }}>{p.title}</h3>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {p.items.map(item => (
                <li key={item} style={{ fontSize: '0.85rem', color: 'var(--rq-muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--rq-muted)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
