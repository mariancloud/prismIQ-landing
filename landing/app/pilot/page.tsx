'use client'

import { useState } from 'react'

export default function PilotPage() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)
    
    await fetch("https://formspree.io/f/mwvwdlag", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
    
    setSubmitting(false)
    setSubmitted(true)
    form.reset()
  }

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '120px', background: '#070D1A', minHeight: '100vh' }}>
      <div className="px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h1 style={{ fontSize: '56px', fontWeight: '700', color: '#FFFFFF', lineHeight: '1.1' }} className="text-white">
              Request a Pilot
            </h1>
            <p style={{ fontSize: '18px', color: '#D1D5DB', lineHeight: '1.7' }}>
              Share a sample of your denied claims. We&apos;ll show you exactly what was recoverable — and return a ready-to-send appeal for your hardest denial within 48 hours.
            </p>
          </div>

          {/* Form */}
          {submitted ? (
            <div style={{
              background: '#0E1626',
              border: '1px solid #1A2438',
              borderRadius: '16px',
              padding: '64px 48px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '56px', marginBottom: '24px' }}>✓</div>
              <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#00F5A0', marginBottom: '16px' }}>
                We&apos;ve got your submission.
              </h2>
              <p style={{ fontSize: '16px', color: '#D1D5DB', lineHeight: '1.7' }}>
                We&apos;ll send you a secure upload link within one business day.
                <br />
                Look for an email from <span style={{ color: '#FFFFFF', fontWeight: '600' }}>hello@prismiqlabs.ai</span>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email row */}
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
                    style={{
                      background: '#0E1626',
                      borderRadius: '12px',
                      border: '1px solid #1A2438',
                      padding: '16px 20px',
                      color: '#D1D5DB',
                      width: '100%',
                      fontSize: '16px',
                      fontFamily: 'inherit'
                    }}
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
                    style={{
                      background: '#0E1626',
                      borderRadius: '12px',
                      border: '1px solid #1A2438',
                      padding: '16px 20px',
                      color: '#D1D5DB',
                      width: '100%',
                      fontSize: '16px',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#00F5A0')}
                    onBlur={(e) => (e.target.style.borderColor = '#1A2438')}
                  />
                </div>
              </div>

              {/* Practice Name */}
              <div>
                <label htmlFor="practice" className="block text-sm font-semibold mb-3" style={{ color: '#FFFFFF' }}>
                  Practice Name <span style={{ color: '#F87171' }}>*</span>
                </label>
                <input
                  id="practice"
                  name="practice"
                  type="text"
                  required
                  placeholder="Orthopedic Specialists of Virginia"
                  style={{
                    background: '#0E1626',
                    borderRadius: '12px',
                    border: '1px solid #1A2438',
                    padding: '16px 20px',
                    color: '#D1D5DB',
                    width: '100%',
                    fontSize: '16px',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#00F5A0')}
                  onBlur={(e) => (e.target.style.borderColor = '#1A2438')}
                />
              </div>

              {/* Dental Volume Textarea */}
              <div>
                <label htmlFor="volume" className="block text-sm font-semibold mb-3" style={{ color: '#FFFFFF' }}>
                  Tell us about your dental volume <span style={{ color: '#F87171' }}>*</span>
                </label>
                <textarea
                  id="volume"
                  name="volume"
                  required
                  rows={6}
                  placeholder="How many denials do you handle per month? Which payers are most problematic?"
                  style={{
                    background: '#0E1626',
                    borderRadius: '12px',
                    border: '1px solid #1A2438',
                    padding: '16px 20px',
                    color: '#D1D5DB',
                    width: '100%',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    resize: 'none'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#00F5A0')}
                  onBlur={(e) => (e.target.style.borderColor = '#1A2438')}
                />
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-8 py-8 text-xs font-medium" style={{ color: '#6B7280' }}>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#00F5A0' }}>✓</span>
                  <span>SOC 2</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#00F5A0' }}>✓</span>
                  <span>HIPAA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#00F5A0' }}>✓</span>
                  <span>BAA Ready</span>
                </div>
              </div>

              {/* Tagline */}
              <p style={{ fontSize: '14px', color: '#6B7280', textAlign: 'center', fontStyle: 'italic', marginBottom: '32px' }}>
                Every denial is a story. PrismIQ writes the rebuttal.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: '100%',
                  backgroundColor: '#00F5A0',
                  color: '#070D1A',
                  borderRadius: '12px',
                  padding: '20px',
                  fontSize: '18px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  transition: 'all 200ms ease',
                  opacity: submitting ? 0.7 : 1
                }}
                onMouseEnter={(e) => {
                  if (!submitting) {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(0, 245, 160, 0.25)'
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                {submitting ? 'Sending...' : 'Request a Pilot'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
