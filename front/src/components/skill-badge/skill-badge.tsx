'use client';
import React from 'react';

interface SkillBadgeProps {
  skill: string;
  index: number; 
}

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
  const bgColor = index % 2 === 0 ? 'bg-white/10' : 'bg-pink-500/80';

  return (
    <span
      className={`px-3 py-1 rounded-full shadow-md text-white text-sm whitespace-nowrap ${bgColor}`}
    >
      {skill}
    </span>
  );
}
