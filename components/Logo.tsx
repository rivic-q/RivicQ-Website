import React from 'react';

type LogoSize = 'sm' | 'md' | 'lg';

interface LogoProps {
  size?: LogoSize;
  showTagline?: boolean;
  variant?: 'light' | 'dark';
  className?: string;
}

const sizeMap: Record<LogoSize, { icon: number; text: string; tagline: string }> = {
  sm: { icon: 28, text: '1rem', tagline: '0.55rem' },
  md: { icon: 36, text: '1.25rem', tagline: '0.6rem' },
  lg: { icon: 48, text: '1.6rem', tagline: '0.7rem' },
};

const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showTagline = true,
  variant = 'dark',
  className = '',
}) => {
  const s = sizeMap[size];
  const textColor = variant === 'light' ? '#FFFFFF' : '#0E141B';
  const accentColor = variant === 'light' ? '#FFFFFF' : '#1A56DB';
  const mutedColor = variant === 'light' ? 'rgba(255,255,255,0.6)' : '#8896A6';

  return (
    <div className={className} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <svg width={s.icon} height={s.icon} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <rect x="2" y="2" width="32" height="32" rx="8" fill={accentColor} />
        <path d="M10 18C10 13.5817 13.5817 10 18 10C22.4183 10 26 13.5817 26 18C26 22.4183 22.4183 26 18 26" stroke={variant === 'light' ? '#0E141B' : '#FFFFFF'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 18C10 22.4183 13.5817 26 18 26" stroke={variant === 'light' ? '#0E141B' : '#FFFFFF'} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 14L22 22" stroke={variant === 'light' ? '#0E141B' : '#FFFFFF'} strokeWidth="2" strokeLinecap="round" />
        <circle cx="18" cy="18" r="2.5" fill={variant === 'light' ? '#0E141B' : '#FFFFFF'} />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: s.text,
          color: textColor,
          letterSpacing: '-0.03em',
          lineHeight: 1,
        }}>
          Rivi<span style={{ color: accentColor }}>cQ</span>
        </span>
        {showTagline && (
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: s.tagline,
            color: mutedColor,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginTop: 3,
          }}>
            Quantum-Safe Encryption
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
