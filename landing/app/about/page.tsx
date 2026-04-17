import type { Metadata } from "next"
import { User } from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description: "Built by someone who has seen both sides. PrismIQ exists to close the gap between specialty practices and payers.",
}

export default function AboutPage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance">
            Built by someone who has seen both sides.
          </h1>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Founder copy */}
            <div className="lg:col-span-3">
              <p className="text-lg text-muted-foreground leading-relaxed">
                PrismIQ was built out of a frustration that&apos;s familiar to anyone who has worked inside a healthcare organization: the people delivering care are the last ones to get paid fairly for it.
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                After years in enterprise consulting and technology leadership — including work on large-scale operations platforms at companies acquired by Cisco — the pattern was clear. Specialty practices, particularly in orthopedics and spine, were losing significant revenue not from bad care or bad billing, but from an unequal fight with payers who had better technology, better data, and more time.
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                PrismIQ exists to close that gap.
              </p>
            </div>

            {/* Founder card */}
            <div className="lg:col-span-2">
              <div className="rounded-xl bg-background border border-border p-8 text-center">
                <div className="mx-auto h-24 w-24 rounded-full bg-muted/50 border border-border flex items-center justify-center mb-6">
                  <User className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-white">Neeraj Srivastava</h3>
                <p className="text-muted-foreground">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Physician Advisory Board */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Physician Advisory Board
          </h2>

          <div className="rounded-xl bg-card border border-border border-l-4 border-l-primary p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Avatar placeholder */}
              <div className="h-20 w-20 rounded-full bg-muted/50 border border-border flex items-center justify-center flex-shrink-0">
                <User className="h-10 w-10 text-muted-foreground" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white">
                  Darina Stanyekeva, MD
                </h3>
                <span className="inline-flex mt-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                  Physician Advisor, PrismIQ
                </span>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Dr. Stanyekeva brings clinical perspective to PrismIQ&apos;s denial logic and appeal generation. Her firsthand experience with revenue cycle challenges in specialty practice directly informs how PrismIQ prioritizes payer policy coverage and documentation requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
