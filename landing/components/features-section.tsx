'use client'

const features = [
  {
    title: "Claim IQ™",
    subtitle: "Your remittance, translated.",
    description: "Drop in your 835 file. Claim IQ reads every line — what the payer paid, what they cut, and why — in plain English. Then it tells you which denials are worth fighting and writes the appeal argument, already citing the payer's own policy language.",
    tags: ["All major clearinghouse formats", "Anthem, UHC, Aetna"],
    highlighted: true,
  },
  {
    title: "Risk Check",
    subtitle: "Know before you submit.",
    description: "Before a high-value claim goes out, run it through Risk Check. Enter the payer, CPT code, and documentation on hand. You'll get a denial probability score and a documentation readiness checklist — so the claim goes out clean the first time.",
    tags: ["Pre-submission · Post-denial", "CPT and payer-specific"],
    highlighted: false,
  },
]

export function FeaturesSection() {
  return (
    <section style={{ paddingTop: '128px', paddingBottom: '128px', background: '#070D1A' }} className="px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <div className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--accent-teal)' }}>
            THE PLATFORM
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: '600', color: '#FFFFFF' }} className="text-white">
            From remittance to appeal. From submission to certainty.
          </h2>
          <p style={{ fontSize: '18px', color: '#6B7280' }}>
            Purpose-built for specialty billing teams managing complex, high-value claims.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              style={{
                background: '#0E1626',
                border: feature.highlighted ? '3px solid #00F5A0' : '1px solid #1A2438',
                borderLeft: feature.highlighted ? '3px solid #00F5A0' : '1px solid #1A2438',
                borderRight: 'none',
                borderTop: 'none',
                borderBottom: 'none',
                borderRadius: '12px',
                padding: '48px',
                position: 'relative',
                order: feature.highlighted ? -1 : 0
              }}
              className="transition-all duration-300"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(0, 245, 160, 0.08)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' }} className="text-white mb-2">
                {feature.title}
              </h3>
              <p style={{ fontSize: '16px', color: '#00F5A0', fontWeight: 'normal' }} className="mb-4">
                {feature.subtitle}
              </p>
              <p style={{ fontSize: '17px', color: '#D1D5DB', lineHeight: '1.7' }} className="mb-6">
                {feature.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: '#1A2438',
                      color: '#6B7280'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
