export function PrismIqDashboard() {
  const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

  return (
    <div style={{ background: '#070D1A', borderRadius: '12px', padding: '24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#FFFFFF' }}>PrismIQ Dashboard</h3>
        <span style={{ fontSize: '13px', color: '#6B7280' }}>{today}</span>
      </div>

      {/* Stat Tiles Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
        {/* Claims Analyzed - White */}
        <div style={{
          background: '#0E1626',
          border: '1px solid #1A2438',
          borderRadius: '8px',
          padding: '16px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Claims Analyzed
          </div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#FFFFFF' }}>
            147
          </div>
        </div>

        {/* Appealable - Teal */}
        <div style={{
          background: '#0E1626',
          border: '1px solid #1A2438',
          borderRadius: '8px',
          padding: '16px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Appealable
          </div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#00F5A0' }}>
            89
          </div>
        </div>

        {/* Revenue at Risk - Red */}
        <div style={{
          background: '#0E1626',
          border: '1px solid #1A2438',
          borderRadius: '8px',
          padding: '16px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Revenue at Risk
          </div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#F87171' }}>
            $1.2M
          </div>
        </div>
      </div>

      {/* Bar Chart - Denial Volume by Payer */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ fontSize: '12px', fontWeight: '600', color: '#FFFFFF', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Denial Volume by Payer
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { label: 'UnitedHealthcare', value: 42, width: '100%' },
            { label: 'Anthem', value: 28, width: '67%' },
            { label: 'Aetna', value: 19, width: '45%' }
          ].map((payer, idx) => (
            <div key={idx}>
              <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '4px' }}>
                {payer.label}
              </div>
              <div style={{
                background: '#1A2438',
                borderRadius: '4px',
                height: '24px',
                overflow: 'hidden'
              }}>
                <div style={{
                  background: '#00F5A0',
                  height: '100%',
                  width: payer.width,
                  transition: 'width 0.3s ease'
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Claims Table */}
      <div>
        <div style={{ fontSize: '12px', fontWeight: '600', color: '#FFFFFF', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Recent Claims
        </div>
        <div style={{
          background: '#0E1626',
          border: '1px solid #1A2438',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          {/* Table Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 100px 100px 100px',
            gap: '12px',
            padding: '12px 16px',
            borderBottom: '1px solid #1A2438',
            background: '#070D1A'
          }}>
            <div style={{ fontSize: '11px', fontWeight: '600', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Claim ID
            </div>
            <div style={{ fontSize: '11px', fontWeight: '600', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Amount
            </div>
            <div style={{ fontSize: '11px', fontWeight: '600', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Payer
            </div>
            <div style={{ fontSize: '11px', fontWeight: '600', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Status
            </div>
          </div>

          {/* Table Rows */}
          {[
            { id: 'CLM-0847', amount: '$18,500', payer: 'UHC', status: 'Appeal Ready', statusColor: '#00F5A0' },
            { id: 'CLM-0846', amount: '$12,200', payer: 'Anthem', status: 'In Review', statusColor: '#FBBF24' },
            { id: 'CLM-0845', amount: '$24,100', payer: 'Aetna', status: 'Won', statusColor: '#86EFAC' },
            { id: 'CLM-0844', amount: '$9,800', payer: 'UHC', status: 'Expired', statusColor: '#6B7280' },
            { id: 'CLM-0843', amount: '$15,300', payer: 'Anthem', status: 'Appeal Ready', statusColor: '#00F5A0' }
          ].map((claim, idx) => (
            <div key={idx} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 100px 100px 100px',
              gap: '12px',
              padding: '12px 16px',
              borderBottom: idx < 4 ? '1px solid #1A2438' : 'none',
              alignItems: 'center'
            }}>
              <div style={{ fontSize: '12px', color: '#D1D5DB', fontFamily: 'monospace' }}>
                {claim.id}
              </div>
              <div style={{ fontSize: '12px', color: '#D1D5DB' }}>
                {claim.amount}
              </div>
              <div style={{ fontSize: '12px', color: '#9CA3AF' }}>
                {claim.payer}
              </div>
              <div style={{
                fontSize: '11px',
                fontWeight: '600',
                color: claim.statusColor,
                padding: '4px 8px',
                background: 'rgba(0, 245, 160, 0.08)',
                borderRadius: '4px',
                width: 'fit-content',
                textAlign: 'center'
              }}>
                {claim.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
