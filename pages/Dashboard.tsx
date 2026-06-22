import { Badge } from '../components/Badge';
import { Shield, Search, FileCode, Lock, AlertTriangle, CheckCircle, ArrowRight, Database, RefreshCw } from 'lucide-react';

export default function CSPMDashboard() {
  return (
    <div style={{ padding: '80px 24px 60px' }}>
      <div className="page-container" style={{ maxWidth: 1100 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
          <div>
            <Badge variant="primary">CSPM Dashboard</Badge>
            <h1 style={{ fontFamily: 'var(--rq-font-heading)', fontSize: '1.6rem', fontWeight: 700, marginTop: 10, letterSpacing: '-0.02em' }}>Cryptographic Security Posture</h1>
            <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.88rem', marginTop: 4 }}>Scan, assess, and migrate your cryptographic assets to post-quantum security.</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-secondary btn-sm"><RefreshCw size={14} /> Refresh</button>
            <button className="btn btn-primary btn-sm"><Search size={14} /> New Scan</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, marginBottom: 32 }} className="md:grid-cols-4">
          {[
            { icon: Database, label: 'Assets Discovered', value: '1,247', color: 'var(--rq-primary)' },
            { icon: AlertTriangle, label: 'Critical Risks', value: '3', color: '#DC2626' },
            { icon: CheckCircle, label: 'PQ-Migrated', value: '892', color: 'var(--rq-success)' },
            { icon: Lock, label: 'Pending Migration', value: '355', color: 'var(--rq-amber)' },
          ].map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="card" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `${color}12`, color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--rq-muted)', fontFamily: 'var(--rq-font-heading)', fontWeight: 500 }}>{label}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--rq-font-heading)', letterSpacing: '-0.02em' }}>{value}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
          <div>
            <h2 style={{ fontFamily: 'var(--rq-font-heading)', fontSize: '1.1rem', fontWeight: 700, marginBottom: 14 }}>Recent CSPM Scans</h2>
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              {[
                { name: 'production-api-servers', status: 'Complete', assets: 342, critical: 1, date: '2 hours ago', score: 'A-' },
                { name: 'ci-cd-pipeline', status: 'Complete', assets: 189, critical: 0, date: '6 hours ago', score: 'A+' },
                { name: 'cloud-vpc-main', status: 'Scanning', assets: 87, critical: '-', date: 'Running...', score: '-' },
                { name: 'mobile-app-backend', status: 'Complete', assets: 256, critical: 2, date: '1 day ago', score: 'B+' },
              ].map((scan, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px', borderBottom: i < 3 ? '1px solid var(--rq-border-light)' : 'none', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <FileCode size={16} style={{ color: 'var(--rq-muted)' }} />
                    <span style={{ fontFamily: 'var(--rq-font-mono)', fontSize: '0.82rem' }}>{scan.name}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <span style={{ color: 'var(--rq-text-secondary)' }}>{scan.assets} assets</span>
                    <span style={{ padding: '2px 8px', borderRadius: 4, fontSize: '0.72rem', fontWeight: 600,
                      background: scan.critical === 0 ? 'rgba(5,150,105,0.1)' : scan.critical === '-' ? 'var(--rq-primary-dim)' : 'rgba(220,38,38,0.1)',
                      color: scan.critical === 0 ? 'var(--rq-success)' : scan.critical === '-' ? 'var(--rq-primary)' : '#DC2626',
                    }}>{scan.critical === '-' ? 'Scanning' : `${scan.critical} critical`}</span>
                    <span style={{ padding: '2px 8px', borderRadius: 4, fontSize: '0.72rem', fontWeight: 600, background: 'var(--rq-surface)', color: 'var(--rq-text)' }}>{scan.score}</span>
                    <span style={{ color: 'var(--rq-muted)', fontSize: '0.78rem' }}>{scan.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--rq-font-heading)', fontSize: '1.1rem', fontWeight: 700, marginBottom: 14 }}>Migration Status</h2>
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              {[
                { algorithm: 'RSA-2048', status: 'Pending', target: 'ML-KEM-768', priority: 'High', deadline: 'Q3 2026' },
                { algorithm: 'ECDH P-256', status: 'In Progress', target: 'ML-KEM-768', priority: 'High', deadline: 'Q2 2026' },
                { algorithm: 'ECDSA P-384', status: 'Pending', target: 'ML-DSA-65', priority: 'Medium', deadline: 'Q4 2026' },
                { algorithm: 'AES-256-GCM', status: 'Compliant', target: 'AES-256-GCM', priority: 'None', deadline: '-' },
              ].map((m, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px', borderBottom: i < 3 ? '1px solid var(--rq-border-light)' : 'none', fontSize: '0.85rem' }}>
                  <div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem', fontWeight: 600 }}>{m.algorithm}</div>
                    <div style={{ color: 'var(--rq-muted)', fontSize: '0.72rem' }}>→ {m.target}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <Badge variant={m.status === 'Compliant' ? 'blue' : m.status === 'In Progress' ? 'encrypt' : 'amber'}>{m.status}</Badge>
                    <span style={{ color: 'var(--rq-muted)', fontSize: '0.78rem' }}>{m.deadline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 style={{ fontFamily: 'var(--rq-font-heading)', fontSize: '1.1rem', fontWeight: 700, marginBottom: 14 }}>Quick Actions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: 12 }} className="sm:grid-cols-4">
            {[
              { icon: Search, label: 'Run CSPM Scan', desc: 'Discover cryptographic assets across repos, containers, and cloud VPCs', color: 'var(--rq-primary)' },
              { icon: FileCode, label: 'Generate QBOM Report', desc: 'Export full inventory with Q-score risk assessment', color: 'var(--rq-accent)' },
              { icon: Shield, label: 'Migration Planner', desc: 'View prioritized PQC migration roadmap by risk', color: 'var(--rq-amber)' },
              { icon: Lock, label: 'Compliance Check', desc: 'DORA/NIS2 readiness assessment and gap analysis', color: 'var(--rq-blue)' },
            ].map(({ icon: Icon, label, desc, color }, i) => (
              <button key={i} style={{
                display: 'flex', flexDirection: 'column', gap: 8, padding: '20px',
                background: 'var(--rq-white)', border: '1px solid var(--rq-border)',
                borderRadius: 12, cursor: 'pointer', textAlign: 'left',
                fontFamily: 'inherit', fontSize: 'inherit', color: 'inherit',
                transition: 'all 200ms',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = 'var(--rq-shadow-sm)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rq-border)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${color}12`, color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={16} />
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{label}</div>
                </div>
                <div style={{ color: 'var(--rq-text-secondary)', fontSize: '0.78rem', lineHeight: 1.5 }}>{desc}</div>
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 40, padding: '16px 20px', background: 'var(--rq-encrypt-dim)', borderRadius: 10, border: '1px solid rgba(37,99,235,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.85rem', fontFamily: 'var(--rq-font-heading)' }}>Free CSPM+QBOM Pilot Available</div>
            <div style={{ color: 'var(--rq-muted)', fontSize: '0.8rem' }}>Government and critical infrastructure — get a full encryption inventory Q-score report.</div>
          </div>
          <a href="/enterprise" className="btn btn-primary btn-sm">Start Pilot <ArrowRight size={14} /></a>
        </div>
      </div>
    </div>
  );
}
