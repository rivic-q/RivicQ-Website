import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ShieldCheck, ShieldAlert, Lock, Eye, FileCheck, CheckCircle, Clock, AlertTriangle, ArrowRight, ExternalLink, Database, Key, FileText, Globe } from 'lucide-react';

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

const TrustCenter: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-4 bg-emerald-100 text-emerald-600 rounded-2xl">
              <ShieldCheck aria-hidden="true" size={32} />
            </div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Security & Trust</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
            Trust Center
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Transparency in our security practices, compliance certifications, and operational standards. Learn how we protect your data and ensure cryptographic integrity.
          </p>
        </AnimatedSection>
      </header>

      {/* Security Pillars */}
      <section className="mb-20">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Security Pillars</h2>
        </AnimatedSection>
        <div className="not-prose grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Lock aria-hidden="true" size={24} className="text-emerald-500" />, title: 'Encryption', desc: 'AES-256-GCM at rest, TLS 1.3 in transit with PQC hybrid modes' },
            { icon: <Key aria-hidden="true" size={24} className="text-sky-500" />, title: 'Key Management', desc: 'FIPS 140-3 Level 3 HSMs, automated key rotation policies' },
            { icon: <Eye aria-hidden="true" size={24} className="text-purple-500" />, title: 'Monitoring', desc: '24/7 threat detection, SIEM integration, anomaly alerting' },
            { icon: <Shield aria-hidden="true" size={24} className="text-amber-500" />, title: 'Compliance', desc: 'SOC 2 Type II, GDPR, DORA, NIS2 ready' },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all h-full">
                <div className="p-3 bg-slate-50 rounded-xl w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Compliance Certifications */}
      <section className="mb-20">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-emerald-600 text-white rounded-xl">
              <FileCheck aria-hidden="true" size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 m-0">Compliance & Certifications</h2>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Industry Standards</p>
            </div>
          </div>
        </AnimatedSection>
        
        <div className="not-prose grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'SOC 2 Type II', status: 'In Progress', target: 'Q3 2026', desc: 'Security, availability, and confidentiality controls' },
            { title: 'GDPR Compliant', status: 'Certified', target: 'Active', desc: 'Data protection and privacy for EU residents' },
            { title: 'ISO 27001', status: 'Planned', target: 'Q4 2026', desc: 'Information security management system' },
            { title: 'FIPS 140-3', status: 'In Progress', target: 'Q2 2026', desc: 'Cryptographic module validation for HSM products' },
            { title: 'DORA Ready', status: 'Preparing', target: 'Active', desc: 'Digital Operational Resilience Act compliance' },
            { title: 'NIS2 Aligned', status: 'Preparing', target: 'Active', desc: 'EU cybersecurity directive requirements' },
          ].map((cert, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">{cert.title}</h3>
                  <span className={`px-2 py-1 text-[10px] font-bold rounded-full ${
                    cert.status === 'Certified' ? 'bg-emerald-100 text-emerald-600' :
                    cert.status === 'In Progress' ? 'bg-sky-100 text-sky-500' :
                    'bg-amber-100 text-amber-600'
                  }`}>
                    {cert.status}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mb-3">{cert.desc}</p>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock aria-hidden="true" size={12} />
                  <span>Target: {cert.target}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Security Incident History */}
      <section className="mb-20">
        <AnimatedSection>
          <div className="bg-white border border-slate-200 rounded-[3rem] p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-slate-100 text-slate-600 rounded-xl">
                <Database aria-hidden="true" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 m-0">Security Incident History</h2>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Transparency Report</p>
              </div>
            </div>
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle aria-hidden="true" size={40} className="text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No Security Incidents</h3>
              <p className="text-slate-500 max-w-md mx-auto">
                RivicQ has maintained a perfect security record with zero data breaches, zero unauthorized access incidents, and zero service disruptions due to security events since founding.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">0</div>
                <div className="text-sm text-slate-500">Data Breaches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">0</div>
                <div className="text-sm text-slate-500">Security Incidents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">0</div>
                <div className="text-sm text-slate-500">Vulnerabilities Exploited</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Bug Bounty */}
      <section className="mb-20">
        <AnimatedSection>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-10 md:p-16 text-white">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle aria-hidden="true" size={24} className="text-amber-400" />
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Responsible Disclosure</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Security Bug Bounty Program</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl">
              We welcome security researchers to help identify vulnerabilities in our products. Rewards range from $500 for low-severity issues to $10,000+ for critical vulnerabilities.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:security@rivicq.de" className="px-6 py-3 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-400 transition-all">
                Report Vulnerability
              </a>
              <Link to="/methodology" className="px-6 py-3 border border-slate-600 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                Security Methodology
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Data Handling */}
      <section className="mb-20">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Data Handling Practices</h2>
        </AnimatedSection>
        <div className="not-prose grid md:grid-cols-2 gap-8">
          {[
            { icon: <Globe aria-hidden="true" size={24} className="text-sky-500" />, title: 'Data Residency', desc: 'Customer data stored in EU data centers by default. Options for specific region selection available for enterprise plans.' },
            { icon: <FileText aria-hidden="true" size={24} className="text-purple-500" />, title: 'Data Retention', desc: 'Audit logs retained for 2 years. Customer data deleted within 30 days of account termination upon request.' },
            { icon: <Lock aria-hidden="true" size={24} className="text-emerald-500" />, title: 'Encryption Keys', desc: 'Customer-managed encryption keys available via AWS KMS or Azure Key Vault integration.' },
            { icon: <Eye aria-hidden="true" size={24} className="text-sky-500" />, title: 'Access Controls', desc: 'Role-based access control, MFA required, just-in-time access provisioning for sensitive operations.' },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="flex gap-4 p-6 bg-white border border-slate-200 rounded-2xl">
                <div className="p-3 bg-slate-50 rounded-xl h-fit">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="not-prose">
        <AnimatedSection>
          <div className="bg-sky-50 rounded-[3rem] p-10 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Security Inquiries</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
              For security-related questions, penetration testing requests, or compliance documentation, contact our security team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:security@rivicq.de" className="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 text-white font-bold rounded-xl hover:bg-sky-600 transition-all">
                <ShieldAlert aria-hidden="true" size={18} /> security@rivicq.de
              </a>
              <Link to="/privacy" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-700 font-bold rounded-xl hover:bg-slate-100 transition-all border border-slate-200">
                Privacy Policy <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <footer className="mt-16 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        RivicQ Trust Center • Berlin • Last Updated: April 2026
      </footer>
    </article>
  );
};

export default TrustCenter;
