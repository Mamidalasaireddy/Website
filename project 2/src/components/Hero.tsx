import { Github, Linkedin } from 'lucide-react';
import { profile } from '../data/site';
import { InvoiceFlow } from './InvoiceFlow';

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <h1 className="font-display text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-xl font-medium">{profile.role}</p>
          <p className="mt-4 max-w-xl text-lg text-muted">{profile.intro}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-md bg-ink px-6 py-3 font-medium text-paper transition-colors hover:bg-accent"
            >
              Get in touch
            </a>
            <a
              href="#experience"
              className="rounded-md border border-ink/20 px-6 py-3 font-medium transition-colors hover:border-ink"
            >
              View experience
            </a>
          </div>

          <div className="mt-10 flex gap-5 text-muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="transition-colors hover:text-ink"
            >
              <Github size={22} />
            </a>
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="transition-colors hover:text-ink"
              >
                <Linkedin size={22} />
              </a>
            )}
          </div>
        </div>

        <InvoiceFlow />
      </div>
    </section>
  );
}
