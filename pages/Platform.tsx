import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { CTABlock } from '../components/CTABlock';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Platform() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px', position: 'relative' }}>
      <AnimatedBackground variant="hex" intensity="low" gradient={['#2563EB', '#3B82F6', '#60A5FA']} />
      <SectionHeader
        title="Platform Architecture"
        subtitle="End-to-end quantum-safe encryption platform. From cryptographic discovery (CBOM+QBOM) to HSM-backed key management and hybrid PQC transport."
        badge={<Badge variant="encrypt">Encryption Architecture</Badge>}
        align="left"
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginTop: 20 }}>
        {[
          { layer: 'Discovery & Risk', items: ['CBOM Scanner', 'QBOM Q-score analysis', 'GitHub Actions CI/CD', 'Cloud VPC scanning'] },
          { layer: 'HSM Encryption Engine', items: ['CloudHSM (FIPS 140-3)', 'ML-KEM-768 key exchange', 'AES-256-GCM / ChaCha20', 'QRNG entropy source'] },
          { layer: 'Transport Security', items: ['RQSP Protocol (hybrid PQC)', 'TLS 1.3 hybrid extension', 'mTLS PQ certificate chains', 'gRPC interceptor'] },
          { layer: 'EaaS & SDK', items: ['Encryption-as-a-Service API', 'SDK (Python, Go, Rust, Java, Node)', 'REST / gRPC endpoints', 'CI/CD integration'] },
        ].map(section => (
          <div key={section.layer} style={{ border: '1px solid var(--rq-border)', borderRadius: 10, padding: 20 }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', fontWeight: 700, margin: '0 0 8px', color: 'var(--rq-encrypt)' }}>{section.layer}</h3>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {section.items.map(item => (
                <li key={item} style={{ color: 'var(--rq-muted)', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--rq-text)', marginRight: 6 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 40 }}>
        <CTABlock title="Explore the Encryption Platform" text="Full architecture documentation and deployment guides available." label="View Docs" href="/enterprise" />
      </div>
    </div>
  );
}
