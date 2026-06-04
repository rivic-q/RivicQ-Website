import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import { Loader2 } from 'lucide-react';

const Home = React.lazy(() => import('./pages/Home'));
const Products = React.lazy(() => import('./pages/Products')); 
const Platform = React.lazy(() => import('./pages/Platform'));
const CloudHSM = React.lazy(() => import('./pages/CloudHSM'));
const RQSP = React.lazy(() => import('./pages/RQSP'));
const SDK = React.lazy(() => import('./pages/SDK'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Roadmap = React.lazy(() => import('./pages/Roadmap'));
const Team = React.lazy(() => import('./pages/Team'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Resources = React.lazy(() => import('./pages/Resources'));
const UseCases = React.lazy(() => import('./pages/UseCases'));
const Services = React.lazy(() => import('./pages/Services'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Story = React.lazy(() => import('./pages/Story'));
const Compliance = React.lazy(() => import('./pages/Compliance'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Legal = React.lazy(() => import('./pages/Legal'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const TrustCenter = React.lazy(() => import('./pages/TrustCenter'));
const Glossary = React.lazy(() => import('./pages/Glossary'));
const Methodology = React.lazy(() => import('./pages/Methodology'));
const Partner = React.lazy(() => import('./pages/Partner'));
const Investors = React.lazy(() => import('./pages/Investors'));
const QuantumResearch = React.lazy(() => import('./pages/QuantumResearch'));
const PitchDeck = React.lazy(() => import('./pages/PitchDeck'));
const Enterprise = React.lazy(() => import('./pages/Enterprise'));
const BetaSignup = React.lazy(() => import('./pages/BetaSignup'));
const CookiePolicy = React.lazy(() => import('./pages/CookiePolicy'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const RouteHandler = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    const titles: Record<string, string> = {
      '/': 'RivicQ | CSPM • PQC • Agentic Security • Privacy Protocol',
      '/products': 'CSPM, PQC, Agentic Security & Privacy Protocol | RivicQ',
      '/rqsp': 'RQSP Protocol | RivicQ',
      '/platform': 'Platform Architecture | RivicQ',
      '/cloud-hsm': 'Cloud HSM vHSM | RivicQ',
      '/methodology': 'Scientific Methodology | RivicQ',
      '/sdk': 'Developer SDK | RivicQ',
      '/solutions': 'Industry Solutions | RivicQ',
      '/services': 'CSPM, PQC, Agentic Security & Privacy Protocol Services | RivicQ',
      '/use-cases': 'Use Cases | RivicQ',
      '/roadmap': 'Enterprise Readiness Roadmap | RivicQ',
      '/team': 'Our Team | RivicQ',
      '/careers': 'Careers | RivicQ',
      '/resources': 'Resources & Compliance | RivicQ',
      '/blog': 'Blog & Insights | RivicQ',
      '/story': 'Our Story | RivicQ',
      '/compliance': 'PQC Compliance Deadlines | RivicQ',
      '/pricing': 'Pricing & Infrastructure | RivicQ',
      '/legal': 'Legal & IP Rights | RivicQ',
      '/privacy': 'Privacy Policy | RivicQ',
      '/trust': 'Trust Center | RivicQ',
      '/glossary': 'Glossary of Quantum Terms | RivicQ',
      '/partner': 'Partner Program | RivicQ',
      '/investors': 'Investor Relations | RivicQ',
      '/research': 'Quantum Research & R&D | RivicQ',
      '/pitch-deck': 'Investor Materials | RivicQ',
      '/enterprise': 'Enterprise | RivicQ',
      '/beta-signup': 'Beta Signup | RivicQ',
      '/cookie-policy': 'Cookie Policy | RivicQ'
    };
    document.title = titles[pathname] || 'RivicQ | Quantum-Safe Security';
  }, [pathname]);
  return null;
};

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <Loader2 className="animate-spin text-slate-200" size={32} />
  </div>
);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <RouteHandler />
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/rqsp" element={<RQSP />} />
              <Route path="/platform" element={<Platform />} />
              <Route path="/cloud-hsm" element={<CloudHSM />} />
              <Route path="/methodology" element={<Methodology />} />
              <Route path="/sdk" element={<SDK />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/services" element={<Services />} />
              <Route path="/use-cases" element={<UseCases />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/team" element={<Team />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/resources" element={<Resources />} />
               <Route path="/blog" element={<Blog />} />
               <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/story" element={<Story />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/trust" element={<TrustCenter />} />
              <Route path="/glossary" element={<Glossary />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/research" element={<QuantumResearch />} />
              <Route path="/pitch-deck" element={<PitchDeck />} />
               <Route path="/enterprise" element={<Enterprise />} />
               <Route path="/beta-signup" element={<BetaSignup />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
