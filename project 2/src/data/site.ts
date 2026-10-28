// All the text on the site lives here. Edit this file to update the page.

export const profile = {
  name: 'Sai Kumar Reddy Mamidala',
  shortName: 'Sai Mamidala',
  role: 'Full stack developer working in Java, Spring Boot, Angular and AWS.',
  intro:
    'I build web applications end to end: the interface people use, the API behind it, and the cloud it runs on.',
  // TODO: replace with your real email address.
  email: 'your.email@example.com',
  github: 'https://github.com/Mamidalasaireddy',
  // Add your LinkedIn profile URL here and a LinkedIn icon appears automatically.
  linkedin: '',
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

// TODO: these three are sample projects. Replace them with your own work.
// Leave out `github` or `live` if a project doesn't have that link.
export const projects: Project[] = [
  {
    title: 'Order management platform',
    description:
      'An Angular dashboard for tracking orders, backed by Spring Boot REST APIs and deployed on AWS.',
    tech: ['Angular', 'TypeScript', 'Spring Boot', 'Java', 'AWS'],
    github: 'https://github.com/Mamidalasaireddy',
  },
  {
    title: 'Customer portal',
    description:
      'Secure sign-in, profile management and role-based access built on Spring Security.',
    tech: ['Angular', 'Spring Boot', 'Spring Security', 'JWT'],
    github: 'https://github.com/Mamidalasaireddy',
  },
  {
    title: 'Automated cloud deployment',
    description:
      'A build-and-release pipeline that ships a Java service to AWS the same way every time.',
    tech: ['Java', 'Maven', 'Docker', 'AWS', 'CI/CD'],
    github: 'https://github.com/Mamidalasaireddy',
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

// TODO: adjust these lists to match what you actually work with.
export const skills: SkillGroup[] = [
  {
    category: 'Backend',
    items: ['Java', 'Spring Boot', 'REST APIs', 'Microservices'],
  },
  {
    category: 'Frontend',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML and CSS'],
  },
  {
    category: 'Cloud and delivery',
    items: ['AWS', 'Docker', 'CI/CD', 'Git'],
  },
  {
    category: 'Data',
    items: ['SQL', 'PostgreSQL', 'MySQL'],
  },
];
