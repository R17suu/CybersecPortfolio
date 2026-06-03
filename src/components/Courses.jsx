const courses = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `Course ${i + 1}`,
  description: 'Coming soon...',
  image: `https://via.placeholder.com/300x300?text=Course+${i + 1}`,
}));

export default function Courses() {
  return (
    <section className="py-24 px-6 justify-items-center" style={{ padding: '6rem 1.5rem', marginBottom: '8rem' }}>
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider text-center mb-16 scroll-fade-in" style={{marginBottom: '5rem' }}>
          <span className="text-accent">COURSES </span>
          <span className="text-text-primary">TAKEN</span>
        </h2>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 scroll-fade-in" style={{marginBottom: '2rem', justifyItems: 'center' }}>
          {courses.map((course) => (
            <div
              key={course.id}
              className="card-hover rounded-lg aspect-square flex flex-col cursor-pointer group relative overflow-hidden w-full max-w-xs"
              style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
            >
              {/* Course Image */}
              <div className="flex-1 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Course Title at Bottom */}
              <div className="bg-black/50 px-3 py-2">
                <p className="font-heading text-sm font-semibold text-white truncate">
                  {course.title}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <h3 className="font-heading text-base font-semibold text-white mb-2 text-center">
                  {course.title}
                </h3>
                <p className="text-white/80 text-xs text-center">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
