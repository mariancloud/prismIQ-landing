'use client'

export default function AboutPage() {
  return (
    <main style={{ background: '#070D1A', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Hero Band */}
      <section style={{
        background: '#0E1626',
        borderBottom: '1px solid #1A2438',
        paddingTop: '80px',
        paddingBottom: '80px'
      }} className="px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1fr] gap-12 items-start">
          {/* Left: Eyebrow + Headline */}
          <div className="space-y-6">
            <div className="text-xs font-medium tracking-widest uppercase" style={{ color: '#00F5A0' }}>
              OUR STORY
            </div>
            <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#FFFFFF', lineHeight: '1.2' }}>
              Built by someone who knows exactly what payers are doing — and how to fix it.
            </h1>
          </div>

          {/* Right: Photo Placeholder */}
          <div style={{
            background: 'linear-gradient(135deg, #1A2438 0%, #0E1626 100%)',
            borderRadius: '12px',
            aspectRatio: '3 / 4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '24px'
          }}>
            <div>
              <div style={{ fontSize: '14px', color: '#6B7280' }}>Founder Photo</div>
            </div>
          </div>
        </div>

        {/* Founder Title */}
        <div className="max-w-7xl mx-auto mt-12">
          <div style={{ fontSize: '14px', color: '#00F5A0' }}>
            Founder & CEO, PrismIQ
          </div>
        </div>
      </section>

      {/* Mini-section 1: THE BACKGROUND */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', background: '#070D1A' }} className="px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: '#00F5A0' }}>
            THE BACKGROUND
          </div>
          <p style={{ fontSize: '18px', color: '#D1D5DB', lineHeight: '1.8' }}>
            PrismIQ wasn&apos;t built by someone who discovered healthcare. It was built by someone who spent decades developing the judgment to know a solvable problem when they see one.
          </p>
        </div>
      </section>

      {/* Mini-section 2: THE DISCIPLINE */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', background: '#0E1626', borderTop: '1px solid #1A2438' }} className="px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: '#00F5A0' }}>
            THE DISCIPLINE
          </div>
          <p style={{ fontSize: '18px', color: '#D1D5DB', lineHeight: '1.8' }}>
            A career architecting enterprise transformations at the highest levels of consulting. Building and scaling technology products through hypergrowth — from zero to global. Advising startups across healthcare, fintech, logistics, and enterprise software on how to find the real problem underneath the stated one. The through-line: organizations sitting on data they couldn&apos;t use, revenue they couldn&apos;t see, and customer workflows that technology had never been designed around.
          </p>
        </div>
      </section>

      {/* Mini-section 3: THE MISSION */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px', background: '#070D1A' }} className="px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: '#00F5A0' }}>
            THE MISSION
          </div>
          <p style={{ fontSize: '18px', color: '#D1D5DB', lineHeight: '1.8' }}>
            That discipline is now focused entirely on a single problem: the $100B operational crisis in specialty healthcare. Payers have spent decades automating the denial. Practices have been left with a biller, a queue, and a 30-day window. PrismIQ is the correction — an intelligent machine that masters payer complexity, automates the path to payment, and returns revenue to the physicians who earned it.
          </p>
        </div>
      </section>

      {/* Physician Advisory Board */}
      <section style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        background: '#0E1626',
        borderTop: '1px solid #1A2438',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }} className="px-4">
        <div style={{ maxWidth: '640px', width: '100%' }}>
          <div style={{
            background: '#070D1A',
            border: '1px solid #1A2438',
            borderLeft: '3px solid #00F5A0',
            borderRadius: '12px',
            padding: '48px',
            textAlign: 'center'
          }}>
            {/* Avatar Placeholder */}
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#1A2438',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#00F5A0'
            }}>
              DS
            </div>

            {/* Name */}
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#FFFFFF', marginBottom: '8px' }}>
              Darina Stanyekeva, MD
            </h3>

            {/* Title */}
            <p style={{ fontSize: '14px', color: '#00F5A0', marginBottom: '24px' }}>
              Physician Advisor, PrismIQ
            </p>

            {/* Divider */}
            <div style={{ height: '1px', background: '#1A2438', marginBottom: '24px' }} />

            {/* Bio */}
            <p style={{ fontSize: '16px', color: '#D1D5DB', lineHeight: '1.7' }}>
              Denial management has always been a black box for most specialty practices — time-consuming, inconsistent, and expensive to outsource. PrismIQ brings transparency and speed to a process that desperately needed both. I&apos;ve seen firsthand how much revenue slips through the cracks in complex billing. This platform closes that gap.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
