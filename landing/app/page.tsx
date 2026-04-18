import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { StatBandSection } from "@/components/stat-band-section"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: "PrismIQ - AI-Powered Denial Management",
  description: "Overturn denials with policy-level precision. AI-powered healthcare revenue cycle management for specialty practices.",
}

export default function HomePage() {
  return (
    <div className="page-transition">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialSection />
      <StatBandSection />
      <CTASection />
    </div>
  )
}
