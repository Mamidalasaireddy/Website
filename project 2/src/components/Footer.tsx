import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/site';

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-5 text-muted">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="transition-colors hover:text-ink"
          >
            <Github size={20} />
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="transition-colors hover:text-ink"
            >
              <Linkedin size={20} />
            </a>
          )}
          <a href={`mailto:${profile.email}`} aria-label="Send an email" className="transition-colors hover:text-ink">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
