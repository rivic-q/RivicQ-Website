import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Microscope, Shield, Zap, RefreshCw, Cpu, Lock, Brain, 
  Target, Layers, Database, Globe, CheckCircle, ArrowRight,
  FileText, ExternalLink, Award, Scale, LockKeyhole, Eye
} from 'lucide-react';

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
};

const PillarCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  details: string[];
  color: string;
  delay?: number 
}> = ({ icon, title, description, details, color, delay }) => (
  <AnimatedSection delay={delay}>
    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full flex flex-col">
      <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-6 text-white`}>
        {icon}
      </div>
      <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{description}</p>
      <ul className="space-y-3 pt-6 border-t border-slate-100">
        {details.map((detail, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
            <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
            {detail}
          </li>
        ))}
      </ul>
    </div>
  </AnimatedSection>
);

const ProcessStep: React.FC<{ number: string; title: string; description: string; delay?: number }> = ({ number, title, description, delay }) => (
  <AnimatedSection delay={delay}>
    <div className="flex gap-6 group">
      <div className="shrink-0">
        <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-lg group-hover:bg-blue-600 transition-colors">
          {number}
        </div>
      </div>
      <div className="pb-12 border-l-2 border-slate-100 pl-6 last:border-0 last:pb-0 last:pb-0">
        <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </div>
  </AnimatedSection>
);

const StandardCard: React.FC<{ name: string; description: string; icon: React.ReactNode; delay?: number }> = ({ name, description, icon, delay }) => (
  <AnimatedSection delay={delay}>
    <div className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-emerald-200 hover:shadow-lg transition-all">
      <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
        {icon}
      </div>
      <h4 className="font-bold text-slate-900 mb-2">{name}</h4>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  </AnimatedSection>
);

const Methodology: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <Microscope size={14} /> Scientific Approach
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
            Our Security <span className="text-blue-600">Methodology</span>
          </h1>
          <p className="text-xl text-slate-500 font-serif italic max-w-3xl leading-relaxed">
            How RivicQ builds quantum-resistant security through rigorous science, peer-reviewed cryptography, and defense-in-depth architecture.
          </p>
        </AnimatedSection>
      </header>

      {/* Hero Quote */}
      <AnimatedSection delay={100}>
        <section className="mb-24">
          <blockquote className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 md:p-16 text-white">
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <Scale size={48} className="text-blue-400 mb-6 opacity-50" />
              <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8">
                "Security is not a product, but a process. At RivicQ, we build that process on the foundations of peer-reviewed mathematics, rigorous testing, and continuous verification."
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                  RA
                </div>
                <div>
                  <cite className="not-italic font-bold text-white">Revan Ande</cite>
                  <span className="block text-slate-400 text-sm">Founder & CEO, RivicQ</span>
                </div>
              </footer>
            </div>
          </blockquote>
        </section>
      </AnimatedSection>

      {/* Four Pillars */}
      <section className="mb-24">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Four Pillars of Our Security</h2>
            <p className="text-lg text-slate-500 max-w-2xl">
              Every RivicQ product is built on these foundational principles, derived from decades of cryptographic research and practical security engineering.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <PillarCard 
            icon={<RefreshCw size={28} />}
            title="Hybrid Protection"
            color="bg-blue-600"
            description="We use a 'belt and suspenders' approach during the quantum transition, wrapping new quantum-safe algorithms inside proven classical encryption. If one fails, the other still protects you."
            details={[
              'NIST-standardized PQC algorithms (ML-KEM, ML-DSA)',
              'Hybrid key exchange combining X25519 + ML-KEM-768',
              'Defense-in-depth architecture',
              'Graceful degradation on algorithm compromise'
            ]}
            delay={0}
          />
          <PillarCard 
            icon={<Cpu size={28} />}
            title="Quantum Entropy"
            color="bg-purple-600"
            description="If a hacker can predict your random numbers, they can break your encryption. We use physical quantum effects and certified TRNGs to generate truly unpredictable cryptographic keys."
            details={[
              'Hardware random number generators (RNG)',
              'NIST SP 800-90B compliant entropy sources',
              'Seed material from quantum tunneling noise',
              'Continuous entropy health monitoring'
            ]}
            delay={100}
          />
          <PillarCard 
            icon={<LockKeyhole size={28} />}
            title="Zero-Knowledge Architecture"
            color="bg-emerald-600"
            description="We design systems so that we can never see your keys. They are generated, stored, and used within secure hardware boundaries that not even RivicQ can access."
            details={[
              'FIPS 140-3 Level 3 certified HSMs',
              'Zero plaintext key export ever',
              'Hardware-rooted identity attestation',
              'Multi-party computation for sensitive operations'
            ]}
            delay={200}
          />
          <PillarCard 
            icon={<Eye size={28} />}
            title="Continuous Attestation"
            color="bg-amber-600"
            description="Security isn't a one-time achievement. We maintain immutable audit logs, continuous integrity monitoring, and real-time threat detection across all operations."
            details={[
              'Cryptographic audit trails',
              'Real-time SIEM integration',
              'Automated compliance reporting',
              'Quarterly third-party penetration testing'
            ]}
            delay={300}
          />
        </div>
      </section>

      {/* Cryptographic Standards */}
      <section className="mb-24">
        <AnimatedSection>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Standards We Follow</h2>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl">
            Our implementations are based on internationally recognized standards, peer-reviewed algorithms, and government-certified cryptographic modules.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <StandardCard 
            name="NIST PQC Standards"
            description="FIPS 203, 204, 205 - The finalized post-quantum cryptographic standards from the US National Institute of Standards and Technology."
            icon={<Shield size={20} />}
            delay={0}
          />
          <StandardCard 
            name="FIPS 140-3"
            description="Cryptographic module security requirements. RivicQ HSMs meet Level 3 with tamper-responsive protection."
            icon={<Lock size={20} />}
            delay={100}
          />
          <StandardCard 
            name="RFC 9486"
            description="Hybrid key exchange for TLS 1.3 combining classical and post-quantum algorithms for maximum security."
            icon={<Layers size={20} />}
            delay={200}
          />
          <StandardCard 
            name="IETF Standards"
            description="Our protocols follow IETF guidelines for secure implementation, including TLS 1.3 best practices."
            icon={<Globe size={20} />}
            delay={300}
          />
        </div>

        <AnimatedSection delay={400}>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-center gap-4">
            <Award size={24} className="text-blue-600 shrink-0" />
            <p className="text-sm text-slate-600">
              <strong className="text-slate-900">Academic Rigor:</strong> Our cryptographic protocols are designed in collaboration with researchers from TU Berlin and reviewed against the NIST PQC standardization process. 
              <a href="mailto:research@rivicq.de" className="text-blue-600 font-bold ml-2">View Research Papers <ExternalLink size={12} className="inline" /></a>
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Security Development Lifecycle */}
      <section className="mb-24">
        <AnimatedSection>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Security Development Lifecycle</h2>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl">
            Every feature goes through our rigorous security review process before reaching production.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedSection delay={100}>
            <div className="space-y-0">
              <ProcessStep 
                number="1"
                title="Threat Modeling"
                description="We identify potential threats during the design phase using STRIDE methodology, considering both classical and quantum attack vectors."
              />
              <ProcessStep 
                number="2"
                title="Peer Code Review"
                description="All cryptographic code is reviewed by at least two senior security engineers before merge, with mandatory review from our cryptography team."
              />
              <ProcessStep 
                number="3"
                title="Static Analysis"
                description="Automated tools scan for code quality issues, memory safety, and cryptographic anti-patterns on every commit."
              />
              <ProcessStep 
                number="4"
                title="Unit Testing"
                description="100% branch coverage for cryptographic modules. Tests verify both positive cases and error handling paths."
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="space-y-0">
              <ProcessStep 
                number="5"
                title="Fuzz Testing"
                description="Continuous fuzzing with libFuzzer to discover edge cases and potential vulnerabilities in our cryptographic implementations."
              />
              <ProcessStep 
                number="6"
                title="Third-Party Audit"
                description="Independent security firms conduct penetration testing and code audits before major releases."
              />
              <ProcessStep 
                number="7"
                title="Certification Testing"
                description="Hardware implementations undergo FIPS 140-3 validation testing by accredited laboratories."
              />
              <ProcessStep 
                number="8"
                title="Post-Deployment Monitoring"
                description="Real-time alerting on anomalous cryptographic operations, key usage patterns, and potential compromise indicators."
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hardware Security Details */}
      <section className="mb-24">
        <AnimatedSection>
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-technical opacity-10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <Cpu size={32} className="text-purple-400" />
                <h2 className="text-3xl font-serif font-bold">Hardware Security Architecture</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <Shield size={16} className="text-emerald-400" /> Tamper Detection
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Multiple layers of tamper detection including environmental sensors, mesh coverings, and active circuitry monitoring. Any breach attempt triggers immediate key destruction.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <Lock size={16} className="text-blue-400" /> Secure Boot
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Immutable boot ROM validates each boot stage cryptographically, ensuring the HSM firmware has not been compromised from power-on.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <Zap size={16} className="text-amber-400" /> Side-Channel Resistance
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Constant-time algorithms, power smoothing, and electromagnetic shielding protect against DPA, timing, and fault injection attacks.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <Database size={16} className="text-cyan-400" /> Key Ceremony
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Critical key generation ceremonies follow NIST SP 800-133 guidelines with multiple custodians and split knowledge requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Compliance Mapping */}
      <section className="mb-24">
        <AnimatedSection>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Regulatory Compliance Mapping</h2>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl">
            Our methodology directly addresses requirements from major regulatory frameworks.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-4 font-bold text-slate-900">Framework</th>
                  <th className="text-left py-4 px-4 font-bold text-slate-900">Requirement</th>
                  <th className="text-left py-4 px-4 font-bold text-slate-900">RivicQ Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { framework: 'DORA (EU)', req: 'Art. 9 - Cryptographic standards', solution: 'FIPS 140-3 HSM + ML-KEM/Ml-DSA' },
                  { framework: 'NIS2 (EU)', req: 'Risk management measures', solution: 'CryptoBOM + Continuous monitoring' },
                  { framework: 'CNSA 2.0 (US)', req: 'Post-quantum algorithms by 2030', solution: 'Full PQC suite ready' },
                  { framework: 'PCI DSS v4.0', req: 'Cryptographic key protection', solution: 'HSM-bound key management' },
                  { framework: 'HIPAA (US)', req: 'Encryption of PHI', solution: 'AES-256 + PQC-ready architecture' },
                  { framework: 'GDPR (EU)', req: 'Data protection by design', solution: 'Zero-knowledge architecture' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">{row.framework}</td>
                    <td className="py-4 px-4 text-slate-600">{row.req}</td>
                    <td className="py-4 px-4 text-emerald-600 font-medium">{row.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </section>

      {/* Research Partners */}
      <section className="mb-24">
        <AnimatedSection>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Research & Validation</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          <AnimatedSection delay={0}>
            <div className="bg-white border border-slate-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl mx-auto mb-6 flex items-center justify-center text-slate-700 font-bold text-xl">
                TU
              </div>
              <h4 className="font-bold text-slate-900 mb-2">TU Berlin</h4>
              <p className="text-sm text-slate-500 mb-4">Cryptography Research Partnership</p>
              <span className="text-xs text-blue-600 font-medium">Prof. Dr. Jean-Pierre Seifert</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-white border border-slate-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl mx-auto mb-6 flex items-center justify-center text-slate-700 font-bold text-xl">
                LB
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Leap Berlin</h4>
              <p className="text-sm text-slate-500 mb-4">Quantum Hub Resident</p>
              <span className="text-xs text-blue-600 font-medium">Deep-Tech Validation</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-white border border-slate-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl mx-auto mb-6 flex items-center justify-center text-slate-700 font-bold text-xl">
                IB
              </div>
              <h4 className="font-bold text-slate-900 mb-2">IBM Quantum</h4>
              <p className="text-sm text-slate-500 mb-4">Technology Advisory</p>
              <span className="text-xs text-blue-600 font-medium">Enterprise Security Strategy</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection>
        <section className="not-prose bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-10 md:p-16 text-center text-white">
          <Target size={48} className="mx-auto text-blue-200 mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
            Ready to Implement Our Methodology?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Schedule a technical consultation to discuss how RivicQ's methodology applies to your security requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pitch-deck" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all flex items-center gap-2 justify-center">
              <FileText size={18} /> Get Technical Whitepaper
            </Link>
            <a href="mailto:hello@rivicq.de" className="px-8 py-4 border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 justify-center">
              <Brain size={18} /> Talk to Our Team
            </a>
          </div>
        </section>
      </AnimatedSection>

      <footer className="mt-16 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        RivicQ Methodology • Built on Peer-Reviewed Science • Berlin, Germany
      </footer>
    </article>
  );
};

export default Methodology;
