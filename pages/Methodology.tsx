import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';

export default function Methodology() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <SectionHeader
        title="Methodology"
        subtitle="Our approach to cryptographic migration: discover, assess, migrate, verify."
        badge={<Badge variant="blue">Approach</Badge>}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          { step: '01', title: 'Discover', desc: 'Automated CBOM scanning across codebases, containers, and cloud VPCs. Discovers every key, certificate, and cryptographic algorithm in your infrastructure.' },
          { step: '02', title: 'Assess', desc: 'Risk-based gap analysis against NIST PQC standards, DORA/NIS2 requirements, and organizational risk appetite. Priority mapping for migration.' },
          { step: '03', title: 'Migrate', desc: 'Phased migration with hybrid classical-PQC deployment. Drop-in algorithm replacement via SDK, HSM key rotation, and protocol upgrades.' },
          { step: '04', title: 'Verify', desc: 'Continuous CBOM monitoring, automated compliance reporting, and penetration testing of migrated cryptographic controls.' },
        ].map(m => (
          <div key={m.step} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700,
              color: 'var(--rq-blue)', minWidth: 40, lineHeight: 1,
            }}>{m.step}</div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, margin: '0 0 4px' }}>{m.title}</h3>
              <p style={{ color: 'var(--rq-muted)', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
