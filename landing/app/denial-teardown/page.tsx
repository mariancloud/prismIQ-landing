'use client'

import { useState } from 'react'

const inputStyle: React.CSSProperties = {
  background: '#0E1626',
  borderRadius: '12px',
  border: '1px solid #1A2438',
  padding: '16px 20px',
  color: '#D1D5DB',
  width: '100%',
  fontSize: '16px',
  fontFamily: 'inherit',
}

const labelClass = 'block text-sm font-semibold mb-3'
const labelStyle: React.CSSProperties = { color: '#FFFFFF' }
const req = <span style={{ color: '#F87171' }}>*</span>

const roles = [
  'Physician Owner',
  'Practice Administrator',
  'Billing Director',
  'RCM Leader',
  'Other',
]

export default function DenialTeardownPage() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)
    data.append('_subject', 'New denial teardown request')

    await fetch('https://formspree.io/f/mwvwdlag', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })

    setSubmitting(false)
    setSubmitted(true)
    form.reset()
  }

  return (
    <div style={{ paddingTop: '160px', paddingBottom: '120px', background: '#070D1A', minHeight: '100vh' }}>
      <div className="px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <div
              className="uppercase"
              style={{ fontSize: '12px', letterSpacing: '0.12em', color: '#00F5A0' }}
            >
              Denial Teardown
            </div>
            <h1
              className="text-white text-balance"
              style={{ fontSize: 'clamp(32px, 5.5vw, 52px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              Send us 90 days of denials. We&apos;ll show you the pattern.
            </h1>
            <p style={{ fontSize: '18px', color: '#D1D5DB', lineHeight: 1.6 }} className="text-pretty">
              Upload a de-identified remittance sample and we&apos;ll come back with the recurring root causes, what they
              cost you, and which ones were preventable upstream. About a week. No call required.
            </p>
          </div>

          {submitted ? (
            <div
              style={{
                background: '#0E1626',
                border: '1px solid #1A2438',
                borderRadius: '16px',
                padding: '64px 48px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '56px', marginBottom: '24px', color: '#00F5A0' }}>✓</div>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#00F5A0', marginBottom: '16px' }}>
                Your teardown is in motion.
              </h2>
              <p style={{ fontSize: '16px', color: '#D1D5DB', lineHeight: 1.7 }}>
                We&apos;ll reach out within one business day with next steps — including how to securely share your
                de-identified sample.
                <br />
                Look for an email from{' '}
                <span style={{ color: '#FFFFFF', fontWeight: 600 }}>hello@prismiqlabs.ai</span>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClass} style={labelStyle}>
                    Name {req}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = '#00F5A0')}
                    onBlur={(e) => (e.target.style.borderColor = '#1A2438')}
                  />
                </div>
                <div>
                  <label htmlFor="practice" className={labelClass} style={labelStyle}>
                    Practice name {req}
                  </label>
                  <input
                    id="practice"
                    name="practice"
                    type="text"
                    required
                    placeholder="Bay Area Orthopedic Group"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = '#00F5A0')}
                    onBlur={(e) => (e.target.style.borderColor = '#1A2438')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="role" className={labelClass} style={labelStyle}>
                  Role {req}
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  defaultValue=""
                  style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                  onFocus={(e) => (e.target.style.borderColor = '#00F5A0')}
                  onBlur={(e) => (e.target.style.borderColor = '#1A2438')}
                >
                  <option value="" disabled>
                    Select your role
                  </option>
                  {roles.map((r) => (
                    <option key={r} value={r} style={{ background: '#0E1626' }}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="email" className={labelClass} style={labelStyle}>
                  Work email {req}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@practice.com"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#00F5A0')}
                  onBlur={(e) => (e.target.style.borderColor = '#1A2438')}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="providers" className={labelClass} style={labelStyle}>
                    Number of providers {req}
                  </label>
                  <input
                    id="providers"
                    name="providers"
                    type="number"
                    min={1}
                    required
                    placeholder="e.g. 8"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = '#00F5A0')}
                    onBlur={(e) => (e.target.style.borderColor = '#1A2438')}
                  />
                </div>
                <div>
                  <label htmlFor="specialty" className={labelClass} style={labelStyle}>
                    Primary specialty {req}
                  </label>
                  <input
                    id="specialty"
                    name="specialty"
                    type="text"
                    required
                    placeholder="Orthopedics, Spine, Cardiology…"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = '#00F5A0')}
                    onBlur={(e) => (e.target.style.borderColor = '#1A2438')}
                  />
                </div>
              </div>

              <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.6 }} className="text-pretty">
                De-identified data only. We&apos;ll execute a BAA before receiving anything containing PHI.
              </p>

              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: '100%',
                  backgroundColor: '#00F5A0',
                  color: '#070D1A',
                  borderRadius: '9999px',
                  padding: '18px',
                  fontSize: '17px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  transition: 'all 200ms ease',
                  opacity: submitting ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!submitting) {
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(0, 245, 160, 0.25)'
                  }
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                {submitting ? 'Sending...' : 'Start my teardown'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
