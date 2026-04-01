'use client';

import { useState } from 'react';
import SkillBadge from '@/components/skill-badge';
import SearchInput from '@/components/search-input';
import LandingPageSection from '@/components/landing-page/landing-page-section';
import { useSkillsAndTechnologies } from './skills-section.hook';

export default function SkillsSection() {
  const [search, setSearch] = useState('');
  const { technologies, loading, error } = useSkillsAndTechnologies();

  if (loading) {
    return <p className="text-white">Loading skills...</p>;
  }

  if (error) {
    return <p className="text-red-400">Failed to load skills</p>;
  }

  const filteredSkills = technologies.filter((skill) =>
    skill.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <LandingPageSection sectionId="my-skills">
      <h2 className="text-5xl font-bold text-white mb-4">My skills</h2>

      <SearchInput value={search} onChange={setSearch} />

      <div
        className="w-full max-w-4xl mx-auto"
        style={{
          borderRadius: '1rem',
          boxShadow: `
            inset 0 4px 6px rgba(0,0,0,0.1),
            inset 0 -4px 6px rgba(0,0,0,0.1),
            inset 4px 0 6px rgba(0,0,0,0.1),
            inset -4px 0 6px rgba(0,0,0,0.1)
          `,
        }}
      >
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="flex flex-wrap gap-3 max-h-30 overflow-y-auto">
          {filteredSkills.map((skill, index) => (
            <SkillBadge
              key={`${skill.id}-${index}`} 
              skill={skill.name}
              index={index}
            />
          ))}
        </div>
      </div>
      </div>
    </LandingPageSection>
  );
}
