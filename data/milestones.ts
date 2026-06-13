export interface Milestone {
  date: string;
  label: string;
  highlight?: boolean;
}

export const milestones: Milestone[] = [
  { date: '2024', label: 'Berlin Founded — Encryption Research' },
  { date: '2025', label: 'SIB Deep-Tech Grant (CBOM)' },
  { date: 'Mar 2025', label: 'CBOM OSS Launch' },
  { date: 'Jun 2025', label: 'QBOM Specification v0.1' },
  { date: 'Dec 2025', label: 'BSI Congress — PQC Encryption' },
  { date: 'Jan 2026', label: 'Leap Berlin Quantum Hub' },
  { date: 'Feb 2026', label: 'Science & Startups 100/100' },
  { date: 'Apr 2026', label: 'EURA AG LOI Signed — CloudHSM', highlight: true },
  { date: 'May 2026', label: 'ETSI/IQC QSC Delegate — PQ Encryption Standards', highlight: true },
  { date: 'Jun 2026', label: 'Horizenlabs Partnership — PQC + Blockchain', highlight: true },
];
