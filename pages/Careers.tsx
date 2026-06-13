import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { CTABlock } from '../components/CTABlock';
import QuantumCircuit from '../components/QuantumCircuit';

const roles = [
  { title: 'PQC Encryption Engineer', location: 'Berlin / Remote', type: 'Full-time', desc: 'Implement NIST PQC encryption algorithms (ML-KEM, ML-DSA), contribute to CBOM+QBOM Scanner, and build our CloudHSM integration layer. Rust/Python/Go.' },
  { title: 'HSM Firmware Engineer', location: 'Berlin', type: 'Full-time', desc: 'Develop FIPS 140-3 Level 3 firmware for CloudHSM. Side-channel analysis, QRNG integration, and PKCS#11 implementation.' },
  { title: 'Cryptographic Software Engineer', location: 'Berlin / Remote', type: 'Full-time', desc: 'Build and maintain our encryption SDK language bindings. Deep knowledge of PQC primitives, AES, and secure coding practices.' },
  { title: 'Compliance Engineer (Encryption)', location: 'Berlin', type: 'Full-time', desc: 'DORA/NIS2 encryption compliance automation. Build tools for cryptographic gap analysis, QBOM generation, and policy management.' },
];

export default function Careers() {
  return (
    <div style={{ position: 'relative' }}>
      <QuantumCircuit complexity={4} color="var(--rq-accent)" />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px', position: 'relative', zIndex: 1 }}>
        <SectionHeader
        title="Careers"
        subtitle="Build the post-quantum encryption future. PQC engineers, HSM firmware engineers, and encryption compliance engineers — Berlin and remote."
        badge={<Badge variant="encrypt">Encryption Team · Hiring</Badge>}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {roles.map(r => (
          <div key={r.title} style={{ border: '1px solid var(--rq-border)', borderRadius: 10, padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, margin: 0 }}>{r.title}</h3>
              <Badge variant="encrypt">{r.type}</Badge>
            </div>
            <div style={{ color: 'var(--rq-muted)', fontSize: '0.8rem', marginBottom: 8 }}>{r.location}</div>
            <p style={{ color: 'var(--rq-muted)', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>{r.desc}</p>
          </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', color: 'var(--rq-muted)', fontSize: '0.85rem', marginTop: 24 }}>
        No open roles match your profile? <a href="mailto:hello@rivicq.de" style={{ color: 'var(--rq-encrypt)' }}>Send us your CV anyway</a>.
      </p>
      <div style={{ marginTop: 20 }}>
        <CTABlock title="Join RivicQ's Encryption Team" text="Send your application to hello@rivicq.de with the role in the subject line." label="Apply Now" href="mailto:hello@rivicq.de" external />
      </div>
      </div>
    </div>
  );
}
