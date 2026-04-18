'use client'

import { useState } from 'react'

const specialties = [
  "Orthopedics",
  "Spine Surgery",
  "Pain Management",
  "Neurology",
  "Other",
]

const denialVolumes = [
  "Under 25",
  "25–75",
  "75–200",
  "200+",
]

const payers = [
  "UnitedHealthcare",
  "Anthem Blue Cross",
  "Aetna",
  "Medicare",
  "Other",
]

export const metadata = {
  title: "Request a Pilot - PrismIQ",
  description: "Share a sample of denied claims. We'll analyze them and return a ready-to-send appeal for your hardest denial within 48 hours.",
}

export default function PilotPage() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [selectedPayers, setSelectedPayers] = useState<string[]>([])

  const togglePayer = (payer: string) => {
    setSelectedPayers(prev =>
      prev.includes(payer)
        ? prev.filter(p => p !== payer)
        : [...prev, payer]
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)
    data.append("payers", selectedPayers.join(", "))
    
    await fetch("https://formspree.io/f/mwvwdlag", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
    
    setSubmitting(false)
    setSubmitted(true)
    form.reset()
    setSelectedPayers([])
  }

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '80px', background: 'var(--background)' }}>
      <div className="px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <div className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--accent-teal)' }}>
              REQUEST A PILOT
            </div>
            <h1 style={{ fontSize: '44px', fontWeight: 'bold', color: 'var(--text-primary)' }} className="text-white">
              See what&apos;s recoverable in your denials.
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: '1.6' }}>
              Share a sample of denied claims. We&apos;ll analyze them and return a policy-cited appeal for your hardest denial within 48 hours. No commitment required.
            </p>
          </div>

          {/* Form */}
          {submitted ? (
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '48px',
              textAlign: 'center',
              borderLeft: '3px solid var(--accent-teal)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--accent-teal)', marginBottom: '12px' }}>
                Got it — we&apos;re on it.
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                We&apos;ll send you a secure upload link within one business day.
                <br />
                Look for an email from <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>hello@prismiqlabs.ai</span>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Email row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                    Name <span style={{ color: 'var(--accent-red)' }}>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    style={{
                      background: 'var(--surface)',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      padding: '12px 16px',
                      color: 'var(--text-primary)',
                      width: '100%',
                      fontSize: '14px'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-teal)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                    Email <span style={{ color: 'var(--accent-red)' }}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@practice.com"
                    style={{
                      background: 'var(--surface)',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      padding: '12px 16px',
                      color: 'var(--text-primary)',
                      width: '100%',
                      fontSize: '14px'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-teal)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
              </div>

              {/* Practice Name */}
              <div>
                <label htmlFor="practice" className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                  Practice Name <span style={{ color: 'var(--accent-red)' }}>*</span>
                </label>
                <input
                  id="practice"
                  name="practice"
                  type="text"
                  required
                  placeholder="Orthopedic Specialists of Virginia"
                  style={{
                    background: 'var(--surface)',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    padding: '12px 16px',
                    color: 'var(--text-primary)',
                    width: '100%',
                    fontSize: '14px'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-teal)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              {/* Specialty and Volume row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="specialty" className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                    Specialty <span style={{ color: 'var(--accent-red)' }}>*</span>
                  </label>
                  <select
                    id="specialty"
                    name="specialty"
                    required
                    style={{
                      background: 'var(--surface)',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      padding: '12px 16px',
                      color: 'var(--text-primary)',
                      width: '100%',
                      fontSize: '14px',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="">Select specialty</option>
                    {specialties.map((specialty) => (
                      <option key={specialty} value={specialty} style={{ background: 'var(--background)' }}>
                        {specialty}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="volume" className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                    Monthly denial volume <span style={{ color: 'var(--accent-red)' }}>*</span>
                  </label>
                  <select
                    id="volume"
                    name="volume"
                    required
                    style={{
                      background: 'var(--surface)',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                      padding: '12px 16px',
                      color: 'var(--text-primary)',
                      width: '100%',
                      fontSize: '14px',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="">Select volume</option>
                    {denialVolumes.map((volume) => (
                      <option key={volume} value={volume} style={{ background: 'var(--background)' }}>
                        {volume}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Payer challenges */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
                  Primary payer challenges <span style={{ color: 'var(--accent-red)' }}>*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {payers.map((payer) => (
                    <button
                      key={payer}
                      type="button"
                      onClick={() => togglePayer(payer)}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: '500',
                        border: '1px solid ' + (selectedPayers.includes(payer) ? 'var(--accent-teal)' : 'var(--border)'),
                        background: selectedPayers.includes(payer) ? 'var(--accent-teal)' : 'var(--surface)',
                        color: selectedPayers.includes(payer) ? 'var(--background)' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        transition: 'all 200ms ease'
                      }}
                    >
                      {payer}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional info */}
              <div>
                <label htmlFor="message" className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                  Anything else you&apos;d like us to know
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your biggest denial challenges..."
                  style={{
                    background: 'var(--surface)',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    padding: '12px 16px',
                    color: 'var(--text-primary)',
                    width: '100%',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    resize: 'none'
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-teal)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 py-4 text-xs" style={{ color: 'var(--text-muted)' }}>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>SOC 2</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>HIPAA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>BAA Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>No commitment</span>
                </div>
              </div>

              {/* Tagline */}
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', textAlign: 'center', fontStyle: 'italic', marginBottom: '24px' }}>
                Every denial is a story. PrismIQ writes the rebuttal.
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting || selectedPayers.length === 0}
                style={{
                  width: '100%',
                  backgroundColor: selectedPayers.length === 0 ? 'var(--border)' : 'var(--accent-teal)',
                  color: selectedPayers.length === 0 ? 'var(--text-muted)' : 'var(--background)',
                  borderRadius: '8px',
                  padding: '16px',
                  fontSize: '16px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: selectedPayers.length === 0 ? 'not-allowed' : 'pointer',
                  opacity: selectedPayers.length === 0 ? 0.6 : 1,
                  transition: 'all 200ms ease'
                }}
                onMouseEnter={(e) => {
                  if (selectedPayers.length > 0) {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(0, 245, 160, 0.2)'
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                {submitting ? 'Sending...' : 'Request a Pilot →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
