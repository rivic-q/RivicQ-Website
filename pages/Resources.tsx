import React from 'react';
import { Code2, FileText, GitBranch, Layers, ShieldCheck, TerminalSquare } from 'lucide-react';

const docSections = [
  {
    title: 'Quickstart',
    description: 'Deploy the open source CSPM stack locally or in your cloud.',
    icon: <TerminalSquare size={16} className="text-[#00D9FF]" />,
  },
  {
    title: 'API Reference',
    description: 'GraphQL and REST endpoints for BOM ingestion and risk analytics.',
    icon: <Code2 size={16} className="text-[#00D9FF]" />,
  },
  {
    title: 'BOM Intelligence',
    description: 'CBOM, AIBOM, HBOM, IBOM, QBOM schemas and correlation flows.',
    icon: <Layers size={16} className="text-[#00D9FF]" />,
  },
  {
    title: 'Compliance Mapping',
    description: 'NIST PQC, DORA, eIDAS 2.0, SOC 2 reporting guidance.',
    icon: <ShieldCheck size={16} className="text-[#00D9FF]" />,
  },
];

const Resources: React.FC = () => {
  return (
    <article className="prose prose-invert max-w-none">
      <header className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-[10px] font-bold uppercase tracking-[0.3em] text-slate-200">
          <FileText size={12} className="text-[#00D9FF]" />
          Documentation
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mt-6">RIVICQ Documentation Hub</h1>
        <p className="text-lg text-slate-300 max-w-3xl">
          Developer-focused documentation for deploying the CSPM platform, integrating APIs, and
          aligning with global compliance standards.
        </p>
      </header>

      <section className="not-prose grid lg:grid-cols-[0.35fr_0.65fr] gap-8">
        <aside className="glass-panel rounded-[2.5rem] p-6">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-4">Docs Navigation</div>
          <nav className="space-y-3">
            {['Overview', 'Quickstart', 'API', 'CLI', 'BOM Intelligence', 'Compliance', 'SDKs'].map(item => (
              <button
                key={item}
                className="w-full text-left text-sm text-slate-200 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        <div className="space-y-6">
          {docSections.map(section => (
            <div key={section.title} className="glass-card rounded-[2.5rem] p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  {section.icon}
                </div>
                <h2 className="text-xl font-semibold text-white m-0">{section.title}</h2>
              </div>
              <p className="text-sm text-slate-300">{section.description}</p>
            </div>
          ))}
          <div className="glass-panel rounded-[2.5rem] p-8">
            <div className="flex items-center gap-3 mb-4">
              <GitBranch size={16} className="text-[#00D9FF]" />
              <h2 className="text-xl font-semibold text-white m-0">GitHub Integration</h2>
            </div>
            <p className="text-sm text-slate-300">
              Integrate RIVICQ scans into GitHub Actions for automated CBOM generation and cryptographic
              policy enforcement.
            </p>
            <div className="mt-4 glass-card rounded-2xl p-4 text-[11px] text-slate-300">
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-2">
                Example workflow
              </div>
              <code>rivicq scan --cbom --q-risk --policy enterprise.yaml</code>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Resources;
