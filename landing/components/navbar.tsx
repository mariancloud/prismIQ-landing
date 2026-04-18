'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function PrismLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Center triangle outline in white */}
      <polygon points="20,6 34,30 6,30" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Rainbow rays dispersing from center point (20, 18) */}
      <line x1="20" y1="18" x2="20" y2="2" stroke="#FF6B6B" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="20" y1="18" x2="32" y2="6" stroke="#FFA500" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="20" y1="18" x2="38" y2="20" stroke="#FFD700" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="20" y1="18" x2="28" y2="36" stroke="#00FF88" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="20" y1="18" x2="12" y2="36" stroke="#00F5A0" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="20" y1="18" x2="2" y2="20" stroke="#0088FF" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
          style={{ background: 'rgba(7, 13, 26, 0.8)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #1A2438' }}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity min-h-11">
          <PrismLogo />
          <span className="text-white font-semibold text-base hidden sm:inline">PrismIQ</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-accent-teal transition-colors" style={{ color: 'var(--text-muted)' }}>
            Home
          </Link>
          <Link href="/product" className="text-sm font-medium hover:text-accent-teal transition-colors" style={{ color: 'var(--text-muted)' }}>
            Product
          </Link>
          <Link href="/security" className="text-sm font-medium hover:text-accent-teal transition-colors" style={{ color: 'var(--text-muted)' }}>
            Security
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-accent-teal transition-colors" style={{ color: 'var(--text-muted)' }}>
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
          <Link href="/" className="text-base font-medium transition-colors" style={{ color: '#D1D5DB' }} onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <Link href="/product" className="text-base font-medium transition-colors"             style={{ color: '#D1D5DB' }} onClick={() => setMobileOpen(false)}>
            Product
          </Link>
          <Link href="/security" className="text-base font-medium transition-colors"             style={{ color: '#D1D5DB' }} onClick={() => setMobileOpen(false)}>
            Security
          </Link>
          <Link href="/about" className="text-base font-medium transition-colors"             style={{ color: '#D1D5DB' }} onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link 
            href="/pilot" 
            className="px-6 py-2 rounded-lg font-semibold text-sm transition-all mt-4 inline-block"
            style={{ backgroundColor: 'var(--accent-teal)', color: 'var(--background)' }}
            onClick={() => setMobileOpen(false)}
          >
            Request a Pilot
          </Link>
        </div>
      )}
    </nav>
  )
}

