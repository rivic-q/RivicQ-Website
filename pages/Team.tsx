import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, Loader2, MessageSquare, Globe, Linkedin, ShieldCheck, Github, Cpu, Users, Bot } from 'lucide-react';
import { aiService } from '../services/aiService';

const Team: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await aiService.submitInquiry({
        type: 'GENERAL_CONTACT',
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
       alert("Service connectivity interrupted. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-4 tracking-tight text-slate-900">Our Team</h1>
        <p className="text-xl text-slate-500 font-serif italic leading-relaxed max-w-2xl">
          A consortium of engineers, researchers, and strategic advisors building high-assurance infrastructure in Berlin.
        </p>
      </header>

      {/* Executive Leadership */}
      <section className="mb-24">
        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-12 border-b border-slate-100 pb-4">Executive Leadership</h3>
        <div className="not-prose grid gap-8">
          {/* Founder */}
          <div className="flex flex-col md:flex-row gap-10 items-start p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
             <div className="w-24 h-24 bg-slate-900 text-white rounded-[2rem] flex items-center justify-center font-serif text-4xl font-bold shrink-0 shadow-xl">R</div>
             <div>
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <h4 className="text-2xl font-bold text-slate-900 m-0">Revan Ande</h4>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[9px] font-bold uppercase tracking-widest rounded-full">Founder & CEO</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mb-6">
                  Security Researcher and Resident at the Leap Berlin Quantum Deep-Tech Accelerator. Specializing in the commercialization of Post-Quantum Cryptography and the virtualization of hardware root-of-trust.
                </p>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/revanande" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={18}/></a>
                  <a href="https://github.com/rivic-q" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><Github size={18}/></a>
                  <a href="mailto:revan.ande@rivicq.de" className="text-slate-400 hover:text-blue-600 transition-colors"><Mail size={18}/></a>
                </div>
             </div>
          </div>

          {/* AI Engineer */}
          <div className="flex flex-col md:flex-row gap-10 items-start p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
             <div className="w-24 h-24 bg-indigo-600 text-white rounded-[2rem] flex items-center justify-center font-serif text-4xl font-bold shrink-0 shadow-xl flex items-center justify-center">
               <Bot size={40}/>
             </div>
             <div>
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <h4 className="text-2xl font-bold text-slate-900 m-0">Pratik Rughe</h4>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[9px] font-bold uppercase tracking-widest rounded-full">AI Engineer</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mb-6">
                  Specializes in AI-powered security analysis and machine learning models for cryptographic vulnerability detection. Building intelligent automation systems for quantum-safe security assessment.
                </p>
                <div className="flex gap-4">
                  <a href="mailto:pratik.rughe@rivicq.de" className="text-slate-400 hover:text-blue-600 transition-colors"><Mail size={18}/></a>
                </div>
             </div>
          </div>

          {/* Operations Lead */}
          <div className="flex flex-col md:flex-row gap-10 items-start p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
             <div className="w-24 h-24 bg-emerald-600 text-white rounded-[2rem] flex items-center justify-center font-serif text-4xl font-bold shrink-0 shadow-xl flex items-center justify-center">
               <Users size={40}/>
             </div>
             <div>
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <h4 className="text-2xl font-bold text-slate-900 m-0">Danush Reddy Mutyala</h4>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[9px] font-bold uppercase tracking-widest rounded-full">Operations Lead</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mb-6">
                  Leads operational strategy and execution for RivicQ. Focuses on scalable infrastructure deployment, partner coordination, and enterprise customer success initiatives.
                </p>
                <div className="flex gap-4">
                  <a href="mailto:danush.m@rivicq.de" className="text-slate-400 hover:text-blue-600 transition-colors"><Mail size={18}/></a>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Strategic Advisory Board */}
      <section className="mb-24">
        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-12 border-b border-slate-100 pb-4">Strategic Advisory Board</h3>
        
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { name: "Prof. Jean-Pierre Seifert", org: "TU Berlin", role: "Quantum Computing & Cryptography" },
              { name: "André Nikolski", org: "Leap Berlin", role: "Deep-Tech Ecosystem Lead" },
              { name: "Sebastian Grodzietzki", org: "IBM Quantum", role: "Enterprise Security Strategy" },
              { name: "Norbert Herrmann", org: "Berlin Senate", role: "Public Sector Innovation" },
              { name: "Mujib Bazhwal", org: "Zukunft Gründen", role: "Entrepreneurship & Growth" }
            ].map((mentor, i) => (
              <div key={i} className="flex gap-5 group items-center">
                <div className="w-1.5 h-10 bg-slate-100 group-hover:bg-blue-600 transition-all rounded-full"></div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 m-0">{mentor.name}</h4>
                  <p className="text-xs text-slate-500 mt-1 m-0"><strong>{mentor.org}</strong> • {mentor.role}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* LOI Partners */}
      <section className="mb-24">
        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-12 border-b border-slate-100 pb-4">Strategic Partners & LOI</h3>
        
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-technical opacity-10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-[9px] font-bold uppercase tracking-widest rounded-full border border-emerald-500/30">Letter of Intent Signed</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Eura AG</h3>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Eura AG has signed a Letter of Intent (LOI) with RivicQ, establishing a strategic partnership for the development and deployment of quantum-safe security solutions across enterprise infrastructure. This partnership represents a significant commitment to advancing post-quantum cryptography adoption.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="text-sm font-bold text-white mb-2">Enterprise Security</h4>
                <p className="text-xs text-slate-400">Collaborative development of quantum-resistant enterprise security platforms</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="text-sm font-bold text-white mb-2">Infrastructure Integration</h4>
                <p className="text-xs text-slate-400">Integration of RivicQ's CBOM scanning and PQC compliance tools</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="text-sm font-bold text-white mb-2">Joint Go-to-Market</h4>
                <p className="text-xs text-slate-400">Co-marketing and sales initiatives for enterprise customers</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400" />
                LOI Signed
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400" />
                Strategic Partnership
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400" />
                Enterprise Collaboration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-50 p-10 md:p-16 rounded-[4rem] border border-slate-100 mt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.02] pointer-events-none">
          <ShieldCheck size={200} className="text-slate-900"/>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16 relative z-10">
          <div className="lg:w-1/2">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 mb-8 border border-slate-100">
              <MessageSquare size={26}/>
            </div>
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6 m-0">Corporate Inquiry</h3>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Engage with our leadership team for research collaborations, institutional partnerships, or press inquiries regarding PQC infrastructure.
            </p>
            <div className="space-y-4">
               <div className="flex items-center gap-3 font-bold text-slate-900 text-sm uppercase tracking-widest">
                <Mail size={16} className="text-blue-600" /> hello@rivicq.de
               </div>
               <div className="flex items-center gap-3 font-bold text-slate-900 text-sm uppercase tracking-widest">
                <Globe size={16} className="text-blue-600" /> Berlin, Germany
               </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            {formSubmitted ? (
               <div className="h-full flex flex-col items-center justify-center text-center p-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm animate-fadeIn">
                 <CheckCircle2 size={40} className="text-emerald-500 mb-6"/>
                 <h4 className="text-xl font-bold text-slate-900 m-0">Inquiry Transmitted</h4>
                 <p className="text-sm text-slate-500 mt-3 max-w-xs">Our executive office will evaluate your request and respond within 48 hours.</p>
                 <button onClick={() => setFormSubmitted(false)} className="mt-8 text-[10px] text-blue-600 font-bold uppercase tracking-[0.2em] hover:underline">New Communication</button>
               </div>
            ) : (
               <form onSubmit={handleSubmit} className="space-y-5 bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Full Name" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Professional Email</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="name@organization.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Inquiry Details</label>
                    <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Briefly describe your interest..." className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl text-sm min-h-[120px] resize-none outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl shadow-slate-200 disabled:opacity-50">
                    {isSubmitting ? <Loader2 size={16} className="animate-spin"/> : <><Send size={16}/> Submit Communication</>}
                  </button>
               </form>
            )}
          </div>
        </div>
      </section>
    </article>
  );
};

export default Team;
