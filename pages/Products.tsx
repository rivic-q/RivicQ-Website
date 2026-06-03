import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, ArrowRight, CheckCircle2, Shield, Zap, Database, Globe, Lock, Server, Search, FileCode, 
  Brain, AlertTriangle, Settings, Layers, Key, Scan, FileSearch, ShieldCheck, Code2, LockKeyhole, 
  Bot, Cpu, Workflow, AlertOctagon, FileText, ArrowUpRight, Send, Loader2, Eye, 
  ExternalLink, Rocket, Star, ArrowDown
} from 'lucide-react';
import CISODashboard from '../components/CISODashboard';

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
};

const ProductCard: React.FC<{
  icon: React.ReactNode,
  title: string,
  subtitle: string,
  description: string,
  features: string[],
  badge?: string,
  badgeColor?: string,
  isDark?: boolean,
  ctaText: string,
  ctaLink: string,
  stats?: { value: string; label: string }[]
}> = ({ icon, title, subtitle, description, features, badge, badgeColor = 'bg-sky-500', isDark, ctaText, ctaLink, stats }) => (
  <div className={`flex flex-col p-8 md:p-10 rounded-[2.5rem] border flex-grow transition-all duration-300 ${isDark ? 'bg-slate-900 border-slate-800 text-white shadow-2xl' : 'bg-white border-slate-200 text-slate-900 shadow-sm hover:border-sky-300 hover:shadow-lg'}`}>
    {badge && (
      <span className={`inline-block ${badgeColor} text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 w-fit`}>
        {badge}
      </span>
    )}
    <div className={`w-14 h-14 ${isDark ? 'bg-slate-800' : 'bg-slate-50'} rounded-2xl flex items-center justify-center mb-6`}>
      {icon}
    </div>
    <h3 className="text-2xl font-serif font-bold mb-1">{title}</h3>
    <p className={`text-sm font-medium mb-4 ${isDark ? 'text-sky-400' : 'text-sky-500'}`}>{subtitle}</p>
    <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{description}</p>
    
    {stats && stats.length > 0 && (
      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-50 rounded-2xl">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</div>
            <div className={`text-[9px] uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{stat.label}</div>
          </div>
        ))}
      </div>
    )}
    
    <div className={`flex-grow space-y-3 mb-8`}>
      {features.map((feat, i) => (
        <div key={i} className="flex items-start gap-3">
          <CheckCircle2 size={14} className={`shrink-0 mt-0.5 ${isDark ? 'text-emerald-400' : 'text-sky-500'}`} />
          <span className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{feat}</span>
        </div>
      ))}
    </div>

    <a 
      href={ctaLink}
      className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all mt-auto ${
        isDark 
        ? 'bg-sky-500 text-white hover:bg-sky-500' 
        : 'bg-slate-900 text-white hover:bg-sky-500'
      }`}
    >
      {ctaText} <ArrowRight size={14}/>
    </a>
  </div>
);

const OSSCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  stars?: string;
  license: string;
}> = ({ icon, title, description, link, stars, license }) => (
  <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-lg transition-all group">
    <div className="flex items-start justify-between mb-4">
      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
        {icon}
      </div>
      <span className="text-[9px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-full">{license}</span>
    </div>
    <h4 className="font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">{title}</h4>
    <p className="text-xs text-slate-500 leading-relaxed mb-4">{description}</p>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {stars && (
          <span className="flex items-center gap-1 text-[10px] text-slate-500">
            <Star size={12} className="text-amber-500 fill-amber-500" /> {stars}
          </span>
        )}
      </div>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-[10px] font-bold text-slate-900 hover:text-emerald-600 transition-colors"
      >
        View on GitHub <ExternalLink size={10} />
      </a>
    </div>
  </div>
);

const Products: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-500 text-[9px] font-bold uppercase tracking-[0.2em] mb-6">
          RivicQ Product Suite
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
          Quantum-Safe <span className="text-sky-500">Solutions.</span>
        </h1>
        <p className="text-xl text-slate-500 font-serif italic leading-relaxed">
          Enterprise tools for the post-quantum world. Open-source and SaaS products to keep your data safe.
        </p>
      </header>

      {/* OSS & Enterprise Overview */}
      <section className="mb-24">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {/* OSS Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-technical opacity-20"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Github size={32} className="text-white" />
                  <div className="w-px h-8 bg-slate-700"></div>
                  <span className="text-sm font-bold text-emerald-400">Open Source</span>
                </div>
                <h2 className="text-3xl font-serif font-bold mb-4 text-white">Community & OSS</h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Free, open-source tools for crypto security. Built by the community. MIT licensed.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'CryptoBOM scanner CLI tools',
                    'RQSP protocol reference implementation',
                    'MIT & Apache 2.0 licensed',
                    'Community support via GitHub',
                    'Continuous integration ready'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <a 
                  href="https://github.com/rivic-q" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold text-sm rounded-xl hover:bg-emerald-50 transition-all"
                >
                  <Github size={18} /> Explore OSS Projects
                </a>
              </div>
            </div>

            {/* Enterprise Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-technical opacity-20"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Rocket size={32} className="text-white" />
                  <div className="w-px h-8 bg-sky-400"></div>
                  <span className="text-sm font-bold text-sky-200">Enterprise</span>
                </div>
                <h2 className="text-3xl font-serif font-bold mb-4 text-white">SaaS Platform</h2>
                <p className="text-sky-100 leading-relaxed mb-8">
                  Enterprise platform with cloud HSM, AI scanning, and dedicated support.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Cloud HSM integrations (AWS, GCP, IBM)',
                    'AI-powered CBOM scanning',
                    'DORA/NIST compliance automation',
                    'Real-time security dashboards',
                    'Dedicated support & SLAs'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-sky-100">
                      <CheckCircle2 size={16} className="text-emerald-300 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link 
                  to="/beta-signup"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-sky-500 font-bold text-sm rounded-xl hover:bg-sky-50 transition-all"
                >
                  Join Beta Program <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* OSS Projects */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-8">
          <Github size={28} className="text-slate-900" />
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Open Source Projects</h2>
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">MIT Licensed • Community Driven</span>
          </div>
        </div>

        <div className="not-prose grid md:grid-cols-2 gap-6 mb-8">
          <OSSCard 
            icon={<FileSearch size={24} />}
            title="CryptoBOM (CBOM)"
            description="Discover keys, certificates, and crypto assets in your code. Generates SBOM/CBOM reports with AI."
            link="https://github.com/rivic-q/cryptobom-saas"
            stars="847"
            license="Apache 2.0"
          />
          <OSSCard 
            icon={<LockKeyhole size={24} />}
            title="Privacy Protocol (RQSP)"
            description="Private blockchain transactions using zero-knowledge proofs. Built with ZK-SNARKs."
            link="https://github.com/rivic-q/rivicq-protocol"
            stars="1.2k"
            license="MIT"
          />
        </div>

        <AnimatedSection delay={300}>
          <div className="bg-slate-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Want to contribute?</h4>
              <p className="text-sm text-slate-500">Help us build quantum-safe tools.</p>
            </div>
            <a 
              href="https://github.com/rivic-q" 
              target="_blank" 
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold text-sm rounded-xl hover:bg-slate-800 transition-all"
            >
              <Github size={18} /> View All Projects
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* Product 1: CBOM */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-sky-500 text-white rounded-2xl shadow-lg">
            <FileSearch size={24}/>
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">1. CryptoBOM, QBOM & Cryptographic Security Posture Management</h2>
            <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest">Core Discovery • Quantum BOM • CSPM</span>
          </div>
        </div>
        <p className="text-slate-600 mb-8 max-w-3xl">
          Automatically find and catalog every cryptographic asset in your infrastructure. Generate CBOM and QBOM reports aligned with NIST standards.
        </p>
        
        <div className="not-prose grid lg:grid-cols-2 gap-8">
          <ProductCard 
            icon={<FileCode size={24} className="text-sky-500"/>}
            title="BOM Intelligence Engine"
            subtitle="Discovery & Inventory"
            description="AI scanner that finds keys, certificates, and quantum-vulnerable crypto across your code, containers, and cloud."
            features={[
              "Deep code analysis with AI pattern recognition",
              "CBOM + QBOM generation for quantum vulnerability mapping",
              "Cloud VPC cryptographic asset discovery",
              "CycloneDX SBOM/CBOM/QBOM generation",
              "Continuous monitoring with delta detection",
              "Integration with GitHub, GitLab, Bitbucket"
            ]}
            stats={[
              { value: "99.2%", label: "Detection Rate" },
              { value: "<2min", label: "Per Repository" },
              { value: "50+", label: "Languages" }
            ]}
            ctaText="Start Free Scan"
            ctaLink="mailto:hello@rivicq.de?subject=CryptoBOM Trial Request"
          />
          
          <ProductCard 
            icon={<ShieldCheck size={24} className="text-emerald-600"/>}
            title="CSPM Posture Manager"
            subtitle="Risk & Compliance"
            description="Real-time dashboard for crypto security risks, compliance, and PQC readiness — with AI-powered fixes."
            features={[
              "NIST PQC compliance dashboard (FIPS 203/204/205)",
              "DORA Article 9 automated mapping",
              "Quantum risk scoring with QBOM exposure analysis",
              "Agentic Security AI automated remediation",
              "Executive compliance reporting",
              "Audit trail & evidence generation"
            ]}
            badge="Regulatory Ready"
            badgeColor="bg-emerald-600"
            stats={[
              { value: "8+", label: "Frameworks" },
              { value: "Real-time", label: "Monitoring" },
              { value: "GDPR", label: "Compliant" }
            ]}
            ctaText="Request Demo"
            ctaLink="mailto:hello@rivicq.de?subject=CryptoBOM Demo Request"
            isDark
          />
        </div>

        {/* CBOM Enterprise Features */}
        <AnimatedSection delay={200}>
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-technical opacity-10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">Enterprise CSPM Platform</h3>
                <p className="text-sky-100 text-sm">Full platform with CBOM/QBOM, AI agents, PQC migration, and Privacy Protocol.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a 
                  href="https://github.com/rivic-q/cryptobom-saas" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-white text-slate-900 font-bold text-sm rounded-xl hover:bg-sky-50 transition-all"
                >
                  <Github size={16} /> View on GitHub
                </a>
                <Link 
                  to="/beta-signup"
                  className="flex items-center gap-2 px-5 py-3 bg-white/10 text-white font-bold text-sm rounded-xl hover:bg-white/20 transition-all border border-white/20"
                >
                  Join Beta
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* CISO Dashboard Demo Section */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-slate-900 text-white rounded-2xl shadow-lg">
            <Eye size={24}/>
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Live CISO Dashboard Preview</h2>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Real-time Cryptographic Security Intelligence</span>
          </div>
        </div>
        
        <p className="text-slate-600 mb-8 max-w-3xl">
          See your entire crypto landscape at a glance. Track posture, vulnerabilities, and compliance in real time.
        </p>
        
        <CISODashboard />
        
        {/* Demo Request Form */}
        <div className="mt-12 bg-white rounded-[3rem] p-8 md:p-12 border border-slate-200 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Request Full Dashboard Access</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                See your real data in the RivicQ CISO Dashboard. Our team sets up a personalized demo and walks you through it.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <CheckCircle2 size={16} className="text-emerald-600"/>, text: "30-minute walkthrough tailored to you" },
                  { icon: <CheckCircle2 size={16} className="text-emerald-600"/>, text: "Threat analysis for your infrastructure" },
                  { icon: <CheckCircle2 size={16} className="text-emerald-600"/>, text: "Compliance gap assessment included" },
                  { icon: <CheckCircle2 size={16} className="text-emerald-600"/>, text: "PQC migration roadmap preview" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-sm text-slate-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <DemoRequestForm />
          </div>
        </div>
      </section>

      {/* Product 2: Privacy Protocol */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-indigo-600 text-white rounded-2xl shadow-lg">
            <LockKeyhole size={24}/>
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">2. Privacy Protocol (RQSP)</h2>
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Zero-Knowledge Web3 Privacy</span>
          </div>
        </div>
        <p className="text-slate-600 mb-8 max-w-3xl">
          RQSP lets you run private blockchain transactions with zero-knowledge proofs — while staying compliant.
        </p>
        
        <div className="not-prose grid lg:grid-cols-2 gap-8">
          <ProductCard 
            icon={<Lock size={24} className="text-indigo-600"/>}
            title="Confidential Transfers"
            subtitle="Transaction Privacy"
            description="Hide sender, recipient, and amounts in blockchain transactions using zero-knowledge proofs."
            features={[
              "Zero-knowledge proof generation",
              "Merkle tree commitment verification (2^20 leaves)",
              "Range proofs for value validation",
              "ECIES encrypted communications",
              "Multi-chain support (ETH, SOL, BSC, MATIC)",
              "Hardware wallet integration (Ledger, Trezor)"
            ]}
            badge="ZK-SNARKs"
            badgeColor="bg-indigo-600"
            stats={[
              { value: "7", label: "Chains" },
              { value: "Groth16", label: "Proof System" },
              { value: "MIT", label: "License" }
            ]}
            ctaText="View Protocol Spec"
            ctaLink="/rqsp"
          />
          
          <ProductCard 
            icon={<Shield size={24} className="text-purple-600"/>}
            title="Enterprise Compliance"
            subtitle="Regulatory Alignment"
            description="Stay compliant with GDPR, BaFin, and DORA while keeping transactions private and auditable."
            features={[
              "Anonymous authentication without identity exposure",
              "Selective disclosure for regulatory compliance",
              "BaFin-compliant audit trails",
              "Multi-signature vault support",
              "Timelock release mechanisms",
              "Social recovery with guardian approval"
            ]}
            badge="BaFin Ready"
            badgeColor="bg-purple-600"
            isDark
            stats={[
              { value: "100%", label: "Privacy" },
              { value: "GDPR", label: "Aligned" },
              { value: "Audit", label: "Ready" }
            ]}
            ctaText="Request Whitepaper"
            ctaLink="/pitch-deck#whitepaper"
          />
        </div>

        {/* Protocol Enterprise CTA */}
        <AnimatedSection delay={200}>
          <div className="mt-8 bg-slate-900 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-technical opacity-10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <Github size={20} className="text-white" />
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Open Source (MIT)</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">RivicQ Protocol on GitHub</h3>
                <p className="text-slate-400 text-sm">Reference implementation with EVM contracts and cross-chain bridges.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a 
                  href="https://github.com/rivic-q/rivicq-protocol" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-white text-slate-900 font-bold text-sm rounded-xl hover:bg-emerald-50 transition-all"
                >
                  <Github size={16} /> View Repository
                </a>
                <a 
                  href="https://github.com/rivic-q/rivicq-protocol#readme" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-white/10 text-white font-bold text-sm rounded-xl hover:bg-white/20 transition-all border border-white/20"
                >
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Product 3: DevSecOps Pipeline */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-cyan-600 text-white rounded-2xl shadow-lg">
            <Workflow size={24}/>
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">3. DevSecOps Security Pipeline</h2>
            <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest">CI/CD Integration & Automated Security</span>
          </div>
        </div>
        <p className="text-slate-600 mb-8 max-w-3xl">
          Add quantum-safe scanning to your CI/CD pipeline. Detect crypto vulnerabilities, generate CBOMs, and check compliance at every build.
        </p>
        
        <div className="not-prose grid lg:grid-cols-2 gap-8">
          <ProductCard 
            icon={<Scan size={24} className="text-cyan-600"/>}
            title="Security Scanner"
            subtitle="CI/CD Integration"
            description="GitHub Actions-ready scanner that catches weak crypto and compliance issues automatically."
            features={[
              "Automated CBOM generation on every commit",
              "Real-time cryptographic vulnerability detection",
              "NIST PQC compliance checking in CI/CD",
              "Integration with GitHub, GitLab, Jenkins",
              "SARIF format output for security dashboards",
              "Custom rule engine for organization policies"
            ]}
            badge="GitHub Actions Ready"
            badgeColor="bg-cyan-600"
            stats={[
              { value: "<30s", label: "Scan Time" },
              { value: "100+", label: "Rules" },
              { value: "99.8%", label: "Accuracy" }
            ]}
            ctaText="View on GitHub"
            ctaLink="https://github.com/rivic-q/devsecops-scanner"
          />
          
          <ProductCard 
            icon={<Settings size={24} className="text-teal-600"/>}
            title="Pipeline Orchestrator"
            subtitle="Compliance Automation"
            description="Centralized policy management, automated fixes, and compliance reporting for all your pipelines."
            features={[
              "Centralized security policy management",
              "Automated remediation workflow triggers",
              "Compliance reporting for DORA, NIST, GDPR",
              "Multi-team and multi-project dashboards",
              "Integration with enterprise ticketing systems",
              "Audit trail and evidence generation"
            ]}
            badge="Enterprise Ready"
            badgeColor="bg-teal-600"
            isDark
            stats={[
              { value: "50+", label: "Integrations" },
              { value: "Real-time", label: "Updates" },
              { value: "SOC 2", label: "Compliant" }
            ]}
            ctaText="Request Demo"
            ctaLink="mailto:hello@rivicq.de?subject=DevSecOps Demo Request"
          />
        </div>

        {/* DevSecOps Enterprise Features */}
        <AnimatedSection delay={200}>
          <div className="mt-8 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-technical opacity-10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">Enterprise DevSecOps Platform</h3>
                <p className="text-cyan-100 text-sm">Custom rules, enterprise SSO, and dedicated support for banks and government agencies.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a 
                  href="mailto:hello@rivicq.de?subject=DevSecOps Enterprise Inquiry" 
                  className="flex items-center gap-2 px-5 py-3 bg-white text-slate-900 font-bold text-sm rounded-xl hover:bg-cyan-50 transition-all"
                >
                  Contact Sales
                </a>
                <Link 
                  to="/beta-signup"
                  className="flex items-center gap-2 px-5 py-3 bg-white/10 text-white font-bold text-sm rounded-xl hover:bg-white/20 transition-all border border-white/20"
                >
                  Join Beta
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Product 4: Agentic Security AI */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-violet-600 text-white rounded-2xl shadow-lg">
            <Bot size={24}/>
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">4. Agentic Security AI</h2>
            <span className="text-[10px] font-bold text-violet-600 uppercase tracking-widest">Autonomous AI Security Agents</span>
          </div>
        </div>
        <p className="text-slate-600 mb-8 max-w-3xl">
          Deploy AI agents that watch for crypto threats and fix them automatically. Self-healing security for your entire infrastructure.
        </p>

        <div className="not-prose grid lg:grid-cols-2 gap-8">
          <ProductCard
            icon={<Bot size={24} className="text-violet-600"/>}
            title="Threat Hunter Agent"
            subtitle="Autonomous Detection"
            description="AI agent that hunts for crypto threats and policy violations across cloud and on-prem."
            features={[
              "Autonomous cryptographic threat hunting",
              "Real-time correlation across BOM layers",
              "Behavioral anomaly detection for zero-day attacks",
              "Quantum vulnerability scanning (QBOM analysis)",
              "Multi-cloud telemetry ingestion",
              "Self-tuning detection models"
            ]}
            badge="AI-Powered"
            badgeColor="bg-violet-600"
            stats={[
              { value: "24/7", label: "Autonomous" },
              { value: "99.7%", label: "Detection Rate" },
              { value: "Real-time", label: "Response" }
            ]}
            ctaText="Deploy Agent"
            ctaLink="mailto:hello@rivicq.de?subject=Agentic Security AI Inquiry"
          />

          <ProductCard
            icon={<ShieldCheck size={24} className="text-violet-600"/>}
            title="Remediation Orchestrator"
            subtitle="Self-Healing"
            description="Automatically responds to crypto threats without human help. Every action is logged."
            features={[
              "Self-healing remediation workflows",
              "Adaptive policy enforcement based on risk scoring",
              "Orchestrated incident response across multi-cloud",
              "Integration with SIEM/SOAR platforms",
              "Policy-as-code with OPA and Rego",
              "Compliance-driven auto-remediation"
            ]}
            badge="Zero-Touch"
            badgeColor="bg-violet-600"
            isDark
            stats={[
              { value: "<30s", label: "Mean Response" },
              { value: "100%", label: "Auditable" },
              { value: "SOC 2", label: "Compliant" }
            ]}
            ctaText="Request Demo"
            ctaLink="mailto:hello@rivicq.de?subject=Agentic Security Demo Request"
          />
        </div>

        {/* Agentic Security Enterprise CTA */}
        <AnimatedSection delay={200}>
          <div className="mt-8 bg-gradient-to-r from-violet-600 to-indigo-700 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-technical opacity-10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Agentic Security</h3>
                <p className="text-violet-100 text-sm">Dedicated AI agents, custom policies, and premium support for enterprises.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="mailto:hello@rivicq.de?subject=Agentic Security Enterprise Inquiry"
                  className="flex items-center gap-2 px-5 py-3 bg-white text-slate-900 font-bold text-sm rounded-xl hover:bg-violet-50 transition-all"
                >
                  Contact Sales
                </a>
                <Link
                  to="/beta-signup"
                  className="flex items-center gap-2 px-5 py-3 bg-white/10 text-white font-bold text-sm rounded-xl hover:bg-white/20 transition-all border border-white/20"
                >
                  Join Beta
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Products CTA */}
      <section className="not-prose bg-slate-900 text-white p-12 md:p-16 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-technical opacity-5"></div>
        <div className="relative z-10">
           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white m-0">Ready to secure your infrastructure?</h2>
           <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
             Start with open-source tools or join the enterprise beta.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/beta-signup" className="px-10 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition-all flex items-center gap-2 justify-center shadow-xl">
               Join Beta Program <ArrowRight size={18}/>
             </Link>
             <a href="mailto:hello@rivicq.de?subject=Product Inquiry" className="px-10 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all flex items-center gap-2 justify-center shadow-lg">
               Contact Sales
             </a>
           </div>
        </div>
      </section>
      
      <footer className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        Integrated Verified Infrastructure Computing & Quantum • Berlin
      </footer>
    </article>
  );
};

const DemoRequestForm: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    assets: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'demo-request',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          message: `Estimated Assets: ${formData.assets}\n\n${formData.message}`
        })
      });
      if (response.ok) {
        setFormSubmitted(true);
      } else {
        alert('Something went wrong. Please try again or email us at hello@rivicq.de');
      }
    } catch {
      alert('Network error. Please try again or email us at hello@rivicq.de');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formSubmitted) {
    return (
      <div className="text-center py-12 animate-fadeIn">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 mx-auto">
          <CheckCircle2 size={32} />
        </div>
        <h4 className="text-xl font-bold text-slate-900 mb-2">Request Submitted</h4>
        <p className="text-sm text-slate-500 mb-4">Our team will contact you within 24 hours to schedule your personalized demo.</p>
        <button 
          onClick={() => setFormSubmitted(false)} 
          className="text-xs text-sky-500 font-bold hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name *</label>
          <input 
            required 
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-sky-500/20 focus:bg-white transition-all"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Work Email *</label>
          <input 
            required 
            type="email"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            placeholder="name@company.com"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-sky-500/20 focus:bg-white transition-all"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Company *</label>
          <input 
            required 
            value={formData.company}
            onChange={e => setFormData({...formData, company: e.target.value})}
            placeholder="Company Name"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-sky-500/20 focus:bg-white transition-all"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Job Title</label>
          <input 
            value={formData.role}
            onChange={e => setFormData({...formData, role: e.target.value})}
            placeholder="CISO / Security Lead"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-sky-500/20 focus:bg-white transition-all"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Estimated Cryptographic Assets</label>
        <select 
          value={formData.assets}
          onChange={e => setFormData({...formData, assets: e.target.value})}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-sky-500/20 focus:bg-white transition-all"
        >
          <option value="">Select range</option>
          <option value="1-100">1-100 assets</option>
          <option value="100-500">100-500 assets</option>
          <option value="500-1000">500-1,000 assets</option>
          <option value="1000-5000">1,000-5,000 assets</option>
          <option value="5000+">5,000+ assets</option>
        </select>
      </div>
      <div className="space-y-1">
        <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Additional Notes</label>
        <textarea 
          value={formData.message}
          onChange={e => setFormData({...formData, message: e.target.value})}
          placeholder="Tell us about your security challenges or specific requirements..."
          className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm min-h-[100px] resize-none outline-none focus:ring-2 focus:ring-sky-500/20 focus:bg-white transition-all"
        />
      </div>
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full py-4 bg-sky-500 text-white font-bold rounded-xl hover:bg-sky-600 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
      >
        {isSubmitting ? <Loader2 size={16} className="animate-spin"/> : <><Send size={16}/> Request Dashboard Demo</>}
      </button>
    </form>
  );
};

export default Products;
