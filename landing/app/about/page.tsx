'use client'

export default function AboutPage() {
  return (
    <main style={{ background: '#070D1A', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Hero Band with Team Narrative */}
      <section style={{
        background: '#0E1626',
        borderBottom: '1px solid #1A2438',
        paddingTop: '80px',
        paddingBottom: '80px'
      }} className="px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1fr] gap-16 items-start">
          {/* Left: Team Narrative */}
          <div className="space-y-12">
            <div>
              <h1 style={{ fontSize: '56px', fontWeight: '700', color: '#FFFFFF', lineHeight: '1.1' }} className="text-white">
                Built by a team that has spent decades on the right side of this problem.
              </h1>
            </div>

            {/* THE BACKGROUND */}
            <div className="space-y-4">
              <div className="text-xs font-medium tracking-widest uppercase" style={{ color: '#00F5A0' }}>
                THE BACKGROUND
              </div>
              <p style={{ fontSize: '17px', color: '#D1D5DB', lineHeight: '1.8' }}>
                PrismIQ was built by a team that has spent decades at the intersection of enterprise software, data architecture, and customer workflow design. Not in one industry — across many. Healthcare, fintech, logistics, enterprise technology. The pattern was always the same: organizations sitting on data they couldn&apos;t use, revenue they couldn&apos;t see, and processes that technology had never been designed around.
              </p>
            </div>

            {/* THE DISCIPLINE */}
            <div className="space-y-4">
              <div className="text-xs font-medium tracking-widest uppercase" style={{ color: '#00F5A0' }}>
                THE DISCIPLINE
              </div>
              <p style={{ fontSize: '17px', color: '#D1D5DB', lineHeight: '1.8' }}>
                The team brings together deep experience in scaling technology products from zero to global, architecting enterprise transformations, and advising high-growth companies on how to find the real problem underneath the stated one. The discipline — relentlessly uncovering root truths before building the systems that let organizations scale without breaking — is what category-defining products are actually built on. Not just brilliant technology. Operational maturity applied to real customer problems.
              </p>
            </div>

            {/* THE MISSION */}
            <div className="space-y-4">
              <div className="text-xs font-medium tracking-widest uppercase" style={{ color: '#00F5A0' }}>
                THE MISSION
              </div>
              <p style={{ fontSize: '17px', color: '#D1D5DB', lineHeight: '1.8' }}>
                That discipline is now focused entirely on a single problem: the $100B operational crisis in specialty healthcare. Payers have spent decades automating the denial. Practices have been left with a biller, a queue, and a 30-day window. PrismIQ is the correction — an intelligent machine that masters payer complexity, automates the path to payment, and returns revenue to the physicians who earned it.
              </p>
            </div>
          </div>

          {/* Right: Stat Card (Sticky) */}
          <div style={{ position: 'sticky', top: '120px' }}>
            <div style={{
              background: '#0E1626',
              border: '1px solid #1A2438',
              borderRadius: '16px',
              padding: '48px',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px'
            }}>
              {/* Stat 1: $100B */}
              <div style={{ paddingLeft: '0', borderLeft: 'none' }}>
                <div style={{ fontSize: '56px', fontWeight: '700', color: '#FFFFFF', lineHeight: '1', marginBottom: '12px' }}>
                  $100B
                </div>
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>
                  estimated annual revenue lost to denials and underpayments in specialty healthcare
                </p>
              </div>

              {/* Stat 2: 65% */}
              <div style={{ paddingLeft: '16px', borderLeft: '3px solid #FBBF24' }}>
                <div style={{ fontSize: '56px', fontWeight: '700', color: '#FBBF24', lineHeight: '1', marginBottom: '12px' }}>
                  65%
                </div>
                <p style={{ fontSize: '14px', color: '#9CA3AF', lineHeight: '1.6' }}>
                  of denied specialty claims are never appealed — not because they aren&apos;t winnable, but because there isn&apos;t time
                </p>
              </div>

              {/* Stat 3: 12–18% */}
              <div style={{ paddingLeft: '16px', borderLeft: '3px solid #F87171' }}>
                <div style={{ fontSize: '56px', fontWeight: '700', color: '#F87171', lineHeight: '1', marginBottom: '12px' }}>
                  12–18%
                </div>
                <p style={{ fontSize: '14px', color: '#9CA3AF', lineHeight: '1.6' }}>
                  average denial rate for high-value surgical and specialty procedures
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: '#1A2438' }} />

              {/* Bottom Tagline */}
              <p style={{ fontSize: '13px', color: '#00F5A0', textAlign: 'center', fontStyle: 'italic', lineHeight: '1.6' }}>
                These aren&apos;t industry abstractions. They&apos;re what PrismIQ was built to fix.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
