import React, { useMemo } from 'react';

interface Props {
  className?: string;
  complexity?: number;
  color?: string;
}

const QUANTUM_GATES = ['H', 'X', 'Z', 'CNOT', 'T', 'S', 'M'];

const QuantumCircuit: React.FC<Props> = ({ className = '', complexity = 4, color = 'var(--rq-encrypt)' }) => {
  const gates = useMemo(() => {
    const rows = 3;
    const cols = complexity;
    const g: { row: number; col: number; type: string; id: string }[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (Math.random() > 0.3) {
          g.push({
            row: r,
            col: c,
            type: QUANTUM_GATES[Math.floor(Math.random() * QUANTUM_GATES.length)],
            id: `g-${r}-${c}`,
          });
        }
      }
    }
    return g;
  }, [complexity]);

  const cellW = 80;
  const cellH = 80;
  const w = (complexity + 1) * cellW;
  const h = 4 * cellH;

  return (
    <div className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`} style={{ opacity: 0.12 }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet" style={{ minWidth: w, minHeight: h }}>
        <defs>
          <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0.1" />
            <stop offset="50%" stopColor={color} stopOpacity="0.5" />
            <stop offset="100%" stopColor={color} stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Qubit wires (horizontal lines) */}
        {[0, 1, 2].map(row => (
          <line
            key={`wire-${row}`}
            x1={cellW * 0.5}
            y1={cellH * 1.5 + row * cellH}
            x2={w - cellW * 0.5}
            y2={cellH * 1.5 + row * cellH}
            stroke={color}
            strokeWidth="1.5"
            strokeDasharray="6 3"
            opacity="0.4"
            className="animate-circuit-flow"
            style={{ animationDelay: `${row * 0.4}s` }}
          />
        ))}

        {/* Qubit labels */}
        {[0, 1, 2].map(row => (
          <text
            key={`label-${row}`}
            x={cellW * 0.25}
            y={cellH * 1.5 + row * cellH + 4}
            fill={color}
            fontSize="10"
            fontFamily="'JetBrains Mono', monospace"
            fontWeight="500"
          >
            |q{row}⟩
          </text>
        ))}

        {/* Gates */}
        {gates.map(gate => {
          const cx = (gate.col + 1) * cellW + cellW * 0.3;
          const cy = cellH * 1.5 + gate.row * cellH;
          const size = 24;
          const isCNOT = gate.type === 'CNOT';
          const isM = gate.type === 'M';

          return (
            <g key={gate.id} filter="url(#glow)">
              {isCNOT ? (
                <>
                  <circle cx={cx} cy={cy} r={4} fill={color} className="animate-gate-pulse" />
                  <line x1={cx} y1={cy} x2={cx} y2={cy + cellH} stroke={color} strokeWidth="1" opacity="0.6" />
                  <circle cx={cx} cy={cy + cellH} r={8} fill="none" stroke={color} strokeWidth="1.5" className="animate-gate-pulse" style={{ animationDelay: '0.3s' }} />
                  <text x={cx} y={cy + cellH + 3} textAnchor="middle" fill={color} fontSize="6" fontFamily="'JetBrains Mono', monospace">⊕</text>
                </>
              ) : isM ? (
                <>
                  <rect x={cx - size / 2} y={cy - size / 2} width={size} height={size} rx={4} fill="none" stroke={color} strokeWidth="1" className="animate-node-glow" />
                  <text x={cx} y={cy + 3} textAnchor="middle" fill={color} fontSize="8" fontFamily="'JetBrains Mono', monospace">M</text>
                </>
              ) : (
                <>
                  <rect x={cx - size / 2} y={cy - size / 2} width={size} height={size} rx={3} fill="none" stroke={color} strokeWidth="1" className="animate-gate-pulse" />
                  <text x={cx} y={cy + 3} textAnchor="middle" fill={color} fontSize="8" fontFamily="'JetBrains Mono', monospace">{gate.type}</text>
                </>
              )}
            </g>
          );
        })}

        {/* Entanglement pairs */}
        {useMemo(() => {
          const pairs: { x1: number; y1: number; x2: number; y2: number; id: string }[] = [];
          const n = Math.min(complexity, 3);
          for (let i = 0; i < n; i++) {
            const col = Math.floor(Math.random() * (complexity - 1)) + 1;
            pairs.push({
              x1: (col + 1) * cellW + cellW * 0.5,
              y1: cellH * 1.5 + 0 * cellH,
              x2: (col + 1) * cellW + cellW * 0.5,
              y2: cellH * 1.5 + 2 * cellH,
              id: `ent-${i}`,
            });
          }
          return pairs.map(p => (
            <g key={p.id} className="animate-entanglement" style={{ animationDelay: `${Math.random() * 2}s` }}>
              <line x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2} stroke={color} strokeWidth="0.8" strokeDasharray="3 2" opacity="0.3" />
              <circle cx={(p.x1 + p.x2) / 2} cy={(p.y1 + p.y2) / 2} r={3} fill={color} opacity="0.5" />
            </g>
          ));
        }, [complexity, color])}

        {/* Measurement arrows at end */}
        {[0, 1, 2].map(row => {
          const x = w - cellW * 0.4;
          const y = cellH * 1.5 + row * cellH;
          return (
            <g key={`meas-${row}`} className="animate-qubit-float" style={{ animationDelay: `${row * 0.3}s` }}>
              <line x1={x - 8} y1={y - 6} x2={x} y2={y} stroke={color} strokeWidth="1" />
              <line x1={x} y1={y} x2={x - 8} y2={y + 6} stroke={color} strokeWidth="1" />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default QuantumCircuit;
