import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { Mail, ArrowLeft, CheckCircle, Info } from 'lucide-react';

export default function ForgotPassword() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    // TODO: Implement password reset
  };

  return (
    <div style={{
      minHeight: 'calc(100vh - 68px)', display: 'flex', alignItems: 'center',
      justifyContent: 'center', padding: '40px 24px',
      background: 'linear-gradient(135deg, var(--rq-bg) 0%, var(--rq-primary-dim) 100%)',
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
            <span>Password reset backend coming soon. Demo mode — no email will be sent.</span>
          </div>

          {!sent ? (
            <>
              <div style={{ textAlign: 'center', marginBottom: 28 }}>
                <h1 style={{ fontFamily: 'var(--rq-font-heading)', fontSize: '1.3rem', fontWeight: 700 }}>Reset Password</h1>
                <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.85rem', marginTop: 4 }}>
                  Enter your email and we'll send you a reset link.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 20 }}>
                  <label className="label" htmlFor="reset-email">Email</label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--rq-muted)' }} />
                    <input
                      id="reset-email"
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

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  Send Reset Link
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14, margin: '0 auto 14px',
                background: 'rgba(5,150,105,0.1)', color: 'var(--rq-success)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <CheckCircle size={22} />
              </div>
              <h1 style={{ fontFamily: 'var(--rq-font-heading)', fontSize: '1.3rem', fontWeight: 700 }}>Check Your Email</h1>
              <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.85rem', marginTop: 4, lineHeight: 1.6 }}>
                We've sent a password reset link to <strong>{email}</strong>
              </p>
            </div>
          )}

          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <Link to="/login" style={{ color: 'var(--rq-primary)', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <ArrowLeft size={14} /> Back to sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
