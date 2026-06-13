import { useState } from 'react';
import { Badge } from '../components/Badge';
import { Bell, Shield, Globe, Palette, Sun, Moon } from 'lucide-react';

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      style={{
        width: 40, height: 22, borderRadius: 11, border: 'none', cursor: 'pointer',
        background: checked ? 'var(--rq-primary)' : 'var(--rq-border)',
        position: 'relative', transition: 'background 200ms', padding: 0, flexShrink: 0,
      }}
    >
      <div style={{
        width: 18, height: 18, borderRadius: '50%', background: '#FFFFFF',
        position: 'absolute', top: 2, transition: 'transform 200ms',
        transform: checked ? 'translateX(20px)' : 'translateX(2px)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
      }} />
    </button>
  );
}

function SettingRow({ icon: Icon, label, description, children }: { icon: any; label: string; description?: string; children: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '14px 0', gap: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'var(--rq-primary-dim)', color: 'var(--rq-primary)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <Icon size={16} />
        </div>
        <div>
          <div style={{ fontWeight: 500, fontSize: '0.85rem' }}>{label}</div>
          {description && <div style={{ fontSize: '0.78rem', color: 'var(--rq-text-secondary)' }}>{description}</div>}
        </div>
      </div>
      {children}
    </div>
  );
}

function SettingsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card" style={{ padding: '4px 20px', marginBottom: 16 }}>
      <div style={{
        padding: '12px 0', borderBottom: '1px solid var(--rq-border-light)',
        fontFamily: 'var(--rq-font-heading)', fontSize: '0.75rem', fontWeight: 600,
        color: 'var(--rq-muted)', textTransform: 'uppercase', letterSpacing: '0.05em',
      }}>{title}</div>
      {children}
    </div>
  );
}

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [emailDigest, setEmailDigest] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ padding: '80px 24px 60px' }}>
      <div className="page-container" style={{ maxWidth: 700 }}>
        <div style={{ marginBottom: 36 }}>
          <Badge variant="primary">Settings</Badge>
          <h1 style={{
            fontFamily: 'var(--rq-font-heading)', fontSize: '1.6rem', fontWeight: 700,
            marginTop: 10, letterSpacing: '-0.02em',
          }}>Preferences</h1>
        </div>

        <SettingsSection title="Notifications">
          <SettingRow icon={Bell} label="Push Notifications" description="Receive alerts for scan results">
            <Toggle checked={notifications} onChange={setNotifications} />
          </SettingRow>
          <SettingRow icon={Bell} label="Email Digest" description="Weekly summary of your encryption posture">
            <Toggle checked={emailDigest} onChange={setEmailDigest} />
          </SettingRow>
        </SettingsSection>

        <SettingsSection title="Appearance">
          <SettingRow icon={darkMode ? Moon : Sun} label="Theme" description="Toggle dark mode">
            <Toggle checked={darkMode} onChange={setDarkMode} />
          </SettingRow>
          <SettingRow icon={Globe} label="Language" description="Select your preferred language">
            <select className="input" style={{ width: 'auto', padding: '6px 12px', fontSize: '0.82rem' }}>
              <option>English</option>
              <option>German</option>
            </select>
          </SettingRow>
        </SettingsSection>

        <SettingsSection title="Security">
          <SettingRow icon={Shield} label="Session Timeout" description="Auto-logout after inactivity">
            <select className="input" style={{ width: 'auto', padding: '6px 12px', fontSize: '0.82rem' }}>
              <option>15 minutes</option>
              <option>30 minutes</option>
              <option>1 hour</option>
            </select>
          </SettingRow>
          <SettingRow icon={Palette} label="API Access" description="Manage API tokens and keys">
            <button className="btn btn-ghost btn-sm">Manage</button>
          </SettingRow>
        </SettingsSection>
      </div>
    </div>
  );
}
