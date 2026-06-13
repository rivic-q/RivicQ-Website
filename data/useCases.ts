export interface UseCase {
  title: string;
  summary: string;
  rq: string;
}

export const useCases: UseCase[] = [
  { title: 'Post-Quantum Key Exchange', summary: 'ML-KEM-768 key encapsulation replaces RSA 2048 or ECDH key exchange. Key derivation handled inside FIPS 140-3 HSM boundary with QRNG entropy.', rq: 'CloudHSM + RQSP' },
  { title: 'Data-at-Rest Encryption', summary: 'AES-256-GCM wrapped by ML-KEM hybrid encryption. Protects data stored for 50+ year lifespan from future quantum decryption (HNDL). QBOM risk scoring included.', rq: 'CloudHSM + QBOM' },
  { title: 'Code Signing & CI/CD', summary: 'ML-DSA-65 signatures for software artifacts. Post-quantum trust in your supply chain, with HSM-backed key rotation policies and CBOM/QBOM verification.', rq: 'CBOM Scanner + SDK + CloudHSM' },
  { title: 'Regulatory Compliance', summary: 'Automated CBOM and QBOM generation for DORA/NIS2/NIST audits. Encryption posture analysis, gap assessment, remediation planning with Q-score prioritization.', rq: 'CBOM Scanner + QBOM' },
  { title: 'TLS / mTLS Encryption', summary: 'Hybrid classical + PQ key exchange in TLS 1.3 using X25519Kyber768. Multi-CA cert chains bridging pre-PQ and PQ PKI. HSM-terminated mTLS.', rq: 'RQSP + CloudHSM' },
  { title: 'Encryption-as-a-Service', summary: 'REST/gRPC API for on-demand PQC encryption. Algorithm selection (ML-KEM, AES-256, ChaCha20), key lifecycle, and FIPS 140-3 audit logging.', rq: 'CloudHSM + SDK' },
];
