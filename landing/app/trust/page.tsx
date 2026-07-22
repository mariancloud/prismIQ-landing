import { PageHero } from "@/components/page-hero"
import { FinalCTA } from "@/components/final-cta"

export const metadata = {
  title: "Trust — AI Oversight, Liability & Data Handling",
  description:
    "Where the human stays in the loop, how PrismIQ handles PHI, how every decision is logged, our compliance posture, and what onboarding looks like.",
}

// Rows for the human-in-the-loop oversight table.
const oversightRows = [
  {
    stage: "835 / ERA intake & parsing",
    prismiq:
      "Ingests clearinghouse 835 feeds, translates complex CARC/RARC codes, and categorizes denials by recovery confidence.",
    human: "Biller reviews the flagged high-priority claim queue and selects claims for action.",
  },
  {
    stage: "Payer policy matching",
    prismiq:
      "RAG engine cross-references clinical charts against live payer policy manuals to identify missing documentation.",
    human: "Clinical biller confirms extracted chart notes align with payer criteria.",
  },
  {
    stage: "Denial appeal generation",
    prismiq: "Auto-drafts fully cited, policy-backed Level 1 & Level 2 appeal packages in under 60 seconds.",
    human: "Billing specialist reviews, makes final edits, and approves the appeal package.",
  },
  {
    stage: "Pre-submission risk check",
    prismiq:
      "Scans pre-billed surgical claims for documentation gaps, unbundling risks, and missing medical-necessity rules.",
    human: "Authorization manager reviews flagged high-risk claims before batch release.",
  },
  {
    stage: "Retro-authorization assembly",
    prismiq: "Gathers clinical intraoperative notes and hemodynamics data for mid-procedure code escalations.",
    human: "Practice manager verifies the clinical packet before submitting the retro-auth request.",
  },
  {
    stage: "Claim submission & export",
    prismiq: "Formats approved appeal packets into payer-ready PDF/Word documents or direct portal exports.",
    human: "Staff submits the appeal directly via the payer portal or practice-management queue.",
  },
]

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

          {/* Desktop / tablet: real table */}
          <div
            className="hidden md:block"
            style={{ background: "#0E1626", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", overflow: "hidden" }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <thead>
                <tr>
                  <th
                    scope="col"
                    style={{
                      textAlign: "left",
                      verticalAlign: "top",
                      padding: "18px 20px",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      letterSpacing: "0.02em",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                      width: "22%",
                    }}
                  >
                    Workflow stage
                  </th>
                  <th
                    scope="col"
                    style={{
                      textAlign: "left",
                      verticalAlign: "top",
                      padding: "18px 20px",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                      width: "39%",
                    }}
                  >
                    <span style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.02em" }}>
                      PrismIQ acts
                    </span>
                    <span
                      className="uppercase"
                      style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "#00F5A0", marginTop: "4px" }}
                    >
                      AI co-pilot
                    </span>
                  </th>
                  <th
                    scope="col"
                    style={{
                      textAlign: "left",
                      verticalAlign: "top",
                      padding: "18px 20px",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                      width: "39%",
                    }}
                  >
                    <span style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.02em" }}>
                      Human approves
                    </span>
                    <span
                      className="uppercase"
                      style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "#AAB2C0", marginTop: "4px" }}
                    >
                      Staff control
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {oversightRows.map((row, i) => {
                  const cellBorder = i < oversightRows.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none"
                  return (
                    <tr key={row.stage}>
                      <th
                        scope="row"
                        style={{
                          textAlign: "left",
                          padding: "20px",
                          fontSize: "15px",
                          fontWeight: 600,
                          color: "#FFFFFF",
                          borderBottom: cellBorder,
                          verticalAlign: "top",
                        }}
                      >
                        {row.stage}
                      </th>
                      <td
                        style={{
                          padding: "20px",
                          fontSize: "14px",
                          color: "#AAB2C0",
                          lineHeight: 1.5,
                          borderBottom: cellBorder,
                          verticalAlign: "top",
                        }}
                      >
                        {row.prismiq}
                      </td>
                      <td
                        style={{
                          padding: "20px",
                          fontSize: "14px",
                          color: "#AAB2C0",
                          lineHeight: 1.5,
                          borderBottom: cellBorder,
                          verticalAlign: "top",
                        }}
                      >
                        {row.human}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked cards */}
          <div className="md:hidden flex flex-col gap-4">
            {oversightRows.map((row) => (
              <div
                key={row.stage}
                style={{ background: "#0E1626", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "20px" }}
              >
                <div className="text-white" style={{ fontSize: "16px", fontWeight: 600, marginBottom: "16px" }}>
                  {row.stage}
                </div>

                <div
                  style={{
                    background: "rgba(0, 245, 160, 0.06)",
                    border: "1px solid rgba(0, 245, 160, 0.18)",
                    borderRadius: "10px",
                    padding: "14px 16px",
                    marginBottom: "12px",
                  }}
                >
                  <div className="uppercase" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#00F5A0", marginBottom: "6px" }}>
                    PrismIQ acts · AI co-pilot
                  </div>
                  <p style={{ fontSize: "14px", color: "#D1D5DB", lineHeight: 1.5 }}>{row.prismiq}</p>
                </div>

                <div
                  style={{
                    background: "#0B1220",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "10px",
                    padding: "14px 16px",
                  }}
                >
                  <div className="uppercase" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#AAB2C0", marginBottom: "6px" }}>
                    Human approves · Staff control
                  </div>
                  <p style={{ fontSize: "14px", color: "#D1D5DB", lineHeight: 1.5 }}>{row.human}</p>
                </div>
              </div>
            ))}
          </div>
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
