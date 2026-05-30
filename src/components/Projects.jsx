import { useState } from 'react';

const projectPages = [
  [
    { 
      id: 1, 
      title: 'Project 1', 
      description: 'Coming soon...', 
      image: 'https://via.placeholder.com/400x300?text=Project+1',
      documentation: 'Detailed documentation for Project 1 will appear here. This project showcases key skills and achievements.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    },
    { 
      id: 2, 
      title: 'Project 2', 
      description: 'Coming soon...', 
      image: 'https://via.placeholder.com/400x300?text=Project+2',
      documentation: 'Detailed documentation for Project 2 will appear here. This project showcases key skills and achievements.',
      technologies: ['Node.js', 'MongoDB', 'Express'],
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    },
    { 
      id: 3, 
      title: 'Project 3', 
      description: 'Coming soon...', 
      image: 'https://via.placeholder.com/400x300?text=Project+3',
      documentation: 'Detailed documentation for Project 3 will appear here. This project showcases key skills and achievements.',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    },
    { 
      id: 4, 
      title: 'Project 4', 
      description: 'Coming soon...', 
      image: 'https://via.placeholder.com/400x300?text=Project+4',
      documentation: 'Detailed documentation for Project 4 will appear here. This project showcases key skills and achievements.',
      technologies: ['Vue.js', 'Firebase', 'Sass'],
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    },
    { 
      id: 5, 
      title: 'Project 5', 
      description: 'Coming soon...', 
      image: 'https://via.placeholder.com/400x300?text=Project+5',
      documentation: 'Detailed documentation for Project 5 will appear here. This project showcases key skills and achievements.',
      technologies: ['TypeScript', 'Next.js', 'GraphQL'],
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    },
    { 
      id: 6, 
      title: 'Project 6', 
      description: 'Coming soon...', 
      image: 'https://via.placeholder.com/400x300?text=Project+6',
      documentation: 'Detailed documentation for Project 6 will appear here. This project showcases key skills and achievements.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    },
    { 
      id: 7, 
      title: 'Project 7', 
      description: 'Coming soon...', 
      image: 'https://via.placeholder.com/400x300?text=Project+7',
      documentation: 'Detailed documentation for Project 7 will appear here. This project showcases key skills and achievements.',
      technologies: ['Angular', 'Spring Boot', 'MySQL'],
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    },
    { 
      id: 8, 
      title: 'Project 8', 
      description: 'Coming soon...', 
      image: 'https://via.placeholder.com/400x300?text=Project+8',
      documentation: 'Detailed documentation for Project 8 will appear here. This project showcases key skills and achievements.',
      technologies: ['Svelte', 'Supabase', 'Tailwind CSS'],
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    },
  ],
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const downloadDocumentation = () => {
    if (!selectedProject) return;
    
    const content = `PROJECT: ${selectedProject.title}
=====================================

DOCUMENTATION:
${selectedProject.documentation}

TECHNOLOGIES USED:
${selectedProject.technologies.join(', ')}

KEY FEATURES:
${selectedProject.features.map((feature, idx) => `${idx + 1}. ${feature}`).join('\n')}

=====================================
Generated from Portfolio
`;

    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${selectedProject.title.replace(/\s+/g, '_')}_documentation.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="projects" className="py-24 px-6 justify-items-center" style={{ padding: '0rem 1.5rem', marginBottom: '5rem' }}>
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider text-center mb-16 scroll-fade-in" style={{marginBottom: '5rem' }}>
          <span className="text-accent">PROJECTS</span>
          {/* <span className="text-text-primary">ECTS</span> */}
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 scroll-fade-in" style={{marginBottom: '2rem' }}>
          {projectPages[currentPage].map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
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

        {/* Pagination Dots - Only show if multiple pages */}
        {projectPages.length > 1 && (
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
        )}

        {/* Project Details Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div 
              className="bg-[#1a1a1a] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-accent/30 animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#0d0d0d] to-[#1a1a1a] border-b border-accent/30 px-8 py-6 flex justify-between items-center gap-4">
                <div className="flex-1" style={{ paddingLeft: '1rem' }}>
                  <h2 className="text-3xl font-bold text-accent">{selectedProject.title}</h2>
                </div>
                <div className="flex items-center gap-3" style={{ padding: '1rem' }} >
                  <button
                    onClick={downloadDocumentation}
                    className="flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/50 rounded-lg text-accent hover:bg-accent/20 hover:border-accent transition-all duration-300 font-semibold"
                    title="Download Documentation"
                    style={{ padding: '0.2rem 1rem' }}
                  >
                    <span>📥</span>
                    <span className="hidden sm:inline">Download</span>
                  </button>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 text-white hover:text-accent transition-colors duration-300 text-xl font-bold"
                    title="Close"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-12 space-y-10" style={{ padding: '2rem 3rem', spaceBetween: '2.5rem' }}>
                {/* Project Image */}
                <div className="rounded-lg overflow-hidden border border-accent/20 hover:border-accent/50 transition-colors duration-300" style={{ marginBottom: '1.5rem', height: '100px', objectFit: 'cover' }}>
                  <img
                    src={`https://via.placeholder.com/600x400?text=${encodeURIComponent(selectedProject.title)}`}
                    alt={selectedProject.title}
                    className="w-full h-auto"
                  />
                </div>

                {/* Documentation */}
                <div className="space-y-4 py-6" style={{ marginBottom: '1.5rem' }}>
                  <h3 className="text-2xl font-bold text-accent flex items-center gap-3" style={{ marginBottom: '0.2rem' }}>
                    <span className="text-3xl">📋</span>
                    Documentation
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-accent to-transparent rounded-full" style={{ marginBottom: '0.5rem' }}></div>
                  <p className="text-white/80 leading-relaxed text-lg pt-2">
                    {selectedProject.documentation}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent my-2"></div>

                {/* Technologies */}
                <div className="space-y-4 py-6" style={{ marginBottom: '1.5rem' }}>
                  <h3 className="text-2xl font-bold text-accent flex items-center gap-3" style={{ marginBottom: '0.2rem' }}>
                    <span className="text-3xl">⚙️</span>
                    Technologies
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-accent to-transparent rounded-full" style={{ marginBottom: '0.5rem' }}></div>
                  <div className="flex flex-wrap gap-4 pt-2" >
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-5 py-3 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold hover:bg-accent/20 hover:border-accent/60 transition-all duration-300 cursor-default"
                        style={{ padding: '0.2rem 0.5rem' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent my-2"></div>

                {/* Features */}
                <div className="space-y-4 py-6">
                  <h3 className="text-2xl font-bold text-accent flex items-center gap-3" style={{ marginBottom: '0.2rem' }}>
                    <span className="text-3xl">✨</span>
                    Key Features
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-accent to-transparent rounded-full" style={{ marginBottom: '0.5rem' }}></div>
                  <ul className="space-y-4 pt-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="text-accent text-xl font-bold mt-1 flex-shrink-0">▸</span>
                        <span className="text-white/80 text-lg pt-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action
                <div className="pt-8 border-t border-accent/20">
                  <button
                    onClick={closeModal}
                    className="w-full px-6 py-3 bg-accent/10 border border-accent/50 rounded-lg text-accent hover:bg-accent/20 hover:border-accent transition-all duration-300 font-semibold text-lg"
                  >
                    Close
                  </button> 
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
