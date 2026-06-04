import { Lock, Shield, Brain, Bot, Cpu, AlertTriangle, FileCode, Globe, Server, Database, Key, Search, Target, Zap } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  featured?: boolean;
  icon: React.ReactNode;
}

export const posts: BlogPost[] = [
  {
    id: 'harvest-now-decrypt-later',
    title: 'Harvest Now, Decrypt Later: The Quantum Threat Already Underway',
    excerpt: 'Nation-state actors are already harvesting encrypted data today, waiting for quantum computers capable of breaking current cryptography. Learn why your data may already be compromised and how to prepare for post-quantum migration.',
    content: 'The threat of Harvest Now, Decrypt Later (HNDL) is not a future concern — it is happening today. Nation-state adversaries are actively collecting encrypted data with the intent to decrypt it once quantum computers become capable. This includes diplomatic communications, financial transactions, healthcare records, and intellectual property. Organizations must begin transitioning to post-quantum cryptography now to protect data that needs to remain confidential for decades.',
    category: 'quantum',
    categoryColor: 'bg-purple-100 text-purple-600',
    date: '2026-03-28',
    readTime: '12 min',
    featured: true,
    icon: <Lock size={24} aria-hidden="true" />
  },
  {
    id: 'nist-pqc-standards-2024',
    title: 'NIST Post-Quantum Cryptography Standards: A Complete Guide for 2026',
    excerpt: 'The finalization of ML-KEM, ML-DSA, and SLH-DSA marks a turning point in cryptographic infrastructure. This guide covers what enterprises need to know about transitioning to NIST-approved PQC algorithms.',
    content: 'In 2024, NIST finalized three post-quantum cryptographic standards: FIPS 203 (ML-KEM), FIPS 204 (ML-DSA), and FIPS 205 (SLH-DSA). These algorithms form the foundation of post-quantum security. Enterprises should begin inventorying their cryptographic assets and planning migration paths. The transition timeline is measured in years, and early adopters will have a significant security advantage.',
    category: 'quantum',
    categoryColor: 'bg-purple-100 text-purple-600',
    date: '2026-03-21',
    readTime: '15 min',
    icon: <Shield size={24} aria-hidden="true" />
  },
  {
    id: 'llm-security-owasp-top-10',
    title: 'OWASP Top 10 for LLM Applications: Critical Vulnerabilities in 2026',
    excerpt: 'As LLM adoption accelerates, new attack vectors emerge. From prompt injection to data leakage, this comprehensive analysis covers the most critical security risks in generative AI deployments.',
    content: 'The OWASP Top 10 for LLM Applications has become the standard reference for AI security. Key vulnerabilities include prompt injection, insecure output handling, training data poisoning, and excessive agency. Organizations deploying LLMs must implement proper input validation, output sanitization, and access controls to mitigate these risks.',
    category: 'ai',
    categoryColor: 'bg-sky-100 text-sky-500',
    date: '2026-03-18',
    readTime: '14 min',
    featured: true,
    icon: <Brain size={24} aria-hidden="true" />
  },
  {
    id: 'ai-supply-chain-security',
    title: 'Securing the AI Supply Chain: Model Poisoning and Training Data Attacks',
    excerpt: 'Your AI model is only as secure as its training data. Explore the emerging threat landscape of supply chain attacks targeting machine learning pipelines, including techniques for detection and prevention.',
    content: 'AI supply chain attacks target the model development pipeline — from training data collection to model deployment. Attackers can poison training data, insert backdoors, or compromise model registries. Defenses include data provenance tracking, model validation, and continuous monitoring for drift.',
    category: 'ai',
    categoryColor: 'bg-sky-100 text-sky-500',
    date: '2026-03-14',
    readTime: '11 min',
    icon: <Bot size={24} aria-hidden="true" />
  },
  {
    id: 'hardware-security-module-hsm',
    title: 'Hardware Security Modules: The Last Line of Defense for Cryptographic Keys',
    excerpt: 'HSMs provide tamper-resistant key storage and cryptographic operations. This deep dive covers FIPS 140-3 certification requirements, deployment architectures, and integration with cloud-native environments.',
    content: 'Hardware Security Modules (HSMs) are the gold standard for cryptographic key protection. FIPS 140-3 Level 3 certification requires tamper-responsive mechanisms that zeroize key material upon intrusion. Modern HSMs support cloud deployment models and API-driven key management.',
    category: 'hardware',
    categoryColor: 'bg-amber-100 text-amber-600',
    date: '2026-03-10',
    readTime: '13 min',
    icon: <Cpu size={24} aria-hidden="true" />
  },
  {
    id: 'side-channel-attacks-quantum',
    title: 'Side-Channel Attacks in the Quantum Era: Timing, Power, and Electromagnetic Analysis',
    excerpt: 'Side-channel attacks remain effective against both classical and quantum implementations. Learn about differential power analysis, timing attacks, and countermeasures for hardware security.',
    content: 'Side-channel attacks exploit physical characteristics of cryptographic implementations. Differential Power Analysis (DPA), timing analysis, and electromagnetic emission monitoring can reveal secret keys. Countermeasures include constant-time implementations, noise injection, and physical shielding.',
    category: 'hardware',
    categoryColor: 'bg-amber-100 text-amber-600',
    date: '2026-03-05',
    readTime: '16 min',
    icon: <AlertTriangle size={24} aria-hidden="true" />
  },
  {
    id: 'cbom-cryptographic-bill-of-materials',
    title: 'Cryptographic Bill of Materials: The New Standard for Security Visibility',
    excerpt: 'Just as SBOM transformed software supply chain security, CBOM is emerging as essential for cryptographic asset management. Understand the framework, tools, and regulatory requirements.',
    content: 'A Cryptographic Bill of Materials (CBOM) catalogs every cryptographic algorithm, key, certificate, and protocol across an organization. It extends the SBOM concept to crypto assets, enabling vulnerability assessment, compliance reporting, and migration planning.',
    category: 'compliance',
    categoryColor: 'bg-emerald-100 text-emerald-600',
    date: '2026-02-28',
    readTime: '10 min',
    icon: <FileCode size={24} aria-hidden="true" />
  },
  {
    id: 'dora-compliance-pqc',
    title: 'DORA Compliance and Post-Quantum Cryptography: Financial Sector Requirements',
    excerpt: 'The EU Digital Operational Resilience Act mandates cryptographic agility. This guide maps DORA requirements to PQC migration strategies for financial institutions operating in Europe.',
    content: 'The Digital Operational Resilience Act (DORA) requires financial institutions to maintain cryptographic agility and state-of-the-art encryption. Article 9 specifically mandates the ability to respond to cryptographic threats. Compliance requires CBOM visibility, algorithm diversity, and documented migration procedures.',
    category: 'compliance',
    categoryColor: 'bg-emerald-100 text-emerald-600',
    date: '2026-02-22',
    readTime: '14 min',
    icon: <Globe size={24} aria-hidden="true" />
  },
  {
    id: 'enterprise-crypto-agility',
    title: 'Enterprise Cryptographic Agility: Building Infrastructure for the Post-Quantum Future',
    excerpt: 'Cryptographic agility — the ability to rapidly replace algorithms — is now a business necessity. Architecture patterns and implementation strategies for enterprise-wide cryptographic modernization.',
    content: 'Cryptographic agility is the ability to switch algorithms without major infrastructure changes. Key enablers include abstracted crypto interfaces, automated key rotation, and centralized policy management. A crypto-agile architecture reduces migration time from years to weeks.',
    category: 'enterprise',
    categoryColor: 'bg-indigo-100 text-indigo-600',
    date: '2026-02-15',
    readTime: '12 min',
    icon: <Server size={24} aria-hidden="true" />
  },
  {
    id: 'zero-trust-architecture',
    title: 'Zero Trust Architecture: Implementing Beyond the Perimeter in 2026',
    excerpt: 'The perimeter is dead. Zero trust principles — never trust, always verify — are essential for modern security. A practical guide to implementation, from identity to data-level controls.',
    content: 'Zero Trust Architecture assumes no implicit trust based on network location. Every access request must be authenticated, authorized, and encrypted. Implementation spans identity management, device health, network segmentation, and data-level controls.',
    category: 'enterprise',
    categoryColor: 'bg-indigo-100 text-indigo-600',
    date: '2026-02-10',
    readTime: '11 min',
    icon: <Shield size={24} aria-hidden="true" />
  },
  {
    id: 'smart-contract-auditing',
    title: 'Smart Contract Security: From Audit to Automated Verification',
    excerpt: 'DeFi exploits continue to drain millions. This comprehensive guide covers smart contract auditing methodologies, formal verification, and integration of security into development pipelines.',
    content: 'Smart contract security requires multiple layers: manual code review, automated static analysis, formal verification, and runtime monitoring. Common vulnerabilities include reentrancy, integer overflow, and access control flaws.',
    category: 'blockchain',
    categoryColor: 'bg-cyan-100 text-cyan-600',
    date: '2026-02-05',
    readTime: '15 min',
    icon: <Database size={24} aria-hidden="true" />
  },
  {
    id: 'zkp-blockchain-privacy',
    title: 'Zero-Knowledge Proofs: Enabling Privacy-Preserving Blockchain Transactions',
    excerpt: 'ZK-SNARKs and ZK-STARKs are revolutionizing blockchain privacy. Technical deep dive into cryptographic primitives, implementation challenges, and real-world applications.',
    content: 'Zero-Knowledge Proofs allow one party to prove knowledge of a fact without revealing the fact itself. ZK-SNARKs offer succinct proofs ideal for blockchain, while ZK-STARKs eliminate the trusted setup requirement at the cost of larger proof sizes.',
    category: 'blockchain',
    categoryColor: 'bg-cyan-100 text-cyan-600',
    date: '2026-01-30',
    readTime: '18 min',
    icon: <Key size={24} aria-hidden="true" />
  },
  {
    id: 'ransomware-evolution-2026',
    title: 'Ransomware Evolution: How Attack Patterns Have Changed in 2026',
    excerpt: 'Ransomware-as-a-Service has professionalized cyber extortion. Analysis of current threat actor tactics, double-extortion strategies, and defense mechanisms that work.',
    content: 'Ransomware has evolved into a mature criminal enterprise. RaaS platforms offer affiliate programs, technical support, and negotiated payment portals. Double extortion — encrypting data plus threatening to leak it — has become the standard.',
    category: 'cybersecurity',
    categoryColor: 'bg-red-100 text-red-600',
    date: '2026-01-25',
    readTime: '13 min',
    icon: <AlertTriangle size={24} aria-hidden="true" />
  },
  {
    id: 'supply-chain-security',
    title: 'Software Supply Chain Security: Lessons from Recent High-Profile Attacks',
    excerpt: 'From SolarWinds to XZ Utils, supply chain attacks have reshaped the threat landscape. Effective controls, SBOM implementation, and build pipeline hardening strategies.',
    content: 'Supply chain attacks target the trust relationships between software producers and consumers. The SolarWinds and XZ Utils incidents demonstrated that a single compromised dependency can affect thousands of organizations. SBOMs, signed commits, and reproducible builds are essential defenses.',
    category: 'cybersecurity',
    categoryColor: 'bg-red-100 text-red-600',
    date: '2026-01-20',
    readTime: '12 min',
    icon: <Search size={24} aria-hidden="true" />
  },
  {
    id: 'ai-red-teaming',
    title: 'AI Red Teaming: Methodologies for Evaluating LLM Security Posture',
    excerpt: 'Offensive security testing for AI systems requires new methodologies. Frameworks for identifying vulnerabilities in large language models before adversaries do.',
    content: 'AI red teaming adapts traditional penetration testing to the unique challenges of LLMs. It covers prompt injection, jailbreaking, data extraction, and model inversion attacks. Automated red teaming tools and structured evaluation frameworks help identify vulnerabilities before deployment.',
    category: 'ai',
    categoryColor: 'bg-sky-100 text-sky-500',
    date: '2026-01-15',
    readTime: '14 min',
    icon: <Target size={24} aria-hidden="true" />
  },
  {
    id: 'pqc-migration-roadmap',
    title: 'Building Your PQC Migration Roadmap: A Strategic Framework',
    excerpt: 'Cryptographic migration is a decade-long endeavor. Prioritization frameworks, risk assessment methodologies, and phased approaches for transitioning critical systems.',
    content: 'PQC migration should follow a phased approach: discovery and inventory, risk assessment, pilot deployment, and full migration. Prioritize systems with long-term data confidentiality requirements and those subject to regulatory deadlines.',
    category: 'quantum',
    categoryColor: 'bg-purple-100 text-purple-600',
    date: '2026-01-10',
    readTime: '16 min',
    icon: <Zap size={24} aria-hidden="true" />
  }
];

export const categories = [
  { id: 'all', label: 'All Posts' },
  { id: 'quantum', label: 'Quantum Security' },
  { id: 'ai', label: 'AI Security' },
  { id: 'hardware', label: 'Hardware Security' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'enterprise', label: 'Enterprise' },
  { id: 'blockchain', label: 'Blockchain' },
];
