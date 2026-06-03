
import React from 'react';
import { ShieldAlert, Terminal, Activity, ArrowRight, CheckCircle2, Microscope, Search, GitBranch, Shield, Zap, Lock, ShieldCheck, Bot, Fingerprint } from 'lucide-react';

const ServiceDetail: React.FC<{ 
  title: string, 
  desc: string, 
  points: string[], 
  icon: React.ReactNode,
  badge?: string 
}> = ({ title, desc, points, icon, badge }) => (
  <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
    <div className="flex justify-between items-start mb-6">
      <div className="p-4 bg-slate-50 text-slate-900 rounded-2xl group-hover:bg-slate-900 group-hover:text-white transition-all">
        {icon}
      </div>
      {badge && (
        <span className="px-3 py-1 bg-sky-50 text-sky-500 text-[9px] font-bold uppercase tracking-widest rounded-full">{badge}</span>
      )}
    </div>
    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed mb-8">{desc}</p>
    <ul className="space-y-3 m-0 p-0 list-none">
      {points.map((p, i) => (
        <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700 uppercase tracking-wide">
          <CheckCircle2 size={14} className="text-emerald-500" /> {p}
        </li>
      ))}
    </ul>
    <div className="mt-10 pt-6 border-t border-slate-50">
      <a href="mailto:hello@rivicq.de" className="text-xs font-bold text-sky-500 hover:text-slate-900 flex items-center gap-1 transition-colors uppercase tracking-widest">
        Request Scope <ArrowRight size={14}/>
      </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Technical Services</h1>
        <p className="lead text-xl text-gray-600 font-serif italic">
          Security testing and compliance advisory for high-stakes environments.
        </p>
      </header>

      <div className="not-prose grid md:grid-cols-2 gap-8 mb-24">
        <ServiceDetail 
          icon={<ShieldAlert size={24}/>}
          title="Red Teaming"
          badge="Adversary Simulation"
          desc="Real-world attack simulations targeting your people, systems, and technology."
          points={[
            "Scenario-based adversary logic",
            "Assume-Breach assessments",
            "Hardware side-channel audit"
          ]}
        />
        <ServiceDetail 
          icon={<Terminal size={24}/>}
          title="Penetration Testing"
          badge="Audit & Discovery"
          desc="Deep security testing focused on logic flaws and old crypto."
          points={[
            "Web App & API security",
            "Infrastructure cloud audit",
            "PQC implementation review"
          ]}
        />
        <ServiceDetail 
          icon={<Search size={24}/>}
          title="Vulnerability Management"
          badge="Proactive Defense"
          desc="Continuous scanning that finds and prioritizes security flaws before attackers do."
          points={[
            "Asset inventory & tracking",
            "Automated patch validation",
            "Risk-based prioritization"
          ]}
        />
        <ServiceDetail 
          icon={<Microscope size={24}/>}
          title="PQC Advisory"
          badge="Strategic Migration"
          desc="Guidance on moving from RSA/ECC to NIST-standardized quantum-safe crypto."
          points={[
            "NIST FIPS 203/204/205 readiness",
            "EU DORA gap analysis",
            "Hybrid migration roadmaps"
          ]}
        />
        <ServiceDetail 
          icon={<Bot size={24}/>}
          title="Agentic Security Assessment"
          badge="AI Agent Audit"
          desc="Check your AI agents for crypto weaknesses, prompt injection risks, and workflow integrity."
          points={[
            "AI agent threat modeling",
            "Autonomous workflow audit",
            "Cryptographic boundary testing",
            "Agent-to-agent channel security"
          ]}
        />
        <ServiceDetail 
          icon={<Fingerprint size={24}/>}
          title="Privacy Protocol Implementation"
          badge="Zero-Knowledge"
          desc="Deploy zero-knowledge privacy into your existing systems. ZK-proofs, secure computation, and privacy for regulated data."
          points={[
            "Zero-knowledge proof deployment",
            "Secure multi-party computation setup",
            "Differential privacy integration",
            "GDPR / eIDAS compliance verification"
          ]}
        />
      </div>

      {/* DevSecOps Enterprise Architecture Section */}
      <section className="mb-24 py-16 border-t border-slate-100">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-indigo-600 text-white rounded-2xl shadow-lg">
            <GitBranch size={24} />
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold text-slate-900 m-0">DevSecOps Architecture</h2>
            <p className="text-xs text-indigo-600 font-bold uppercase tracking-widest mt-1">Security built into your development pipeline</p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none text-slate-900 group-hover:scale-110 transition-transform duration-700">
            <Shield size={200} />
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <p className="text-lg text-slate-700 leading-relaxed mb-12">
              We build security into your development lifecycle. From AI agents to privacy protocols to PQC migration — security works at every stage.
            </p>

            <div className="grid md:grid-cols-2 gap-10 not-prose">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 text-indigo-600 h-fit">
                    <Zap size={18}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm m-0">CI/CD Security Orchestration</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Automatically add quantum-safe wrappers and scan for crypto issues during builds.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 text-indigo-600 h-fit">
                    <ShieldCheck size={18}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm m-0">Infrastructure as Code (IaC)</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Secure Terraform and Kubernetes with hardware-backed identity and drift monitoring.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 text-indigo-600 h-fit">
                    <Activity size={18}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm m-0">Policy as Code (PaC)</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Enforce crypto standards across all clusters with policy-as-code.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 text-indigo-600 h-fit">
                    <Lock size={18}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm m-0">Zero-Trust Networking</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Micro-segmentation backed by physical HSM trust for all services.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <a href="mailto:hello@rivicq.de?subject=Architecture Inquiry: DevSecOps" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition-all text-xs uppercase tracking-widest shadow-xl shadow-slate-200">
                Consult on Architecture <ArrowRight size={16}/>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center mt-24">
         <h2 className="text-3xl font-serif font-bold mb-6">Talk to our team.</h2>
         <p className="text-slate-500 mb-10 max-w-xl mx-auto">Our engineers are ready to discuss your security challenges.</p>
         <a href="mailto:hello@rivicq.de" className="inline-flex items-center gap-2 bg-sky-500 text-white px-10 py-5 rounded-full font-bold hover:bg-sky-600 transition-all shadow-xl shadow-sky-500/20">
            Consult our Team <ArrowRight size={18}/>
         </a>
      </section>
    </article>
  );
};

export default Services;
