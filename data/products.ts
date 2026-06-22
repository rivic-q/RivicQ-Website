export interface Product {
  id: string;
  name: string;
  description: string;
  specs: string[];
  badge: string;
  status: 'live' | 'beta' | 'planned';
  path: string;
}

export const products: Product[] = [
  { id: 'cspm', name: 'CSPM Scanner', description: 'Open-source Cryptographic Security Posture Management scanner. Discovers keys, certificates, and cryptographic assets across codebases, containers, and cloud VPCs.', specs: ['Apache 2.0', 'CycloneDX 1.6', '50+ languages', 'GitHub Actions'], badge: 'OSS', status: 'live', path: '/products' },
  { id: 'qbom', name: 'QBOM Analyzer', description: 'Quantum Bill of Materials — extends CSPM with quantum-vulnerability scoring. Maps every cryptographic asset to its Shor/Grover risk and NIST PQC replacement.', specs: ['CSPM superset', 'Q-score v1.0', 'Shor risk mapping', 'CSPM→QBOM transform'], badge: 'Beta', status: 'beta', path: '/products' },
  { id: 'hsm', name: 'CloudHSM / vHSM', description: 'FIPS 140-3 Level 3 virtual Hardware Security Module. Quantum-safe key storage with PKCS#11 API. Encryption-as-a-Service (EaaS) engine with ML-KEM-768, AES-256-GCM, and hybrid key derivation.', specs: ['FIPS 140-3', 'PKCS#11', 'ML-KEM-768', 'REST/gRPC', 'EaaS API'], badge: 'Enterprise', status: 'beta', path: '/cloud-hsm' },
  { id: 'rqsp', name: 'RQSP Protocol', description: 'RivicQ Security Protocol. Proprietary hybrid PQC+classical transport security layer. Dual-key derivation with ML-KEM-768 encapsulation. Native TLS 1.3 extension for post-quantum encryption.', specs: ['Hybrid PQC+TLS', 'ML-KEM-768', 'NCSC/NIST', 'ETSIGR QSC 001'], badge: 'Proprietary', status: 'beta', path: '/rqsp' },
  { id: 'sdk', name: 'Developer SDK', description: 'Language bindings for Python, Go, Rust, Java. NIST algorithm implementations, CSPM/QBOM generation API, PQC encryption primitives, and HSM client bindings.', specs: ['Python', 'Go', 'Rust', 'Java', 'Node.js'], badge: 'Beta', status: 'beta', path: '/sdk' },
];

export interface Solution {
  icon: string;
  title: string;
  tagline: string;
  path: string;
}

export const solutions: Solution[] = [
  { icon: '🔐', title: 'Government Portals', tagline: 'Aadhaar, GSTN, citizen services. Free CSPM+QBOM pilot available. HSM-backed key management.', path: '/solutions' },
  { icon: '🌐', title: 'GCC India Operations', tagline: 'US/EU HQ mandates NIST PQC + DORA. 8-week gap assessment with encryption posture analysis.', path: '/solutions' },
  { icon: '🏦', title: 'Banks & Fintech', tagline: 'UPI, inter-bank comms, FIPS 140-3 HSM-integrated encryption migration. EaaS API for instant PQC adoption.', path: '/solutions' },
  { icon: '🏥', title: 'Healthcare & Data', tagline: '50+ year data sensitivity. Prime harvest-now targets. QBOM risk-scored encryption audit.', path: '/solutions' },
  { icon: '📡', title: 'Telecommunications', tagline: '5G core encryption, SIM/eSIM key management, ETSI QSC standards compliance. HSM-backed key storage for telecom infrastructure.', path: '/telecom' },
];
