import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/Badge';
import { Search as SearchIcon, FileCode, Shield, BookOpen, Globe, ArrowRight, X } from 'lucide-react';

const searchResults = [
  { icon: FileCode, title: 'CBOM Scanner', desc: 'Cryptographic asset discovery tool for repos, containers, and cloud VPCs.', category: 'Product', href: '/products', tags: ['CBOM', 'Scanner', 'Discovery'] },
  { icon: Shield, title: 'CloudHSM', desc: 'FIPS 140-3 Level 3 Hardware Security Module as a Service.', category: 'Product', href: '/cloud-hsm', tags: ['HSM', 'FIPS 140-3', 'EaaS'] },
  { icon: Shield, title: 'ML-KEM (FIPS 203)', desc: 'Module-Lattice Key Encapsulation Mechanism — NIST PQC standard for key exchange.', category: 'Standard', href: '/glossary', tags: ['PQC', 'NIST', 'FIPS 203'] },
  { icon: BookOpen, title: 'PQC Migration Guide', desc: 'Step-by-step guide to migrating your encryption stack to post-quantum algorithms.', category: 'Guide', href: '/resources', tags: ['Migration', 'Guide'] },
  { icon: Globe, title: 'DORA Compliance', desc: 'Digital Operational Resilience Act — encryption requirements for EU financial entities.', category: 'Regulation', href: '/compliance', tags: ['DORA', 'EU', 'Compliance'] },
  { icon: FileCode, title: 'QBOM Risk Scoring', desc: 'Quantum Bill of Materials — vulnerability scoring for cryptographic assets.', category: 'Product', href: '/products', tags: ['QBOM', 'Q-score', 'Risk'] },
];

const categories = ['All', 'Products', 'Standards', 'Guides', 'Regulations'];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = searchResults.filter(r => {
    const matchesQuery = !query || r.title.toLowerCase().includes(query.toLowerCase()) || r.desc.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = activeCategory === 'All' || r.category === activeCategory.slice(0, -1);
    return matchesQuery && matchesCategory;
  });

  return (
    <div style={{ padding: '80px 24px 60px' }}>
      <div className="page-container" style={{ maxWidth: 800 }}>
        <div style={{ marginBottom: 32 }}>
          <Badge variant="primary">Search</Badge>
          <h1 style={{
            fontFamily: 'var(--rq-font-heading)', fontSize: '1.6rem', fontWeight: 700,
            marginTop: 10, letterSpacing: '-0.02em',
          }}>Search Documentation & Products</h1>
        </div>

        {/* Search bar */}
        <div style={{ position: 'relative', marginBottom: 24 }}>
          <SearchIcon size={18} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--rq-muted)' }} />
          <input
            type="text"
            className="input"
            placeholder="Search for products, standards, guides..."
            style={{ paddingLeft: 42, paddingRight: 40, fontSize: '0.95rem', borderRadius: 12 }}
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} style={{
              position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
              background: 'none', border: 'none', cursor: 'pointer', color: 'var(--rq-muted)', padding: 4,
            }}>
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category filters */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 28, flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn btn-sm ${activeCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {filtered.map((result, i) => {
              const Icon = result.icon;
              return (
                <Link key={i} to={result.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="card card-hover" style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: 18 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: 'var(--rq-primary-dim)', color: 'var(--rq-primary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <Icon size={18} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <span style={{ fontFamily: 'var(--rq-font-heading)', fontWeight: 600, fontSize: '0.9rem' }}>{result.title}</span>
                        <Badge variant="gray">{result.category}</Badge>
                      </div>
                      <p style={{ fontSize: '0.82rem', color: 'var(--rq-text-secondary)', margin: 0, lineHeight: 1.6 }}>{result.desc}</p>
                      <div style={{ display: 'flex', gap: 4, marginTop: 6 }}>
                        {result.tags.map(t => <span key={t} className="tag">{t}</span>)}
                      </div>
                    </div>
                    <ArrowRight size={16} style={{ color: 'var(--rq-muted)', flexShrink: 0, marginTop: 12 }} />
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="card" style={{ textAlign: 'center', padding: 40 }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14, margin: '0 auto 12px',
              background: 'var(--rq-surface)', color: 'var(--rq-muted)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <SearchIcon size={22} />
            </div>
            <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.9rem' }}>No results found for "{query}"</p>
            <p style={{ color: 'var(--rq-muted)', fontSize: '0.8rem', marginTop: 4 }}>Try different keywords or browse categories above.</p>
          </div>
        )}
      </div>
    </div>
  );
}
