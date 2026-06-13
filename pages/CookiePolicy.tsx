import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';

export default function CookiePolicy() {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '60px 24px' }}>
      <SectionHeader title="Cookie Policy" badge={<Badge variant="blue">Privacy</Badge>} align="left" />
      <div style={{ color: 'var(--rq-muted)', fontSize: '0.9rem', lineHeight: 1.8 }}>
        <p>RivicQ does not use tracking cookies. We use Plausible Analytics — a cookieless, privacy-first analytics service hosted in the EU. No personal data is collected, stored, or processed through cookies.</p>
        <p>Plausible uses no cookies and respects Do Not Track headers. All analytics are anonymous and aggregated.</p>
        <p>No cookie banner is required. If you see a cookie banner on this site, please report it to <a href="mailto:security@rivicq.de" style={{ color: 'var(--rq-blue)' }}>security@rivicq.de</a> — it should not be there.</p>
      </div>
    </div>
  );
}
