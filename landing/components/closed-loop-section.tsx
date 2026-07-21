'use client'

import { useEffect, useRef, useState } from 'react'

const nodes = ['Intake / Eligibility', 'Claims', 'Denials / Remittance']

export function ClosedLoopSection({ topBorder = true }: { topBorder?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      style={{
        background: '#070D1A',
        paddingTop: '140px',
        paddingBottom: '140px',
        borderTop: topBorder ? '1px solid #1A2438' : 'none',
      }}
      className="px-4"
    >
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="max-w-2xl mx-auto text-center space-y-6 mb-16">
          <h2
            className="text-white text-balance"
            style={{ fontSize: 'clamp(28px, 4.5vw, 44px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em' }}
          >
            The part no one else does.
          </h2>
          <p style={{ fontSize: '18px', color: '#D1D5DB', lineHeight: 1.6 }}>
            Every denial, underpayment, and rejection your back-end team resolves gets fed back to the front end
            automatically — updating intake validation, eligibility checks, and authorization rules across every practice
            location you manage.
          </p>
          <p style={{ fontSize: '18px', color: '#FFFFFF', lineHeight: 1.5, fontWeight: 600 }}>
            Other tools fix problems. PrismIQ eliminates the pattern that created them.
          </p>
        </div>

        {/* Horizontal diagram (desktop) */}
        <div className="hidden md:block">
          <HorizontalLoop inView={inView} />
        </div>

        {/* Vertical diagram (mobile) */}
        <div className="md:hidden mx-auto" style={{ maxWidth: 340 }}>
          <VerticalLoop inView={inView} />
        </div>
      </div>
    </section>
  )
}

function NodeRect({ x, y, w, h, label }: { x: number; y: number; w: number; h: number; label: string }) {
  return (
    <>
      <rect x={x} y={y} width={w} height={h} rx={12} fill="#0E1626" stroke="#243049" strokeWidth={1} />
      <text
        x={x + w / 2}
        y={y + h / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fill="#FFFFFF"
        fontSize={15}
        fontWeight={600}
      >
        {label}
      </text>
    </>
  )
}

function HorizontalLoop({ inView }: { inView: boolean }) {
  const centers = [130, 450, 770]
  const y = 60
  const h = 64
  const w = 220
  return (
    <svg width="100%" viewBox="0 0 900 220" fill="none" role="img" aria-label="Closed-loop revenue cycle diagram">
      <defs>
        <marker id="arrowMuted" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#3A4A66" />
        </marker>
      </defs>

      {nodes.map((label, i) => (
        <NodeRect key={label} x={centers[i] - w / 2} y={y} w={w} h={h} label={label} />
      ))}

      {/* forward arrows */}
      <line x1={centers[0] + w / 2} y1={y + h / 2} x2={centers[1] - w / 2 - 10} y2={y + h / 2} stroke="#3A4A66" strokeWidth={1.5} markerEnd="url(#arrowMuted)" />
      <line x1={centers[1] + w / 2} y1={y + h / 2} x2={centers[2] - w / 2 - 10} y2={y + h / 2} stroke="#3A4A66" strokeWidth={1.5} markerEnd="url(#arrowMuted)" />

      {/* return arc from last node bottom back to first node bottom */}
      <path
        d={`M ${centers[2]} ${y + h} C ${centers[2]} 200, ${centers[0]} 200, ${centers[0]} ${y + h}`}
        stroke="#00F5A0"
        strokeWidth={2}
        fill="none"
        className={inView ? 'loop-arc-animate' : undefined}
        markerEnd="url(#arrowAccent)"
      />
      <marker id="arrowAccent" markerWidth="9" markerHeight="9" refX="6" refY="4" orient="auto">
        <path d="M0,0 L8,4 L0,8 Z" fill="#00F5A0" />
      </marker>
      <text x={450} y={195} textAnchor="middle" fill="#00F5A0" fontSize={13} fontWeight={600} letterSpacing="0.04em">
        rules updated automatically
      </text>
    </svg>
  )
}

function VerticalLoop({ inView }: { inView: boolean }) {
  const cx = 210
  const ys = [20, 200, 380]
  const w = 200
  const h = 64
  return (
    <svg width="100%" viewBox="0 0 320 470" fill="none" role="img" aria-label="Closed-loop revenue cycle diagram">
      <defs>
        <marker id="arrowMutedV" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#3A4A66" />
        </marker>
        <marker id="arrowAccentV" markerWidth="9" markerHeight="9" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#00F5A0" />
        </marker>
      </defs>

      {nodes.map((label, i) => (
        <NodeRect key={label} x={cx - w / 2} y={ys[i]} w={w} h={h} label={label} />
      ))}

      {/* forward arrows down */}
      <line x1={cx} y1={ys[0] + h} x2={cx} y2={ys[1] - 10} stroke="#3A4A66" strokeWidth={1.5} markerEnd="url(#arrowMutedV)" />
      <line x1={cx} y1={ys[1] + h} x2={cx} y2={ys[2] - 10} stroke="#3A4A66" strokeWidth={1.5} markerEnd="url(#arrowMutedV)" />

      {/* return arc up the left edge */}
      <path
        d={`M ${cx - w / 2} ${ys[2] + h / 2} C 30 ${ys[2] + h / 2}, 30 ${ys[0] + h / 2}, ${cx - w / 2} ${ys[0] + h / 2}`}
        stroke="#00F5A0"
        strokeWidth={2}
        fill="none"
        className={inView ? 'loop-arc-animate' : undefined}
        markerEnd="url(#arrowAccentV)"
      />
      <text
        x={26}
        y={ys[1] + h / 2}
        textAnchor="middle"
        fill="#00F5A0"
        fontSize={12}
        fontWeight={600}
        transform={`rotate(-90 26 ${ys[1] + h / 2})`}
      >
        rules updated automatically
      </text>
    </svg>
  )
}
