import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { CTABlock } from '../components/CTABlock';
import AnimatedBackground from '../components/AnimatedBackground';

const tracks = [
  {
    title: 'PQC Encryption Fundamentals',
    level: 'Beginner',
    items: [
      'Introduction to Post-Quantum Cryptography',
      'NIST PQC Standards: ML-KEM, ML-DSA, SLH-DSA',
      'Harvest Now, Decrypt Later — Why It Matters',
      'Quantum-Safe vs Classical Encryption',
    ],
  },
  {
    title: 'CSPM & Cryptographic Discovery',
    level: 'Intermediate',
    items: [
      'Cryptographic Security Posture Management Overview',
      'Running Your First CSPM Scan',
      'Understanding QBOM and Q-Score',
      'CSPM+QBOM Integration in CI/CD',
    ],
  },
  {
    title: 'HSM & Encryption Engineering',
    level: 'Advanced',
    items: [
      'FIPS 140-3 Hardware Security Modules',
      'PKCS#11 Integration Patterns',
      'Encryption-as-a-Service Architecture',
      'Side-Channel Analysis Fundamentals',
    ],
  },
  {
    title: 'Compliance & Regulation',
    level: 'Intermediate',
    items: [
      'DORA — Digital Operational Resilience Act',
      'NIS2 — Network and Information Security',
      'NIST PQC Migration Deadlines',
      'FDA/CYBER Medical Device Requirements',
    ],
  },
];

export default function Learning() {
  return (
    <div style={{ position: 'relative' }}>
      <AnimatedBackground variant="mesh" intensity="medium" gradient={['#1A56DB', '#2563EB', '#3B82F6']} />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Learning Center"
          subtitle="Guided learning tracks covering PQC encryption fundamentals, cryptographic discovery, HSM engineering, and regulatory compliance."
          badge={<Badge variant="encrypt">Education & Training</Badge>}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 20 }}>
          {tracks.map(track => (
            <div key={track.title} style={{
              border: '1px solid var(--rq-border)', borderRadius: 12, padding: 24,
              background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(4px)',
              transition: 'border-color 200ms, transform 200ms',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--rq-encrypt)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rq-border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, margin: 0 }}>{track.title}</h3>
                <Badge variant={track.level === 'Beginner' ? 'blue' : track.level === 'Intermediate' ? 'encrypt' : 'amber'}>{track.level}</Badge>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {track.items.map(item => (
                  <li key={item} style={{ fontSize: '0.85rem', color: 'var(--rq-muted)', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ color: 'var(--rq-encrypt)', fontSize: '0.7rem', marginTop: 4 }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <CTABlock
            title="Partner With Us for Training"
            text="Custom workshops and training programs for enterprise teams, system integrators, and academic institutions."
            label="Request Training"
            href="/enterprise"
          />
        </div>
      </div>
    </div>
  );
}
