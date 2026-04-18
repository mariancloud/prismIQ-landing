'use client'

const steps = [
  {
    number: "01",
    title: "Connect your ERA/835 feed",
    description: "Upload denied claims or connect your ERA/835 feed directly from your clearinghouse. PrismIQ accepts all major formats — Availity, Change Healthcare, Office Ally, and more. No new software to install.",
  },
  {
    number: "02",
    title: "Claim IQ™ translates the denial",
    description: "Every CARC code is translated into plain English — what it means, why the payer used it, and whether it's worth appealing. PrismIQ flags the denial confidence level and estimated recovery value so your team prioritizes the right claims first.",
  },
  {
    number: "03",
    title: "We read their rulebook. Then we use it against them.",
    description: "The AI cross-references your specific procedure, payer, and denial reason against live payer policy documents using retrieval-augmented generation. You get the exact policy clause the payer used — and the counter-argument, built from their own language, ready to deploy.",
  },
]

export function HowItWorksSection() {
  return (
    <section style={{ paddingTop: '128px', paddingBottom: '128px', background: '#070D1A' }} className="px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="text-xs font-medium tracking-widest uppercase" style={{ color: '#00F5A0' }}>
            HOW IT WORKS
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: '600', color: '#FFFFFF' }} className="text-white">
            From denied claim to appeal letter in three steps.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              style={{
                background: '#0E1626',
                border: '1px solid #1A2438',
                borderRadius: '12px',
                padding: '40px',
                position: 'relative'
              }}
              className="transition-all duration-300 hover:border-accent-teal"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(0, 245, 160, 0.08)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              {/* Step watermark */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                fontSize: '120px',
                fontWeight: 'bold',
                color: '#1A2438',
                opacity: 0.5,
                lineHeight: '1',
                overflow: 'hidden'
              }}>
                {step.number}
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#00F5A0' }}>
                  {step.number}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'var(--text-primary)' }} className="text-white">
                  {step.title}
                </h3>
                <p style={{ fontSize: '17px', color: '#D1D5DB', lineHeight: '1.7' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
