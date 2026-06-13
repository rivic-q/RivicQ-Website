export interface GlossaryEntry {
  term: string;
  definition: string;
  related?: string[];
}

export const glossary: GlossaryEntry[] = [
  { term: 'CBOM', definition: 'Cryptographic Bill of Materials. An inventory of all cryptographic assets (keys, certificates, algorithms) in a system, analogous to an SBOM for software dependencies.', related: ['CycloneDX', 'SBOM', 'QBOM'] },
  { term: 'QBOM', definition: 'Quantum Bill of Materials. An extension of CBOM that adds quantum-vulnerability scoring (Q-score) to every cryptographic asset. Maps each key and algorithm to its Shor/Grover risk and the corresponding NIST PQC replacement.', related: ['CBOM', 'Q-Score', 'Shor'] },
  { term: 'Q-Score', definition: 'Quantum vulnerability score. A quantitative metric (0.0–1.0) measuring how urgently a cryptographic asset needs PQC migration. Based on key size, algorithm type, data sensitivity, and exposure window.', related: ['QBOM', 'Shor', 'Grover'] },
  { term: 'EaaS', definition: 'Encryption-as-a-Service. RivicQ\'s API-first encryption engine providing algorithm selection, key lifecycle management, and audit logging via HSM-backed REST/gRPC endpoints.', related: ['HSM', 'API', 'CloudHSM'] },
  { term: 'CycloneDX', definition: 'An OWASP standard for SBOM formats. RivicQ extends CycloneDX 1.6 to include cryptographic asset metadata (CBOM) and quantum vulnerability scoring (QBOM).', related: ['CBOM', 'SBOM', 'QBOM'] },
  { term: 'CRYSTALS-Kyber', definition: 'A lattice-based key encapsulation mechanism (KEM) selected by NIST for standardization as ML-KEM in FIPS 203. Primary PQC encryption primitive.', related: ['ML-KEM', 'FIPS 203', 'KEM'] },
  { term: 'CRYSTALS-Dilithium', definition: 'A lattice-based signature scheme selected by NIST for standardization as ML-DSA in FIPS 204.', related: ['ML-DSA', 'FIPS 204'] },
  { term: 'DORA', definition: 'Digital Operational Resilience Act. EU regulation requiring financial institutions to manage ICT risk, including cryptographic agility and encryption key management.', related: ['NIS2', 'Compliance'] },
  { term: 'FIPS 140-3', definition: 'Federal Information Processing Standard for cryptographic module security. Level 3 requires tamper-responsive physical security and identity-based authentication.', related: ['HSM', 'vHSM', 'CloudHSM'] },
  { term: 'FIPS 203', definition: 'NIST standard for ML-KEM (formerly CRYSTALS-Kyber). Key encapsulation mechanism for quantum-safe key exchange and encryption.', related: ['ML-KEM', 'CRYSTALS-Kyber', 'KEM'] },
  { term: 'FIPS 204', definition: 'NIST standard for ML-DSA (formerly CRYSTALS-Dilithium). Quantum-safe digital signature algorithm.', related: ['ML-DSA', 'CRYSTALS-Dilithium'] },
  { term: 'FIPS 205', definition: 'NIST standard for SLH-DSA (formerly SPHINCS+). Stateless hash-based quantum-safe signature scheme.', related: ['SLH-DSA', 'SPHINCS+'] },
  { term: 'HNDL', definition: 'Harvest Now, Decrypt Later. An attack strategy where encrypted data is collected today and stored until quantum computers become capable of breaking the encryption.', related: ['Q-Day', 'PQC', 'QBOM'] },
  { term: 'HQC', definition: 'Hamming Quasi-Cyclic. A code-based KEM selected by NIST as a backup/alternative to ML-KEM in 2025.', related: ['ML-KEM', 'FIPS 203', 'KEM'] },
  { term: 'HSM', definition: 'Hardware Security Module. A physical or virtual device that securely generates, stores, and manages cryptographic keys in a tamper-proof FIPS 140-3 environment.', related: ['vHSM', 'FIPS 140-3', 'CloudHSM'] },
  { term: 'KEM', definition: 'Key Encapsulation Mechanism. A cryptographic primitive used to establish shared secrets between parties over a public channel. Core to PQC encryption.', related: ['ML-KEM', 'HQC', 'Encryption'] },
  { term: 'ML-KEM', definition: 'Module-Lattice Key Encapsulation Mechanism. NIST FIPS 203 standard, formerly CRYSTALS-Kyber. Primary PQC key exchange and encryption algorithm.', related: ['FIPS 203', 'CRYSTALS-Kyber', 'KEM'] },
  { term: 'ML-DSA', definition: 'Module-Lattice Digital Signature Algorithm. NIST FIPS 204 standard, formerly CRYSTALS-Dilithium. Primary PQC signature algorithm.', related: ['FIPS 204', 'CRYSTALS-Dilithium'] },
  { term: 'NIS2', definition: 'Network and Information Security Directive 2. EU-wide legislation on cybersecurity for critical infrastructure and essential services.', related: ['DORA', 'Compliance'] },
  { term: 'NIST', definition: 'National Institute of Standards and Technology. US federal agency that led the PQC standardization process (2016–2024).', related: ['FIPS 203', 'FIPS 204', 'FIPS 205'] },
  { term: 'PQC', definition: 'Post-Quantum Cryptography. Cryptographic algorithms designed to be secure against both classical and quantum computers. Includes ML-KEM, ML-DSA, SLH-DSA.', related: ['Q-Day', 'HNDL', 'ML-KEM'] },
  { term: 'Q-Day', definition: 'The hypothetical future date when a quantum computer becomes capable of breaking current public-key cryptography (RSA, ECC).', related: ['HNDL', 'PQC', 'QBOM'] },
  { term: 'QRNG', definition: 'Quantum Random Number Generator. Hardware that generates truly random numbers using quantum mechanical processes, used as entropy source for HSM key generation.', related: ['HSM', 'Key Generation', 'CloudHSM'] },
  { term: 'RQSP', definition: 'RivicQ Security Protocol. Proprietary hybrid transport security protocol combining classical TLS with PQC key encapsulation for quantum-safe encrypted communications.', related: ['PQC', 'TLS', 'Encryption'] },
  { term: 'Shor\'s Algorithm', definition: 'A quantum algorithm that can factor large integers and compute discrete logarithms exponentially faster than classical computers. Threatens RSA, ECDH, ECDSA.', related: ['Q-Day', 'HNDL', 'QBOM'] },
  { term: 'Grover\'s Algorithm', definition: 'A quantum search algorithm that provides a quadratic speedup for unstructured search. Reduces effective key strength of symmetric ciphers by half (AES-256 → 128-bit security).', related: ['Q-Day', 'AES', 'QBOM'] },
  { term: 'SLH-DSA', definition: 'Stateless Hash-based Digital Signature Algorithm. NIST FIPS 205 standard, formerly SPHINCS+. Hash-based PQC signature scheme.', related: ['FIPS 205', 'SPHINCS+'] },
  { term: 'SPHINCS+', definition: 'A stateless hash-based signature scheme selected by NIST for standardization as SLH-DSA in FIPS 205.', related: ['SLH-DSA', 'FIPS 205'] },
  { term: 'vHSM', definition: 'Virtual Hardware Security Module. A software-based HSM that abstracts physical HSM resources through a virtualized interface while maintaining FIPS 140-3 compliance.', related: ['HSM', 'FIPS 140-3', 'CloudHSM'] },
  { term: 'ZKP', definition: 'Zero-Knowledge Proof. A cryptographic method where one party can prove possession of certain information without revealing the information itself.', related: ['RQSP', 'Privacy', 'Encryption'] },
];
