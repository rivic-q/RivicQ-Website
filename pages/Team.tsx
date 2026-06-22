import { Badge } from '../components/Badge';
import { founder, foundingTeam, advisors } from '../data/team';
import { MapPin } from 'lucide-react';

function Avatar({ src, initials, size = 44, rounded = 12 }: { src?: string; initials: string; size?: number; rounded?: number }) {
  if (src) {
    return (
      <img
        src={src}
        alt={initials}
        style={{
          width: size, height: size, borderRadius: rounded,
          objectFit: 'cover', flexShrink: 0,
        }}
        onError={e => {
          (e.currentTarget as HTMLImageElement).style.display = 'none';
          (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
        }}
      />
    );
  }
  return null;
}

function InitialsPlaceholder({ initials, size = 44, rounded = 12, bg, color }: {
  initials: string; size?: number; rounded?: number; bg?: string; color?: string;
}) {
  return (
    <div style={{
      width: size, height: size, borderRadius: rounded,
      background: bg || 'var(--rq-primary-dim)',
      color: color || 'var(--rq-primary)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--rq-font-heading)', fontWeight: 700,
      fontSize: `${size * 0.35}px`, flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

export default function Team() {
  return (
    <div style={{ padding: '80px 24px 60px' }}>
      <div className="page-container" style={{ maxWidth: 960 }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Badge variant="primary">Ambassadors</Badge>
          <h1 style={{
            fontFamily: 'var(--rq-font-heading)',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 700, marginTop: 14, letterSpacing: '-0.03em',
          }}>PQC Ambassadors</h1>
          <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.95rem', maxWidth: 560, margin: '10px auto 0', lineHeight: 1.7 }}>
            Driving post-quantum cryptography adoption across research, industry, and policy.
          </p>
        </div>

        {/* Founder / Lead Ambassador */}
        <div className="card" style={{
          padding: 36, marginBottom: 48,
          background: 'linear-gradient(135deg, var(--rq-white) 0%, var(--rq-primary-dim) 100%)',
          borderColor: 'var(--rq-primary)',
        }}>
          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <Avatar src={founder.photo} initials={founder.initials} size={80} rounded={20} />
            <InitialsPlaceholder
              initials={founder.initials} size={80} rounded={20}
              bg="linear-gradient(135deg, var(--rq-primary), var(--rq-accent))"
              color="#FFFFFF"
            />
            <div style={{ flex: 1, minWidth: 250 }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 6 }}>{founder.name}</h2>
              <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, margin: '0 0 12px' }}>{founder.bio}</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {founder.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Founding Team */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ marginBottom: 24 }}>
            <Badge variant="accent">Founding Team</Badge>
            <h2 style={{
              fontFamily: 'var(--rq-font-heading)', fontSize: '1.3rem', fontWeight: 700,
              marginTop: 10, letterSpacing: '-0.02em',
            }}>Founding Team</h2>
            <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.88rem', marginTop: 6, lineHeight: 1.6 }}>
              Security researchers and encryption engineers building the post-quantum stack from Berlin.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {foundingTeam.map(m => (
              <div key={m.name} className="card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <Avatar src={m.photo} initials={m.initials} size={48} rounded={12} />
                <InitialsPlaceholder initials={m.initials} size={48} rounded={12} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--rq-font-heading)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 4 }}>{m.name}</div>
                  <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.78rem', lineHeight: 1.6, margin: '0 0 8px' }}>{m.bio}</p>
                  <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                    {m.tags.map(t => (
                      <span key={t} className="tag" style={{ fontSize: '0.6rem' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ambassador Network */}
        {advisors.length > 0 && (
          <>
            <div style={{ marginBottom: 24 }}>
              <Badge variant="accent">Ambassador Network</Badge>
              <h2 style={{
                fontFamily: 'var(--rq-font-heading)', fontSize: '1.3rem', fontWeight: 700,
                marginTop: 10, letterSpacing: '-0.02em',
              }}>Ambassador Network</h2>
              <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.88rem', marginTop: 6, lineHeight: 1.6 }}>
                Trusted by leading institutions across academia, industry, and government.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 48 }}>
              {advisors.map(a => (
                <div key={a.name} className="card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <Avatar src={a.photo} initials={a.initials} size={48} rounded={12} />
                  <InitialsPlaceholder
                    initials={a.initials} size={48} rounded={12}
                    bg="var(--rq-accent-light)" color="var(--rq-accent-dark)"
                  />
                  <div>
                    <div style={{ fontFamily: 'var(--rq-font-heading)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 2 }}>{a.name}</div>
                    <div style={{ color: 'var(--rq-muted)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <MapPin size={12} /> {a.affiliation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
