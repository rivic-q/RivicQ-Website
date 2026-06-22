import { Link } from 'react-router-dom';
import { socialLinks } from '../data/navigation';
import Logo from './Logo';

const footerSections = [
  {
    label: 'Products',
    links: [
      { label: 'CSPM Scanner', path: '/products' },
      { label: 'CloudHSM', path: '/cloud-hsm' },
      { label: 'RQSP Protocol', path: '/rqsp' },
      { label: 'SDK & APIs', path: '/sdk' },
      { label: 'Platform', path: '/platform' },
    ],
  },
  {
    label: 'Company',
    links: [
      { label: 'Vision', path: '/vision' },
      { label: 'Mission', path: '/mission' },
      { label: 'Story', path: '/story' },
      { label: 'Team', path: '/team' },
      { label: 'Careers', path: '/careers' },
      { label: 'Investors', path: '/investors' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { label: 'Blog', path: '/blog' },
      { label: 'Research', path: '/research' },
      { label: 'Glossary', path: '/glossary' },
      { label: 'Compliance', path: '/compliance' },
      { label: 'Learning Center', path: '/learning' },
    ],
  },
  {
    label: 'Connect',
    links: [
      { label: 'Partner Program', path: '/partner' },
      { label: 'Ecosystem', path: '/ecosystem' },
      { label: 'Enterprise', path: '/enterprise' },
      { label: 'Help & Support', path: '/help' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Imprint', path: '/legal' },
      { label: 'Cookie Policy', path: '/cookie-policy' },
    ],
  },
];

const socialItems = [
  { label: 'LinkedIn', url: socialLinks.linkedin },
  { label: 'GitHub', url: socialLinks.github },
  { label: 'Substack', url: socialLinks.substack },
  { label: 'Discord', url: socialLinks.discord },
  { label: 'YouTube', url: socialLinks.youtube },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0E141B', borderTop: '1px solid #1E293B', padding: '56px 0 32px' }}>
      <div className="page-container">
        {/* Top row: Brand + columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: 48,
          marginBottom: 40,
        }} className="footer-grid">
          {/* Brand column */}
          <div>
            <Logo size="md" variant="light" />
            <p style={{
              color: '#64748B', fontSize: '0.82rem', lineHeight: 1.7,
              marginTop: 16, maxWidth: 260,
            }}>
              Berlin-founded deep tech building the post-quantum encryption stack.
              PQC, HSM, and cryptographic auditing for the quantum-safe era.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {socialItems.map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{
                    width: 34, height: 34, borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#475569', background: 'rgba(255,255,255,0.04)',
                    transition: 'all 200ms', fontSize: '0.75rem',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = '#2563EB'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    {s.label === 'LinkedIn' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>}
                    {s.label === 'GitHub' && <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>}
                    {s.label === 'Substack' && <path d="M22.539 8.242H1.46V5.406h20.078v2.836zM21.7 11.098H2.492v-2.75H21.7v2.75zM22.539 20.68L12.406 4.04 2.093 20.68v-7.336h20.445v7.336z"/>}
                    {s.label === 'Discord' && <path d="M20.317 4.3698a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.045-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>}
                    {s.label === 'YouTube' && <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 24,
          }} className="footer-links-grid">
            {footerSections.map(section => (
              <div key={section.label}>
                <h4 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.72rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  color: '#94A3B8', marginBottom: 16,
                }}>{section.label}</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {section.links.map(link => (
                    <li key={link.path}>
                      <Link to={link.path} style={{
                        color: '#64748B', textDecoration: 'none', fontSize: '0.82rem',
                        transition: 'color 200ms',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = '#64748B'; }}
                      >{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#1E293B' }} />

        {/* Bottom bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 16, paddingTop: 20,
        }}>
          <span style={{ color: '#475569', fontSize: '0.75rem' }}>
            &copy; {new Date().getFullYear()} RivicQ GmbH. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link to="/privacy" style={{ color: '#475569', fontSize: '0.73rem', textDecoration: 'none', transition: 'color 200ms' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#475569'; }}
            >Privacy</Link>
            <Link to="/legal" style={{ color: '#475569', fontSize: '0.73rem', textDecoration: 'none', transition: 'color 200ms' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#475569'; }}
            >Imprint</Link>
            <Link to="/cookie-policy" style={{ color: '#475569', fontSize: '0.73rem', textDecoration: 'none', transition: 'color 200ms' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#475569'; }}
            >Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
