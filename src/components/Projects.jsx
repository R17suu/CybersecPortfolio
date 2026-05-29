import { useState } from 'react';

const projectPages = [
  [
    { id: 1, title: 'Project 1', description: 'Coming soon...', image: 'https://via.placeholder.com/400x300?text=Project+1' },
    { id: 2, title: 'Project 2', description: 'Coming soon...', image: 'https://via.placeholder.com/400x300?text=Project+2' },
    { id: 3, title: 'Project 3', description: 'Coming soon...', image: 'https://via.placeholder.com/400x300?text=Project+3' },
    { id: 4, title: 'Project 4', description: 'Coming soon...', image: 'https://via.placeholder.com/400x300?text=Project+4' },
  ],
  [
    { id: 5, title: 'Project 5', description: 'Coming soon...', image: 'https://via.placeholder.com/400x300?text=Project+5' },
    { id: 6, title: 'Project 6', description: 'Coming soon...', image: 'https://via.placeholder.com/400x300?text=Project+6' },
    { id: 7, title: 'Project 7', description: 'Coming soon...', image: 'https://via.placeholder.com/400x300?text=Project+7' },
    { id: 8, title: 'Project 8', description: 'Coming soon...', image: 'https://via.placeholder.com/400x300?text=Project+8' },
  ],
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section id="projects" className="py-24 px-6 justify-items-center" style={{ padding: '6rem 1.5rem', marginBottom: '5rem' }}>
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider text-center mb-16 scroll-fade-in" style={{marginBottom: '5rem' }}>
          <span className="text-accent">PROJECTS</span>
          {/* <span className="text-text-primary">ECTS</span> */}
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 scroll-fade-in" style={{marginBottom: '2rem' }}>
          {projectPages[currentPage].map((project) => (
            <div
              key={project.id}
              className="card-hover rounded-lg aspect-[4/3] flex flex-col cursor-pointer group relative overflow-hidden"
              style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
            >
              {/* Project Image */}
              <div className="flex-1 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden">
                <img
                  src={`https://via.placeholder.com/400x300?text=${encodeURIComponent(project.title)}`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />  
              </div>

              {/* Project Title at Bottom */}
              <div className="bg-black/50 px-4 py-3">
                <h3 className="font-heading text-base font-semibold text-white truncate">
                  {project.title}
                </h3>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                <h3 className="font-heading text-lg font-semibold text-white mb-2 text-center">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm text-center">
                  {project.description}
                </p>
              </div>
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
