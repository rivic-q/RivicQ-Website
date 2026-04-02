import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, TrendingUp, BarChart3, Globe2, LayoutGrid, ArrowRight, ExternalLink, Zap, Lock, Microscope, Beaker, ShieldCheck, PieChart, Users, Layers, TrendingDown, AlertTriangle, Info, CheckCircle2, Landmark, FileText, BarChart, Rocket, Shield, Quote, FileDown, Presentation, Send, Loader2 } from 'lucide-react';
import { aiService } from '../services/aiService';

const PitchDeck: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    organization: '', 
    role: '',
    documentType: 'pitch-deck',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await aiService.submitInquiry({
        type: 'DOCUMENT_REQUEST',
        ...formData
      });
      setFormSubmitted(true);
    } catch (error) {
      alert("Unable to process request. Please email us directly at hello@rivicq.de");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
          RivicQ Private Placement • Series Pre-Seed • Q1 2026
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900 leading-tight">
          Robust Integrated Verified <br/><span className="text-blue-600">Infrastructure Computing & Quantum.</span>
        </h1>
        <p className="text-xl text-slate-500 font-serif italic max-w-3xl leading-relaxed">
          Pioneering a full-stack quantum resilience platform bridging software visibility with hardware-native security.
        </p>
      </header>

      {/* 1. Market Opportunity & Validation */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200">
            <PieChart size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Market Opportunity</h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Global PQC Transition & Infrastructure</p>
          </div>
        </div>
        
        <div className="not-prose grid md:grid-cols-3 gap-8 mb-10">
          <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-blue-200 transition-all relative group overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">TAM (2030)</span>
              <div className="text-[9px] font-bold text-slate-400">Ref: [1,4]</div>
            </div>
            <h4 className="text-4xl font-bold text-slate-900 mt-2 mb-4">$13.5B</h4>
            <p className="text-xs text-slate-500 leading-relaxed m-0">Combined PQC + HSM + Cryptographic Inventory market. 18.2% CAGR driven by global "Harvest Now, Decrypt Later" mandates.</p>
          </div>
          <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-indigo-200 transition-all relative group overflow-hidden">
             <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">SAM (2027)</span>
              <div className="text-[9px] font-bold text-slate-400">Ref: [2,5]</div>
            </div>
            <h4 className="text-4xl font-bold text-slate-900 mt-2 mb-4">$4.2B</h4>
            <p className="text-xs text-slate-500 leading-relaxed m-0">Total Addressable Market in EU & US Financial and Critical Infrastructure sectors requiring immediate DORA/CNSA 2.0 compliance.</p>
          </div>
          <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl hover:scale-[1.02] transition-all relative group overflow-hidden">
             <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">SOM (Target)</span>
              <div className="text-[9px] font-bold text-slate-500">RivicQ v1.0</div>
            </div>
            <h4 className="text-4xl font-bold text-white mt-2 mb-4">$840M</h4>
            <p className="text-xs text-slate-400 leading-relaxed m-0">Target capture of 20% SAM by 2030, focusing on the high-margin 'Transition Layer' services and SaaS-based CryptoBOM auditing.</p>
          </div>
        </div>
        
        {/* Market Sources */}
        <div className="not-prose bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10">
          <div className="flex items-center gap-3 mb-8">
            <Quote size={20} className="text-blue-500" />
            <h3 className="text-xl font-serif font-bold text-slate-900 m-0">Market Validation & References</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex gap-4">
              <span className="font-bold text-blue-600 text-sm">[1]</span>
              <p className="text-[11px] text-slate-500 leading-relaxed m-0">
                <strong>MarketsandMarkets:</strong> Post-Quantum Cryptography Market Report 2024. Projects a surge from $0.3B to $1.8B for pure PQC software, with an additional $11.7B in hardware security module (HSM) upgrades.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-blue-600 text-sm">[2]</span>
              <p className="text-[11px] text-slate-500 leading-relaxed m-0">
                <strong>EU Commission DORA Impact Assessment:</strong> Estimates €3.2B in initial ICT resilience spending for EU financial entities by 2025, specifically citing cryptographic agility as a core requirement.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-blue-600 text-sm">[3]</span>
              <p className="text-[11px] text-slate-500 leading-relaxed m-0">
                <strong>Gartner Security & Risk Analysis:</strong> Forecasts that by 2026, 60% of Global 2000 enterprises will have a formal cryptographic inventory (CryptoBOM) as part of their compliance posture.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-blue-600 text-sm">[4]</span>
              <p className="text-[11px] text-slate-500 leading-relaxed m-0">
                <strong>White House National Security Memorandum (NSM-10):</strong> Mandates all federal agencies to inventory and prioritize PQC migration, establishing a massive government service market (SAM-Gov).
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Info size={12} className="text-blue-400" /> Data synthesized from multiple industry sources as of Q4 2025.
            </div>
            <a href="https://csrc.nist.gov/projects/post-quantum-cryptography" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-blue-600 hover:text-slate-900 transition-colors uppercase tracking-widest flex items-center gap-1">
              Cross-Verify Standards <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Traction & Unfair Advantages */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-emerald-600 text-white rounded-2xl shadow-lg">
            <Rocket size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Current Traction</h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Highly Validated Foundation</p>
          </div>
        </div>

        <div className="not-prose grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 size={16} className="text-blue-600" /> Infrastructure Support
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed m-0">
              Secured <strong>$350K in Google Cloud AI Credits</strong> to build the RivicQ MVP without burning early investor capital.
            </p>
          </div>
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
              <Landmark size={16} className="text-blue-600" /> Accelerator Backing
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed m-0">
              Active residents of the <strong>Leap Berlin Quantum Accelerator</strong> and validated by <strong>SIB (Scholarship Program)</strong>.
            </p>
          </div>
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
              <Users size={16} className="text-blue-600" /> Academic Partnerships
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed m-0">
              Backed by research faculty from <strong>TU Berlin (Prof. Dr. Jean-Pierre Seifert)</strong> focusing on PQC validation.
            </p>
          </div>
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
              <Shield size={16} className="text-blue-600" /> Open Source Traction
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed m-0">
              Early modular components live and gaining visibility at <strong>github.com/rivic-q</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Ask */}
      <section className="mb-24" id="whitepaper">
        <div className="p-10 md:p-16 bg-white border border-slate-200 rounded-[3rem] shadow-sm">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 m-0">The Ask – Pre-Seed Round</h2>
          <div className="flex items-baseline gap-2 mb-10">
            <span className="text-5xl font-bold text-slate-900">€150-500k</span>
          </div>
          <p className="text-slate-600 mb-10">Capital to finalize the MVP, make strategic early hires (Co-founder/Engineering), and launch pilot programs with design partners.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <span className="text-2xl font-bold text-blue-600">40%</span>
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Product & Eng.</span>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-bold text-indigo-600">30%</span>
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">GTM & Sales</span>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-bold text-emerald-600">20%</span>
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Compliance</span>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-bold text-slate-400">10%</span>
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Operations</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Document Request Form */}
      <section className="mb-24 not-prose">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Document Options */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg">
                <FileDown size={24}/>
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold text-slate-900 m-0">Request Documents</h2>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Investor & Partner Materials</p>
              </div>
            </div>

            <p className="text-slate-600">
              Access our confidential investor materials including the full pitch deck, technical whitepaper, and 2026-2032 revenue projections.
            </p>

            <div className="space-y-4">
              <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <Presentation size={24}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Pitch Deck</h4>
                    <p className="text-xs text-slate-500">Comprehensive overview including market opportunity, traction, product roadmap, and investment terms.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-indigo-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                    <FileText size={24}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Technical Whitepaper</h4>
                    <p className="text-xs text-slate-500">In-depth technical documentation of RQSP protocol, cryptographic architecture, and compliance mapping.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-emerald-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                    <BarChart size={24}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Financial Projections</h4>
                    <p className="text-xs text-slate-500">2026-2032 revenue model with scenario analysis, customer acquisition projections, and unit economics.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                <ShieldCheck size={16} className="text-blue-600"/> Confidentiality Notice
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                All materials are shared under strict confidentiality. By requesting access, you agree to keep this information confidential and not distribute to third parties without explicit consent from RivicQ.
              </p>
            </div>
          </div>

          {/* Right: Request Form */}
          <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-200 shadow-xl">
            {formSubmitted ? (
              <div className="text-center py-12 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Request Received</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Our investor relations team will review your request and send the materials within 24-48 hours.
                </p>
                <p className="text-xs text-slate-400">
                  Questions? Contact us at <a href="mailto:hello@rivicq.de" className="text-blue-600">hello@rivicq.de</a>
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)} 
                  className="mt-8 px-6 py-3 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Request Access</h3>
                <p className="text-sm text-slate-500 mb-8">Complete the form below to receive our confidential materials.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name *</label>
                      <input 
                        required 
                        value={formData.name} 
                        onChange={e => setFormData({...formData, name: e.target.value})} 
                        placeholder="Your Name"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Email *</label>
                      <input 
                        required 
                        type="email"
                        value={formData.email} 
                        onChange={e => setFormData({...formData, email: e.target.value})} 
                        placeholder="name@company.com"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Organization *</label>
                      <input 
                        required 
                        value={formData.organization} 
                        onChange={e => setFormData({...formData, organization: e.target.value})} 
                        placeholder="Company / Fund Name"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Role / Title</label>
                      <input 
                        value={formData.role} 
                        onChange={e => setFormData({...formData, role: e.target.value})} 
                        placeholder="Partner / Analyst / etc."
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all" 
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Documents Requested *</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        { value: 'pitch-deck', label: 'Pitch Deck', icon: <Presentation size={14}/> },
                        { value: 'whitepaper', label: 'Whitepaper', icon: <FileText size={14}/> },
                        { value: 'projections', label: 'Projections', icon: <BarChart size={14}/> }
                      ].map((doc) => (
                        <label 
                          key={doc.value}
                          className={`flex items-center gap-2 p-4 rounded-xl border cursor-pointer transition-all ${
                            formData.documentType === doc.value 
                              ? 'border-blue-600 bg-blue-50 text-blue-600' 
                              : 'border-slate-100 hover:border-slate-300'
                          }`}
                        >
                          <input 
                            type="radio" 
                            name="documentType"
                            value={doc.value}
                            checked={formData.documentType === doc.value}
                            onChange={e => setFormData({...formData, documentType: e.target.value})}
                            className="sr-only"
                          />
                          {doc.icon}
                          <span className="text-xs font-bold">{doc.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-1">Additional Notes</label>
                    <textarea 
                      value={formData.message} 
                      onChange={e => setFormData({...formData, message: e.target.value})} 
                      placeholder="Tell us about your investment focus or any questions..."
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl text-sm min-h-[100px] resize-none outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-3 shadow-xl uppercase tracking-widest text-xs disabled:opacity-50"
                  >
                    {isSubmitting ? <Loader2 size={16} className="animate-spin"/> : <><Send size={16}/> Request Access</>}
                  </button>

                  <p className="text-[9px] text-slate-400 text-center leading-relaxed">
                    By submitting, you agree to keep all received materials confidential. 
                    <br/>RivicQ will process your request within 24-48 hours.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Investor CTA */}
      <section className="not-prose bg-[#0f172a] text-white p-12 md:p-16 rounded-[3rem] relative overflow-hidden text-center shadow-2xl">
        <div className="absolute inset-0 bg-technical opacity-5"></div>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto mt-4 relative z-10 leading-relaxed">
          Ready to join us in building the quantum-safe future?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <a href="mailto:hello@rivicq.de?subject=Investor Inquiry" className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all flex items-center gap-2 justify-center shadow-xl shadow-blue-500/20">
            Connect with IR <ArrowRight size={18}/>
          </a>
          <Link to="/team" className="px-10 py-4 border border-slate-700 text-white font-bold rounded-xl hover:bg-white/5 transition-all flex items-center gap-2 justify-center">
            Meet the Team <Beaker size={18}/>
          </Link>
        </div>
      </section>
      
      <footer className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        RivicQ Technologies • Berlin
      </footer>
    </article>
  );
};

export default PitchDeck;
