import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { CTABlock } from '../components/CTABlock';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Platform() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--rq-bg)', padding: '80px 24px 60px' }}>
      <AnimatedBackground variant="circuit" intensity="medium" gradient={['#2563EB', '#3B82F6', '#60A5FA']} />
      <div className="page-container" style={{ maxWidth: 1000, position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Platform Architecture"
          subtitle="End-to-end quantum-safe encryption platform. From cryptographic discovery (CSPM+QBOM) to HSM-backed key management and hybrid PQC transport."
          badge={<Badge variant="encrypt">Encryption Architecture</Badge>}
          align="left"
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginTop: 32 }}>
          {[
            { layer: 'Discovery & Risk', icon: '🔍', items: ['CSPM Scanner', 'QBOM Q-score analysis', 'GitHub Actions CI/CD', 'Cloud VPC scanning'] },
            { layer: 'HSM Encryption Engine', icon: '🔐', items: ['CloudHSM (FIPS 140-3)', 'ML-KEM-768 key exchange', 'AES-256-GCM / ChaCha20', 'QRNG entropy source'] },
            { layer: 'Transport Security', icon: '🔗', items: ['RQSP Protocol (hybrid PQC)', 'TLS 1.3 hybrid extension', 'mTLS PQ certificate chains', 'gRPC interceptor'] },
            { layer: 'EaaS & SDK', icon: '⚡', items: ['Encryption-as-a-Service API', 'SDK (Python, Go, Rust, Java, Node)', 'REST / gRPC endpoints', 'CI/CD integration'] },
          ].map(section => (
            <div key={section.layer} style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid var(--rq-border)',
              borderRadius: 16, padding: 24, backdropFilter: 'blur(8px)',
              transition: 'all 200ms',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)'; e.currentTarget.style.background = 'rgba(37,99,235,0.05)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rq-border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
            >
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', fontWeight: 700, margin: '0 0 12px', color: '#60A5FA', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: '1rem' }}>{section.icon}</span>
                {section.layer}
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {section.items.map(item => (
                  <li key={item} style={{ color: '#94A3B8', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: '#3B82F6', fontSize: '0.6rem' }}>◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48 }}>
          <CTABlock
            title="Explore the Encryption Platform"
            text="Full architecture documentation and deployment guides available."
            label="View Docs"
            href="/enterprise"
          />
        </div>
      </div>
    </div>
  );
}
