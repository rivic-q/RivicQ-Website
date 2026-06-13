import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { ComplianceBadge } from '../components/ComplianceBadge';

export default function TrustCenter() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <SectionHeader
        title="Trust Center"
        subtitle="Encryption security posture, HSM compliance certifications, and operational transparency."
        badge={<Badge variant="encrypt">Encryption Trust</Badge>}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          { title: 'Encryption Security', items: ['Algorithms: ML-KEM-768, ML-DSA-65, AES-256-GCM, ChaCha20-Poly1305', 'Key storage: FIPS 140-3 Level 3 HSM boundary', 'Key derivation: Hybrid PQ+classical dual-key inside HSM', 'Entropy: QRNG-compatible hardware RNG', 'Code: GitHub Security Lab scans, CodeQL, Dependabot'] },
          { title: 'HSM Compliance', items: ['FIPS 140-3 Level 3 (certification in process)', 'PKCS#11, REST, gRPC, KMIP interfaces', 'Immutable HSM-backed audit log', 'Automated key rotation and escrow policies', 'GDPR compliant — EU-hosted infrastructure'] },
          { title: 'Operations', items: ['Infrastructure: AWS eu-central-1, BSI C5 certified', 'Availability: 99.95% SLA for Enterprise tier (EaaS)', 'Backup: Daily encrypted, cross-region replication', 'Incident response: 24h disclosure, 7-day post-mortem'] },
          { title: 'Data Privacy', items: ['No Google Analytics — Plausible (EU-hosted, cookieless)', 'No cookie banner required', 'Encryption: All form data encrypted at rest (AES-256-GCM, HSM-backed keys)', 'Data processing: EU-only, no US data transfer', 'Contact form data: encrypted at rest, 90-day retention'] },
        ].map(section => (
          <div key={section.title} style={{ border: '1px solid var(--rq-border)', borderRadius: 10, padding: 20 }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, margin: '0 0 12px', color: 'var(--rq-encrypt)' }}>{section.title}</h3>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {section.items.map(item => (
                <li key={item} style={{ fontSize: '0.85rem', color: 'var(--rq-muted)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--rq-encrypt)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <p style={{ color: 'var(--rq-muted)', fontSize: '0.85rem' }}>
          Encryption security concerns? <a href="mailto:security@rivicq.de" style={{ color: 'var(--rq-encrypt)' }}>security@rivicq.de</a>
        </p>
      </div>
    </div>
  );
}
