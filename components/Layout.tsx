
import React, { useEffect, useState, createContext, useContext, ReactNode } from 'react';
import Sidebar from './Sidebar';

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
      <div className="min-h-screen flex flex-col md:flex-row bg-[#fafafa] relative">
        <div className="fixed inset-0 bg-technical opacity-40 pointer-events-none"></div>
        <div className="fixed top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-100/20 blur-[120px] rounded-full pointer-events-none animate-pulse-slow"></div>
        <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-slate-100/30 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        <Sidebar />
        <main className="flex-grow md:ml-64 w-full relative z-10 pt-16 md:pt-0">
          <div className={`max-w-4xl px-6 md:px-8 py-12 md:py-24 mx-auto transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
            {children}
          </div>
        </main>
      </div>
    </AnimationContext.Provider>
  );
};

export default Layout;
