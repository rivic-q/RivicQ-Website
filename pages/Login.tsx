import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication
  };

  return (
    <div style={{
      minHeight: 'calc(100vh - 68px)', display: 'flex', alignItems: 'center',
      justifyContent: 'center', padding: '40px 24px',
      background: 'linear-gradient(135deg, var(--rq-bg) 0%, var(--rq-primary-dim) 100%)',
    }}>
      <div style={{ width: '100%', maxWidth: 420 }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Logo size="md" />
          </div>
        </div>

        {/* Card */}
        <div className="card" style={{ padding: 36 }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14, margin: '0 auto 14px',
              background: 'var(--rq-primary-dim)', color: 'var(--rq-primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Lock size={22} />
            </div>
            <h1 style={{ fontFamily: 'var(--rq-font-heading)', fontSize: '1.3rem', fontWeight: 700 }}>Welcome back</h1>
            <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.85rem', marginTop: 4 }}>Sign in to your RivicQ dashboard</p>
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
