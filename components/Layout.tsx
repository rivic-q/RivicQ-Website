
import React, { useEffect, useState, createContext, useContext } from 'react';
import CookieConsent from './CookieConsent';
import Navbar from './Navbar';
import Footer from './Footer';

interface AnimationContextType {
  isAnimating: boolean;
}

const AnimationContext = createContext<AnimationContextType>({ isAnimating: true });

export const useAnimation = () => useContext(AnimationContext);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if ('scrollBehavior' in document.documentElement.style) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
    
    const handleAnchorLinks = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.href.includes(window.location.pathname)) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleAnchorLinks);
    return () => document.removeEventListener('click', handleAnchorLinks);
  }, []);

  return (
    <AnimationContext.Provider value={{ isAnimating: !isReady }}>
      <div className="min-h-screen bg-[#050814] text-slate-100 relative">
        <div className="fixed inset-0 bg-technical opacity-20 pointer-events-none"></div>

        <Navbar />
        <CookieConsent />
        <main className="relative z-10 pt-24 pb-24">
          <div className={`max-w-6xl px-6 md:px-10 mx-auto transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </AnimationContext.Provider>
  );
};

export default Layout;
