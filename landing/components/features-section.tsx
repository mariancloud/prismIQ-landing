const features = [
  {
    title: "Claim IQ™",
    subtitle: "Your remittance, translated.",
    description: "Drop in your 835 file. Claim IQ reads every line — what the payer paid, what they cut, and why — in plain English. Then it tells you which denials are worth fighting and writes the appeal argument, already citing the payer's own policy language.",
    tags: ["All major clearinghouse formats", "Anthem, UHC, Aetna"],
  },
  {
    title: "Risk Check",
    subtitle: "Know before you submit.",
    description: "Before a high-value claim goes out, run it through Risk Check. Enter the payer, procedure, and what documentation you have on hand. You'll get a denial probability score and a specific list of what's missing — so the claim goes out clean the first time.",
    tags: ["Pre-submission · Post-denial", "CPT and payer-specific"],
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Two tools. One goal: every dollar back.
          </h2>
          <p className="text-lg text-muted-foreground">
            Purpose-built for orthopedic and spine billing teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative rounded-xl bg-background border border-border p-8 border-l-4 border-l-primary transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-primary font-medium mb-4">
                {feature.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {feature.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex px-3 py-1 rounded-full bg-muted/50 border border-border text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
