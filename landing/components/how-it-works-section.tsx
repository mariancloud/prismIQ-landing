import { Upload, Search, FileText } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Connect ERA/835",
    description: "Upload denied claims or connect your ERA/835 feed directly. We accept all major clearinghouse formats.",
  },
  {
    number: "02",
    icon: Search,
    title: "PrismIQ analyzes payer policy",
    description: "Our AI cross-references the denial reason code against current payer policy language and medical necessity criteria.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Receive your appeal letter",
    description: "You receive a policy-cited, ready-to-send appeal letter within 48 hours. No templates — constructed arguments.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            From denied claim to appeal letter in three simple steps.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-xl bg-card border border-border p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="absolute -top-3 left-6 bg-primary text-background text-xs font-bold px-3 py-1 rounded-md">
                {step.number}
              </div>
              <div className="mt-4 mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
