import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { Shield, Signal, Radio, Lock, Cloud, Server, Globe, Users, CheckCircle2, ArrowRight } from 'lucide-react';

const telecomFeatures = [
  {
    icon: Signal,
    title: '5G Core Encryption',
    desc: 'FIPS 140-3 HSM-backed key management for 5G core networks. Subscriber authentication, network slicing encryption, and signaling integrity with PQC-ready hybrid key derivation.',
  },
  {
    icon: Shield,
    title: 'SIM/eSIM Key Management',
    desc: 'End-to-end encryption key lifecycle for SIM and eSIM provisioning. OTA credential injection with quantum-safe wrapping and hardware-backed key storage.',
  },
  {
    icon: Radio,
    title: 'ETSI QSC Compliance',
    desc: 'Full alignment with ETSI GR QSC 001-005 standards for post-quantum cryptography migration in telecommunications. Hybrid PQC+classical transport for legacy interoperability.',
  },
  {
    icon: Lock,
    title: 'Network Slicing Security',
    desc: 'Per-slice encryption domain isolation with independent key hierarchies. PQC-secured slice authentication and inter-slice communication with ML-KEM encapsulation.',
  },
  {
    icon: Server,
    title: 'On-Prem & Edge HSM',
    desc: 'Deploy CloudHSM at network edge for low-latency key operations. vHSM instances in MEC environments with FIPS 140-3 Level 3 protection and local entropy injection.',
  },
  {
    icon: Cloud,
    title: 'Hybrid Cloud vHSM',
    desc: 'Virtual HSM clusters in cloud VPCs with hardware root of trust bridging. Active discovery agents for automated key rotation and compliance reporting.',
  },
];

const useCases = [
  { label: 'Subscriber Privacy', desc: 'A5/3, A5/4 encryption with PQC migration path for 6G readiness' },
  { label: 'Signaling Integrity', desc: 'MAP, CAP, SIGTRAN encryption with ML-DSA signatures' },
  { label: 'Roaming Security', desc: 'Inter-operator key exchange with hybrid PQC tunnels' },
  { label: 'IoT Device Auth', desc: 'Mass-scale device identity with PQC certificate chains' },
  { label: 'Fixed Access', desc: 'Fiber/5G FWA encryption with unified key management' },
];

const standards = [
  'ETSI GR QSC 001-005', '3GPP SA3', 'FIPS 203 (ML-KEM)',
  'FIPS 204 (ML-DSA)', 'NIST SP 800-56B', 'GSMA FS.07',
  'IETF TLS 1.3', 'PKCS#11', 'CNSA 2.0',
];

export default function Telecom() {
  return (
    <div style={{ padding: '80px 24px 60px', position: 'relative' }}>
      <div className="page-container" style={{ maxWidth: 1000 }}>
        <SectionHeader
          title="Telecommunications Encryption"
          subtitle="Quantum-safe encryption infrastructure for 5G core networks, SIM/eSIM provisioning, and ETSI QSC-compliant PQC migration. HSM-backed key management for telecom operators and infrastructure providers."
          badge={<Badge variant="primary">Telecom · 5G · ETSI QSC</Badge>}
        />

        {/* Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: 16,
          marginBottom: 60,
        }} className="md:grid-cols-2 lg:grid-cols-3">
          {telecomFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="card card-hover" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: 'var(--rq-primary-dim)', color: 'var(--rq-primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={18} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{f.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--rq-text-secondary)', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Use Cases */}
        <div style={{ marginBottom: 60 }}>
          <div style={{ marginBottom: 24 }}>
            <Badge variant="accent">Use Cases</Badge>
            <h2 style={{
              fontFamily: 'var(--rq-font-heading)', fontSize: '1.3rem', fontWeight: 700,
              marginTop: 10, letterSpacing: '-0.02em',
            }}>Telecom Encryption Use Cases</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {useCases.map((u, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 20px', background: 'var(--rq-white)',
                border: '1px solid var(--rq-border)', borderRadius: 10,
              }}>
                <CheckCircle2 size={16} style={{ color: 'var(--rq-primary)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{u.label}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--rq-text-secondary)' }}>{u.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Standards */}
        <div style={{
          background: 'var(--rq-primary-dim)', borderRadius: 16, padding: 28,
          border: '1px solid rgba(26,86,219,0.15)', marginBottom: 60,
        }}>
          <h3 style={{
            fontFamily: 'var(--rq-font-heading)', fontSize: '1rem', fontWeight: 700,
            marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <Shield size={16} /> Standards & Compliance
          </h3>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {standards.map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>

        {/* Architecture note */}
        <div className="card card-accent" style={{ padding: 28, borderColor: 'var(--rq-primary)' }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{
              width: 48, height: 48, borderRadius: 12,
              background: 'var(--rq-primary-dim)', color: 'var(--rq-primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <Globe size={22} />
            </div>
            <div style={{ flex: 1, minWidth: 250 }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 6 }}>Deployment Models</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--rq-text-secondary)', lineHeight: 1.7, margin: '0 0 10px' }}>
                RivicQ CloudHSM deploys on-prem at the network edge, as a virtual HSM in cloud VPCs,
                or as a hybrid split-key architecture. All deployments include FIPS 140-3 Level 3
                hardware protection, QRNG entropy injection, and automated PQC key rotation.
              </p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['On-Prem Edge', 'Cloud vHSM', 'Hybrid Split-Key', 'Multi-Region'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
