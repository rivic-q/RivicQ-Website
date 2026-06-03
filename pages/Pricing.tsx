import React, { useState } from 'react';
import { Check, Send, Mail, Loader2, AlertTriangle, Clock } from 'lucide-react';
import { aiService } from '../services/aiService';

const PricingCard: React.FC<{
  title: string;
  price: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  cta: string;
  badge?: string;
}> = ({ title, price, description, features, isFeatured, cta, badge }) => (
  <div
    className={`flex flex-col p-8 rounded-[2.5rem] border transition-all duration-300 relative ${
      isFeatured
        ? 'border-[#00D9FF] shadow-2xl shadow-[#00D9FF]/10 glass-panel'
        : 'border-white/10 glass-card'
    }`}
  >
    {badge && (
      <span className="absolute -top-3 left-8 bg-[#00D9FF] text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
        {badge}
      </span>
    )}
    <div className="mb-8">
      <h3 className="text-xl font-serif font-bold text-white m-0 mb-2">{title}</h3>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-4xl font-bold tracking-tight text-white">{price}</span>
      </div>
      <p className="text-sm text-slate-300 leading-relaxed min-h-[40px]">{description}</p>
    </div>

    <div className="flex-grow space-y-4 mb-8">
      {features.map(feature => (
        <div key={feature} className="flex items-start gap-3">
          <div
            className={`mt-0.5 rounded-full p-0.5 ${
              isFeatured ? 'bg-[#00D9FF]/20 text-[#00D9FF]' : 'bg-white/10 text-slate-300'
            }`}
          >
            <Check size={12} />
          </div>
          <span className="text-sm text-slate-200">{feature}</span>
        </div>
      ))}
    </div>

    <a
      href="#contact-sales"
      className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-center transition-all ${
        isFeatured
          ? 'bg-[#00D9FF] text-slate-900 hover:bg-white'
          : 'bg-white/5 border border-white/10 text-white hover:border-[#00D9FF]'
      }`}
    >
      {cta}
    </a>
  </div>
);

const Pricing: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    timeline: 'Immediate',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await aiService.submitInquiry({
        type: 'SALES_PILOT',
        ...formData,
      });
      setFormSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '', timeline: 'Immediate' });
    } catch (error) {
      alert('Unable to reach the server. Please check your connection or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className="prose prose-invert max-w-none">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Pricing & Plans</h1>
        <p className="text-lg text-slate-300">
          Transparent pricing for open source adoption, enterprise scale, and sovereign-grade
          cryptographic operations.
        </p>
      </header>

      <section className="mb-20">
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingCard
            title="Open Source"
            price="Free"
            description="Self-hosted CSPM core with modular components and community support."
            features={[
              'CLI & API access',
              'Local CBOM output',
              'Community extensions',
              'Open-source deployment',
            ]}
            cta="Deploy Open Source"
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            isFeatured
            badge="Most Popular"
            description="Managed CSPM with AI analytics, compliance reporting, and SLA-backed support."
            features={[
              'AI risk scoring',
              'Multi-cloud coverage',
              'Kubernetes security',
              'SIEM/SOAR integrations',
            ]}
            cta="Request Demo"
          />
          <PricingCard
            title="Sovereign"
            price="Custom"
            description="Dedicated hardware and regionalized cryptographic enclaves for regulated sectors."
            features={[
              'Dedicated HSM clusters',
              'Zero Trust architecture',
              'Private key vaults',
              'Regulatory reporting',
            ]}
            cta="Contact Sales"
          />
        </div>
      </section>

      <section id="contact-sales" className="not-prose scroll-mt-24 mb-24">
        <div className="glass-panel rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,217,255,0.12),_transparent_60%)]"></div>
          <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
            <div>
              <div className="p-3 bg-[#00D9FF] text-slate-900 rounded-2xl w-fit mb-6">
                <Mail size={22} />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-white m-0">
                Talk to our CSPM team
              </h2>
              <p className="text-slate-300 text-base mb-8 leading-relaxed">
                Scope a pilot deployment or discuss enterprise rollouts for quantum-safe
                cryptographic posture management.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <AlertTriangle size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm m-0">Regulatory Pressure?</h4>
                    <p className="text-xs text-slate-400 m-0 mt-1">
                      Align with DORA Article 9 and NIST PQC timelines.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Clock size={18} className="text-[#00D9FF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm m-0">Plan ahead</h4>
                    <p className="text-xs text-slate-400 m-0 mt-1">
                      Typical PQC migrations require 18-36 months. Start now.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-[2.5rem] p-8 md:p-10">
              {formSubmitted ? (
                <div className="text-center py-12 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-300 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Check size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Our team will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-8 text-[#00D9FF] text-xs font-bold uppercase tracking-widest hover:underline"
                  >
                    New Communication
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                        Full Name
                      </label>
                      <input
                        required
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:ring-2 focus:ring-[#00D9FF]/40 text-white transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:ring-2 focus:ring-[#00D9FF]/40 text-white transition-all"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                      Company / Organization
                    </label>
                    <input
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:ring-2 focus:ring-[#00D9FF]/40 text-white transition-all"
                      placeholder="Global Infrastructure Ltd."
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                      Message
                    </label>
                    <textarea
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:ring-2 focus:ring-[#00D9FF]/40 text-white transition-all min-h-[140px] resize-none"
                      placeholder="Tell us about your CSPM requirements."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-[#00D9FF] text-slate-900 font-bold rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs disabled:opacity-50"
                  >
                    {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <><Send size={16} /> Submit Inquiry</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Pricing;
