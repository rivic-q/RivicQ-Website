import React, { useMemo } from 'react';

const colors = [
  { bg: 'bg-[var(--rq-blue)]', shadow: 'rgba(37,99,235,0.3)' },
  { bg: 'bg-[var(--rq-blue)]', shadow: 'rgba(59,130,246,0.25)' },
];

const QuantumParticles: React.FC<{
  color?: string,
  opacity?: number,
  count?: number,
  variant?: 'dots' | 'circuit' | 'mixed',
  connections?: boolean,
  intensity?: 'low' | 'medium' | 'high',
}> = ({
  color,
  opacity = 0.1,
  count = 20,
  variant = 'mixed',
  connections = false,
  intensity = 'medium',
}) => {
  const intensityMultiplier = { low: 0.6, medium: 1, high: 1.5 }[intensity];

  const particles = useMemo(() => {
    const items: {
      left: string; top: string; size: string; duration: string; delay: string;
      isGate: boolean; gateType?: string; colorIdx: number;
    }[] = [];
    const gateSymbols = ['H', 'X', 'Z', 'T', 'S', 'M'];
    for (let i = 0; i < count; i++) {
      const isGate = variant === 'mixed' ? Math.random() > 0.7 : variant === 'circuit';
      items.push({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: isGate ? `${Math.random() * 14 + 10}px` : `${Math.random() * 8 + 2}px`,
        duration: `${Math.random() * 12 + 8}s`,
        delay: `${Math.random() * 6}s`,
        isGate,
        gateType: isGate ? gateSymbols[Math.floor(Math.random() * gateSymbols.length)] : undefined,
        colorIdx: Math.floor(Math.random() * colors.length),
      });
    }
    return items;
  }, [count, variant]);

  const connections_svg = useMemo(() => {
    if (!connections) return null;
    const lines: { x1: number; y1: number; x2: number; y2: number; delay: string }[] = [];
    for (let i = 0; i < 6; i++) {
      lines.push({
        x1: Math.random() * 100,
        y1: Math.random() * 100,
        x2: Math.random() * 100,
        y2: Math.random() * 100,
        delay: `${Math.random() * 3}s`,
      });
    }
    return lines;
  }, [connections]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {connections && connections_svg && (
        <svg width="100%" height="100%" className="absolute inset-0" style={{ opacity: opacity * 0.5 * intensityMultiplier }}>
          {connections_svg.map((line, i) => (
            <line
              key={i}
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke="var(--rq-blue)"
              strokeWidth="0.5"
              strokeDasharray="4 3"
              opacity="0.3"
              className="animate-circuit-flow"
              style={{ animationDelay: line.delay }}
            />
          ))}
        </svg>
      )}
      {particles.map((p, i) => {
        const c = colors[p.colorIdx];
        const particleColor = color || c.bg;
        const shadowColor = c.shadow;
        return p.isGate ? (
          <div
            key={i}
            className="absolute flex items-center justify-center"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: opacity * 1.5 * intensityMultiplier,
              animation: `gatePulse ${p.duration} ease-in-out infinite`,
              animationDelay: p.delay,
              border: '1px solid var(--rq-blue)',
              borderRadius: 3,
              fontSize: `calc(${p.size} * 0.5)`,
              color: 'var(--rq-blue)',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
              background: 'rgba(37,99,235,0.06)',
              boxShadow: `0 0 10px rgba(37,99,235,0.1)`,
              filter: 'drop-shadow(0 0 3px rgba(37,99,235,0.2))',
            }}
          >
            {p.gateType}
          </div>
        ) : (
          <div
            key={i}
            className={`absolute rounded-full ${particleColor}`}
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: opacity * intensityMultiplier,
              animation: `qubitFloat ${p.duration} ease-in-out infinite`,
              animationDelay: p.delay,
              boxShadow: `0 0 ${parseFloat(p.size) * 2}px ${shadowColor}, 0 0 ${parseFloat(p.size) * 4}px ${shadowColor.replace('0.3', '0.1').replace('0.25', '0.08').replace('0.2', '0.06')}`,
            }}
          />
        );
      })}
    </div>
  );
};

export default QuantumParticles;