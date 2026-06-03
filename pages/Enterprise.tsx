import React from 'react';
import { Link } from 'react-router-dom';
import {
  BadgeCheck,
  Cloud,
  GitBranch,
  Lock,
  Network,
  Shield,
  ShieldCheck,
  Users,
} from 'lucide-react';

const enterpriseBenefits = [
  { label: 'Multi-cloud support', icon: <Cloud size={18} className="text-[#00D9FF]" /> },
  { label: 'Kubernetes security', icon: <Network size={18} className="text-[#00D9FF]" /> },
  { label: 'GitHub Enterprise integration', icon: <GitBranch size={18} className="text-[#00D9FF]" /> },
  { label: 'SIEM/SOAR integrations', icon: <ShieldCheck size={18} className="text-[#00D9FF]" /> },
  { label: 'RBAC + SSO', icon: <Lock size={18} className="text-[#00D9FF]" /> },
  { label: 'Audit logging + compliance reporting', icon: <BadgeCheck size={18} className="text-[#00D9FF]" /> },
];

const Enterprise: React.FC = () => {
  return (
    <article className="prose prose-invert max-w-none">
      <header className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-[10px] font-bold uppercase tracking-[0.3em] text-slate-200">
          Enterprise Contact
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mt-6">
          Enterprise-grade CSPM for the quantum era
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl">
          RIVICQ Enterprise delivers AI-driven cryptographic posture management with regulated
          compliance, global SLAs, and dedicated security engineering support.
        </p>
      </header>

      <section className="glass-card rounded-[2.5rem] p-8">
        <div className="flex items-center gap-3 mb-6">
          <Shield size={18} className="text-[#00D9FF]" />
          <h2 className="text-2xl font-bold m-0">Enterprise Features</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
          {enterpriseBenefits.map(item => (
            <div key={item.label} className="glass-panel rounded-2xl p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-sm text-slate-200">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid lg:grid-cols-[1fr_0.9fr] gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Dedicated enterprise alignment</h2>
          <p className="text-slate-300">
            Align with NIST PQC, DORA, eIDAS 2.0, and SOC 2 requirements with continuous compliance
            reporting and automated cryptographic remediation.
          </p>
          <div className="not-prose mt-6 space-y-3 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <Users size={16} className="text-[#00D9FF] mt-1" />
              Dedicated security engineering and onboarding for regulated teams.
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck size={16} className="text-[#00D9FF] mt-1" />
              Compliance-ready audit trails with real-time evidence capture.
            </div>
          </div>
        </div>
        <div className="glass-panel rounded-[2.5rem] p-8">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-4">
            Enterprise engagement
          </div>
          <div className="space-y-4 text-sm text-slate-300">
            <div className="glass-card rounded-2xl p-4">
              Enterprise security assessment and migration roadmap.
            </div>
            <div className="glass-card rounded-2xl p-4">
              Private deployment options with dedicated CSPM instances.
            </div>
            <div className="glass-card rounded-2xl p-4">
              Full integration with existing SIEM/SOAR and identity providers.
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="glass-panel rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold m-0">Start an enterprise pilot</h2>
            <p className="text-slate-300">
              Engage our team to scope your CSPM deployment and quantum readiness program.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/pricing"
              className="px-6 py-3 rounded-full bg-[#00D9FF] text-slate-900 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all"
            >
              Request Demo
            </Link>
            <Link
              to="/resources"
              className="px-6 py-3 rounded-full border border-white/20 text-xs font-bold uppercase tracking-[0.2em] hover:border-[#00D9FF] transition-all"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Enterprise;
