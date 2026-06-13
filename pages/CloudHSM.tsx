import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { AlgoTable } from '../components/AlgoTable';
import { Terminal } from '../components/Terminal';
import { CTABlock } from '../components/CTABlock';
import AnimatedBackground from '../components/AnimatedBackground';
import QuantumCircuit from '../components/QuantumCircuit';

const specs: { label: string; value: string; note: string; highlight?: boolean }[] = [
  { label: 'FIPS 140-3 Level 3', value: 'Physical + logical tamper protection', note: 'In certification', highlight: true },
  { label: 'ML-KEM-768/1024', value: 'NIST FIPS 203 key encapsulation', note: 'PQ-ready', highlight: true },
  { label: 'AES-256-GCM', value: 'Bulk encryption (classical)', note: 'PQ-safe', highlight: true },
  { label: 'Hybrid KDF', value: 'X25519 + ML-KEM dual-key derivation', note: 'PQ-ready', highlight: true },
  { label: 'API Protocols', value: 'REST / gRPC / PKCS#11 / KMIP', note: 'Enterprise', highlight: false },
  { label: 'QRNG Entropy', value: 'Quantum random number generation', note: 'Air-gapped', highlight: true },
  { label: 'Audit Log', value: 'Immutable HSM-backed audit trail', note: 'Compliance', highlight: false },
  { label: 'Deployment', value: 'On-prem (physical) / Cloud vHSM / Hybrid', note: 'Flexible', highlight: false },
];

const encryptionFlow: { step: string; action: string; detail: string }[] = [
  { step: '01', action: 'Key Generation', detail: 'QRNG entropy → FIPS 140-3 DRBG → asymmetric key pair (ML-KEM or AES)' },
  { step: '02', action: 'Encryption Request', detail: 'Client sends plaintext + algorithm selector to HSM via REST/gRPC' },
  { step: '03', action: 'HSM Boundary', detail: 'Key never leaves hardware. Encryption occurs inside tamper-protected boundary' },
  { step: '04', action: 'Ciphertext + Metadata', detail: 'Returns ciphertext, key_id, algorithm, Q-score, audit_id' },
  { step: '05', action: 'Audit Logging', detail: 'Every operation logged to immutable HSM audit chain (DORA/NIS2 ready)' },
];

export default function CloudHSM() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px', position: 'relative' }}>
      <QuantumCircuit complexity={5} color="var(--rq-primary)" />
      <AnimatedBackground variant="hex" intensity="low" gradient={['#2563EB', '#3B82F6', '#60A5FA']} />
      <SectionHeader
        title="CloudHSM / vHSM"
        subtitle="FIPS 140-3 Level 3 virtual Hardware Security Module with post-quantum Encryption-as-a-Service (EaaS). ML-KEM-768, AES-256-GCM, hybrid key derivation, and immutable audit logging — deployed in minutes."
        badge={<Badge variant="encrypt">Enterprise · Beta</Badge>}
        align="left"
      />
      <AlgoTable data={specs} />

      {/* Encryption flow diagram */}
      <div style={{ marginTop: 40 }}>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.05rem', fontWeight: 700, marginBottom: 16, color: 'var(--rq-encrypt)' }}>
          Encryption Flow
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {encryptionFlow.map(ef => (
            <div key={ef.step} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '12px 16px', border: '1px solid var(--rq-border)', borderRadius: 8,
              background: 'rgba(37,99,235,0.03)',
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                background: 'var(--rq-encrypt-dim)', color: 'var(--rq-encrypt)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', fontWeight: 700, flexShrink: 0,
              }}>{ef.step}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{ef.action}</div>
                <div style={{ color: 'var(--rq-muted)', fontSize: '0.8rem' }}>{ef.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Telecom Use Case */}
      <div style={{ marginTop: 40 }}>
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.05rem', fontWeight: 700,
          marginBottom: 16, color: 'var(--rq-primary)',
        }}>
          Telecommunications & 5G
        </h3>
        <div className="card card-accent" style={{ padding: 24, borderColor: 'var(--rq-primary)' }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'var(--rq-primary-dim)', color: 'var(--rq-primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 250 }}>
              <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>
                CloudHSM is purpose-built for telecommunications infrastructure. Manage
                encryption keys for 5G core networks, secure SIM/eSIM provisioning pipelines,
                and meet ETSI QSC 001 standards for post-quantum migration. Deploy on-prem
                at network edge or as a virtual HSM in the cloud — with full FIPS 140-3
                Level 3 hardware protection.
              </p>
              <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
                {['5G Core', 'SIM/eSIM', 'ETSI QSC', 'Network Slicing', 'Subscriber Privacy'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal demo */}
      <div style={{ marginTop: 40 }}>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.05rem', fontWeight: 700, marginBottom: 16, color: 'var(--rq-encrypt)' }}>
          EaaS API Demo
        </h3>
        <Terminal>{`# Encrypt with ML-KEM-768 via HSM
curl -X POST https://api.rivicq.de/v1/encrypt \\
  -H "Authorization: Bearer $KEY" \\
  -d '{"plaintext": "c2Vuc2l0aXZlIGRhdGE=", "algorithm": "ML-KEM-768"}'

# Decrypt with HSM key
curl -X POST https://api.rivicq.de/v1/decrypt \\
  -H "Authorization: Bearer $KEY" \\
  -d '{"ciphertext": "...", "key_id": "hsm-7f3a...2b1e"}'`}</Terminal>
      </div>

      <div style={{ marginTop: 40 }}>
        <CTABlock
          title="Deploy CloudHSM"
          text="Get early access to our beta. On-prem or cloud deployment with full EaaS API."
          label="Request Beta Access"
          href="/enterprise"
        />
      </div>
    </div>
  );
}
