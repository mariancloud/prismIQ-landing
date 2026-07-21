import type { ReactNode } from 'react'

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string
  title: string
  children?: ReactNode
}) {
  return (
    <section style={{ paddingTop: '160px', paddingBottom: '80px', background: '#070D1A' }} className="px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {eyebrow && (
          <div className="text-xs font-medium uppercase" style={{ color: '#00F5A0', letterSpacing: '0.12em' }}>
            {eyebrow}
          </div>
        )}
        <h1
          className="text-white text-balance"
          style={{ fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em' }}
        >
          {title}
        </h1>
        {children && (
          <div style={{ fontSize: '18px', color: '#D1D5DB', lineHeight: 1.6, maxWidth: '62ch' }} className="space-y-4">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
