import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { AlgoTable } from '../components/AlgoTable';
import { ComplianceBadge } from '../components/ComplianceBadge';
import { CTABlock } from '../components/CTABlock';
import AnimatedBackground from '../components/AnimatedBackground';
import { regulations, encryptionStandards } from '../data/standards';

const deadlines: { label: string; value: string; note: string; highlight?: boolean }[] = [
  { label: 'DORA', value: 'EU Digital Operational Resilience Act', note: 'In effect Jan 2025', highlight: true },
  { label: 'NIS2', value: 'EU Network & Information Security Directive', note: 'In effect Jan 2025', highlight: true },
  { label: 'NIST PQC', value: 'FIPS 203/204/205 migration mandate', note: '2035 deadline', highlight: true },
  { label: 'BSI TR-03107', value: 'German cryptographic guideline', note: 'In effect', highlight: true },
  { label: 'PCI DSS v4.0', value: 'Payment card industry encryption standard', note: '2025 enforcement', highlight: false },
  { label: 'EU AI Act', value: 'AI cryptographic security requirements', note: '2026 phased', highlight: false },
  { label: 'FDA/CYBER', value: 'Medical device cybersecurity (CSPM)', note: '2026 guidance', highlight: false },
  { label: 'EO 14028', value: 'US executive order on software supply chain', note: 'In effect', highlight: false },
];

export default function Compliance() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px', position: 'relative' }}>
      <AnimatedBackground variant="grid" intensity="low" gradient={['#2563EB', '#3B82F6', '#60A5FA']} />
      <SectionHeader
        title="Compliance Deadlines"
        subtitle="Global encryption regulatory landscape. Your cryptographic migration deadlines are already in effect."
        badge={<Badge variant="amber">Encryption Compliance</Badge>}
      />
      <AlgoTable data={deadlines} />

      {/* Encryption Standards Compliance */}
      <div style={{ marginTop: 32 }}>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 700, marginBottom: 12, color: 'var(--rq-encrypt)' }}>
          Encryption Standard Compliance
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {encryptionStandards.filter(s => s.pqcReady).map(s => (
            <div key={s.name} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '10px 16px', border: '1px solid var(--rq-border)', borderRadius: 8,
              fontSize: '0.85rem',
            }}>
              <ComplianceBadge text={s.name} />
              <span style={{ color: 'var(--rq-text)', fontSize: '0.8rem' }}>{s.family}</span>
              <span style={{ color: 'var(--rq-muted)', flex: 1, fontSize: '0.8rem' }}>{s.use}</span>
              <span style={{ color: 'var(--rq-success)', fontSize: '0.75rem', fontFamily: "'JetBrains Mono', monospace" }}>✓ PQ-safe</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Regulations */}
      <div style={{ marginTop: 32 }}>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 700, marginBottom: 12 }}>Key Regulations</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {regulations.map(r => (
            <div key={r.name} style={{ border: '1px solid var(--rq-border)', borderRadius: 8, padding: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <ComplianceBadge text={r.name} />
                <span style={{ color: 'var(--rq-muted)', fontSize: '0.8rem' }}>{r.body}</span>
              </div>
              <p style={{ margin: 0, color: 'var(--rq-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>{r.summary}</p>
              <div style={{ color: 'var(--rq-amber)', fontSize: '0.8rem', marginTop: 6, fontFamily: "'JetBrains Mono', monospace" }}>
                Deadline: {r.deadline}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 40 }}>
        <CTABlock title="Assess Your Encryption Compliance" text="Free CSPM+QBOM pilot includes a regulatory gap analysis report." label="Request Compliance Audit" href="/enterprise" />
      </div>
    </div>
  );
}
