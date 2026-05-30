import { useState, useEffect, useRef } from 'react';

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
  const [activeItems, setActiveItems] = useState(new Set());
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = new Map();

    focusItems.forEach((item, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveItems((prev) => new Set([...prev, item.id]));
          } else {
            setActiveItems((prev) => {
              const newSet = new Set(prev);
              newSet.delete(item.id);
              return newSet;
            });
          }
        },
        {
          threshold: 0.5,
          rootMargin: '0px',
        }
      );

      if (itemRefs.current[index]) {
        observer.observe(itemRefs.current[index]);
        observers.set(index, observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);
  return (
    <section id="current-focus" className="py-24 px-6" style={{ padding: '6rem 1.5rem', marginBottom: '5rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider text-center mb-16 scroll-fade-in" style={{marginBottom: '5rem' }}>
          <span className="text-accent">CURRENT</span>{' '}
          <span className="text-text-primary">FOCUS</span>
        </h2>

        <div className="scroll-fade-in" style={{ maxWidth: '42rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {focusItems.map((item, index) => (
              <div 
                key={item.id} 
                ref={(el) => (itemRefs.current[index] = el)}
                style={{ display: 'flex', gap: '3rem' }}
              >
                {/* Timeline column */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div
                    className={`timeline-dot${activeItems.has(item.id) ? ' active' : ''}`}
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: item.dotColor,
                      flexShrink: 0,
                      marginTop: '4px',
                      transform: activeItems.has(item.id) ? 'scale(1.35)' : 'scale(1)',
                      border: `3px solid ${activeItems.has(item.id) ? 'var(--color-accent)' : '#222'}`,
                      boxShadow: activeItems.has(item.id)
                        ? `0 0 24px 8px ${item.dotColor}80, 0 0 48px 16px ${item.dotColor}40`
                        : 'none',
                      transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  ></div>
                  {index < focusItems.length - 1 && (
                    <div
                      className="timeline-line"
                      style={{ flex: 1 }}
                    >
                      <div
                        className="timeline-draw"
                        style={{
                          height: activeItems.has(item.id) ? '100%' : '0%',
                        }}
                      ></div>
                    </div>
                  )}
                </div>

                {/* Content column */}
                <div style={{ paddingBottom: '2.5rem', paddingLeft: '1rem' }}>
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
