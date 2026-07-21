'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type StatementSectionProps = {
  eyebrow?: string
  heading: string
  children: ReactNode
  background?: string
  topBorder?: boolean
  align?: 'center' | 'left'
  id?: string
}

export function StatementSection({
  eyebrow,
  heading,
  children,
  background = '#070D1A',
  topBorder = true,
  align = 'center',
  id,
}: StatementSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      ref.current.style.opacity = '1'
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up')
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      style={{
        background,
        paddingTop: '140px',
        paddingBottom: '140px',
        borderTop: topBorder ? '1px solid #1A2438' : 'none',
        scrollMarginTop: '80px',
      }}
      className="px-4"
    >
      <div
        ref={ref}
        style={{ maxWidth: '72ch', opacity: 0 }}
        className={`mx-auto space-y-6 ${align === 'center' ? 'text-center' : 'text-left'}`}
      >
        {eyebrow && (
          <div
            className="text-xs font-medium uppercase"
            style={{ color: '#00F5A0', letterSpacing: '0.12em' }}
          >
            {eyebrow}
          </div>
        )}
        <h2
          className="text-white text-balance"
          style={{ fontSize: 'clamp(28px, 4.5vw, 44px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em' }}
        >
          {heading}
        </h2>
        <div className="space-y-6">{children}</div>
      </div>
    </section>
  )
}
