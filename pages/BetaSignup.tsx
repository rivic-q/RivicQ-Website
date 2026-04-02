import React, { useState } from 'react';
import Layout from '../components/Layout';

const BetaSignup: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    companySize: '',
    useCase: '',
    timeline: '',
    newsletter: true,
    privacy: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!formData.privacy) {
      setError('Please accept the privacy policy to continue.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'beta-signup',
          message: `Beta Signup: ${formData.useCase}\n\nTimeline: ${formData.timeline}`
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <div className="min-h-[80vh] flex items-center justify-center px-4">
          <div
            className="text-center max-w-md"
          >
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">You're on the list!</h1>
            <p className="text-gray-400 mb-6">
              Thanks for signing up for the RivicQ Beta. We'll be in touch soon with access details.
            </p>
            <a href="/" className="text-primary hover:text-primary/80 transition-colors">
              Return to Home
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-[80vh] py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div>
            <span className="text-primary font-mono text-sm tracking-wider">BETA PROGRAM</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Join the RivicQ Beta
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              Get early access to our quantum-resistant security platform. 
              Limited spots available for organizations ready to lead the post-quantum transition.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-dark-200 border border-dark-300 rounded-2xl p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-100 border border-dark-300 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Pratik"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-100 border border-dark-300 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Rughe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Work Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-dark-100 border border-dark-300 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="pratik@company.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-100 border border-dark-300 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Role</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-100 border border-dark-300 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="CISO, CTO, Security Lead..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Company Size</label>
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                required
                className="w-full bg-dark-100 border border-dark-300 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select company size</option>
                <option value="1-50">1-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-1000">201-1000 employees</option>
                <option value="1001-5000">1001-5000 employees</option>
                <option value="5000+">5000+ employees</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Primary Use Case
              </label>
              <textarea
                name="useCase"
                value={formData.useCase}
                onChange={handleChange}
                required
                rows={3}
                className="w-full bg-dark-100 border border-dark-300 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Describe your security challenges and what you're hoping to solve with RivicQ..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Implementation Timeline
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                className="w-full bg-dark-100 border border-dark-300 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select timeline</option>
                <option value="immediate">Immediate (within 1 month)</option>
                <option value="short">Short-term (1-3 months)</option>
                <option value="medium">Medium-term (3-6 months)</option>
                <option value="long">Planning (6+ months)</option>
                <option value="exploring">Just exploring</option>
              </select>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="newsletter"
                id="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-dark-300 bg-dark-100 text-primary focus:ring-primary"
              />
              <label htmlFor="newsletter" className="text-sm text-gray-400">
                Keep me updated with RivicQ news and quantum security insights
              </label>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="privacy"
                id="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-dark-300 bg-dark-100 text-primary focus:ring-primary"
              />
              <label htmlFor="privacy" className="text-sm text-gray-400">
                I agree to the <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> and 
                consent to RivicQ processing my data for the beta program *
              </label>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg px-4 py-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Request Beta Access'
              )}
            </button>
          </form>

          <div
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-dark-200/50 border border-dark-300 rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Secure Access</h3>
              <p className="text-gray-400 text-sm">End-to-end encrypted communications and data handling</p>
            </div>
            <div className="bg-dark-200/50 border border-dark-300 rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Early Features</h3>
              <p className="text-gray-400 text-sm">Be first to access CBOM scanning, PQC compliance tools, and AI agents</p>
            </div>
            <div className="bg-dark-200/50 border border-dark-300 rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Direct Support</h3>
              <p className="text-gray-400 text-sm">Priority access to our team for feedback and implementation help</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BetaSignup;
