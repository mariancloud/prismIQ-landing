'use client'

import { useState } from 'react'

export default function PilotPage() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [selectedPayers, setSelectedPayers] = useState<string[]>([])

  const payerOptions = ['UnitedHealthcare', 'Anthem Blue Cross', 'Aetna', 'Medicare', 'Cigna', 'Other']

  function togglePayer(payer: string) {
    setSelectedPayers(prev => 
      prev.includes(payer) ? prev.filter(p => p !== payer) : [...prev, payer]
    )
  }
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
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
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

              {/* Specialty Dropdown */}
              <div>
                <label htmlFor="specialty" className="block text-sm font-semibold mb-3" style={{ color: '#FFFFFF' }}>
                  Specialty <span style={{ color: '#F87171' }}>*</span>
                </label>
                <select
                  id="specialty"
                  name="specialty"
                  required
                  style={{
                    background: '#0E1626',
                    borderRadius: '12px',
                    border: '1px solid #1A2438',
                    padding: '16px 20px',
                    color: '#D1D5DB',
                    width: '100%',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    cursor: 'pointer'
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#00F5A0')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#1A2438')}
                >
                  <option value="">Select a specialty</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Spine Surgery">Spine Surgery</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Pain Management">Pain Management</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Physical Medicine & Rehabilitation">Physical Medicine & Rehabilitation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Estimated Monthly Denied Revenue */}
              <div>
                <label htmlFor="denied_revenue" className="block text-sm font-semibold mb-3" style={{ color: '#FFFFFF' }}>
                  Estimated monthly denied revenue ($) <span style={{ color: '#F87171' }}>*</span>
                </label>
                <input
                  id="denied_revenue"
                  name="denied_revenue"
                  type="text"
                  required
                  placeholder="$50,000"
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

              {/* Primary Payer Challenges */}
              <div>
                <label className="block text-sm font-semibold mb-4" style={{ color: '#FFFFFF' }}>
                  Primary payer challenges
                </label>
                <div className="flex flex-wrap gap-3">
                  {payerOptions.map((payer) => (
                    <button
                      key={payer}
                      type="button"
                      onClick={() => togglePayer(payer)}
                      style={{
                        padding: '10px 16px',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 200ms ease',
                        background: selectedPayers.includes(payer) ? '#00F5A0' : '#1A2438',
                        color: selectedPayers.includes(payer) ? '#070D1A' : '#6B7280'
                      }}
                    >
                      {payer}
                    </button>
                  ))}
                </div>
              </div>

              {/* Denial Volume Textarea */}
              <div>
                <label htmlFor="volume" className="block text-sm font-semibold mb-3" style={{ color: '#FFFFFF' }}>
                  Anything else you&apos;d like us to know <span style={{ color: '#D1D5DB', fontWeight: '400' }}>(optional)</span>
                </label>
                <textarea
                  id="volume"
                  name="volume"
                  rows={3}
                  placeholder="Any additional context..."
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
                  opacity: submitting ? 0.7 : 1,
                  marginBottom: '24px'
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

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-8 py-4 text-xs font-medium" style={{ color: '#6B7280' }}>
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
              <p style={{ fontSize: '14px', color: '#6B7280', textAlign: 'center', fontStyle: 'italic', marginBottom: '0' }}>
                Every denial is a story. PrismIQ writes the rebuttal.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
