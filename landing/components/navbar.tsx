'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

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

const navLinks = [
  { href: '/platform', label: 'Platform' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/specialties', label: 'Specialties' },
  { href: '/company', label: 'Company' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 w-full z-50 h-16 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(7, 13, 26, 0.72)' : '#070D1A',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: '1px solid #1A2438',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <PrismLogo />
          <span className="text-white font-bold leading-tight" style={{ fontSize: '20px', fontWeight: 700 }}>
            PrismIQ
          </span>
        </Link>

        {/* Desktop Nav Links (center) */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold transition-colors"
              style={{ color: '#D1D5DB' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#00F5A0')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#D1D5DB')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200"
            style={{ backgroundColor: '#00F5A0', color: '#070D1A' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(0, 245, 160, 0.2)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = 'none')}
          >
            Book a Demo <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: '#D1D5DB' }}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 z-40 flex flex-col px-6 pt-10 pb-10"
          style={{ background: 'rgba(7, 13, 26, 0.98)', backdropFilter: 'blur(8px)' }}
        >
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-semibold transition-colors"
                style={{ color: '#FFFFFF' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto">
            <Link
              href="/demo"
              className="flex w-full items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-base transition-all"
              style={{ backgroundColor: '#00F5A0', color: '#070D1A' }}
              onClick={() => setMobileOpen(false)}
            >
              Book a Demo <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
