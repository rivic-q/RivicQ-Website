import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft, Shield, Lock } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <div className="relative mb-8">
        <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center">
          <Shield size={48} className="text-slate-300" />
        </div>
        <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
          <Lock size={20} className="text-white" />
        </div>
      </div>
      
      <div className="mb-4">
        <span className="text-[80px] md:text-[120px] font-bold text-slate-100 leading-none">404</span>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
        Page Not Found
      </h1>
      
      <p className="text-slate-500 max-w-md mb-8 leading-relaxed">
        The cryptographic path you're looking for doesn't exist or may have been migrated. 
        Let's get you back to a secure location.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          to="/"
          className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-xl"
        >
          <Home size={18} />
          Return Home
        </Link>
        
        <Link 
          to="/products"
          className="px-8 py-4 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:border-slate-900 transition-all flex items-center justify-center gap-2"
        >
          <Search size={18} />
          Explore Products
        </Link>
      </div>
      
      <div className="mt-16 pt-8 border-t border-slate-100">
        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-4">
          Quick Links
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link to="/platform" className="text-slate-500 hover:text-blue-600 transition-colors">Platform</Link>
          <Link to="/pricing" className="text-slate-500 hover:text-blue-600 transition-colors">Pricing</Link>
          <Link to="/team" className="text-slate-500 hover:text-blue-600 transition-colors">Team</Link>
          <Link to="/resources" className="text-slate-500 hover:text-blue-600 transition-colors">Resources</Link>
          <Link to="/compliance" className="text-slate-500 hover:text-blue-600 transition-colors">Compliance</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
