'use client'

export function ProblemSection() {
  return (
    <section style={{ background: '#0E1626', paddingTop: '128px', paddingBottom: '64px' }} className="px-4">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Large stat */}
        <div>
          <div style={{ fontSize: '96px', fontWeight: 'bold', color: '#FFFFFF' }} className="text-white">
            65%
          </div>
          <div style={{ fontSize: '18px', color: '#6B7280', marginTop: '16px' }}>
            of denied specialty claims are never appealed
          </div>
          <div style={{ height: '2px', width: '48px', background: '#00F5A0', margin: '24px auto 0' }} />
        </div>

        {/* Paragraph */}
        <p style={{ fontSize: '17px', color: '#D1D5DB', lineHeight: '1.7', maxWidth: '720px', margin: '0 auto' }}>
          Payers are getting smarter. UnitedHealthcare and Anthem now routinely issue partial payments — reimbursing 60–70 cents on the dollar — knowing most practices won&apos;t audit the remittance closely enough to catch it. When a full denial does land, the Level 1 appeal window is typically 30–60 days. Billers know that. They also know their queue has forty other claims in it. The ones that don&apos;t get fought in time expire. That&apos;s not a billing failure — that&apos;s a structural one. Specialty practices billing complex, high-value procedures face denial rates of 12–18%, and the majority of those denials go unappealed — not because they aren&apos;t winnable, but because there isn&apos;t a fast enough way to build the argument.
        </p>
      </div>
    </section>
  )
}
