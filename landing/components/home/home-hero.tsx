'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export function HomeHero() {
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
      { threshold: 0.1 },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      style={{ paddingTop: '160px', paddingBottom: '128px', background: '#070D1A' }}
      className="relative px-4 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(700px circle at 78% 42%, rgba(0, 245, 160, 0.05) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto" style={{ opacity: 0 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="space-y-6 lg:space-y-8">
            <p
              className="uppercase"
              style={{ fontSize: '12px', letterSpacing: '0.12em', color: '#6B7280', lineHeight: 1.6, maxWidth: '52ch' }}
            >
              Currently deployed at leading orthopedic, spine, and cardiology practices across the Bay Area and Southern
              California.
            </p>

            <h1
              className="text-white text-balance"
              style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em' }}
            >
              Your revenue cycle is leaking. Not in one place. Everywhere.
            </h1>

            <p style={{ fontSize: '18px', color: '#D1D5DB', lineHeight: 1.6, maxWidth: '62ch' }}>
              US healthcare writes off over $260B a year in denied, delayed, and underpaid claims. Most of it is
              preventable. PrismIQ is the AI system that runs your entire revenue cycle — intake through collections — so
              the same mistake never costs you twice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/demo"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200"
                style={{ backgroundColor: '#00F5A0', color: '#070D1A' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(0, 245, 160, 0.2)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = 'none')}
              >
                See it run on your data <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-colors"
                style={{ color: '#D1D5DB', border: '1px solid #1A2438' }}
              >
                See a real appeal we drafted <span aria-hidden="true">→</span>
              </Link>
            </div>

            <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.6, maxWidth: '64ch' }} className="text-pretty">
              Built for 2–25 provider specialty practices and ambulatory surgical centers · Percentage of recovered
              revenue — we only win when you collect · Connected to your EHR/PM system and running in under 30 days
            </p>
          </div>

          {/* Right column — restrained closed-loop vector */}
          <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
            <LoopVector />
          </div>
        </div>
      </div>
    </section>
  )
}

function LoopVector() {
  return (
    <svg width="100%" height="320" viewBox="0 0 400 320" fill="none" style={{ maxWidth: 420, opacity: 0.9 }}>
      <defs>
        <linearGradient id="loopStroke" x1="0" y1="0" x2="400" y2="320" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A2438" />
          <stop offset="1" stopColor="#243049" />
        </linearGradient>
      </defs>
      {/* orbit rings */}
      <ellipse cx="200" cy="160" rx="150" ry="90" stroke="url(#loopStroke)" strokeWidth="1" />
      <ellipse cx="200" cy="160" rx="110" ry="150" stroke="#1A2438" strokeWidth="1" />
      <ellipse cx="200" cy="160" rx="150" ry="150" stroke="#141E30" strokeWidth="1" />
      {/* nodes */}
      <circle cx="350" cy="160" r="5" fill="#00F5A0" />
      <circle cx="50" cy="160" r="4" fill="#243049" />
      <circle cx="200" cy="10" r="4" fill="#243049" />
      <circle cx="200" cy="310" r="4" fill="#243049" />
      {/* accent arc */}
      <path
        d="M 350 160 A 150 90 0 0 1 200 250"
        stroke="#00F5A0"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  )
}
