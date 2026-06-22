import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { CTABlock } from '../components/CTABlock';

const sections = [
  { title: 'Encryption Whitepapers', items: ['Quantum-Safe Key Management Architecture', 'QBOM: Quantum Bill of Materials Specification v1.0', 'Hybrid PQC Encryption in TLS 1.3', 'HSM-Backed Encryption-as-a-Service Design'] },
  { title: 'Technical Docs', items: ['CSPM+QBOM Scanner CLI Reference', 'CloudHSM EaaS API Documentation', 'RQSP Protocol Specification', 'SDK Encryption Quickstart Guides'] },
  { title: 'Open Source', items: ['CSPM Scanner (Apache 2.0)', 'QBOM CycloneDX Extension', 'PQC Encryption Algorithm Benchmarks', 'HSM Integration Examples'] },
];

export default function Resources() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px' }}>
      <SectionHeader
        title="Resources & Library"
        subtitle="Whitepapers, technical documentation, open-source encryption tools, and regulatory guides."
        badge={<Badge variant="encrypt">Encryption Library</Badge>}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 20 }}>
        {sections.map(s => (
          <div key={s.title} style={{ border: '1px solid var(--rq-border)', borderRadius: 10, padding: 20 }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', fontWeight: 700, margin: '0 0 12px', color: 'var(--rq-encrypt)' }}>{s.title}</h3>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {s.items.map(item => (
                <li key={item} style={{ fontSize: '0.85rem', color: 'var(--rq-muted)' }}>→ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20 }}>
        <CTABlock title="Get the CSPM+QBOM Scanner" text="Open-source. Apache 2.0. Run it in 5 minutes." label="GitHub →" href="https://github.com/rivicq/cbom" external />
      </div>
    </div>
  );
}
