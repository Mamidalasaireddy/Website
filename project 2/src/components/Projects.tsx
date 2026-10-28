import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/site';
import { Section } from './Section';

const linkClass =
  'inline-flex items-center gap-1 font-medium underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent';

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul>
        {projects.map((project, index) => (
          <li
            key={project.title}
            className={`py-8 ${index === 0 ? 'pt-0' : 'border-t border-line'}`}
          >
            <h3 className="font-display text-2xl font-bold tracking-tight">{project.title}</h3>
            <p className="mt-3 max-w-xl text-lg text-muted">{project.description}</p>
            <p className="mt-4 max-w-xl text-sm font-medium">{project.tech.join(', ')}</p>
            {(project.github || project.live) && (
              <div className="mt-5 flex flex-wrap gap-6 text-sm">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Source code <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Live site <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
