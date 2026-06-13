import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { AlgoTable } from '../components/AlgoTable';
import { Terminal } from '../components/Terminal';
import { CTABlock } from '../components/CTABlock';
import AnimatedBackground from '../components/AnimatedBackground';

const specs: { label: string; value: string; note: string; highlight?: boolean }[] = [
  { label: 'ML-KEM-768', value: 'Key encapsulation — NIST FIPS 203', note: 'PQ-ready', highlight: true },
  { label: 'X25519', value: 'Classical ECDH key agreement', note: 'Hybrid', highlight: false },
  { label: 'AES-256-GCM', value: 'Bulk encryption (classical symmetric)', note: 'PQ-safe', highlight: true },
  { label: 'Hybrid Derivation', value: 'Dual-key KDF: ML-KEM ss + X25519 ss', note: 'Proprietary', highlight: true },
  { label: 'TLS 1.3 Extension', value: 'Native hybrid PQ ciphersuites', note: 'Draft', highlight: false },
  { label: 'Audit Chain', value: 'Immutable HSM-backed per-session log', note: 'DORA/NIS2', highlight: false },
];

export default function RQSP() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px', position: 'relative' }}>
      <AnimatedBackground variant="crypto" intensity="low" gradient={['#2563EB', '#3B82F6', '#60A5FA']} />
      <SectionHeader
        title="RQSP Protocol"
        subtitle="RivicQ Security Protocol — hybrid post-quantum transport encryption. Dual-key derivation with ML-KEM-768 encapsulation and AES-256-GCM bulk encryption. Native TLS 1.3 extension."
        badge={<Badge variant="encrypt">Proprietary · Encryption</Badge>}
        align="left"
      />
      <AlgoTable data={specs} />
      <div style={{ marginTop: 32 }}>
        <Terminal>{`# RQSP hybrid handshake (pseudo)
client_hello + PQ_kem_ciphersuites
server_hello + ML-KEM-768_pk + X25519_pk
client: encap(ML-KEM-768_pk) → hybrid_ss
client: X25519(ss) → dual_key
server: decap(ML-KEM-768_ct) → hybrid_ss
server: X25519(ss) → dual_key
→ AES-256-GCM tunnel established`}</Terminal>
      </div>
      <div style={{ marginTop: 40 }}>
        <CTABlock
          title="Integrate RQSP Encryption"
          text="Available as a TLS 1.3 extension and standalone protocol. Contact us for integration docs."
          label="Request Documentation"
          href="/enterprise"
        />
      </div>
    </div>
  );
}
