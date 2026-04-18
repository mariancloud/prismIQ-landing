'use client'

import { useState } from 'react'

export function RiskCheckUI() {
  const [activeTab, setActiveTab] = useState('pre-submission')

  const checklistItems = [
    { label: 'Prior Authorization', status: 'critical' },
    { label: 'Operative Report', status: 'critical' },
    { label: 'Medical Necessity', status: 'high' }
  ]

  const getStatusColor = (status: string) => {
    if (status === 'critical') return '#F87171'
    if (status === 'high') return '#FBBF24'
    return '#10B981'
  }

  const getStatusBadgeColor = (status: string) => {
    if (status === 'critical') return '#7F1D1D'
    if (status === 'high') return '#78350F'
    return '#065F46'
  }

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
      {/* Tab Header */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '20px',
        paddingBottom: '16px',
        borderBottom: '1px solid #1A2438'
      }}>
        {[
          { id: 'pre-submission', label: 'Pre-Submission Check' },
          { id: 'post-denial', label: 'Post-Denial Analysis' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              background: activeTab === tab.id ? '#00F5A0' : 'transparent',
              color: activeTab === tab.id ? '#070D1A' : '#6B7280',
              transition: 'all 0.2s'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Left Column: Input Fields */}
        <div className="space-y-3">
          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '11px', fontWeight: '600', color: '#9CA3AF', display: 'block', marginBottom: '6px' }}>
              PAYER
            </label>
            <div style={{
              background: '#1A2438',
              border: '1px solid #2A3548',
              borderRadius: '8px',
              padding: '10px 12px',
              color: '#D1D5DB',
              fontSize: '13px'
            }}>
              UnitedHealthcare
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '11px', fontWeight: '600', color: '#9CA3AF', display: 'block', marginBottom: '6px' }}>
              CPT CODE
            </label>
            <div style={{
              background: '#1A2438',
              border: '1px solid #2A3548',
              borderRadius: '8px',
              padding: '10px 12px',
              color: '#D1D5DB',
              fontSize: '13px'
            }}>
              27447 — Total Knee Arthroplasty
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '11px', fontWeight: '600', color: '#9CA3AF', display: 'block', marginBottom: '6px' }}>
              ICD-10 DIAGNOSIS
            </label>
            <div style={{
              background: '#1A2438',
              border: '1px solid #2A3548',
              borderRadius: '8px',
              padding: '10px 12px',
              color: '#D1D5DB',
              fontSize: '13px'
            }}>
              M17.11
            </div>
          </div>

          <div>
            <label style={{ fontSize: '11px', fontWeight: '600', color: '#9CA3AF', display: 'block', marginBottom: '6px' }}>
              BILLED AMOUNT
            </label>
            <div style={{
              background: '#1A2438',
              border: '1px solid #2A3548',
              borderRadius: '8px',
              padding: '10px 12px',
              color: '#D1D5DB',
              fontSize: '13px'
            }}>
              $24,500
            </div>
          </div>
        </div>

        {/* Right Column: Risk Output */}
        <div className="space-y-4">
          {/* Denial Risk */}
          <div style={{
            background: '#1A2438',
            border: '1px solid #2A3548',
            borderRadius: '12px',
            padding: '16px'
          }}>
            <div style={{ fontSize: '11px', fontWeight: '600', color: '#9CA3AF', marginBottom: '8px' }}>
              DENIAL RISK
            </div>
            <div style={{
              fontSize: '40px',
              fontWeight: '700',
              color: '#F87171',
              marginBottom: '8px'
            }}>
              78%
            </div>
            <div style={{
              background: '#7F1D1D',
              color: '#FCA5A5',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '11px',
              fontWeight: '600',
              display: 'inline-block'
            }}>
              CRITICAL
            </div>
          </div>

          {/* Documentation Readiness */}
          <div style={{
            background: '#1A2438',
            border: '1px solid #2A3548',
            borderRadius: '12px',
            padding: '16px'
          }}>
            <div style={{ fontSize: '11px', fontWeight: '600', color: '#9CA3AF', marginBottom: '8px' }}>
              DOCUMENTATION READINESS
            </div>
            <div style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#FBBF24',
              marginBottom: '8px'
            }}>
              70/100
            </div>
            <div style={{
              background: '#78350F',
              color: '#FDE047',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '11px',
              fontWeight: '600',
              display: 'inline-block'
            }}>
              NEEDS ATTENTION
            </div>
          </div>

          {/* Checklist */}
          <div className="space-y-2">
            {checklistItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#1A2438',
                  border: `1px solid ${getStatusColor(item.status)}`,
                  borderRadius: '8px',
                  padding: '10px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <div style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: getStatusColor(item.status)
                }} />
                <span style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: getStatusColor(item.status)
                }}>
                  {item.label}
                </span>
                <span style={{
                  fontSize: '10px',
                  fontWeight: '600',
                  color: getStatusColor(item.status),
                  marginLeft: 'auto'
                }}>
                  {item.status === 'critical' ? 'CRITICAL' : 'HIGH'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
