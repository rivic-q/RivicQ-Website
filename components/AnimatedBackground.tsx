import React, { useMemo } from 'react';

interface Props {
  variant?: 'mesh' | 'grid' | 'hex' | 'crypto' | 'mixed';
  intensity?: 'low' | 'medium' | 'high';
  gradient?: string[];
  className?: string;
}

const hexChars = '0123456789abcdef';
const streamChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノabcdef';

const AnimatedBackground: React.FC<Props> = ({
  variant = 'mixed',
  intensity = 'medium',
  gradient = ['#2563EB', '#3B82F6', '#60A5FA'],
  className = '',
}) => {
  const opacityMultiplier = { low: 0.4, medium: 0.7, high: 1 }[intensity];

  const gradientStyle: React.CSSProperties = useMemo(() => ({
    position: 'absolute',
    inset: 0,
    background: `
      radial-gradient(ellipse at 20% 50%, ${gradient[0]}15 0%, transparent 60%),
      radial-gradient(ellipse at 80% 20%, ${gradient[1]}10 0%, transparent 50%),
      radial-gradient(ellipse at 50% 80%, ${gradient[2]}08 0%, transparent 50%),
      radial-gradient(ellipse at 50% 0%, ${gradient[1]}06 0%, transparent 40%)
    `,
    opacity: opacityMultiplier,
    animation: 'gradientShift 20s ease infinite',
    backgroundSize: '200% 200%',
    pointerEvents: 'none',
    zIndex: 0,
  }), [gradient, opacityMultiplier]);

  const showMesh = variant === 'mesh' || variant === 'mixed';
  const showHex = variant === 'hex' || variant === 'mixed';
  const showGrid = variant === 'grid' || variant === 'mixed';
  const showCrypto = variant === 'crypto' || variant === 'mixed';

  const floatingHexes = useMemo(() => {
    if (!showHex) return [];
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 40 + 20}px`,
      duration: `${Math.random() * 20 + 15}s`,
      delay: `${Math.random() * 10}s`,
      opacity: Math.random() * 0.06 + 0.02,
    }));
  }, [showHex]);

  const cryptoStreams = useMemo(() => {
    if (!showCrypto) return [];
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 60 + 40}px`,
      duration: `${Math.random() * 6 + 4}s`,
      delay: `${Math.random() * 8}s`,
      opacity: Math.random() * 0.04 + 0.02,
      chars: Array.from({ length: 20 }, () => streamChars[Math.floor(Math.random() * streamChars.length)]).join(''),
    }));
  }, [showCrypto]);

  const gridLines = useMemo(() => {
    if (!showGrid) return [];
    const lines: { id: number; x: number; y1: number; y2: number; delay: string }[] = [];
    for (let i = 0; i < 8; i++) {
      lines.push({
        id: i,
        x: Math.random() * 100,
        y1: 0,
        y2: 100,
        delay: `${Math.random() * 5}s`,
      });
    }
    return lines;
  }, [showGrid]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`} style={{ zIndex: 0 }}>
      {/* Animated gradient background */}
      <div style={gradientStyle} />

      {/* Grid lines */}
      {showGrid && (
        <svg width="100%" height="100%" className="absolute inset-0" style={{ opacity: 0.05 * opacityMultiplier }}>
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--rq-blue)" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {gridLines.map(line => (
            <line
              key={line.id}
              x1={`${line.x}%`}
              y1={`${line.y1}%`}
              x2={`${line.x}%`}
              y2={`${line.y2}%`}
              stroke="var(--rq-blue)"
              strokeWidth="0.5"
              strokeDasharray="4 8"
              opacity="0.2"
              className="animate-node-connect"
              style={{ animationDelay: line.delay }}
            />
          ))}
        </svg>
      )}

      {/* Mesh gradient orbs */}
      {showMesh && (
        <>
          <div className="absolute animate-gradient-orb" style={{
            width: '500px', height: '500px', borderRadius: '50%',
            background: `radial-gradient(circle, ${gradient[0]}10 0%, transparent 70%)`,
            top: '-10%', left: '-10%',
            opacity: 0.3 * opacityMultiplier,
          }} />
          <div className="absolute animate-gradient-orb" style={{
            width: '400px', height: '400px', borderRadius: '50%',
            background: `radial-gradient(circle, ${gradient[1]}10 0%, transparent 70%)`,
            bottom: '-5%', right: '-5%',
            animationDelay: '3s',
            opacity: 0.3 * opacityMultiplier,
          }} />
          <div className="absolute animate-gradient-orb" style={{
            width: '350px', height: '350px', borderRadius: '50%',
            background: `radial-gradient(circle, ${gradient[2]}08 0%, transparent 70%)`,
            top: '40%', left: '50%',
            animationDelay: '6s',
            opacity: 0.2 * opacityMultiplier,
          }} />
        </>
      )}

      {/* Floating hexagons */}
      {floatingHexes.map(h => (
        <div
          key={h.id}
          className="absolute animate-hex-float"
          style={{
            left: h.left,
            width: h.size,
            height: h.size,
            opacity: h.opacity * opacityMultiplier,
            animationDuration: h.duration,
            animationDelay: h.delay,
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="var(--rq-blue)" strokeWidth="1">
            <polygon points="50 0, 93 25, 93 75, 50 100, 7 75, 7 25" />
          </svg>
        </div>
      ))}

      {/* Crypto data streams */}
      {cryptoStreams.map(s => (
        <div
          key={s.id}
          className="absolute animate-crypto-stream"
          style={{
            left: s.left,
            width: s.width,
            opacity: s.opacity * opacityMultiplier,
            animationDuration: s.duration,
            animationDelay: s.delay,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '6px',
            color: 'var(--rq-blue)',
            lineHeight: 1.2,
            textAlign: 'center',
            wordBreak: 'break-all',
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
          }}
        >
          {s.chars}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
