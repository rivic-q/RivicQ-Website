import { Badge } from '../components/Badge';
import { Shield, Search, FileCode, Lock, AlertTriangle, CheckCircle, ArrowUpRight } from 'lucide-react';

function StatCard({ icon: Icon, label, value, color }: { icon: any; label: string; value: string; color: string }) {
  return (
    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <div style={{
        width: 44, height: 44, borderRadius: 12,
        background: `${color}12`, color,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <Icon size={20} />
      </div>
      <div>
        <div style={{ fontSize: '0.75rem', color: 'var(--rq-muted)', fontFamily: 'var(--rq-font-heading)', fontWeight: 500 }}>{label}</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--rq-font-heading)', letterSpacing: '-0.02em' }}>{value}</div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div style={{ padding: '80px 24px 60px' }}>
      <div className="page-container" style={{ maxWidth: 1000 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
          <div>
            <Badge variant="primary">Dashboard</Badge>
            <h1 style={{
              fontFamily: 'var(--rq-font-heading)', fontSize: '1.6rem', fontWeight: 700,
              marginTop: 10, letterSpacing: '-0.02em',
            }}>Encryption Posture Overview</h1>
            <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.88rem', marginTop: 4 }}>
              Real-time view of your cryptographic infrastructure.
            </p>
          </div>
          <button className="btn btn-primary">
            <Search size={16} /> Run New Scan
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 32 }}>
          <StatCard icon={Shield} label="Assets Scanned" value="1,247" color="var(--rq-primary)" />
          <StatCard icon={AlertTriangle} label="Critical Risks" value="3" color="#DC2626" />
          <StatCard icon={CheckCircle} label="PQ-Safe" value="892" color="var(--rq-success)" />
          <StatCard icon={Lock} label="HSM Keys" value="12" color="var(--rq-accent)" />
        </div>

        {/* Recent scans */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--rq-font-heading)', fontSize: '1.1rem', fontWeight: 700, marginBottom: 14 }}>Recent Scans</h2>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            {[
              { name: 'production-api-servers', status: 'Complete', assets: 342, critical: 1, date: '2 hours ago' },
              { name: 'ci-cd-pipeline', status: 'Complete', assets: 189, critical: 0, date: '6 hours ago' },
              { name: 'cloud-vpc-main', status: 'In Progress', assets: 87, critical: '-', date: 'Running...' },
              { name: 'mobile-app-backend', status: 'Complete', assets: 256, critical: 2, date: '1 day ago' },
            ].map((scan, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '14px 20px', borderBottom: i < 3 ? '1px solid var(--rq-border-light)' : 'none',
                fontSize: '0.85rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <FileCode size={16} style={{ color: 'var(--rq-muted)' }} />
                  <span style={{ fontFamily: 'var(--rq-font-mono)', fontSize: '0.82rem' }}>{scan.name}</span>
                </div>
                <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                  <span style={{ color: 'var(--rq-text-secondary)' }}>{scan.assets} assets</span>
                  <span style={{
                    padding: '2px 8px', borderRadius: 4, fontSize: '0.72rem', fontWeight: 600,
                    background: scan.critical === 0 ? 'rgba(5,150,105,0.1)' : scan.critical === '-' ? 'var(--rq-primary-dim)' : 'rgba(220,38,38,0.1)',
                    color: scan.critical === 0 ? 'var(--rq-success)' : scan.critical === '-' ? 'var(--rq-primary)' : '#DC2626',
                  }}>
                    {scan.critical === '-' ? 'Running' : `${scan.critical} critical`}
                  </span>
                  <span style={{ color: 'var(--rq-muted)', fontSize: '0.78rem' }}>{scan.date}</span>
                  <ArrowUpRight size={14} style={{ color: 'var(--rq-muted)', cursor: 'pointer' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div>
          <h2 style={{ fontFamily: 'var(--rq-font-heading)', fontSize: '1.1rem', fontWeight: 700, marginBottom: 14 }}>Quick Actions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {[
              { icon: Search, label: 'New CBOM Scan', desc: 'Discover cryptographic assets' },
              { icon: FileCode, label: 'Generate QBOM', desc: 'Export inventory report' },
              { icon: Shield, label: 'View Compliance', desc: 'DORA/NIS2 readiness' },
            ].map((action, i) => {
              const Icon = action.icon;
              return (
                <button key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px',
                  background: 'var(--rq-white)', border: '1px solid var(--rq-border)',
                  borderRadius: 12, cursor: 'pointer', textAlign: 'left',
                  fontFamily: 'inherit', fontSize: 'inherit', color: 'inherit',
                  transition: 'all 200ms',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--rq-primary)'; e.currentTarget.style.boxShadow = 'var(--rq-shadow-sm)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rq-border)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'var(--rq-primary-dim)', color: 'var(--rq-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{action.label}</div>
                    <div style={{ color: 'var(--rq-text-secondary)', fontSize: '0.75rem' }}>{action.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
