import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Send, CheckCircle2, Award, Activity, MessageSquare, 
  TrendingUp, Users, Globe, ArrowRight, Download, FileText,
  PieChart, Target, Shield, Rocket, DollarSign
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

const Investors: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    company: '', 
    investorType: '',
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
          type: 'investor-inquiry',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.investorType,
          message: formData.message
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

  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-16">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-500 text-[10px] font-bold uppercase tracking-widest mb-6">
            Series Pre-Seed • Q1 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
            Investor <span className="text-sky-500">Relations</span>
          </h1>
          <p className="text-xl text-slate-500 font-serif italic max-w-2xl leading-relaxed">
            Join us in building the quantum-safe future. RivicQ is raising a Pre-Seed round to finalize our FIPS 140-3 HSM integration layer and CryptoBOM SaaS platform.
          </p>
        </AnimatedSection>
      </header>

      {/* Investment Highlights */}
      <section className="mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 not-prose">
          {[
            { icon: <DollarSign size={24} />, value: '€150-500K', label: 'Pre-Seed Target', color: 'bg-sky-50 text-sky-500' },
            { icon: <TrendingUp size={24} />, value: '$13.5B', label: 'TAM by 2030', color: 'bg-emerald-50 text-emerald-600' },
            { icon: <Target size={24} />, value: '€3.2B', label: 'EU DORA Spend', color: 'bg-purple-50 text-purple-600' },
            { icon: <Rocket size={24} />, value: '18.2%', label: 'Market CAGR', color: 'bg-amber-50 text-amber-600' },
          ].map((stat, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className={`p-6 rounded-2xl border border-slate-100 ${stat.color} hover:shadow-lg transition-all`}>
                <div className="mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-xs font-medium opacity-70">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Traction & Validation */}
      <section className="mb-20">
        <AnimatedSection>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Traction & Validation</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
          <AnimatedSection delay={100}>
            <div className="p-8 border border-slate-100 rounded-[2.5rem] bg-white shadow-sm hover:shadow-lg transition-all h-full">
               <div className="p-3 bg-sky-50 text-sky-500 rounded-xl mb-6 inline-block"><CheckCircle2 size={24}/></div>
               <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">Accelerator Status</h4>
               <p className="text-sm text-slate-500 leading-relaxed m-0">Leap Berlin Quantum Hub Resident. Active validation of PQC implementations.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="p-8 border border-slate-100 rounded-[2.5rem] bg-white shadow-sm hover:shadow-lg transition-all h-full">
               <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl mb-6 inline-block"><Activity size={24} className="animate-pulse"/></div>
               <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">EXIST Program</h4>
               <p className="text-sm text-slate-500 leading-relaxed m-0">In Progress for 2026 Founding Grant. German Federal Ministry validation.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="p-8 border border-slate-100 rounded-[2.5rem] bg-white shadow-sm hover:shadow-lg transition-all h-full">
               <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl mb-6 inline-block"><Award size={24}/></div>
               <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">Academic Partnership</h4>
               <p className="text-sm text-slate-500 leading-relaxed m-0">TU Berlin research collaboration with Prof. Dr. Jean-Pierre Seifert.</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Infrastructure */}
        <AnimatedSection delay={400}>
          <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 flex flex-wrap items-center justify-around gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">$350K</div>
              <div className="text-xs text-slate-500 font-medium">Google Cloud Credits</div>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden md:block"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">MIT</div>
              <div className="text-xs text-slate-500 font-medium">RQSP License (OSS)</div>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden md:block"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">7</div>
              <div className="text-xs text-slate-500 font-medium">Blockchain Chains</div>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden md:block"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">99.2%</div>
              <div className="text-xs text-slate-500 font-medium">Detection Rate</div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* The Ask */}
      <section className="mb-20">
        <AnimatedSection>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-technical opacity-10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">The Ask: €150-500K</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Capital to finalize the MVP, make strategic early hires, and launch pilot programs with design partners in the EU financial sector.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { pct: '40%', label: 'Product & Engineering' },
                    { pct: '30%', label: 'GTM & Sales' },
                    { pct: '20%', label: 'Compliance & Cert' },
                    { pct: '10%', label: 'Operations' },
                  ].map((item, i) => (
                    <div key={i} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-2xl font-bold text-sky-400">{item.pct}</div>
                      <div className="text-xs text-slate-400">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Use of Funds</h3>
                <ul className="space-y-3">
                  {[
                    'Finalize FIPS 140-3 HSM integration',
                    'Launch CryptoBOM SaaS v1.0',
                    'Hire 2 senior engineers',
                    'EU financial design partners (3)',
                    'SOC2 readiness audit',
                    'PQC certification testing'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Documents */}
      <section className="mb-20">
        <AnimatedSection>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Investor Materials</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-6 not-prose">
          {[
            { 
              icon: <FileText size={24} />, 
              title: 'Pitch Deck', 
              desc: 'Comprehensive overview including market analysis, product roadmap, and investment terms.',
              cta: 'Request Pitch Deck'
            },
            { 
              icon: <Shield size={24} />, 
              title: 'Technical Whitepaper', 
              desc: 'In-depth RQSP protocol documentation, cryptographic architecture, and compliance mapping.',
              cta: 'Request Whitepaper'
            },
            { 
              icon: <PieChart size={24} />, 
              title: 'Financial Model', 
              desc: '2026-2032 revenue projections with scenario analysis and unit economics.',
              cta: 'Request Projections'
            },
          ].map((doc, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:border-sky-200 transition-all h-full flex flex-col">
                <div className="p-4 bg-sky-50 text-sky-500 rounded-xl w-fit mb-6">{doc.icon}</div>
                <h4 className="font-bold text-slate-900 mb-2">{doc.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed flex-grow mb-6">{doc.desc}</p>
                <Link 
                  to="/pitch-deck"
                  className="inline-flex items-center gap-2 text-sm font-bold text-sky-500 hover:text-slate-900 transition-colors"
                >
                  {doc.cta} <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="not-prose">
        <AnimatedSection>
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-technical opacity-10"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-white">Partner With Us</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  We are seeking strategic capital partners who understand the gravity of the post-quantum transition and believe in German engineering precision.
                </p>
                <div className="flex items-center gap-4">
                  <Users size={24} className="text-sky-400" />
                  <div>
                    <div className="text-sm font-bold text-white">Direct Contact</div>
                    <a href="mailto:hello@rivicq.de" className="text-sky-400 hover:text-sky-300 text-sm">hello@rivicq.de</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[2rem] p-8 shadow-2xl">
                {formSubmitted ? (
                  <div className="text-center py-12 animate-fadeIn">
                    <CheckCircle2 size={48} className="mx-auto text-emerald-500 mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Received</h3>
                    <p className="text-slate-500 text-sm mb-6">Our investor relations team will respond within 24-48 hours.</p>
                    <button 
                      onClick={() => setFormSubmitted(false)} 
                      className="text-sm text-sky-500 font-bold hover:underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">Name *</label>
                        <input 
                          required 
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 outline-none focus:ring-2 focus:ring-sky-500"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">Email *</label>
                        <input 
                          required 
                          type="email"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 outline-none focus:ring-2 focus:ring-sky-500"
                          placeholder="name@fund.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">Organization *</label>
                      <input 
                        required 
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="Fund / Investment Firm"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">Investor Type</label>
                      <select 
                        value={formData.investorType}
                        onChange={e => setFormData({...formData, investorType: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 outline-none focus:ring-2 focus:ring-sky-500"
                      >
                        <option value="">Select type</option>
                        <option value="VC">VC / Growth Fund</option>
                        <option value="Angel">Angel Investor</option>
                        <option value="CVC">Corporate Venture</option>
                        <option value="Family Office">Family Office</option>
                        <option value="Accelerator">Accelerator</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">Message</label>
                      <textarea 
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 outline-none focus:ring-2 focus:ring-sky-500 min-h-[100px] resize-none"
                        placeholder="Tell us about your investment focus..."
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-sky-500 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : <><Send size={16} /> Connect with IR</>}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <footer className="mt-16 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        RivicQ Technologies • Berlin, Germany • Confidential
      </footer>
    </article>
  );
};

export default Investors;
