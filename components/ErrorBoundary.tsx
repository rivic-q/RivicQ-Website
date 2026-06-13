import { Component, ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; error?: Error; }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'var(--rq-bg)', color: 'var(--rq-text)', padding: 24, textAlign: 'center',
        }}>
          <div>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem', margin: '0 0 8px' }}>Something went wrong</h1>
            <p style={{ color: 'var(--rq-muted)', margin: '0 0 20px' }}>{this.state.error?.message}</p>
            <button onClick={() => { this.setState({ hasError: false }); window.location.hash = '#/'; }}
              style={{
                padding: '10px 24px',                 background: 'var(--rq-blue)', color: '#FFFFFF',
                border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer',
                fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.85rem',
              }}
            >Back to Home</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
