export interface TeamMember {
  initials: string;
  name: string;
  title: string;
  bio: string;
  tags: string[];
}

export interface Advisor {
  initials: string;
  name: string;
  title: string;
  affiliation: string;
}

export const founder: TeamMember = {
  initials: 'RA',
  name: 'Revan Sai Ande',
  title: 'CEO & Founder',
  bio: 'MSc Computer Science (Information Security). Bug bounty on HackerOne, Bugcrowd. Hardware security / side-channel analysis research. ETSI PQC Ambassador, ETSI / IQC QSC Delegate, BSI congress attendee. Building the post-quantum encryption stack from Berlin.',
  tags: ['PQC', 'HSM', 'Side-Channel', 'ETSI Ambassador', 'QSC Delegate'],
};

export const advisors: Advisor[] = [
  { initials: 'JP', name: 'Prof. Jean-Pierre Seifert', title: 'Security in IT Research Group', affiliation: 'TU Berlin' },
  { initials: 'AN', name: 'André Nikolski', title: 'Program Manager', affiliation: 'Leap Berlin / Humboldt Innovation' },
  { initials: 'SG', name: 'Sebastian Grodzietzki', title: 'IBM Quantum', affiliation: 'IBM' },
  { initials: 'NH', name: 'Norbert Herrmann', title: 'Berlin Senate', affiliation: 'Senate of Berlin' },
];
