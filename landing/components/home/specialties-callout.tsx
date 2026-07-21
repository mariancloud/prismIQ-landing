'use client'

export function SpecialtiesCallout() {
  return (
    <section
      style={{
        paddingTop: '112px',
        paddingBottom: '112px',
        background:
          'linear-gradient(rgba(0,245,160,0.07), rgba(0,245,160,0.03)), #0B1424',
        borderTop: '1px solid rgba(0,245,160,0.25)',
        borderBottom: '1px solid rgba(0,245,160,0.25)',
      }}
      className="px-4"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2
          className="text-white text-balance"
          style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em' }}
        >
          Built for the specialties where one denied claim costs the most.
        </h2>
        <p
          style={{ fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 700, color: '#00F5A0', letterSpacing: '-0.01em' }}
        >
          Orthopedics. Spine. Cardiology.
        </p>
        <p style={{ fontSize: '18px', color: '#D1D5DB', lineHeight: 1.6 }} className="max-w-2xl mx-auto">
          Complex CPT/ICD-10 pairings, implant documentation, unlisted codes, multi-level procedures — the cases where
          payer scrutiny is highest and manual pre-auth is slowest. That is where PrismIQ was built to operate first.
        </p>
      </div>
    </section>
  )
}
