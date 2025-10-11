'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionDisplayProps {
  sections: string[];
}

export default function SectionDisplay({ sections }: SectionDisplayProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.6 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.toLowerCase().replace(/\s+/g, '-'));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="fixed top-1/2 right-6 -translate-y-1/2 flex flex-col items-end z-50 space-y-8">
      {sections.map((section) => {
        const id = section.toLowerCase().replace(/\s+/g, '-');
        const isActive = activeSection === id;

        return (
          <div key={section} className="relative flex items-center justify-end w-32">
            <AnimatePresence>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="absolute right-8 text-white text-sm font-medium bg-white/10 backdrop-blur-md px-2 py-1 rounded-md
                             whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px]"
                >
                  {section}
                </motion.span>
              )}
            </AnimatePresence>

            <motion.div
              animate={{
                scale: isActive ? 1 : 0.5,
                backgroundColor: isActive ? '#ffffff' : '#ffffff55',
                boxShadow: isActive
                  ? '0 0 10px rgba(255,255,255,0.8)'
                  : '0 0 0 rgba(255,255,255,0)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="w-4 h-4 rounded-full cursor-pointer"
              title={section}
              onClick={() =>
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            />
          </div>
        );
      })}
    </div>
  );
}
