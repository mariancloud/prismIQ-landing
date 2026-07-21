import { PageHero } from "@/components/page-hero"
import { ClosedLoopSection } from "@/components/closed-loop-section"
import { FinalCTA } from "@/components/final-cta"

export const metadata = {
  title: "How PrismIQ Works — The Closed-Loop Revenue Cycle",
  description:
    "Revenue cycle management has been automated in pieces. PrismIQ connects every phase into one closed loop — for physician practices and billing companies alike.",
}

type Step = { label: string; body: string }

function StepWalk({ steps }: { steps: Step[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {steps.map((step, i) => (
        <div key={step.label} className="relative">
          <div
            style={{
              background: "#0E1626",
              border: "1px solid #1A2438",
              borderTop: "3px solid #00F5A0",
              borderRadius: "12px",
              padding: "28px",
              height: "100%",
            }}
          >
            <div
              className="uppercase"
              style={{ fontSize: "12px", letterSpacing: "0.12em", color: "#00F5A0", marginBottom: "10px" }}
            >
              Step {String(i + 1).padStart(2, "0")}
            </div>
            <div className="text-white" style={{ fontSize: "18px", fontWeight: 600, marginBottom: "10px" }}>
              {step.label}
            </div>
            <p style={{ fontSize: "15px", color: "#D1D5DB", lineHeight: 1.6 }}>{step.body}</p>
          </div>
          {i < steps.length - 1 && (
            <div
              aria-hidden="true"
              className="hidden md:block"
              style={{
                position: "absolute",
                right: "-18px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#3A4A66",
                fontSize: "20px",
                zIndex: 1,
              }}
            >
              →
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

const practiceSteps: Step[] = [
  {
    label: "Referral in",
    body: "Referrals, faxes, and intake forms are read, structured, and validated at the front door — not after a claim bounces back 30 days later.",
  },
  {
    label: "Auth filed, claim clean",
    body: "PrismIQ reads the chart, matches it to the payer's clinical coverage policy, and files a complete authorization packet. Every claim is scrubbed against payer-specific edit rules before submission.",
  },
  {
    label: "Payment posted",
    body: "Every 835 ERA file is parsed in real time. Underpayments, contract shortfalls, and silent zero-balance write-offs are flagged before they settle into an aging bucket.",
  },
]

const billingSteps: Step[] = [
  {
    label: "Intake validated",
    body: "Autonomous agents handle intake validation and portal monitoring at scale — across every client practice.",
  },
  {
    label: "Appeals drafted",
    body: "Appeals are drafted automatically, mapping the clinical narrative to the payer's own published policy language.",
  },
  {
    label: "Remittance reconciled",
    body: "Remittance reconciliation runs in real time, with full visibility into denial root causes, appeal outcomes, and recovery projections.",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="page-transition">
      <PageHero title="Why RCM still breaks.">
        <p>
          Revenue cycle management has been automated in pieces. One vendor handles eligibility. Another handles prior
          auth. Another handles denials. They each do their job. None of them talk to each other.
        </p>
        <p>
          A claim gets denied. Your billing team appeals it and wins. But the intake error that caused it never gets
          flagged — so it happens again next month, on the next patient, on the next claim. That gap between the back
          office and the front desk is where the money disappears.
        </p>
      </PageHero>

      <ClosedLoopSection />

      {/* Practices */}
      <section
        id="practices"
        style={{ paddingTop: "112px", paddingBottom: "112px", background: "#0B1220", borderTop: "1px solid #1A2438", scrollMarginTop: "80px" }}
        className="px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14 space-y-4">
            <div className="text-xs font-medium uppercase" style={{ color: "#00F5A0", letterSpacing: "0.12em" }}>
              For Physician Practices &amp; Medical Groups
            </div>
            <h2
              className="text-white text-balance"
              style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}
            >
              Your staff does clinical work. PrismIQ does the rest.
            </h2>
            <p style={{ fontSize: "18px", color: "#D1D5DB", lineHeight: 1.6 }}>
              Faster authorizations without the portal busywork. Documentation that matches payer criteria before the
              claim goes out. High-value surgical, imaging, and specialty revenue protected from end to end — not just at
              the denial stage.
            </p>
          </div>
          <StepWalk steps={practiceSteps} />
        </div>
      </section>

      {/* Billing */}
      <section
        id="billing"
        style={{ paddingTop: "112px", paddingBottom: "112px", background: "#070D1A", borderTop: "1px solid #1A2438", scrollMarginTop: "80px" }}
        className="px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14 space-y-4">
            <div className="text-xs font-medium uppercase" style={{ color: "#00F5A0", letterSpacing: "0.12em" }}>
              For Billing &amp; RCM Companies
            </div>
            <h2
              className="text-white text-balance"
              style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}
            >
              The output of a bigger team without the overhead.
            </h2>
            <p style={{ fontSize: "18px", color: "#D1D5DB", lineHeight: 1.6 }}>
              Autonomous agents handle intake validation, portal monitoring, appeals drafting, and remittance
              reconciliation at scale. Full visibility into denial root causes, appeal outcomes, and recovery projections
              — across every client practice, in real time.
            </p>
            <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.6 }}>
              Integrates directly with Epic, athenahealth, NextGen, and eClinicalWorks via API and FHIR.
            </p>
          </div>
          <StepWalk steps={billingSteps} />
        </div>
      </section>

      <FinalCTA headline="Send us 90 days of denials. We'll show you the pattern." />
    </div>
  )
}
