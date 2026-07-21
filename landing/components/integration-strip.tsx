const integrations = ['Epic', 'athenahealth', 'NextGen', 'eClinicalWorks']

export function IntegrationStrip() {
  return (
    <section
      style={{
        background: '#070D1A',
        borderTop: '1px solid #1A2438',
        borderBottom: '1px solid #1A2438',
        paddingTop: '28px',
        paddingBottom: '28px',
      }}
      className="px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-x-6 gap-y-4">
        <span
          className="uppercase whitespace-nowrap"
          style={{ fontSize: '12px', letterSpacing: '0.12em', color: '#8A93A5', fontWeight: 500 }}
        >
          Integrates directly with
        </span>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {integrations.map((name, i) => (
            <div key={name} className="flex items-center gap-x-5">
              <span style={{ fontSize: '17px', color: '#E5E7EB', fontWeight: 600 }}>{name}</span>
              {i < integrations.length - 1 && (
                <span aria-hidden="true" style={{ color: '#3A4A66' }}>
                  •
                </span>
              )}
            </div>
          ))}
        </div>

        <span
          className="whitespace-nowrap"
          style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#8A93A5' }}
        >
          via API &amp; FHIR
        </span>
      </div>
    </section>
  )
}
