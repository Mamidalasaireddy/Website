import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management and secure payment processing.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'AI Task Manager',
    description: 'Smart task management app with AI-powered prioritization and scheduling suggestions.',
    image: 'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['TypeScript', 'Next.js', 'OpenAI', 'Prisma'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Interactive dashboard for real-time data visualization and business analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tech: ['Vue.js', 'D3.js', 'Firebase', 'TailwindCSS'],
    github: 'https://github.com',
    live: 'https://example.com'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                    <Github size={24} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}