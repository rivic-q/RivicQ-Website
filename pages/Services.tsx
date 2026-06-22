import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { CTABlock } from '../components/CTABlock';
import QuantumCircuit from '../components/QuantumCircuit';
import AnimatedBackground from '../components/AnimatedBackground';

const serviceList = [
  {
    title: 'CSPM+QBOM Encryption Audit',
    desc: 'Full cryptographic inventory with quantum vulnerability scoring. Every key, cert, and encryption algorithm Q-score assessed across codebases, containers, and cloud VPCs.',
    tags: ['CSPM', 'QBOM', 'Audit'],
  },
  {
    title: 'PQC Encryption Migration',
    desc: 'Gap analysis, priority mapping, and phased encryption migration roadmap aligned to NIST FIPS 203/204/205 and DORA/NIS2 regulatory deadlines.',
    tags: ['PQC', 'NIST', 'Migration'],
  },
  {
    title: 'HSM Deployment & EaaS Integration',
    desc: 'On-prem or cloud FIPS 140-3 HSM deployment with PKCS#11 integration. Encryption-as-a-Service API setup with ML-KEM-768, AES-256-GCM, and hybrid key derivation. QRNG entropy source integration for quantum-grade randomness.',
    tags: ['HSM', 'FIPS 140-3', 'EaaS', 'QRNG'],
    highlight: true,
  },
  {
    title: 'DevSecOps Encryption Pipeline',
    desc: 'CI/CD-native cryptographic security. CSPM generation in build pipelines, automated PQC key rotation, Q-score gating for deployments, and HSM-backed secrets management integrated with GitHub Actions, GitLab CI, and Jenkins.',
    tags: ['DevSecOps', 'CI/CD', 'CSPM', 'Pipeline'],
    highlight: true,
  },
  {
    title: 'QBOM Risk Scoring',
    desc: 'Quantum vulnerability scoring for every cryptographic asset. Automated Q-score reporting with prioritized remediation based on data sensitivity and exposure window.',
    tags: ['QBOM', 'Risk', 'Q-score'],
  },
  {
    title: 'Compliance Audit Prep',
    desc: 'DORA / NIS2 encryption readiness assessment. Cryptographic policy documentation, CSPM+QBOM generation, and audit evidence package for regulators.',
    tags: ['DORA', 'NIS2', 'Compliance'],
  },
  {
    title: 'HSM Engineering Workshops',
    desc: 'Hands-on: HSM key lifecycle management, PQC encryption primitives, hybrid TLS migration, QRNG integration, and DevSecOps pipeline hardening.',
    tags: ['HSM', 'Workshop', 'Training'],
  },
];

export default function Services() {
  return (
    <div style={{ position: 'relative' }}>
      <AnimatedBackground variant="mesh" intensity="low" gradient={['#2563EB', '#3B82F6', '#60A5FA']} />
      <QuantumCircuit complexity={6} />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Professional Services"
          subtitle="From encryption audit and HSM deployment to DevSecOps pipeline integration. Delivered by engineers who build the technology."
          badge={<Badge variant="encrypt">Encryption Services</Badge>}
        />

        {/* HSM + DevSecOps highlight strip */}
        <div style={{
          display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap',
          padding: 16, borderRadius: 10, border: '1px solid rgba(37,99,235,0.2)',
          background: 'var(--rq-encrypt-dim)', animation: 'encryptPulse 3s ease-in-out infinite',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '6px 14px',
            borderRadius: 6, background: 'rgba(37,99,235,0.1)',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--rq-encrypt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--rq-encrypt)' }}>FIPS 140-3 HSM</span>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '6px 14px',
            borderRadius: 6, background: 'rgba(37,99,235,0.1)',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--rq-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--rq-blue)' }}>DevSecOps Pipeline</span>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '6px 14px',
            borderRadius: 6, background: 'rgba(5,150,105,0.1)',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--rq-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--rq-success)' }}>Quantum-Ready</span>
          </div>
        </div>

        {/* Services with stagger animation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {serviceList.map((s, i) => (
            <div key={s.title} style={{
              border: `1px solid ${s.highlight ? 'rgba(37,99,235,0.25)' : 'var(--rq-border)'}`,
              borderRadius: 10, padding: 20,
              background: s.highlight ? 'linear-gradient(135deg, var(--rq-encrypt-dim) 0%, transparent 100%)' : 'transparent',
              transition: 'border-color 200ms, transform 200ms, box-shadow 200ms',
              animation: 'fadeInUp 0.5s ease-out forwards',
              animationDelay: `${i * 0.1}s`,
              opacity: 0,
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--rq-encrypt)';
                e.currentTarget.style.transform = 'translateX(4px)';
                e.currentTarget.style.boxShadow = '-4px 0 12px rgba(37,99,235,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = s.highlight ? 'rgba(37,99,235,0.25)' : 'var(--rq-border)';
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                {s.highlight && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="var(--rq-encrypt)" style={{ animation: 'gatePulse 2s ease-in-out infinite' }}>
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                )}
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700,
                  margin: 0, color: s.highlight ? 'var(--rq-encrypt)' : 'var(--rq-text)',
                }}>{s.title}</h3>
              </div>
              <p style={{ color: 'var(--rq-muted)', fontSize: '0.85rem', margin: '0 0 10px', lineHeight: 1.6 }}>{s.desc}</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {s.tags.map(t => (
                  <span key={t} style={{
                    padding: '2px 8px', borderRadius: 4, fontSize: '0.7rem',
                    background: s.highlight ? 'rgba(37,99,235,0.1)' : 'rgba(37,99,235,0.06)',
                    color: s.highlight ? 'var(--rq-encrypt)' : 'var(--rq-muted)',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40 }}>
          <CTABlock title="Need a Custom Encryption Engagement?" text="Contact our team for scoping, pricing, and availability. Pre-seed and pilot pricing available for qualifying enterprises." label="Contact Us" href="/enterprise" />
        </div>
      </div>
    </div>
  );
}
