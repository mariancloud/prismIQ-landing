'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up')
        }
      },
      { threshold: 0.1 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section style={{ paddingTop: '128px', paddingBottom: '128px', background: 'var(--background)' }} className="relative px-4 overflow-hidden">
      {/* Radial glow effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(600px circle at 75% 50%, rgba(0, 245, 160, 0.04) 0%, transparent 70%)',
        zIndex: 0
      }} />

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="space-y-6 lg:space-y-8">
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-teal)' }} />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--accent-teal)' }}>
                Accepting Pilot Practices — Q2 2025
              </span>
            </div>

            {/* H1 */}
            <h1 style={{ color: 'var(--text-primary)', fontSize: '64px', fontWeight: 'bold', lineHeight: '1.2' }} className="text-white">
              Your payer denied it. We help you fight back — and win.
            </h1>

            {/* Subheadline */}
            <p style={{ color: 'var(--text-secondary)', fontSize: '20px', lineHeight: '1.6', maxWidth: '520px' }}>
              PrismIQ is built for specialty practices billing complex, high-value procedures — orthopedics, spine, neurology, pain management, and cardiology — where a single denied claim can mean $15,000–$40,000 walking out the door.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/pilot"
                className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 inline-flex items-center justify-center"
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
              <Link
                href="#how-it-works"
                className="px-6 py-3 rounded-lg font-semibold text-sm transition-colors inline-flex items-center justify-center"
                style={{ color: 'var(--text-muted)' }}
              >
                See How It Works →
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-4 pt-4 text-xs" style={{ color: 'var(--text-muted)' }}>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>SOC 2</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>HIPAA</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>BAA Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>No commitment required</span>
              </div>
            </div>
          </div>

          {/* Right column - Product UI card */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', boxShadow: '0 0 0 0 rgba(0, 245, 160, 0)' }} className="transition-all duration-300 hover:shadow-lg" onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(0, 245, 160, 0.08)'
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-teal)'
          }} onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = 'none'
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
          }}>
            {/* Header row with chips */}
            <div className="flex gap-2 mb-6">
              <div className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'var(--border)', color: 'var(--accent-teal)' }}>
                ● 3 claims analyzed
              </div>
              <div className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'var(--border)', color: 'var(--accent-teal)' }}>
                ✓ 2 appealable
              </div>
            </div>

            {/* Claim cards */}
            <div className="space-y-3 mb-6">
              {/* Card 1 */}
              <div style={{ background: 'rgba(0, 245, 160, 0.03)', border: '1px solid var(--border)', borderRadius: '12px', padding: '12px' }}>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>CLM-2024-1847</div>
                    <div className="text-xs font-semibold px-2 py-1 rounded" style={{ background: 'rgba(0, 245, 160, 0.1)', color: 'var(--accent-teal)' }}>Appeal Ready</div>
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Total Knee Arthroplasty</div>
                  <div className="flex justify-between text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span>Anthem Blue Cross</span>
                    <span>$24,000</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span style={{ color: 'var(--text-muted)' }}>Win Probability</span>
                    <span style={{ color: 'var(--accent-teal)', fontWeight: 'bold' }}>72%</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div style={{ background: 'rgba(251, 191, 36, 0.03)', border: '1px solid var(--border)', borderRadius: '12px', padding: '12px' }}>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>CLM-2024-1901</div>
                    <div className="text-xs font-semibold px-2 py-1 rounded" style={{ background: 'rgba(251, 191, 36, 0.1)', color: 'var(--accent-amber)' }}>In Review</div>
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Cervical Fusion</div>
                  <div className="flex justify-between text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span>UnitedHealthcare</span>
                    <span>$18,500</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span style={{ color: 'var(--text-muted)' }}>Win Probability</span>
                    <span style={{ color: 'var(--accent-teal)', fontWeight: 'bold' }}>68%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer row with progress */}
            <div className="border-t" style={{ borderColor: 'var(--border)', paddingTop: '12px' }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Appeal generated in</span>
                <span className="text-xs font-mono" style={{ color: 'var(--accent-teal)' }}>00:47</span>
              </div>
              <div className="w-full h-1 rounded-full" style={{ background: 'var(--border)' }}>
                <div className="h-full rounded-full" style={{ width: '80%', background: 'var(--accent-teal)' }} />
              </div>
            </div>

            {/* More claims text */}
            <div className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
              + 1 more claim pending analysis
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
