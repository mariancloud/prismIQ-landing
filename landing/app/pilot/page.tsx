"use client"

import type { Metadata } from "next"
import { useState } from "react"
import { Shield, FileCheck, FileText, CheckCircle, ArrowRight } from "lucide-react"

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

const trustBadges = [
  { icon: Shield, label: "SOC 2" },
  { icon: FileCheck, label: "HIPAA" },
  { icon: FileText, label: "BAA Ready" },
  { icon: CheckCircle, label: "No commitment required" },
]

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
    <div className="page-transition">
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight text-balance">
              See what&apos;s recoverable in your denials.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Share a sample of denied claims. We&apos;ll analyze them and return a ready-to-send appeal for your hardest denial within 48 hours. No commitment required.
            </p>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="rounded-2xl bg-primary/10 border border-primary/20 p-10 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                Got it — we&apos;re on it.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We&apos;ll send you a secure upload link within one business day.
                <br />
                Expect an email from <strong className="text-white">hello@prismiqlabs.ai</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name and Email row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@practice.com"
                    className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Practice Name */}
              <div>
                <label htmlFor="practice" className="block text-sm font-medium text-muted-foreground mb-2">
                  Practice Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="practice"
                  name="practice"
                  type="text"
                  required
                  placeholder="Orthopedic Specialists of Virginia"
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:border-primary transition-colors"
                />
              </div>

              {/* Specialty and Volume row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="specialty" className="block text-sm font-medium text-muted-foreground mb-2">
                    Specialty <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="specialty"
                    name="specialty"
                    required
                    className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select specialty</option>
                    {specialties.map((specialty) => (
                      <option key={specialty} value={specialty}>
                        {specialty}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="volume" className="block text-sm font-medium text-muted-foreground mb-2">
                    Monthly denial volume <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="volume"
                    name="volume"
                    required
                    className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select volume</option>
                    {denialVolumes.map((volume) => (
                      <option key={volume} value={volume}>
                        {volume}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Payer challenges */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-3">
                  Primary payer challenges <span className="text-destructive">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {payers.map((payer) => (
                    <button
                      key={payer}
                      type="button"
                      onClick={() => togglePayer(payer)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedPayers.includes(payer)
                          ? "bg-primary text-background"
                          : "bg-card border border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {payer}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional info */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Anything else you&apos;d like us to know
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your biggest denial challenges..."
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:border-primary transition-colors resize-none"
                />
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 py-4">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <badge.icon className="h-4 w-4 text-primary" />
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>

              {/* Tagline */}
              <p className="text-center text-sm text-muted-foreground italic">
                Every denial is a story. PrismIQ writes the rebuttal.
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting || selectedPayers.length === 0}
                className="w-full bg-primary text-background rounded-lg px-6 py-4 text-lg font-semibold transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? "Sending..." : "Request a Pilot"}
                {!submitting && <ArrowRight className="h-5 w-5" />}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
