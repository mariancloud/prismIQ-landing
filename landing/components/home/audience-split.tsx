'use client'

import Link from 'next/link'

export function AudienceSplit() {
  return (
    <section style={{ paddingTop: '128px', paddingBottom: '128px', background: '#070D1A' }} className="px-4">
      <div
        className="max-w-5xl mx-auto"
        style={{
          background: '#0E1626',
          border: '1px solid #1A2438',
          borderRadius: '20px',
          padding: '56px',
        }}
      >
        <div className="max-w-3xl space-y-6">
          <div className="text-xs font-medium uppercase" style={{ color: '#00F5A0', letterSpacing: '0.12em' }}>
            For Physician Practices &amp; Medical Groups
          </div>
          <h2
            className="text-white text-balance"
            style={{ fontSize: 'clamp(28px, 4.5vw, 44px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em' }}
          >
            Your staff does clinical work. PrismIQ does the rest.
          </h2>
          <p style={{ fontSize: '18px', color: '#D1D5DB', lineHeight: 1.6 }}>
            Faster authorizations without the portal busywork. Documentation that matches payer criteria before the claim
            goes out. High-value surgical, imaging, and specialty revenue protected from end to end — not just at the
            denial stage.
          </p>
          <div className="pt-2">
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
              style={{ color: '#00F5A0' }}
            >
              See what PrismIQ does <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
