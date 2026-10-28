import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[200px_1fr] md:gap-12 md:py-24">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
