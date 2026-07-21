'use client'

import Link from 'next/link'

function Panel({
  heading,
  children,
  ctaLabel,
  ctaHref,
}: {
  heading: string
  children: React.ReactNode
  ctaLabel: string
  ctaHref: string
}) {
  return (
    <div
      style={{
        background: '#0E1626',
        border: '1px solid #1A2438',
        borderRadius: '16px',
        padding: '40px',
      }}
      className="flex flex-col"
    >
      <h3
        className="text-white text-balance"
        style={{ fontSize: '24px', fontWeight: 700, lineHeight: 1.25, marginBottom: '20px', letterSpacing: '-0.01em' }}
      >
        {heading}
      </h3>
      <div className="space-y-4 flex-1">{children}</div>
      <div style={{ marginTop: '32px' }}>
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
          style={{ color: '#00F5A0' }}
        >
          {ctaLabel} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  )
}

export function AudienceSplit() {
  return (
    <section style={{ paddingTop: '128px', paddingBottom: '128px', background: '#070D1A' }} className="px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left — Physician Practices (stacks first on mobile) */}
        <Panel
          heading="Your staff does clinical work. PrismIQ does the rest."
          ctaLabel="See the practice workflow"
          ctaHref="/how-it-works#practices"
        >
          <p style={{ fontSize: '17px', color: '#D1D5DB', lineHeight: 1.6 }}>
            Faster authorizations without the portal busywork. Documentation that matches payer criteria before the claim
            goes out. High-value surgical, imaging, and specialty revenue protected from end to end — not just at the
            denial stage.
          </p>
        </Panel>

        {/* Right — Billing & RCM Companies */}
        <Panel
          heading="The output of a bigger team without the overhead."
          ctaLabel="See the billing workflow"
          ctaHref="/how-it-works#billing"
        >
          <p style={{ fontSize: '17px', color: '#D1D5DB', lineHeight: 1.6 }}>
            Autonomous agents handle intake validation, portal monitoring, appeals drafting, and remittance
            reconciliation at scale. Full visibility into denial root causes, appeal outcomes, and recovery projections —
            across every client practice, in real time.
          </p>
        </Panel>
      </div>
    </section>
  )
}
