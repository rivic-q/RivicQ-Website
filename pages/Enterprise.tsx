import { useState, useEffect } from 'react';
import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { submitForm, validateField, FormErrors } from '../services/formService';
import QuantumCircuit from '../components/QuantumCircuit';
import AnimatedBackground from '../components/AnimatedBackground';
import { products } from '../data/products';

const productOptions = [
  { value: '', label: 'General Inquiry' },
  ...products.map(p => ({ value: p.name, label: p.name })),
  { value: 'Investor Relations', label: 'Investor Relations (Pre-Seed / Seed)' },
  { value: 'Partnership', label: 'Partnership Opportunity' },
  { value: 'Pilot Program', label: 'Free CBOM+QBOM Pilot' },
];

const subjectLabels: Record<string, string> = {
  '': 'Enterprise Inquiry',
  'Investor Relations': 'Investor Interest — Pre-Seed / Seed Round',
  'Partnership': 'Partnership Inquiry',
  'Pilot Program': 'CBOM+QBOM Pilot Request',
};

const placeholderText: Record<string, string> = {
  '': 'Tell us about your encryption infrastructure...',
  'CBOM Scanner': 'How many repos, which languages, CI/CD platform?',
  'QBOM Analyzer': 'What encryption assets do you need Q-scored?',
  'CloudHSM / vHSM': 'On-prem or cloud? Expected key volume? Compliance requirements?',
  'RQSP Protocol': 'Use case for hybrid PQC transport?',
  'Developer SDK': 'Which language bindings? Target integration?',
  'Enterprise Encryption Suite': 'Scope, timeline, compliance framework?',
  'Investor Relations': 'Your investor profile and how you heard about RivicQ.',
  'Partnership': 'Partner type, region, and target market.',
  'Pilot Program': 'Number of assets to scan, target environment.',
};

export default function Enterprise() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [product, setProduct] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
    const prefill = params.get('product') || '';
    if (prefill) setProduct(prefill);
  }, []);

  const subject = subjectLabels[product] || `Enterprise Inquiry — ${product}`;

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setFieldErrors(prev => {
      const next = { ...prev };
      if (err) next[name] = err;
      else delete next[name];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    data.subject = subject;
    data.product = product || 'General';

    const allTouched: Record<string, boolean> = {};
    for (const key of Object.keys(data)) allTouched[key] = true;
    setTouched(allTouched);

    const result = await submitForm(data);
    if (result.ok) {
      setSubmitted(true);
      setError('');
      setFieldErrors({});
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', { event_category: 'lead', event_label: product || 'general' });
      }
    } else {
      setError(result.message);
      if (result.errors) setFieldErrors(result.errors);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <AnimatedBackground variant="mesh" intensity="medium" gradient={['#2563EB', '#3B82F6', '#60A5FA']} />
      <QuantumCircuit complexity={4} />
      <div style={{ maxWidth: 650, margin: '0 auto', padding: '60px 24px', position: 'relative', zIndex: 1 }}>
        {submitted ? (
          <div style={{
            border: '1px solid var(--rq-border)', borderRadius: 10, padding: 40, textAlign: 'center',
            animation: 'fadeInUp 0.5s ease-out',
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--rq-encrypt)" strokeWidth="2" style={{ marginBottom: 12 }}>
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, margin: '0 0 6px', fontSize: '1.1rem' }}>Thank You</h3>
            <p style={{ color: 'var(--rq-muted)', fontSize: '0.9rem', margin: '0 0 4px', lineHeight: 1.6 }}>
              {product === 'Investor Relations'
                ? 'Our team will reach out with investor materials within 24 hours.'
                : product === 'Pilot Program'
                  ? 'We\'ll set up your free CBOM+QBOM pilot within 48 hours.'
                  : 'We\'ll respond within 24 hours with next steps.'}
            </p>
          </div>
        ) : (
          <>
            <SectionHeader
              title={product === 'Investor Relations' ? 'Investor Relations' : 'Talk to Us'}
              subtitle={
                product === 'Investor Relations'
                  ? 'RivicQ is closing its seed round. Berlin-founded deep tech — PQC encryption, FIPS 140-3 HSM, QBOM/CBOM. ETSI delegate, BSI congress, EURA AG LOI.'
                  : product === 'Pilot Program'
                    ? 'Free CBOM+QBOM encryption audit for government and critical infrastructure. We\'ll Q-score your entire encryption stack with prioritized PQC migration roadmaps.'
                    : 'Free CBOM+QBOM encryption audit for government and critical infrastructure. No commitment, no sales pitch. We\'ll Q-score your entire encryption stack.'
              }
              badge={
                product === 'Investor Relations'
                  ? <Badge variant="amber">Pre-Seed / Seed</Badge>
                  : <Badge variant="encrypt">Enterprise Encryption</Badge>
              }
            />

            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--rq-muted)', marginBottom: 4 }}>I'm interested in *</label>
                <select
                  name="product_interest"
                  value={product}
                  onChange={e => setProduct(e.target.value)}
                  required
                  style={inputStyle}
                >
                  {productOptions.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--rq-muted)', marginBottom: 4 }}>Name *</label>
                <input name="name" required style={{ ...inputStyle, borderColor: touched.name && fieldErrors.name ? 'var(--rq-amber)' : 'var(--rq-border)' }} onBlur={handleBlur} />
                {touched.name && fieldErrors.name && <div style={{ color: 'var(--rq-amber)', fontSize: '0.75rem', marginTop: 2 }}>{fieldErrors.name}</div>}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--rq-muted)', marginBottom: 4 }}>Email *</label>
                  <input name="email" type="email" required style={{ ...inputStyle, borderColor: touched.email && fieldErrors.email ? 'var(--rq-amber)' : 'var(--rq-border)' }} onBlur={handleBlur} />
                  {touched.email && fieldErrors.email && <div style={{ color: 'var(--rq-amber)', fontSize: '0.75rem', marginTop: 2 }}>{fieldErrors.email}</div>}
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--rq-muted)', marginBottom: 4 }}>Company</label>
                  <input name="company" style={inputStyle} onBlur={handleBlur} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--rq-muted)', marginBottom: 4 }}>Message</label>
                <textarea name="message" rows={4} style={{ ...inputStyle, resize: 'vertical' }} placeholder={placeholderText[product] || placeholderText['']} onBlur={handleBlur} />
              </div>
              {error && <div style={{ color: 'var(--rq-amber)', fontSize: '0.85rem' }}>{error}</div>}
              <button type="submit" style={{
                padding: '12px 24px', background: product === 'Investor Relations' ? 'var(--rq-amber)' : 'var(--rq-blue)',
                color: '#FFFFFF', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer',
                fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem', marginTop: 8,
              }}>
                {product === 'Investor Relations'
                  ? 'Request Investor Materials'
                  : product === 'Pilot Program'
                    ? 'Start Free CBOM+QBOM Pilot'
                    : 'Submit Inquiry'}
              </button>
            </form>

            <div style={{ marginTop: 20, padding: '12px 16px', background: 'var(--rq-code-bg)', borderRadius: 8, border: '1px solid var(--rq-border)', fontSize: '0.8rem', color: 'var(--rq-muted)' }}>
              {product === 'Investor Relations'
                ? 'Confidential. We\'ll share pitch deck, financial model, and market analysis upon NDA.'
                : 'No commitment, no sales pitch. Free CBOM+QBOM pilot includes full encryption inventory Q-score report.'}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid var(--rq-border)',
  background: 'var(--rq-code-bg)', color: 'var(--rq-text)', fontSize: '0.9rem',
  fontFamily: 'inherit', outline: 'none',
};
