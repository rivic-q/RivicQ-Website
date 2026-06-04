
import React, { useState } from 'react';
import { formService } from '../services/formService';
import { Handshake, Percent, Award, ArrowRight, ShieldCheck, Users, Briefcase, Mail, Send, CheckCircle, Loader2, Star, TrendingUp, Rocket, Globe, Target, Zap } from 'lucide-react';

const Partner: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ 
    company: '', 
    email: '', 
    name: '',
    website: '',
    partnershipType: '',
    message: '' 
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await formService.submit({
        type: 'partner-inquiry',
        name: formData.name,
        email: formData.email,
        company: formData.company,
        role: formData.partnershipType,
        message: `Website: ${formData.website}\n\n${formData.message}`
      });
      setFormSubmitted(true);
      setFormData({ company: '', email: '', name: '', website: '', partnershipType: '', message: '' });
    } catch (e) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-4 bg-sky-100 text-sky-600 rounded-2xl">
            <Handshake aria-hidden="true" size={32} />
          </div>
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Partner Program</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
          Partner with RivicQ
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
          Join our ecosystem of technology partners, system integrators, and research institutions building the quantum-safe future together.
        </p>
      </header>

      {/* Partner Benefits */}
      <section className="mb-20">
        <div className="grid md:grid-cols-4 gap-6 not-prose">
          {[
            { icon: <Target aria-hidden="true" size={24} className="text-sky-500" />, title: 'Growth', desc: 'Access new markets and revenue streams through our quantum security solutions' },
            { icon: <Zap aria-hidden="true" size={24} className="text-amber-500" />, title: 'Enablement', desc: 'Sales training, technical documentation, and certification programs' },
            { icon: <Globe aria-hidden="true" size={24} className="text-emerald-500" />, title: 'Co-Marketing', desc: 'Joint marketing campaigns, events, and thought leadership' },
            { icon: <Award aria-hidden="true" size={24} className="text-purple-500" />, title: 'Support', desc: 'Dedicated partner manager and technical support resources' },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Startup Program */}
      <section className="mb-20">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-technical opacity-10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Rocket aria-hidden="true" size={24} className="text-sky-400" />
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">Special Offer</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Startup Partner Program</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl">
              Early-stage deep-tech startups building quantum-related solutions qualify for special benefits including free access to our CryptoBOM tools and priority technical support.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-sky-500/20 rounded-lg text-sm">
                <strong className="text-sky-400">50% Discount</strong> on Enterprise tools
              </div>
              <div className="px-4 py-2 bg-emerald-500/20 rounded-lg text-sm">
                <strong className="text-emerald-400">Free CryptoBOM</strong> scanning
              </div>
              <div className="px-4 py-2 bg-purple-500/20 rounded-lg text-sm">
                <strong className="text-purple-400">Priority Support</strong> access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Partnership Tiers</h2>
        <div className="grid md:grid-cols-3 gap-8 not-prose">
          {[
            {
              title: 'Technology Partner',
              icon: <Briefcase aria-hidden="true" size={24} />,
              color: 'bg-sky-100 text-sky-600',
              description: 'For ISVs, SaaS providers, and technology companies integrating quantum-safe security.',
              benefits: ['API access and SDK support', 'Technical certification', 'Co-development opportunities', 'Marketplace listing']
            },
            {
              title: 'System Integrator',
              icon: <Users aria-hidden="true" size={24} />,
              color: 'bg-emerald-100 text-emerald-600',
              description: 'For consulting firms and system integrators delivering quantum transition services.',
              benefits: ['Implementation support', 'Client referral program', 'Training and certification', 'Partner portal access']
            },
            {
              title: 'Research Partner',
              icon: <Globe aria-hidden="true" size={24} />,
              color: 'bg-purple-100 text-purple-600',
              description: 'For academic institutions and research organizations advancing PQC science.',
              benefits: ['Research collaboration', 'Free HSM access', 'Academic sponsorship', 'Publication opportunities']
            }
          ].map((tier, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className={`w-14 h-14 ${tier.color} rounded-xl flex items-center justify-center mb-6`}>
                {tier.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{tier.title}</h3>
              <p className="text-sm text-slate-500 mb-6">{tier.description}</p>
              <ul className="space-y-3">
                {tier.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle aria-hidden="true" size={16} className="text-sky-500 mt-0.5 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Eura AG LOI Mention */}
      <section className="mb-20">
        <div className="bg-sky-50 border border-sky-200 rounded-[2rem] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-sky-500 text-white rounded-lg">
              <CheckCircle aria-hidden="true" size={20} />
            </div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-600 text-xs font-bold rounded-full">Letter of Intent Signed</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Strategic Partnership: Eura AG</h3>
          <p className="text-slate-600">
            We are proud to announce our strategic partnership with Eura AG, a leading enterprise solutions provider. This partnership accelerates our go-to-market strategy and expands our reach into enterprise markets.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="mb-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Become a Partner</h2>
            <p className="text-slate-600">Complete the form below and our partner team will reach out within 48 hours.</p>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12">
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle aria-hidden="true" size={32} className="text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Application Received</h3>
                <p className="text-slate-600 mb-6">Our partner team will review your application and contact you within 48 hours.</p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="text-sky-500 font-bold hover:underline"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Work Email *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Company *</label>
                    <input
                      required
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                      placeholder="Company Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Website</label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({...formData, website: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                      placeholder="https://company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Partnership Type *</label>
                  <select
                    required
                    value={formData.partnershipType}
                    onChange={(e) => setFormData({...formData, partnershipType: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  >
                    <option value="">Select partnership type</option>
                    <option value="Technology Partner">Technology Partner</option>
                    <option value="System Integrator">System Integrator</option>
                    <option value="Research Partner">Research Partner</option>
                    <option value="Startup">Startup</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Partnership Goals *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 resize-none"
                    placeholder="Tell us about your organization and how you'd like to partner with RivicQ..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <><Loader2 size={18} className="animate-spin" /> Submitting...</>
                  ) : (
                    <>Submit Application <Send size={18} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Partners Choose RivicQ</h2>
        <div className="grid md:grid-cols-2 gap-8 not-prose">
          {[
            { quote: "The RivicQ partnership has been transformative for our security practice. Their quantum-ready solutions have helped us differentiate in a crowded market.", name: "Enterprise Security Firm", type: "MSSP Partner" },
            { quote: "Outstanding technical support and comprehensive documentation made integration seamless. Our clients now have access to cutting-edge cryptographic protection.", name: "Cloud Platform Provider", type: "Technology Partner" },
          ].map((testimonial, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star aria-hidden="true" key={i} size={16} className="fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-slate-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-xs text-slate-500">{testimonial.type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-16 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        RivicQ Partner Program • Berlin • Grow Together
      </footer>
    </article>
  );
};

export default Partner;
