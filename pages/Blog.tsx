import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Clock, ArrowRight, Shield, Cpu, Lock, Brain, AlertTriangle, 
  Database, FileCode, Globe, Search, CheckCircle2, Eye, Key, Server, Bot,
  BookOpen, ScrollText, Target, Zap
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  featured?: boolean;
  icon: React.ReactNode;
}

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'newsletter-subscription',
          email: newsletterEmail,
          name: '',
          message: 'Newsletter subscription request'
        })
      });
      if (response.ok) {
        setNewsletterSubmitted(true);
        setNewsletterEmail('');
      }
    } catch {
      alert('Something went wrong. Please try again.');
    }
  };

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'quantum', label: 'Quantum Security' },
    { id: 'ai', label: 'AI Security' },
    { id: 'hardware', label: 'Hardware Security' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'blockchain', label: 'Blockchain' },
  ];

  const posts: BlogPost[] = [
    {
      id: 'harvest-now-decrypt-later',
      title: 'Harvest Now, Decrypt Later: The Quantum Threat Already Underway',
      excerpt: 'Nation-state actors are already harvesting encrypted data today, waiting for quantum computers capable of breaking current cryptography. Learn why your data may already be compromised and how to prepare for post-quantum migration.',
      category: 'quantum',
      categoryColor: 'bg-purple-100 text-purple-600',
      date: '2026-03-28',
      readTime: '12 min',
      featured: true,
      icon: <Lock size={24} />
    },
    {
      id: 'nist-pqc-standards-2024',
      title: 'NIST Post-Quantum Cryptography Standards: A Complete Guide for 2026',
      excerpt: 'The finalization of ML-KEM, ML-DSA, and SLH-DSA marks a turning point in cryptographic infrastructure. This guide covers what enterprises need to know about transitioning to NIST-approved PQC algorithms.',
      category: 'quantum',
      categoryColor: 'bg-purple-100 text-purple-600',
      date: '2026-03-21',
      readTime: '15 min',
      icon: <Shield size={24} />
    },
    {
      id: 'llm-security-owasp-top-10',
      title: 'OWASP Top 10 for LLM Applications: Critical Vulnerabilities in 2026',
      excerpt: 'As LLM adoption accelerates, new attack vectors emerge. From prompt injection to data leakage, this comprehensive analysis covers the most critical security risks in generative AI deployments.',
      category: 'ai',
      categoryColor: 'bg-sky-100 text-sky-500',
      date: '2026-03-18',
      readTime: '14 min',
      featured: true,
      icon: <Brain size={24} />
    },
    {
      id: 'ai-supply-chain-security',
      title: 'Securing the AI Supply Chain: Model Poisoning and Training Data Attacks',
      excerpt: 'Your AI model is only as secure as its training data. Explore the emerging threat landscape of supply chain attacks targeting machine learning pipelines, including techniques for detection and prevention.',
      category: 'ai',
      categoryColor: 'bg-sky-100 text-sky-500',
      date: '2026-03-14',
      readTime: '11 min',
      icon: <Bot size={24} />
    },
    {
      id: 'hardware-security-module-hsm',
      title: 'Hardware Security Modules: The Last Line of Defense for Cryptographic Keys',
      excerpt: 'HSMs provide tamper-resistant key storage and cryptographic operations. This deep dive covers FIPS 140-3 certification requirements, deployment architectures, and integration with cloud-native environments.',
      category: 'hardware',
      categoryColor: 'bg-amber-100 text-amber-600',
      date: '2026-03-10',
      readTime: '13 min',
      icon: <Cpu size={24} />
    },
    {
      id: 'side-channel-attacks-quantum',
      title: 'Side-Channel Attacks in the Quantum Era: Timing, Power, and Electromagnetic Analysis',
      excerpt: 'Side-channel attacks remain effective against both classical and quantum implementations. Learn about differential power analysis, timing attacks, and countermeasures for hardware security.',
      category: 'hardware',
      categoryColor: 'bg-amber-100 text-amber-600',
      date: '2026-03-05',
      readTime: '16 min',
      icon: <AlertTriangle size={24} />
    },
    {
      id: 'cbom-cryptographic-bill-of-materials',
      title: 'Cryptographic Bill of Materials: The New Standard for Security Visibility',
      excerpt: 'Just as SBOM transformed software supply chain security, CBOM is emerging as essential for cryptographic asset management. Understand the framework, tools, and regulatory requirements.',
      category: 'compliance',
      categoryColor: 'bg-emerald-100 text-emerald-600',
      date: '2026-02-28',
      readTime: '10 min',
      icon: <FileCode size={24} />
    },
    {
      id: 'dora-compliance-pqc',
      title: 'DORA Compliance and Post-Quantum Cryptography: Financial Sector Requirements',
      excerpt: 'The EU Digital Operational Resilience Act mandates cryptographic agility. This guide maps DORA requirements to PQC migration strategies for financial institutions operating in Europe.',
      category: 'compliance',
      categoryColor: 'bg-emerald-100 text-emerald-600',
      date: '2026-02-22',
      readTime: '14 min',
      icon: <Globe size={24} />
    },
    {
      id: 'enterprise-crypto-agility',
      title: 'Enterprise Cryptographic Agility: Building Infrastructure for the Post-Quantum Future',
      excerpt: 'Cryptographic agility—the ability to rapidly replace algorithms—is now a business necessity. Architecture patterns and implementation strategies for enterprise-wide cryptographic modernization.',
      category: 'enterprise',
      categoryColor: 'bg-indigo-100 text-indigo-600',
      date: '2026-02-15',
      readTime: '12 min',
      icon: <Server size={24} />
    },
    {
      id: 'zero-trust-architecture',
      title: 'Zero Trust Architecture: Implementing Beyond the Perimeter in 2026',
      excerpt: 'The perimeter is dead. Zero trust principles—never trust, always verify—are essential for modern security. A practical guide to implementation, from identity to data-level controls.',
      category: 'enterprise',
      categoryColor: 'bg-indigo-100 text-indigo-600',
      date: '2026-02-10',
      readTime: '11 min',
      icon: <Shield size={24} />
    },
    {
      id: 'smart-contract-auditing',
      title: 'Smart Contract Security: From Audit to Automated Verification',
      excerpt: 'DeFi exploits continue to drain millions. This comprehensive guide covers smart contract auditing methodologies, formal verification, and integration of security into development pipelines.',
      category: 'blockchain',
      categoryColor: 'bg-cyan-100 text-cyan-600',
      date: '2026-02-05',
      readTime: '15 min',
      icon: <Database size={24} />
    },
    {
      id: 'zkp-blockchain-privacy',
      title: 'Zero-Knowledge Proofs: Enabling Privacy-Preserving Blockchain Transactions',
      excerpt: 'ZK-SNARKs and ZK-STARKs are revolutionizing blockchain privacy. Technical deep dive into cryptographic primitives, implementation challenges, and real-world applications.',
      category: 'blockchain',
      categoryColor: 'bg-cyan-100 text-cyan-600',
      date: '2026-01-30',
      readTime: '18 min',
      icon: <Key size={24} />
    },
    {
      id: 'ransomware-evolution-2026',
      title: 'Ransomware Evolution: How Attack Patterns Have Changed in 2026',
      excerpt: 'Ransomware-as-a-Service has professionalized cyber extortion. Analysis of current threat actor tactics, double-extortion strategies, and defense mechanisms that work.',
      category: 'cybersecurity',
      categoryColor: 'bg-red-100 text-red-600',
      date: '2026-01-25',
      readTime: '13 min',
      icon: <AlertTriangle size={24} />
    },
    {
      id: 'supply-chain-security',
      title: 'Software Supply Chain Security: Lessons from Recent High-Profile Attacks',
      excerpt: 'From SolarWinds to XZ Utils, supply chain attacks have reshaped the threat landscape. Effective controls, SBOM implementation, and build pipeline hardening strategies.',
      category: 'cybersecurity',
      categoryColor: 'bg-red-100 text-red-600',
      date: '2026-01-20',
      readTime: '12 min',
      icon: <Search size={24} />
    },
    {
      id: 'ai-red-teaming',
      title: 'AI Red Teaming: methodologies for Evaluating LLM Security Posture',
      excerpt: 'Offensive security testing for AI systems requires new methodologies. Frameworks for identifying vulnerabilities in large language models before adversaries do.',
      category: 'ai',
      categoryColor: 'bg-sky-100 text-sky-500',
      date: '2026-01-15',
      readTime: '14 min',
      icon: <Target size={24} />
    },
    {
      id: 'pqc-migration-roadmap',
      title: 'Building Your PQC Migration Roadmap: A Strategic Framework',
      excerpt: 'Cryptographic migration is a decade-long endeavor. Prioritization frameworks, risk assessment methodologies, and phased approaches for transitioning critical systems.',
      category: 'quantum',
      categoryColor: 'bg-purple-100 text-purple-600',
      date: '2026-01-10',
      readTime: '16 min',
      icon: <Zap size={24} />
    },
  ];

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const featuredPosts = posts.filter(post => post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-sky-100 text-sky-600 rounded-xl">
            <BookOpen size={28} />
          </div>
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">RivicQ Research & Insights</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
          Security Intelligence & Research
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          In-depth analysis of quantum security, AI vulnerabilities, hardware security, compliance frameworks, and enterprise cryptography from the RivicQ research team.
        </p>
      </header>

      {/* Featured Posts */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <div className="w-1 h-8 bg-sky-500 rounded-full"></div>
          Featured Research
        </h2>
        <div className="not-prose grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <Link 
              key={post.id}
              to="/blog"
              className="group block bg-white border border-slate-200 rounded-[2rem] p-8 hover:shadow-xl hover:border-sky-200 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-sky-50 text-sky-600 rounded-lg">
                  {post.icon}
                </div>
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${post.categoryColor}`}>
                  {post.category.replace('-', ' ')}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <span className="flex items-center gap-1 text-sky-500 font-semibold group-hover:gap-2 transition-all">
                  Read <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-sky-300 hover:text-sky-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="mb-20">
        <div className="not-prose grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.filter(p => !p.featured).map((post) => (
            <Link 
              key={post.id}
              to="/blog"
              className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-sky-200 transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-slate-50 text-slate-600 rounded-lg group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
                  {post.icon}
                </div>
                <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${post.categoryColor}`}>
                  {post.category.replace('-', ' ')}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-[10px] text-slate-400">
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="not-prose">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-technical opacity-10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Threat Landscape</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Get weekly research briefings on quantum security, AI vulnerabilities, and enterprise cryptography delivered directly to your inbox.
              </p>
              <div className="flex items-center gap-6 mt-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-sky-400" />
                  <span className="text-slate-300">Weekly Research</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-sky-400" />
                  <span className="text-slate-300">No Spam</span>
                </div>
              </div>
            </div>
            <div>
              {newsletterSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Subscribed!</h3>
                  <p className="text-slate-400">You'll receive our weekly research briefings.</p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Enter your work email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-400 transition-colors"
                  />
                  <button 
                    type="submit"
                    className="w-full py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    Subscribe to Research <ArrowRight size={16} />
                  </button>
                </form>
              )}
              <p className="text-xs text-slate-500 mt-4">
                By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Overview */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Explore Research Topics</h2>
        <div className="not-prose grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Lock size={24} className="text-purple-500" />,
              title: 'Quantum Security',
              desc: 'Post-quantum cryptography, NIST standards, migration strategies, and quantum threat analysis.',
              count: 4
            },
            {
              icon: <Brain size={24} className="text-sky-500" />,
              title: 'AI Security',
              desc: 'OWASP LLM Top 10, prompt injection, model security, and AI red teaming methodologies.',
              count: 3
            },
            {
              icon: <Cpu size={24} className="text-amber-500" />,
              title: 'Hardware Security',
              desc: 'HSM integration, side-channel attacks, FIPS certification, and root of trust.',
              count: 2
            },
            {
              icon: <ScrollText size={24} className="text-emerald-500" />,
              title: 'Compliance',
              desc: 'DORA, CBOM, regulatory frameworks, and cryptographic compliance automation.',
              count: 2
            },
            {
              icon: <Server size={24} className="text-indigo-500" />,
              title: 'Enterprise Security',
              desc: 'Zero trust, cryptographic agility, enterprise architecture, and security operations.',
              count: 2
            },
            {
              icon: <Database size={24} className="text-cyan-500" />,
              title: 'Blockchain & Web3',
              desc: 'Smart contract auditing, ZK proofs, DeFi security, and privacy-preserving protocols.',
              count: 2
            },
          ].map((topic, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="p-3 bg-slate-50 rounded-xl w-fit mb-4">
                {topic.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{topic.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">{topic.desc}</p>
              <span className="text-xs text-sky-500 font-semibold">{topic.count} articles</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-16 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        RivicQ Research • Berlin • Advancing Quantum-Safe Security
      </footer>
    </article>
  );
};

export default Blog;
