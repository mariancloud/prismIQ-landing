import { HomeHero } from "@/components/home/home-hero"
import { StatementSection } from "@/components/statement-section"
import { PlatformColumns } from "@/components/home/platform-columns"
import { ClosedLoopSection } from "@/components/closed-loop-section"
import { AudienceSplit } from "@/components/home/audience-split"
import { SpecialtiesCallout } from "@/components/home/specialties-callout"
import { FinalCTA } from "@/components/final-cta"

export const metadata = {
  title: "PrismIQ — AI Revenue Cycle Management for Specialty Practices",
  description:
    "One AI system across the full revenue cycle — intake through collections. Stop denials before they start.",
}

export default function HomePage() {
  return (
    <div className="page-transition">
      <HomeHero />

      {/* The Problem */}
      <StatementSection heading="Why RCM still breaks">
        <p style={{ fontSize: "18px", color: "#D1D5DB", lineHeight: 1.6 }}>
          Revenue cycle management has been automated in pieces. One vendor handles eligibility. Another handles prior
          auth. Another handles denials. They each do their job. None of them talk to each other.
        </p>
        <p style={{ fontSize: "18px", color: "#D1D5DB", lineHeight: 1.6 }}>
          A claim gets denied. Your billing team appeals it and wins. But the intake error that caused it never gets
          flagged — so it happens again next month, on the next patient, on the next claim.
        </p>
        <p style={{ fontSize: "22px", color: "#FFFFFF", lineHeight: 1.4, fontWeight: 600 }}>
          That gap between the back office and the front desk is where the money disappears.
        </p>
      </StatementSection>

      {/* The Solution */}
      <StatementSection heading="One system. Every phase. Closed loop.">
        <p style={{ fontSize: "18px", color: "#D1D5DB", lineHeight: 1.6 }}>
          PrismIQ is a single AI layer across the full revenue cycle — patient access, eligibility, prior authorization,
          coding, claims, denial management, remittance, and patient collections. Every downstream outcome feeds back
          into upstream rules automatically.
        </p>
        <p
          className="text-balance"
          style={{ fontSize: "clamp(24px, 3.4vw, 32px)", color: "#00F5A0", lineHeight: 1.3, fontWeight: 700, letterSpacing: "-0.01em" }}
        >
          A denial doesn&apos;t just get resolved. It rewrites the rule that prevents the next one.
        </p>
      </StatementSection>

      <PlatformColumns />
      <ClosedLoopSection />
      <AudienceSplit />
      <SpecialtiesCallout />
      <FinalCTA headline="See what PrismIQ finds in your last 90 days of denials." />
    </div>
  )
}
