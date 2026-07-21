'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { phases } from '@/components/platform-data'

export function PlatformColumns() {
  const [open, setOpen] = useState(0)

  return (
    <section style={{ paddingTop: '128px', paddingBottom: '128px', background: '#070D1A' }} className="px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 space-y-4 max-w-2xl">
          <div className="text-xs font-medium uppercase" style={{ color: '#00F5A0', letterSpacing: '0.12em' }}>
            THE PLATFORM
          </div>
          <h2
            className="text-white text-balance"
            style={{ fontSize: 'clamp(28px, 4.5vw, 44px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em' }}
          >
            How it works
          </h2>
        </div>

        {/* Desktop: three columns */}
        <div className="hidden md:grid md:grid-cols-3">
          {phases.map((phase, i) => (
            <div
              key={phase.number}
              style={{
                borderLeft: i === 0 ? 'none' : '1px solid #1A2438',
                paddingLeft: i === 0 ? 0 : '40px',
                paddingRight: i === phases.length - 1 ? 0 : '40px',
              }}
            >
              <div
                className="uppercase"
                style={{ fontSize: '12px', letterSpacing: '0.12em', color: '#8A93A5', marginBottom: '12px' }}
              >
                {phase.label}
              </div>
              <h3
                className="text-white"
                style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1.25, marginBottom: '32px', letterSpacing: '-0.01em' }}
              >
                {phase.heading}
              </h3>
              <div className="space-y-8">
                {phase.blocks.map((block) => (
                  <div key={block.subheading}>
                    <div className="text-white" style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>
                      {block.subheading}
                    </div>
                    <p style={{ fontSize: '16px', color: '#D1D5DB', lineHeight: 1.6 }}>{block.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: accordion */}
        <div className="md:hidden" style={{ borderTop: '1px solid #1A2438' }}>
          {phases.map((phase, i) => {
            const isOpen = open === i
            return (
              <div key={phase.number} style={{ borderBottom: '1px solid #1A2438' }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between text-left"
                  style={{ paddingTop: '20px', paddingBottom: '20px', color: '#FFFFFF' }}
                  aria-expanded={isOpen}
                >
                  <span>
                    <span
                      className="block uppercase"
                      style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#8A93A5', marginBottom: '4px' }}
                    >
                      {phase.label}
                    </span>
                    <span style={{ fontSize: '18px', fontWeight: 700 }}>{phase.heading}</span>
                  </span>
                  <ChevronDown
                    size={20}
                    style={{
                      color: '#00F5A0',
                      transition: 'transform 200ms ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      flexShrink: 0,
                    }}
                  />
                </button>
                {isOpen && (
                  <div className="space-y-6" style={{ paddingBottom: '24px' }}>
                    {phase.blocks.map((block) => (
                      <div key={block.subheading}>
                        <div className="text-white" style={{ fontSize: '15px', fontWeight: 600, marginBottom: '6px' }}>
                          {block.subheading}
                        </div>
                        <p style={{ fontSize: '15px', color: '#D1D5DB', lineHeight: 1.6 }}>{block.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
