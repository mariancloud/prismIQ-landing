import { AlertTriangle, FileWarning, AlertCircle } from "lucide-react"

const checklistItems = [
  { label: "Prior Authorization", severity: "CRITICAL", color: "text-destructive" },
  { label: "Operative Report", severity: "HIGH", color: "text-amber-400" },
  { label: "Medical Necessity Documentation", severity: "MEDIUM", color: "text-yellow-400" },
]

export function RiskCheckSection() {
  return (
    <section id="risk-check" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Copy */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
              Stop the denial before it starts.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Risk Check runs before you submit. Enter the payer, CPT code, ICD-10, billed amount, and what documentation you have on hand. PrismIQ returns a denial risk score, the top reasons this specific payer flags this specific procedure, and a documentation readiness checklist with severity ratings.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A $24,000 Total Knee Arthroplasty to UnitedHealthcare gets a different analysis than a Cervical Fusion to Anthem. The payer policies are different. The documentation requirements are different. Risk Check knows the difference.
            </p>
          </div>

          {/* Right side - UI Mockup */}
          <div className="lg:pl-8">
            <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-2xl shadow-black/20">
              {/* Header */}
              <div className="px-6 py-4 border-b border-border bg-muted/30">
                <h3 className="text-lg font-semibold text-white">Risk Check</h3>
                <p className="text-sm text-muted-foreground">Pre-submission denial analysis</p>
              </div>

              {/* Form mockup */}
              <div className="p-6 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Payer</label>
                    <div className="bg-background border border-border rounded-lg px-3 py-2 text-sm text-white">
                      UnitedHealthcare
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">CPT Code</label>
                    <div className="bg-background border border-border rounded-lg px-3 py-2 text-sm text-white">
                      27447
                    </div>
                  </div>
                </div>

                {/* Denial Risk Score */}
                <div className="mt-4 rounded-xl bg-destructive/10 border border-destructive/20 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      <span className="text-sm font-medium text-white">Denial Risk</span>
                    </div>
                    <span className="text-2xl font-bold text-destructive">78%</span>
                  </div>
                  <span className="text-xs font-semibold text-destructive bg-destructive/20 px-2 py-0.5 rounded">
                    CRITICAL
                  </span>
                </div>

                {/* Documentation Readiness */}
                <div className="rounded-xl bg-amber-400/10 border border-amber-400/20 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FileWarning className="h-5 w-5 text-amber-400" />
                      <span className="text-sm font-medium text-white">Documentation Readiness</span>
                    </div>
                    <span className="text-2xl font-bold text-amber-400">70</span>
                  </div>
                  <span className="text-xs font-semibold text-amber-400 bg-amber-400/20 px-2 py-0.5 rounded">
                    NEEDS ATTENTION
                  </span>
                </div>

                {/* Checklist */}
                <div className="mt-2">
                  <h4 className="text-sm font-medium text-white mb-3">Documentation Checklist</h4>
                  <div className="flex flex-col gap-2">
                    {checklistItems.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between bg-background border border-border rounded-lg px-3 py-2"
                      >
                        <div className="flex items-center gap-2">
                          <AlertCircle className={`h-4 w-4 ${item.color}`} />
                          <span className="text-sm text-muted-foreground">{item.label}</span>
                        </div>
                        <span className={`text-xs font-semibold ${item.color}`}>
                          {item.severity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
