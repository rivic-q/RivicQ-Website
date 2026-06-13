export interface Standard {
  standard: string;
  algorithm: string;
  replaces: string;
  status: 'live' | 'selected';
  category: 'encryption' | 'signature' | 'key-exchange' | 'inventory';
}

export const pqcStandards: Standard[] = [
  { standard: 'FIPS 203', algorithm: 'ML-KEM (Kyber)', replaces: 'RSA key exchange', status: 'live', category: 'key-exchange' },
  { standard: 'FIPS 204', algorithm: 'ML-DSA (Dilithium)', replaces: 'RSA/ECC signatures', status: 'live', category: 'signature' },
  { standard: 'FIPS 205', algorithm: 'SLH-DSA (SPHINCS+)', replaces: 'Hash signatures', status: 'live', category: 'signature' },
  { standard: 'HQC', algorithm: 'Hamming Quasi-Cyclic', replaces: 'ML-KEM backup', status: 'selected', category: 'key-exchange' },
];

export interface EncryptionStandard {
  name: string;
  family: string;
  use: string;
  pqcReady: boolean;
  note: string;
}

export const encryptionStandards: EncryptionStandard[] = [
  { name: 'AES-256-GCM', family: 'Symmetric', use: 'Data at rest, TLS bulk', pqcReady: true, note: 'Key size already quantum-safe' },
  { name: 'ChaCha20-Poly1305', family: 'Symmetric', use: 'Mobile, low-power', pqcReady: true, note: '256-bit key, PQ-safe' },
  { name: 'ML-KEM-768', family: 'KEM', use: 'Key exchange (replaces RSA/ECDH)', pqcReady: true, note: 'FIPS 203, NIST PQC' },
  { name: 'ML-KEM-1024', family: 'KEM', use: 'High-security key exchange', pqcReady: true, note: '192-bit PQ security' },
  { name: 'ML-DSA-65', family: 'Signature', use: 'Code signing, TLS certs', pqcReady: true, note: 'FIPS 204, NIST PQC' },
  { name: 'X25519Kyber768', family: 'Hybrid KEM', use: 'TLS 1.3 hybrid handshake', pqcReady: true, note: 'Hybrid PQ+classical' },
];

export interface Regulation {
  name: string;
  body: string;
  summary: string;
  deadline: string;
  source: string;
}

export const regulations: Regulation[] = [
  { name: 'DORA', body: 'EU', summary: 'Digital Operational Resilience Act. Mandates ICT risk management, including cryptographic agility and key management for EU financial institutions.', deadline: 'Jan 2025', source: 'https://www.digital-operational-resilience-act.com/' },
  { name: 'NIS2', body: 'EU', summary: 'Network and Information Security Directive 2. Expands scope to critical infrastructure, requiring supply chain security and cryptographic compliance.', deadline: 'Oct 2024', source: 'https://www.nisdirective.eu/' },
  { name: 'BSI TR-02102', body: 'Germany', summary: 'Technical guideline for cryptographic procedures. Recommends PQC migration timeline aligned with NIST FIPS standards.', deadline: '2026', source: 'https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Technische-Richtlinien/TR-nach-Thema-sortiert/tr02102.html' },
  { name: 'CISA EO 14306', body: 'USA', summary: 'Executive order mandating US federal agencies to adopt PQC by 2035. Sets the timeline for global cryptographic transition.', deadline: '2035', source: 'https://www.cisa.gov/quantum' },
  { name: 'NCSC', body: 'UK', summary: 'UK National Cyber Security Centre guidance on quantum-safe cryptography migration planning for critical national infrastructure.', deadline: '2028', source: 'https://www.ncsc.gov.uk/quantum-security' },
  { name: 'CERT-In', body: 'India', summary: 'Indian Computer Emergency Response Team guidelines for cryptographic security in government and critical infrastructure.', deadline: '2025', source: 'https://www.cert-in.org.in/' },
];
