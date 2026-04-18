import Link from "next/link"

function PrismLogo() {
  return (
    <img 
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-17%20at%206.44.12%E2%80%AFPM-wFM53ra7XHtHZ5fL0exxmt9zD1mLAf.png"
      alt="PrismIQ Logo"
      className="object-contain"
      style={{ width: '44px', height: '44px', minWidth: '44px', display: 'block' }}
    />
  )
}

const footerLinks = {
  product: [
    { href: "/", label: "Home" },
    { href: "/product", label: "Product" },
    { href: "/security", label: "Security" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/pilot", label: "Request a Pilot" },
    { href: "mailto:hello@prismiqlabs.ai", label: "hello@prismiqlabs.ai" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
}

export function Footer() {
  return (
    <footer style={{ background: '#070D1A', borderTop: '1px solid #1A2438' }}>
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        {/* Top section with logo and links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity mb-6">
              <PrismLogo />
              <span className="text-white font-bold text-lg hidden sm:inline" style={{ fontSize: '18px', fontWeight: 'bold' }}>PrismIQ</span>
            </Link>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4"             style={{ color: '#FFFFFF' }}>Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-accent-teal"
                    style={{ color: '#6B7280' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold mb-4"             style={{ color: '#FFFFFF' }}>Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-accent-teal"
                    style={{ color: '#6B7280' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-semibold mb-4"             style={{ color: '#FFFFFF' }}>Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-accent-teal"
                    style={{ color: '#6B7280' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom divider */}
        <div style={{ borderTop: '1px solid #1A2438', paddingTop: '24px' }} className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm" style={{ color: '#6B7280' }}>
            © 2025 PrismIQ Labs, Inc.
          </p>

          {/* Compliance badges */}
          <div className="flex items-center gap-4">
            <div className="text-xs font-medium px-3 py-1.5 rounded-full border" style={{ borderColor: '#1A2438', color: '#6B7280' }}>
              ✓ HIPAA Compliant
            </div>
            <div className="text-xs font-medium px-3 py-1.5 rounded-full border" style={{ borderColor: '#1A2438', color: '#6B7280' }}>
              ✓ BAA Ready
            </div>
            <div className="text-xs font-medium px-3 py-1.5 rounded-full border" style={{ borderColor: '#1A2438', color: '#6B7280' }}>
              ✓ SOC 2 In Progress
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
