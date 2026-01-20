'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SkillBadge from '@/components/skill-badge';
import SearchInput from '@/components/search-input';

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Java', 'Spring Boot 3', 'Spring Framework', 'Hibernate',
  'C', 'Python', 'Docker', 'Kubernetes', 'HTML', 'CSS', 'Tailwind CSS', 'Git', 'RESTful APIs', 'OpenAPI',
  'SQL', 'NoSQL', 'CI/CD', 'Agile Methodologies', 'Kanban', 'Scrum', 'Microservices', 'Hexagonal Architecture',
  'FastAPI', 'Expo', 'React Native', 'PHP', 'Symfony', 'MySQL', 'PostgreSQL', 'MongoDB', 'Pytorch', 'Machine Learning',
  'CNN', 'Deep Learning',
];

export default function SkillsSection() {
  const [search, setSearch] = useState('');

  const filteredSkills = skills.filter(skill =>
    skill.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="my-skills" className="min-h-screen flex flex-col gap-8 mb-16 w-full">
      <motion.div
        className="flex flex-col gap-8 w-full"
        initial={{ opacity: 0.1, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
      >
        <h1 className="text-5xl font-bold text-white">My skills</h1>

        <SearchInput value={search} onChange={setSearch} />

        <div className="flex flex-wrap gap-3">
          {filteredSkills.map((skill, index) => (
            <SkillBadge key={skill} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
