import { useState } from 'react';
import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { submitForm, validateField, FormErrors } from '../services/formService';

export default function BetaSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    data.subject = 'Encryption Beta Signup';

    const allTouched: Record<string, boolean> = {};
    for (const key of Object.keys(data)) allTouched[key] = true;
    setTouched(allTouched);

    const result = await submitForm(data);
    if (result.ok) {
      setSubmitted(true);
      setError('');
      setFieldErrors({});
    } else {
      setError(result.message);
      if (result.errors) setFieldErrors(result.errors);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '60px 24px' }}>
      <SectionHeader
        title="Beta Signup"
        subtitle="Early access to CloudHSM (EaaS), QBOM Analyzer, SDK preview, and developer encryption tools."
        badge={<Badge variant="encrypt">Encryption Beta</Badge>}
      />
      {submitted ? (
        <div style={{ border: '1px solid var(--rq-border)', borderRadius: 10, padding: 32, textAlign: 'center' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--rq-encrypt)" strokeWidth="2" style={{ marginBottom: 12 }}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, margin: '0 0 6px' }}>You're In</h3>
          <p style={{ color: 'var(--rq-muted)', fontSize: '0.9rem', margin: 0 }}>We'll send encryption beta access details within 48 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--rq-muted)', marginBottom: 4 }}>Name *</label>
            <input name="name" required style={{ ...inputStyle, borderColor: touched.name && fieldErrors.name ? 'var(--rq-amber)' : 'var(--rq-border)' }} onBlur={handleBlur} />
            {touched.name && fieldErrors.name && <div style={{ color: 'var(--rq-amber)', fontSize: '0.75rem', marginTop: 2 }}>{fieldErrors.name}</div>}
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--rq-muted)', marginBottom: 4 }}>Email *</label>
            <input name="email" type="email" required style={{ ...inputStyle, borderColor: touched.email && fieldErrors.email ? 'var(--rq-amber)' : 'var(--rq-border)' }} onBlur={handleBlur} />
            {touched.email && fieldErrors.email && <div style={{ color: 'var(--rq-amber)', fontSize: '0.75rem', marginTop: 2 }}>{fieldErrors.email}</div>}
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--rq-muted)', marginBottom: 4 }}>Interest</label>
            <select name="interest" style={{ ...inputStyle, cursor: 'pointer' }}>
              <option value="" style={{ background: 'var(--rq-bg)' }}>Select...</option>
              <option value="cloudhsm" style={{ background: 'var(--rq-bg)' }}>CloudHSM / EaaS</option>
              <option value="sdk" style={{ background: 'var(--rq-bg)' }}>Encryption SDK</option>
              <option value="qbom" style={{ background: 'var(--rq-bg)' }}>QBOM Analyzer</option>
              <option value="cspm" style={{ background: 'var(--rq-bg)' }}>CSPM Scanner</option>
              <option value="other" style={{ background: 'var(--rq-bg)' }}>Other</option>
            </select>
          </div>
          {error && <div style={{ color: 'var(--rq-amber)', fontSize: '0.85rem' }}>{error}</div>}
          <button type="submit" style={{
            padding: '12px 24px', background: 'var(--rq-blue)', color: '#FFFFFF',
            border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer',
            fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem', marginTop: 8,
          }}>Join Encryption Beta</button>
        </form>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid var(--rq-border)',
  background: 'var(--rq-code-bg)', color: 'var(--rq-text)', fontSize: '0.9rem',
  fontFamily: 'inherit', outline: 'none',
};
