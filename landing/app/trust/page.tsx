import { PageHero } from "@/components/page-hero"
import { FinalCTA } from "@/components/final-cta"

export const metadata = {
  title: "Trust — AI Oversight, Liability & Data Handling",
  description:
    "Where the human stays in the loop, how PrismIQ handles PHI, how every decision is logged, our compliance posture, and what onboarding looks like.",
}

// Rows for the human-in-the-loop table. The two policy columns are intentionally
// left as marked placeholders — fill in the actual per-row policy in the arrays below.
const workflowStages = [
  "Intake validation",
  "Eligibility check",
  "Prior authorization",
  "Coding & charge capture",
  "Claims submission",
  "Denial appeals",
  "Remittance posting",
  "Patient collections",
]

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.04em",
        color: "#00F5A0",
        border: "1px dashed #2A3A55",
        borderRadius: "6px",
        padding: "4px 10px",
        background: "rgba(0, 245, 160, 0.04)",
      }}
    >
      {children}
    </span>
  )
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-3xl mb-10 space-y-3">
      <div className="text-xs font-medium uppercase" style={{ color: "#00F5A0", letterSpacing: "0.12em" }}>
        {eyebrow}
      </div>
      <h2
        className="text-white text-balance"
        style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
    </div>
  )
}

function PolicyPlaceholderBlock({ note }: { note: string }) {
  return (
    <div
      style={{
        background: "#0E1626",
        border: "1px dashed #2A3A55",
        borderRadius: "12px",
        padding: "28px",
      }}
    >
      <div
        className="uppercase"
        style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", color: "#00F5A0", marginBottom: "10px" }}
      >
        To Be Completed
      </div>
      <p style={{ fontSize: "15px", color: "#8A93A5", lineHeight: 1.6 }}>{note}</p>
    </div>
  )
}

export default function TrustPage() {
  return (
    <div className="page-transition">
      <PageHero eyebrow="Trust & Oversight" title="AI does the work. People stay accountable.">
        <p>
          PrismIQ runs autonomous agents across your revenue cycle — but every consequential action is reviewable,
          attributable, and bounded by human approval. Here is exactly who reviews the output, how your data is handled,
          and where the liability sits.
        </p>
      </PageHero>

      {/* SECTION 1 — Human in the loop */}
      <section
        style={{ paddingTop: "96px", paddingBottom: "96px", background: "#0B1220", borderTop: "1px solid #1A2438" }}
        className="px-4"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Oversight" title="Where the human stays in the loop" />

          <div style={{ border: "1px solid #1A2438", borderRadius: "12px", overflow: "hidden" }}>
            <div className="overflow-x-auto">
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "640px" }}>
                <thead>
                  <tr style={{ background: "#0E1626" }}>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "16px 20px",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        letterSpacing: "0.02em",
                        borderBottom: "1px solid #1A2438",
                        width: "34%",
                      }}
                    >
                      Workflow stage
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "16px 20px",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        letterSpacing: "0.02em",
                        borderBottom: "1px solid #1A2438",
                        width: "33%",
                      }}
                    >
                      PrismIQ acts
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "16px 20px",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        letterSpacing: "0.02em",
                        borderBottom: "1px solid #1A2438",
                        width: "33%",
                      }}
                    >
                      Human approves
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {workflowStages.map((stage, i) => (
                    <tr key={stage} style={{ background: i % 2 === 0 ? "#070D1A" : "#0A1120" }}>
                      <td
                        style={{
                          padding: "18px 20px",
                          fontSize: "15px",
                          fontWeight: 600,
                          color: "#FFFFFF",
                          borderBottom: i < workflowStages.length - 1 ? "1px solid #1A2438" : "none",
                          verticalAlign: "top",
                        }}
                      >
                        {stage}
                      </td>
                      <td
                        style={{
                          padding: "18px 20px",
                          borderBottom: i < workflowStages.length - 1 ? "1px solid #1A2438" : "none",
                          verticalAlign: "top",
                        }}
                      >
                        <Placeholder>EDIT: PrismIQ action</Placeholder>
                      </td>
                      <td
                        style={{
                          padding: "18px 20px",
                          borderBottom: i < workflowStages.length - 1 ? "1px solid #1A2438" : "none",
                          verticalAlign: "top",
                        }}
                      >
                        <Placeholder>EDIT: Human approval</Placeholder>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p style={{ fontSize: "13px", color: "#8A93A5", lineHeight: 1.6, marginTop: "16px" }}>
            The &ldquo;PrismIQ acts&rdquo; and &ldquo;Human approves&rdquo; cells are editable placeholders. Fill in the
            actual policy per row.
          </p>
        </div>
      </section>

      {/* SECTION 2 — Data / training */}
      <section
        style={{ paddingTop: "96px", paddingBottom: "96px", background: "#070D1A", borderTop: "1px solid #1A2438" }}
        className="px-4"
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeading eyebrow="Data Handling" title="Your data is not our training data" />
          <PolicyPlaceholderBlock note="Placeholder for the model-training and PHI-handling policy — whether customer PHI is ever used to train or fine-tune models, how data is isolated per customer, retention windows, sub-processors, and de-identification. This is the number one question from any security reviewer." />
        </div>
      </section>

      {/* SECTION 3 — Audit trail */}
      <section
        style={{ paddingTop: "96px", paddingBottom: "96px", background: "#0B1220", borderTop: "1px solid #1A2438" }}
        className="px-4"
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeading eyebrow="Traceability" title="Every decision is logged and attributable" />
          <PolicyPlaceholderBlock note="Placeholder for the audit trail and traceability policy — what is logged for each agent action, how a decision can be traced back to the input, model version, and policy citation, how long logs are retained, and how customers access them." />
        </div>
      </section>

      {/* SECTION 4 — Compliance posture */}
      <section
        style={{ paddingTop: "96px", paddingBottom: "96px", background: "#070D1A", borderTop: "1px solid #1A2438" }}
        className="px-4"
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeading eyebrow="Compliance" title="Compliance posture" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "HIPAA Compliant",
                body: "PHI is encrypted at rest and in transit. Access is scoped, logged, and least-privilege.",
                placeholder: false,
              },
              {
                title: "SOC 2 Type I complete, Type II in progress",
                body: "Type I report available on request under NDA. Type II observation period underway.",
                placeholder: false,
              },
              {
                title: "BAA executed with all customers",
                body: "A Business Associate Agreement is signed with every customer before any PHI is shared.",
                placeholder: false,
              },
              {
                title: "Model governance & error-correction process",
                body: "How model behavior is reviewed, how errors are detected and corrected, and how changes are validated before release.",
                placeholder: true,
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#0E1626",
                  border: item.placeholder ? "1px dashed #2A3A55" : "1px solid #1A2438",
                  borderTop: item.placeholder ? "1px dashed #2A3A55" : "3px solid #00F5A0",
                  borderRadius: "12px",
                  padding: "28px",
                }}
              >
                {item.placeholder && (
                  <div
                    className="uppercase"
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      color: "#00F5A0",
                      marginBottom: "10px",
                    }}
                  >
                    To Be Completed
                  </div>
                )}
                <h3 className="text-white" style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "15px", color: "#8A93A5", lineHeight: 1.6 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Onboarding */}
      <section
        style={{ paddingTop: "96px", paddingBottom: "96px", background: "#0B1220", borderTop: "1px solid #1A2438" }}
        className="px-4"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Onboarding" title="What onboarding looks like" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Connect",
                body: "Connect your EHR / practice-management system and clearinghouse via API and FHIR. No rip-and-replace.",
              },
              {
                label: "Learn",
                body: "PrismIQ learns from your historical denials — mapping your payers, your specialties, and your recurring root causes.",
              },
              {
                label: "Go live",
                body: "Agents go live across the revenue cycle with human approval gates in place from day one.",
              },
            ].map((step, i) => (
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
                {i < 2 && (
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

          <p
            className="text-white"
            style={{ fontSize: "18px", fontWeight: 600, lineHeight: 1.5, marginTop: "32px" }}
          >
            Connected to your EHR/PM system and running in under 30 days.
          </p>

          <div style={{ marginTop: "20px", maxWidth: "62ch" }}>
            <PolicyPlaceholderBlock note="Placeholder for what happens to in-flight claims during cutover — how claims already in progress are handled, whether PrismIQ runs in parallel before taking over, and how continuity of cash flow is guaranteed. Switching risk is the dominant objection for a system that touches the customer's entire cash flow." />
          </div>
        </div>
      </section>

      <FinalCTA headline="Bring your compliance officer. We'll answer every question." />
    </div>
  )
}
