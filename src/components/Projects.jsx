import { useState } from 'react';

const projectPages = [
  [
    { id: 1, title: 'Project 1', description: 'Coming soon...' },
    { id: 2, title: 'Project 2', description: 'Coming soon...' },
    { id: 3, title: 'Project 3', description: 'Coming soon...' },
    { id: 4, title: 'Project 4', description: 'Coming soon...' },
  ],
  [
    { id: 5, title: 'Project 5', description: 'Coming soon...' },
    { id: 6, title: 'Project 6', description: 'Coming soon...' },
    { id: 7, title: 'Project 7', description: 'Coming soon...' },
    { id: 8, title: 'Project 8', description: 'Coming soon...' },
  ],
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider text-center mb-16 scroll-fade-in">
          <span className="text-accent">PROJ</span>
          <span className="text-text-primary">ECTS</span>
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 scroll-fade-in">
          {projectPages[currentPage].map((project) => (
            <div
              key={project.id}
              className="card-hover rounded-lg aspect-[4/3] flex flex-col items-center justify-center p-6 cursor-pointer group"
              style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
            >
              {/* Placeholder icon */}
              <svg
                className="w-12 h-12 text-border group-hover:text-accent/50 transition-colors mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              <h3 className="font-heading text-lg font-semibold text-text-secondary group-hover:text-text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-text-secondary/60 text-sm mt-1">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 scroll-fade-in">
          {projectPages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? 'bg-accent scale-130'
                  : 'bg-border hover:bg-text-secondary'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
