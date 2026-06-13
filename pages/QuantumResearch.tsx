import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { CTABlock } from '../components/CTABlock';

export default function QuantumResearch() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px' }}>
      <SectionHeader
        title="Quantum Research & R&D"
        subtitle="Active research areas: PQC encryption algorithms, HSM side-channel analysis, QRNG integration, hybrid PQ protocols, and QBOM formal specification."
        badge={<Badge variant="encrypt">Encryption Research</Badge>}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 20 }}>
        {[
          { title: 'Side-Channel Analysis of PQC', desc: 'Timing and power analysis of NIST PQC encryption implementations (ML-KEM, ML-DSA). Constant-time verification for FIPS 140-3 certification.' },
          { title: 'QRNG-HSM Integration', desc: 'Quantum random number generator entropy source integration for FIPS 140-3 HSM. Certified entropy for ML-KEM key generation.' },
          { title: 'Hybrid PQ+Classical Protocols', desc: 'Dual-key derivation combining classical (X25519) and PQ (ML-KEM) in a single handshake. Backward-compatible TLS 1.3 extension.' },
          { title: 'QBOM Formal Specification', desc: 'Extending CycloneDX 1.6 for quantum vulnerability scoring. Q-score algorithm design, Shor/Grover risk mapping, and automated remediation prioritization.' },
          { title: 'HSM Post-Quantum Migration', desc: 'FIPS 140-3 HSM firmware upgrade path for PQC algorithms. Key lifecycle management for hybrid PQ+classical environments.' },
          { title: 'Encryption-as-a-Service Architecture', desc: 'Scalable multi-tenant EaaS with HSM-backed key isolation. Performance benchmarking of PQ encryption vs classical.' },
        ].map(r => (
          <div key={r.title} style={{ border: '1px solid var(--rq-border)', borderRadius: 10, padding: 20 }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', fontWeight: 700, margin: '0 0 6px' }}>{r.title}</h3>
            <p style={{ color: 'var(--rq-muted)', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>{r.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 40 }}>
        <CTABlock title="Research Collaboration" text="Academic and industry research partnerships in PQC encryption and HSM security welcome." label="Contact Research Team" href="/enterprise" />
      </div>
    </div>
  );
}
