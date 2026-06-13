import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { CTABlock } from '../components/CTABlock';

export default function Partner() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px' }}>
      <SectionHeader
        title="Partner Program"
        subtitle="Technology alliances, system integrators, and channel partners. Build on RivicQ's open-source encryption platform."
        badge={<Badge variant="encrypt">Encryption Partners</Badge>}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 20 }}>
        {[
          { name: 'Technology Partners', desc: 'Integrate CBOM+QBOM and RQSP encryption into your platform. ISV-friendly licensing with revenue share options for EaaS.' },
          { name: 'System Integrators', desc: 'PQC encryption migration and HSM deployment practice for your consulting arm. Certification, training, and joint delivery.' },
          { name: 'Cloud & CSP Partners', desc: 'Embedded HSM and CBOM+QBOM scanning for cloud marketplaces. AWS, Azure, GCP ready with hybrid deployment models.' },
        ].map(p => (
          <div key={p.name} style={{ border: '1px solid var(--rq-border)', borderRadius: 10, padding: 20 }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', fontWeight: 700, margin: '0 0 6px' }}>{p.name}</h3>
            <p style={{ color: 'var(--rq-muted)', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>{p.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 40 }}>
        <CTABlock title="Become an Encryption Partner" text="Technology, integration, or channel partnership inquiries." label="Partner Inquiry" href="/enterprise" />
      </div>
    </div>
  );
}
