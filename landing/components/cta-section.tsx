'use client'

import Link from 'next/link'

export function CTASection() {
  return (
    <section style={{
      paddingTop: '128px',
      paddingBottom: '128px',
      background: 'radial-gradient(ellipse at 30% 50%, rgba(0,245,160,0.07) 0%, transparent 70%), #0E1626',
      borderTop: '1px solid #1A2438',
      borderBottom: '1px solid #1A2438',
      position: 'relative'
    }} className="px-4 overflow-hidden">

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h2 style={{ fontSize: '40px', fontWeight: 'bold', color: '#FFFFFF' }} className="text-white">
          We&apos;re here to make sure practices get every dollar back.
        </h2>
        <p style={{ fontSize: '18px', color: '#6B7280' }}>
          Share a sample of denied claims. We&apos;ll return a policy-cited appeal for your hardest denial within 48 hours.
        </p>
        <Link
          href="/pilot"
          className="inline-block px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
          style={{
            backgroundColor: '#00F5A0',
            color: '#070D1A'
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(0, 245, 160, 0.2)'
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = 'none'
          }}
        >
          Request a Pilot →
        </Link>
      </div>
    </section>
  )
}
