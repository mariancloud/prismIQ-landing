import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="page-transition">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialSection />
      <CTASection />
    </div>
  )
}
