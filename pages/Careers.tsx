import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { CTABlock } from '../components/CTABlock';
import AnimatedBackground from '../components/AnimatedBackground';
import { ArrowRight, Users, Globe, Zap, Target, Send } from 'lucide-react';

const ambassadorRoles = [
  { title: 'Business Ambassador', location: 'Remote / Berlin / EU / India / USA', type: 'Part-time / Contract', desc: 'Represent RivicQ in business and industry events. Build relationships with potential enterprise partners and promote quantum-safe encryption adoption.' },
  { title: 'AI Ambassador', location: 'Remote', type: 'Part-time / Contract', desc: 'Bridge AI and PQC encryption communities. Create content on AI-driven cryptographic analysis and quantum-safe ML applications.' },
  { title: 'Quantum Ambassador', location: 'Remote', type: 'Part-time / Contract', desc: 'Engage quantum research communities, organize quantum-safe encryption workshops, and contribute to open-source PQC tooling.' },
  { title: 'Cyber Security Ambassador', location: 'Remote', type: 'Part-time / Contract', desc: 'Connect with cybersecurity professionals and communities. Share expertise on post-quantum migration, CSPM/QBOM frameworks, and encryption compliance.' },
  { title: 'Sales Ambassador', location: 'Remote / Berlin / EU / India / USA', type: 'Part-time / Contract', desc: 'Generate enterprise sales leads for RivicQ\'s encryption solutions. Support demo scheduling, follow-ups, and regional pipeline development.' },
];

export default function Careers() {
  return (
    <div style={{ position: 'relative' }}>
      <AnimatedBackground variant="mesh" intensity="medium" gradient={['#0BAA8A', '#0E141B', '#1A56DB']} />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px', position: 'relative', zIndex: 1 }}>

        {/* We Are Hiring banner */}
        <div style={{
          background: 'linear-gradient(135deg, var(--rq-primary) 0%, var(--rq-accent) 100%)',
          borderRadius: 16, padding: '40px 32px', marginBottom: 40,
          textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '-50%', right: '-20%', width: 300, height: 300,
            borderRadius: '50%', background: 'rgba(255,255,255,0.06)',
          }} />
          <div style={{ position: 'relative' }}>
            <span className="badge" style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}>
              We Are Hiring
            </span>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700, color: '#FFFFFF', marginTop: 14, marginBottom: 8,
              letterSpacing: '-0.02em',
            }}>Join the RivicQ Ambassador Network</h2>
            <p style={{
              color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem',
              maxWidth: 560, margin: '0 auto 24px', lineHeight: 1.7,
            }}>
              We are looking for passionate individuals worldwide to represent RivicQ and drive post-quantum 
              encryption adoption. Multiple tracks available — find the one that fits you.
            </p>
            <div style={{
              display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap',
            }}>
              {[
                { icon: Globe, label: 'Remote / Global' },
                { icon: Users, label: '5 Tracks' },
                { icon: Zap, label: 'Flexible Hours' },
                { icon: Target, label: 'Open Now' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    background: 'rgba(255,255,255,0.1)', borderRadius: 8,
                    padding: '6px 14px', fontSize: '0.78rem', color: '#FFFFFF',
                  }}>
                    <Icon size={14} />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <SectionHeader
          title="Open Ambassador Roles"
          subtitle="Represent RivicQ in your region and community. Business, AI, quantum, cyber security, and sales tracks available worldwide."
          badge={<Badge variant="encrypt">Ambassadors · Open</Badge>}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {ambassadorRoles.map(r => (
            <div key={r.title} style={{ border: '1px solid var(--rq-border)', borderRadius: 10, padding: 20, background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(4px)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, margin: 0 }}>{r.title}</h3>
                <Badge variant="encrypt">{r.type}</Badge>
              </div>
              <div style={{ color: 'var(--rq-muted)', fontSize: '0.8rem', marginBottom: 8 }}>{r.location}</div>
              <p style={{ color: 'var(--rq-muted)', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>{r.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <CTABlock
            title="Become a RivicQ Ambassador"
            text="Send your application to hello@rivicq.de with the ambassador track in the subject line. We review applications on a rolling basis."
            label="Apply Now — hello@rivicq.de"
            href="mailto:hello@rivicq.de"
            external
          />
        </div>
      </div>
    </div>
  );
}
