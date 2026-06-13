import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';

export default function Legal() {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '60px 24px' }}>
      <SectionHeader title="Legal & Imprint" badge={<Badge variant="blue">Legal</Badge>} align="left" />
      <div style={{ color: 'var(--rq-muted)', fontSize: '0.9rem', lineHeight: 1.8 }}>
        <p><strong>RivicQ GmbH</strong><br />
        (in Gründung)<br />
        Berlin, Germany</p>
        <p><strong>Contact:</strong> hello@rivicq.de</p>
        <p><strong>Responsible for content:</strong> Revan Sai Ande, Berlin</p>
        <p><strong>EU Dispute Resolution:</strong> The European Commission provides an online dispute resolution platform at <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--rq-blue)' }}>https://ec.europa.eu/consumers/odr</a>.</p>
        <p><strong>Disclaimer:</strong> The content on this website is for informational purposes only. RivicQ GmbH makes no representations as to the accuracy or completeness of any information. All product names, logos, and brands are property of their respective owners.</p>
        <p>&copy; {new Date().getFullYear()} RivicQ GmbH. All rights reserved.</p>
      </div>
    </div>
  );
}
