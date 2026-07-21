import { PageHero } from "@/components/page-hero"
import { FinalCTA } from "@/components/final-cta"

export const metadata = {
  title: "Pricing — PrismIQ",
  description:
    "Percentage of recovered revenue — we only win when you collect. No seat licenses, no implementation fees.",
}

export default function PricingPage() {
  return (
    <div className="page-transition">
      <PageHero eyebrow="Pricing" title="We only win when you collect.">
        <p>
          PrismIQ is priced on outcomes, not access. There are no seat licenses to negotiate and no upside for us in
          software you don&apos;t use.
        </p>
      </PageHero>

      <section id="model" style={{ paddingBottom: "112px", background: "#070D1A", scrollMarginTop: "80px" }} className="px-4">
        <div className="max-w-3xl mx-auto">
          <div
            style={{
              background: "#0E1626",
              border: "1px solid #1A2438",
              borderTop: "3px solid #00F5A0",
              borderRadius: "16px",
              padding: "48px",
              textAlign: "center",
            }}
          >
            <div
              className="uppercase"
              style={{ fontSize: "12px", letterSpacing: "0.12em", color: "#00F5A0", marginBottom: "20px" }}
            >
              The Model
            </div>
            <p
              className="text-white text-balance"
              style={{ fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 700, lineHeight: 1.25, letterSpacing: "-0.01em" }}
            >
              Percentage of recovered revenue — we only win when you collect.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA headline="See what PrismIQ finds in your last 90 days of denials." />
    </div>
  )
}
