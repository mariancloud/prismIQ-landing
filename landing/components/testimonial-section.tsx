export function TestimonialSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">
          PHYSICIAN ADVISORY
        </p>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-12">
          Designed with physicians. Validated in practice.
        </h2>

        <div className="relative">
          <span className="absolute -top-8 -left-2 md:-left-8 text-8xl md:text-9xl font-serif text-primary/30 leading-none select-none">
            &ldquo;
          </span>
          
          <blockquote className="relative text-xl md:text-2xl text-foreground leading-relaxed font-light">
            Denial management has always been a black box for most specialty practices — time-consuming, inconsistent, and expensive to outsource. PrismIQ brings transparency and speed to a process that desperately needed both. I&apos;ve seen firsthand how much revenue slips through the cracks in orthopedic billing. This platform closes that gap.
          </blockquote>
        </div>

        <div className="mt-10">
          <p className="text-lg font-semibold text-white">
            Darina Stanyekeva, MD
          </p>
          <div className="mt-2 inline-flex px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            Physician Advisor, PrismIQ
          </div>
        </div>
      </div>
    </section>
  )
}
