import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Box, X, Atom, CheckCircle2, Zap, Cloud } from 'lucide-react';

type Layer = 'physical' | 'engine' | 'quantum' | 'cloud' | null;

const HSMBlueprint: React.FC = () => {
    const [activeLayer, setActiveLayer] = useState<Layer>(null);
    const [entropyBits, setEntropyBits] = useState<string>('10101100');
    const [rotation, setRotation] = useState(45);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const bits = Array.from({ length: 8 }, () => Math.round(Math.random())).join('');
            setEntropyBits(bits);
        }, 150);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (activeLayer) return;
        const anim = setInterval(() => {
            setRotation(prev => prev + 0.3);
        }, 50);
        return () => clearInterval(anim);
    }, [activeLayer]);

    const layerDetails: Record<string, { title: string; desc: string; stats: string[] }> = {
        physical: {
            title: "Physical Boundary",
            desc: "A tamper-resistant magnesium-alloy chassis with active environmental monitoring.",
            stats: ["FIPS 140-3 Level 3", "Tamper-Responsive Mesh", "Environmental Seals"]
        },
        engine: {
            title: "Security Engine",
            desc: "The cryptographic core handling policy enforcement and secure boot.",
            stats: ["Secure Boot Logic", "Policy Enforcement", "Hybrid PQC Acceleration"]
        },
        quantum: {
            title: "Quantum Entropy Engine",
            desc: "A dedicated chip harvesting randomness from quantum tunneling effects.",
            stats: ["QRNG Stochastic Core", "Tunneling Junctions", "NIST SP 800-90B"]
        },
        cloud: {
            title: "Cloud vHSM Interface",
            desc: "The virtualization boundary projecting hardware RoT into cloud VPCs.",
            stats: ["Virtual Air-Gap", "Active Discovery Agent", "REST/gRPC"]
        }
    };

    const getLayerStyle = (layer: Layer) => {
        if (!activeLayer) return {};
        if (activeLayer === layer) return { zIndex: 100, opacity: 1 };
        return { opacity: 0.08, pointerEvents: 'none' as const };
    };

    return (
        <div ref={containerRef} style={{
            width: '100%', padding: '48px 0 48px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            background: 'var(--rq-white)', overflow: 'hidden', position: 'relative',
            borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9',
        }}>
            {/* Particle effects around HSM */}
            {[...Array(20)].map((_, i) => (
                <div key={i} style={{
                    position: 'absolute',
                    width: 2, height: 2,
                    borderRadius: '50%',
                    background: '#2563EB',
                    left: `${30 + Math.random() * 40}%`,
                    top: `${10 + Math.random() * 80}%`,
                    opacity: 0.15 + Math.random() * 0.15,
                    animation: `qubitFloat ${4 + Math.random() * 6}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 4}s`,
                    pointerEvents: 'none',
                }} />
            ))}

            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: 'linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)',
                backgroundSize: '100px 100px',
                WebkitMaskImage: 'radial-gradient(circle at center, black 10%, transparent 80%)',
                maskImage: 'radial-gradient(circle at center, black 10%, transparent 80%)',
                opacity: 0.5,
            }} />

            {activeLayer && (
                <div style={{
                    position: 'absolute', top: 16, right: 16,
                    width: 280, zIndex: 60,
                    background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
                    border: '1px solid #f1f5f9', borderRadius: 24, padding: 24,
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                    animation: 'fadeIn 0.2s ease-out',
                }}>
                    <button
                        onClick={() => setActiveLayer(null)}
                        style={{
                            position: 'absolute', top: 16, right: 16,
                            border: 'none', background: 'none', cursor: 'pointer',
                            color: '#cbd5e1',
                        }}
                    ><X size={18} /></button>
                    <div style={{
                        display: 'inline-block', padding: '2px 8px',
                        background: 'var(--rq-primary-dim)', color: 'var(--rq-primary)',
                        fontSize: 9, fontWeight: 700, textTransform: 'uppercase' as const,
                        letterSpacing: '0.05em', borderRadius: 4, marginBottom: 12,
                    }}>
                        Subsystem Inspector
                    </div>
                    <h4 style={{
                        fontSize: '1.2rem', fontFamily: 'var(--rq-font-heading)',
                        fontWeight: 700, margin: '0 0 6px', color: '#0f172a',
                    }}>{layerDetails[activeLayer].title}</h4>
                    <p style={{
                        fontSize: '0.8rem', color: '#64748b', lineHeight: 1.6, margin: '0 0 20px',
                    }}>{layerDetails[activeLayer].desc}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {layerDetails[activeLayer].stats.map((stat, i) => (
                            <div key={i} style={{
                                display: 'flex', alignItems: 'center', gap: 6,
                                fontSize: 9, fontWeight: 700, color: '#334155',
                                textTransform: 'uppercase' as const, letterSpacing: '0.05em',
                                background: '#f8fafc', padding: '6px 10px',
                                borderRadius: 10, border: '1px solid #f1f5f9',
                            }}>
                                <CheckCircle2 size={10} color="var(--rq-primary)" /> {stat}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div style={{
                position: 'relative',
                width: 300, height: 300,
                marginTop: 16, marginBottom: 40,
                perspective: 4000,
                transform: 'scale(0.85)',
            }}>
                <div style={{
                    position: 'relative', width: '100%', height: '100%',
                    transformStyle: 'preserve-3d',
                    transform: activeLayer
                        ? `rotateX(45deg) rotateZ(15deg) scale(0.85)`
                        : `rotateX(55deg) rotateZ(${rotation}deg)`,
                    transition: activeLayer ? 'all 1s ease-out' : 'none',
                    ...(!activeLayer ? { cursor: 'pointer' } : {}),
                }}>
                    {/* Layer 1: Physical */}
                    <div
                        onClick={() => setActiveLayer('physical')}
                        style={{
                            position: 'absolute', inset: 0,
                            background: '#fff', border: '1px solid #e2e8f0',
                            borderRadius: 48, boxShadow: '20px 20px 100px rgba(15,23,42,0.1)',
                            transform: activeLayer === 'physical'
                                ? 'translateZ(-100px)'
                                : 'translateZ(0px)',
                            transition: 'all 0.7s',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer',
                            ...getLayerStyle('physical'),
                            ...(activeLayer === 'physical' ? { borderColor: 'var(--rq-primary)', borderWidth: 2 } : {}),
                        }}
                    >
                        <div style={{
                            width: '85%', height: '85%',
                            border: '2px dashed #f1f5f9', borderRadius: 40,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            position: 'relative', overflow: 'hidden',
                        }}>
                            <Box size={36} color="#e2e8f0" strokeWidth={0.5} />
                        </div>
                    </div>

                    {/* Layer 2: Engine */}
                    <div
                        onClick={() => setActiveLayer('engine')}
                        style={{
                            position: 'absolute', inset: 0,
                            background: '#0f172a', border: '1px solid #1e293b',
                            borderRadius: 48, overflow: 'hidden',
                            transform: activeLayer === 'engine'
                                ? 'translateZ(20px)'
                                : 'translateZ(90px)',
                            transition: 'all 0.7s',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer',
                            ...getLayerStyle('engine'),
                            ...(activeLayer === 'engine'
                                ? { borderColor: '#3b82f6', borderWidth: 2, boxShadow: '0 0 50px rgba(37,99,235,0.3)' }
                                : {}),
                        }}
                    >
                        <div style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            position: 'relative', zIndex: 10,
                        }}>
                            <div style={{
                                padding: 16, background: '#1e293b', borderRadius: 16,
                                border: '1px solid #334155',
                                transition: 'all 0.5s',
                                ...(activeLayer === 'engine' ? { transform: 'scale(1.1)', borderColor: '#eff6ff' } : {}),
                            }}>
                                <Cpu size={32} color="#3b82f6" strokeWidth={1} />
                            </div>
                        </div>
                    </div>

                    {/* Layer 3: Quantum */}
                    <div
                        onClick={() => setActiveLayer('quantum')}
                        style={{
                            position: 'absolute',
                            width: 260, height: 260,
                            top: '50%', left: '50%',
                            transform: activeLayer === 'quantum'
                                ? 'translate(-50%, -50%) translateZ(300px) scale(1.1)'
                                : 'translate(-50%, -50%) translateZ(180px)',
                            margin: 0,
                            background: '#000', border: '1px solid rgba(59,130,246,0.2)',
                            borderRadius: 48,
                            boxShadow: '0 0 120px rgba(37,99,235,0.2)',
                            transition: 'all 1s',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 50,
                            ...getLayerStyle('quantum'),
                            ...(activeLayer === 'quantum' ? { borderColor: '#60a5fa' } : {}),
                        }}
                    >
                        <div style={{
                            width: '92%', height: '92%',
                            background: '#020617', borderRadius: 40,
                            border: '1px solid rgba(59,130,246,0.1)',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            padding: 24, overflow: 'hidden',
                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)',
                        }}>
                            <div style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                zIndex: 20, width: 128, height: 128,
                            }}>
                                <div style={{
                                    width: 48, height: 48,
                                    background: 'linear-gradient(135deg, #2563eb, #4338ca)',
                                    borderRadius: 12,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: '0 0 60px rgba(37,99,235,0.7)',
                                    animation: 'gatePulse 2s ease-in-out infinite',
                                }}>
                                    <Atom size={24} color="#fff" />
                                </div>
                                <div style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '0.6rem', color: '#3b82f6', marginTop: 16,
                                    letterSpacing: '0.2em',
                                    animation: 'encryptPulse 1.5s ease-in-out infinite',
                                }}>
                                    {entropyBits}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Layer 4: Cloud vHSM */}
                    <div
                        onClick={() => setActiveLayer('cloud')}
                        style={{
                            position: 'absolute', inset: 0,
                            background: 'rgba(239,246,255,0.1)',
                            border: '1px solid rgba(59,130,246,0.3)',
                            borderRadius: 48,
                            boxShadow: '0 0 80px rgba(59,130,246,0.1)',
                            backdropFilter: 'blur(4px)',
                            transform: activeLayer === 'cloud'
                                ? 'translateZ(400px)'
                                : 'translateZ(270px)',
                            transition: 'all 0.7s',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 60,
                            ...getLayerStyle('cloud'),
                            ...(activeLayer === 'cloud' ? { borderColor: '#60a5fa', borderWidth: 2 } : {}),
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#93c5fd' }}>
                            <Cloud size={40} strokeWidth={1} />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                textAlign: 'center', zIndex: 10, padding: '0 24px',
            }}>
                <h3 style={{
                    fontFamily: 'var(--rq-font-heading)',
                    fontSize: '1.1rem', fontWeight: 700,
                    margin: '0 0 12px', color: '#0f172a',
                }}>
                    {activeLayer ? layerDetails[activeLayer].title : 'HSM System Architecture'}
                </h3>
                <div style={{
                    display: 'flex', flexWrap: 'wrap', alignItems: 'center',
                    justifyContent: 'center', gap: 16,
                }}>
                    <span style={{
                        fontSize: 10, fontWeight: 700, color: '#94a3b8',
                        textTransform: 'uppercase', letterSpacing: '0.05em',
                        display: 'flex', alignItems: 'center', gap: 6,
                    }}>
                        <Zap size={10} color="var(--rq-primary)" /> Quantum-Safe Hardware
                    </span>
                    <span style={{
                        width: 6, height: 6, borderRadius: '50%',
                        background: '#e2e8f0',
                    }} />
                    <span style={{
                        fontSize: 10, fontWeight: 700, color: '#94a3b8',
                        textTransform: 'uppercase', letterSpacing: '0.05em',
                        display: 'flex', alignItems: 'center', gap: 6,
                    }}>
                        <Cloud size={10} color="var(--rq-primary)" /> Cloud Virtualization
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HSMBlueprint;
