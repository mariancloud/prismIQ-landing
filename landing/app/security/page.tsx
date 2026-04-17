import type { Metadata } from "next"
import { Shield, FileText, ClipboardCheck, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Security",
  description: "HIPAA-compliant. BAA-ready. SOC 2 in progress. We handle protected health information and take that responsibility seriously.",
}

const securityFeatures = [
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description: "All PHI processed through PrismIQ is handled in accordance with HIPAA requirements. Data is encrypted in transit (TLS 1.2+) and at rest (AES-256). We do not use patient data for model training.",
  },
  {
    icon: FileText,
    title: "BAA Ready",
    description: "PrismIQ executes Business Associate Agreements with all pilot and production customers before any claims data is shared. Request a BAA as part of your pilot onboarding — it takes less than 24 hours.",
  },
  {
    icon: ClipboardCheck,
    title: "SOC 2 Type II (In Progress)",
    description: "We are currently completing our SOC 2 Type II audit. Documentation available to enterprise customers and RCM partners on request.",
  },
]

export default function SecurityPage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance">
            HIPAA-compliant. BAA-ready. SOC 2 in progress.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We handle protected health information. We take that seriously.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl bg-background border border-border p-8 transition-all hover:border-primary/30"
              >
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 border border-primary/20 flex-shrink-0">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-3">
                      {feature.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>Questions about our security posture?</span>
              <a
                href="mailto:security@prismiqlabs.ai"
                className="text-primary hover:underline"
              >
                security@prismiqlabs.ai
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
