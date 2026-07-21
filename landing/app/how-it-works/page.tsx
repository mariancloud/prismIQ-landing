import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { ClosedLoopSection } from "@/components/closed-loop-section"
import { IntegrationStrip } from "@/components/integration-strip"
import { FinalCTA } from "@/components/final-cta"

export const metadata = {
  title: "How PrismIQ Works — Why the Closed Loop Is Different",
  description:
    "Most RCM tools automate isolated steps. PrismIQ connects every phase into one closed loop, so every downstream outcome rewrites the upstream rule that caused it.",
}

type ArchBlock = { heading: string; body: string }

const architecture: ArchBlock[] = [
  {
    heading: "Sits on top of your existing systems",
    body: "PrismIQ connects to your EHR and practice-management system directly — it doesn't replace them. Your team keeps the tools they already know.",
  },
  {
    heading: "Reads and writes through API & FHIR",
    body: "Structured, bidirectional integration with Epic, athenahealth, NextGen, and eClinicalWorks — so data flows both ways instead of being re-keyed between portals.",
  },
  {
    heading: "One shared model of every claim",
    body: "Intake, authorization, coding, submission, and remittance all operate on the same record — which is what makes the feedback loop possible in the first place.",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="page-transition">
      <PageHero
        eyebrow="Why It's Different"
        title="Most RCM tools automate steps. PrismIQ closes the loop."
      >
        <p>
          Revenue cycle management has been automated in pieces. One vendor handles eligibility. Another handles prior
          auth. Another handles denials. They each do their job. None of them talk to each other.
        </p>
        <p>
          So a claim gets denied, your billing team appeals it and wins, but the intake error that caused it never gets
          flagged — and it happens again next month. PrismIQ is built to close that gap.
        </p>
      </PageHero>

      {/* The feedback mechanism — the core difference */}
      <ClosedLoopSection />

      {/* Integration architecture */}
      <section
        style={{ paddingTop: "112px", paddingBottom: "112px", background: "#0B1220", borderTop: "1px solid #1A2438" }}
        className="px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14 space-y-4">
            <div className="text-xs font-medium uppercase" style={{ color: "#00F5A0", letterSpacing: "0.12em" }}>
              Integration Architecture
            </div>
            <h2
              className="text-white text-balance"
              style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}
            >
              It plugs into what you already run.
            </h2>
            <p style={{ fontSize: "18px", color: "#D1D5DB", lineHeight: 1.6 }}>
              The closed loop only works if every phase shares the same data. PrismIQ connects directly to your existing
              systems rather than asking you to rip them out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {architecture.map((block) => (
              <div
                key={block.heading}
                style={{
                  background: "#0E1626",
                  border: "1px solid #1A2438",
                  borderRadius: "12px",
                  padding: "28px",
                  height: "100%",
                }}
              >
                <div className="text-white" style={{ fontSize: "18px", fontWeight: 600, marginBottom: "10px" }}>
                  {block.heading}
                </div>
                <p style={{ fontSize: "15px", color: "#D1D5DB", lineHeight: 1.6 }}>{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IntegrationStrip />

      {/* Oversight — link to Trust */}
      <section
        style={{ paddingTop: "96px", paddingBottom: "96px", background: "#070D1A", borderTop: "1px solid #1A2438" }}
        className="px-4"
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2
            className="text-white text-balance"
            style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em" }}
          >
            Autonomous where it&apos;s safe. Supervised where it counts.
          </h2>
          <p style={{ fontSize: "18px", color: "#D1D5DB", lineHeight: 1.6 }}>
            PrismIQ acts on the routine work and routes judgment calls to your team. Every stage has a defined level of
            human oversight — laid out in full on the Trust page.
          </p>
          <div>
            <Link
              href="/trust"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
              style={{ color: "#00F5A0" }}
            >
              See the oversight model <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA headline="Send us 90 days of denials. We'll show you the pattern." />
    </div>
  )
}
