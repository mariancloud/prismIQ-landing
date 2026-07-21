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
      style={{ paddingTop: '148px', paddingBottom: '112px', background: '#070D1A' }}
      className="relative px-4 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(760px circle at 76% 46%, rgba(0, 245, 160, 0.06) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto" style={{ opacity: 0 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="space-y-6 lg:space-y-7">
            <p
              className="uppercase"
              style={{ fontSize: '12px', letterSpacing: '0.12em', color: '#8A93A5', lineHeight: 1.6, maxWidth: '52ch' }}
            >
              In active pilot deployments with 2–25 provider specialty practices across California
            </p>

            <h1
              className="text-white text-balance"
              style={{ fontSize: 'clamp(34px, 5.2vw, 58px)', fontWeight: 700, lineHeight: 1.06, letterSpacing: '-0.02em' }}
            >
              <span className="block">Your billing team wins the appeal.</span>
              <span className="block" style={{ color: '#8A93A5' }}>
                Then the same claim gets denied next month.
              </span>
            </h1>

            <p style={{ fontSize: '18px', color: '#D1D5DB', lineHeight: 1.6, maxWidth: '60ch' }}>
              PrismIQ closes that loop. One AI layer from intake to collections, where every downstream outcome rewrites
              the upstream rule — so the same mistake never costs you twice.
            </p>

            <p
              style={{
                fontSize: '16px',
                color: '#00F5A0',
                fontWeight: 500,
                lineHeight: 1.5,
                maxWidth: '58ch',
              }}
            >
              38% fewer denials in the first 90 days — across active specialty pilot practices in California, trailing 90
              days
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-1">
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

            <p style={{ fontSize: '13px', color: '#8A93A5', lineHeight: 1.6, maxWidth: '64ch' }} className="text-pretty">
              Percentage of recovered revenue — we only win when you collect · Connected to your EHR/PM system and running
              in under 30 days
            </p>
          </div>

          {/* Right column — animated closed-loop diagram (the core idea) */}
          <div className="hidden lg:flex items-center justify-center">
            <HeroLoopDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}

const loopNodes = ['Intake / Eligibility', 'Claims', 'Denials / Remittance']

function HeroLoopDiagram() {
  const cx = 250
  const nodeW = 300
  const nodeH = 88
  const ys = [24, 220, 416]
  const h = nodeH

  return (
    <svg
      width="100%"
      viewBox="0 0 500 540"
      fill="none"
      role="img"
      aria-label="PrismIQ closed-loop revenue cycle: intake and eligibility flows to claims, then to denials and remittance, and the outcome feeds back to update intake rules automatically."
      style={{ maxWidth: 460 }}
    >
      <defs>
        <marker id="heroArrowMuted" markerWidth="9" markerHeight="9" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#4A5A76" />
        </marker>
        <marker id="heroArrowAccent" markerWidth="10" markerHeight="10" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#00F5A0" />
        </marker>
      </defs>

      {/* nodes */}
      {loopNodes.map((label, i) => (
        <g key={label}>
          <rect x={cx - nodeW / 2} y={ys[i]} width={nodeW} height={nodeH} rx={14} fill="#0E1626" stroke="#243049" strokeWidth={1.5} />
          <text
            x={cx}
            y={ys[i] + nodeH / 2}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#FFFFFF"
            fontSize={18}
            fontWeight={600}
          >
            {label}
          </text>
        </g>
      ))}

      {/* forward arrows down the center */}
      <line x1={cx} y1={ys[0] + h} x2={cx} y2={ys[1] - 12} stroke="#4A5A76" strokeWidth={2} markerEnd="url(#heroArrowMuted)" />
      <line x1={cx} y1={ys[1] + h} x2={cx} y2={ys[2] - 12} stroke="#4A5A76" strokeWidth={2} markerEnd="url(#heroArrowMuted)" />

      {/* self-drawing return arc up the right edge */}
      <path
        pathLength={1000}
        d={`M ${cx + nodeW / 2} ${ys[2] + nodeH / 2} C 480 ${ys[2] + nodeH / 2}, 480 ${ys[0] + nodeH / 2}, ${cx + nodeW / 2} ${ys[0] + nodeH / 2}`}
        stroke="#00F5A0"
        strokeWidth={2.5}
        fill="none"
        strokeLinecap="round"
        className="loop-arc-draw"
        markerEnd="url(#heroArrowAccent)"
      />
      <text
        x={474}
        y={ys[1] + nodeH / 2}
        textAnchor="middle"
        fill="#00F5A0"
        fontSize={13}
        fontWeight={600}
        letterSpacing="0.04em"
        transform={`rotate(-90 474 ${ys[1] + nodeH / 2})`}
      >
        rules updated automatically
      </text>
    </svg>
  )
}
