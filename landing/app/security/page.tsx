'use client'

import Link from 'next/link'
import { SecurityBadges } from '@/components/security-badges'

export default function SecurityPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ paddingTop: '72px', paddingBottom: '72px', background: 'var(--background)' }} className="px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--accent-teal)' }}>
            TRUST & COMPLIANCE
          </div>
          <h1 style={{ fontSize: '52px', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '24px' }} className="text-white">
            HIPAA-compliant. BAA-ready. SOC 2 in progress.
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-muted)' }}>
            We process protected health information. We treat that responsibility seriously.
          </p>
        </div>
      </section>

      {/* Security Badges */}
      <section style={{ paddingTop: '72px', paddingBottom: '72px', background: 'var(--background)' }} className="px-4">
        <div className="max-w-5xl mx-auto">
          <SecurityBadges />

          {/* Contact */}
          <div className="text-center mt-16">
            <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
              Questions about our security posture?{' '}
              <a href="mailto:security@prismiqlabs.ai" style={{ color: 'var(--accent-teal)' }} className="hover:underline font-medium">
                Email security@prismiqlabs.ai
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', background: '#0E1626' }} className="px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#FFFFFF' }} className="text-white">
            Security questions answered. Ready to see the platform?
          </h2>
          <p style={{ fontSize: '16px', color: '#6B7280' }}>
            Request a pilot. We&apos;ll return a policy-cited appeal for your hardest denial within 48 hours.
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
    </div>
  )
}
