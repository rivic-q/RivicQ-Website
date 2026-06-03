import React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  BadgeCheck,
  CheckCircle2,
  GitBranch,
  Github,
  Key,
  Layers,
  Lock,
  Shield,
  ShieldCheck,
  TerminalSquare,
  Zap,
} from 'lucide-react';

const modules = [
  {
    title: 'Encryption-as-a-Service (EaaS)',
    description:
      'Centralized encryption orchestration with HSM/KMS integration, automated key rotation, and compliance mapping.',
    features: [
      'HSM/KMS orchestration',
      'Automated key rotation',
      'Secrets management',
      'TLS posture validation',
      'FIPS/NIST compliance mapping',
    ],
    icon: <Key size={20} className="text-[#00D9FF]" />,
  },
  {
    title: 'Quantum BOM (QBOM) Intelligence',
    description:
      'Deep discovery and correlation of quantum-vulnerable cryptographic assets across CBOM, AIBOM, HBOM, IBOM, and QBOM into a unified security graph.',
    features: ['CBOM', 'AIBOM', 'HBOM', 'IBOM', 'QBOM'],
    icon: <Layers size={20} className="text-[#9D4EDD]" />,
  },
  {
    title: 'Agentic Security AI',
    description:
      'Autonomous AI security agents that continuously monitor, correlate, and remediate cryptographic threats across your entire infrastructure in real time.',
    features: [
      'Autonomous threat hunting',
      'Self-healing remediations',
      'AI agent orchestration',
      'Behavioral anomaly detection',
      'Adaptive policy enforcement',
    ],
    icon: <Zap size={20} className="text-[#00D9FF]" />,
  },
  {
    title: 'Privacy Protocol',
    description:
      'Zero-knowledge privacy layer with homomorphic encryption readiness, secure multi-party computation, and differential privacy for regulated data.',
    features: [
      'Zero-knowledge proofs',
      'Homomorphic encryption ready',
      'Secure multi-party computation',
      'Differential privacy',
      'GDPR/eIDAS compliant',
    ],
    icon: <Lock size={20} className="text-[#00D9FF]" />,
  },
];

const aiEngine = [
  'AI-powered risk scoring',
  'Threat correlation across cloud + code',
  'Predictive cryptographic exposure detection',
  'Quantum readiness analysis',
  'Automated remediation workflows',
];

const dashboardWidgets = [
  { label: 'Crypto posture score', value: '82', status: 'Stable' },
  { label: 'Quantum exposure', value: '6', status: 'High risk' },
  { label: 'Certificate inventory', value: '14,208', status: 'Tracked' },
  { label: 'AI dependency risks', value: '38', status: 'Correlated' },
  { label: 'Active policies', value: '1,942', status: 'Enforced' },
  { label: 'Compliance status', value: '96%', status: 'Aligned' },
];

const Home: React.FC = () => {
  return (
    <article className="prose prose-invert max-w-none">
      {/* Hero */}
      <section className="pt-12 md:pt-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-[10px] font-bold uppercase tracking-[0.3em] text-slate-200">
              <Activity size={12} className="text-[#00D9FF] animate-pulse" />
              AI-Powered CSPM Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mt-6">
              Unified Cryptographic Security Posture Management for the Quantum Era
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
              RIVICQ unifies Cryptographic Security Posture Management, Quantum BOM intelligence,
              Agentic Security AI, and Privacy Protocol into a single platform with
              Encryption-as-a-Service for the post-quantum era.
            </p>

            <div className="not-prose mt-8 flex flex-wrap gap-4">
              <Link
                to="/enterprise"
                className="px-6 py-3 rounded-full bg-[#00D9FF] text-slate-900 text-xs font-bold uppercase tracking-[0.25em] hover:bg-white transition-all neon-border"
              >
                Request Demo
              </Link>
              <Link
                to="/products"
                className="px-6 py-3 rounded-full border border-white/20 text-xs font-bold uppercase tracking-[0.25em] hover:border-[#00D9FF] hover:text-white transition-all"
              >
                Explore Platform
              </Link>
            </div>
          </div>

          <div className="glass-panel rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,217,255,0.18),_transparent_60%)]"></div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                <span>Real-time Threat Telemetry</span>
                <span className="text-[#00D9FF]">Live</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {['Spoofed Cert', 'Weak KEX', 'Legacy RSA'].map(item => (
                  <div key={item} className="glass-card rounded-2xl p-3 text-center text-xs">
                    <div className="text-white font-bold">{item}</div>
                    <div className="text-[10px] text-slate-400 mt-2">Mitigated</div>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card rounded-2xl p-4">
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">
                    Quantum-risk dashboard
                  </div>
                  <div className="text-3xl font-bold text-white">72/100</div>
                  <div className="text-[10px] text-amber-300 uppercase tracking-[0.2em] mt-2">
                    Exposure trending
                  </div>
                </div>
                <div className="glass-card rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">
                      Key rotation
                    </div>
                    <div className="text-sm text-white font-semibold">ML-KEM-768</div>
                    <div className="text-[10px] text-slate-400 mt-2">Rotation active</div>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-spin-slow">
                    <Key size={18} className="text-[#00D9FF]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="mt-24">
        <div className="flex items-center gap-3 mb-10">
          <Shield size={18} className="text-[#00D9FF]" />
          <h2 className="text-2xl md:text-3xl font-bold m-0">Core Platform Modules</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 not-prose">
          {modules.map(module => (
            <div key={module.title} className="glass-card rounded-[2.5rem] p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold text-white m-0">{module.title}</h3>
              </div>
              <p className="text-sm text-slate-300">{module.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {module.features.map(feature => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] bg-white/5 text-slate-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Security Engine */}
      <section className="mt-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">AI Security Engine</h2>
            <p className="text-slate-300 max-w-2xl">
              AI-driven security analytics orchestrate risk scoring, threat correlation, and
              predictive cryptographic exposure detection for real-time response.
            </p>
            <ul className="not-prose mt-6 grid md:grid-cols-2 gap-3">
              {aiEngine.map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-[#00D9FF] mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel rounded-[2.5rem] p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-4">
              PQC compliance mapping
            </div>
            <div className="space-y-3 text-sm text-slate-300">
              {['SOC 2 compliance indicators', 'DORA regulatory mapping', 'NIST PQC standards alignment'].map(item => (
                <div key={item} className="flex items-center gap-3 glass-card rounded-2xl p-3">
                  <ShieldCheck size={16} className="text-[#00D9FF]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise + Open Source */}
      <section className="mt-24">
        <div className="glass-card rounded-[2.5rem] p-8">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck size={18} className="text-[#00D9FF]" />
            <h2 className="text-2xl md:text-3xl font-bold m-0">Enterprise &amp; Open Source</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 not-prose">
            <div>
              <h3 className="text-lg font-semibold text-white">Enterprise Features</h3>
              <ul className="mt-4 space-y-3">
                {[
                  { label: 'Multi-cloud support' },
                  { label: 'Kubernetes security' },
                  { label: 'GitHub Enterprise integration' },
                  { label: 'SIEM/SOAR integrations' },
                  { label: 'RBAC + SSO' },
                  { label: 'Audit logging & compliance reporting' },
                ].map(item => (
                  <li key={item.label} className="flex items-center gap-3 text-sm text-slate-300">
                    <BadgeCheck size={16} className="text-[#00D9FF]" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Deploy Anywhere</h3>
              <p className="text-sm text-slate-300 mt-4">
                Modular, API-first platform with community-driven extensions for DevSecOps and security research teams.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Automated CBOM generation on pull requests',
                  'Policy-as-code checks for PQC readiness',
                  'GitHub Enterprise audit trail + SSO',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <GitBranch size={16} className="text-[#00D9FF] mt-1" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 glass-card rounded-2xl p-4 text-[11px] text-slate-300">
                <div className="flex items-center gap-2 mb-3">
                  <TerminalSquare size={14} className="text-[#00D9FF]" />
                  <span className="uppercase tracking-[0.3em] text-[10px] text-slate-400">
                    GitHub Actions
                  </span>
                </div>
                <code className="text-[#00D9FF]">
                  rivicq scan --cbom --q-risk --policy enterprise.yaml
                </code>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://github.com/rivic-q"
                  target="_blank"
                  className="px-5 py-2.5 rounded-full bg-[#00D9FF] text-slate-900 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all"
                >
                  Deploy via Docker
                </a>
                <a
                  href="https://github.com/rivic-q"
                  target="_blank"
                  className="px-5 py-2.5 rounded-full border border-white/20 text-xs font-bold uppercase tracking-[0.2em] hover:border-[#00D9FF] transition-all"
                >
                  <Github size={14} className="inline-block mr-1" />
                  Clone Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="mt-24">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Unified CSPM Dashboard</h2>
          <p className="text-slate-300 mt-2">
            Live visibility across cryptographic posture, quantum readiness, AI dependency risks, and compliance status.
          </p>
          <div className="not-prose mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {dashboardWidgets.map(widget => (
              <div key={widget.label} className="glass-card rounded-2xl p-4">
                <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                  {widget.label}
                </div>
                <div className="text-xl font-bold text-white mt-2">{widget.value}</div>
                <div className="text-[10px] text-[#00D9FF] uppercase tracking-[0.2em] mt-2">
                  {widget.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default Home;
