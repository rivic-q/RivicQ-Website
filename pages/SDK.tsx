import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { Terminal } from '../components/Terminal';
import { CTABlock } from '../components/CTABlock';
import AnimatedBackground from '../components/AnimatedBackground';

export default function SDK() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px', position: 'relative' }}>
      <AnimatedBackground variant="hex" intensity="low" gradient={['#2563EB', '#3B82F6', '#60A5FA']} />
      <SectionHeader
        title="Developer SDK"
        subtitle="Language bindings for Python, Go, Rust, Java, and Node.js. NIST PQC encryption primitives, CBOM+QBOM generation API, and HSM client bindings."
        badge={<Badge variant="encrypt">Beta · Encryption SDK</Badge>}
        align="left"
      />
      <div style={{ marginBottom: 32 }}>
        <Terminal>{`pip install rivicq-sdk
  from rivicq import MLKEM, MLDSA, HSMClient

  # Connect to CloudHSM
  hsm = HSMClient(endpoint="https://hsm.rivicq.de", api_key="...")

  # Generate ML-KEM-768 keypair inside HSM
  key_id = hsm.generate_key(algorithm="ML-KEM-768")
  
  # Encrypt with HSM-backed key
  ct, ss = hsm.encapsulate(key_id)

  # QRNG entropy verified
  assert hsm.entropy_source() == "QRNG"`}</Terminal>
      </div>
      <CTABlock title="Get the Encryption SDK" text="Early access to our SDK beta. Python, Go, Rust, Java, and Node.js. Full HSM client bindings." label="Join Beta" href="/beta-signup" />
    </div>
  );
}
