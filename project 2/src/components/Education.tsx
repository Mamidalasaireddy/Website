import { education } from '../data/site';
import { Section } from './Section';

export function Education() {
  return (
    <Section id="education" title="Education">
      <p className="font-display text-2xl font-bold tracking-tight">{education.degree}</p>
      <p className="mt-1 text-lg text-muted">{education.school}</p>
    </Section>
  );
}
