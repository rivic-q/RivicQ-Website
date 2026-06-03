import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  handleReload = (): void => {
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-16">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-8">
            <AlertTriangle size={36} className="text-red-500" />
          </div>
          
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-4">
            Something Went Wrong
          </h1>
          
          <p className="text-slate-500 max-w-lg mb-8 leading-relaxed">
            We've encountered an unexpected error. Our team has been notified and is working on a fix.
          </p>

          {process.env.NODE_ENV === 'development' && this.state.error && (
            <div className="w-full max-w-2xl p-6 bg-slate-900 rounded-2xl text-left mb-8 overflow-auto">
              <p className="text-red-400 font-mono text-xs mb-2">{this.state.error.toString()}</p>
              {this.state.errorInfo && (
                <pre className="text-slate-400 font-mono text-[10px] overflow-x-auto">
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={this.handleReload}
              className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              <RefreshCw size={18} />
              Reload Page
            </button>
            
            <Link
              to="/"
              className="px-8 py-4 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:border-slate-900 transition-all flex items-center justify-center gap-2"
            >
              <Home size={18} />
              Go Home
            </Link>
          </div>

          <p className="mt-8 text-xs text-slate-400">
            If this problem persists, please contact us at{' '}
            <a href="mailto:support@rivicq.de" className="text-blue-600 hover:underline">
              support@rivicq.de
            </a>
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
