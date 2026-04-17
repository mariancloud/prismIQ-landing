const payers = [
  { name: "UnitedHealthcare", description: "Full policy coverage" },
  { name: "Anthem Blue Cross", description: "Full policy coverage" },
  { name: "Aetna", description: "Full policy coverage" },
]

export function PayerCoverageSection() {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
          Built for the payers that fight you hardest.
        </h2>
        
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {payers.map((payer) => (
            <div
              key={payer.name}
              className="rounded-xl bg-background border border-border p-6 transition-all hover:border-primary/30"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {payer.name}
              </h3>
              <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
                {payer.description}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-muted-foreground">
          Additional payer coverage added continuously.
        </p>
      </div>
    </section>
  )
}
