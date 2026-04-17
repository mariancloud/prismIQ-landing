import Link from "next/link"
import { Shield, FileCheck, FileText } from "lucide-react"

const footerLinks = {
  product: [
    { href: "/product", label: "Product" },
    { href: "/product#claim-iq", label: "Claim IQ" },
    { href: "/product#risk-check", label: "Risk Check" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/security", label: "Security" },
    { href: "/pilot", label: "Request a Pilot" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
}

const badges = [
  { icon: Shield, label: "HIPAA" },
  { icon: FileCheck, label: "SOC 2" },
  { icon: FileText, label: "BAA Ready" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-card border border-border">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <polygon 
                    points="12,2 22,20 2,20" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    className="text-muted-foreground"
                  />
                  <polygon 
                    points="12,8 17,16 7,16" 
                    fill="currentColor"
                    className="text-primary"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold text-white tracking-tight">
                PrismIQ
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI-powered denial management for orthopedic and spine specialty practices. Every dollar back.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 PrismIQ Labs, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-1.5 text-xs text-muted-foreground"
              >
                <badge.icon className="h-4 w-4" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
