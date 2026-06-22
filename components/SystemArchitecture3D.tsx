
import React from 'react';
import { Terminal, Database, Lock, ArrowRight, Server, Cloud, Activity, Cpu } from 'lucide-react';

const SystemArchitecture3D: React.FC = () => {
  const steps = [
    {
      label: "Discovery",
      title: "CSPM Scanner",
      icon: <Database size={18} />,
      color: "#2563EB",
      bg: "rgba(37,99,235,0.08)",
      details: "Deep cryptographic asset discovery",
      sub: "Git / Cloud / Containers"
    },
    {
      label: "Analyze",
      title: "QBOM Engine",
      icon: <Cpu size={18} />,
      color: "#7C3AED",
      bg: "rgba(124,58,237,0.08)",
      details: "Q-score risk assessment",
      sub: "PQC vulnerability mapping"
    },
    {
      label: "Remediate",
      title: "HSM Mesh",
      icon: <Lock size={18} />,
      color: "#059669",
      bg: "rgba(5,150,105,0.08)",
      details: "ML-KEM / ML-DSA migration",
      sub: "FIPS 140-3 key wrapping"
    }
  ];

  return (
    <div style={{
      width: '100%', padding: '80px 0',
      background: '#ffffff', overflow: 'hidden', position: 'relative',
      borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9',
    }}>
      {/* Background dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.5,
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: 48, position: 'relative', zIndex: 1, padding: '0 24px' }}>
        <span style={{
          display: 'inline-block', padding: '4px 12px', borderRadius: 100,
          background: 'var(--rq-primary-dim)', color: 'var(--rq-primary)',
          fontSize: '0.68rem', fontWeight: 600, fontFamily: 'var(--rq-font-heading)',
          textTransform: 'uppercase', letterSpacing: '0.06em',
          marginBottom: 14,
        }}>DevSecOps Pipeline</span>
        <h3 style={{
          fontFamily: 'var(--rq-font-heading)',
          fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
          fontWeight: 700, color: '#0f172a', margin: '0 0 8px',
        }}>CryptoBOM Lifecycle</h3>
        <p style={{ color: '#94a3b8', fontSize: '0.82rem', fontFamily: 'var(--rq-font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
          Discover · Analyze · Remediate
        </p>
      </div>

      {/* Pipeline cards */}
      <div style={{
        display: 'flex', gap: 0, maxWidth: 900, margin: '0 auto',
        padding: '0 24px', position: 'relative', zIndex: 1,
        flexWrap: 'wrap', justifyContent: 'center',
      }}>
        {/* Connecting line */}
        <div style={{
          position: 'absolute', top: '50%', left: '15%', right: '15%',
          height: '1px', background: 'linear-gradient(90deg, transparent, #e2e8f0, transparent)',
          display: 'none',
        }} className="md:block" />

        {steps.map((step, i) => (
          <div key={i} style={{
            flex: '1 1 250px', maxWidth: 300,
            padding: '32px 24px', margin: 8,
            background: '#ffffff',
            border: '1px solid #f1f5f9',
            borderRadius: 20,
            transition: 'all 0.3s',
            cursor: 'default',
            position: 'relative',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = step.color;
              e.currentTarget.style.boxShadow = `0 12px 32px ${step.color}12`;
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#f1f5f9';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: step.bg, color: step.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {step.icon}
              </div>
              <span style={{
                fontSize: '9px', fontWeight: 700, color: step.color,
                textTransform: 'uppercase', letterSpacing: '0.1em',
                fontFamily: 'var(--rq-font-heading)',
              }}>Phase 0{i + 1}</span>
            </div>

            <div style={{ marginBottom: 16 }}>
              <div style={{
                fontSize: '9px', fontWeight: 700, color: '#94a3b8',
                textTransform: 'uppercase', letterSpacing: '0.15em',
                fontFamily: 'var(--rq-font-heading)', marginBottom: 6,
              }}>{step.label}</div>
              <h4 style={{
                fontSize: '1.1rem', fontWeight: 700, color: '#0f172a',
                fontFamily: 'var(--rq-font-heading)', margin: 0,
              }}>{step.title}</h4>
            </div>

            <div style={{
              borderTop: '1px solid #f1f5f9', paddingTop: 14,
              display: 'flex', flexDirection: 'column', gap: 8,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: step.color }} />
                <span style={{ fontSize: '9px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{step.details}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#e2e8f0' }} />
                <span style={{ fontSize: '9px', fontWeight: 500, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{step.sub}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Infrastructure Details */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
        maxWidth: 900, margin: '48px auto 0', padding: '0 24px',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{
          padding: 32, background: '#0f172a',
          borderRadius: 24, position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: 0, right: 0, padding: 16, opacity: 0.04, color: '#60A5FA' }}>
            <Server size={100} />
          </div>
          <h4 style={{
            fontSize: '0.68rem', fontWeight: 700, color: '#60A5FA',
            textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12,
            display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--rq-font-heading)',
          }}><Terminal size={14} /> Static Discovery</h4>
          <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.7, margin: 0, maxWidth: 350 }}>
            Continuous scanning of VCS repositories (Git) and CI/CD artifacts to identify "Cryptographic Debt" before deployment. Hooks into standard pipelines via RivicQ CLI.
          </p>
        </div>

        <div style={{
          padding: 32, background: '#ffffff',
          borderRadius: 24, position: 'relative', overflow: 'hidden',
          border: '1px solid #f1f5f9',
        }}>
          <div style={{ position: 'absolute', top: 0, right: 0, padding: 16, opacity: 0.04, color: '#0f172a' }}>
            <Activity size={100} />
          </div>
          <h4 style={{
            fontSize: '0.68rem', fontWeight: 700, color: '#2563EB',
            textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12,
            display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--rq-font-heading)',
          }}><Cloud size={14} /> Dynamic Remediation</h4>
          <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.7, margin: 0, maxWidth: 350 }}>
            Sidecar agents monitor TLS/RPC traffic in runtime clusters (K8s). Policy-driven orchestration forces legacy nodes to wrap classical keys in PQC tunnels (ML-KEM).
          </p>
        </div>
      </div>

      {/* Bottom tag */}
      <div style={{
        textAlign: 'center', marginTop: 40,
        fontFamily: 'var(--rq-font-mono)', fontSize: '9px',
        color: '#94a3b8', letterSpacing: '0.3em',
        fontWeight: 700, textTransform: 'uppercase',
        position: 'relative', zIndex: 1,
      }}>
        RivicQ Protocol Pipeline · Secure-by-Design
      </div>
    </div>
  );
};

export default SystemArchitecture3D;
