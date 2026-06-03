import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';

const posts = [
  {
    title: 'Quantum-safe migration: preparing for NIST PQC timelines',
    category: 'Quantum Readiness',
    date: 'May 2026',
    summary:
      'A practical roadmap for migrating RSA/ECC to ML-KEM, ML-DSA, and SLH-DSA with CSPM automation.',
  },
  {
    title: 'Unified BOM intelligence: correlating CBOM, AIBOM, HBOM, IBOM, QBOM',
    category: 'BOM Intelligence',
    date: 'April 2026',
    summary:
      'How unified BOM graphs reduce cryptographic exposure and accelerate compliance reporting.',
  },
  {
    title: 'AI-driven CSPM analytics for enterprise security teams',
    category: 'AI Security',
    date: 'March 2026',
    summary:
      'Threat correlation, predictive exposure detection, and remediation workflows for modern SOCs.',
  },
  {
    title: 'Cryptographic posture management for multi-cloud environments',
    category: 'Enterprise',
    date: 'February 2026',
    summary:
      'A guide to standardizing encryption policies across AWS, GCP, and Azure with RIVICQ.',
  },
];

const Blog: React.FC = () => {
  return (
    <article className="prose prose-invert max-w-none">
      <header className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-[10px] font-bold uppercase tracking-[0.3em] text-slate-200">
          <BookOpen size={12} className="text-[#00D9FF]" />
          Security Research Blog
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mt-6">
          RIVICQ Security Research & Insights
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl">
          Deep dives on cryptographic posture management, AI security analytics, and quantum-safe
          readiness for enterprise teams.
        </p>
      </header>

      <section className="not-prose grid md:grid-cols-2 gap-6">
        {posts.map(post => (
          <article key={post.title} className="glass-card rounded-[2.5rem] p-8">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-400">
              <ShieldCheck size={12} className="text-[#00D9FF]" />
              {post.category} • {post.date}
            </div>
            <h2 className="text-xl font-semibold text-white mt-4">{post.title}</h2>
            <p className="text-sm text-slate-300">{post.summary}</p>
            <button className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#00D9FF] hover:text-white transition-colors">
              Read report <ArrowRight size={14} />
            </button>
          </article>
        ))}
      </section>

      <section className="mt-16">
        <div className="glass-panel rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold m-0">Subscribe to the research feed</h2>
            <p className="text-slate-300">
              Stay updated on PQC standards, AI security analytics, and CSPM best practices.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <input
              type="email"
              placeholder="work@email.com"
              className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white outline-none focus:ring-2 focus:ring-[#00D9FF]/40"
            />
            <button className="px-5 py-3 rounded-xl bg-[#00D9FF] text-slate-900 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Blog;
