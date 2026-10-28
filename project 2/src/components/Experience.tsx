import { experience } from '../data/site';
import { Section } from './Section';

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol>
        {experience.map((role, index) => (
          <li
            key={role.company}
            className={`py-10 ${index === 0 ? 'pt-0' : 'border-t border-line'}`}
          >
            <h3 className="font-display text-2xl font-bold tracking-tight">{role.company}</h3>
            <p className="mt-1 text-muted">
              {role.title}, {role.period}
            </p>
            <div className="mt-6 space-y-6">
              {role.groups.map((group, groupIndex) => (
                <div key={group.heading ?? groupIndex}>
                  {group.heading && <h4 className="mb-3 font-medium">{group.heading}</h4>}
                  <ul className="max-w-2xl list-disc space-y-2 pl-5 text-muted marker:text-line">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
