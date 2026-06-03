
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Platform', path: '/platform' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Resources', path: '/resources' },
    { name: 'Team', path: '/team' },
  ];

  const ctaLink = { name: 'Beta Signup', path: '/beta-signup' };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="font-serif text-2xl font-bold text-slate-900 group-hover:text-sky-500 transition-colors">
              RivicQ
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-sky-500 font-semibold'
                    : 'text-slate-600 hover:text-sky-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to={ctaLink.path}
              className="px-5 py-2.5 rounded-full bg-sky-500 text-white text-sm font-medium hover:bg-sky-600 transition-all shadow-md hover:shadow-lg"
            >
              {ctaLink.name}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-sky-500 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-inner">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-sky-500 bg-sky-50'
                    : 'text-slate-600 hover:text-sky-500 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to={ctaLink.path}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 px-5 py-3 rounded-md bg-sky-500 text-white font-bold"
            >
              {ctaLink.name}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
