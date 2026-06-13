import { Badge } from '../components/Badge';
import { CTABlock } from '../components/CTABlock';
import { founder, advisors } from '../data/team';
import QuantumCircuit from '../components/QuantumCircuit';
import { MapPin } from 'lucide-react';

export default function Team() {
  return (
    <div style={{ position: 'relative' }}>
      <QuantumCircuit complexity={5} color="var(--rq-primary)" />
      <div style={{ padding: '80px 24px 60px', position: 'relative', zIndex: 1 }}>
        <div className="page-container" style={{ maxWidth: 900 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Badge variant="primary">Team</Badge>
          <h1 style={{
            fontFamily: 'var(--rq-font-heading)',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 700, marginTop: 14, letterSpacing: '-0.03em',
          }}>Meet the Founder</h1>
          <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.95rem', maxWidth: 560, margin: '10px auto 0', lineHeight: 1.7 }}>
            Security researcher, encryption engineer, and founder building the post-quantum encryption stack from Berlin.
          </p>
        </div>

        {/* Founder Card */}
        <div className="card" style={{
          padding: 36, marginBottom: 48,
          background: 'linear-gradient(135deg, var(--rq-white) 0%, var(--rq-primary-dim) 100%)',
          borderColor: 'var(--rq-primary)',
        }}>
          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{
              width: 72, height: 72, borderRadius: 20,
              background: 'linear-gradient(135deg, var(--rq-primary), var(--rq-accent))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--rq-font-heading)', fontWeight: 700,
              fontSize: '1.3rem', color: '#FFFFFF', flexShrink: 0,
            }}>
              {founder.initials}
            </div>
            <div style={{ flex: 1, minWidth: 250 }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 2 }}>{founder.name}</h2>
              <div style={{ color: 'var(--rq-primary)', fontSize: '0.9rem', fontWeight: 500, marginBottom: 8, fontFamily: 'var(--rq-font-heading)' }}>{founder.title}</div>
              <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, margin: '0 0 12px' }}>{founder.bio}</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {founder.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Advisors */}
        {advisors.length > 0 && (
          <>
            <div style={{ marginBottom: 24 }}>
              <Badge variant="accent">Advisors</Badge>
              <h2 style={{
                fontFamily: 'var(--rq-font-heading)', fontSize: '1.3rem', fontWeight: 700,
                marginTop: 10, letterSpacing: '-0.02em',
              }}>Advisory Board</h2>
              <p style={{ color: 'var(--rq-text-secondary)', fontSize: '0.88rem', marginTop: 6, lineHeight: 1.6 }}>
                Trusted by leading institutions across academia, industry, and government.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14, marginBottom: 48 }}>
              {advisors.map(a => (
                <div key={a.name} className="card" style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'var(--rq-accent-light)', color: 'var(--rq-accent-dark)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--rq-font-heading)', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0,
                  }}>{a.initials}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--rq-font-heading)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 2 }}>{a.name}</div>
                    <div style={{ color: 'var(--rq-text-secondary)', fontSize: '0.82rem' }}>{a.title}</div>
                    <div style={{ color: 'var(--rq-muted)', fontSize: '0.75rem', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <MapPin size={12} /> {a.affiliation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* CTA */}
        <CTABlock
          title="Join Our Encryption Team"
          text="We're hiring security engineers and researchers in Berlin and across the US."
          label="View Openings"
          href="/careers"
        />
      </div>
      </div>
    </div>
  );
}
