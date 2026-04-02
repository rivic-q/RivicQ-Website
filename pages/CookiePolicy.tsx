import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Cookie, ArrowLeft, CheckCircle } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 mb-6 text-sm">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-4 bg-sky-100 text-sky-600 rounded-2xl">
            <Cookie size={32} />
          </div>
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Legal</span>
        </div>
        <h1 className="text-5xl font-bold mb-4 tracking-tight text-slate-900">
          Cookie Policy
        </h1>
        <p className="text-slate-500">Last updated: April 2026</p>
      </header>

      <section className="mb-12">
        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
        </p>
      </section>

      <section className="mb-12">
        <h2>2. How We Use Cookies</h2>
        <div className="not-prose space-y-4">
          {[
            { title: 'Essential Cookies', desc: 'Required for the website to function properly. These cannot be disabled.' },
            { title: 'Analytics Cookies', desc: 'Help us understand how visitors interact with our website through tools like Google Analytics.' },
            { title: 'Preference Cookies', desc: 'Remember your settings and preferences for future visits.' },
            { title: 'Marketing Cookies', desc: 'Used to deliver relevant advertisements and track campaign effectiveness.' },
          ].map((cookie, i) => (
            <div key={i} className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl">
              <CheckCircle size={20} className="text-sky-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{cookie.title}</h3>
                <p className="text-slate-600 text-sm">{cookie.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2>3. Third-Party Cookies</h2>
        <p>
          Some cookies are placed by third-party services that appear on our pages, such as analytics providers and social media platforms. We use:
        </p>
        <ul>
          <li><strong>Google Analytics</strong> - For website traffic analysis</li>
          <li><strong>Hotjar</strong> - For user behavior analytics</li>
          <li><strong>LinkedIn</strong> - For marketing and analytics</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2>4. Managing Your Preferences</h2>
        <p>
          You can manage your cookie preferences at any time by:
        </p>
        <ul>
          <li>Using our cookie consent banner when you first visit</li>
          <li>Adjusting your browser settings to block or delete cookies</li>
          <li>Contacting us at <a href="mailto:privacy@rivicq.de">privacy@rivicq.de</a></li>
        </ul>
      </section>

      <section className="mb-12">
        <h2>5. Contact Us</h2>
        <p>
          If you have questions about our use of cookies, please contact us:
        </p>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mt-4">
          <p className="text-slate-700">
            <strong>RivicQ Technologies GmbH</strong><br />
            Berlin, Germany<br />
            Email: <a href="mailto:privacy@rivicq.de" className="text-sky-500">privacy@rivicq.de</a>
          </p>
        </div>
      </section>

      <div className="flex items-center gap-3 p-6 bg-sky-50 border border-sky-200 rounded-2xl">
        <Shield size={24} className="text-sky-500 shrink-0" />
        <p className="text-sky-700 text-sm">
          We're committed to transparency about how we use cookies. Review this policy regularly for updates.
        </p>
      </div>

      <footer className="mt-16 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        RivicQ Technologies • Berlin • Privacy & Compliance
      </footer>
    </article>
  );
};

export default CookiePolicy;
