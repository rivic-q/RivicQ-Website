import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { CTABlock } from '../components/CTABlock';
import QuantumCircuit from '../components/QuantumCircuit';

export default function Investors() {
  return (
    <div style={{ position: 'relative' }}>
      <QuantumCircuit complexity={4} color="var(--rq-accent)" />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Investor Relations"
          subtitle="Deep-tech at the intersection of PQC encryption, FIPS 140-3 HSM, and EU regulatory compliance. Berlin-founded, global market."
          badge={<Badge variant="encrypt">Encryption Infrastructure</Badge>}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 20 }}>
          {[
            { stat: '$100B+', label: 'PQC encryption market by 2030' },
            { stat: '6', label: 'Regulatory deadlines in effect' },
    { stat: '5', label: 'Products (inc. QBOM)' },
    { stat: '6', label: 'Standards Contributions (ETSI + NIST)' },
          ].map((item, i) => (
            <div key={i} style={{ border: '1px solid var(--rq-border)', borderRadius: 10, padding: 20, textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--rq-encrypt)' }}>{item.stat}</div>
              <div style={{ color: 'var(--rq-muted)', fontSize: '0.8rem' }}>{item.label}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, marginBottom: 12 }}>Why Invest in RivicQ?</h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'First-mover in QBOM (Quantum Bill of Materials) — new encryption audit category',
              'CBOM+QBOM open-source adoption drives enterprise pipeline',
              'Regulatory tailwinds: DORA, NIS2, CISA EO, NCSC all mandate PQC encryption migration',
              'Berlin-founded: deep tech pedigree with EU encryption market access',
              'ETSI delegate and BSI-recognized — PQC encryption standards credibility',
              'Capital-efficient: SIB grant-funded, revenue LOI with EURA AG for HSM deployment',
              'Encryption-as-a-Service (EaaS) API — repeatable, scalable revenue model',
            ].map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--rq-encrypt)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ marginTop: 40 }}>
          <CTABlock title="Investor Materials" text="Download our pitch deck and encryption infrastructure overview." label="View Pitch Deck" href="/pitch-deck" />
        </div>
      </div>
    </div>
  );
}
