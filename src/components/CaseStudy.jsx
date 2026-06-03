import { useEffect, useState } from 'react';

const caseStudies = [
  {
    id: 1,
    title: 'Case Study: Redesigning Project Y',
    summary: 'Problem, approach, and measurable impact.',
    content:
      'Project Y had retention issues. We conducted user interviews, created prototypes, and A/B tested a new onboarding flow. The redesigned flow increased activation by 28% and reduced drop-off during signup.',
  },
  {
    id: 2,
    title: 'Case Study: Scaling a React App',
    summary: 'Architecture choices and tradeoffs.',
    content:
      'To scale the app we split routes into chunks, added SSR for critical pages, and introduced a service layer to decouple data fetching. This reduced initial load time and made incremental feature rollout simpler.',
  },
];

export default function CaseStudy() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
  }, [selected]);

  return (
    <section id="case-study" className="py-24 px-6 justify-items-center" style={{ padding: '0rem 1.5rem', marginBottom: '6rem' }}>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider text-center mb-12 scroll-fade-in" style={{ marginBottom: '5rem' }}>
          <span className="text-accent">CASE STUDIES</span>
        </h2>

        <div className="flex flex-col gap-6 scroll-fade-in">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelected(cs)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelected(cs)}
              className="bg-[#0f0f0f] p-6 rounded-lg border border-[#222] cursor-pointer"
            >
              <h3 className="font-heading text-lg font-semibold text-white mb-2">{cs.title}</h3>
              <p className="text-white/80 text-sm">{cs.summary}</p>
            </div>
          ))}
        </div>

        {selected && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm" onClick={() => setSelected(null)} aria-modal="true" role="dialog">
            <div className="bg-[#0b0b0b] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-accent/30 animate-fade-in" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-gradient-to-r from-[#0d0d0d] to-[#1a1a1a] border-b border-accent/30 px-8 py-6 flex justify-between items-center gap-4">
                <div className="flex-1" style={{ paddingLeft: '1rem' }}>
                  <h2 className="text-3xl font-bold text-accent">{selected.title}</h2>
                </div>
                <div className="flex items-center gap-3" style={{ padding: '1rem' }}>
                  <button
                    onClick={() => {
                      const content = `CASE STUDY: ${selected.title}\n=====================================\n\n${selected.content}\n\n=====================================\nGenerated from Portfolio`;
                      const element = document.createElement('a');
                      const file = new Blob([content], { type: 'text/plain' });
                      element.href = URL.createObjectURL(file);
                      element.download = `${selected.title.replace(/\s+/g, '_')}_case_study.txt`;
                      document.body.appendChild(element);
                      element.click();
                      document.body.removeChild(element);
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/50 rounded-lg text-accent hover:bg-accent/20 hover:border-accent transition-all duration-300 font-semibold"
                    title="Download Case Study"
                    style={{ padding: '0.2rem 1rem' }}
                  >
                    <span>📥</span>
                    <span className="hidden sm:inline">Download</span>
                  </button>
                  <button onClick={() => setSelected(null)} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 text-white hover:text-accent transition-colors duration-300 text-xl font-bold" title="Close">✕</button>
                </div>
              </div>

              <div className="p-8 md:p-12 space-y-6" style={{ padding: '2rem 3rem' }}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-accent flex items-center gap-3">
                    <span className="text-3xl">📚</span>
                    Case Study Details
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-accent to-transparent rounded-full" />
                  <p className="text-white/80 leading-relaxed text-lg pt-2 whitespace-pre-line">{selected.content}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
