import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { CTABlock } from '../components/CTABlock';
import QuantumCircuit from '../components/QuantumCircuit';

const plans = [
  {
    name: 'CBOM+QBOM Scanner',
    price: 'Free',
    desc: 'Open-source (Apache 2.0). Run in your CI/CD pipeline.',
    features: ['Unlimited encryption scans', 'CycloneDX 1.6 CBOM+QBOM export', 'GitHub Actions integration', 'Q-score vulnerability reporting', 'Community support'],
    cta: 'Get Started Free',
    ctaLink: 'https://github.com/rivicq/cbom',
    highlight: false,
  },
  {
    name: 'CloudHSM (EaaS)',
    price: 'Contact Us',
    desc: 'FIPS 140-3 vHSM with Encryption-as-a-Service API. On-prem or cloud.',
    features: ['ML-KEM-768 / AES-256-GCM encryption', 'PKCS#11 / REST / gRPC / KMIP', 'QRNG entropy source', 'Immutable HSM audit log', 'SLA-backed uptime'],
    cta: 'Request Enterprise Trial',
    ctaLink: '/enterprise?product=CloudHSM%20/%20vHSM',
    highlight: true,
  },
  {
    name: 'Enterprise Encryption Suite',
    price: 'Custom',
    desc: 'Full platform + HSM deployment + compliance audit.',
    features: ['All products + QBOM included', 'Dedicated encryption engineer', 'DORA/NIS2 compliance package', 'Custom SLA & support', 'On-prem HSM deployment'],
    cta: 'Contact Sales',
    ctaLink: '/enterprise?product=Enterprise%20Encryption%20Suite',
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <div style={{ position: 'relative' }}>
      <QuantumCircuit complexity={4} color="var(--rq-teal)" />
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '60px 24px', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Pricing"
          subtitle="Open-source first. Transparent pricing for enterprise encryption deployments. No hidden fees, no sales engineering markups."
          badge={<Badge variant="encrypt">Encryption Pricing</Badge>}
        />

        {/* Investor note for seed round */}
        <div style={{
          padding: '10px 16px', borderRadius: 8, marginBottom: 20,
          border: '1px solid rgba(37,99,235,0.15)',
          background: 'var(--rq-encrypt-dim)',
          fontSize: '0.82rem', color: 'var(--rq-muted)', textAlign: 'center',
        }}>
          <span style={{ color: 'var(--rq-encrypt)', fontWeight: 600 }}>Pre-seed / Seed:</span> Pilot pricing available for qualifying enterprises.{' '}
          <a href="/enterprise?product=Investor%20Relations" style={{ color: 'var(--rq-encrypt)', fontWeight: 600 }}>Investor inquiries welcome →</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 20 }}>
          {plans.map((plan, i) => (
            <div key={plan.name} style={{
              border: `1px solid ${plan.highlight ? 'rgba(37,99,235,0.25)' : 'var(--rq-border)'}`,
              borderRadius: 12, padding: 24,
              background: plan.highlight ? 'linear-gradient(180deg, var(--rq-encrypt-dim) 0%, transparent 100%)' : 'transparent',
              display: 'flex', flexDirection: 'column',
              animation: 'fadeInUp 0.5s ease-out forwards',
              animationDelay: `${i * 0.1}s`,
              opacity: 0,
              transition: 'border-color 200ms, box-shadow 200ms',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--rq-encrypt)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(37,99,235,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = plan.highlight ? 'rgba(37,99,235,0.25)' : 'var(--rq-border)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 700, margin: '0 0 4px' }}>{plan.name}</h3>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--rq-encrypt)', marginBottom: 8 }}>{plan.price}</div>
              <p style={{ color: 'var(--rq-muted)', fontSize: '0.85rem', margin: '0 0 16px', lineHeight: 1.6 }}>{plan.desc}</p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--rq-encrypt)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 16 }}>
                <a href={plan.ctaLink} {...(plan.ctaLink.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} style={{
                  display: 'block', textAlign: 'center', padding: '10px 20px',
                  borderRadius: 8, fontWeight: 600, fontSize: '0.85rem',
                  textDecoration: 'none', fontFamily: "'Space Grotesk', sans-serif",
                  background: plan.highlight ? 'var(--rq-encrypt)' : 'var(--rq-code-bg)',
                  color: plan.highlight ? '#fff' : 'var(--rq-text)',
                  border: plan.highlight ? 'none' : '1px solid var(--rq-border)',
                }}>{plan.cta}</a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40 }}>
          <CTABlock title="Need a Custom Encryption Plan?" text="Contact us for enterprise pricing, custom SLAs, and volume discounts. Pre-seed and pilot pricing available." label="Contact Sales" href="/enterprise" />
        </div>
      </div>
    </div>
  );
}
