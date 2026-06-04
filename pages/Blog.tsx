import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Clock, ArrowRight, Shield, Cpu, Lock, Brain, AlertTriangle, 
  Database, FileCode, Globe, Search, CheckCircle2, Eye, Key, Server, Bot,
  BookOpen, ScrollText, Target, Zap
} from 'lucide-react';
import { posts, categories } from '../data/blogPosts';

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
            <BookOpen aria-hidden="true" size={28} />
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
              to={`/blog/${post.id}`}
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
                    <Calendar aria-hidden="true" size={12} />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock aria-hidden="true" size={12} />
                    {post.readTime}
                  </span>
                </div>
                <span className="flex items-center gap-1 text-sky-500 font-semibold group-hover:gap-2 transition-all">
                  Read <ArrowRight aria-hidden="true" size={14} />
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
              to={`/blog/${post.id}`}
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
                  <CheckCircle2 aria-hidden="true" size={16} className="text-sky-400" />
                  <span className="text-slate-300">Weekly Research</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 aria-hidden="true" size={16} className="text-sky-400" />
                  <span className="text-slate-300">No Spam</span>
                </div>
              </div>
            </div>
            <div>
              {newsletterSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 aria-hidden="true" size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Subscribed!</h3>
                  <p className="text-slate-400">You'll receive our weekly research briefings.</p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <label htmlFor="blog-newsletter-email" className="sr-only">Work email</label>
                  <input 
                    id="blog-newsletter-email"
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
              icon: <Lock aria-hidden="true" size={24} className="text-purple-500" />,
              title: 'Quantum Security',
              desc: 'Post-quantum cryptography, NIST standards, migration strategies, and quantum threat analysis.',
              count: 4
            },
            {
              icon: <Brain aria-hidden="true" size={24} className="text-sky-500" />,
              title: 'AI Security',
              desc: 'OWASP LLM Top 10, prompt injection, model security, and AI red teaming methodologies.',
              count: 3
            },
            {
              icon: <Cpu aria-hidden="true" size={24} className="text-amber-500" />,
              title: 'Hardware Security',
              desc: 'HSM integration, side-channel attacks, FIPS certification, and root of trust.',
              count: 2
            },
            {
              icon: <ScrollText aria-hidden="true" size={24} className="text-emerald-500" />,
              title: 'Compliance',
              desc: 'DORA, CBOM, regulatory frameworks, and cryptographic compliance automation.',
              count: 2
            },
            {
              icon: <Server aria-hidden="true" size={24} className="text-indigo-500" />,
              title: 'Enterprise Security',
              desc: 'Zero trust, cryptographic agility, enterprise architecture, and security operations.',
              count: 2
            },
            {
              icon: <Database aria-hidden="true" size={24} className="text-cyan-500" />,
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
