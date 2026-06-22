import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { Terminal } from '../components/Terminal';
import { CTABlock } from '../components/CTABlock';
import AnimatedBackground from '../components/AnimatedBackground';

const specs = [
  { label: 'FIPS 140-3 Level 3', value: 'Physical + logical tamper protection', badge: 'In Certification' },
  { label: 'ML-KEM-768/1024', value: 'NIST FIPS 203 key encapsulation', badge: 'PQ-Ready' },
  { label: 'AES-256-GCM', value: 'Bulk encryption', badge: 'PQ-Safe' },
  { label: 'Hybrid KDF', value: 'X25519 + ML-KEM dual-key derivation', badge: 'PQ-Ready' },
  { label: 'API Protocols', value: 'REST / gRPC / PKCS#11 / KMIP', badge: 'Enterprise' },
  { label: 'QRNG Entropy', value: 'Quantum random number generation', badge: 'Air-Gapped' },
  { label: 'Audit Log', value: 'Immutable HSM-backed audit trail', badge: 'Compliance' },
  { label: 'Deployment', value: 'On-prem / Cloud vHSM / Hybrid', badge: 'Flexible' },
];

const encryptionFlow = [
  { step: '01', title: 'Key Generation', desc: 'QRNG entropy → FIPS 140-3 DRBG → ML-KEM key pair' },
  { step: '02', title: 'Encryption Request', desc: 'Client sends plaintext + algorithm to HSM via REST/gRPC' },
  { step: '03', title: 'HSM Boundary', desc: 'Key never leaves hardware. Encryption inside tamper-protected zone' },
  { step: '04', title: 'Ciphertext + Metadata', desc: 'Returns ciphertext, key_id, algorithm, Q-score, audit_id' },
  { step: '05', title: 'Audit Logging', desc: 'Every operation logged to immutable HSM audit chain' },
];

export default function CloudHSM() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <AnimatedBackground variant="mesh" intensity="low" gradient={['#0E141B', '#1A56DB', '#0BAA8A']} />
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '80px 24px 60px', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="CloudHSM"
          subtitle="FIPS 140-3 Level 3 virtual HSM with post-quantum Encryption-as-a-Service (EaaS). ML-KEM-768, AES-256-GCM, hybrid key derivation, and immutable audit logging — deployed in minutes."
          badge={<Badge variant="encrypt">Enterprise · Beta</Badge>}
          align="left"
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12, marginTop: 32 }}>
          {specs.map(s => (
            <div key={s.label} style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12, padding: 20, backdropFilter: 'blur(8px)',
            }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#64748B', marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FFFFFF', marginBottom: 8 }}>{s.value}</div>
              <Badge variant="primary">{s.badge}</Badge>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56 }}>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748B', marginBottom: 20 }}>Encryption Flow</h3>
          <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap' }}>
            {encryptionFlow.map((ef, i) => (
              <div key={ef.step} style={{
                flex: '1 1 180px', border: '1px solid rgba(255,255,255,0.08)',
                borderLeft: i === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                padding: 24, background: 'rgba(255,255,255,0.03)',
                position: 'relative',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#3B82F6', fontFamily: "'JetBrains Mono', monospace", marginBottom: 8 }}>{ef.step}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', marginBottom: 6 }}>{ef.title}</div>
                <div style={{ fontSize: '0.78rem', color: '#94A3B8', lineHeight: 1.5 }}>{ef.desc}</div>
                {i < encryptionFlow.length - 1 && (
                  <div style={{ position: 'absolute', top: '50%', right: -8, width: 16, height: 16, borderRadius: '50%', background: '#1A56DB', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateY(-50%)', zIndex: 2 }}>
                    <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 28 }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: 6 }}>Telecom & 5G</h3>
            <p style={{ fontSize: '0.82rem', color: '#94A3B8', lineHeight: 1.7, margin: '0 0 14px' }}>
              Manage encryption keys for 5G core networks, secure SIM/eSIM provisioning, and meet ETSI QSC 001 standards.
            </p>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['5G Core', 'SIM/eSIM', 'ETSI QSC', 'Network Slicing'].map(t => (
                <span key={t} style={{ padding: '2px 8px', borderRadius: 4, fontSize: '0.7rem', background: 'rgba(37,99,235,0.1)', color: '#60A5FA', fontFamily: "'JetBrains Mono', monospace" }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 28 }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: 6 }}>EaaS API Demo</h3>
            <Terminal>{`curl -X POST https://api.rivicq.de/v1/encrypt \\
  -H "Authorization: Bearer $KEY" \\
  -d '{"plaintext": "c2Vuc2l0aXZlIGRhdGE=", "algorithm": "ML-KEM-768"}'`}</Terminal>
          </div>
        </div>

        <div style={{ marginTop: 56 }}>
          <CTABlock
            title="Deploy CloudHSM"
            text="Get early access to our beta. On-prem or cloud deployment with full EaaS API."
            label="Request Beta Access"
            href="/enterprise"
          />
        </div>
      </div>
    </div>
  );
}
