import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems, NavItem } from '../data/navigation';
import Logo from './Logo';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const handleEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path;
  };

  const isParentActive = (item: NavItem) => {
    if (item.children) return item.children.some(c => isActive(c.path));
    return isActive(item.path);
  };

  return (
    <nav
      aria-label="Primary navigation"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: 68,
        background: scrolled ? 'rgba(10,15,30,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(37,99,235,0.12)' : '1px solid transparent',
        transition: 'all 300ms',
      }}
    >
      <div className="page-container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Logo size="sm" />
        </Link>

        {/* Desktop nav */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 1, height: '100%' }}>
          {navItems.map((item) => {
            const active = isParentActive(item);
            return (
              <div
                key={item.label}
                onMouseEnter={() => item.children && handleEnter(item.label)}
                onMouseLeave={handleLeave}
                style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              >
                {item.children ? (
                  <button
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.label}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      padding: '8px 14px', borderRadius: 8,
                      fontSize: '0.85rem', fontFamily: 'var(--rq-font-heading)',
                      fontWeight: active ? 600 : 500,
                      color: active ? 'var(--rq-primary)' : 'var(--rq-text-secondary)',
                      transition: 'color 200ms', display: 'flex', alignItems: 'center', gap: 4,
                    }}
                  >
                    {item.label}
                    <ChevronDown size={14} style={{
                      transition: 'transform 200ms',
                      transform: openDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                    }} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    style={{
                      padding: '8px 14px', borderRadius: 8, fontSize: '0.85rem',
                      fontFamily: 'var(--rq-font-heading)',
                      fontWeight: active ? 600 : 500,
                      color: active ? 'var(--rq-primary)' : 'var(--rq-text-secondary)',
                      textDecoration: 'none', transition: 'color 200ms',
                    }}
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && openDropdown === item.label && (
                  <div
                    onMouseEnter={() => handleEnter(item.label)}
                    onMouseLeave={handleLeave}
                    style={{
                      position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                      minWidth: 220, background: '#111827', border: '1px solid rgba(37,99,235,0.15)',
                      borderRadius: 14, padding: '6px', boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
                      animation: 'slideDown 0.15s ease-out',
                    }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setOpenDropdown(null)}
                        style={{
                          display: 'flex', flexDirection: 'column', gap: 1,
                          padding: '10px 14px', borderRadius: 10,
                          color: isActive(child.path) ? '#60A5FA' : '#E2E8F0',
                          textDecoration: 'none', fontSize: '0.85rem',
                          fontFamily: 'var(--rq-font-heading)',
                          fontWeight: isActive(child.path) ? 600 : 500,
                          transition: 'background 150ms',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'var(--rq-bg)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      >
                        {child.label}
                        {(child as any).description && (
                          <span style={{ fontSize: '0.72rem', color: 'var(--rq-muted)', fontWeight: 400, fontFamily: 'var(--rq-font-body)' }}>
                            {(child as any).description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <Link to="/enterprise" className="btn btn-primary btn-sm" style={{ marginLeft: 16 }}>
            Talk to Us
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="hide-desktop"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--rq-text)', padding: 8, display: 'flex', alignItems: 'center',
          }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 68, left: 0, right: 0, bottom: 0,
          background: 'rgba(10,15,30,0.98)', backdropFilter: 'blur(16px)',
          padding: '20px 24px', overflowY: 'auto', animation: 'fadeIn 0.2s ease-out',
        }}>
          {navItems.map((item) => (
            <div key={item.label} style={{ marginBottom: 12 }}>
              {item.children ? (
                <>
                  <div style={{
                    fontFamily: 'var(--rq-font-heading)', fontWeight: 600,
                    fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: 'var(--rq-muted)', marginBottom: 6, padding: '0 4px',
                  }}>{item.label}</div>
                  {item.children.map((child) => (
                    <Link
                      key={child.path} to={child.path}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: 'block', padding: '8px 4px',
                        color: isActive(child.path) ? '#60A5FA' : '#E2E8F0',
                        textDecoration: 'none', fontSize: '0.9rem',
                        fontFamily: 'var(--rq-font-heading)',
                        fontWeight: isActive(child.path) ? 600 : 400,
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </>
              ) : (
                <Link
                  to={item.path} onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block', padding: '8px 4px',
                    color: isActive(item.path) ? '#60A5FA' : '#E2E8F0',
                    textDecoration: 'none', fontSize: '0.9rem',
                    fontFamily: 'var(--rq-font-heading)',
                    fontWeight: isActive(item.path) ? 600 : 400,
                  }}
                >{item.label}</Link>
              )}
            </div>
          ))}
          <Link to="/enterprise" onClick={() => setMobileOpen(false)} className="btn btn-primary" style={{ marginTop: 12, width: '100%' }}>
            Talk to Us <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </nav>
  );
}
