'use client';
import { useState } from 'react';
import SkillBadge from '@/components/skill-badge';
import SearchInput from '@/components/search-input';
import LandingPageSection from '@/components/landing-page/landing-page-section';

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
    <LandingPageSection sectionId="my-skills">
        <h1 className="text-5xl font-bold text-white">My skills</h1>

        <SearchInput value={search} onChange={setSearch} />

        <div className="flex flex-wrap gap-3 max-h-30 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {filteredSkills.map((skill, index) => (
            <SkillBadge key={skill} skill={skill} index={index} />
          ))}
        </div>
    </LandingPageSection>
  );
}
