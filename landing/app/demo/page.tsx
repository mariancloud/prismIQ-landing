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

export default function DemoPage() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)

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
            <h1
              className="text-white text-balance"
              style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              Book a Demo
            </h1>
            <p style={{ fontSize: '18px', color: '#D1D5DB', lineHeight: 1.6 }}>
              See what PrismIQ looks like running on your data. Tell us about your revenue cycle and we&apos;ll walk you
              through the platform end to end — intake through collections.
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
                We&apos;ve got your request.
              </h2>
              <p style={{ fontSize: '16px', color: '#D1D5DB', lineHeight: 1.7 }}>
                We&apos;ll reach out within one business day to schedule your demo.
                <br />
                Look for an email from{' '}
                <span style={{ color: '#FFFFFF', fontWeight: 600 }}>hello@prismiqlabs.ai</span>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-3" style={{ color: '#FFFFFF' }}>
                    Name <span style={{ color: '#F87171' }}>*</span>
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
                  <label htmlFor="email" className="block text-sm font-semibold mb-3" style={{ color: '#FFFFFF' }}>
                    Email <span style={{ color: '#F87171' }}>*</span>
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
              </div>

              <div>
                <label htmlFor="practice" className="block text-sm font-semibold mb-3" style={{ color: '#FFFFFF' }}>
                  Practice or Company Name <span style={{ color: '#F87171' }}>*</span>
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

              <div>
                <label htmlFor="details" className="block text-sm font-semibold mb-3" style={{ color: '#FFFFFF' }}>
                  Tell us about your revenue cycle <span style={{ color: '#F87171' }}>*</span>
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  rows={6}
                  placeholder="What specialties do you handle? Where in the revenue cycle are you losing the most — intake, prior auth, denials, collections?"
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => (e.target.style.borderColor = '#00F5A0')}
                  onBlur={(e) => (e.target.style.borderColor = '#1A2438')}
                />
              </div>

              <div className="flex items-center justify-center gap-8 py-6 text-xs font-medium" style={{ color: '#8A93A5' }}>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#00F5A0' }}>✓</span>
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#00F5A0' }}>✓</span>
                  <span>BAA Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#00F5A0' }}>✓</span>
                  <span>SOC 2</span>
                </div>
              </div>

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
                {submitting ? 'Sending...' : 'Book a Demo'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
