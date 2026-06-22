
import React from 'react';
import { Github, Terminal, Database, ShieldAlert, Lock, ArrowRight, Server, Cloud, Activity, Cpu } from 'lucide-react';

const SystemArchitecture3D: React.FC = () => {
  const steps = [
    {
      label: "Discovery",
      title: "CSPM Scanner",
      icon: <Database size={20} />,
      color: "#3B82F6",
      bg: "rgba(59,130,246,0.12)",
      details: "Deep cryptographic asset discovery",
      sub: "Git / Cloud / Containers"
    },
    {
      label: "Analyze",
      title: "QBOM Engine",
      icon: <Cpu size={20} />,
      color: "#8B5CF6",
      bg: "rgba(139,92,246,0.12)",
      details: "Q-score risk assessment",
      sub: "PQC vulnerability mapping"
    },
    {
      label: "Remediate",
      title: "HSM Mesh",
      icon: <Lock size={20} />,
      color: "#10B981",
      bg: "rgba(16,185,129,0.12)",
      details: "ML-KEM / ML-DSA migration",
      sub: "FIPS 140-3 key wrapping"
    }
  ];

  return (
    <div style={{
      width: '100%', padding: '80px 0',
      background: 'var(--rq-surface)', overflow: 'hidden', position: 'relative',
      borderTop: '1px solid var(--rq-border)', borderBottom: '1px solid var(--rq-border)',
    }}>
      {/* Circuit grid background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.06) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: 48, position: 'relative', zIndex: 1, padding: '0 24px' }}>
        <span style={{
          display: 'inline-block', padding: '4px 12px', borderRadius: 100,
          background: 'rgba(37,99,235,0.12)', color: '#60A5FA',
          fontSize: '0.68rem', fontWeight: 600, fontFamily: 'var(--rq-font-heading)',
          textTransform: 'uppercase', letterSpacing: '0.06em', border: '1px solid rgba(37,99,235,0.2)',
          marginBottom: 14,
        }}>DevSecOps Pipeline</span>
        <h3 style={{
          fontFamily: 'var(--rq-font-heading)',
          fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
          fontWeight: 700, color: '#F1F5F9', margin: '0 0 8px',
        }}>CryptoBOM Lifecycle</h3>
        <p style={{ color: '#64748B', fontSize: '0.88rem', fontFamily: 'var(--rq-font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
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
          height: '1px', background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.2), transparent)',
          display: 'none',
        }} className="md:block" />

        {steps.map((step, i) => (
          <div key={i} style={{
            flex: '1 1 250px', maxWidth: 300,
            padding: '32px 24px', margin: 8,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 20,
            transition: 'all 0.4s',
            cursor: 'default',
            position: 'relative',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = step.color;
              e.currentTarget.style.background = `${step.color}08`;
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3)`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Phase badge */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24,
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

            <div style={{ marginBottom: 20 }}>
              <div style={{
                fontSize: '9px', fontWeight: 700, color: '#64748B',
                textTransform: 'uppercase', letterSpacing: '0.15em',
                fontFamily: 'var(--rq-font-heading)', marginBottom: 6,
              }}>{step.label}</div>
              <h4 style={{
                fontSize: '1.1rem', fontWeight: 700, color: '#F1F5F9',
                fontFamily: 'var(--rq-font-heading)', margin: 0,
              }}>{step.title}</h4>
            </div>

            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16,
              display: 'flex', flexDirection: 'column', gap: 10,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: step.color }} />
                <span style={{ fontSize: '9px', fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{step.details}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                <span style={{ fontSize: '9px', fontWeight: 500, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{step.sub}</span>
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
          padding: 32, background: 'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.9) 100%)',
          borderRadius: 24, position: 'relative', overflow: 'hidden',
          border: '1px solid rgba(37,99,235,0.15)',
        }}>
          <div style={{ position: 'absolute', top: 0, right: 0, padding: 16, opacity: 0.04, color: '#60A5FA' }}>
            <Server size={100} />
          </div>
          <h4 style={{
            fontSize: '0.72rem', fontWeight: 700, color: '#60A5FA',
            textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12,
            display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--rq-font-heading)',
          }}><Terminal size={14} /> Static Discovery</h4>
          <p style={{ fontSize: '0.82rem', color: '#94A3B8', lineHeight: 1.7, margin: 0, maxWidth: 350 }}>
            Continuous scanning of VCS repositories (Git) and CI/CD artifacts to identify "Cryptographic Debt" before deployment. Hooks into standard pipelines via RivicQ CLI.
          </p>
        </div>

        <div style={{
          padding: 32, background: 'rgba(255,255,255,0.03)',
          borderRadius: 24, position: 'relative', overflow: 'hidden',
          border: '1px solid var(--rq-border)',
        }}>
          <div style={{ position: 'absolute', top: 0, right: 0, padding: 16, opacity: 0.04, color: '#3B82F6' }}>
            <Activity size={100} />
          </div>
          <h4 style={{
            fontSize: '0.72rem', fontWeight: 700, color: '#60A5FA',
            textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12,
            display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--rq-font-heading)',
          }}><Cloud size={14} /> Dynamic Remediation</h4>
          <p style={{ fontSize: '0.82rem', color: '#94A3B8', lineHeight: 1.7, margin: 0, maxWidth: 350 }}>
            Sidecar agents monitor TLS/RPC traffic in runtime clusters (K8s). Policy-driven orchestration forces legacy nodes to wrap classical keys in PQC tunnels (ML-KEM).
          </p>
        </div>
      </div>

      {/* Bottom tag */}
      <div style={{
        textAlign: 'center', marginTop: 40,
        fontFamily: 'var(--rq-font-mono)', fontSize: '9px',
        color: '#475569', letterSpacing: '0.3em',
        fontWeight: 700, textTransform: 'uppercase',
        position: 'relative', zIndex: 1,
      }}>
        RivicQ Protocol Pipeline · Secure-by-Design
      </div>
    </div>
  );
};

export default SystemArchitecture3D;
