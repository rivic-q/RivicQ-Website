import { Badge } from '../components/Badge';
import { Target, Shield, Code, BookOpen, Users, Award } from 'lucide-react';

export default function Mission() {
  return (
    <div style={{ padding: '80px 24px 60px' }}>
      <div className="page-container" style={{ maxWidth: 900 }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Badge variant="accent">Our Mission</Badge>
          <h1 style={{
            fontFamily: 'var(--rq-font-heading)',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 700, marginTop: 14, letterSpacing: '-0.03em',
          }}>
            Make PQC Practical
          </h1>
          <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.95rem', maxWidth: 600, margin: '10px auto 0', lineHeight: 1.7 }}>
            Our mission is to make post-quantum cryptography practical, auditable, and deployable — from open-source tooling to FIPS 140-3 hardware.
          </p>
        </div>

        <div style={{ lineHeight: 1.8, color: 'var(--rq-muted)', fontSize: '0.95rem', marginBottom: 48 }}>
          <p style={{ marginBottom: 16 }}>
            RivicQ exists to solve one problem: the world is not ready for quantum decryption, and the migration 
            is too complex for most organizations to tackle alone. We bridge the gap between NIST PQC standards 
            and real-world deployment.
          </p>
          <p style={{ marginBottom: 16 }}>
            We achieve this through three pillars: <strong>discovery</strong> (CSPM+QBOM scanning to know your 
            encryption posture), <strong>hardware security</strong> (FIPS 140-3 CloudHSM for quantum-safe key 
            management), and <strong>migration</strong> (PQC transport protocols and developer SDKs).
          </p>
          <p>
            Everything we build is engineer-to-engineer — designed by security researchers for security teams. 
            We are committed to open-source where possible, standards-driven development, and regulatory compliance 
            by default. We measure our success by how many organizations we help migrate to quantum-safe encryption.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {[
            { icon: Code, title: 'Open-Source First', desc: 'CSPM Scanner and QBOM specification are open-source. We believe cryptographic tooling should be transparent and community-driven.' },
            { icon: Shield, title: 'FIPS 140-3 Security', desc: 'Hardware-backed key management with FIPS 140-3 Level 3 HSM. Enterprise-grade security for every deployment.' },
            { icon: Target, title: 'Standards Leadership', desc: 'Active contributions to ETSI, NIST, and BSI standards. We help shape the regulations we comply with.' },
            { icon: Users, title: 'Developer Experience', desc: 'SDKs in Python, Go, Rust, and TypeScript. PQC encryption that integrates in minutes, not months.' },
            { icon: BookOpen, title: 'Education & Advocacy', desc: 'We publish research, speak at conferences, and run the PQC learning center to grow the quantum-safe community.' },
            { icon: Award, title: 'Regulatory Readiness', desc: 'DORA, NIS2, BSI TR-02102, PCI DSS v4.0, EU AI Act — compliance built into every product.' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="card" style={{ textAlign: 'center', padding: 28 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, margin: '0 auto 14px',
                  background: 'var(--rq-accent-light)', color: 'var(--rq-accent-dark)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={20} />
                </div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.82rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
