'use client'

import Link from 'next/link'

export function CTASection() {
  return (
    <section style={{
      paddingTop: '128px',
      paddingBottom: '128px',
      background: 'var(--background)',
      position: 'relative'
    }} className="px-4 overflow-hidden">
      {/* Subtle diagonal gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to right, rgba(0, 245, 160, 0.06), transparent)',
        zIndex: 0
      }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h2 style={{ fontSize: '40px', fontWeight: 'bold', color: 'var(--text-primary)' }} className="text-white">
          We&apos;re here to make sure practices get every dollar back.
        </h2>
        <p style={{ fontSize: '18px', color: 'var(--text-muted)' }}>
          Share a sample of denied claims. We&apos;ll return a policy-cited appeal for your hardest denial within 48 hours.
        </p>
        <Link
          href="/pilot"
          className="inline-block px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
          style={{
            backgroundColor: 'var(--accent-teal)',
            color: 'var(--background)'
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
