import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Braces,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Network,
  Shield,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';

const architectureFlow = [
  { label: 'Assets', icon: <Cloud size={16} className="text-[#00D9FF]" /> },
  { label: 'BOM Detection', icon: <Database size={16} className="text-[#00D9FF]" /> },
  { label: 'Crypto + PQC Analysis', icon: <Shield size={16} className="text-[#00D9FF]" /> },
  { label: 'Agentic Security AI', icon: <Sparkles size={16} className="text-[#9D4EDD]" /> },
  { label: 'Quantum Risk Engine', icon: <Cpu size={16} className="text-[#00D9FF]" /> },
  { label: 'Privacy Protocol', icon: <ShieldCheck size={16} className="text-[#00D9FF]" /> },
];

const Platform: React.FC = () => {
  return (
    <article className="prose prose-invert max-w-none">
      <header className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-[10px] font-bold uppercase tracking-[0.3em] text-slate-200">
          Architecture Overview
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mt-6">RIVICQ CSPM Platform</h1>
        <p className="text-lg text-slate-300 max-w-3xl">
          Designed for high-assurance cryptographic posture management across cloud, code, AI, and
          quantum systems. RIVICQ delivers a unified CSPM control plane with Agentic Security AI,
          Privacy Protocol, and automated encryption services.
        </p>
      </header>

      <section className="not-prose glass-card rounded-[2.5rem] p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white m-0">Architecture Visualization</h2>
            <p className="text-sm text-slate-300 mt-2">
              Assets → BOM Detection → Crypto + PQC Analysis → Agentic Security AI →
              Quantum Risk Engine → Privacy Protocol → Unified CSPM Dashboard
            </p>
          </div>
          <Zap size={20} className="text-[#00D9FF]" />
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
          {architectureFlow.map(step => (
            <div key={step.label} className="glass-panel rounded-2xl p-4 text-center">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                {step.icon}
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-slate-200">
                {step.label}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 glass-panel rounded-2xl p-4">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Animated data pipelines
          </div>
          <div className="mt-4 grid grid-cols-6 gap-2">
            {Array.from({ length: 12 }).map((_, idx) => (
              <div
                key={idx}
                className="h-2 rounded-full bg-gradient-to-r from-[#00D9FF]/20 via-[#00D9FF]/80 to-[#9D4EDD]/60 animate-pulse"
                style={{ animationDelay: `${idx * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">AI-driven CSPM Control Plane</h2>
          <p className="text-slate-300">
            The control plane fuses cryptographic telemetry with AI correlation to automate risk
            scoring, remediation, and compliance workflows across multi-cloud environments.
          </p>
          <div className="not-prose mt-6 grid md:grid-cols-2 gap-4">
            {[
              'Predictive exposure analytics',
              'Policy-as-code enforcement',
              'Quantum readiness baselines',
              'AI-driven compliance reporting',
            ].map(item => (
              <div key={item} className="glass-card rounded-2xl p-4 text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="glass-panel rounded-[2.5rem] p-6">
          <div className="flex items-center gap-3 mb-4">
            <GitBranch size={16} className="text-[#00D9FF]" />
            <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Integration layer
            </div>
          </div>
          <div className="space-y-3 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <Network size={16} className="text-[#00D9FF] mt-1" />
              Multi-cloud telemetry ingestion and unified asset graph.
            </div>
            <div className="flex items-start gap-3">
              <Braces size={16} className="text-[#00D9FF] mt-1" />
              API-first orchestration with GraphQL + event streams.
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck size={16} className="text-[#00D9FF] mt-1" />
              Compliance mappings for NIST PQC, DORA, eIDAS, and SOC 2.
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="glass-card rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold m-0">Ready to deploy?</h2>
            <p className="text-slate-300">
              Launch the open source stack or scope an enterprise rollout.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/products"
              className="px-6 py-3 rounded-full bg-[#00D9FF] text-slate-900 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all"
            >
              Explore Products
            </Link>
            <Link
              to="/enterprise"
              className="px-6 py-3 rounded-full border border-white/20 text-xs font-bold uppercase tracking-[0.2em] hover:border-[#00D9FF] transition-all"
            >
              Enterprise Contact <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Platform;
