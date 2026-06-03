
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Platform', path: '/platform' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Enterprise', path: '/enterprise' },
    { name: 'Docs', path: '/resources' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#050814]/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center group">
            <span className="font-serif text-2xl font-bold text-white tracking-tight group-hover:text-[#00D9FF] transition-colors">
              RIVICQ
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-[0.2em] font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'text-[#00D9FF]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://github.com/rivic-q"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="View GitHub"
            >
              <Github size={18} />
            </a>
            <Link
              to="/enterprise"
              className="px-5 py-2.5 rounded-full bg-[#00D9FF] text-slate-900 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all neon-border"
            >
              Request Demo
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-200 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#050814]">
          <div className="px-6 pt-4 pb-6 space-y-2">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-xs uppercase tracking-[0.2em] font-semibold ${
                  isActive(link.path)
                    ? 'text-[#00D9FF] bg-white/5'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/enterprise"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-3 px-5 py-3 rounded-xl bg-[#00D9FF] text-slate-900 text-xs font-bold uppercase tracking-[0.2em]"
            >
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
