import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { Lock, Mail, Eye, EyeOff, Info } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div style={{
      minHeight: 'calc(100vh - 68px)', display: 'flex', alignItems: 'center',
      justifyContent: 'center', padding: '40px 24px',
      background: 'var(--rq-bg)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Circuit background */}
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.03 }}>
        <defs>
          <pattern id="login-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3B82F6" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#login-grid)" />
        {[...Array(3)].map((_, i) => (
          <path key={i}
            d={`M ${20 + i * 30}% ${100}% Q ${20 + i * 30}% ${50}%, ${30 + i * 25}% ${0}%`}
            stroke="#3B82F6" strokeWidth="0.3" fill="none" opacity="0.3" className="animate-circuit-flow"
            style={{ animationDelay: `${i * 0.6}s` }} />
        ))}
      </svg>

      <div style={{ width: '100%', maxWidth: 420, position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Logo size="md" variant="light" />
          </div>
        </div>

        <div className="card" style={{ padding: 36, background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
          <div style={{
            background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)',
            borderRadius: 8, padding: '10px 14px', marginBottom: 20,
            display: 'flex', alignItems: 'center', gap: 10,
            fontSize: '0.78rem', color: '#FBBF24',
          }}>
            <Info size={16} style={{ flexShrink: 0 }} />
            <span>Authentication backend coming soon. Dashboard data is for demo purposes.</span>
          </div>

          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14, margin: '0 auto 14px',
              background: 'rgba(37,99,235,0.15)', color: '#60A5FA',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Lock size={22} />
            </div>
            <h1 style={{ fontFamily: 'var(--rq-font-heading)', fontSize: '1.3rem', fontWeight: 700, color: '#F1F5F9' }}>Welcome back</h1>
            <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginTop: 4 }}>Sign in to your RivicQ dashboard</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 16 }}>
              <label className="label" htmlFor="email">Email</label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--rq-muted)' }} />
                <input
                  id="email"
                  type="email"
                  className="input"
                  placeholder="you@company.com"
                  style={{ paddingLeft: 38 }}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <label className="label" htmlFor="password" style={{ marginBottom: 0 }}>Password</label>
                <Link to="/forgot-password" style={{ fontSize: '0.78rem', color: 'var(--rq-primary)' }}>Forgot password?</Link>
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="input"
                  placeholder="Enter your password"
                  style={{ paddingRight: 38 }}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer', color: 'var(--rq-muted)',
                    padding: 4, display: 'flex',
                  }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 20 }}>
              Sign In
            </button>
          </form>

          <div style={{ marginTop: 24, textAlign: 'center', fontSize: '0.85rem', color: 'var(--rq-text-secondary)' }}>
            Don't have an account?{' '}
            <Link to="/signup" style={{ color: 'var(--rq-primary)', fontWeight: 600 }}>Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
