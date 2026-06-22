import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { CTABlock } from '../components/CTABlock';
import AnimatedBackground from '../components/AnimatedBackground';

const institutions = [
  {
    name: 'Science and Startups',
    type: 'Research & Publishing',
    desc: 'Academic publisher and research platform for peer-reviewed cryptographic science and engineering.',
  },
  {
    name: 'TU Berlin',
    type: 'University Partner',
    desc: 'Technical University of Berlin — collaboration on PQC encryption research, side-channel analysis, and HSM security engineering.',
  },
  {
    name: 'Humboldt Innovation',
    type: 'Innovation Hub',
    desc: 'Humboldt University\'s innovation and technology transfer arm, supporting deep-tech spin-outs in cryptography and quantum security.',
  },
  {
    name: 'OptecBB',
    type: 'Photonics & Optics Cluster',
    desc: 'Berlin-Brandenburg optics and photonics cluster — QRNG and photonic encryption component research partner.',
  },
  {
    name: 'Berlin Quantum',
    type: 'Quantum Alliance',
    desc: 'Berlin\'s quantum technologies network connecting research, industry, and funding for quantum-safe encryption.',
  },
  {
    name: 'Berlin Cyber Security',
    type: 'Security Ecosystem',
    desc: 'Berlin\'s cybersecurity alliance — collaborative threat research, encryption standards, and incident response coordination.',
  },
  {
    name: 'Eura AG',
    type: 'Industry Partner',
    desc: 'Strategic industry partner for post-quantum encryption adoption in critical infrastructure and regulated environments.',
  },
  {
    name: 'Berlin University Alliance',
    type: 'University Alliance',
    desc: 'Cross-institutional research alliance of Berlin\'s major universities advancing quantum-safe cryptography, post-quantum protocols, and encryption standards.',
  },
  {
    name: 'Berlin Deep Tech Scenes',
    type: 'Deep Tech Ecosystem',
    desc: 'Berlin\'s deep technology community connecting PQC encryption startups, AI security ventures, and hardware security innovators with research institutions, funding, and enterprise pilots.',
  },
  {
    name: 'ETSI',
    type: 'Standards Body',
    desc: 'European Telecommunications Standards Institute — contributing to PQC encryption standards, hybrid protocol specifications, and industry-wide migration frameworks.',
  },
];

export default function Ecosystem() {
  return (
    <div style={{ position: 'relative' }}>
      <AnimatedBackground variant="mesh" intensity="medium" gradient={['#1A56DB', '#2563EB', '#3B82F6']} />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Research Ecosystem"
          subtitle="RivicQ collaborates with leading research institutions, universities, and industry partners across Berlin\'s quantum-safe encryption ecosystem."
          badge={<Badge variant="encrypt">Research & Partners</Badge>}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {institutions.map(inst => (
            <div key={inst.name} style={{
              border: '1px solid var(--rq-border)', borderRadius: 10, padding: 20,
              background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(4px)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, margin: 0 }}>{inst.name}</h3>
                <Badge variant="primary">{inst.type}</Badge>
              </div>
              <p style={{ color: 'var(--rq-muted)', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>{inst.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <CTABlock
            title="Partner With Us"
            text="Academic institutions, research labs, and industry partners — reach out to explore collaboration opportunities in quantum-safe encryption."
            label="Contact Research Team"
            href="/enterprise"
          />
        </div>
      </div>
    </div>
  );
}
