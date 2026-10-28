import { skills } from '../data/site';
import { Section } from './Section';

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl>
        {skills.map((group, index) => (
          <div
            key={group.category}
            className={`grid gap-1 py-6 sm:grid-cols-[200px_1fr] sm:gap-8 ${
              index === 0 ? 'pt-0' : 'border-t border-line'
            }`}
          >
            <dt className="font-display text-lg font-bold tracking-tight">{group.category}</dt>
            <dd className="text-lg text-muted">{group.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
