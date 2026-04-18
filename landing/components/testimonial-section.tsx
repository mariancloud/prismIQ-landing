'use client'

export function TestimonialSection() {
  return (
    <section style={{ paddingTop: '128px', paddingBottom: '128px', background: '#070D1A' }} className="px-4">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Eyebrow */}
        <div className="text-xs font-medium tracking-widest uppercase" style={{ color: '#00F5A0' }}>
          PHYSICIAN ADVISORY BOARD
        </div>

        {/* Large quotation mark */}
        <div style={{ fontSize: '96px', lineHeight: '0.7', color: '#00F5A0', fontWeight: '800', display: 'block', textAlign: 'center', fontFamily: 'Inter' }}>
          &ldquo;
        </div>

        {/* Quote */}
        <blockquote style={{ fontSize: '24px', fontWeight: '500', color: '#FFFFFF', lineHeight: '1.6', fontStyle: 'italic' }} className="text-white">
          I work inside a hospital system where I see the full picture of how care gets reimbursed, and how often it doesn&apos;t. The complexity payers have built into the denial process is real, and most practices simply don&apos;t have the tools to match it. PrismIQ changes that equation. The intelligence it brings to appeal generation and pre-submission risk is exactly the kind of systematic thinking this problem has always needed.
        </blockquote>

        {/* Attribution */}
        <div className="space-y-4 pt-4">
          <p style={{ fontSize: '16px', fontWeight: '600', color: '#FFFFFF' }} className="text-white">
            Darina Stanyekeva, MD
          </p>
          <div className="inline-flex px-3 py-1.5 rounded-full text-xs font-medium" style={{
            background: '#1A2438',
            color: '#00F5A0'
          }}>
            Physician, Hospital Medicine · Physician Advisor, PrismIQ
          </div>
        </div>
      </div>
    </section>
  )
}
