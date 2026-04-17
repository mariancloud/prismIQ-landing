"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Shield, FileCheck, FileText } from "lucide-react"

const trustBadges = [
  { icon: Shield, label: "SOC 2" },
  { icon: FileCheck, label: "HIPAA" },
  { icon: FileText, label: "BAA Ready" },
]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative pt-24 pb-16 md:pt-32 lg:py-32 lg:min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 mb-8">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
              <span className="text-sm font-medium text-primary">
                Now in Early Access
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance">
              Overturn Denials with Policy-Level Precision
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Every month, a biller at a small orthopedic or spine surgery practice gets a remittance back from Anthem Blue Cross and makes a quiet decision: is this worth fighting? PrismIQ answers that question before she picks up the phone — and drafts the appeal before she finishes her coffee.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/pilot"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-background transition-colors hover:bg-primary/90"
              >
                Request a Pilot
              </Link>
              <Link
                href="/product"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-transparent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-card"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
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
          </div>

          {/* Right side - UI Mockup */}
          <div className="lg:pl-8">
            <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-2xl shadow-black/20">
              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-muted/30">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-background border border-border text-xs font-medium text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                  3 claims analyzed
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  2 appealable
                </div>
              </div>

              {/* Claims */}
              <div className="p-4 flex flex-col gap-3">
                {/* Claim 1 */}
                <div className="rounded-xl bg-muted/30 border border-border p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-muted-foreground">CLM-2024-1847</span>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                      Appeal Ready
                    </span>
                  </div>
                  <p className="text-base font-semibold text-white mb-0.5">Total Knee Arthroplasty</p>
                  <p className="text-sm text-muted-foreground mb-4">Anthem Blue Cross</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">$24,000</span>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground">Win Prob </span>
                      <span className="text-lg font-bold text-primary">72%</span>
                    </div>
                  </div>
                  <button className="w-full rounded-lg bg-primary text-background text-sm font-semibold py-2.5 transition-colors hover:bg-primary/90">
                    View Appeal
                  </button>
                </div>

                {/* Claim 2 */}
                <div className="rounded-xl bg-muted/30 border border-border p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-muted-foreground">CLM-2024-1901</span>
                    <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                      In Review
                    </span>
                  </div>
                  <p className="text-base font-semibold text-white mb-0.5">Cervical Fusion</p>
                  <p className="text-sm text-muted-foreground mb-4">UnitedHealthcare</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">$18,500</span>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground">Win Prob </span>
                      <span className="text-lg font-bold text-primary">68%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-border bg-muted/30">
                <div className="flex-1 mr-4">
                  <p className="text-xs text-muted-foreground mb-2">Appeal generated in</p>
                  <div className="h-1 bg-primary/20 rounded-full overflow-hidden">
                    {mounted && (
                      <div className="h-full bg-primary rounded-full animate-progress-fill" />
                    )}
                  </div>
                </div>
                <span className="text-sm font-bold text-primary font-mono">00:47</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
