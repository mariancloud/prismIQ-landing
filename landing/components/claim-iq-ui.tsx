'use client'

export function ClaimIqUI() {
  const steps = [
    { number: '1', title: '835 EDI — Remittance File', description: 'Parse Claim →', status: 'active' },
    { number: '2', title: 'Denial Translation', description: 'Plain-English explanation of the CARC code', status: 'waiting' },
    { number: '3', title: 'Policy Alignment Analysis', description: 'Policy-to-claim alignment via RAG', status: 'waiting' },
    { number: '4', title: 'Appeal Letter Generation', description: 'AI-generated appeal letter', status: 'waiting' }
  ]

  return (
    <div style={{
      background: '#0E1626',
      border: '1px solid #1A2438',
      borderRadius: '16px',
      padding: '16px',
      boxShadow: '0 24px 64px rgba(0, 0, 0, 0.4)',
      maxWidth: '100%',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '20px',
        paddingBottom: '16px',
        borderBottom: '1px solid #1A2438'
      }}>
        <div style={{
          background: '#1A2438',
          border: '1px solid #2A3548',
          borderRadius: '20px',
          padding: '6px 12px',
          fontSize: '12px',
          fontWeight: '600',
          color: '#00F5A0'
        }}>
          835 Claim Flow — Step 1/4
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-3">
        {steps.map((step, idx) => (
          <div
            key={idx}
            style={{
              background: step.status === 'active' ? '#1A2438' : '#0E1626',
              border: `1px solid ${step.status === 'active' ? '#00F5A0' : '#1A2438'}`,
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            {/* Dot Indicator */}
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: step.status === 'active' ? '#00F5A0' : '#4B5563',
              flexShrink: 0
            }} />

            {/* Content */}
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#FFFFFF',
                marginBottom: '4px'
              }}>
                Step {step.number}: {step.title}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#9CA3AF'
              }}>
                {step.description}
              </div>
            </div>

            {/* Status */}
            {step.status === 'active' ? (
              <button style={{
                background: '#3B82F6',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                {step.description === 'Parse Claim →' ? 'Parse Claim →' : 'Continue'}
              </button>
            ) : (
              <div style={{
                background: '#1A2438',
                color: '#6B7280',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '11px',
                fontWeight: '600'
              }}>
                Waiting...
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
