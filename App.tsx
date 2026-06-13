import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';

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

// New key screens
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Settings = React.lazy(() => import('./pages/Settings'));
const SearchPage = React.lazy(() => import('./pages/Search'));
const Help = React.lazy(() => import('./pages/Help'));

const titles: Record<string, string> = {
  '/': 'RivicQ — Quantum-Safe Encryption Infrastructure',
  '/products': 'PQC Encryption Products | RivicQ',
  '/cloud-hsm': 'CloudHSM — FIPS 140-3 HSM Encryption-as-a-Service | RivicQ',
  '/rqsp': 'RQSP — Hybrid PQC Transport Encryption Protocol | RivicQ',
  '/platform': 'Encryption Platform Architecture | RivicQ',
  '/sdk': 'PQC Encryption SDK — Developer Bindings | RivicQ',
  '/solutions': 'Encryption Solutions by Industry | RivicQ',
  '/services': 'PQC Encryption & HSM Professional Services | RivicQ',
  '/compliance': 'PQC Encryption Compliance Deadlines | RivicQ',
  '/pricing': 'Encryption Platform Pricing | RivicQ',
  '/team': 'Encryption Engineering Team | RivicQ',
  '/story': 'Our Encryption Journey | RivicQ',
  '/careers': 'Encryption Engineering Careers | RivicQ',
  '/investors': 'Encryption Infrastructure Investor Relations | RivicQ',
  '/partner': 'Encryption Partner Program | RivicQ',
  '/resources': 'PQC Encryption Resources & Library | RivicQ',
  '/blog': 'PQC Encryption Blog & Insights | RivicQ',
  '/trust': 'Encryption Trust Center | RivicQ',
  '/glossary': 'PQC Encryption Glossary | RivicQ',
  '/roadmap': 'Encryption Platform Roadmap | RivicQ',
  '/use-cases': 'PQC Encryption Use Cases | RivicQ',
  '/methodology': 'Encryption Migration Methodology | RivicQ',
  '/legal': 'Legal & Imprint | RivicQ',
  '/privacy': 'Privacy Policy | RivicQ',
  '/cookie-policy': 'Cookie Policy | RivicQ',
  '/beta-signup': 'PQC Encryption Beta Signup | RivicQ',
  '/enterprise': 'Enterprise Encryption — Talk to Us | RivicQ',
  '/pitch-deck': 'Encryption Infrastructure Investor Materials | RivicQ',
  '/research': 'PQC Encryption Research & R&D | RivicQ',
  '/dashboard': 'Encryption Dashboard | RivicQ',
  '/login': 'Sign In | RivicQ',
  '/signup': 'Create Account | RivicQ',
  '/forgot-password': 'Reset Password | RivicQ',
  '/profile': 'Profile Settings | RivicQ',
  '/settings': 'Preferences | RivicQ',
  '/search': 'Search | RivicQ',
  '/help': 'Help & Support | RivicQ',
};

const RouteHandler = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = titles[pathname] || 'RivicQ — Quantum-Safe Encryption Infrastructure';
  }, [pathname]);
  return null;
};

const PageLoader = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--rq-primary)" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <RouteHandler />
      <Layout>
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cloud-hsm" element={<CloudHSM />} />
              <Route path="/rqsp" element={<RQSP />} />
              <Route path="/platform" element={<Platform />} />
              <Route path="/sdk" element={<SDK />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/services" element={<Services />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/team" element={<Team />} />
              <Route path="/story" element={<Story />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/trust" element={<TrustCenter />} />
              <Route path="/glossary" element={<Glossary />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/use-cases" element={<UseCases />} />
              <Route path="/methodology" element={<Methodology />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/beta-signup" element={<BetaSignup />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/pitch-deck" element={<PitchDeck />} />
              <Route path="/research" element={<QuantumResearch />} />

              {/* New key screens */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/help" element={<Help />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </Router>
  );
};

export default App;
