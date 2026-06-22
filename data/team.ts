export interface TeamMember {
  initials: string;
  name: string;
  bio: string;
  tags: string[];
  photo?: string;
}

export interface Advisor {
  initials: string;
  name: string;
  affiliation: string;
  photo?: string;
}

export const founder: TeamMember = {
  initials: 'RA',
  name: 'Revan Sai Ande',
  bio: 'MSc Computer Science (Information Security). Bug bounty on HackerOne, Bugcrowd. Hardware security / side-channel analysis research. ETSI PQC Ambassador, ETSI / IQC QSC Delegate, BSI congress attendee. Building the post-quantum encryption stack from Berlin.',
  tags: ['PQC', 'HSM', 'Side-Channel', 'ETSI Ambassador', 'QSC Delegate'],
  photo: '/images/team/revan-sai-ande.jpg',
};

export const foundingTeam: TeamMember[] = [
  {
    initials: 'HE',
    name: 'Helen E.',
    bio: 'Driving post-quantum encryption adoption and cryptographic standards across European infrastructure. Leading PQC standardization efforts at ETSI and ISO.',
    tags: ['PQC', 'Standards', 'Adoption'],
    photo: '/images/team/helen.jpg',
  },
  {
    initials: 'AY',
    name: 'Aya Y.',
    bio: 'Designing quantum-safe security architectures for critical infrastructure and enterprise deployments. Expertise in zero-trust frameworks and HSM integration.',
    tags: ['Architecture', 'Zero Trust', 'HSM'],
    photo: '/images/team/aya.jpg',
  },
  {
    initials: 'OK',
    name: 'Okan K.',
    bio: 'Building the core PQC encryption engine and HSM integration layer for production-scale deployments. Specializing in high-performance cryptographic implementations.',
    tags: ['Engineering', 'Core', 'Performance'],
    photo: '/images/team/okan.jpg',
  },
  {
    initials: 'PA',
    name: 'Patrik A.',
    bio: 'Scaling cloud-native HSM infrastructure and encryption-as-a-service platforms for global enterprises. Focused on Kubernetes, infrastructure-as-code, and zero-downtime deployments.',
    tags: ['Infrastructure', 'Cloud', 'DevOps'],
    photo: '/images/team/patrik.jpg',
  },
];

export const advisors: Advisor[] = [
  { initials: 'JP', name: 'Prof. Jean-Pierre Seifert', affiliation: 'TU Berlin', photo: '/images/team/advisor-jean-pierre.jpg' },
  { initials: 'AN', name: 'André Nikolski', affiliation: 'Humboldt Innovation', photo: '/images/team/advisor-andre.jpg' },
  { initials: 'SG', name: 'Sebastian Grodzietzki', affiliation: 'IBM Quantum', photo: '/images/team/advisor-sebastian.jpg' },
  { initials: 'NH', name: 'Norbert Herrmann', affiliation: 'Berlin Partner', photo: '/images/team/advisor-norbert.jpg' },
];
