const certifications = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `Certification ${i + 1}`,
}));

export default function Certifications() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider text-center mb-16 scroll-fade-in">
          <span className="text-accent">CERTIFIC</span>
          <span className="text-text-primary">ATIONS</span>
        </h2>

        {/* Certification Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 scroll-fade-in">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="card-hover rounded-lg aspect-square flex flex-col items-center justify-center p-4 cursor-pointer group"
              style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
            >
              {/* Placeholder certificate icon */}
              <svg
                className="w-10 h-10 text-border group-hover:text-accent/50 transition-colors mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <p className="text-text-secondary text-xs text-center group-hover:text-text-primary transition-colors">
                {cert.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
