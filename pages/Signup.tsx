import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { UserPlus, Mail, Lock, User, Eye, EyeOff, Info } from 'lucide-react';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div style={{
      minHeight: 'calc(100vh - 68px)', display: 'flex', alignItems: 'center',
      justifyContent: 'center', padding: '40px 24px',
      background: 'linear-gradient(135deg, var(--rq-bg) 0%, var(--rq-accent-light) 100%)',
    }}>
      <div style={{ width: '100%', maxWidth: 420 }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Logo size="md" />
          </div>
        </div>

        <div className="card" style={{ padding: 36 }}>
          <div style={{
            background: 'rgba(217,119,6,0.08)', border: '1px solid rgba(217,119,6,0.2)',
            borderRadius: 8, padding: '10px 14px', marginBottom: 20,
            display: 'flex', alignItems: 'center', gap: 10,
            fontSize: '0.78rem', color: 'var(--rq-warning)',
          }}>
            <Info size={16} style={{ flexShrink: 0 }} />
            <span>Account creation is coming soon. Your data stays local for now.</span>
          </div>

          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14, margin: '0 auto 14px',
              background: 'var(--rq-accent-light)', color: 'var(--rq-accent-dark)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <UserPlus size={22} />
            </div>
            <h1 style={{ fontFamily: 'var(--rq-font-heading)', fontSize: '1.3rem', fontWeight: 700 }}>Create Account</h1>
            <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.85rem', marginTop: 4 }}>Get started with RivicQ</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 16 }}>
              <label className="label" htmlFor="name">Full Name</label>
              <div style={{ position: 'relative' }}>
                <User size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--rq-muted)' }} />
                <input id="name" type="text" className="input" placeholder="John Doe" style={{ paddingLeft: 38 }} required />
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label className="label" htmlFor="signup-email">Email</label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--rq-muted)' }} />
                <input id="signup-email" type="email" className="input" placeholder="you@company.com" style={{ paddingLeft: 38 }} required />
              </div>
            </div>

            <div style={{ marginBottom: 8 }}>
              <label className="label" htmlFor="signup-password">Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--rq-muted)' }} />
                <input
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'}
                  className="input"
                  placeholder="Create a password"
                  style={{ paddingLeft: 38, paddingRight: 38 }}
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
              Create Account
            </button>
          </form>

          <div style={{ marginTop: 24, textAlign: 'center', fontSize: '0.85rem', color: 'var(--rq-text-secondary)' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: 'var(--rq-primary)', fontWeight: 600 }}>Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
