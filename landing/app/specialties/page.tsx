import { PageHero } from "@/components/page-hero"
import { FinalCTA } from "@/components/final-cta"

export const metadata = {
  title: "Built for Orthopedics, Spine, and Cardiology — PrismIQ",
  description:
    "Specialty depth demonstrated through worked examples: the denial, the documentation gap, the packet PrismIQ filed, and the upstream rule it wrote so it doesn't recur.",
}

type WorkedExample = {
  name: string
  scenario: string
  gap: string
  action: string
  rule: string
}

// NOTE: Content below is intentionally placeholder text. Real clinical scenarios,
// payer names, and denial codes will be supplied by the PrismIQ team.
const examples: WorkedExample[] = [
  {
    name: "Orthopedics",
    scenario: "[ Placeholder — procedure + payer + denial type. To be written by PrismIQ. ]",
    gap: "[ Placeholder — the documentation gap that caused the denial. To be written by PrismIQ. ]",
    action: "[ Placeholder — the authorization packet or appeal PrismIQ drafted. To be written by PrismIQ. ]",
    rule: "[ Placeholder — the upstream rule PrismIQ wrote so it doesn't recur. To be written by PrismIQ. ]",
  },
  {
    name: "Spine",
    scenario: "[ Placeholder — procedure + payer + denial type. To be written by PrismIQ. ]",
    gap: "[ Placeholder — the documentation gap that caused the denial. To be written by PrismIQ. ]",
    action: "[ Placeholder — the authorization packet or appeal PrismIQ drafted. To be written by PrismIQ. ]",
    rule: "[ Placeholder — the upstream rule PrismIQ wrote so it doesn't recur. To be written by PrismIQ. ]",
  },
  {
    name: "Cardiology",
    scenario: "[ Placeholder — procedure + payer + denial type. To be written by PrismIQ. ]",
    gap: "[ Placeholder — the documentation gap that caused the denial. To be written by PrismIQ. ]",
    action: "[ Placeholder — the authorization packet or appeal PrismIQ drafted. To be written by PrismIQ. ]",
    rule: "[ Placeholder — the upstream rule PrismIQ wrote so it doesn't recur. To be written by PrismIQ. ]",
  },
]

const steps = [
  { label: "The scenario", key: "scenario" as const },
  { label: "The documentation gap", key: "gap" as const },
  { label: "What PrismIQ did", key: "action" as const },
  { label: "The upstream rule it wrote", key: "rule" as const },
]

export default function SpecialtiesPage() {
  return (
    <div className="page-transition">
      <PageHero
        eyebrow="Specialty Depth"
        title="Built for the specialties where one denied claim costs the most."
      >
        <p>
          Complex CPT/ICD-10 pairings, implant documentation, unlisted codes, multi-level procedures — the cases where
          payer scrutiny is highest and manual pre-auth is slowest. Below, each specialty is shown the way it actually
          plays out: a denial, the gap that caused it, what PrismIQ filed, and the rule it wrote so it never recurs.
        </p>
      </PageHero>

      <section style={{ paddingBottom: "40px", background: "#070D1A" }} className="px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {examples.map((ex) => (
            <article
              key={ex.name}
              style={{
                background: "#0E1626",
                border: "1px solid #1A2438",
                borderTop: "3px solid #00F5A0",
                borderRadius: "16px",
                padding: "40px",
              }}
            >
              <h2
                className="text-white"
                style={{ fontSize: "26px", fontWeight: 700, marginBottom: "28px", letterSpacing: "-0.01em" }}
              >
                {ex.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                {steps.map((step, i) => (
                  <div key={step.key}>
                    <div
                      className="uppercase"
                      style={{ fontSize: "12px", letterSpacing: "0.12em", color: "#00F5A0", marginBottom: "8px" }}
                    >
                      {String(i + 1).padStart(2, "0")} — {step.label}
                    </div>
                    <p style={{ fontSize: "16px", color: "#8A93A5", lineHeight: 1.6, fontStyle: "italic" }}>
                      {ex[step.key]}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Geographic proof band */}
      <section
        style={{ paddingTop: "56px", paddingBottom: "56px", background: "#0B1220", borderTop: "1px solid #1A2438", borderBottom: "1px solid #1A2438" }}
        className="px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p style={{ fontSize: "16px", color: "#8A93A5", lineHeight: 1.6 }}>
            Powering 2&ndash;25 provider specialty practices across California and nationwide
          </p>
        </div>
      </section>

      <FinalCTA headline="See a real authorization packet PrismIQ filed for a case like yours." />
    </div>
  )
}
