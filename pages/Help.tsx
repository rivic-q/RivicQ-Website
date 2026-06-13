import { Badge } from '../components/Badge';
import { Link } from 'react-router-dom';
import { Search, BookOpen, MessageCircle, Mail, ChevronRight, FileText, Terminal, Shield, ExternalLink } from 'lucide-react';

const helpCategories = [
  { icon: Terminal, title: 'Getting Started', desc: 'Quick start guides and onboarding', href: '/resources' },
  { icon: Search, title: 'CBOM Scanner', desc: 'How to scan and discover cryptographic assets', href: '/products' },
  { icon: Shield, title: 'CloudHSM Setup', desc: 'Deploy and configure your HSM', href: '/cloud-hsm' },
  { icon: FileText, title: 'API Documentation', desc: 'SDK reference and API guides', href: '/sdk' },
  { icon: BookOpen, title: 'PQC Migration', desc: 'Step-by-step migration playbooks', href: '/resources' },
  { icon: Shield, title: 'Compliance Guides', desc: 'DORA, NIS2, and BSI requirements', href: '/compliance' },
];

const faqs = [
  { q: 'What is a CBOM scan?', a: 'A Cryptographic Bill of Materials scan discovers every encryption asset in your codebase, containers, and cloud infrastructure.' },
  { q: 'How is the Q-score calculated?', a: 'The Q-score (0.0–1.0) measures quantum vulnerability based on algorithm type, key size, and cryptographic strength.' },
  { q: 'What HSM form factors do you support?', a: 'Physical on-prem HSM, cloud virtual HSM (AWS/Azure/GCP), and hybrid split-key configurations.' },
  { q: 'How long does a PQC migration take?', a: 'Timeline depends on scope. The CBOM+QBOM pilot takes 1–2 weeks. Full migration: 3–12 months.' },
];

export default function Help() {
  return (
    <div style={{ padding: '80px 24px 60px' }}>
      <div className="page-container" style={{ maxWidth: 900 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <Badge variant="primary">Help & Support</Badge>
          <h1 style={{
            fontFamily: 'var(--rq-font-heading)', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            fontWeight: 700, marginTop: 14, letterSpacing: '-0.03em',
          }}>How Can We Help?</h1>
          <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.95rem', maxWidth: 480, margin: '10px auto 0', lineHeight: 1.7 }}>
            Browse documentation, guides, and FAQs — or reach out to our team.
          </p>
        </div>

        {/* Search */}
        <div style={{ maxWidth: 500, margin: '0 auto 48px' }}>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--rq-muted)' }} />
            <Link to="/search">
              <input
                type="text"
                className="input"
                placeholder="Search help articles..."
                style={{ paddingLeft: 42, borderRadius: 12, cursor: 'pointer' }}
                readOnly
              />
            </Link>
          </div>
        </div>

        {/* Help categories */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 48 }}>
          {helpCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Link key={i} to={cat.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card card-hover" style={{ padding: 20 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, marginBottom: 12,
                    background: 'var(--rq-primary-dim)', color: 'var(--rq-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={16} />
                  </div>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: 4 }}>{cat.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--rq-text-secondary)', lineHeight: 1.5, margin: 0 }}>{cat.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* FAQs */}
        <h2 style={{
          fontFamily: 'var(--rq-font-heading)', fontSize: '1.1rem', fontWeight: 700,
          marginBottom: 16,
        }}>Frequently Asked Questions</h2>
        <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: 48 }}>
          {faqs.map((faq, i) => (
            <details key={i} style={{
              borderBottom: i < faqs.length - 1 ? '1px solid var(--rq-border-light)' : 'none',
            }}>
              <summary style={{
                padding: '16px 20px', cursor: 'pointer', fontWeight: 500, fontSize: '0.85rem',
                fontFamily: 'var(--rq-font-heading)',
                listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                {faq.q}
                <ChevronRight size={16} style={{ color: 'var(--rq-muted)', transition: 'transform 200ms' }} />
              </summary>
              <div style={{ padding: '0 20px 16px', fontSize: '0.82rem', color: 'var(--rq-text-secondary)', lineHeight: 1.7 }}>
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        {/* Contact */}
        <div className="card card-accent" style={{ padding: 32, textAlign: 'center' }}>
          <div style={{
            width: 48, height: 48, borderRadius: 14, margin: '0 auto 14px',
            background: 'var(--rq-accent-light)', color: 'var(--rq-accent-dark)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <MessageCircle size={22} />
          </div>
          <h3 style={{ fontFamily: 'var(--rq-font-heading)', fontSize: '1.1rem', fontWeight: 700, marginBottom: 6 }}>Still need help?</h3>
          <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.85rem', marginBottom: 20, lineHeight: 1.6 }}>
            Our team is ready to assist with technical questions, onboarding, or enterprise pilots.
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:hello@rivicq.de" className="btn btn-accent">
              <Mail size={16} /> Email Support
            </a>
            <a href={discordLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <MessageCircle size={16} /> Join Discord <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const discordLink = 'https://discord.gg/rivicq';
