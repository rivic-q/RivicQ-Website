import { useLocation } from 'react-router-dom';
import { useEffect, ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main id="main-content" style={{ flex: 1, paddingTop: 68 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
