import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Shield, X, Atom, CheckCircle2, Zap, Cloud, Lock, CircuitBoard } from 'lucide-react';

type Layer = 'physical' | 'engine' | 'quantum' | 'cloud' | null;

const HSMBlueprint: React.FC = () => {
    const [activeLayer, setActiveLayer] = useState<Layer>(null);
    const [entropyBits, setEntropyBits] = useState<string>('10101100');
    const [scanPos, setScanPos] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const bits = Array.from({ length: 12 }, () => Math.round(Math.random())).join('');
            setEntropyBits(bits);
        }, 120);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const anim = setInterval(() => {
            setScanPos(prev => (prev + 1) % 200);
        }, 30);
        return () => clearInterval(anim);
    }, []);

    const layerDetails: Record<string, { title: string; desc: string; stats: string[]; icon: React.ReactNode; color: string }> = {
        physical: {
            title: "Physical Boundary",
            desc: "A tamper-resistant magnesium-alloy chassis with active environmental monitoring and physical security mesh.",
            stats: ["FIPS 140-3 Level 3", "Tamper-Responsive Mesh", "Environmental Seals", "Hardened Ports"],
            icon: <Shield size={28} />,
            color: '#3B82F6',
        },
        engine: {
            title: "Security Engine",
            desc: "The cryptographic core handling policy enforcement, secure boot, and hybrid PQC acceleration.",
            stats: ["Secure Boot Logic", "Policy Enforcement", "Hybrid PQC Acceleration", "Side-Channel Protection"],
            icon: <Cpu size={28} />,
            color: '#8B5CF6',
        },
        quantum: {
            title: "Quantum Entropy Engine",
            desc: "A dedicated chip harvesting randomness from quantum tunneling effects for true entropy generation.",
            stats: ["QRNG Stochastic Core", "Tunneling Junctions", "NIST SP 800-90B", "1 Gbps Entropy Rate"],
            icon: <Atom size={28} />,
            color: '#06B6D4',
        },
        cloud: {
            title: "Cloud vHSM Interface",
            desc: "The virtualization boundary projecting hardware Root of Trust into cloud VPCs and containerized environments.",
            stats: ["Virtual Air-Gap", "Active Discovery Agent", "REST/gRPC API", "Multi-Tenant Isolation"],
            icon: <Cloud size={28} />,
            color: '#10B981',
        }
    };

    const getLayerStyle = (layer: Layer) => {
        if (!activeLayer) return {};
        if (activeLayer === layer) return { zIndex: 100, opacity: 1, transform: 'scale(1.02)' };
        return { opacity: 0.06, pointerEvents: 'none' as const, transform: 'scale(0.95)' };
    };

    return (
        <div ref={containerRef} style={{
            width: '100%', padding: '60px 0 60px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            background: 'var(--rq-bg)', overflow: 'hidden', position: 'relative',
            borderTop: '1px solid var(--rq-border)', borderBottom: '1px solid var(--rq-border)',
        }}>
            {/* Scanning line overlay */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'linear-gradient(to bottom, transparent, transparent, rgba(37,99,235,0.03), transparent, transparent)',
                transform: `translateY(${scanPos - 100}%)`,
                height: '50%', width: '100%',
                zIndex: 5,
            }} />

            {/* Particle network */}
            {[...Array(30)].map((_, i) => (
                <div key={i} style={{
                    position: 'absolute',
                    width: 3, height: 3,
                    borderRadius: '50%',
                    background: i % 3 === 0 ? '#3B82F6' : i % 3 === 1 ? '#8B5CF6' : '#06B6D4',
                    left: `${5 + Math.random() * 90}%`,
                    top: `${5 + Math.random() * 90}%`,
                    opacity: 0.1 + Math.random() * 0.2,
                    animation: `qubitFloat ${3 + Math.random() * 5}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                    pointerEvents: 'none',
                    boxShadow: '0 0 6px currentColor',
                }} />
            ))}

            {/* Circuit grid background */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: `
                    linear-gradient(to right, rgba(37,99,235,0.06) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(37,99,235,0.06) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 25%, transparent 75%)',
                maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 75%)',
            }} />

            {/* Layer selector tabs */}
            <div style={{
                display: 'flex', gap: 4, marginBottom: 40,
                background: 'rgba(255,255,255,0.03)',
                padding: 4, borderRadius: 12,
                border: '1px solid var(--rq-border)',
            }}>
                {(['physical', 'engine', 'quantum', 'cloud'] as Layer[]).map((layer) => {
                    const detail = layerDetails[layer!];
                    const isActive = activeLayer === layer;
                    const isAnyActive = activeLayer !== null;
                    return (
                        <button key={layer}
                            onClick={() => setActiveLayer(isActive ? null : layer)}
                            style={{
                                padding: '8px 16px', borderRadius: 8,
                                border: 'none', cursor: 'pointer',
                                fontFamily: 'var(--rq-font-heading)',
                                fontSize: '0.72rem', fontWeight: 600,
                                color: isActive ? '#fff' : isAnyActive ? 'var(--rq-muted)' : 'var(--rq-text-secondary)',
                                background: isActive ? detail.color : 'transparent',
                                transition: 'all 0.3s',
                                display: 'flex', alignItems: 'center', gap: 6,
                                textTransform: 'uppercase', letterSpacing: '0.04em',
                            }}
                            onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#fff'; } }}
                            onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = isAnyActive ? 'var(--rq-muted)' : 'var(--rq-text-secondary)'; } }}
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
                width: 480, height: 360,
                maxWidth: '90vw',
            }}>
                {/* Connecting traces between layers */}
                <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
                    <defs>
                        <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    {[...Array(5)].map((_, i) => (
                        <path key={i}
                            d={`M ${60 + i * 100} 0 Q ${60 + i * 100} 180, ${60 + i * 100} 360`}
                            stroke="url(#traceGrad)" strokeWidth="1" fill="none"
                            className="animate-circuit-flow"
                            style={{ animationDelay: `${i * 0.3}s`, opacity: 0.3 }}
                        />
                    ))}
                </svg>

                {/* Layer 1: Physical (bottom) */}
                <div
                    onClick={() => setActiveLayer('physical')}
                    style={{
                        position: 'absolute', bottom: 0, left: '5%', right: '5%',
                        height: 110,
                        background: 'linear-gradient(180deg, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.15) 100%)',
                        border: '1px solid rgba(59,130,246,0.3)',
                        borderRadius: 20,
                        cursor: 'pointer',
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        ...getLayerStyle('physical'),
                        ...(activeLayer === 'physical' ? { borderColor: '#3B82F6', borderWidth: 2, boxShadow: '0 0 40px rgba(59,130,246,0.2)' } : {}),
                        ...(activeLayer === null ? { animation: 'dataPulse 3s ease-in-out infinite' } : {}),
                    }}
                >
                    <div style={{
                        width: '92%', height: '80%',
                        border: '1px dashed rgba(59,130,246,0.2)', borderRadius: 14,
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '0 24px',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{
                                width: 36, height: 36, borderRadius: 10,
                                background: 'rgba(59,130,246,0.15)', color: '#60A5FA',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}><Shield size={18} /></div>
                            <div>
                                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#E2E8F0', fontFamily: 'var(--rq-font-heading)' }}>Physical Boundary</div>
                                <div style={{ fontSize: '0.62rem', color: '#64748B', fontFamily: 'var(--rq-font-mono)', marginTop: 2, display: 'flex', gap: 8 }}>
                                    <span style={{ color: '#3B82F6' }}>FIPS 140-3 L3</span>
                                    <span>Tamper Mesh</span>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex', gap: 4, alignItems: 'center',
                            fontFamily: 'var(--rq-font-mono)', fontSize: '0.55rem', color: '#475569',
                        }}>
                            {[...Array(8)].map((_, i) => (
                                <span key={i} style={{
                                    width: 6, height: 18, borderRadius: 1,
                                    background: `rgba(59,130,246,${0.15 + Math.random() * 0.3})`,
                                }} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Layer 2: Engine */}
                <div
                    onClick={() => setActiveLayer('engine')}
                    style={{
                        position: 'absolute', bottom: 120, left: '8%', right: '8%',
                        height: 100,
                        background: 'linear-gradient(180deg, rgba(139,92,246,0.08) 0%, rgba(139,92,246,0.12) 100%)',
                        border: '1px solid rgba(139,92,246,0.25)',
                        borderRadius: 18,
                        cursor: 'pointer',
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        zIndex: 2,
                        ...getLayerStyle('engine'),
                        ...(activeLayer === 'engine' ? { borderColor: '#8B5CF6', borderWidth: 2, boxShadow: '0 0 40px rgba(139,92,246,0.2)' } : {}),
                        ...(activeLayer === null ? { animation: 'dataPulse 3s ease-in-out infinite', animationDelay: '0.5s' } : {}),
                    }}
                >
                    <div style={{
                        width: '88%', height: '76%',
                        border: '1px dashed rgba(139,92,246,0.2)', borderRadius: 12,
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '0 20px',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{
                                width: 36, height: 36, borderRadius: 10,
                                background: 'rgba(139,92,246,0.15)', color: '#A78BFA',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}><Cpu size={18} /></div>
                            <div>
                                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#E2E8F0', fontFamily: 'var(--rq-font-heading)' }}>Security Engine</div>
                                <div style={{ fontSize: '0.62rem', color: '#64748B', fontFamily: 'var(--rq-font-mono)', marginTop: 2, display: 'flex', gap: 8 }}>
                                    <span style={{ color: '#8B5CF6' }}>PQC Accelerator</span>
                                    <span>Secure Boot</span>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex', gap: 3, alignItems: 'center',
                        }}>
                            {['PQC', 'AES', 'RSA'].map((label, i) => (
                                <div key={i} style={{
                                    padding: '2px 6px', borderRadius: 4,
                                    background: 'rgba(139,92,246,0.12)',
                                    color: '#A78BFA',
                                    fontSize: '0.5rem', fontFamily: 'var(--rq-font-mono)', fontWeight: 600,
                                    letterSpacing: '0.05em',
                                }}>{label}</div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Layer 3: Quantum (top) */}
                <div
                    onClick={() => setActiveLayer('quantum')}
                    style={{
                        position: 'absolute', top: 0, left: '12%', right: '12%',
                        height: '95px',
                        background: 'linear-gradient(180deg, rgba(6,182,212,0.12) 0%, rgba(6,182,212,0.08) 100%)',
                        border: '1px solid rgba(6,182,212,0.25)',
                        borderRadius: 18,
                        cursor: 'pointer',
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        zIndex: 3,
                        overflow: 'hidden',
                        ...getLayerStyle('quantum'),
                        ...(activeLayer === 'quantum' ? { borderColor: '#06B6D4', borderWidth: 2, boxShadow: '0 0 50px rgba(6,182,212,0.25)' } : {}),
                        ...(activeLayer === null ? { animation: 'dataPulse 3s ease-in-out infinite', animationDelay: '1s' } : {}),
                    }}
                >
                    {/* Flowing entropy bits */}
                    <div style={{
                        position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <div style={{
                            fontFamily: 'var(--rq-font-mono)',
                            fontSize: '0.55rem', color: 'rgba(6,182,212,0.2)',
                            letterSpacing: '0.3em', whiteSpace: 'nowrap',
                            animation: 'dataFlow 3s linear infinite',
                        }}>
                            {entropyBits} {entropyBits} {entropyBits}
                        </div>
                    </div>
                    <div style={{
                        width: '85%', height: '72%',
                        border: '1px dashed rgba(6,182,212,0.15)', borderRadius: 12,
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '0 20px', position: 'relative', zIndex: 1,
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{
                                width: 36, height: 36, borderRadius: 10,
                                background: 'rgba(6,182,212,0.15)', color: '#22D3EE',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                animation: 'gatePulse 2s ease-in-out infinite',
                            }}><Atom size={18} /></div>
                            <div>
                                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#E2E8F0', fontFamily: 'var(--rq-font-heading)' }}>Quantum Entropy</div>
                                <div style={{ fontSize: '0.62rem', color: '#64748B', fontFamily: 'var(--rq-font-mono)', marginTop: 2, display: 'flex', gap: 8 }}>
                                    <span style={{ color: '#06B6D4' }}>QRNG</span>
                                    <span>{entropyBits.slice(0, 8)}</span>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            fontFamily: 'var(--rq-font-mono)', fontSize: '0.5rem',
                            color: '#22D3EE', display: 'flex', gap: 2,
                            background: 'rgba(6,182,212,0.1)', padding: '4px 8px',
                            borderRadius: 6, letterSpacing: '0.1em',
                        }}>
                            {entropyBits.split('').map((bit, i) => (
                                <span key={i} style={{
                                    color: bit === '1' ? '#22D3EE' : '#475569',
                                    animation: bit === '1' ? 'glowPulse 1.5s ease-in-out infinite' : 'none',
                                    animationDelay: `${i * 0.1}s`,
                                }}>{bit}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Cloud vHSM layer - floating above */}
                <div
                    onClick={() => setActiveLayer('cloud')}
                    style={{
                        position: 'absolute', top: -40, left: '25%', right: '25%',
                        height: 36,
                        background: 'rgba(16,185,129,0.1)',
                        border: '1px solid rgba(16,185,129,0.25)',
                        borderRadius: 12,
                        cursor: 'pointer',
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        zIndex: 4,
                        backdropFilter: 'blur(8px)',
                        ...getLayerStyle('cloud'),
                        ...(activeLayer === 'cloud' ? { borderColor: '#10B981', borderWidth: 2, boxShadow: '0 0 40px rgba(16,185,129,0.2)' } : {}),
                        ...(activeLayer === null ? { animation: 'float 3s ease-in-out infinite' } : {}),
                    }}
                >
                    <div style={{
                        width: '88%',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '0 16px',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Cloud size={14} color="#34D399" />
                            <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#D1FAE5', fontFamily: 'var(--rq-font-heading)' }}>Cloud vHSM</span>
                        </div>
                        <div style={{ fontSize: '0.5rem', color: '#6EE7B7', fontFamily: 'var(--rq-font-mono)', display: 'flex', gap: 4 }}>
                            <span>REST</span>
                            <span>gRPC</span>
                            <span>KMIP</span>
                        </div>
                    </div>
                </div>

                {/* Connection arrows */}
                <div style={{
                    position: 'absolute', top: '50%', right: -20,
                    transform: 'translateY(-50%)',
                    display: 'flex', flexDirection: 'column', gap: 20,
                }}>
                    {['HW Root of Trust', 'PQC Engine', 'Entropy Feed'].map((label, i) => (
                        <div key={i} style={{
                            display: 'flex', alignItems: 'center', gap: 6,
                            fontFamily: 'var(--rq-font-mono)', fontSize: '0.5rem',
                            color: '#475569', letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                        }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M13 5l7 7-7 7"/>
                            </svg>
                            {label}
                        </div>
                    ))}
                </div>
            </div>

            {/* Layer info panel */}
            {activeLayer && (
                <div style={{
                    marginTop: 40, width: '100%', maxWidth: 600,
                    background: 'rgba(255,255,255,0.03)',
                    border: `1px solid ${layerDetails[activeLayer].color}33`,
                    borderRadius: 20, padding: 28,
                    position: 'relative', overflow: 'hidden',
                    animation: 'fadeInUp 0.3s ease-out',
                }}>
                    <div style={{
                        position: 'absolute', top: 0, left: 0,
                        width: 4, height: '100%',
                        background: layerDetails[activeLayer].color,
                        borderRadius: '2px 0 0 2px',
                    }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                        <div>
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8,
                            }}>
                                <span style={{
                                    padding: '2px 8px', borderRadius: 4, fontSize: '0.6rem',
                                    fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
                                    background: `${layerDetails[activeLayer].color}22`,
                                    color: layerDetails[activeLayer].color,
                                    fontFamily: 'var(--rq-font-heading)',
                                }}>Subsystem Inspector</span>
                            </div>
                            <h4 style={{
                                fontSize: '1.1rem', fontFamily: 'var(--rq-font-heading)',
                                fontWeight: 700, margin: 0, color: '#F1F5F9',
                            }}>{layerDetails[activeLayer].title}</h4>
                        </div>
                        <button
                            onClick={() => setActiveLayer(null)}
                            style={{
                                width: 28, height: 28, borderRadius: 8,
                                border: '1px solid var(--rq-border)', background: 'rgba(255,255,255,0.04)',
                                cursor: 'pointer', color: '#64748B',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                transition: 'all 200ms',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = '#64748B'; }}
                        ><X size={14} /></button>
                    </div>
                    <p style={{
                        fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.7,
                        margin: '0 0 20px', maxWidth: 500,
                    }}>{layerDetails[activeLayer].desc}</p>
                    <div style={{
                        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8,
                    }}>
                        {layerDetails[activeLayer].stats.map((stat, i) => (
                            <div key={i} style={{
                                display: 'flex', alignItems: 'center', gap: 8,
                                fontSize: '0.62rem', fontWeight: 600, color: '#94A3B8',
                                textTransform: 'uppercase' as const, letterSpacing: '0.04em',
                                background: 'rgba(255,255,255,0.03)', padding: '8px 12px',
                                borderRadius: 8, border: '1px solid rgba(255,255,255,0.05)',
                            }}>
                                <CheckCircle2 size={12} color={layerDetails[activeLayer].color} />
                                {stat}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Bottom labels */}
            <div style={{
                marginTop: 32, display: 'flex', gap: 24, alignItems: 'center',
                flexWrap: 'wrap', justifyContent: 'center',
            }}>
                {[
                    { label: 'FIPS 140-3 Level 3', color: '#3B82F6' },
                    { label: 'QRNG Entropy', color: '#06B6D4' },
                    { label: 'Hybrid PQC', color: '#8B5CF6' },
                    { label: 'Cloud vHSM', color: '#10B981' },
                ].map((item, i) => (
                    <div key={i} style={{
                        display: 'flex', alignItems: 'center', gap: 6,
                        fontSize: '0.6rem', fontWeight: 700, color: '#64748B',
                        textTransform: 'uppercase', letterSpacing: '0.06em',
                        fontFamily: 'var(--rq-font-heading)',
                    }}>
                        <span style={{
                            width: 8, height: 8, borderRadius: '50%',
                            background: item.color, boxShadow: `0 0 8px ${item.color}44`,
                        }} />
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HSMBlueprint;
