import { skills } from '../data/site';
import { Section } from './Section';

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl>
        {skills.map((group, index) => (
          <div
            key={group.category}
            className={`grid gap-2 py-6 sm:grid-cols-[200px_1fr] sm:gap-8 ${
              index === 0 ? 'pt-0' : 'border-t border-line'
            }`}
          >
            <dt className="font-display text-lg font-bold tracking-tight">{group.category}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-2 gap-y-1 text-muted">
                {group.items.map((item) => (
                  <li key={item} className="after:ml-2 after:text-muted/40 after:content-['/'] last:after:hidden">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
