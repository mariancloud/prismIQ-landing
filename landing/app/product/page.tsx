import type { Metadata } from "next"
import { ProductHero } from "@/components/product/product-hero"
import { ClaimFlowSection } from "@/components/product/claim-flow-section"
import { RiskCheckSection } from "@/components/product/risk-check-section"
import { PayerCoverageSection } from "@/components/product/payer-coverage-section"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Product",
  description: "The platform built for how orthopedic billing actually works. Built specifically for high-value surgical claims, complex payer policies, and the appeal deadlines that don't wait.",
}

export default function ProductPage() {
  return (
    <div className="page-transition">
      <ProductHero />
      <ClaimFlowSection />
      <RiskCheckSection />
      <PayerCoverageSection />
      <CTASection />
    </div>
  )
}
