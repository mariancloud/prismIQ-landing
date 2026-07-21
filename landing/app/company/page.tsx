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

      {/* Security & compliance strip */}
      <section style={{ paddingTop: "56px", paddingBottom: "56px", background: "#0B1220", borderTop: "1px solid #1A2438", borderBottom: "1px solid #1A2438" }} className="px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <span style={{ fontSize: "14px", color: "#D1D5DB" }}>
              <span style={{ color: "#00F5A0" }}>✓</span> HIPAA Compliant
            </span>
            <span style={{ fontSize: "14px", color: "#D1D5DB" }}>
              <span style={{ color: "#00F5A0" }}>✓</span> BAA Ready
            </span>
            <span style={{ fontSize: "14px", color: "#D1D5DB" }}>
              <span style={{ color: "#00F5A0" }}>✓</span> SOC 2
            </span>
          </div>
          <Link
            href="/security"
            className="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
            style={{ color: "#00F5A0" }}
          >
            View security details <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
