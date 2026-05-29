const courses = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `Course ${i + 1}`,
}));

export default function Courses() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider text-center mb-16 scroll-fade-in">
          <span className="text-accent">COURSES </span>
          <span className="text-text-primary">COMPLETED</span>
        </h2>

        {/* Course Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 scroll-fade-in">
          {courses.map((course) => (
            <div
              key={course.id}
              className="card-hover rounded-lg aspect-square flex flex-col items-center justify-center p-4 cursor-pointer group"
              style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
            >
              {/* Placeholder book icon */}
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <p className="text-text-secondary text-xs text-center group-hover:text-text-primary transition-colors">
                {course.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
