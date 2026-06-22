import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Shield, X, Atom, CheckCircle2, Zap, Cloud, Lock } from 'lucide-react';

type Layer = 'physical' | 'engine' | 'quantum' | 'cloud' | null;

const HSMBlueprint: React.FC = () => {
    const [activeLayer, setActiveLayer] = useState<Layer>(null);
    const [entropyBits, setEntropyBits] = useState<string>('10101100');
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const bits = Array.from({ length: 12 }, () => Math.round(Math.random())).join('');
            setEntropyBits(bits);
        }, 120);
        return () => clearInterval(interval);
    }, []);

    const layerDetails: Record<string, { title: string; desc: string; stats: string[]; icon: React.ReactNode; color: string }> = {
        physical: {
            title: "Physical Boundary",
            desc: "A tamper-resistant magnesium-alloy chassis with active environmental monitoring and physical security mesh.",
            stats: ["FIPS 140-3 Level 3", "Tamper-Responsive Mesh", "Environmental Seals", "Hardened Ports"],
            icon: <Shield size={22} />,
            color: '#2563EB',
        },
        engine: {
            title: "Security Engine",
            desc: "The cryptographic core handling policy enforcement, secure boot, and hybrid PQC acceleration.",
            stats: ["Secure Boot Logic", "Policy Enforcement", "Hybrid PQC Acceleration", "Side-Channel Protection"],
            icon: <Cpu size={22} />,
            color: '#7C3AED',
        },
        quantum: {
            title: "Quantum Entropy Engine",
            desc: "A dedicated chip harvesting randomness from quantum tunneling effects for true entropy generation.",
            stats: ["QRNG Stochastic Core", "Tunneling Junctions", "NIST SP 800-90B", "1 Gbps Entropy Rate"],
            icon: <Atom size={22} />,
            color: '#0891B2',
        },
        cloud: {
            title: "Cloud vHSM Interface",
            desc: "The virtualization boundary projecting hardware Root of Trust into cloud VPCs and containerized environments.",
            stats: ["Virtual Air-Gap", "Active Discovery Agent", "REST/gRPC API", "Multi-Tenant Isolation"],
            icon: <Cloud size={22} />,
            color: '#059669',
        }
    };

    const getLayerStyle = (layer: Layer) => {
        if (!activeLayer) return {};
        if (activeLayer === layer) return { zIndex: 100, opacity: 1 };
        return { opacity: 0.06, pointerEvents: 'none' as const };
    };

    return (
        <div ref={containerRef} style={{
            width: '100%', padding: '56px 0 56px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            background: 'var(--rq-white)', overflow: 'hidden', position: 'relative',
            borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9',
        }}>
            {/* Particle network */}
            {[...Array(24)].map((_, i) => (
                <div key={i} style={{
                    position: 'absolute',
                    width: 2, height: 2,
                    borderRadius: '50%',
                    background: i % 3 === 0 ? '#2563EB' : i % 3 === 1 ? '#7C3AED' : '#0891B2',
                    left: `${5 + Math.random() * 90}%`,
                    top: `${5 + Math.random() * 90}%`,
                    opacity: 0.1 + Math.random() * 0.15,
                    animation: `qubitFloat ${3 + Math.random() * 5}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                    pointerEvents: 'none',
                    boxShadow: '0 0 4px currentColor',
                }} />
            ))}

            {/* Grid background */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: 'linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)',
                backgroundSize: '80px 80px',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
                maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
                opacity: 0.6,
            }} />

            {/* Layer selector tabs */}
            <div style={{
                display: 'flex', gap: 4, marginBottom: 36, zIndex: 10,
                background: '#f8fafc', padding: 4, borderRadius: 10,
                border: '1px solid #f1f5f9',
            }}>
                {(['physical', 'engine', 'quantum', 'cloud'] as Layer[]).map((layer) => {
                    const detail = layerDetails[layer!];
                    const isActive = activeLayer === layer;
                    const isAnyActive = activeLayer !== null;
                    return (
                        <button key={layer}
                            onClick={() => setActiveLayer(isActive ? null : layer)}
                            style={{
                                padding: '8px 14px', borderRadius: 8,
                                border: 'none', cursor: 'pointer',
                                fontFamily: 'var(--rq-font-heading)',
                                fontSize: '0.7rem', fontWeight: 600,
                                color: isActive ? '#fff' : isAnyActive ? '#94a3b8' : '#64748b',
                                background: isActive ? detail.color : 'transparent',
                                transition: 'all 0.3s',
                                display: 'flex', alignItems: 'center', gap: 6,
                                textTransform: 'uppercase', letterSpacing: '0.04em',
                            }}
                            onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#0f172a'; } }}
                            onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = isAnyActive ? '#94a3b8' : '#64748b'; } }}
                        >
                            {detail.icon}
                            {detail.title}
                        </button>
                    );
                })}
            </div>

            {/* Main HSM visualization */}
            <div style={{
                position: 'relative',
                width: 480, height: 340,
                maxWidth: '90vw',
            }}>
                {/* Connecting traces between layers */}
                <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
                    <defs>
                        <linearGradient id="traceGradL" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                            <stop offset="50%" stopColor="#2563EB" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    {[...Array(4)].map((_, i) => (
                        <path key={i}
                            d={`M ${60 + i * 120} 0 Q ${60 + i * 120} 170, ${60 + i * 120} 340`}
                            stroke="url(#traceGradL)" strokeWidth="1" fill="none"
                            className="animate-circuit-flow"
                            style={{ animationDelay: `${i * 0.3}s`, opacity: 0.25 }}
                        />
                    ))}
                </svg>

                {/* Layer 1: Physical (bottom) */}
                <div
                    onClick={() => setActiveLayer('physical')}
                    style={{
                        position: 'absolute', bottom: 0, left: '5%', right: '5%',
                        height: 100,
                        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
                        border: '1px solid #e2e8f0',
                        borderRadius: 16,
                        cursor: 'pointer',
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                        ...getLayerStyle('physical'),
                        ...(activeLayer === 'physical' ? { borderColor: '#2563EB', borderWidth: 2, boxShadow: '0 0 30px rgba(37,99,235,0.15)' } : {}),
                    }}
                >
                    <div style={{
                        width: '92%', height: '76%',
                        border: '1px dashed #e2e8f0', borderRadius: 12,
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '0 20px',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{
                                width: 34, height: 34, borderRadius: 8,
                                background: 'rgba(37,99,235,0.1)', color: '#2563EB',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}><Shield size={16} /></div>
                            <div>
                                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--rq-font-heading)' }}>Physical Boundary</div>
                                <div style={{ fontSize: '0.6rem', color: '#94a3b8', fontFamily: 'var(--rq-font-mono)', marginTop: 2, display: 'flex', gap: 8 }}>
                                    <span style={{ color: '#2563EB' }}>FIPS 140-3 L3</span>
                                    <span>Tamper Mesh</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                            {['Mg-Alloy', 'IP68', 'Hardened'].map((label, i) => (
                                <span key={i} style={{
                                    padding: '2px 6px', borderRadius: 4,
                                    background: 'rgba(37,99,235,0.06)', color: '#2563EB',
                                    fontSize: '0.48rem', fontFamily: 'var(--rq-font-mono)', fontWeight: 600,
                                }}>{label}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Layer 2: Engine */}
                <div
                    onClick={() => setActiveLayer('engine')}
                    style={{
                        position: 'absolute', bottom: 110, left: '8%', right: '8%',
                        height: 90,
                        background: 'linear-gradient(180deg, #faf5ff 0%, #f5f3ff 100%)',
                        border: '1px solid #e9d5ff',
                        borderRadius: 14,
                        cursor: 'pointer',
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        zIndex: 2,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                        ...getLayerStyle('engine'),
                        ...(activeLayer === 'engine' ? { borderColor: '#7C3AED', borderWidth: 2, boxShadow: '0 0 30px rgba(124,58,237,0.15)' } : {}),
                    }}
                >
                    <div style={{
                        width: '88%', height: '72%',
                        border: '1px dashed #e9d5ff', borderRadius: 10,
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '0 16px',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{
                                width: 34, height: 34, borderRadius: 8,
                                background: 'rgba(124,58,237,0.1)', color: '#7C3AED',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}><Cpu size={16} /></div>
                            <div>
                                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--rq-font-heading)' }}>Security Engine</div>
                                <div style={{ fontSize: '0.6rem', color: '#94a3b8', fontFamily: 'var(--rq-font-mono)', marginTop: 2, display: 'flex', gap: 8 }}>
                                    <span style={{ color: '#7C3AED' }}>PQC Accelerator</span>
                                    <span>Secure Boot</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                            {['ML-KEM', 'ML-DSA', 'AES'].map((label, i) => (
                                <span key={i} style={{
                                    padding: '2px 6px', borderRadius: 4,
                                    background: 'rgba(124,58,237,0.06)', color: '#7C3AED',
                                    fontSize: '0.48rem', fontFamily: 'var(--rq-font-mono)', fontWeight: 600,
                                }}>{label}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Layer 3: Quantum (top) */}
                <div
                    onClick={() => setActiveLayer('quantum')}
                    style={{
                        position: 'absolute', top: 0, left: '12%', right: '12%',
                        height: 85,
                        background: 'linear-gradient(180deg, #ecfeff 0%, #f0fdfa 100%)',
                        border: '1px solid #a5f3fc',
                        borderRadius: 14,
                        cursor: 'pointer',
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        zIndex: 3,
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                        ...getLayerStyle('quantum'),
                        ...(activeLayer === 'quantum' ? { borderColor: '#0891B2', borderWidth: 2, boxShadow: '0 0 30px rgba(8,145,178,0.2)' } : {}),
                    }}
                >
                    {/* Flowing entropy bits */}
                    <div style={{
                        position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <div style={{
                            fontFamily: 'var(--rq-font-mono)',
                            fontSize: '0.55rem', color: 'rgba(8,145,178,0.12)',
                            letterSpacing: '0.3em', whiteSpace: 'nowrap',
                            animation: 'dataFlow 3s linear infinite',
                        }}>
                            {entropyBits} {entropyBits} {entropyBits}
                        </div>
                    </div>
                    <div style={{
                        width: '85%', height: '68%',
                        border: '1px dashed #a5f3fc', borderRadius: 10,
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '0 16px', position: 'relative', zIndex: 1,
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{
                                width: 34, height: 34, borderRadius: 8,
                                background: 'rgba(8,145,178,0.1)', color: '#0891B2',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                animation: 'gatePulse 2s ease-in-out infinite',
                            }}><Atom size={16} /></div>
                            <div>
                                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--rq-font-heading)' }}>Quantum Entropy</div>
                                <div style={{ fontSize: '0.6rem', color: '#94a3b8', fontFamily: 'var(--rq-font-mono)', marginTop: 2, display: 'flex', gap: 8 }}>
                                    <span style={{ color: '#0891B2' }}>QRNG</span>
                                    <span>{entropyBits.slice(0, 8)}</span>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            fontFamily: 'var(--rq-font-mono)', fontSize: '0.5rem',
                            color: '#0891B2', display: 'flex', gap: 2,
                            background: 'rgba(8,145,178,0.06)', padding: '4px 8px',
                            borderRadius: 4, letterSpacing: '0.1em',
                        }}>
                            {entropyBits.split('').map((bit, i) => (
                                <span key={i} style={{
                                    color: bit === '1' ? '#0891B2' : '#cbd5e1',
                                }}>{bit}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Cloud vHSM layer - floating above */}
                <div
                    onClick={() => setActiveLayer('cloud')}
                    style={{
                        position: 'absolute', top: -36, left: '25%', right: '25%',
                        height: 32,
                        background: 'rgba(240,253,244,0.9)',
                        border: '1px solid #a7f3d0',
                        borderRadius: 10,
                        cursor: 'pointer',
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        zIndex: 4,
                        backdropFilter: 'blur(8px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                        ...getLayerStyle('cloud'),
                        ...(activeLayer === 'cloud' ? { borderColor: '#059669', borderWidth: 2, boxShadow: '0 0 30px rgba(5,150,105,0.15)' } : {}),
                        ...(activeLayer === null ? { animation: 'float 3s ease-in-out infinite' } : {}),
                    }}
                >
                    <div style={{
                        width: '88%',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '0 12px',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <Cloud size={12} color="#059669" />
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#065f46', fontFamily: 'var(--rq-font-heading)' }}>Cloud vHSM</span>
                        </div>
                        <div style={{ fontSize: '0.48rem', color: '#059669', fontFamily: 'var(--rq-font-mono)', display: 'flex', gap: 4 }}>
                            <span>REST</span>
                            <span>gRPC</span>
                            <span>KMIP</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Layer info panel */}
            {activeLayer && (
                <div style={{
                    marginTop: 36, width: '100%', maxWidth: 560,
                    background: '#ffffff',
                    border: `1px solid ${layerDetails[activeLayer].color}22`,
                    borderRadius: 16, padding: 24,
                    position: 'relative', overflow: 'hidden',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                    animation: 'fadeInUp 0.3s ease-out',
                }}>
                    <div style={{
                        position: 'absolute', top: 0, left: 0,
                        width: 3, height: '100%',
                        background: layerDetails[activeLayer].color,
                    }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                        <div>
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6,
                            }}>
                                <span style={{
                                    padding: '2px 8px', borderRadius: 4, fontSize: '0.58rem',
                                    fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
                                    background: `${layerDetails[activeLayer].color}12`,
                                    color: layerDetails[activeLayer].color,
                                    fontFamily: 'var(--rq-font-heading)',
                                }}>Subsystem Inspector</span>
                            </div>
                            <h4 style={{
                                fontSize: '1.1rem', fontFamily: 'var(--rq-font-heading)',
                                fontWeight: 700, margin: 0, color: '#0f172a',
                            }}>{layerDetails[activeLayer].title}</h4>
                        </div>
                        <button
                            onClick={() => setActiveLayer(null)}
                            style={{
                                width: 26, height: 26, borderRadius: 6,
                                border: '1px solid #f1f5f9', background: '#fafafa',
                                cursor: 'pointer', color: '#94a3b8',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                transition: 'all 200ms',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#0f172a'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = '#fafafa'; e.currentTarget.style.color = '#94a3b8'; }}
                        ><X size={12} /></button>
                    </div>
                    <p style={{
                        fontSize: '0.85rem', color: '#64748b', lineHeight: 1.7,
                        margin: '0 0 18px', maxWidth: 480,
                    }}>{layerDetails[activeLayer].desc}</p>
                    <div style={{
                        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6,
                    }}>
                        {layerDetails[activeLayer].stats.map((stat, i) => (
                            <div key={i} style={{
                                display: 'flex', alignItems: 'center', gap: 6,
                                fontSize: '0.6rem', fontWeight: 600, color: '#475569',
                                textTransform: 'uppercase' as const, letterSpacing: '0.04em',
                                background: '#f8fafc', padding: '6px 10px',
                                borderRadius: 8, border: '1px solid #f1f5f9',
                            }}>
                                <CheckCircle2 size={10} color={layerDetails[activeLayer].color} />
                                {stat}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Bottom labels */}
            <div style={{
                marginTop: 28, display: 'flex', gap: 20, alignItems: 'center',
                flexWrap: 'wrap', justifyContent: 'center',
            }}>
                {[
                    { label: 'FIPS 140-3 Level 3', color: '#2563EB' },
                    { label: 'QRNG Entropy', color: '#0891B2' },
                    { label: 'Hybrid PQC', color: '#7C3AED' },
                    { label: 'Cloud vHSM', color: '#059669' },
                ].map((item, i) => (
                    <div key={i} style={{
                        display: 'flex', alignItems: 'center', gap: 6,
                        fontSize: '0.6rem', fontWeight: 700, color: '#94a3b8',
                        textTransform: 'uppercase', letterSpacing: '0.06em',
                        fontFamily: 'var(--rq-font-heading)',
                    }}>
                        <span style={{
                            width: 6, height: 6, borderRadius: '50%',
                            background: item.color,
                        }} />
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HSMBlueprint;
