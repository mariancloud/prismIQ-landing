'use client'

export function SecurityBadges() {
  const badges = [
    {
      id: 'hipaa',
      label: 'HIPAA Compliant',
      subLabel: 'PHI encrypted at rest and in transit',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield outline */}
          <path
            d="M24 4L8 12V24C8 34.5 24 42 24 42C24 42 40 34.5 40 24V12L24 4Z"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Medical cross */}
          <g>
            {/* Vertical line */}
            <line x1="24" y1="18" x2="24" y2="32" stroke="#00F5A0" strokeWidth="2" strokeLinecap="round" />
            {/* Horizontal line */}
            <line x1="18" y1="25" x2="30" y2="25" stroke="#00F5A0" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      ),
    },
    {
      id: 'baa',
      label: 'BAA Ready',
      subLabel: 'Executed before any data is shared',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left hand */}
          <path
            d="M8 24C8 20 10 18 14 18C15 18 16 19 16 20V28C16 30 15 32 12 32C9 32 8 28 8 24Z"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right hand */}
          <path
            d="M40 24C40 20 38 18 34 18C33 18 32 19 32 20V28C32 30 33 32 36 32C39 32 40 28 40 24Z"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Connection point */}
          <line x1="16" y1="25" x2="32" y2="25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'soc2',
      label: 'SOC 2 Type II',
      subLabel: 'Audit in progress · Docs available on request',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background circle - incomplete arc */}
          <circle cx="24" cy="24" r="18" stroke="#1A2438" strokeWidth="2" fill="none" />
          
          {/* Progress arc - 80% complete (teal) */}
          <circle
            cx="24"
            cy="24"
            r="18"
            stroke="#00F5A0"
            strokeWidth="2"
            fill="none"
            strokeDasharray="90 112.5"
            strokeLinecap="round"
            transform="rotate(-90 24 24)"
          />
          
          {/* Lock icon in center */}
          <g>
            {/* Lock body */}
            <rect x="16" y="20" width="16" height="12" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
            {/* Lock shackle */}
            <path
              d="M18 20C18 16 20 14 24 14C28 14 30 16 30 20"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Keyhole */}
            <circle cx="24" cy="26" r="1.5" fill="white" />
          </g>
        </svg>
      ),
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {badges.map((badge) => (
        <div
          key={badge.id}
          style={{
            backgroundColor: '#0E1626',
            border: '1px solid #1A2438',
            borderRadius: '12px',
            padding: '24px 32px',
          }}
          className="flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(0, 245, 160, 0.12)'
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = 'none'
          }}
        >
          {/* Icon */}
          <div className="mb-4">
            {badge.icon}
          </div>

          {/* Label */}
          <h3
            style={{
              fontSize: '13px',
              fontWeight: '600',
              color: 'white',
              marginBottom: '8px',
              letterSpacing: '0.3px',
            }}
          >
            {badge.label}
          </h3>

          {/* Sub-label */}
          <p
            style={{
              fontSize: '11px',
              color: '#8A93A5',
              lineHeight: '1.4',
            }}
          >
            {badge.subLabel}
          </p>
        </div>
      ))}
    </div>
  )
}
