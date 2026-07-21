import { PageHero } from "@/components/page-hero"
import { FinalCTA } from "@/components/final-cta"
import { InlineCTALink } from "@/components/inline-cta-link"
import { IntegrationStrip } from "@/components/integration-strip"
import { phases } from "@/components/platform-data"

export const metadata = {
  title: "The PrismIQ Platform — Before, During, and After the Claim",
  description:
    "One AI layer across the full revenue cycle — patient access, eligibility, prior authorization, coding, claims, denial management, remittance, and patient collections.",
}

export default function PlatformPage() {
  return (
    <div className="page-transition">
      <PageHero title="One system. Every phase. Closed loop.">
        <p>
          PrismIQ is a single AI layer across the full revenue cycle — patient access, eligibility, prior authorization,
          coding, claims, denial management, remittance, and patient collections. Every downstream outcome feeds back
          into upstream rules automatically.
        </p>
      </PageHero>

      {phases.map((phase, i) => (
        <section
          key={phase.number}
          style={{
            paddingTop: "96px",
            paddingBottom: "96px",
            background: i % 2 === 1 ? "#0B1220" : "#070D1A",
            borderTop: "1px solid #1A2438",
          }}
          className="px-4"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-start gap-6 mb-14">
              <div
                style={{ fontSize: "clamp(48px, 8vw, 88px)", fontWeight: 700, color: "#1F2C44", lineHeight: 0.9 }}
                aria-hidden="true"
              >
                {phase.number}
              </div>
              <div className="pt-2">
                <div
                  className="uppercase"
                  style={{ fontSize: "12px", letterSpacing: "0.12em", color: "#00F5A0", marginBottom: "10px" }}
                >
                  Phase {phase.number} — {phase.label}
                </div>
                <h2
                  className="text-white text-balance"
                  style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}
                >
                  {phase.heading}
                </h2>
                <div style={{ marginTop: "14px", color: "#00F5A0", fontSize: "16px", fontWeight: 600, letterSpacing: "-0.01em" }}>
                  {phase.metric}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {phase.blocks.map((block) => (
                <div key={block.subheading}>
                  <div className="text-white" style={{ fontSize: "18px", fontWeight: 600, marginBottom: "10px" }}>
                    {block.subheading}
                  </div>
                  <p style={{ fontSize: "17px", color: "#D1D5DB", lineHeight: 1.6, maxWidth: "58ch" }}>{block.body}</p>
                </div>
              ))}
            </div>

            {phase.number === "02" && (
              <div className="mt-12">
                <InlineCTALink href="/denial-teardown">
                  This is the part most tools skip. See it on your claims
                </InlineCTALink>
              </div>
            )}
          </div>
        </section>
      ))}

      <IntegrationStrip />

      <FinalCTA headline="See this running on your claims, not our slides." />
    </div>
  )
}
