import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';

export default function Privacy() {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '60px 24px' }}>
      <SectionHeader title="Privacy Policy" badge={<Badge variant="blue">GDPR</Badge>} align="left" />
      <div style={{ color: 'var(--rq-muted)', fontSize: '0.9rem', lineHeight: 1.8 }}>
        <p>RivicQ GmbH respects your privacy. This policy explains how we handle your data.</p>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--rq-text)', fontSize: '1rem', margin: '20px 0 8px' }}>Data We Collect</h3>
        <ul>
          <li><strong>Contact forms:</strong> Name, email, message — used only to respond to your inquiry. Stored encrypted. Deleted after 90 days.</li>
          <li><strong>Analytics:</strong> We use Plausible Analytics, a privacy-first, cookieless analytics service hosted in the EU. No personal data is collected. No cookies.</li>
          <li><strong>Logs:</strong> Standard web server logs (IP, user agent, timestamp) retained for 7 days for operational security.</li>
        </ul>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--rq-text)', fontSize: '1rem', margin: '20px 0 8px' }}>Data Sharing</h3>
        <p>We do not sell or share your personal data with third parties. Contact form submissions are processed through Web3Forms (EU-compliant).</p>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--rq-text)', fontSize: '1rem', margin: '20px 0 8px' }}>Your Rights</h3>
        <p>Under GDPR, you have the right to access, rectify, erase, and port your data. Contact us at <a href="mailto:privacy@rivicq.de" style={{ color: 'var(--rq-blue)' }}>privacy@rivicq.de</a>.</p>
      </div>
    </div>
  );
}
