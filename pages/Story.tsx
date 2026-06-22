import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { MilestoneTimeline } from '../components/MilestoneTimeline';
import { CTABlock } from '../components/CTABlock';
import { milestones } from '../data/milestones';
import QuantumCircuit from '../components/QuantumCircuit';

export default function Story() {
  return (
    <div style={{ position: 'relative' }}>
      <QuantumCircuit complexity={5} color="var(--rq-primary)" />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Our Story"
          subtitle="From a Berlin encryption research lab to ETSI PQC delegate and EURA AG partner — in two years."
          badge={<Badge variant="encrypt">Encryption Journey</Badge>}
        />
        <div style={{ lineHeight: 1.8, color: 'var(--rq-muted)', fontSize: '0.95rem', marginBottom: 40 }}>
          <p>RivicQ was founded in 2024 by Revan Sai Ande, a security researcher and ETSI PQC Ambassador with a background in hardware security side-channel analysis and bug bounty hunting. The mission: make post-quantum encryption practical and auditable.</p>
          <p>What started as research into cryptographic migration tools at TU Berlin quickly became a recognized deep-tech venture. The SIB Deep-Tech Grant (2025) funded the CSPM Scanner — an open-source tool for cryptographic asset discovery. By mid-2025, the team had published the QBOM specification draft, adding quantum vulnerability scoring (Q-score) to every cryptographic asset.</p>
          <p>By early 2026, RivicQ had presented at the BSI Congress (PQC encryption track), joined the Leap Berlin Quantum Hub, and was selected for Science & Startups 100/100. The CloudHSM beta launched with FIPS 140-3 Level 3 compliance in process and the Encryption-as-a-Service API live.</p>
          <p>Today, RivicQ is an ETSI / IQC QSC delegate driving post-quantum encryption standards, has a signed LOI with EURA AG for HSM deployment, and is partnering with Horizenlabs on PQC-blockchain integration. Our mission: make PQC encryption, HSM key management, and cryptographic auditing accessible to every organization.</p>
        </div>
        <SectionHeader title="Milestones" />
        <MilestoneTimeline items={milestones} />
        <div style={{ marginTop: 40 }}>
          <CTABlock title="Work With Us" text="Partnerships, encryption pilots, and investment inquiries welcome." label="Get in Touch" href="/enterprise" />
        </div>
      </div>
    </div>
  );
}
