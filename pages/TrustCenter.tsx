import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Lock, Activity, CheckCircle, Database, Award, ArrowRight, 
  FileText, Eye, Server, Cpu, Key, AlertTriangle, Download, 
  ExternalLink, ChevronDown, Zap, Bug, Users, FileCheck, Scale
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

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string; subtext?: string; delay?: number }> = ({ icon, label, value, subtext, delay }) => (
  <AnimatedSection delay={delay}>
    <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group">
      <div className="w-14 h-14 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</div>
      <div className="text-3xl font-serif font-bold text-slate-900 mb-1">{value}</div>
      {subtext && <div className="text-xs text-slate-500">{subtext}</div>}
    </div>
  </AnimatedSection>
);

const CertificationCard: React.FC<{ name: string; description: string; status: 'certified' | 'in-progress' | 'planned'; icon: React.ReactNode; delay?: number }> = ({ name, description, status, icon, delay }) => {
  const statusColors = {
    'certified': 'bg-emerald-100 text-emerald-700 border-emerald-200',
    'in-progress': 'bg-amber-100 text-amber-700 border-amber-200',
    'planned': 'bg-slate-100 text-slate-600 border-slate-200'
  };
  
  return (
    <AnimatedSection delay={delay}>
      <div className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-slate-50 rounded-xl text-slate-700">
            {icon}
          </div>
          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider ${statusColors[status]}`}>
            {status === 'in-progress' ? 'In Progress' : status}
          </span>
        </div>
        <h4 className="font-bold text-slate-900 mb-2">{name}</h4>
        <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
      </div>
    </AnimatedSection>
  );
};

const SecurityFeature: React.FC<{ icon: React.ReactNode; title: string; description: string; delay?: number }> = ({ icon, title, description, delay }) => (
  <AnimatedSection delay={delay}>
    <div className="flex gap-5 group">
      <div className="shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </div>
  </AnimatedSection>
);

const IncidentReport: React.FC<{ date: string; type: string; status: string; description: string }> = ({ date, type, status, description }) => (
  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-emerald-200 transition-colors">
    <div className="shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
      <CheckCircle size={18} className="text-emerald-600" />
    </div>
    <div className="flex-grow min-w-0">
      <div className="flex items-center gap-2 mb-1">
        <span className="font-bold text-sm text-slate-900">{type}</span>
        <span className="text-[9px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full uppercase">{status}</span>
      </div>
      <p className="text-xs text-slate-500 truncate">{description}</p>
    </div>
    <span className="text-[10px] text-slate-400 font-medium shrink-0">{date}</span>
  </div>
);

const TrustCenter: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: 'How does RivicQ handle key lifecycle management?', a: 'All cryptographic keys are generated within FIPS 140-3 Level 3 certified HSM boundaries. Keys never exist in plaintext outside the secure module. Our automated key rotation policies ensure compliance with regulatory requirements while maintaining operational continuity.' },
    { q: 'What happens if an HSM is physically tampered with?', a: 'Our hardware incorporates tamper-responsive mechanisms. Upon detection of physical intrusion attempts (voltage, temperature, electromagnetic), the HSM immediately zeroizes all sensitive material. An immutable audit log is generated for forensic analysis.' },
    { q: 'How do you protect against side-channel attacks?', a: 'We implement constant-time cryptographic algorithms, power smoothing, and electromagnetic shielding in our certified hardware. Regular第三方 testing validates our implementations against DPA, timing, and fault injection attacks.' },
    { q: 'Can RivicQ keys be exported from the platform?', a: 'Private keys cannot be exported in plaintext under any circumstances. Public keys and certificates can be exported for standard interoperability. Key material can be migrated between our HSMs using our secure key loading protocol.' },
  ];

  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-bold uppercase tracking-widest mb-6">
            <Shield size={14} /> Verified & Audited
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
            Trust <span className="text-blue-600">Center</span>
          </h1>
          <p className="text-xl text-slate-500 font-serif italic max-w-2xl leading-relaxed">
            Transparency is the foundation of quantum resilience. Explore our security practices, compliance certifications, and incident history.
          </p>
        </AnimatedSection>
      </header>

      {/* Key Stats */}
      <section className="mb-24">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard icon={<Shield className="text-blue-600" size={28} />} label="Certification" value="FIPS 140-3 L3" delay={0} />
            <StatCard icon={<Activity className="text-emerald-600" size={28} />} label="Uptime SLA" value="99.999%" subtext="Last 12 months" delay={100} />
            <StatCard icon={<Cpu className="text-purple-600" size={28} />} label="Algorithms" value="15+" subtext="Including PQC standards" delay={200} />
            <StatCard icon={<Lock className="text-amber-600" size={28} />} label="Security" value="Zero-Knowledge" subtext="Architecture" delay={300} />
          </div>
        </AnimatedSection>
      </section>

      {/* Security by Design */}
      <section className="mb-24">
        <AnimatedSection>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Security Architecture</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <SecurityFeature 
              icon={<Lock size={22} />}
              title="Zero-Knowledge Architecture"
              description="RivicQ never has access to your raw cryptographic material. Keys are generated and stored within tamper-resistant hardware boundaries that even we cannot access."
              delay={0}
            />
            <SecurityFeature 
              icon={<Database size={22} />}
              title="Hardware Isolation"
              description="All key operations occur within FIPS 140-3 Level 3 certified HSM boundaries. Physical tamper detection triggers immediate key destruction."
              delay={100}
            />
            <SecurityFeature 
              icon={<Key size={22} />}
              title="Cryptographic Agility"
              description="Our platform supports seamless migration between cryptographic algorithms without redesigning your applications. NIST-standardized PQC algorithms are already integrated."
              delay={200}
            />
            <SecurityFeature 
              icon={<Eye size={22} />}
              title="Continuous Monitoring"
              description="Real-time SIEM integration with immutable audit logs. Every cryptographic operation is logged, attested, and available for compliance auditing."
              delay={300}
            />
          </div>
          
          <AnimatedSection delay={200}>
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-technical opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-3">
                  <Server size={20} className="text-blue-400" />
                  Infrastructure Security
                </h3>
                <div className="space-y-4">
                  {[
                    'SOC 2 Type II audited infrastructure',
                    'ISO 27001 certified data centers',
                    'GDPR Article 28 data processing agreements',
                    'Multi-region active-active deployment',
                    'DDoS protection with 99.99% SLA',
                    'End-to-end encryption in transit and at rest'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle size={16} className="text-emerald-400 shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="mb-24">
        <AnimatedSection>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Compliance Certifications</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <CertificationCard 
            name="FIPS 140-3 Level 3"
            description="US Government cryptographic module validation for HSM hardware security."
            status="certified"
            icon={<Shield size={20} />}
            delay={0}
          />
          <CertificationCard 
            name="SOC 2 Type II"
            description="Annual audit of security, availability, and confidentiality controls."
            status="certified"
            icon={<FileCheck size={20} />}
            delay={100}
          />
          <CertificationCard 
            name="ISO 27001"
            description="International standard for information security management systems."
            status="in-progress"
            icon={<Scale size={20} />}
            delay={200}
          />
          <CertificationCard 
            name="GDPR Compliant"
            description="Full compliance with EU General Data Protection Regulation."
            status="certified"
            icon={<Lock size={20} />}
            delay={300}
          />
        </div>

        <AnimatedSection delay={400}>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-xl text-blue-600 shrink-0">
              <FileText size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Request Compliance Documentation</h4>
              <p className="text-sm text-slate-600 mb-3">Access our SOC 2 reports, pen test results, and certification attestations under NDA.</p>
              <Link to="/pitch-deck" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-slate-900 transition-colors">
                Request Documents <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Incident History */}
      <section className="mb-24">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif font-bold text-slate-900">Security Incidents</h2>
            <Link to="/legal" className="text-sm font-bold text-blue-600 hover:text-slate-900 flex items-center gap-1">
              Security Disclosures <ExternalLink size={12} />
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="bg-white border border-slate-100 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <CheckCircle size={18} className="text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Security Status: All Clear</h3>
                <p className="text-sm text-slate-500">No security incidents in the past 24 months</p>
              </div>
            </div>

            <div className="space-y-4">
              <IncidentReport 
                date="Jan 2024"
                type="Penetration Testing"
                status="Resolved"
                description="Quarterly external pen test identified low-severity configuration finding. Remediated within SLA."
              />
              <IncidentReport 
                date="Oct 2023"
                type="DDoS Attempt"
                status="Blocked"
                description="Automated attack blocked by CDN. No service impact. Attack signature added to blocklist."
              />
              <IncidentReport 
                date="Jul 2023"
                type="Vulnerability Disclosure"
                status="Resolved"
                description="Third-party researcher disclosed UI vulnerability. Fixed in 48 hours, bounty paid."
              />
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <Link to="/legal" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
                View Full Security Disclosure Policy <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Responsible Disclosure */}
      <section className="mb-24">
        <AnimatedSection>
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-technical opacity-10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Bug size={40} className="text-blue-400 mb-6" />
                <h2 className="text-3xl font-serif font-bold mb-4">Responsible Disclosure</h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  We work with the security research community to identify and remediate vulnerabilities. Our bug bounty program rewards responsible disclosure of security issues.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle size={16} /> Max bounty: €5,000
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <h4 className="font-bold text-sm mb-2">Report a Vulnerability</h4>
                  <p className="text-xs text-slate-400 mb-3">Email our security team with details and reproduction steps.</p>
                  <a href="mailto:security@rivicq.de" className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300">
                    security@rivicq.de <ExternalLink size={12} />
                  </a>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <h4 className="font-bold text-sm mb-2">PGP Encrypted Reports</h4>
                  <p className="text-xs text-slate-400">For sensitive findings, use our PGP key for encrypted communication.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FAQ */}
      <section className="mb-24">
        <AnimatedSection>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-slate-900 pr-4">{faq.q}</span>
                  <ChevronDown size={20} className={`text-slate-400 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-50">
                    <div className="pt-4">{faq.a}</div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection>
        <section className="not-prose bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Questions About Our Security?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Our security team is available to answer questions about our infrastructure, certifications, or compliance requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pitch-deck" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all flex items-center gap-2 justify-center">
              <FileText size={18} /> Request Compliance Pack
            </Link>
            <a href="mailto:security@rivicq.de" className="px-8 py-4 border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 justify-center">
              <Shield size={18} /> Contact Security Team
            </a>
          </div>
        </section>
      </AnimatedSection>

      <footer className="mt-16 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        RivicQ Trust Center • Last Updated: April 2026
      </footer>
    </article>
  );
};

export default TrustCenter;
