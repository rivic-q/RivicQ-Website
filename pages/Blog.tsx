import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag, Search, Clock, Eye, Lock, Shield, Cpu, Bot, Zap, Brain, Terminal, ChevronDown, Filter } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: React.ReactNode;
  tags: string[];
  category: 'cybersecurity' | 'quantum' | 'ai-security' | 'hardware' | 'company';
  featured?: boolean;
}

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

const CategoryBadge: React.FC<{ category: string }> = ({ category }) => {
  const colors: Record<string, string> = {
    'cybersecurity': 'bg-blue-100 text-blue-700 border-blue-200',
    'quantum': 'bg-purple-100 text-purple-700 border-purple-200',
    'ai-security': 'bg-cyan-100 text-cyan-700 border-cyan-200',
    'hardware': 'bg-amber-100 text-amber-700 border-amber-200',
    'company': 'bg-emerald-100 text-emerald-700 border-emerald-200'
  };
  return (
    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider ${colors[category] || colors['company']}`}>
      {category.replace('-', ' ')}
    </span>
  );
};

const BlogPostCard: React.FC<{ post: BlogPost; featured?: boolean }> = ({ post, featured }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  if (featured) {
    return (
      <AnimatedSection delay={0}>
        <div 
          className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] overflow-hidden group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 bg-technical opacity-20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
          
          <div className="relative p-10 md:p-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <CategoryBadge category={post.category} />
                <span className="flex items-center gap-1 text-[10px] text-slate-400">
                  <Clock size={10} /> {post.readTime}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 font-serif italic">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar size={14} />
                  {post.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <User size={14} />
                  {post.author}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.slice(0, 4).map(tag => (
                  <span key={tag} className="text-[10px] font-mono font-bold text-blue-400 bg-blue-950/50 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-800/50">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-slate-300 text-sm leading-relaxed">
                {post.content}
              </div>
              <Link 
                to={`/blog/${post.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-500 transition-all mt-4 group/link"
              >
                Read Full Article <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection delay={100}>
      <article 
        className="bg-white border border-slate-100 rounded-[2rem] p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center gap-3 mb-4">
          <CategoryBadge category={post.category} />
          <span className="flex items-center gap-1 text-[10px] text-slate-400">
            <Clock size={10} /> {post.readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
          {post.title}
        </h3>
        
        <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[9px] font-mono font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
            <span className="flex items-center gap-1"><User size={10} /> {post.author}</span>
          </div>
          <Link 
            to={`/blog/${post.id}`}
            className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-slate-900 transition-colors group/tag"
          >
            Read <ArrowRight size={12} className="group-hover/tag:translate-x-1 transition-transform" />
          </Link>
        </div>
      </article>
    </AnimatedSection>
  );
};

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const posts: BlogPost[] = [
    {
      id: 'harvest-now-decrypt-later',
      title: 'The Harvest Now, Decrypt Later Threat: Why Your Data Is Already at Risk',
      date: 'Mar 28, 2026',
      readTime: '8 min read',
      author: 'Revan Ande',
      excerpt: 'Nation-state actors are collecting encrypted data today with the explicit intent to decrypt it once quantum computers become powerful enough. Your data from 2024 might already be compromised.',
      category: 'quantum',
      featured: true,
      tags: ['HNDL', 'Quantum Threat', 'Data Security', 'PQC Migration'],
      content: 'The "Harvest Now, Decrypt Later" (HNDL) attack strategy represents one of the most insidious threats in the quantum computing era. Adversaries, particularly nation-state actors, are actively harvesting encrypted communications and storing them for future decryption. This means that sensitive data encrypted today—health records, financial transactions, state secrets—could be exposed within the next decade. The time to migrate to post-quantum cryptography is now, not when quantum computers arrive.'
    },
    {
      id: 'side-channel-attacks',
      title: 'Side-Channel Attacks: When Your Encryption Leaks Through Power Consumption',
      date: 'Mar 22, 2026',
      readTime: '12 min read',
      author: 'Dr. Sarah Chen',
      excerpt: 'Even mathematically perfect encryption can fail if attackers can measure your hardware\'s power consumption, electromagnetic emissions, or timing. Understanding side-channel attacks is critical for hardware security.',
      category: 'hardware',
      tags: ['Side-Channel', 'Hardware Security', 'HSM', 'FIPS 140-3'],
      content: 'Side-channel attacks exploit physical characteristics of cryptographic implementations rather than mathematical weaknesses. Differential Power Analysis (DPA) can extract RSA private keys by analyzing power consumption patterns during decryption operations. Electromagnetic emissions from smartcards have been used to recover encryption keys from meters away. At RivicQ, our FIPS 140-3 Level 3 certified HSMs implement constant-time algorithms, power smoothing, and electromagnetic shielding to counter these attacks.'
    },
    {
      id: 'ai-security-agents',
      title: 'Securing AI Agents: The New Attack Surface in Enterprise Security',
      date: 'Mar 18, 2026',
      readTime: '10 min read',
      author: 'Pratik Rughe',
      excerpt: 'AI agents that can browse the web, execute code, and access APIs create unprecedented security risks. Prompt injection, agent hijacking, and memory poisoning are real threats that require new defensive strategies.',
      category: 'ai-security',
      tags: ['AI Security', 'LLM', 'Prompt Injection', 'Agent Security'],
      content: 'The emergence of AI agents—systems that can autonomously plan, browse, and execute actions—introduces a novel attack surface that traditional security tools are not equipped to handle. Prompt injection attacks can manipulate an AI agent\'s behavior through carefully crafted inputs. Agent-to-agent communication channels can be intercepted or spoofed. Memory poisoning occurs when an attacker embeds malicious context that persists across conversations. Defending AI agents requires a combination of input validation, sandboxing, cryptographic attestation of agent identities, and continuous behavioral monitoring.'
    },
    {
      id: 'quantum-key-distribution',
      title: 'Quantum Key Distribution vs PQC: Which is Right for Your Organization?',
      date: 'Mar 12, 2026',
      readTime: '15 min read',
      author: 'Prof. Jean-Pierre Seifert',
      excerpt: 'QKD and PQC represent two fundamentally different approaches to quantum-safe security. QKD uses physics, PQC uses mathematics. Understanding their trade-offs is essential for strategic security planning.',
      category: 'quantum',
      tags: ['QKD', 'PQC', 'Cryptography', 'NIST Standards'],
      content: 'Post-quantum cryptography (PQC) and quantum key distribution (QKD) are both approaches to achieving quantum-safe security, but they differ fundamentally. PQC relies on mathematical problems believed to be hard for both classical and quantum computers, making it software-implementable and compatible with existing infrastructure. QKD uses quantum mechanical properties to detect eavesdropping but requires specialized hardware and dedicated fiber networks. For most organizations, NIST-standardized PQC algorithms like ML-KEM and ML-DSA offer the practical path forward, with hybrid deployments providing defense-in-depth during the transition period.'
    },
    {
      id: 'cbom-compliance',
      title: 'Why Every Enterprise Needs a Cryptographic Bill of Materials (CBOM)',
      date: 'Mar 5, 2026',
      readTime: '7 min read',
      author: 'Danush Reddy Mutyala',
      excerpt: 'Just as software bills of materials transformed vulnerability management, cryptographic bills of materials will become essential for post-quantum compliance. Start inventorying your crypto assets today.',
      category: 'cybersecurity',
      tags: ['CBOM', 'Compliance', 'DORA', 'NIST', 'Inventory'],
      content: 'The Cryptographic Bill of Materials (CBOM) is an emerging compliance requirement that catalogs all cryptographic algorithms, keys, certificates, and protocols used across an organization\'s infrastructure. Similar to how SBOMs revolutionized software supply chain security, CBOMs will become mandatory under frameworks like DORA, NIS2, and CNSA 2.0. Without a comprehensive CBOM, organizations cannot accurately assess their quantum exposure or prioritize migration efforts. RivicQ\'s automated CBOM scanning can discover and track thousands of cryptographic assets across codebases, containers, and cloud environments in minutes.'
    },
    {
      id: 'zero-knowledge-proofs',
      title: 'Zero-Knowledge Proofs: Enabling Privacy Without Sacrificing Compliance',
      date: 'Feb 26, 2026',
      readTime: '11 min read',
      author: 'Revan Ande',
      excerpt: 'Zero-knowledge proofs allow you to prove knowledge of a fact without revealing the fact itself. In enterprise applications, this enables selective disclosure for regulatory compliance while maintaining absolute privacy.',
      category: 'cybersecurity',
      tags: ['ZKP', 'Privacy', 'Compliance', 'ZK-SNARKs'],
      content: 'Zero-knowledge proofs (ZKPs) are cryptographic protocols that enable one party to prove to another that a statement is true without revealing any information beyond the validity of the statement itself. In blockchain applications, ZKPs allow transactions to be verified without exposing sender, receiver, or amount—providing privacy while maintaining network integrity. For enterprise compliance, ZKPs enable selective disclosure: proving you meet minimum balance requirements without revealing your actual account balance, or confirming identity without exposing personal data. The RivicQ Privacy Protocol (RQSP) implements ZK-SNARKs with Groth16 proofs for efficient verification.'
    },
    {
      id: 'hardware-security-modules',
      title: 'Hardware Security Modules: The Root of Trust in Your Security Architecture',
      date: 'Feb 19, 2026',
      readTime: '9 min read',
      author: 'Dr. Sarah Chen',
      excerpt: 'HSMs are tamper-resistant hardware devices that generate, store, and manage cryptographic keys. Understanding HSM security levels and certifications is essential for any security-sensitive organization.',
      category: 'hardware',
      tags: ['HSM', 'FIPS 140-3', 'Root of Trust', 'Key Management'],
      content: 'Hardware Security Modules (HSMs) serve as the root of trust in enterprise security architectures. These tamper-resistant devices are designed to resist physical attacks, with FIPS 140-3 Level 3 and Level 4 certifications requiring extensive testing for boundary penetration, fault induction, and side-channel analysis. Modern cloud-based virtual HSMs (vHSMs) provide the same security guarantees with the scalability of cloud services. When selecting an HSM, organizations must consider certification level, algorithm support (including PQC), key lifecycle management capabilities, and compliance with relevant regulatory frameworks.'
    },
    {
      id: 'dora-pqc-deadline',
      title: 'DORA is Here: What Financial Institutions Must Do Before the Next Deadline',
      date: 'Feb 12, 2026',
      readTime: '6 min read',
      author: 'Danush Reddy Mutyala',
      excerpt: 'The Digital Operational Resilience Act is now enforced. Financial institutions must demonstrate cryptographic agility and incident response capabilities. Here\'s your compliance checklist.',
      category: 'cybersecurity',
      tags: ['DORA', 'Compliance', 'Financial Services', 'EU Regulation'],
      content: 'The EU\'s Digital Operational Resilience Act (DORA) entered enforcement on January 17, 2025, requiring financial institutions to demonstrate robust ICT security and operational resilience. Article 9 specifically addresses cryptographic security, mandating that institutions implement state-of-the-art encryption and maintain cryptographic agility. This means having the ability to swap algorithms as standards evolve without rebuilding core infrastructure. Non-compliance can result in fines up to 2% of global annual turnover. RivicQ\'s compliance mapping tool automatically aligns your cryptographic posture with DORA requirements.'
    }
  ];

  const categories = ['all', 'cybersecurity', 'quantum', 'ai-security', 'hardware', 'company'];
  
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured);

  return (
    <article className="prose prose-slate max-w-none">
      <header className="mb-16">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[9px] font-bold uppercase tracking-[0.2em] mb-6">
            RivicQ Insights
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
            Security Intelligence <span className="text-blue-600">&</span> Research
          </h1>
          <p className="text-xl text-slate-500 font-serif italic max-w-2xl leading-relaxed">
            Expert analysis on quantum security, AI safety, hardware vulnerabilities, and the future of enterprise cryptography.
          </p>
        </AnimatedSection>
      </header>

      {/* Search & Filter */}
      <AnimatedSection delay={100}>
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              placeholder="Search articles, topics, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 transition-all"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {cat === 'all' ? 'All Topics' : cat.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Post */}
      {featuredPost && activeCategory === 'all' && !searchQuery && (
        <section className="mb-16">
          <BlogPostCard post={featuredPost} featured />
        </section>
      )}

      {/* Posts Grid */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-serif font-bold text-slate-900">Latest Articles</h2>
          <span className="text-xs text-slate-400 font-medium">{filteredPosts.length} articles</span>
        </div>
        
        {regularPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-100">
            <Search size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-700 mb-2">No articles found</h3>
            <p className="text-slate-500 text-sm">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <AnimatedSection>
        <section className="not-prose bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-technical opacity-30"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <Brain size={48} className="mx-auto text-blue-400 mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Stay Ahead of the Quantum Threat
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Get weekly briefings on PQC standards, security research, and compliance updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email"
                placeholder="your@company.com"
                className="flex-grow px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
              <button type="submit" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-[10px] text-slate-500 mt-4">
              No spam. Unsubscribe anytime. GDPR compliant.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <footer className="mt-16 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        RivicQ Security Research • Berlin, Germany
      </footer>
    </article>
  );
};

export default Blog;
