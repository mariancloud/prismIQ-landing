'use client'

import Link from 'next/link'

export function FinalCTA() {
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
          Revenue cycle problems don&apos;t fix themselves. They compound.
        </h2>
        <p style={{ fontSize: '18px', color: '#D1D5DB', lineHeight: 1.6 }} className="max-w-2xl mx-auto">
          See what PrismIQ looks like running on your data.
        </p>
        <div>
          <Link
            href="/demo"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200"
            style={{ backgroundColor: '#00F5A0', color: '#070D1A' }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(0, 245, 160, 0.2)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
            }}
          >
            Book a Demo <span aria-hidden="true">→</span>
          </Link>
        </div>
        <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.6 }} className="max-w-xl mx-auto">
          Currently live across multi-specialty, multi-practice groups in the Bay Area and Southern California.
        </p>
      </div>
    </section>
  )
}
