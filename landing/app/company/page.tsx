import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { TestimonialSection } from "@/components/testimonial-section"
import { FinalCTA } from "@/components/final-cta"

export const metadata = {
  title: "About PrismIQ Labs",
  description:
    "Revenue belongs to the physicians who earned it. PrismIQ is a single AI layer across the full revenue cycle.",
}

export default function CompanyPage() {
  return (
    <div className="page-transition">
      <PageHero title="Revenue belongs to the physicians who earned it.">
        <p>
          PrismIQ is a single AI layer across the full revenue cycle — every downstream outcome feeds back into upstream
          rules automatically, so the same mistake never costs a practice twice.
        </p>
      </PageHero>

      {/* TODO(client): Add mission paragraph here */}
      {/* TODO(client): Add team section here */}
      {/* TODO(client): Add advisory board members here */}

      {/* retained from current site — confirm */}
      <TestimonialSection />

      {/* Our Story */}
      <section style={{ paddingTop: "88px", paddingBottom: "88px", background: "#070D1A" }} className="px-4">
        <div className="max-w-6xl mx-auto grid gap-12 lg:gap-16 lg:grid-cols-[1.4fr_1fr]">
          {/* LEFT: narrative */}
          <div>
            <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.12em", color: "#00F5A0", textTransform: "uppercase" }}>
              Our Story
            </p>
            <h2
              className="text-white text-balance"
              style={{ fontSize: "clamp(28px, 4.5vw, 44px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", marginTop: "16px" }}
            >
              Built for the side that&apos;s been losing.
              <br />
              Until now.
            </h2>

            <div className="flex flex-col gap-8" style={{ marginTop: "40px" }}>
              <div>
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", color: "#00F5A0", textTransform: "uppercase" }}>
                  The Background
                </p>
                <p style={{ fontSize: "17px", color: "#D1D5DB", lineHeight: 1.65, marginTop: "12px" }} className="text-pretty">
                  PrismIQ was built by a team that has spent decades watching the same problem repeat across industries:
                  the people doing the real work are the last ones the technology was built for. In healthcare, that gap
                  has a price tag. It&apos;s measured in denied claims, expired appeal windows, and revenue that practices
                  earned and never collected.
                </p>
              </div>

              <div>
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", color: "#00F5A0", textTransform: "uppercase" }}>
                  The Discipline
                </p>
                <p style={{ fontSize: "17px", color: "#D1D5DB", lineHeight: 1.65, marginTop: "12px" }} className="text-pretty">
                  The team brings together enterprise software architecture, hypergrowth product scaling, and deep
                  customer workflow design — across healthcare, fintech, and enterprise technology. The discipline is
                  simple: find the real problem underneath the stated one, then build the system around how work actually
                  happens. Not how it theoretically should.
                </p>
              </div>

              <div>
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", color: "#00F5A0", textTransform: "uppercase" }}>
                  The Mission
                </p>
                <p style={{ fontSize: "17px", color: "#D1D5DB", lineHeight: 1.65, marginTop: "12px" }} className="text-pretty">
                  That discipline is now focused entirely on a single problem: the operational crisis in specialty
                  healthcare. Payers have spent decades automating the denial. Practices have been left with a biller, a
                  queue, and a 30-day window. PrismIQ is the correction — an intelligent machine that masters payer
                  complexity, automates the path to payment, and returns revenue to the physicians who earned it.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: stats card */}
          <div className="flex flex-col gap-6">
            <div
              className="rounded-2xl"
              style={{ background: "#0E1626", border: "1px solid #1A2438", padding: "32px" }}
            >
              <div className="flex flex-col gap-8">
                <div>
                  <div style={{ fontSize: "clamp(36px, 6vw, 48px)", fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1 }}>
                    $100B
                  </div>
                  <p style={{ fontSize: "14px", color: "#8A93A5", lineHeight: 1.55, marginTop: "10px" }}>
                    estimated annual revenue lost to denials and underpayments in specialty healthcare
                  </p>
                  <p style={{ fontSize: "12px", color: "#8A93A5", marginTop: "8px" }}>Source: [TO BE ADDED]</p>
                </div>

                <div style={{ borderLeft: "3px solid #F5B94A", paddingLeft: "16px" }}>
                  <div style={{ fontSize: "clamp(36px, 6vw, 48px)", fontWeight: 700, color: "#F5B94A", letterSpacing: "-0.02em", lineHeight: 1 }}>
                    65%
                  </div>
                  <p style={{ fontSize: "14px", color: "#8A93A5", lineHeight: 1.55, marginTop: "10px" }}>
                    of denied specialty claims are never appealed — not because they aren&apos;t winnable, but because
                    there isn&apos;t time
                  </p>
                  <p style={{ fontSize: "12px", color: "#8A93A5", marginTop: "8px" }}>Source: [TO BE ADDED]</p>
                </div>

                <div style={{ borderLeft: "3px solid #FF6B6B", paddingLeft: "16px" }}>
                  <div style={{ fontSize: "clamp(36px, 6vw, 48px)", fontWeight: 700, color: "#FF6B6B", letterSpacing: "-0.02em", lineHeight: 1 }}>
                    12–18%
                  </div>
                  <p style={{ fontSize: "14px", color: "#8A93A5", lineHeight: 1.55, marginTop: "10px" }}>
                    average denial rate for high-value surgical and specialty procedures
                  </p>
                  <p style={{ fontSize: "12px", color: "#8A93A5", marginTop: "8px" }}>Source: [TO BE ADDED]</p>
                </div>
              </div>

              <p style={{ fontSize: "14px", fontStyle: "italic", color: "#00F5A0", lineHeight: 1.55, marginTop: "28px" }}>
                These aren&apos;t industry abstractions. They&apos;re what PrismIQ was built to fix.
              </p>
            </div>

            <div
              className="rounded-2xl"
              style={{ background: "#0B1220", border: "1px solid #1A2438", padding: "24px" }}
            >
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", color: "#00F5A0", textTransform: "uppercase" }}>
                Why It Matters
              </p>
              <p style={{ fontSize: "15px", fontStyle: "italic", color: "#D1D5DB", lineHeight: 1.6, marginTop: "12px" }}>
                Payers have spent billions building systems to slow reimbursement down. PrismIQ gives that advantage back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & compliance strip */}
      <section style={{ paddingTop: "56px", paddingBottom: "56px", background: "#0B1220", borderTop: "1px solid #1A2438", borderBottom: "1px solid #1A2438" }} className="px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <span style={{ fontSize: "14px", color: "#D1D5DB" }}>
              <span style={{ color: "#00F5A0" }}>✓</span> HIPAA Compliant
            </span>
            <span style={{ fontSize: "14px", color: "#D1D5DB" }}>
              <span style={{ color: "#00F5A0" }}>✓</span> BAA executed with all customers
            </span>
            <span style={{ fontSize: "14px", color: "#D1D5DB" }}>
              <span style={{ color: "#00F5A0" }}>✓</span> SOC 2 Type I complete, Type II in progress
            </span>
          </div>
          <Link
            href="/trust"
            className="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
            style={{ color: "#00F5A0" }}
          >
            View security details <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <FinalCTA headline="See what PrismIQ finds in your last 90 days of denials." />
    </div>
  )
}
