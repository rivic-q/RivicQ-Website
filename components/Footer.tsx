import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, MapPin, Copyright, Linkedin, Github, Youtube, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050814] border-t border-white/10 pt-20 pb-10 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          <div className="lg:col-span-2">
             <Link to="/" className="inline-flex items-center gap-4 mb-8 group">
                <div className="p-2.5 bg-white/10 text-white rounded-lg group-hover:bg-[#00D9FF] group-hover:text-slate-900 transition-all duration-300">
                  <Lock size={22} />
                </div>
                <div>
                  <span className="block font-serif font-bold text-2xl text-white tracking-tight">RIVICQ</span>
                  <span className="text-[9px] text-[#00D9FF] uppercase tracking-[0.2em] font-bold">
                    CSPM + PQC + Agentic Security + Privacy Protocol
                  </span>
                </div>
             </Link>

              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4 text-xs leading-relaxed max-w-xs">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-slate-500" />
                  <p className="m-0">
                    WISTA Innovation Center Adlershof<br/>
                    Rudower Chaussee 29, 12489 Berlin<br/>
                    <span className="text-white font-bold">Leap Quantum Hub Resident</span>
                  </p>
                </div>

                <div className="flex gap-4">
                  <a href="https://linkedin.com/company/rivicq" target="_blank" className="p-2 bg-white/5 rounded-lg text-slate-300 hover:text-[#00D9FF] hover:bg-white/10 transition-all" aria-label="LinkedIn"><Linkedin size={18}/></a>
                  <a href="https://github.com/rivic-q" target="_blank" className="p-2 bg-white/5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all" aria-label="GitHub"><Github size={18}/></a>
                  <a href="https://www.youtube.com/@RivicQ" target="_blank" className="p-2 bg-white/5 rounded-lg text-slate-300 hover:text-red-400 hover:bg-white/10 transition-all" aria-label="YouTube"><Youtube size={18}/></a>
                  <a href="mailto:hello@rivicq.de" className="p-2 bg-white/5 rounded-lg text-slate-300 hover:text-[#00D9FF] hover:bg-white/10 transition-all" aria-label="Email"><Mail size={18}/></a>
                </div>
              </div>
           </div>

          <div>
            <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.25em] mb-6">Platform</h3>
            <ul className="space-y-3 list-none p-0 text-xs font-medium">
              <li><Link to="/products" className="hover:text-[#00D9FF] transition-colors">EaaS & BOM Intelligence</Link></li>
              <li><Link to="/platform" className="hover:text-[#00D9FF] transition-colors">Architecture</Link></li>
              <li><Link to="/resources" className="hover:text-[#00D9FF] transition-colors">Documentation</Link></li>
              <li><Link to="/blog" className="hover:text-[#00D9FF] transition-colors">Security Research</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.25em] mb-6">Enterprise</h3>
            <ul className="space-y-3 list-none p-0 text-xs font-medium">
              <li><Link to="/enterprise" className="hover:text-[#00D9FF] transition-colors">Enterprise Contact</Link></li>
              <li><Link to="/pricing" className="hover:text-[#00D9FF] transition-colors">Pricing</Link></li>
              <li><Link to="/trust" className="hover:text-[#00D9FF] transition-colors">Security Policy</Link></li>
              <li><Link to="/privacy" className="hover:text-[#00D9FF] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="not-prose">
            <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.25em] mb-6">Open Source</h3>
            <p className="text-[10px] text-slate-400 leading-relaxed">Deploy via Docker, clone GitHub, or explore API docs.</p>
            <div className="flex gap-2 mt-4">
              <a href="https://github.com/rivic-q" target="_blank" className="px-4 py-2 rounded-lg bg-[#00D9FF] text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all">
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] gap-6 text-slate-500">
          <div className="flex items-center gap-2">
            <Copyright size={12} className="text-slate-500" />
            <span>2024-2026 Robust Integrated Verified Infrastructure Computing & Quantum.</span>
          </div>
          <div className="flex items-center space-x-8">
             <Link to="/legal" className="hover:text-[#00D9FF] transition-colors">Legal</Link>
             <Link to="/privacy" className="hover:text-[#00D9FF] transition-colors">Privacy</Link>
             <div className="flex items-center gap-1.5 text-slate-500">
                <Globe size={10} /> EU/DE
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
