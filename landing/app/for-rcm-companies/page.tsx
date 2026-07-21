import { PageHero } from "@/components/page-hero"
import { FinalCTA } from "@/components/final-cta"
import { IntegrationStrip } from "@/components/integration-strip"

export const metadata = {
  title: "For Billing & RCM Companies — PrismIQ",
  description:
    "Autonomous agents handle intake validation, portal monitoring, appeals drafting, and remittance reconciliation at scale — across every client practice.",
}

type Step = { label: string; body: string }

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

export default function ForRcmCompaniesPage() {
  return (
    <div className="page-transition">
      <PageHero
        eyebrow="For Billing &amp; RCM Companies"
        title="The output of a bigger team without the overhead."
      >
        <p>
          Autonomous agents handle intake validation, portal monitoring, appeals drafting, and remittance
          reconciliation at scale. Full visibility into denial root causes, appeal outcomes, and recovery projections —
          across every client practice, in real time.
        </p>
      </PageHero>

      <IntegrationStrip />

      <section style={{ paddingTop: "112px", paddingBottom: "112px", background: "#070D1A" }} className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14 space-y-4">
            <div className="text-xs font-medium uppercase" style={{ color: "#00F5A0", letterSpacing: "0.12em" }}>
              The Billing Workflow
            </div>
            <h2
              className="text-white text-balance"
              style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}
            >
              One system running the full cycle across every client.
            </h2>
            <p style={{ fontSize: "18px", color: "#D1D5DB", lineHeight: 1.6 }}>
              PrismIQ works the claim from intake to remittance so your team supervises exceptions instead of keying in
              the routine work — and every outcome feeds back into the rules that prevent the next denial.
            </p>
          </div>
          <StepWalk steps={billingSteps} />
        </div>
      </section>

      <FinalCTA headline="See PrismIQ run across your client book." />
    </div>
  )
}
