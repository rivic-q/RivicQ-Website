import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function CTABlock({ title, text, label, href, external }: {
  title: string;
  text: string;
  label: string;
  href: string;
  external?: boolean;
}) {
  const inner = (
    <div className="card card-accent" style={{
      padding: '40px 32px', textAlign: 'center',
      background: 'linear-gradient(135deg, var(--rq-primary-dim) 0%, transparent 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '-50%', right: '-20%', width: 300, height: 300,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,86,219,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <h3 style={{
        fontFamily: 'var(--rq-font-heading)', fontSize: '1.5rem', fontWeight: 700,
        margin: '0 0 10px', position: 'relative',
      }}>{title}</h3>
      <p style={{
        color: 'var(--rq-text-secondary)', fontSize: '0.92rem', margin: '0 auto 24px',
        maxWidth: 520, lineHeight: 1.7, position: 'relative',
      }}>{text}</p>
      <span className="btn btn-primary btn-lg" style={{ position: 'relative' }}>
        {label}
        <ArrowRight size={18} />
      </span>
    </div>
  );

  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>{inner}</a>;
  }
  return <Link to={href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>{inner}</Link>;
}
