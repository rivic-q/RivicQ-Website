import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { CTABlock } from '../components/CTABlock';
import QuantumCircuit from '../components/QuantumCircuit';

const metrics = [
  { value: '€1.2M', label: 'EURA AG LOI & Revenue Pipeline' },
  { value: '2', label: 'Offices (Berlin, US)' },
  { value: '9', label: 'Team Members' },
  { value: '6', label: 'NIST & Encryption Standards' },
  { value: '6', label: 'Regulatory Frameworks Covered' },
  { value: '5', label: 'Products (inc. QBOM)' },
];

export default function PitchDeck() {
  return (
    <div style={{ position: 'relative' }}>
      <QuantumCircuit complexity={5} />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Investor Materials"
          subtitle="Pre-seed / Seed round — RivicQ is building the post-quantum encryption infrastructure layer for government and enterprise."
          badge={<Badge variant="amber">Confidential · Pre-Seed / Seed</Badge>}
        />

        {/* Key Metrics */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 32,
        }}>
          {metrics.map(m => (
            <div key={m.value} style={{
              border: '1px solid var(--rq-border)', borderRadius: 10, padding: 20, textAlign: 'center',
              animation: 'fadeInUp 0.5s ease-out forwards',
              opacity: 0,
            }}>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.6rem', fontWeight: 700,
                color: 'var(--rq-encrypt)', marginBottom: 4,
              }}>{m.value}</div>
              <div style={{ color: 'var(--rq-muted)', fontSize: '0.78rem' }}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Investment Highlights */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 700, margin: '0 0 12px' }}>Investment Highlights</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { title: 'Regulatory Tailwind', desc: 'DORA in effect Jan 2025. NIS2 across EU. NIST PQC deadline 2035. Every regulated entity must migrate encryption — CBOM+QBOM is the mandatory first step.' },
              { title: 'Deep Tech Moats', desc: 'FIPS 140-3 HSM in certification. ETSI delegate on PQC standards. QBOM specification co-author. Native hybrid PQC+classical key derivation.' },
              { title: 'Enterprise Traction', desc: 'EURA AG LOI for HSM-backed encryption infrastructure. Government pilots in Berlin. Pipeline with GCC India operations.' },
              { title: 'Global Team', desc: 'Engineers and operators across Berlin (HQ) and US (operations). TU Berlin research lineage. ETSI delegate on PQC standards.' },
              { title: 'Open-Source Foundation', desc: 'CBOM Scanner is Apache 2.0 — community adoption drives top-of-funnel for QBOM, CloudHSM, and EaaS commercial products.' },
            ].map((item, i) => (
              <div key={item.title} style={{
                border: '1px solid var(--rq-border)', borderRadius: 8, padding: 16,
                animation: 'fadeInUp 0.5s ease-out forwards',
                animationDelay: `${0.3 + i * 0.1}s`,
                opacity: 0,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--rq-encrypt)', flexShrink: 0 }} />
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem', fontWeight: 700, margin: 0 }}>{item.title}</h4>
                </div>
                <p style={{ color: 'var(--rq-muted)', fontSize: '0.82rem', margin: '4px 0 0 14px', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use of Funds */}
        <div style={{
          border: '1px solid rgba(37,99,235,0.2)', borderRadius: 12, padding: 24,
          background: 'var(--rq-encrypt-dim)', marginBottom: 32,
        }}>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 700, margin: '0 0 12px' }}>Use of Funds — Seed Round</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
            {[
              { pct: '35%', area: 'Engineering & Product' },
              { pct: '25%', area: 'Sales & Marketing' },
              { pct: '20%', area: 'HSM Certification' },
              { pct: '10%', area: 'Compliance & Audit' },
              { pct: '10%', area: 'Operations & G&A' },
            ].map(item => (
              <div key={item.area}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: 'var(--rq-encrypt)' }}>{item.pct}</div>
                <div style={{ color: 'var(--rq-muted)', fontSize: '0.78rem' }}>{item.area}</div>
              </div>
            ))}
          </div>
        </div>

        <p style={{ color: 'var(--rq-muted)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 20, padding: 16, borderLeft: '3px solid var(--rq-encrypt)', background: 'var(--rq-code-bg)', borderRadius: '0 8px 8px 0' }}>
          Our investor materials (pitch deck, financial model, market analysis) are available upon request.
          Please reach out with your investor profile for access.
        </p>

        <CTABlock title="Request Investor Access" text="Contact our team for the pitch deck, financials, and seed round details." label="Request Materials" href="/enterprise" />
      </div>
    </div>
  );
}
