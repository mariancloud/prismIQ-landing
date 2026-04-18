'use client'

export const metadata = {
  title: "Security - PrismIQ",
  description: "HIPAA-compliant. BAA-ready. SOC 2 in progress. We handle protected health information and take that responsibility seriously.",
}

const securityFeatures = [
  {
    title: "HIPAA Compliance",
    description: "All PHI processed through PrismIQ is handled in full accordance with HIPAA requirements. Data is encrypted in transit (TLS 1.2+) and at rest (AES-256). We do not use patient data to train our models — ever."
  },
  {
    title: "BAA Ready",
    description: "PrismIQ executes Business Associate Agreements with all pilot and production customers before any claims data is shared. A BAA is included as standard in pilot onboarding and takes less than 24 hours to execute."
  },
  {
    title: "SOC 2 Type II (In Progress)",
    description: "We are currently completing our SOC 2 Type II audit. Security documentation and our current controls framework are available to enterprise customers and RCM partners on request."
  },
]

export default function SecurityPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ paddingTop: '72px', paddingBottom: '72px', background: 'var(--background)' }} className="px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--accent-teal)' }}>
            TRUST & COMPLIANCE
          </div>
          <h1 style={{ fontSize: '52px', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '24px' }} className="text-white">
            HIPAA-compliant. BAA-ready. SOC 2 in progress.
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-muted)' }}>
            We process protected health information. We treat that responsibility seriously.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section style={{ paddingTop: '72px', paddingBottom: '72px', background: 'var(--background)' }} className="px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '40px'
                }}
                className="transition-all duration-300 hover:border-accent-teal"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(0, 245, 160, 0.08)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '16px' }} className="text-white">
                  {feature.title}
                </h3>
                <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="text-center mt-16">
            <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
              Questions about our security posture?{' '}
              <a href="mailto:security@prismiqlabs.ai" style={{ color: 'var(--accent-teal)' }} className="hover:underline font-medium">
                Email security@prismiqlabs.ai
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
