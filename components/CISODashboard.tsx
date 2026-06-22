import React, { useState, useEffect } from 'react';
import { 
  Shield, AlertTriangle, CheckCircle2, XCircle, Clock, TrendingUp, 
  TrendingDown, Activity, Server, Key, Lock, Eye, RefreshCw, 
  Download, Bell, ChevronRight, BarChart3, PieChart, LineChart,
  Database, Cloud, Cpu, ShieldCheck, AlertOctagon, FileText
} from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, trend, icon, color }) => (
  <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all">
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 rounded-xl ${color}`}>
        {icon}
      </div>
      <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${
        trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 
        trend === 'down' ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-600'
      }`}>
        {trend === 'up' ? <TrendingUp aria-hidden="true" size={12} /> : trend === 'down' ? <TrendingDown aria-hidden="true" size={12} /> : null}
        {change}
      </div>
    </div>
    <div className="text-3xl font-bold text-slate-900 mb-1">{value}</div>
    <div className="text-xs text-slate-500 font-medium">{title}</div>
  </div>
);

interface VulnerabilityItem {
  id: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  location: string;
  algorithm: string;
  age: string;
}

interface ComplianceItem {
  framework: string;
  status: 'compliant' | 'partial' | 'non-compliant' | 'pending';
  score: number;
  deadline: string;
}

const CISODashboard: React.FC = () => {
  const [isLive, setIsLive] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [selectedView, setSelectedView] = useState<'overview' | 'risks' | 'compliance'>('overview');

  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        setLastUpdate(new Date());
      }, 30000);
      return () => clearInterval(interval);
    }
  }, [isLive]);

  const metrics: MetricCardProps[] = [
    { title: 'Crypto Assets Scanned', value: '12,847', change: '+342', trend: 'up', icon: <Key aria-hidden="true" size={20} className="text-blue-600" />, color: 'bg-blue-50' },
    { title: 'Critical Vulnerabilities', value: '3', change: '-2', trend: 'down', icon: <AlertOctagon aria-hidden="true" size={20} className="text-red-600" />, color: 'bg-red-50' },
    { title: 'PQC Readiness Score', value: '78%', change: '+12%', trend: 'up', icon: <ShieldCheck aria-hidden="true" size={20} className="text-emerald-600" />, color: 'bg-emerald-50' },
    { title: 'Compliance Status', value: '94%', change: '+3%', trend: 'up', icon: <CheckCircle2 aria-hidden="true" size={20} className="text-indigo-600" />, color: 'bg-indigo-50' },
  ];

  const vulnerabilities: VulnerabilityItem[] = [
    { id: 'V001', severity: 'critical', title: 'RSA-1024 Key Detected', location: '/auth/service.ts:47', algorithm: 'RSA-1024', age: '2 days' },
    { id: 'V002', severity: 'critical', title: 'Hardcoded API Secret', location: '/config/keys.json', algorithm: 'AES-128', age: '5 days' },
    { id: 'V003', severity: 'critical', title: 'SHA-1 Certificate', location: '/certs/root_ca.pem', algorithm: 'SHA-1', age: '1 day' },
    { id: 'V004', severity: 'high', title: 'MD5 Hash Usage', location: '/lib/crypto.ts:89', algorithm: 'MD5', age: '3 days' },
    { id: 'V005', severity: 'medium', title: 'ECDSA Weak Curve', location: '/wallet/signer.ts', algorithm: 'P-192', age: '1 week' },
  ];

  const complianceData: ComplianceItem[] = [
    { framework: 'NIST PQC (FIPS 203/204)', status: 'partial', score: 72, deadline: '2027-01-01' },
    { framework: 'DORA Article 9', status: 'compliant', score: 89, deadline: '2025-01-17' },
    { framework: 'NIS2 Directive', status: 'partial', score: 65, deadline: '2024-10-17' },
    { framework: 'CNSA 2.0', status: 'pending', score: 45, deadline: '2025-12-01' },
    { framework: 'BSI TR-02102-1', status: 'compliant', score: 82, deadline: '2026-06-01' },
  ];

  const riskDistribution = [
    { label: 'Critical', value: 3, color: 'bg-red-500' },
    { label: 'High', value: 12, color: 'bg-orange-500' },
    { label: 'Medium', value: 28, color: 'bg-amber-500' },
    { label: 'Low', value: 47, color: 'bg-emerald-500' },
  ];

  const scanHistory = [
    { date: '2026-04-02', assets: 1247, critical: 1, high: 3, medium: 8, low: 0 },
    { date: '2026-04-01', assets: 1189, critical: 2, high: 4, medium: 12, low: 0 },
    { date: '2026-03-31', assets: 1102, critical: 3, high: 5, medium: 15, low: 0 },
    { date: '2026-03-30', assets: 987, critical: 4, high: 6, medium: 18, low: 0 },
    { date: '2026-03-29', assets: 856, critical: 5, high: 8, medium: 22, low: 0 },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-700 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'medium': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'low': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'compliant': return <CheckCircle2 aria-hidden="true" size={16} className="text-emerald-600" />;
      case 'partial': return <Clock aria-hidden="true" size={16} className="text-amber-600" />;
      case 'non-compliant': return <XCircle aria-hidden="true" size={16} className="text-red-600" />;
      case 'pending': return <Activity aria-hidden="true" size={16} className="text-blue-600" />;
      default: return null;
    }
  };

  return (
    <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-serif font-bold text-slate-900">CISO Command Center</h3>
            <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
              isLive ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'
            }`}>
              <div className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
              {isLive ? 'Live' : 'Paused'}
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Last updated: {lastUpdate.toLocaleTimeString()} • Organization: Global Finance Corp
          </p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setIsLive(!isLive)}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              isLive ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            <RefreshCw size={14} className={isLive ? 'animate-spin' : ''} />
            {isLive ? 'Live Mode' : 'Resume'}
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-blue-700 transition-all">
            <Download size={14} />
            Export Report
          </button>
        </div>
      </div>

      {/* View Tabs */}
      <div className="flex gap-2 mb-6 border-b border-slate-200 pb-4">
        {(['overview', 'risks', 'compliance'] as const).map((view) => (
          <button
            key={view}
            onClick={() => setSelectedView(view)}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              selectedView === view 
                ? 'bg-slate-900 text-white' 
                : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            {view === 'overview' && <BarChart3 size={14} className="inline mr-1.5" />}
            {view === 'risks' && <AlertTriangle size={14} className="inline mr-1.5" />}
            {view === 'compliance' && <ShieldCheck size={14} className="inline mr-1.5" />}
            {view.charAt(0).toUpperCase() + view.slice(1)}
          </button>
        ))}
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, i) => (
          <MetricCard key={i} {...metric} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Risk Distribution (Left) */}
        <div className="lg:col-span-1 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
            <PieChart aria-hidden="true" size={16} className="text-blue-600" />
            Risk Distribution
          </h4>
          <div className="space-y-4">
            {riskDistribution.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-slate-600">{item.label}</span>
                  <span className="text-sm font-bold text-slate-900">{item.value}</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color} rounded-full transition-all duration-500`}
                    style={{ width: `${(item.value / 90) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">Total Findings</span>
              <span className="font-bold text-slate-900">90</span>
            </div>
          </div>
        </div>

        {/* Scan History Chart (Middle) */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
            <LineChart aria-hidden="true" size={16} className="text-indigo-600" />
            Vulnerability Trend (7 Days)
          </h4>
          <div className="h-40 flex items-end gap-3 px-4">
            {scanHistory.map((item, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex flex-col-reverse gap-1" style={{ height: '120px' }}>
                  <div 
                    className="w-full bg-emerald-200 rounded-t transition-all hover:bg-emerald-300"
                    style={{ height: `${(item.low / 50) * 100}%` }}
                  />
                  <div 
                    className="w-full bg-amber-400 rounded-t transition-all hover:bg-amber-500"
                    style={{ height: `${(item.medium / 30) * 100}%` }}
                  />
                  <div 
                    className="w-full bg-orange-500 rounded-t transition-all hover:bg-orange-600"
                    style={{ height: `${(item.high / 10) * 100}%` }}
                  />
                  <div 
                    className="w-full bg-red-600 rounded-t transition-all hover:bg-red-700"
                    style={{ height: `${(item.critical / 5) * 100}%` }}
                  />
                </div>
                <span className="text-[9px] text-slate-400 font-medium">{item.date.split('-')[2]}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 bg-red-600 rounded" />
              <span className="text-[10px] text-slate-500">Critical</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 bg-orange-500 rounded" />
              <span className="text-[10px] text-slate-500">High</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 bg-amber-400 rounded" />
              <span className="text-[10px] text-slate-500">Medium</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 bg-emerald-200 rounded" />
              <span className="text-[10px] text-slate-500">Low</span>
            </div>
          </div>
        </div>

        {/* Critical Vulnerabilities Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <AlertOctagon aria-hidden="true" size={16} className="text-red-600" />
              Critical Vulnerabilities
            </h4>
            <button className="text-xs text-blue-600 font-bold hover:underline flex items-center gap-1">
              View All <ChevronRight size={12} />
            </button>
          </div>
          <div className="space-y-3">
            {vulnerabilities.slice(0, 4).map((vuln) => (
              <div key={vuln.id} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-all">
                <div className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase border ${getSeverityColor(vuln.severity)}`}>
                  {vuln.severity}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="font-bold text-sm text-slate-900 truncate">{vuln.title}</div>
                  <div className="text-[10px] text-slate-500 font-mono">{vuln.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono text-slate-600">{vuln.algorithm}</div>
                  <div className="text-[9px] text-slate-400">{vuln.age} ago</div>
                </div>
                <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                  <ChevronRight size={16} className="text-slate-400" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Status */}
        <div className="lg:col-span-1 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
            <ShieldCheck aria-hidden="true" size={16} className="text-emerald-600" />
            Compliance Status
          </h4>
          <div className="space-y-4">
            {complianceData.slice(0, 4).map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                {getStatusIcon(item.status)}
                <div className="flex-grow min-w-0">
                  <div className="text-xs font-bold text-slate-900 truncate">{item.framework}</div>
                  <div className="text-[9px] text-slate-400">Due: {item.deadline}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-slate-900">{item.score}%</div>
                  <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        item.score >= 80 ? 'bg-emerald-500' : 
                        item.score >= 60 ? 'bg-amber-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="flex items-center gap-3 p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all">
          <FileText size={20} />
          <div className="text-left">
            <div className="text-xs font-bold">Generate CSPM</div>
            <div className="text-[10px] opacity-75">Export inventory</div>
          </div>
        </button>
        <button className="flex items-center gap-3 p-4 bg-white border border-slate-200 text-slate-700 rounded-xl hover:border-blue-300 transition-all">
          <Lock size={20} className="text-blue-600" />
          <div className="text-left">
            <div className="text-xs font-bold">Start Remediation</div>
            <div className="text-[10px] text-slate-500">Auto-fix workflow</div>
          </div>
        </button>
        <button className="flex items-center gap-3 p-4 bg-white border border-slate-200 text-slate-700 rounded-xl hover:border-indigo-300 transition-all">
          <Bell size={20} className="text-indigo-600" />
          <div className="text-left">
            <div className="text-xs font-bold">Set Alerts</div>
            <div className="text-[10px] text-slate-500">Notification rules</div>
          </div>
        </button>
        <button className="flex items-center gap-3 p-4 bg-white border border-slate-200 text-slate-700 rounded-xl hover:border-emerald-300 transition-all">
          <Download size={20} className="text-emerald-600" />
          <div className="text-left">
            <div className="text-xs font-bold">Export Report</div>
            <div className="text-[10px] text-slate-500">PDF/CSV formats</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CISODashboard;
