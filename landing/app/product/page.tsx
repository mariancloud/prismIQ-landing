'use client'

import Link from 'next/link'
import { ClaimIqUI } from '@/components/claim-iq-ui'
import { RiskCheckUI } from '@/components/risk-check-ui'

export default function ProductPage() {
  return (
    <main style={{ background: '#070D1A', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Section 1: Page Hero */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', background: '#070D1A' }} className="px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Hero Copy */}
          <div className="space-y-6">
            <div className="text-xs font-medium tracking-widest uppercase" style={{ color: '#00F5A0' }}>
              MERIDIAN - navigating thru complexity
            </div>
            <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#FFFFFF', lineHeight: '1.2' }}>
              Built for how specialty billing actually works
            </h1>
            <p style={{ fontSize: '18px', color: '#D1D5DB', lineHeight: '1.6' }}>
              From the moment a claim is submitted through final payment — or appeal — PrismIQ handles the complexity that medical billing teams spend weeks and weeks trying to manage manually.
            </p>
          </div>

          {/* Right: 835 Claim Flow Screenshot */}
          <div style={{
            paddingRight: '48px'
          }}>
            <div style={{
              background: '#0E1626',
              border: '1px solid #1A2438',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0, 0, 0, 0.4)',
              padding: '16px'
            }}>
              <ClaimIqUI />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Claim IQ */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', background: '#0E1626', borderTop: '1px solid #1A2438' }} className="px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Steps List */}
          <div className="space-y-8">
            <div>
              <div className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: '#00F5A0' }}>
                CLAIM IQ
              </div>
              <h2 style={{ fontSize: '36px', fontWeight: '600', color: '#FFFFFF', lineHeight: '1.2' }}>
                Your remittance, translated.
              </h2>
            </div>

            {/* Steps */}
            {[
              {
                number: '01',
                title: 'Upload or Connect',
                description: 'Drop in your 835 file or connect your clearinghouse feed directly. All major formats supported.'
              },
              {
                number: '02',
                title: 'Claim IQ Translates',
                description: 'Every CARC code becomes plain English. We flag what\'s worth fighting and estimate recovery value.'
              },
              {
                number: '03',
                title: 'Policy Alignment',
                description: 'Cross-reference your denial against live payer policy documents using RAG-powered AI.'
              },
              {
                number: '04',
                title: 'Appeal Ready',
                description: 'Get the exact policy clause the payer used — and a counter-argument built from their own language.'
              }
            ].map((step, idx) => (
              <div key={idx} style={{
                borderLeft: '3px solid #00F5A0',
                paddingLeft: '24px',
                paddingTop: '12px',
                paddingBottom: '12px'
              }}>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#00F5A0', marginBottom: '4px' }}>
                  {step.number}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#FFFFFF', marginBottom: '8px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '16px', color: '#D1D5DB' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Claim IQ Interface Screenshot */}
          <div style={{
            paddingRight: '48px'
          }}>
            <div style={{
              background: '#0E1626',
              border: '1px solid #1A2438',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0, 0, 0, 0.4)',
              padding: '16px'
            }}>
              <ClaimIqUI />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Risk Check */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', background: '#070D1A' }} className="px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-6">
            <div className="text-xs font-medium tracking-widest uppercase" style={{ color: '#00F5A0' }}>
              RISK CHECK
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: '600', color: '#FFFFFF', lineHeight: '1.2' }}>
              Stop the denial before it starts
            </h2>
            <p style={{ fontSize: '18px', color: '#D1D5DB', lineHeight: '1.6' }}>
              Before a high-value claim goes out, run it through Risk Check. Get a denial probability score and a documentation readiness checklist — so the claim goes out clean the first time.
            </p>
            <Link
              href="/pilot"
              className="inline-block px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
              style={{ backgroundColor: '#00F5A0', color: '#070D1A' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(0, 245, 160, 0.2)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              Try Risk Check →
            </Link>
          </div>

          {/* Right: Risk Check Dashboard Screenshot */}
          <div style={{
            paddingRight: '48px'
          }}>
            <div style={{
              background: '#0E1626',
              border: '1px solid #1A2438',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0, 0, 0, 0.4)',
              padding: '16px'
            }}>
              <RiskCheckUI />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Payers */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', background: '#0E1626', borderTop: '1px solid #1A2438' }} className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="text-xs font-medium tracking-widest uppercase" style={{ color: '#00F5A0' }}>
              COVERAGE
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: '600', color: '#FFFFFF', lineHeight: '1.2' }}>
              Designed for the payers that matter
            </h2>
            <p style={{ fontSize: '18px', color: '#6B7280' }}>
              We've architected Claim IQ around the payers handling 60% of US specialty claim volume.
            </p>
          </div>

          {/* Payer Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'UnitedHealthcare', desc: 'US national, 49M members' },
              { name: 'Anthem Blue Cross', desc: 'Multi-state, 42M members' },
              { name: 'Aetna', desc: 'National, 23M members' }
            ].map((payer, idx) => (
              <div key={idx} style={{
                background: '#070D1A',
                border: '1px solid #1A2438',
                borderLeft: '3px solid #00F5A0',
                borderRadius: '12px',
                padding: '32px',
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#FFFFFF', marginBottom: '8px' }}>
                  {payer.name}
                </h3>
                <p style={{ fontSize: '14px', color: '#6B7280' }}>
                  {payer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Specialties */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', background: '#070D1A' }} className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="text-xs font-medium tracking-widest uppercase" style={{ color: '#00F5A0' }}>
              SPECIALTIES
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: '600', color: '#FFFFFF', lineHeight: '1.2' }}>
              Built for complexity
            </h2>
            <p style={{ fontSize: '18px', color: '#6B7280' }}>
              Specialty procedures have specialty denial patterns. We know them.
            </p>
          </div>

          {/* Specialty Cards Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Orthopedics', desc: 'Surgical implants & procedures' },
              { name: 'Spine Surgery', desc: 'Fusion, decompression, fusion revision' },
              { name: 'Pain Management', desc: 'Interventional procedures' },
              { name: 'Neurology', desc: 'Diagnostic & therapeutic procedures' },
              { name: 'Cardiology', desc: 'Coronary & structural interventions' },
              { name: 'Gastroenterology', desc: 'Advanced therapeutic endoscopy' }
            ].map((specialty, idx) => (
              <div key={idx} style={{
                background: '#0E1626',
                border: '1px solid #1A2438',
                borderRadius: '8px',
                padding: '24px 32px',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#FFFFFF', marginBottom: '8px' }}>
                  {specialty.name}
                </h3>
                <p style={{ fontSize: '12px', color: '#6B7280', lineHeight: '1.4' }}>
                  {specialty.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
