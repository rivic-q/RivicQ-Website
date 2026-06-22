import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/Badge';
import HSMBlueprint from '../components/HSMBlueprint';
import QuantumCircuit from '../components/QuantumCircuit';
import { Shield, Search, FileCode, Lock, ArrowRight, ChevronRight, Sparkles, Zap, Globe, Layers, TrendingUp, Users, BookOpen, Terminal, Award, ExternalLink } from 'lucide-react';

function AnimatedTerminal() {
  const [text, setText] = useState('');
  const fullText = '$ rivicq scan --cbom --deep --risk-score\n  ✓ Scanning 1,247 files...\n  ✓ 89 cryptographic assets found\n  ✓ QBOM generated: inventory.cbom.json\n  ✓ Q-score: 0.32 — Moderate Risk';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: '#0E141B', borderRadius: 12, padding: '20px 24px',
      fontFamily: 'var(--rq-font-mono)', fontSize: '0.8rem', lineHeight: 1.8,
      border: '1px solid #1E293B', boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
      overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 14, paddingBottom: 12, borderBottom: '1px solid #1E293B' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f' }} />
        <span style={{ fontSize: '0.6rem', color: '#475569', marginLeft: 8 }}>rivicq-scan — bash</span>
      </div>
      <pre style={{ margin: 0, color: '#94A3B8', whiteSpace: 'pre-wrap' }}>
        {text.split('\n').map((line, i) => (
          <div key={i} style={{
            color: line.startsWith('$') ? '#93C5FD' : line.startsWith('  ✓') ? '#10B981' : line === '' ? '' : '#94A3B8',
          }}>{line || '\u00A0'}</div>
        ))}
        {text.length < fullText.length && <span style={{ color: '#10B981', animation: 'blink 1s step-end infinite' }}>▌</span>}
      </pre>
    </div>
  );
}

function StatsBar() {
  const stats = [
    { value: '6', label: 'NIST PQC Standards' },
    { value: '6', label: 'Regulatory Frameworks' },
    { value: '5', label: 'Products' },
    { value: '2', label: 'ETSI + IQC Delegate' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: 'var(--rq-border-light)', borderRadius: 16, overflow: 'hidden' }} className="md:grid-cols-4">
      {stats.map((s, i) => (
        <div key={i} style={{ background: 'var(--rq-white)', padding: '24px 16px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--rq-font-heading)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--rq-primary)', letterSpacing: '-0.03em' }}>{s.value}</div>
          <div style={{ fontSize: '0.78rem', color: 'var(--rq-text-secondary)', marginTop: 4 }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: 'calc(100vh - 68px)', display: 'flex', alignItems: 'center',
        justifyContent: 'center', padding: '100px 24px 60px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Background effects */}
        <div style={{
          position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
        }}>
          <div style={{
            position: 'absolute', top: '20%', left: '10%', width: 400, height: 400,
            borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,86,219,0.08) 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute', bottom: '10%', right: '5%', width: 300, height: 300,
            borderRadius: '50%', background: 'radial-gradient(circle, rgba(11,170,138,0.06) 0%, transparent 70%)',
            animation: 'float 6s ease-in-out infinite',
          }} />
        </div>

        <div style={{ maxWidth: 900, position: 'relative', zIndex: 1 }}>
          <Badge variant="primary">PQC Encryption · HSM · QBOM/CSPM</Badge>
          <h1 style={{
            fontFamily: 'var(--rq-font-heading)',
            fontSize: 'clamp(2.2rem, 5.5vw, 3.6rem)',
            fontWeight: 700, lineHeight: 1.1, margin: '24px 0 16px',
            letterSpacing: '-0.03em',
          }}>
            Quantum-Safe{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--rq-primary), var(--rq-accent))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Encryption
            </span>
            <br />
            Infrastructure for the Post-Quantum Era
          </h1>
          <p style={{
            color: 'var(--rq-text-secondary)', fontSize: '1.05rem', maxWidth: 680,
            margin: '0 auto 32px', lineHeight: 1.7,
          }}>
            Berlin-founded deep tech at the intersection of post-quantum encryption,
            FIPS 140-3 Hardware Security Modules, QBOM cryptographic inventory,
            and EU regulatory compliance (DORA/NIS2/BSI).
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/enterprise" className="btn btn-primary btn-lg">
              Start Your Encryption Audit
              <ArrowRight size={18} />
            </Link>
            <Link to="/compliance" className="btn btn-secondary btn-lg">
              Compliance Deadlines
            </Link>
          </div>

          <div style={{ marginTop: 48, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            <AnimatedTerminal />
          </div>
        </div>
      </section>

      {/* Urgency bar */}
      <div style={{
        background: 'var(--rq-primary-dim)', borderTop: '1px solid rgba(26,86,219,0.12)',
        borderBottom: '1px solid rgba(26,86,219,0.12)', padding: '14px 24px', textAlign: 'center',
      }}>
        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--rq-primary)', fontFamily: 'var(--rq-font-mono)' }}>
          HNDL threat active · DORA in effect since Jan 2025 · NIST PQC deadline 2035 · QBOM standardizing 2026
        </p>
      </div>

      {/* Stats */}
      <section className="section-padding">
        <div className="page-container" style={{ maxWidth: 900 }}>
          <StatsBar />
        </div>
      </section>

      {/* Problem → Solution → RivicQ */}
      <section className="section-padding" style={{ background: 'var(--rq-white)' }}>
        <div className="page-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: 20 }} className="md:grid-cols-3">
            <div className="card">
              <div style={{ color: 'var(--rq-warning)', fontSize: '0.72rem', fontWeight: 600, fontFamily: 'var(--rq-font-heading)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>The Problem</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>Harvest Now, Decrypt Later</h3>
              <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>
                Every byte of encrypted data collected today — TLS sessions, VPN tunnels, encrypted databases, code signatures — will be decrypted by quantum computers tomorrow. PKI, UPI, Aadhaar, and 50+ year data lifespans are all vulnerable.
              </p>
            </div>
            <div className="card">
              <div style={{ color: 'var(--rq-primary)', fontSize: '0.72rem', fontWeight: 600, fontFamily: 'var(--rq-font-heading)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>The Solution</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>NIST PQC Encryption</h3>
              <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>
                FIPS 203 (<span className="mono">ML-KEM</span>) for key exchange, FIPS 204 (<span className="mono">ML-DSA</span>) for signatures, AES-256-GCM for bulk encryption. Hybrid classical+PQC key derivation. The question is not <em>if</em> but <em>how</em> to migrate.
              </p>
            </div>
            <div className="card card-accent" style={{ borderColor: 'var(--rq-primary)' }}>
              <div style={{ color: 'var(--rq-primary)', fontSize: '0.72rem', fontWeight: 600, fontFamily: 'var(--rq-font-heading)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>Enter RivicQ</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>QBOM → HSM → Encryption</h3>
              <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>
                Discover your encryption posture with <span className="mono">CSPM+QBOM</span> Scanner. Secure keys with FIPS 140-3 CloudHSM. Migrate with <span className="mono">RQSP</span> hybrid PQC transport. Quantify risk with QBOM Q-scores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline section */}
      <section className="section-padding">
        <div className="page-container" style={{ maxWidth: 1000 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Badge variant="primary">DevSecOps · CSPM+QBOM</Badge>
            <h2 style={{
              fontFamily: 'var(--rq-font-heading)', fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 700, marginTop: 14, letterSpacing: '-0.02em',
            }}>RivicQ DevSecOps Pipeline</h2>
            <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.95rem', marginTop: 10, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              Automated cryptographic discovery, risk scoring, and PQC remediation — embedded in your CI/CD.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }} className="md:grid-cols-4">
            {[
              { icon: Search, label: 'Discover', title: 'CSPM Scanner', desc: 'Deep discovery of all cryptographic assets', color: '#3B82F6' },
              { icon: FileCode, label: 'Analyze', title: 'QBOM Risk Scoring', desc: 'Quantum vulnerability Q-score for each asset', color: '#2563EB' },
              { icon: Shield, label: 'Remediate', title: 'PQC Migration', desc: 'Automated RSA→ML-KEM, ECDSA→ML-DSA', color: '#1D4ED8' },
              { icon: Lock, label: 'Deploy', title: 'HSM-Backed Encryption', desc: 'FIPS 140-3 keys with PQC hybrid transport', color: '#143FA8' },
            ].map((stage, i) => {
              const Icon = stage.icon;
              return (
                <div key={i} className="card" style={{ textAlign: 'center' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, margin: '0 auto 12px',
                    background: 'var(--rq-primary-dim)', color: 'var(--rq-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={20} />
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--rq-muted)', fontFamily: 'var(--rq-font-heading)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{stage.label}</div>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: 6 }}>{stage.title}</h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--rq-text-secondary)', lineHeight: 1.5, margin: 0 }}>{stage.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products overview */}
      <section className="section-padding" style={{ background: 'var(--rq-white)' }}>
        <div className="page-container" style={{ maxWidth: 1000 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Badge variant="primary">Encryption Platform</Badge>
            <h2 style={{
              fontFamily: 'var(--rq-font-heading)', fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 700, marginTop: 14, letterSpacing: '-0.02em',
            }}>Complete Encryption Stack</h2>
            <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.95rem', marginTop: 10, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              From cryptographic discovery to HSM-backed deployment — the full post-quantum lifecycle.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: 16 }} className="md:grid-cols-2">
            {[
              { icon: Search, title: 'CSPM Scanner', desc: 'Deep cryptographic discovery across repos, containers, and cloud VPCs. Detects every encryption primitive, cert, and key.', href: '/products' },
              { icon: TrendingUp, title: 'QBOM Analyzer', desc: 'Quantum vulnerability scoring. Each asset gets a Q-score (0.0–1.0). Maps to NIST PQC replacements with priority ordering.', href: '/products' },
              { icon: Shield, title: 'CloudHSM', desc: 'FIPS 140-3 Level 3 HSM as a Service. REST/gRPC API, PKCS#11, QRNG entropy injection, automated key rotation.', href: '/cloud-hsm' },
              { icon: Layers, title: 'RQSP Protocol', desc: 'Hybrid classical+PQC transport encryption. X25519+ML-KEM key agreement with AES-256-GCM bulk encryption.', href: '/rqsp' },
              { icon: Globe, title: 'Platform', desc: 'Enterprise encryption architecture. On-prem, cloud vHSM, hybrid split-key. DORA/NIS2 ready.', href: '/platform' },
              { icon: Terminal, title: 'SDK & APIs', desc: 'Developer bindings for Python, Go, Rust, TypeScript. Integrate PQC encryption in minutes.', href: '/sdk' },
            ].map((product, i) => {
              const Icon = product.icon;
              return (
                <Link key={i} to={product.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="card card-hover" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: 'var(--rq-primary-dim)', color: 'var(--rq-primary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 4 }}>{product.title}</h3>
                      <p style={{ fontSize: '0.82rem', color: 'var(--rq-text-secondary)', lineHeight: 1.6, margin: 0 }}>{product.desc}</p>
                    </div>
                    <ChevronRight size={16} style={{ color: 'var(--rq-muted)', flexShrink: 0, marginTop: 4 }} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* QBOM Section */}
      <section className="section-padding">
        <div className="page-container" style={{ maxWidth: 900 }}>
          <div className="card card-accent" style={{ padding: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <Badge variant="primary">New</Badge>
              <span style={{ fontFamily: 'var(--rq-font-heading)', fontSize: '0.72rem', color: 'var(--rq-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Quantum Bill of Materials</span>
            </div>
            <h3 style={{
              fontFamily: 'var(--rq-font-heading)', fontSize: '1.3rem', fontWeight: 700, marginBottom: 8,
            }}>
              QBOM: Know Your Encryption Risk <span className="mono" style={{ color: 'var(--rq-primary)', fontSize: '0.95rem' }}>Q-score</span>
            </h3>
            <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 20 }}>
              Every cryptographic asset gets a quantum vulnerability score. <span className="mono">Q-score 0.0</span> = safe (AES-256). <span className="mono">Q-score 1.0</span> = critical (RSA-2048). Map your entire encryption inventory to NIST PQC replacements with automated remediation prioritization.
            </p>
            <div style={{
              background: '#0E141B', borderRadius: 10, padding: '16px 20px',
              fontFamily: 'var(--rq-font-mono)', fontSize: '0.8rem', lineHeight: 1.8,
              color: '#94A3B8', border: '1px solid #1E293B',
            }}>
              <div style={{ color: '#93C5FD' }}>$ rivicq qbom scan --risk-score</div>
              <div style={{ color: '#10B981' }}>  ✓ RSA-2048 key  → Q-score 0.92 → migrate to ML-KEM-768</div>
              <div style={{ color: '#10B981' }}>  ✓ ECDSA P-256   → Q-score 0.85 → migrate to ML-DSA-65</div>
              <div style={{ color: '#10B981' }}>  ✓ AES-256-GCM   → Q-score 0.08 → PQ-safe</div>
              <div style={{ color: '#10B981' }}>  ✓ CSPM+QBOM generated: inventory.cdx.json</div>
            </div>
          </div>
        </div>
      </section>

      {/* HSM Architecture */}
      <section className="section-padding" style={{ background: 'var(--rq-white)', position: 'relative', overflow: 'hidden' }}>
        <QuantumCircuit complexity={6} color="var(--rq-primary)" />
        <div className="page-container" style={{ maxWidth: 1000, position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <Badge variant="primary">CloudHSM</Badge>
            <h2 style={{
              fontFamily: 'var(--rq-font-heading)', fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 700, marginTop: 14, letterSpacing: '-0.02em',
            }}>HSM-Backed Encryption Architecture</h2>
            <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.95rem', marginTop: 10, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              Every encryption operation originates from a FIPS 140-3 hardware boundary. Tap a layer to inspect.
            </p>
          </div>

          <HSMBlueprint />

          {/* Telecom HSM use case */}
          <div className="card card-accent" style={{ marginTop: 8, padding: 24, borderColor: 'var(--rq-primary)' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: 'var(--rq-primary-dim)', color: 'var(--rq-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 250 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Telecommunications HSM Deployment</h3>
                  <Badge variant="accent">5G · ETSI QSC</Badge>
                </div>
                <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>
                  RivicQ CloudHSM supports telecom-grade key management for 5G core networks, SIM/eSIM
                  provisioning, and ETSI QSC-compliant PQC migration. HSM-backed key storage with
                  FIPS 140-3 Level 3 protection for subscriber authentication, network slicing
                  encryption, and signaling integrity. On-prem and vHSM deployment models available
                  for mobile network operators and infrastructure providers.
                </p>
                <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
                  {['5G Core Encryption', 'SIM/eSIM Key Mgmt', 'ETSI QSC 001', 'Subscriber Privacy', 'Network Slicing'].map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target segments */}
      <section className="section-padding">
        <div className="page-container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Badge variant="primary">Target Segments</Badge>
            <h2 style={{
              fontFamily: 'var(--rq-font-heading)', fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 700, marginTop: 14, letterSpacing: '-0.02em',
            }}>Built for These Teams</h2>
            <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.95rem', marginTop: 10, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              Engineer-to-engineer. Real encryption migration for real threat models.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: 16 }} className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: Shield, title: 'CISOs', desc: 'QBOM compliance for DORA/NIS2 board reporting. Full encryption posture visibility.' },
              { icon: Users, title: 'Security Engineers', desc: 'CSPM scanner + HSM API. Automate crypto discovery and remediation.' },
              { icon: BookOpen, title: 'DevSecOps', desc: 'Embed PQC migration into CI/CD pipelines. From scan to deploy.' },
              { icon: Globe, title: 'Government', desc: 'FIPS 140-3, BSI-approved. Sovereign encryption infrastructure.' },
              { icon: Zap, title: 'Telecom', desc: '5G core encryption, SIM/eSIM key management, ETSI QSC compliance.' },
            ].map((segment, i) => {
              const Icon = segment.icon;
              return (
                <div key={i} className="card" style={{ textAlign: 'center' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, margin: '0 auto 12px',
                    background: 'var(--rq-primary-dim)', color: 'var(--rq-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} />
                  </div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 6 }}>{segment.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--rq-text-secondary)', lineHeight: 1.6, margin: 0 }}>{segment.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section className="section-padding" style={{ background: 'var(--rq-white)' }}>
        <div className="page-container" style={{ maxWidth: 900 }}>
          <div className="card card-accent" style={{ padding: 36, textAlign: 'center' }}>
            <Badge variant="primary">Pre-Seed / Seed</Badge>
            <h3 style={{
              fontFamily: 'var(--rq-font-heading)', fontSize: '1.3rem', fontWeight: 700,
              marginTop: 14, marginBottom: 10,
            }}>Building the Post-Quantum Encryption Layer</h3>
            <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 600, margin: '0 auto 20px' }}>
              RivicQ is closing its seed round. Berlin-founded deep tech at the intersection of PQC encryption,
              FIPS 140-3 HSM, QBOM cryptographic inventory, and EU regulatory compliance. Enterprise pilots underway
              with government and critical infrastructure.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
              {['ETSI / IQC Delegate', 'Horizenlabs Partner', 'BSI Congress', 'EURA AG LOI', 'Leap Berlin', '6 Standards'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/pitch-deck" className="btn btn-primary">
                View Investor Materials <ArrowRight size={16} />
              </Link>
              <Link to="/enterprise" className="btn btn-secondary">
                Request Enterprise Pilot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="section-padding" style={{ background: 'var(--rq-white)' }}>
        <div className="page-container" style={{ maxWidth: 1000 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Badge variant="accent">Recent Achievements</Badge>
            <h2 style={{
              fontFamily: 'var(--rq-font-heading)', fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 700, marginTop: 14, letterSpacing: '-0.02em',
            }}>Standards & Partnerships</h2>
            <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.95rem', marginTop: 10, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              Driving post-quantum encryption standards globally and building strategic partnerships.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            <div className="card card-accent" style={{ borderColor: 'var(--rq-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'var(--rq-primary-dim)', color: 'var(--rq-primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Award size={20} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--rq-font-heading)', fontWeight: 600, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--rq-muted)' }}>May 2026</div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>ETSI / IQC QSC Delegate</h3>
                </div>
              </div>
              <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>
                RivicQ is now an official ETSI / IQC Quantum-Safe Cryptography (QSC) delegate, actively contributing to post-quantum encryption standards. This recognition places RivicQ at the table where PQC migration standards are defined for European telecommunications and critical infrastructure.
              </p>
              <a href="https://www.etsi.org/technologies/quantum-safe-cryptography" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 12, color: 'var(--rq-primary)', fontSize: '0.85rem', fontWeight: 600 }}>
                Learn about ETSI QSC <ExternalLink size={14} />
              </a>
            </div>

            <div className="card card-accent" style={{ borderColor: 'var(--rq-accent)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'var(--rq-accent-light)', color: 'var(--rq-accent-dark)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Zap size={20} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--rq-font-heading)', fontWeight: 600, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--rq-muted)' }}>2026</div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Horizenlabs Partnership</h3>
                </div>
              </div>
              <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>
                Strategic partnership with Horizenlabs to integrate RivicQ's PQC encryption and QBOM capabilities into next-generation blockchain and zero-knowledge proof infrastructure. Combining post-quantum cryptography with distributed systems for long-term data protection.
              </p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 12, color: 'var(--rq-accent-dark)', fontSize: '0.85rem', fontWeight: 600 }}>
                <Badge variant="accent">Strategic Partner</Badge>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="page-container" style={{ maxWidth: 900 }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--rq-primary-dark) 0%, var(--rq-primary) 100%)',
            borderRadius: 20, padding: '56px 40px', textAlign: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: '-30%', right: '-10%', width: 400, height: 400,
              borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
            }} />
            <div style={{ position: 'relative' }}>
              <h3 style={{
                fontFamily: 'var(--rq-font-heading)', fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                fontWeight: 700, color: '#FFFFFF', marginBottom: 12,
              }}>Ready to Quantum-Proof Your Encryption?</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', maxWidth: 560, margin: '0 auto 28px', lineHeight: 1.7 }}>
                Free CSPM+QBOM pilot for government and critical infrastructure. We'll scan your stack, Q-score every encryption asset, and deliver a prioritized PQC migration roadmap.
              </p>
              <Link to="/enterprise" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 32px', background: '#FFFFFF', color: 'var(--rq-primary-dark)',
                borderRadius: 10, fontWeight: 700, fontFamily: 'var(--rq-font-heading)',
                fontSize: '0.9rem', textDecoration: 'none', transition: 'box-shadow 200ms',
              }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.2)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                Request Free Encryption Audit <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
