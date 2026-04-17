import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-primary/20 via-primary/10 to-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
          See what PrismIQ finds in your denials.
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Share a sample of denied claims. We&apos;ll return a ready-to-send appeal within 48 hours.
        </p>
        <Link
          href="/pilot"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-background transition-colors hover:bg-primary/90"
        >
          Request a Pilot
        </Link>
      </div>
    </section>
  )
}
