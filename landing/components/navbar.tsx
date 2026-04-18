'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function PrismLogo() {
  return (
    <img 
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-17%20at%206.44.12%E2%80%AFPM-wFM53ra7XHtHZ5fL0exxmt9zD1mLAf.png"
      alt="PrismIQ Logo"
      className="object-contain"
      style={{ width: '44px', height: '44px', minWidth: '44px' }}
    />
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 h-16" style={{ background: '#070D1A', borderBottom: '1px solid #1A2438' }}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Block: Logo + Wordmark + Tagline */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <PrismLogo />
          <div className="flex items-center gap-3">
            <span className="text-white font-bold leading-tight" style={{ fontSize: '20px', fontWeight: '700' }}>PrismIQ</span>
            <span style={{ color: '#1A2438', margin: '0 8px' }}>|</span>
            <span className="italic" style={{ fontSize: '12px', color: '#9CA3AF', whiteSpace: 'nowrap', lineHeight: '1.2' }}>Revenue belongs to the physicians who earned it.</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold hover:text-accent-teal transition-colors" style={{ color: '#D1D5DB' }}>
            Home
          </Link>
          <Link href="/product" className="text-sm font-semibold hover:text-accent-teal transition-colors" style={{ color: '#D1D5DB' }}>
            Product
          </Link>
          <Link href="/security" className="text-sm font-semibold hover:text-accent-teal transition-colors" style={{ color: '#D1D5DB' }}>
            Security
          </Link>
          <Link href="/about" className="text-sm font-semibold hover:text-accent-teal transition-colors" style={{ color: '#D1D5DB' }}>
            About
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link 
            href="/pilot" 
            className="px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-200 inline-block"
            style={{
              backgroundColor: '#00F5A0',
              color: '#070D1A'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(0, 245, 160, 0.2)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = 'none'
            }}
          >
            Request a Pilot →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: '#6B7280' }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div 
          className="md:hidden fixed inset-0 top-16 z-40 flex flex-col items-center justify-start pt-8 gap-6 px-4"
          style={{ background: 'rgba(7, 13, 26, 0.95)', backdropFilter: 'blur(8px)' }}
        >
            <Link href="/" className="text-base font-semibold transition-colors" style={{ color: '#D1D5DB' }} onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <Link href="/product" className="text-base font-semibold transition-colors" style={{ color: '#D1D5DB' }} onClick={() => setMobileOpen(false)}>
            Product
          </Link>
          <Link href="/security" className="text-base font-semibold transition-colors" style={{ color: '#D1D5DB' }} onClick={() => setMobileOpen(false)}>
            Security
          </Link>
          <Link href="/about" className="text-base font-semibold transition-colors" style={{ color: '#D1D5DB' }} onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link 
            href="/pilot" 
            className="px-6 py-2 rounded-lg font-semibold text-sm transition-all mt-4 inline-block"
            style={{ backgroundColor: '#00F5A0', color: '#070D1A' }}
            onClick={() => setMobileOpen(false)}
          >
            Request a Pilot
          </Link>
        </div>
      )}
    </nav>
  )
}

