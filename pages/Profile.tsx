import { Badge } from '../components/Badge';
import { User, Mail, Building, MapPin, Shield, Edit3 } from 'lucide-react';

export default function Profile() {
  return (
    <div style={{ padding: '80px 24px 60px' }}>
      <div className="page-container" style={{ maxWidth: 800 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 36 }}>
          <div>
            <Badge variant="primary">Profile</Badge>
            <h1 style={{
              fontFamily: 'var(--rq-font-heading)', fontSize: '1.6rem', fontWeight: 700,
              marginTop: 10, letterSpacing: '-0.02em',
            }}>Account Settings</h1>
          </div>
          <button className="btn btn-secondary btn-sm">
            <Edit3 size={14} /> Edit Profile
          </button>
        </div>

        {/* Profile card */}
        <div className="card" style={{ padding: 32, marginBottom: 24 }}>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{
              width: 72, height: 72, borderRadius: 20,
              background: 'linear-gradient(135deg, var(--rq-primary), var(--rq-accent))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--rq-font-heading)', fontWeight: 700, fontSize: '1.4rem', color: '#FFFFFF',
            }}>JD</div>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontFamily: 'var(--rq-font-heading)', fontSize: '1.2rem', fontWeight: 700 }}>John Doe</h2>
              <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.85rem', margin: '2px 0' }}>Security Engineer</p>
              <div style={{ display: 'flex', gap: 16, marginTop: 8, fontSize: '0.82rem', color: 'var(--rq-muted)', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Mail size={14} /> john@company.com</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Building size={14} /> RivicQ GmbH</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><MapPin size={14} /> Berlin, Germany</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 24 }}>
          {[
            { label: 'Full Name', value: 'John Doe' },
            { label: 'Email', value: 'john@company.com' },
            { label: 'Company', value: 'RivicQ GmbH' },
            { label: 'Role', value: 'Security Engineer' },
            { label: 'Location', value: 'Berlin, Germany' },
            { label: 'Member Since', value: 'January 2025' },
          ].map(field => (
            <div key={field.label} className="card" style={{ padding: 16 }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--rq-muted)', fontFamily: 'var(--rq-font-heading)', fontWeight: 500, marginBottom: 4 }}>{field.label}</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>{field.value}</div>
            </div>
          ))}
        </div>

        {/* Security */}
        <h2 style={{ fontFamily: 'var(--rq-font-heading)', fontSize: '1.1rem', fontWeight: 700, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Shield size={18} /> Security
        </h2>
        <div className="card" style={{ padding: 20 }}>
          {[
            { label: 'Two-Factor Authentication', status: 'Disabled', action: 'Enable' },
            { label: 'API Keys', status: '2 active', action: 'Manage' },
            { label: 'Sessions', status: '1 active session', action: 'View' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '10px 0', borderBottom: i < 2 ? '1px solid var(--rq-border-light)' : 'none',
            }}>
              <div>
                <div style={{ fontWeight: 500, fontSize: '0.85rem' }}>{item.label}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--rq-text-secondary)' }}>{item.status}</div>
              </div>
              <button className="btn btn-ghost btn-sm">{item.action}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
