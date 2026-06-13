import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{
      minHeight: 'calc(100vh - 68px)', display: 'flex', alignItems: 'center',
      justifyContent: 'center', padding: 24, textAlign: 'center',
    }}>
      <div>
        <div style={{
          width: 80, height: 80, borderRadius: 24,
          background: 'var(--rq-primary-dim)', color: 'var(--rq-primary)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px',
        }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <div style={{
          fontFamily: 'var(--rq-font-heading)', fontSize: '4rem', fontWeight: 700,
          color: 'var(--rq-primary)', lineHeight: 1, marginBottom: 8, letterSpacing: '-0.03em',
        }}>404</div>
        <h1 style={{
          fontFamily: 'var(--rq-font-heading)', fontSize: '1.4rem', fontWeight: 700,
          margin: '0 0 8px',
        }}>Page Not Found</h1>
        <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.9rem', margin: '0 0 28px' }}>
          This cryptographic asset could not be located. Let's get you back to safety.
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={16} /> Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="btn btn-secondary">
            <ArrowLeft size={16} /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
