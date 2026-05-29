export default function About() {
  return (
    <section id="about" className="py-24 px-6 flex justify-center" style={{ padding: '6rem 1.5rem', marginBottom: '10rem' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider text-center mb-16 scroll-fade-in" style={{ marginBottom: '5rem' }}>
          <span className="text-accent">ABOUT</span>{' '}
          <span className="text-text-primary">ME</span>
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 scroll-fade-in">
          {/* Text */}
          <div className="flex-1 order-2 md:order-1">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-2">
              Hi there, This is John Pruds Colot
            </h3>
            <p className="text-accent text-sm mb-6 tracking-wide" style={{ marginBottom: '1.5rem' }}>
              Information Technology Student &amp; Technical Project Manager
            </p>
            <p className="text-text-secondary leading-relaxed text-sm md:text-base">
              As an Information Technology student and active student leader, I
              excel at organizing collaborative teams, facilitating
              communication, and keeping projects moving forward. Driven by a
              strong curiosity for cybersecurity and a commitment to continuous
              learning, I am actively building my foundational knowledge in
              threat defense and network security from the ground up. I bring
              adaptability, unshakeable integrity, and strong organizational
              skills to the table, aiming to support security teams by
              coordinating efforts and ensuring clear communication across
              technical projects.
            </p>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 order-1 md:order-2 flex justify-center md:justify-center w-full md:w-auto">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              {/* Glow background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 via-accent/10 to-transparent blur-2xl"></div>
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent/30 profile-glow">
                <img 
                  src="/Profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
