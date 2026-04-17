"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/security", label: "Security" },
  { href: "/about", label: "About" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-16">
        {/* Logo */}
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

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/pilot"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-primary/90"
          >
            Request a Pilot
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-background md:hidden">
          <div className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-white py-3 border-b border-border transition-colors hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/pilot"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-base font-semibold text-background transition-colors hover:bg-primary/90"
              onClick={() => setMobileOpen(false)}
            >
              Request a Pilot
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
