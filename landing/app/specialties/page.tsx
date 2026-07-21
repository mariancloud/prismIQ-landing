import { PageHero } from "@/components/page-hero"
import { FinalCTA } from "@/components/final-cta"

export const metadata = {
  title: "Built for Orthopedics, Spine, and Cardiology — PrismIQ",
  description:
    "The specialties where payer scrutiny is highest and manual pre-auth is slowest. That is where PrismIQ was built to operate first.",
}

const specialties = [
  {
    name: "Orthopedics",
    characteristics: ["Implant documentation", "Complex CPT/ICD-10 pairings"],
  },
  {
    name: "Spine",
    characteristics: ["Multi-level procedures", "Unlisted codes"],
  },
  {
    name: "Cardiology",
    characteristics: ["Complex CPT/ICD-10 pairings", "High payer scrutiny"],
  },
]

export default function SpecialtiesPage() {
  return (
    <div className="page-transition">
      <PageHero title="Built for the specialties where one denied claim costs the most.">
        <p>
          Complex CPT/ICD-10 pairings, implant documentation, unlisted codes, multi-level procedures — the cases where
          payer scrutiny is highest and manual pre-auth is slowest. That is where PrismIQ was built to operate first.
        </p>
      </PageHero>

      <section style={{ paddingTop: "40px", paddingBottom: "112px", background: "#070D1A" }} className="px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map((s) => (
            <div
              key={s.name}
              style={{
                background: "#0E1626",
                border: "1px solid #1A2438",
                borderTop: "3px solid #00F5A0",
                borderRadius: "12px",
                padding: "36px",
              }}
            >
              <h2 className="text-white" style={{ fontSize: "24px", fontWeight: 700, marginBottom: "24px", letterSpacing: "-0.01em" }}>
                {s.name}
              </h2>
              <div className="space-y-3">
                {s.characteristics.map((c) => (
                  <div key={c} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ color: "#00F5A0", flexShrink: 0 }} aria-hidden="true">
                      →
                    </span>
                    <span style={{ fontSize: "16px", color: "#D1D5DB", lineHeight: 1.5 }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Geographic proof band */}
      <section style={{ paddingTop: "56px", paddingBottom: "56px", background: "#0B1220", borderTop: "1px solid #1A2438", borderBottom: "1px solid #1A2438" }} className="px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p style={{ fontSize: "16px", color: "#8A93A5", lineHeight: 1.6 }}>
            In active pilot deployments with 2&ndash;25 provider specialty practices across California
          </p>
        </div>
      </section>

      <FinalCTA headline="See a real authorization packet PrismIQ filed for a case like yours." />
    </div>
  )
}
