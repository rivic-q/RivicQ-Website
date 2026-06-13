import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { CTABlock } from '../components/CTABlock';
import { useCases } from '../data/useCases';

export default function UseCases() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px' }}>
      <SectionHeader
        title="Use Cases"
        subtitle="Real encryption migration scenarios. Engineer-to-engineer. HSM-backed, QBOM-assessed."
        badge={<Badge variant="encrypt">Encryption Scenarios</Badge>}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {useCases.map(uc => (
          <div key={uc.title} style={{ border: '1px solid var(--rq-border)', borderRadius: 10, padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, margin: 0 }}>{uc.title}</h3>
              <Badge variant="encrypt">{uc.rq}</Badge>
            </div>
            <p style={{ color: 'var(--rq-muted)', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>{uc.summary}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 40 }}>
        <CTABlock title="Have a Different Encryption Use Case?" text="Contact us to discuss your specific cryptographic migration requirements." label="Contact Us" href="/enterprise" />
      </div>
    </div>
  );
}
