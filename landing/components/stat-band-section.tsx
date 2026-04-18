'use client'

import Link from 'next/link'

export function StatBandSection() {
  return (
    <section style={{ background: '#0E1626', paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="max-w-4xl mx-auto px-4">
        {/* Stat Block */}
        <div className="text-center mb-12" style={{ marginBottom: '48px' }}>
          <h2 className="text-white" style={{ fontSize: '32px', fontWeight: 'bold', lineHeight: '1.3', marginBottom: '16px', maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto' }}>
            Pilot practices identify an average of $40,000–$80,000 in recoverable denied revenue within their first 30 days.
          </h2>
          <p className="italic" style={{ fontSize: '14px', color: '#6B7280' }}>
            Based on early access pilot data from specialty practices in California.
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: '#1A2438', width: '120px', margin: '0 auto 48px auto' }}></div>

        {/* CTA Block */}
        <div className="text-center space-y-6">
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#FFFFFF', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }} className="text-white">
            We&apos;re here to make sure practices get every dollar back.
          </h2>
          <p style={{ fontSize: '16px', color: '#6B7280', marginBottom: '32px' }}>
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
      </div>
    </section>
  )
}
