const focusItems = [
  {
    id: 1,
    dotColor: '#3b82f6',
    label: 'ACADEMIC',
    title: 'Current Academic Focus',
    description:
      'Deep diving into Advanced Cybersecurity Protocols and Enterprise Systems Integration.',
  },
  {
    id: 2,
    dotColor: '#f59e0b',
    label: 'PROFESSIONAL',
    title: 'Certifications',
    description:
      'CompTIA Security+ (in progress), AWS Certified Solutions Architect Associate path.',
  },
  {
    id: 3,
    dotColor: '#10b981',
    label: 'HANDS-ON',
    title: 'Active Labs',
    description:
      'Maintaining a homelab for penetration testing environments and active CI/CD pipelines.',
  },
];

export default function CurrentFocus() {
  return (
    <section id="learning-path" className="py-24 px-6">
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider text-center mb-16 scroll-fade-in">
          <span className="text-accent">CURRENT</span>{' '}
          <span className="text-text-primary">FOCUS</span>
        </h2>

        <div className="scroll-fade-in" style={{ maxWidth: '42rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {focusItems.map((item, index) => (
              <div key={item.id} style={{ display: 'flex', gap: '1.5rem' }}>
                {/* Timeline column */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: item.dotColor,
                      flexShrink: 0,
                      marginTop: '4px',
                    }}
                  ></div>
                  {index < focusItems.length - 1 && (
                    <div
                      style={{
                        width: '2px',
                        flex: 1,
                        minHeight: '3rem',
                        background: 'linear-gradient(to bottom, rgba(0,229,255,0.5), rgba(0,229,255,0.1))',
                      }}
                    ></div>
                  )}
                </div>

                {/* Content column */}
                <div style={{ paddingBottom: '2.5rem' }}>
                  <span className="text-xs font-semibold tracking-widest text-text-secondary uppercase" style={{ display: 'block', marginBottom: '0.25rem' }}>
                    {item.label}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-text-primary" style={{ marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm" style={{ lineHeight: '1.6' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
