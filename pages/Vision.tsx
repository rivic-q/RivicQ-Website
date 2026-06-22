import { Badge } from '../components/Badge';
import { Target, Eye, Shield, Zap, Globe } from 'lucide-react';

export default function Vision() {
  return (
    <div style={{ padding: '80px 24px 60px' }}>
      <div className="page-container" style={{ maxWidth: 900 }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Badge variant="primary">Our Vision</Badge>
          <h1 style={{
            fontFamily: 'var(--rq-font-heading)',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 700, marginTop: 14, letterSpacing: '-0.03em',
          }}>
            A Quantum-Safe World
          </h1>
          <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.95rem', maxWidth: 600, margin: '10px auto 0', lineHeight: 1.7 }}>
            We envision a future where every piece of encrypted data remains confidential — today, tomorrow, and in the quantum era.
          </p>
        </div>

        <div style={{ lineHeight: 1.8, color: 'var(--rq-muted)', fontSize: '0.95rem', marginBottom: 48 }}>
          <p style={{ marginBottom: 16 }}>
            The arrival of fault-tolerant quantum computers will render most of today's public-key cryptography obsolete. 
            This is not a question of <em>if</em>, but <em>when</em>. At RivicQ, we are building the encryption infrastructure 
            that makes the transition to post-quantum security seamless, auditable, and accessible to every organization.
          </p>
          <p style={{ marginBottom: 16 }}>
            Our vision is a world where cryptographic migration is no longer a crisis-driven scramble but a continuous, 
            automated process — where every encryption key is quantum-safe, every cryptographic asset is inventoried 
            and risk-scored, and every organization can prove its cryptographic posture to regulators, auditors, and customers.
          </p>
          <p>
            We believe that strong encryption is a fundamental right and a cornerstone of digital trust. 
            By building open standards, developer-friendly tooling, and FIPS-validated hardware security, 
            we are laying the foundation for the next 50 years of digital security.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {[
            { icon: Shield, title: 'PQC for Everyone', desc: 'Post-quantum encryption should not be limited to tech giants. Every organization deserves quantum-safe protection.' },
            { icon: Zap, title: 'Automated Migration', desc: 'Cryptographic discovery, risk scoring, and remediation should be continuous and automated — not a manual audit every few years.' },
            { icon: Globe, title: 'Open Standards', desc: 'We contribute to ETSI, NIST, and IETF standards to ensure interoperability and transparency across the ecosystem.' },
            { icon: Eye, title: 'Cryptographic Visibility', desc: 'Every organization should have full visibility into its encryption posture — what algorithms, where, and at what risk.' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="card" style={{ textAlign: 'center', padding: 28 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, margin: '0 auto 14px',
                  background: 'var(--rq-primary-dim)', color: 'var(--rq-primary)',
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
