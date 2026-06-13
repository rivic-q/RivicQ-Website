import { ReactNode } from 'react';

export function SectionHeader({ title, subtitle, badge, align = 'center' }: {
  title: string;
  subtitle?: string;
  badge?: ReactNode;
  align?: 'left' | 'center';
}) {
  return (
    <div style={{
      maxWidth: 680, margin: align === 'center' ? '0 auto 48px' : '0 0 48px',
      textAlign: align,
    }}>
      {badge && <div style={{ marginBottom: 10, display: 'flex', justifyContent: align === 'center' ? 'center' : 'flex-start' }}>{badge}</div>}
      <h2 style={{
        fontFamily: 'var(--rq-font-heading)', fontSize: 'clamp(1.4rem, 3vw, 2rem)',
        fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em',
      }}>{title}</h2>
      {subtitle && (
        <p style={{
          color: 'var(--rq-text-secondary)', fontSize: '0.95rem', marginTop: 12,
          maxWidth: align === 'center' ? 560 : 520,
          marginLeft: align === 'center' ? 'auto' : 0,
          marginRight: align === 'center' ? 'auto' : 0,
          lineHeight: 1.7,
        }}>{subtitle}</p>
      )}
    </div>
  );
}
