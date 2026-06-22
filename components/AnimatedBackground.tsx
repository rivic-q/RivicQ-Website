import React, { useMemo } from 'react';

interface Props {
  variant?: 'mesh' | 'grid' | 'hex' | 'crypto' | 'circuit' | 'particles' | 'mixed';
  intensity?: 'low' | 'medium' | 'high';
  gradient?: string[];
  className?: string;
}

const AnimatedBackground: React.FC<Props> = ({
  variant = 'circuit',
  intensity = 'medium',
  gradient = ['#2563EB', '#3B82F6', '#60A5FA'],
  className = '',
}) => {
  const opacityMultiplier = { low: 0.3, medium: 0.55, high: 0.8 }[intensity];

  const gradientStyle: React.CSSProperties = useMemo(() => ({
    position: 'absolute',
    inset: 0,
    background: `
      radial-gradient(ellipse at 20% 50%, ${gradient[0]}15 0%, transparent 60%),
      radial-gradient(ellipse at 80% 20%, ${gradient[1]}10 0%, transparent 50%),
      radial-gradient(ellipse at 50% 80%, ${gradient[2]}08 0%, transparent 50%)
    `,
    opacity: opacityMultiplier,
    animation: 'gradientShift 25s ease infinite',
    backgroundSize: '200% 200%',
    pointerEvents: 'none',
    zIndex: 0,
  }), [gradient, opacityMultiplier]);

  const showCircuit = variant === 'circuit' || variant === 'mixed';
  const showParticles = variant === 'particles' || variant === 'mixed';
  const showGrid = variant === 'grid' || variant === 'mixed';
  const showMesh = variant === 'mesh' || variant === 'mixed';

  const particles = useMemo(() => {
    if (!showParticles) return [];
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      top: `${5 + Math.random() * 90}%`,
      size: `${Math.random() * 3 + 1.5}px`,
      duration: `${4 + Math.random() * 6}s`,
      delay: `${Math.random() * 4}s`,
      opacity: Math.random() * 0.3 + 0.1,
      dx: `${(Math.random() - 0.5) * 80}px`,
      dy: `${(Math.random() - 0.5) * 80}px`,
    }));
  }, [showParticles]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`} style={{ zIndex: 0 }}>
      <div style={gradientStyle} />

      {/* Circuit grid (default) */}
      <svg width="100%" height="100%" className="absolute inset-0" style={{ opacity: 0.04 * opacityMultiplier }}>
        <defs>
          <pattern id="dt-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#3B82F6" strokeWidth="0.4" opacity="0.3" />
          </pattern>
          <pattern id="dt-dot" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.5" fill="#3B82F6" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dt-grid)" />
        <rect width="100%" height="100%" fill="url(#dt-dot)" />
      </svg>

      {showCircuit && (
        <svg width="100%" height="100%" className="absolute inset-0" style={{ opacity: 0.06 * opacityMultiplier }}>
          {[...Array(6)].map((_, i) => {
            const x1 = 10 + Math.random() * 80;
            const y1 = 10 + Math.random() * 80;
            const x2 = x1 + (Math.random() - 0.5) * 40;
            const y2 = y1 + (Math.random() - 0.5) * 40;
            return (
              <g key={i}>
                <line x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`}
                  stroke="#3B82F6" strokeWidth="0.5" opacity="0.4" className="animate-circuit-flow" />
                <circle cx={`${x1}%`} cy={`${y1}%`} r="2" fill="#3B82F6" opacity="0.3" className="animate-node-connect" />
                <circle cx={`${(x1 + x2) / 2}%`} cy={`${(y1 + y2) / 2}%`} r="1.5" fill="#60A5FA" opacity="0.2" />
              </g>
            );
          })}
          {[...Array(3)].map((_, i) => (
            <path key={`trace-${i}`}
              d={`M ${15 + i * 25}% ${80}% Q ${15 + i * 25}% ${50 + Math.random() * 20}%, ${25 + i * 25}% ${20 + Math.random() * 20}%`}
              stroke="#2563EB" strokeWidth="0.5" fill="none" opacity="0.3" className="animate-circuit-flow"
              style={{ animationDelay: `${i * 0.5}s` }} />
          ))}
        </svg>
      )}

      {showMesh && (
        <>
          <div className="absolute" style={{
            width: '500px', height: '500px', borderRadius: '50%',
            background: `radial-gradient(circle, ${gradient[0]}0A 0%, transparent 70%)`,
            top: '-15%', left: '-10%',
            opacity: 0.3 * opacityMultiplier,
            animation: 'gradientOrb 15s ease-in-out infinite',
          }} />
          <div className="absolute" style={{
            width: '350px', height: '350px', borderRadius: '50%',
            background: `radial-gradient(circle, ${gradient[1]}08 0%, transparent 70%)`,
            bottom: '-10%', right: '-5%',
            opacity: 0.25 * opacityMultiplier,
            animation: 'gradientOrb 12s ease-in-out infinite',
            animationDelay: '5s',
          }} />
        </>
      )}

      {/* Floating hex particles */}
      {[...Array(4)].map((_, i) => (
        <div key={`hex-${i}`} className="absolute" style={{
          left: `${15 + i * 25}%`,
          width: '40px', height: '40px',
          opacity: 0.02 * opacityMultiplier,
          animation: `hexFloat ${20 + i * 5}s linear infinite`,
          animationDelay: `${i * 3}s`,
        }}>
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="#3B82F6" strokeWidth="0.8">
            <polygon points="50 0, 93 25, 93 75, 50 100, 7 75, 7 25" />
          </svg>
        </div>
      ))}

      {/* Glowing particles */}
      {particles.map(p => (
        <div key={p.id}
          className="absolute"
          style={{
            left: p.left, top: p.top,
            width: p.size, height: p.size,
            borderRadius: '50%',
            background: gradient[Math.floor(Math.random() * gradient.length)],
            opacity: p.opacity,
            boxShadow: `0 0 ${parseInt(p.size) * 2}px currentColor`,
            animation: `qubitFloat ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
