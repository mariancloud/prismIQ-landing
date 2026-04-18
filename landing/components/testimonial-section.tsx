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
        <div style={{ fontSize: '120px', lineHeight: '0.8', color: '#00F5A0', fontWeight: '700', display: 'block', textAlign: 'center' }}>
          "
        </div>

        {/* Quote */}
        <blockquote style={{ fontSize: '24px', fontWeight: '500', color: '#FFFFFF', lineHeight: '1.6', fontStyle: 'italic' }} className="text-white">
          Denial management has always been a black box for most specialty practices — time-consuming, inconsistent, and expensive to outsource. PrismIQ brings transparency and speed to a process that desperately needed both. I&apos;ve seen firsthand how much revenue slips through the cracks in complex billing. This platform closes that gap.
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
            Physician Advisor, PrismIQ · Specialty Practice Physician
          </div>
        </div>
      </div>
    </section>
  )
}
