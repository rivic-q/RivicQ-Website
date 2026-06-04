
import React, { useState } from 'react';
import { formService } from '../services/formService';
import { Mail, Send, Users, Award, Globe, Heart, Sparkles, Handshake, Star, Clock, CheckCircle, ArrowRight, Briefcase } from 'lucide-react';

const AmbassadorCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  description: string;
  perks: string[];
}> = ({ title, icon, description, perks }) => (
  <div className="bg-gradient-to-br from-sky-50 to-white border border-sky-200 rounded-[2rem] p-8 hover:shadow-lg transition-all">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-3 bg-sky-500 text-white rounded-xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    </div>
    <p className="text-slate-600 text-sm mb-6">{description}</p>
    <div className="space-y-2 mb-6">
      <h4 className="text-xs font-bold text-sky-600 uppercase tracking-wider">Perks Include</h4>
      {perks.map((perk, i) => (
        <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
          <Star aria-hidden="true" size={14} className="text-amber-500" />
          {perk}
        </div>
      ))}
    </div>
    <a 
      href="mailto:hello@rivicq.de?subject=Ambassador Program Application"
      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-sky-600 transition-all w-full justify-center"
    >
      Become an Ambassador <ArrowRight aria-hidden="true" size={16} />
    </a>
  </div>
);

const Careers: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    linkedin: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await formService.submit({
        type: 'careers-application',
        name: formData.name,
        email: formData.email,
        role: formData.role,
        message: `LinkedIn: ${formData.linkedin}\n\n${formData.message}`
      });
      setSubmitted(true);
    } catch (e) {
      alert('Something went wrong. Please try again or email us at hello@rivicq.de');
    }
  };

  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-4 bg-sky-100 text-sky-600 rounded-2xl">
            <Briefcase aria-hidden="true" size={32} />
          </div>
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Join Our Team</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
          Careers at RivicQ
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
          Join us in building the quantum-safe future. We're looking for passionate individuals to help organizations transition to post-quantum cryptography and secure their infrastructure for the next era.
        </p>
      </header>

      {/* Coming Soon - Open Positions */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-sky-100 text-sky-600 rounded-xl">
            <Clock aria-hidden="true" size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 m-0">Open Positions</h2>
            <p className="text-xs text-sky-600 font-bold uppercase tracking-widest">Coming Soon</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-technical opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock aria-hidden="true" size={40} className="text-sky-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions Coming Soon</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
              We're currently building our team and will be posting exciting opportunities soon. Stay tuned for roles in security research, AI engineering, and enterprise sales.
            </p>
            <a 
              href="mailto:hello@rivicq.de?subject=Career Interest - Get Notified"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 text-white font-bold rounded-xl hover:bg-sky-400 transition-all"
            >
              <Mail aria-hidden="true" size={18} /> Get Notified When We Hire
            </a>
          </div>
        </div>
      </section>

      {/* Ambassador Program */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
            <Award aria-hidden="true" size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 m-0">Ambassador Program</h2>
            <p className="text-xs text-amber-600 font-bold uppercase tracking-widest">Join Our Community</p>
          </div>
        </div>
        <p className="text-slate-600 mb-8 max-w-2xl">
          Become a RivicQ Ambassador and help spread awareness about quantum security. Represent us at conferences, write about PQC topics, and build your personal brand while contributing to the quantum-safe future.
        </p>
        
        <div className="not-prose grid md:grid-cols-3 gap-6">
          <AmbassadorCard 
            title="Student Ambassador"
            icon={<Globe aria-hidden="true" size={24} />}
            description="Perfect for university students interested in cybersecurity, cryptography, or quantum computing."
            perks={[
              'Exclusive access to research materials',
              'Mentorship from our team',
              'Conference attendance opportunities',
              'Potential full-time role after graduation',
              'Letter of recommendation'
            ]}
          />
          
          <AmbassadorCard 
            title="Community Ambassador"
            icon={<Users aria-hidden="true" size={24} />}
            description="For security researchers, developers, and influencers who want to champion quantum security."
            perks={[
              'Early access to products and features',
              'Speaking opportunity at our events',
              'Revenue share for referrals',
              'Exclusive RivicQ swag',
              'Direct line to our team'
            ]}
          />
          
          <AmbassadorCard 
            title="Enterprise Ambassador"
            icon={<Handshake aria-hidden="true" size={24} />}
            description="For consultants and advisors who help organizations with their security and compliance journey."
            perks={[
              'Partner tier access to all tools',
              'Referral commissions',
              'Co-marketing opportunities',
              'VIP event access',
              'Thought leadership platform'
            ]}
          />
        </div>
      </section>

      {/* Unsolicited Applications */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-sky-100 text-sky-600 rounded-xl">
            <Heart aria-hidden="true" size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 m-0">Unsolicited Applications</h2>
            <p className="text-xs text-sky-600 font-bold uppercase tracking-widest">Don't See Your Role?</p>
          </div>
        </div>
        <p className="text-slate-600 mb-8 max-w-2xl">
          We're always interested in meeting talented individuals. If you believe you can contribute to RivicQ's mission, we'd love to hear from you. We review every application carefully.
        </p>
        
        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle aria-hidden="true" size={32} className="text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Application Received</h3>
              <p className="text-slate-600 mb-6">
                Thank you for your interest in RivicQ! Our team will review your application and get back to you within 2 weeks.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-sky-500 font-bold hover:underline"
              >
                Submit Another Application
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
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email *</label>
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
                  <label className="block text-sm font-bold text-slate-700 mb-2">Role You're Interested In *</label>
                  <input
                    required
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                    placeholder="e.g., Security Engineer, Sales Lead..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">LinkedIn Profile</label>
                  <input
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Tell Us About Yourself *</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 resize-none"
                  placeholder="Tell us about your skills, experience, and why you'd like to join RivicQ..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Submit Application <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Why Join Us */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Join RivicQ?</h2>
        <div className="not-prose grid md:grid-cols-4 gap-6">
          {[
            { icon: <Sparkles aria-hidden="true" size={24} className="text-sky-500" />, title: 'Mission Critical', desc: 'Work on problems that define the future of digital infrastructure security.' },
            { icon: <Globe aria-hidden="true" size={24} className="text-emerald-500" />, title: 'Global Impact', desc: 'Help organizations worldwide prepare for the post-quantum transition.' },
            { icon: <Award aria-hidden="true" size={24} className="text-purple-500" />, title: 'Growth Path', desc: 'Clear career progression with equity participation in our success.' },
            { icon: <Heart aria-hidden="true" size={24} className="text-rose-500" />, title: 'Great Culture', desc: 'Remote-first team with flexible hours and collaborative spirit.' },
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

      {/* Contact */}
      <section className="not-prose">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-10 md:p-16 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Questions?</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Can't find the right role? Have questions about working at RivicQ? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:careers@rivicq.de?subject=Career Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 text-white font-bold rounded-xl hover:bg-sky-400 transition-all"
            >
              <Mail aria-hidden="true" size={18} /> careers@rivicq.de
            </a>
            <a 
              href="mailto:hello@rivicq.de"
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
            >
              General Contact
            </a>
          </div>
        </div>
      </section>

      <footer className="mt-16 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        RivicQ Technologies • Berlin • Equal Opportunity Employer
      </footer>
    </article>
  );
};

export default Careers;
