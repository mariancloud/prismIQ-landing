'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata = {
  title: "Product - PrismIQ",
  description: "Claim IQ and Risk Check - the platform built for specialty billing. High-value surgical claims, complex payer policies, and appeal deadlines.",
}

const claimFlowSteps = [
  {
    number: '01',
    title: 'Connect your ERA/835 feed',
    content: 'Upload denied claims manually or connect your ERA/835 feed directly from your clearinghouse. PrismIQ accepts all major formats — Availity, Change Healthcare, Office Ally, and more. No new software to install.'
  },
  {
    number: '02',
    title: 'Claim IQ™ translates the denial',
    content: 'Every CARC code is translated into plain English — what it means, why the payer used it, and whether it\'s worth appealing. PrismIQ flags the denial confidence level and estimated recovery value so your team prioritizes the right claims first.'
  },
  {
    number: '03',
    title: 'We read their rulebook. Then we use it against them.',
    content: 'The AI cross-references your specific procedure, payer, and denial reason against live payer policy documents using retrieval-augmented generation. You get the exact policy clause the payer used — and the counter-argument, built from their own language, ready to deploy.'
  },
  {
    number: '04',
    title: 'Appeal letter, ready to send.',
    content: 'A fully constructed appeal letter citing clinical criteria, payer policy language, and medical necessity documentation requirements — specific to your claim, your payer, and your procedure. Not a template. A built argument.'
  },
]

function ClaimFlowSection() {
  const [expandedStep, setExpandedStep] = useState(0)

  return (
    <div style={{ paddingTop: '72px', paddingBottom: '72px' }}>
      <div className="max-w-3xl">
        <div className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--accent-teal)' }}>
          CLAIM IQ™
        </div>
        <h2 style={{ fontSize: '36px', fontWeight: '600', color: 'var(--text-primary)' }} className="text-white mb-8">
          From remittance to ready-to-send appeal.
        </h2>

        <div className="space-y-3">
          {claimFlowSteps.map((step, idx) => (
            <div
              key={step.number}
              style={{
                background: 'var(--surface)',
                border: expandedStep === idx ? '1px solid var(--accent-teal)' : '1px solid var(--border)',
                borderLeft: '3px solid ' + (expandedStep === idx ? 'var(--accent-teal)' : 'var(--border)'),
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 300ms ease'
              }}
            >
              <button
                onClick={() => setExpandedStep(expandedStep === idx ? -1 : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:opacity-80 transition-opacity"
              >
                <div className="flex items-center gap-4 text-left">
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--accent-teal)', minWidth: '40px' }}>
                    {step.number}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-primary)' }} className="text-white">
                    {step.title}
                  </h3>
                </div>
                <ChevronDown
                  size={20}
                  style={{
                    color: 'var(--accent-teal)',
                    transform: expandedStep === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 300ms ease'
                  }}
                />
              </button>

              {expandedStep === idx && (
                <div className="px-6 pb-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                    {step.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function RiskCheckSection() {
  return (
    <div style={{ paddingTop: '72px', paddingBottom: '72px' }}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div>
          <div className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--accent-teal)' }}>
            RISK CHECK
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '24px' }} className="text-white">
            Stop the denial before it starts.
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            Risk Check runs before you submit. Enter the payer, CPT code, ICD-10, and documentation you have on hand. PrismIQ returns a denial risk score, the top reasons this specific payer flags this specific procedure, and a documentation readiness checklist with severity ratings. A $24,000 Total Knee Arthroplasty to UnitedHealthcare gets a different analysis than a Cervical Fusion to Anthem — or a spinal cord stimulator to Aetna, or a nerve conduction study to Blue Shield. The payer policies are different. The documentation requirements are different. Risk Check knows the difference.
          </p>
        </div>

        {/* Right column - UI mockup */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '24px'
        }}>
          <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '16px' }} className="text-white">
            Risk Check
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>
            Pre-Submission Check
          </div>

          <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '12px', marginBottom: '12px' }}>
            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Claim Details</div>
            <div className="mt-2 space-y-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <div>Payer: UnitedHealthcare</div>
              <div>CPT: 27447</div>
              <div>ICD-10: M17.11</div>
              <div>Billed: $24,500</div>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Denial Risk</span>
                <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--accent-red)' }}>78%</span>
              </div>
              <div className="px-2 py-1 rounded text-xs font-semibold inline-block" style={{ background: 'rgba(248, 113, 113, 0.1)', color: 'var(--accent-red)' }}>
                CRITICAL
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold mb-2" style={{ color: 'var(--text-primary)' }} className="text-white">
                Documentation Readiness
              </div>
              <div className="w-full h-2 rounded-full" style={{ background: 'var(--border)' }}>
                <div className="h-full rounded-full" style={{ width: '70%', background: 'var(--accent-amber)' }} />
              </div>
              <div className="text-xs mt-1" style={{ color: 'var(--accent-amber)' }}>70/100 NEEDS ATTENTION</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PayerCoverageSection() {
  const payers = ['UnitedHealthcare', 'Anthem Blue Cross', 'Aetna']
  const specialties = ['Orthopedics', 'Spine Surgery', 'Neurology', 'Pain Management', 'Cardiology', 'Physical Medicine & Rehabilitation']

  return (
    <div style={{ paddingTop: '72px', paddingBottom: '72px' }}>
      <div>
        <div className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--accent-teal)' }}>
          PAYER COVERAGE
        </div>
        <h2 style={{ fontSize: '36px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '32px' }} className="text-white">
          Built for the payers that fight you hardest.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {payers.map((payer) => (
            <div key={payer} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '24px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-primary)' }} className="text-white">
                {payer}
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '14px', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '48px' }}>
          Additional payer policy coverage added on a continuous basis.
        </p>

        <div>
          <div className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: 'var(--accent-teal)' }}>
            BUILT FOR YOUR SPECIALTY
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '16px' }} className="text-white">
            Every specialty has different payer rules. PrismIQ knows yours.
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialties.map((specialty) => (
              <div key={specialty} style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }} className="text-white">
                  {specialty}
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '14px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '16px' }}>
            Additional specialty coverage expanding throughout 2025.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ProductPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ paddingTop: '72px', paddingBottom: '72px', background: 'var(--background)' }} className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--accent-teal)' }}>
            THE PLATFORM
          </div>
          <h1 style={{ fontSize: '56px', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '24px' }} className="text-white">
            Built for how specialty billing actually works.
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-muted)', maxWidth: '600px', lineHeight: '1.6' }}>
            Not a generic RCM tool. Built for high-value, complex claims across orthopedics, spine, neurology, pain management, and cardiology — where payer policy nuance and appeal deadlines determine whether you get paid.
          </p>
        </div>
      </section>

      {/* Content sections */}
      <section style={{ background: 'var(--background)' }} className="px-4">
        <div className="max-w-4xl mx-auto">
          <ClaimFlowSection />
          <div style={{ borderTop: '1px solid var(--border)', marginTop: '48px', marginBottom: '48px' }} />
          <RiskCheckSection />
          <div style={{ borderTop: '1px solid var(--border)', marginTop: '48px', marginBottom: '48px' }} />
          <PayerCoverageSection />
        </div>
      </section>
    </div>
  )
}
