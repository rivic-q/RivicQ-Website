import { Link } from 'react-router-dom';
import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { CTABlock } from '../components/CTABlock';
import { solutions } from '../data/products';
import QuantumCircuit from '../components/QuantumCircuit';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Solutions() {
  return (
    <div style={{ position: 'relative' }}>
      <AnimatedBackground variant="mixed" intensity="low" gradient={['#2563EB', '#3B82F6', '#60A5FA']} />
      <QuantumCircuit complexity={5} color="var(--rq-blue)" />
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '60px 24px', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Solutions by Industry"
          subtitle="Engineer-to-engineer encryption migration for your specific threat model. HSM-backed, QBOM-assessed, PQC-ready."
          badge={<Badge variant="encrypt">Industry Encryption</Badge>}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {solutions.map((sol, i) => (
            <div key={sol.title} style={{
              border: '1px solid var(--rq-border)', borderRadius: 12, padding: 24,
              transition: 'border-color 200ms, box-shadow 200ms',
              animation: 'fadeInUp 0.5s ease-out forwards',
              animationDelay: `${i * 0.1}s`,
              opacity: 0,
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--rq-encrypt)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(37,99,235,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rq-border)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{sol.icon}</div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1rem', margin: '0 0 6px' }}>{sol.title}</h3>
              <p style={{ color: 'var(--rq-muted)', fontSize: '0.85rem', margin: '0 0 16px', lineHeight: 1.6 }}>{sol.tagline}</p>
              <Link to={`/enterprise?product=${encodeURIComponent(sol.title)}`} style={{
                padding: '6px 14px', borderRadius: 6, fontSize: '0.78rem',
                background: 'var(--rq-encrypt)', color: '#fff',
                textDecoration: 'none', fontWeight: 600,
                fontFamily: "'Space Grotesk', sans-serif",
                display: 'inline-block',
              }}>Request Pilot →</Link>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40 }}>
          <CTABlock title="Not Sure Where to Start?" text="Free CBOM+QBOM pilot. We'll scan your encryption stack, Q-score every asset, and deliver a PQC migration roadmap with HSM recommendations." label="Request Free Encryption Audit" href="/enterprise" />
        </div>
      </div>
    </div>
  );
}
