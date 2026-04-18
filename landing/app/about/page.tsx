'use client'

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ paddingTop: '72px', paddingBottom: '72px', background: 'var(--background)' }} className="px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--accent-teal)' }}>
            OUR STORY
          </div>
          <h1 style={{ fontSize: '52px', fontWeight: 'bold', color: 'var(--text-primary)' }} className="text-white">
            Built by someone who has spent a career closing exactly this kind of gap.
          </h1>
        </div>
      </section>

      {/* Founder Section */}
      <section style={{ paddingTop: '72px', paddingBottom: '72px', background: 'var(--background)' }} className="px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-12">
            {/* Copy - 55% */}
            <div className="space-y-6">
              <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                PrismIQ wasn&apos;t built by someone who discovered healthcare. It was built by someone who spent decades developing the judgment to know a solvable problem when they see one.
              </p>
              <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                A career architecting enterprise transformations at the highest levels of consulting. Building and scaling technology products through hypergrowth — from zero to global. Advising startups across healthcare, fintech, logistics, and enterprise software on how to find the real problem underneath the stated one, and how to build the technology around how work actually happens rather than how it theoretically should.
              </p>
              <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                The through-line across all of it: organizations sitting on data they couldn&apos;t use, revenue they couldn&apos;t see, and customer workflows that technology had never been designed around. The discipline — relentlessly uncovering root truths before building the connective tissue that lets organizations scale without breaking — is what building category-defining companies actually requires. Not just brilliant technology. Operational maturity. The rare ability to turn vision into enduring dominance.
              </p>
              <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                That discipline is now focused entirely on a single problem: the $100B operational crisis in specialty healthcare. Payers have spent decades automating the denial. Practices have been left with a biller, a queue, and a 30-day window. PrismIQ is the correction — an intelligent machine that masters payer complexity, automates the path to payment, and returns revenue to the physicians who earned it.
              </p>
            </div>

            {/* Avatar placeholder - 45% */}
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'var(--border)',
                margin: '0 auto 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px'
              }}>
                👤
              </div>
              <div style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '8px' }} className="text-white">
                Neeraj Srivastava
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                Founder, PrismIQ
              </div>
              <a href="#" style={{ display: 'block', marginTop: '16px', color: 'var(--text-muted)' }} className="hover:text-accent-teal transition-colors">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Physician Advisory Board */}
      <section style={{ paddingTop: '72px', paddingBottom: '72px', background: 'var(--background)' }} className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs font-medium tracking-widest uppercase mb-8" style={{ color: 'var(--accent-teal)' }}>
            PHYSICIAN ADVISORY BOARD
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '32px' }} className="text-white">
            Clinical perspective, built in from the start.
          </h2>

          <div style={{
            background: 'var(--surface)',
            border: '3px solid var(--accent-teal)',
            borderRadius: '12px',
            padding: '40px'
          }}>
            <div className="grid md:grid-cols-[120px_1fr] gap-8 md:gap-12">
              {/* Avatar */}
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
                flexShrink: 0
              }}>
                👨‍⚕️
              </div>

              {/* Content */}
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '8px' }} className="text-white">
                  Darina Stanyekeva, MD
                </h3>
                <div className="inline-flex px-3 py-1.5 rounded-full text-xs font-medium mb-4" style={{
                  background: 'var(--border)',
                  color: 'var(--accent-teal)'
                }}>
                  Physician Advisor, PrismIQ
                </div>
                <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Dr. Stanyekeva brings direct clinical perspective to PrismIQ&apos;s denial logic and appeal generation. Her firsthand experience with revenue cycle challenges in specialty practice directly informs how PrismIQ prioritizes payer policy coverage and documentation requirements across complex, high-value procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
