import { useEffect, useState } from 'react';

const posts = [
  {
    id: 1,
    title: 'How I Built Project X',
    excerpt: 'A short walkthrough of Project X and lessons learned.',
    content:
      'I started Project X to solve problem A. I iterated on the UI, addressed performance bottlenecks by lazy-loading assets, and improved accessibility by adding semantic HTML and keyboard support. The result was a 40% improvement in load metrics and better user feedback.',
  },
  {
    id: 2,
    title: 'Designing for Accessibility',
    excerpt: 'Practical tips for accessible web interfaces.',
    content:
      'Accessibility is about people. Use semantic HTML, provide meaningful alt text, ensure color contrast, and test with keyboard-only navigation and screen readers. Start small and integrate checks into your workflow.',
  },
  {
    id: 3,
    title: 'Performance Optimizations',
    excerpt: 'Small changes that made a big performance impact.',
    content:
      'Measure before you change. Focus on reducing render-blocking resources, compress images, and use code-splitting. Caching and CDN usage provided consistent improvements across regions.',
  },
];

export default function Blog() {
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
    <section id="blog" className="py-24 px-6 justify-items-center" style={{ padding: '0rem 1.5rem', marginBottom: '6rem' }}>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider text-center mb-12 scroll-fade-in" style={{ marginBottom: '5rem' }}>
          <span className="text-accent">BLOG</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-fade-in">
          {posts.map((post) => (
            <article
              key={post.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelected(post)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelected(post)}
              className="bg-[#0f0f0f] p-6 rounded-lg border border-[#222] cursor-pointer"
            >
              <h3 className="font-heading text-lg font-semibold text-white mb-2">{post.title}</h3>
              <p className="text-white/80 text-sm">{post.excerpt}</p>
            </article>
          ))}
        </div>

        {selected && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            aria-modal="true"
            role="dialog"
          >
            <div
              className="bg-[#0b0b0b] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-accent/30 animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-gradient-to-r from-[#0d0d0d] to-[#1a1a1a] border-b border-accent/30 px-8 py-6 flex justify-between items-center gap-4">
                <div className="flex-1" style={{ paddingLeft: '1rem' }}>
                  <h2 className="text-3xl font-bold text-accent">{selected.title}</h2>
                </div>
                <div className="flex items-center gap-3" style={{ padding: '1rem' }}>
                  <button
                    onClick={() => setSelected(null)}
                    className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 text-white hover:text-accent transition-colors duration-300 text-xl font-bold"
                    title="Close"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="p-8 md:p-12 space-y-6" style={{ padding: '2rem 3rem' }}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-accent flex items-center gap-3">
                    <span className="text-3xl">📝</span>
                    Article
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
