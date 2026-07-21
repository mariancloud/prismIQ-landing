'use client'

import Link from 'next/link'

type FinalCTAProps = {
  headline?: string
}

export function FinalCTA({
  headline = 'See what PrismIQ finds in your last 90 days of denials.',
}: FinalCTAProps) {
  return (
    <section
      style={{
        paddingTop: '128px',
        paddingBottom: '128px',
        background: 'radial-gradient(ellipse at 30% 50%, rgba(0,245,160,0.07) 0%, transparent 70%), #0E1626',
        borderTop: '1px solid #1A2438',
        position: 'relative',
      }}
      className="px-4 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h2
          className="text-white text-balance"
          style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em' }}
        >
          {headline}
        </h2>
        <p style={{ fontSize: '18px', color: '#D1D5DB', lineHeight: 1.6 }} className="max-w-2xl mx-auto text-pretty">
          Send a de-identified remittance sample. We&apos;ll come back with the recurring root causes, what they cost
          you, and which ones are preventable upstream. About a week. No call required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/denial-teardown"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200"
            style={{ backgroundColor: '#00F5A0', color: '#070D1A' }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(0, 245, 160, 0.2)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
            }}
          >
            Start a denial teardown <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/demo"
            className="text-sm font-medium transition-colors"
            style={{ color: '#8A93A5' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#D1D5DB')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#8A93A5')}
          >
            or book a live demo <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
