import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Cookie } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center shrink-0">
          <Cookie size={24} className="text-sky-500" />
        </div>
        <div className="flex-grow text-center md:text-left">
          <h3 className="font-bold text-slate-900 mb-1">We value your privacy</h3>
          <p className="text-sm text-slate-600">
            We use cookies to enhance your browsing experience and analyze site traffic. 
            By clicking "Accept", you consent to our use of cookies. 
            <Link to="/cookie-policy" className="text-sky-500 hover:underline ml-1">Learn more</Link>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-6 py-2 bg-sky-500 text-white text-sm font-bold rounded-xl hover:bg-sky-600 transition-colors"
          >
            Accept
          </button>
        </div>
        <button
          onClick={decline}
          className="absolute top-2 right-2 p-2 text-slate-400 hover:text-slate-600 transition-colors md:relative md:top-auto md:right-auto"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
