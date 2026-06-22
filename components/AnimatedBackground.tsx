import React, { useMemo } from 'react';

interface Props {
  variant?: 'mesh' | 'grid' | 'hex' | 'crypto' | 'mixed';
  intensity?: 'low' | 'medium' | 'high';
  gradient?: string[];
  className?: string;
}

const AnimatedBackground: React.FC<Props> = ({
  variant = 'mesh',
  intensity = 'low',
  gradient = ['#2563EB', '#3B82F6', '#60A5FA'],
  className = '',
}) => {
  const opacityMultiplier = { low: 0.35, medium: 0.6, high: 0.85 }[intensity];

  const gradientStyle: React.CSSProperties = useMemo(() => ({
    position: 'absolute',
    inset: 0,
    background: `
      radial-gradient(ellipse at 20% 50%, ${gradient[0]}12 0%, transparent 60%),
      radial-gradient(ellipse at 80% 20%, ${gradient[1]}08 0%, transparent 50%),
      radial-gradient(ellipse at 50% 80%, ${gradient[2]}05 0%, transparent 50%)
    `,
    opacity: opacityMultiplier,
    animation: 'gradientShift 30s ease infinite',
    backgroundSize: '200% 200%',
    pointerEvents: 'none',
    zIndex: 0,
  }), [gradient, opacityMultiplier]);

  const showMesh = variant === 'mesh' || variant === 'mixed';
  const showHex = variant === 'hex' || variant === 'mixed';
  const showGrid = variant === 'grid' || variant === 'mixed';

  const floatingHexes = useMemo(() => {
    if (!showHex) return [];
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 30 + 15}px`,
      duration: `${Math.random() * 25 + 20}s`,
      delay: `${Math.random() * 15}s`,
      opacity: Math.random() * 0.04 + 0.01,
    }));
  }, [showHex]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`} style={{ zIndex: 0 }}>
      <div style={gradientStyle} />

      {showGrid && (
        <svg width="100%" height="100%" className="absolute inset-0" style={{ opacity: 0.03 * opacityMultiplier }}>
          <defs>
            <pattern id="bg-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--rq-blue)" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-grid)" />
        </svg>
      )}

      {showMesh && (
        <>
          <div className="absolute" style={{
            width: '400px', height: '400px', borderRadius: '50%',
            background: `radial-gradient(circle, ${gradient[0]}08 0%, transparent 70%)`,
            top: '-10%', left: '-10%',
            opacity: 0.2 * opacityMultiplier,
            animation: 'gradientOrb 12s ease-in-out infinite',
          }} />
          <div className="absolute" style={{
            width: '300px', height: '300px', borderRadius: '50%',
            background: `radial-gradient(circle, ${gradient[1]}06 0%, transparent 70%)`,
            bottom: '-5%', right: '-5%',
            opacity: 0.2 * opacityMultiplier,
            animation: 'gradientOrb 12s ease-in-out infinite',
            animationDelay: '4s',
          }} />
        </>
      )}

      {floatingHexes.map(h => (
        <div
          key={h.id}
          className="absolute"
          style={{
            left: h.left,
            width: h.size,
            height: h.size,
            opacity: h.opacity * opacityMultiplier,
            animation: `hexFloat ${h.duration} linear infinite`,
            animationDelay: h.delay,
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="var(--rq-blue)" strokeWidth="1">
            <polygon points="50 0, 93 25, 93 75, 50 100, 7 75, 7 25" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
