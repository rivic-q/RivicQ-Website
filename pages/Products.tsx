import { Link } from 'react-router-dom';
import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { products } from '../data/products';
import QuantumCircuit from '../components/QuantumCircuit';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Products() {
  return (
    <div style={{ position: 'relative' }}>
      <AnimatedBackground variant="mixed" intensity="medium" gradient={['#2563EB', '#3B82F6', '#60A5FA']} />
      <QuantumCircuit complexity={6} color="var(--rq-blue)" />
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '60px 24px', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Products"
          subtitle="Open-source cryptographic discovery (CBOM+QBOM), FIPS 140-3 HSM with Encryption-as-a-Service, hybrid PQC transport, and developer SDK. Every product is built for production security engineering."
          badge={<Badge variant="encrypt">Encryption Stack</Badge>}
        />

        {/* Quick product-to-enterprise strip */}
        <div style={{
          display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap', alignItems: 'center',
          padding: '12px 18px', borderRadius: 10, background: 'var(--rq-code-bg)',
          border: '1px solid var(--rq-border)',
        }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--rq-muted)' }}>Interested in a product?</span>
          <Link to="/enterprise" style={{
            padding: '6px 16px', background: 'var(--rq-encrypt)', color: '#fff',
            borderRadius: 6, fontWeight: 600, fontSize: '0.8rem', textDecoration: 'none',
            fontFamily: "'Space Grotesk', sans-serif",
          }}>Request Enterprise Trial</Link>
          <Link to="/pricing" style={{
            padding: '6px 16px', border: '1px solid var(--rq-border)', borderRadius: 6,
            color: 'var(--rq-text)', fontWeight: 500, fontSize: '0.8rem', textDecoration: 'none',
          }}>View Pricing</Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {products.map((p, i) => (
            <div key={p.id} style={{
              border: '1px solid var(--rq-border)', borderRadius: 12, padding: 24,
              transition: 'border-color 200ms, box-shadow 200ms, transform 200ms',
              animation: 'fadeInUp 0.5s ease-out forwards',
              animationDelay: `${i * 0.08}s`,
              opacity: 0,
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--rq-encrypt)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(37,99,235,0.06)';
                e.currentTarget.style.transform = 'translateX(3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--rq-border)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>{p.name}</h3>
                <Badge variant={p.status === 'live' ? 'blue' : 'encrypt'}>{p.badge}</Badge>
              </div>
              <p style={{ color: 'var(--rq-muted)', fontSize: '0.9rem', margin: '0 0 12px', lineHeight: 1.6 }}>{p.description}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                {p.specs.map(s => (
                  <span key={s} style={{
                    padding: '2px 8px', borderRadius: 4, fontSize: '0.7rem',
                    background: s.includes('FIPS') || s.includes('ML-KEM') || s.includes('EaaS') ? 'rgba(37,99,235,0.1)' : 'rgba(14,165,233,0.1)',
                    color: s.includes('FIPS') || s.includes('ML-KEM') || s.includes('EaaS') ? 'var(--rq-encrypt)' : 'var(--rq-blue)',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>{s}</span>
                ))}
              </div>

              {/* Product actions */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', borderTop: '1px solid var(--rq-border)', paddingTop: 14 }}>
                {p.path !== '/products' && p.path !== '/' && (
                  <Link to={p.path} style={{
                    padding: '6px 14px', borderRadius: 6, fontSize: '0.8rem',
                    background: 'var(--rq-code-bg)', color: 'var(--rq-text)',
                    textDecoration: 'none', fontWeight: 500, border: '1px solid var(--rq-border)',
                  }}>Learn More →</Link>
                )}
                <Link to={`/enterprise?product=${encodeURIComponent(p.name)}`} style={{
                  padding: '6px 14px', borderRadius: 6, fontSize: '0.8rem',
                  background: 'var(--rq-encrypt)', color: '#fff',
                  textDecoration: 'none', fontWeight: 600,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}>Request Enterprise Trial</Link>
                {p.badge === 'OSS' && (
                  <a href="https://github.com/rivicq/cbom" target="_blank" rel="noopener noreferrer" style={{
                    padding: '6px 14px', borderRadius: 6, fontSize: '0.8rem',
                    color: 'var(--rq-muted)', textDecoration: 'none', fontWeight: 500,
                    border: '1px solid var(--rq-border)',
                  }}>GitHub →</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
