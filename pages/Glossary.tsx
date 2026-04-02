import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Search, ChevronRight, Copy, Check, ExternalLink, Filter } from 'lucide-react';

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
};

interface GlossaryEntry {
  term: string;
  category: string;
  definition: string;
  related?: string[];
  example?: string;
}

const Glossary: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copiedTerm, setCopiedTerm] = useState<string | null>(null);

  const entries: GlossaryEntry[] = [
    // NIST PQC Standards
    { 
      term: 'ML-KEM (Kyber)', 
      category: 'NIST PQC Standards',
      definition: 'Module-Lattice Key Encapsulation Mechanism (FIPS 203). The NIST-standardized algorithm for secure key exchange in post-quantum environments. Based on the Learning With Errors (LWE) problem over module lattices.',
      related: ['ML-DSA', 'Key Encapsulation', 'Lattice Cryptography'],
      example: 'Replacing RSA or ECDH for establishing shared secrets in TLS 1.3.'
    },
    { 
      term: 'ML-DSA (Dilithium)', 
      category: 'NIST PQC Standards',
      definition: 'Module-Lattice Digital Signature Algorithm (FIPS 204). The NIST-standardized algorithm for digital signatures, providing authentication and integrity verification in post-quantum systems.',
      related: ['ML-KEM', 'Digital Signatures', 'Lattice Cryptography'],
      example: 'Signing software updates, code commits, and authentication certificates.'
    },
    { 
      term: 'SLH-DSA (SPHINCS+)', 
      category: 'NIST PQC Standards',
      definition: 'Stateless Hash-Based Digital Signature Algorithm (FIPS 205). Based solely on hash functions, providing a conservative alternative to lattice-based signatures with minimal cryptographic assumptions.',
      related: ['ML-DSA', 'Hash-based Signatures', 'Post-Quantum Signatures']
    },
    { 
      term: 'FIPS 203, 204, 205', 
      category: 'NIST PQC Standards',
      definition: 'The three finalized NIST post-quantum cryptography standards: FIPS 203 (ML-KEM), FIPS 204 (ML-DSA), and FIPS 205 (SLH-DSA). These form the foundation of the post-quantum cryptographic ecosystem.',
      related: ['ML-KEM', 'ML-DSA', 'SLH-DSA']
    },

    // Cryptographic Concepts
    { 
      term: 'Key Encapsulation Mechanism (KEM)', 
      category: 'Cryptographic Concepts',
      definition: 'A cryptographic primitive for establishing shared secrets between parties over public channels. Unlike key exchange protocols, KEMs separate the encapsulation of the key from its decapsulation.',
      related: ['ML-KEM', 'Key Exchange', 'Hybrid Encryption']
    },
    { 
      term: 'Digital Signature', 
      category: 'Cryptographic Concepts',
      definition: 'A cryptographic mechanism for verifying the authenticity and integrity of digital messages or documents. Provides non-repudiation, ensuring the signer cannot deny their signature.',
      related: ['ML-DSA', 'Authentication', 'Non-Repudiation'],
      example: 'Code signing, document signing, TLS certificates.'
    },
    { 
      term: 'Lattice Cryptography', 
      category: 'Cryptographic Concepts',
      definition: 'A class of cryptographic primitives based on the hardness of mathematical problems involving geometric lattices. Considered resistant to both classical and quantum attacks.',
      related: ['ML-KEM', 'ML-DSA', 'NTRU', 'Ring-LWE'],
      example: 'The mathematical foundation for Kyber and Dilithium.'
    },
    { 
      term: 'Zero-Knowledge Proof (ZKP)', 
      category: 'Cryptographic Concepts',
      definition: 'A cryptographic protocol enabling one party to prove knowledge of a fact without revealing the fact itself. Essential for privacy-preserving authentication and blockchain privacy.',
      related: ['ZK-SNARKs', 'Selective Disclosure', 'Privacy'],
      example: 'Proving you have sufficient funds without revealing your account balance.'
    },
    { 
      term: 'ZK-SNARKs', 
      category: 'Cryptographic Concepts',
      definition: 'Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge. A type of zero-knowledge proof that is short (succinct) and non-interactive, widely used in blockchain applications.',
      related: ['Zero-Knowledge Proof', 'Blockchain Privacy', 'Groth16'],
      example: 'Zcash private transactions, Ethereum Layer 2 rollups.'
    },

    // Hardware Security
    { 
      term: 'HSM (Hardware Security Module)', 
      category: 'Hardware Security',
      definition: 'A physical computing device that safeguards and manages digital keys in a tamper-resistant hardware appliance. Provides cryptographic processing, key storage, and access controls.',
      related: ['FIPS 140-3', 'Root of Trust', 'Key Management'],
      example: 'Thales Luna HSM, AWS CloudHSM, RivicQ Cloud vHSM.'
    },
    { 
      term: 'FIPS 140-3 Level 3', 
      category: 'Hardware Security',
      definition: 'A US Government standard specifying security requirements for cryptographic modules. Level 3 requires tamper-responsive mechanisms that zeroize key material upon physical intrusion detection.',
      related: ['HSM', 'Cryptographic Module', 'NIST'],
      example: 'Required certification for HSMs used in banking, healthcare, and government applications.'
    },
    { 
      term: 'Root of Trust (RoT)', 
      category: 'Hardware Security',
      definition: 'A set of inherently trusted cryptographic components upon which all other trust in a system is built. Typically implemented in hardware to prevent software-based attacks.',
      related: ['HSM', 'TPM', 'Secure Boot', 'FIPS 140-3'],
      example: 'The immutable boot ROM that verifies the first stage bootloader.'
    },
    { 
      term: 'Side-Channel Attack', 
      category: 'Hardware Security',
      definition: 'An attack that exploits physical characteristics of cryptographic implementations, such as power consumption, electromagnetic emissions, timing, or acoustic patterns, to extract secret keys.',
      related: ['DPA', 'Timing Attack', 'Fault Injection'],
      example: 'Differential Power Analysis extracting RSA private keys from smartcard operations.'
    },
    { 
      term: 'DPA (Differential Power Analysis)', 
      category: 'Hardware Security',
      definition: 'A side-channel attack that analyzes power consumption variations during cryptographic operations to extract secret keys. Requires statistical analysis of many encryption operations.',
      related: ['Side-Channel Attack', 'Power Analysis', 'EM Analysis'],
      example: 'Extracting ECDSA signing keys by measuring current draw during scalar multiplication.'
    },
    { 
      term: 'Fault Injection Attack', 
      category: 'Hardware Security',
      definition: 'An attack that deliberately induces faults (voltage glitches, clock manipulation, laser exposure) in cryptographic hardware to bypass security checks or reveal secret material.',
      related: ['Side-Channel Attack', 'Tamper Resistance', 'Fault Attacks'],
      example: 'Skipping a signature verification step by inducing a glitch during the check.'
    },

    // Quantum Computing Threats
    { 
      term: "Shor's Algorithm", 
      category: 'Quantum Threats',
      definition: "A quantum algorithm that efficiently factors large integers and computes discrete logarithms, thereby breaking RSA, DSA, and ECC cryptography. Requires a sufficiently powerful quantum computer.",
      related: ['Grover Algorithm', 'Quantum Threat', 'Cryptanalysis'],
      example: 'Breaking 2048-bit RSA would require ~4,000 logical qubits.'
    },
    { 
      term: "Grover's Algorithm", 
      category: 'Quantum Threats',
      definition: "A quantum search algorithm that provides quadratic speedup for brute-force searches. Reduces the effective security of symmetric encryption from n bits to n/2 bits.",
      related: ["Shor's Algorithm", 'Quantum Cryptanalysis', 'AES'],
      example: 'Would reduce AES-128 effective security to ~64 bits.'
    },
    { 
      term: 'Harvest Now, Decrypt Later (HNDL)', 
      category: 'Quantum Threats',
      definition: 'A threat strategy where adversaries collect encrypted data today with the intent to decrypt it in the future when quantum computers become sufficiently powerful.',
      related: ['Quantum Threat', 'Cryptographic Agility', 'PQC Migration'],
      example: 'Nation-state actors archiving encrypted diplomatic communications for future decryption.'
    },
    { 
      term: 'Quantum Threat Timeline', 
      category: 'Quantum Threats',
      definition: 'The estimated timeframe when quantum computers will be capable of breaking current cryptographic standards. Most experts estimate 10-20 years for cryptographically relevant quantum computers.',
      related: ['HNDL', 'PQC Migration', 'Cryptographic Agility'],
      example: 'NSA guidance recommends migration to PQC by 2030.'
    },

    // Compliance & Standards
    { 
      term: 'Crypto-Agility', 
      category: 'Compliance & Standards',
      definition: 'The architectural capability to switch between cryptographic algorithms without significant changes to system infrastructure. Essential for responding to algorithm compromises or standard updates.',
      related: ['Cryptographic Inventory', 'CBOM', 'Algorithm Migration'],
      example: 'Hot-swapping RSA for ML-KEM in TLS without application code changes.'
    },
    { 
      term: 'CBOM (Cryptographic Bill of Materials)', 
      category: 'Compliance & Standards',
      definition: 'An inventory of all cryptographic algorithms, keys, certificates, and protocols used across an organization. Similar to SBOM but for cryptographic assets.',
      related: ['Crypto-Agility', 'Cryptographic Inventory', 'DORA'],
      example: 'Discovering all RSA-1024 keys in your codebase for PQC migration planning.'
    },
    { 
      term: 'DORA (Digital Operational Resilience Act)', 
      category: 'Compliance & Standards',
      definition: 'EU regulation requiring financial institutions to ensure ICT security and operational resilience. Article 9 mandates cryptographic agility and state-of-the-art encryption.',
      related: ['CBOM', 'Crypto-Agility', 'EU Regulation'],
      example: 'Enforcement began January 2025 with fines up to 2% of global turnover.'
    },
    { 
      term: 'CNSA 2.0 (Commercial National Security Algorithm Suite)', 
      category: 'Compliance & Standards',
      definition: 'NSA specification requiring post-quantum algorithms for national security systems. Mandates ML-KEM, ML-DSA, and SLH-DSA for software and firmware by 2030.',
      related: ['NIST PQC', 'FIPS 203', 'Government Compliance'],
      example: 'Required for defense contractors and critical infrastructure operators.'
    },
    { 
      term: 'NIS2 Directive', 
      category: 'Compliance & Standards',
      definition: 'EU directive on measures for a high common level of cybersecurity across the Union. Requires appropriate security measures including cryptographic controls for essential entities.',
      related: ['DORA', 'CBOM', 'EU Regulation'],
      example: 'Energy, transport, banking, and healthcare sectors.'
    },

    // AI Security
    { 
      term: 'AI Security Agent', 
      category: 'AI Security',
      definition: 'Autonomous AI systems that can plan, reason, and execute security operations such as threat detection, vulnerability scanning, and incident response.',
      related: ['LLM Security', 'Autonomous Security', 'AI Red Teaming'],
      example: 'An AI agent that continuously monitors for cryptographic vulnerabilities.'
    },
    { 
      term: 'Prompt Injection', 
      category: 'AI Security',
      definition: 'A security vulnerability where attackers manipulate AI system inputs through carefully crafted prompts to override instructions or extract sensitive information.',
      related: ['AI Security Agent', 'LLM Security', 'Input Validation'],
      example: 'Embedding malicious instructions in a document that an AI agent processes.'
    },
    { 
      term: 'LLM Security', 
      category: 'AI Security',
      definition: 'The practice of securing large language models against attacks including prompt injection, data poisoning, model extraction, and adversarial inputs.',
      related: ['Prompt Injection', 'AI Security Agent', 'Model Security'],
      example: 'Preventing an LLM from revealing system prompts or training data.'
    },

    // Blockchain & Privacy
    { 
      term: 'RivicQ Secure Protocol (RQSP)', 
      category: 'Blockchain & Privacy',
      definition: "RivicQ's privacy protocol enabling confidential blockchain transactions using zero-knowledge proofs. Built on ZK-SNARKs with Groth16 proving system.",
      related: ['ZK-SNARKs', 'Privacy', 'Blockchain'],
      example: 'Private token transfers on Ethereum maintaining regulatory compliance.'
    },
    { 
      term: 'Selective Disclosure', 
      category: 'Blockchain & Privacy',
      definition: 'A privacy mechanism allowing verification of specific attributes without revealing full data. Enables compliance with KYC requirements while preserving user privacy.',
      related: ['Zero-Knowledge Proof', 'Privacy', 'DORA'],
      example: 'Proving age is over 18 without revealing birthdate.'
    },
    { 
      term: 'MPC (Multi-Party Computation)', 
      category: 'Blockchain & Privacy',
      definition: 'Cryptographic techniques enabling multiple parties to jointly compute a function over their inputs without revealing those inputs to each other.',
      related: ['Zero-Knowledge Proof', 'Privacy', 'Threshold Signatures'],
      example: 'Multiple executives signing a transaction without any single party knowing the full key.'
    }
  ];

  const categories = [...new Set(entries.map(e => e.category))].sort();
  
  const filteredEntries = entries.filter(entry => {
    const matchesSearch = entry.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         entry.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         entry.related?.some(r => r.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || entry.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopy = (term: string) => {
    const entry = entries.find(e => e.term === term);
    if (entry) {
      navigator.clipboard.writeText(`${term}: ${entry.definition}`);
      setCopiedTerm(term);
      setTimeout(() => setCopiedTerm(null), 2000);
    }
  };

  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <BookOpen size={14} /> Reference Guide
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
            Glossary of <span className="text-sky-500">Terms</span>
          </h1>
          <p className="text-xl text-slate-500 font-serif italic max-w-2xl leading-relaxed">
            The comprehensive technical lexicon of Post-Quantum Cryptography, Hardware Security, AI Security, and Modern Enterprise Infrastructure.
          </p>
        </AnimatedSection>
      </header>

      {/* Search & Filter */}
      <AnimatedSection delay={100}>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              placeholder="Search terms, definitions, related concepts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-300 transition-all"
            />
          </div>
          <select 
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="px-4 py-4 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-sky-500/20 transition-all"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </AnimatedSection>

      {/* Stats */}
      <AnimatedSection delay={150}>
        <div className="flex flex-wrap gap-4 mb-12 text-sm">
          <span className="px-4 py-2 bg-slate-100 rounded-full">
            <strong className="text-slate-900">{entries.length}</strong> terms
          </span>
          <span className="px-4 py-2 bg-slate-100 rounded-full">
            <strong className="text-slate-900">{categories.length}</strong> categories
          </span>
          <span className="px-4 py-2 bg-sky-50 text-sky-600 rounded-full">
            <strong>{filteredEntries.length}</strong> matching your search
          </span>
        </div>
      </AnimatedSection>

      {/* Entries */}
      <div className="space-y-0">
        {filteredEntries.map((entry, i) => (
          <AnimatedSection key={entry.term} delay={i * 50}>
            <div className="py-8 border-b border-slate-100 group hover:bg-slate-50/50 -mx-6 px-6 transition-colors">
              <div className="flex items-start gap-6">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest bg-sky-50 px-2 py-0.5 rounded-full">
                      {entry.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-sky-500 transition-colors">
                    {entry.term}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {entry.definition}
                  </p>
                  {entry.example && (
                    <div className="flex items-start gap-2 mb-4">
                      <span className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">Example:</span>
                      <span className="text-sm text-slate-500 italic">{entry.example}</span>
                    </div>
                  )}
                  {entry.related && entry.related.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Related:</span>
                      {entry.related.map(term => (
                        <button 
                          key={term}
                          onClick={() => setSearchQuery(term)}
                          className="text-[10px] font-mono font-bold text-sky-500 bg-sky-50 px-2 py-0.5 rounded hover:bg-sky-100 transition-colors"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => handleCopy(entry.term)}
                  className="shrink-0 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all"
                  title="Copy to clipboard"
                >
                  {copiedTerm === entry.term ? <Check size={18} className="text-emerald-600" /> : <Copy size={18} />}
                </button>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {filteredEntries.length === 0 && (
        <div className="text-center py-16 bg-slate-50 rounded-3xl">
          <Search size={48} className="mx-auto text-slate-300 mb-4" />
          <h3 className="text-xl font-bold text-slate-700 mb-2">No terms found</h3>
          <p className="text-slate-500">Try adjusting your search or category filter</p>
        </div>
      )}

      {/* CTA */}
      <AnimatedSection>
        <section className="mt-20 not-prose bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-4 text-white">Need More Context?</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Explore our detailed technical documentation and compliance guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@rivicq.de" className="px-8 py-4 bg-sky-500 text-white font-bold rounded-xl hover:bg-sky-500 transition-all">
              Request Technical Docs
            </a>
            <Link to="/resources" className="px-8 py-4 border border-slate-700 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
              View Resources
            </Link>
          </div>
        </section>
      </AnimatedSection>

      <footer className="mt-16 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        RivicQ Glossary • Last Updated: April 2026
      </footer>
    </article>
  );
};

export default Glossary;
