import React from 'react';
import { Code2, Database, Layout, Server, Settings, Smartphone } from 'lucide-react';

const skills = [
  {
    category: 'Frontend Development',
    icon: <Layout className="w-6 h-6" />,
    items: ['React', 'TypeScript', 'Next.js', 'TailwindCSS']
  },
  {
    category: 'Backend Development',
    icon: <Server className="w-6 h-6" />,
    items: ['Node.js', 'Python', 'Express', 'FastAPI']
  },
  {
    category: 'Database',
    icon: <Database className="w-6 h-6" />,
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma']
  },
  {
    category: 'Mobile Development',
    icon: <Smartphone className="w-6 h-6" />,
    items: ['React Native', 'Flutter', 'iOS', 'Android']
  },
  {
    category: 'DevOps',
    icon: <Settings className="w-6 h-6" />,
    items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes']
  },
  {
    category: 'Programming Languages',
    icon: <Code2 className="w-6 h-6" />,
    items: ['JavaScript', 'Python', 'Java', 'Go']
  }
];

export function Skills() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-400">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span key={itemIndex} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}