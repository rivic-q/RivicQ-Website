import React from 'react';
import { ShieldAlert, Terminal, Activity, ArrowRight, CheckCircle2, Bot, Fingerprint, Microscope, Search, GitBranch, Shield, Zap, Lock, ShieldCheck, Atom } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  desc: string;
  points: string[];
  icon: React.ReactNode;
  badge?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, desc, points, icon, badge }) => (
  <div className="glass-card rounded-[2.5rem] p-8">
    <div className="flex justify-between items-start mb-6">
      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
        {icon}
      </div>
      {badge && (
        <span className="px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-full bg-[#00D9FF]/10 text-[#00D9FF]">
          {badge}
        </span>
      )}
    </div>
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-sm text-slate-300 leading-relaxed mb-8">{desc}</p>
    <ul className="space-y-3 m-0 p-0 list-none">
      {points.map((p, i) => (
        <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-300 uppercase tracking-wide">
          <CheckCircle2 size={14} className="text-emerald-400" /> {p}
        </li>
      ))}
    </ul>
    <div className="mt-10 pt-6 border-t border-white/10">
      <a href="mailto:hello@rivicq.de" className="text-xs font-bold text-[#00D9FF] hover:text-white flex items-center gap-1 transition-colors uppercase tracking-widest">
        Request Scope <ArrowRight size={14}/>
      </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <article className="prose prose-invert max-w-none">
      <header className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-[10px] font-bold uppercase tracking-[0.3em] text-slate-200">
          <Activity size={12} className="text-[#00D9FF]" />
          Technical Services
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mt-6">
          Security Services
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl">
          High-assurance offensive security, strategic compliance advisory, Agentic Security assessment,
          Privacy Protocol implementation, and PQC migration services.
        </p>
      </header>

      <div className="not-prose grid md:grid-cols-2 gap-8 mb-24">
        <ServiceCard
          icon={<ShieldAlert size={20} className="text-[#00D9FF]" />}
          title="Red Teaming"
          badge="Adversary Simulation"
          desc="Full-scope simulations of Advanced Persistent Threats (APTs) targeting your people, processes, and technology with quantum-era attack vectors."
          points={[
            'Scenario-based adversary logic',
            'Assume-Breach assessments',
            'Hardware side-channel audit',
            'Quantum attack surface mapping',
          ]}
        />
        <ServiceCard
          icon={<Terminal size={20} className="text-[#00D9FF]" />}
          title="Penetration Testing"
          badge="Audit & Discovery"
          desc="Technical vulnerability assessments focusing on deep cryptographic logic flaws, PQC implementation gaps, and legacy encryption debt."
          points={[
            'Web App & API security',
            'Infrastructure cloud audit',
            'PQC implementation review',
            'CBOM/QBOM validation',
          ]}
        />
        <ServiceCard
          icon={<Bot size={20} className="text-[#00D9FF]" />}
          title="Agentic Security Assessment"
          badge="AI Agent Audit"
          desc="Evaluate your AI agent infrastructure for cryptographic weaknesses, prompt injection risks, and autonomous decision-chain integrity."
          points={[
            'AI agent threat modeling',
            'Autonomous workflow audit',
            'Cryptographic boundary testing',
            'Agent-to-agent channel security',
          ]}
        />
        <ServiceCard
          icon={<Fingerprint size={20} className="text-[#00D9FF]" />}
          title="Privacy Protocol Implementation"
          badge="Zero-Knowledge"
          desc="Deploy and integrate RIVICQ Privacy Protocol into existing infrastructure. Zero-knowledge proofs, SMPC, and differential privacy for regulated data."
          points={[
            'Zero-knowledge proof deployment',
            'Secure multi-party computation setup',
            'Differential privacy integration',
            'GDPR / eIDAS compliance verification',
          ]}
        />
        <ServiceCard
          icon={<Atom size={20} className="text-[#00D9FF]" />}
          title="PQC Advisory & Migration"
          badge="Strategic Migration"
          desc="End-to-end guidance on transitioning from classical RSA/ECC to NIST-standardized post-quantum cryptography with hybrid migration roadmaps."
          points={[
            'NIST FIPS 203/204/205 readiness',
            'EU DORA gap analysis',
            'Hybrid migration roadmaps',
            'Crypto-agility implementation',
          ]}
        />
        <ServiceCard
          icon={<ShieldCheck size={20} className="text-[#00D9FF]" />}
          title="CSPM Deployment"
          badge="Platform Engineering"
          desc="Design, deploy, and operationalize the full RIVICQ CSPM platform — including Agentic Security AI, BOM Intelligence, and Privacy Protocol integration."
          points={[
            'Full CSPM stack deployment',
            'BOM intelligence configuration',
            'Agentic Security agent tuning',
            'Compliance policy authoring',
          ]}
        />
      </div>

      {/* DevSecOps Enterprise Architecture Section */}
      <section className="mb-24">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-12">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <GitBranch size={24} className="text-[#00D9FF]" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white m-0">DevSecOps Enterprise Architecture</h2>
              <p className="text-xs text-[#00D9FF] font-bold uppercase tracking-widest mt-1">Industrial-Scale Security Integration</p>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <p className="text-slate-300 leading-relaxed mb-12 max-w-3xl">
              We design and implement comprehensive security architectures that embed Agentic Security,
              PQC readiness, and Privacy Protocol directly into the development lifecycle. Security
              becomes a seamless component of your industrial-scale delivery pipeline.
            </p>

            <div className="grid md:grid-cols-2 gap-10 not-prose">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Zap size={18} className="text-[#00D9FF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm m-0">CI/CD Security Orchestration</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">Automated injection of PQC-wrappers, QBOM scanning, and Agentic Security policy checks into build agents.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={18} className="text-[#00D9FF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm m-0">Infrastructure as Code (IaC)</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">Securing Terraform and Kubernetes configurations with hardware-rooted identity, drift detection, and Privacy Protocol enforcement.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Activity size={18} className="text-[#00D9FF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm m-0">Policy as Code (PaC)</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">Programmatic enforcement of PQC standards, Agentic Security policies, and cryptographic compliance across global clusters using OPA and Rego.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Lock size={18} className="text-[#00D9FF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm m-0">Zero-Trust Networking</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">Implementing micro-segmentation anchored in physical HSM root-of-trust, with Privacy Protocol encryption for all service meshes.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a href="mailto:hello@rivicq.de?subject=Architecture Inquiry: DevSecOps" className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D9FF] text-slate-900 font-bold rounded-xl hover:bg-white transition-all text-xs uppercase tracking-widest">
                Consult on Architecture <ArrowRight size={16}/>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center mt-24 glass-panel rounded-[2.5rem] p-12">
        <h2 className="text-3xl font-bold text-white mb-6">Start a conversation.</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          Our lead engineers are available to discuss your specific infrastructure security challenges
          — from Agentic Security deployment to full CSPM architecture.
        </p>
        <a href="mailto:hello@rivicq.de" className="inline-flex items-center gap-2 bg-[#00D9FF] text-slate-900 px-10 py-5 rounded-full font-bold hover:bg-white transition-all">
          Consult our Team <ArrowRight size={18}/>
        </a>
      </section>
    </article>
  );
};

export default Services;
