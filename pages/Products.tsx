import React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Bot,
  Fingerprint,
  GitBranch,
  Github,
  Key,
  Layers,
  Shield,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';

const productModules = [
  {
    title: 'Encryption-as-a-Service (EaaS)',
    icon: <Key size={18} className="text-[#00D9FF]" />,
    description:
      'Centralized encryption orchestration with HSM/KMS integration, automated key rotation, and TLS posture validation across multi-cloud environments.',
    bullets: [
      'HSM/KMS integrations',
      'Secrets management',
      'Automated key rotation',
      'TLS posture validation',
      'FIPS/NIST compliance mapping',
    ],
  },
  {
    title: 'Quantum BOM (QBOM) Intelligence',
    icon: <Layers size={18} className="text-[#9D4EDD]" />,
    description:
      'Deep inventory and correlation of quantum-vulnerable cryptographic assets. Unified BOM graph spans CBOM, AIBOM, HBOM, IBOM, and QBOM for full-spectrum visibility.',
    bullets: ['CBOM', 'AIBOM', 'HBOM', 'IBOM', 'QBOM', 'Quantum risk scoring'],
  },
  {
    title: 'CSPM Control Plane',
    icon: <ShieldCheck size={18} className="text-[#00D9FF]" />,
    description:
      'Cryptographic Security Posture Management platform that fuses telemetry, policy-as-code, and automated remediation into a single control plane.',
    bullets: [
      'Multi-cloud posture monitoring',
      'Policy-as-code enforcement',
      'Automated remediation',
      'Compliance reporting',
      'RBAC + SSO',
    ],
  },
  {
    title: 'Post-Quantum Cryptography (PQC)',
    icon: <Shield size={18} className="text-[#00D9FF]" />,
    description:
      'Quantum-ready cryptographic suite with NIST-standardized algorithms, hybrid certificate management, and automated crypto-agility workflows.',
    bullets: [
      'NIST FIPS 203/204/205',
      'Hybrid RSA/ECC + PQC',
      'Crypto-agility engine',
      'Quantum risk dashboards',
      'Automated key migration',
    ],
  },
  {
    title: 'Agentic Security AI',
    icon: <Bot size={18} className="text-[#00D9FF]" />,
    description:
      'Autonomous AI security agents that continuously monitor, correlate, and remediate cryptographic threats across cloud, code, and quantum infrastructure.',
    bullets: [
      'Autonomous threat hunting',
      'Self-healing remediations',
      'AI agent orchestration',
      'Behavioral anomaly detection',
      'Adaptive policy enforcement',
    ],
  },
  {
    title: 'Privacy Protocol',
    icon: <Fingerprint size={18} className="text-[#00D9FF]" />,
    description:
      'Zero-knowledge privacy layer with homomorphic encryption readiness, secure multi-party computation, and differential privacy for regulated data workloads.',
    bullets: [
      'Zero-knowledge proofs',
      'Homomorphic encryption ready',
      'Secure multi-party computation',
      'Differential privacy',
      'GDPR / eIDAS compliance',
    ],
  },
];

const Products: React.FC = () => {
  return (
    <article className="prose prose-invert max-w-none">
      <header className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-[10px] font-bold uppercase tracking-[0.3em] text-slate-200">
          <Activity size={12} className="text-[#00D9FF]" />
          Product Suite
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mt-6">
          RIVICQ Product Suite
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl">
          Unified platform spanning Cryptographic Security Posture Management, Quantum BOM Intelligence,
          Agentic Security AI, Post-Quantum Cryptography, and Privacy Protocol — with Encryption-as-a-Service
          at the core.
        </p>
      </header>

      <section className="not-prose grid lg:grid-cols-2 gap-8">
        {productModules.map(module => (
          <div key={module.title} className="glass-card rounded-[2.5rem] p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                {module.icon}
              </div>
              <h2 className="text-xl font-semibold text-white m-0">{module.title}</h2>
            </div>
            <p className="text-sm text-slate-300">{module.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {module.bullets.map(item => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] bg-white/5 text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <div className="glass-panel rounded-[2.5rem] p-8">
          <div className="flex items-center gap-3 mb-6">
            <Layers size={18} className="text-[#00D9FF]" />
            <h2 className="text-2xl font-bold m-0">Unified BOM Graph</h2>
          </div>
          <p className="text-slate-300">
            RIVICQ correlates cryptographic, AI, infrastructure, hardware, and quantum exposure into
            a single security graph. QBOM (Quantum Bill of Materials) provides deep discovery of
            quantum-vulnerable assets across your entire estate.
          </p>
          <div className="not-prose mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
            {['CBOM', 'AIBOM', 'HBOM', 'IBOM', 'QBOM'].map(item => (
              <div key={item} className="glass-card rounded-2xl p-4 text-center text-sm text-white">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="glass-card rounded-[2.5rem] p-8">
          <div className="flex items-center gap-3 mb-6">
            <Bot size={18} className="text-[#9D4EDD]" />
            <h2 className="text-2xl font-bold m-0">Agentic Security Engine</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'AI agents autonomously hunt cryptographic threats',
              'Real-time correlation across BOM layers',
              'Self-healing remediation without human intervention',
              'Adaptive policy enforcement based on risk scoring',
              'Behavioral anomaly detection for zero-day attacks',
              'Orchestrated incident response across multi-cloud',
            ].map(item => (
              <div key={item} className="flex items-start gap-3 text-sm text-slate-300">
                <BadgeCheck size={16} className="text-[#00D9FF] mt-1" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="glass-panel rounded-[2.5rem] p-8">
          <div className="flex items-center gap-3 mb-6">
            <Fingerprint size={18} className="text-[#00D9FF]" />
            <h2 className="text-2xl font-bold m-0">Privacy Protocol</h2>
          </div>
          <p className="text-slate-300">
            Zero-knowledge privacy layer designed for regulated industries. RIVICQ Privacy Protocol
            enables secure data processing with homomorphic encryption readiness, secure multi-party
            computation, and differential privacy guarantees.
          </p>
          <div className="not-prose mt-6 grid md:grid-cols-2 gap-4">
            {[
              'Zero-knowledge proof verification for data integrity',
              'Homomorphic encryption ready for confidential compute',
              'Secure multi-party computation for collaborative analytics',
              'Differential privacy for regulated data workloads',
              'GDPR and eIDAS compliance built in',
              'Audit trail with cryptographic proof of privacy',
            ].map(item => (
              <div key={item} className="flex items-start gap-3 text-sm text-slate-300">
                <ShieldCheck size={16} className="text-[#00D9FF] mt-1" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 grid lg:grid-cols-2 gap-8 not-prose">
        <div className="glass-panel rounded-[2.5rem] p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Github size={18} className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-white m-0">Open Source</h2>
          </div>
          <p className="text-sm text-slate-300">
            Self-host the full CSPM stack with modular services, API-first extensibility, and community-driven BOM intelligence plugins.
          </p>
          <div className="mt-6">
            <a
              href="https://github.com/rivic-q"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00D9FF] text-slate-900 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all"
            >
              Deploy via Docker <ArrowRight size={14} />
            </a>
          </div>
        </div>
        <div className="glass-panel rounded-[2.5rem] p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Shield size={18} className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-white m-0">Enterprise</h2>
          </div>
          <p className="text-sm text-slate-300">
            Managed platform with dedicated SLAs, private environments, advanced analytics, and priority access to Agentic Security AI agents.
          </p>
          <div className="mt-6">
            <Link
              to="/enterprise"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00D9FF] text-slate-900 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all"
            >
              Contact Sales <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="glass-card rounded-[2.5rem] p-8">
          <div className="flex items-center gap-3 mb-4">
            <GitBranch size={18} className="text-[#00D9FF]" />
            <h2 className="text-2xl font-bold m-0">CI/CD Integration</h2>
          </div>
          <p className="text-slate-300">
            Automate CBOM, QBOM generation and cryptographic policy enforcement directly in your CI/CD pipelines.
            Agentic Security AI agents monitor pull requests for quantum-safe compliance.
          </p>
          <div className="not-prose mt-6 grid md:grid-cols-2 gap-4">
            <div className="glass-panel rounded-2xl p-4 text-sm text-slate-200">
              Pull request checks for PQC crypto usage and quantum vulnerability scanning.
            </div>
            <div className="glass-panel rounded-2xl p-4 text-sm text-slate-200">
              GitHub Enterprise integration with SSO, audit logging, and automated remediation.
            </div>
          </div>
          <div className="not-prose mt-6 glass-card rounded-2xl p-4 text-[11px] text-slate-300">
            <span className="text-[#00D9FF] uppercase tracking-[0.3em] text-[10px]">Workflow</span>
            <div className="mt-2 flex items-center gap-2">
              <Zap size={14} className="text-[#00D9FF]" />
              <code>rivicq scan --qbom --agentic --pqc --policy enterprise.yaml</code>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="glass-panel rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold m-0">Ready for post-quantum security?</h2>
            <p className="text-slate-300">
              Launch an enterprise pilot with Agentic Security, deploy Privacy Protocol, or start with the open source stack.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/enterprise"
              className="px-6 py-3 rounded-full bg-[#00D9FF] text-slate-900 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all"
            >
              Request Demo
            </Link>
            <a
              href="https://github.com/rivic-q"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/20 text-xs font-bold uppercase tracking-[0.2em] hover:border-[#00D9FF] transition-all"
            >
              Deploy Open Source
            </a>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Products;
