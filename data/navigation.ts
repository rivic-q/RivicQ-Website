export interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string; description?: string }[];
}

export const navItems: NavItem[] = [
  {
    label: 'Products', path: '#', children: [
      { label: 'CSPM Scanner', path: '/products', description: 'Cryptographic asset discovery' },
      { label: 'QBOM Analyzer', path: '/products', description: 'Quantum risk scoring' },
      { label: 'CloudHSM', path: '/cloud-hsm', description: 'FIPS 140-3 HSM as a Service' },
      { label: 'RQSP Protocol', path: '/rqsp', description: 'Hybrid PQC transport' },
      { label: 'Platform', path: '/platform', description: 'Encryption architecture' },
      { label: 'SDK & APIs', path: '/sdk', description: 'Developer integrations' },
    ],
  },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Telecom', path: '/telecom' },
  {
    label: 'Resources', path: '#', children: [
      { label: 'Blog', path: '/blog', description: 'PQC insights & updates' },
      { label: 'Research', path: '/research', description: 'Quantum cryptography R&D' },
      { label: 'Glossary', path: '/glossary', description: 'PQC terminology' },
      { label: 'Compliance', path: '/compliance', description: 'Regulatory deadlines' },
      { label: 'Guides', path: '/resources', description: 'Tutorials & docs' },
    ],
  },
  { label: 'Ecosystem', path: '/ecosystem' },
  { label: 'Learning', path: '/learning' },
  { label: 'Pricing', path: '/pricing' },
  {
    label: 'Company', path: '#', children: [
      { label: 'Vision', path: '/vision', description: 'A quantum-safe world' },
      { label: 'Mission', path: '/mission', description: 'Make PQC practical' },
      { label: 'Story', path: '/story', description: 'Our journey' },
      { label: 'Team', path: '/team', description: 'Meet the team' },
      { label: 'Ambassador', path: '/careers', description: 'Ambassador program' },
      { label: 'Investors', path: '/investors', description: 'Investor relations' },
    ],
  },
];

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/company/rivicq',
  github: 'https://github.com/rivicq/cbom',
  substack: 'https://rivicq.substack.com',
  discord: 'https://discord.gg/rivicq',
  youtube: 'https://youtube.com/@rivicq',
  community: 'https://github.com/rivicq/cbom/discussions',
};
