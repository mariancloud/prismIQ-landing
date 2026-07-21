'use client'

import Link from 'next/link'

type InlineCTALinkProps = {
  href: string
  children: React.ReactNode
}

export function InlineCTALink({ href, children }: InlineCTALinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity"
      style={{ color: '#00F5A0' }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.75')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
    >
      {children} <span aria-hidden="true">→</span>
    </Link>
  )
}
