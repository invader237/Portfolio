'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type SectionItem = {
  label: string;
  id: string;
};

interface SectionDisplayProps {
  sections: SectionItem[];
  scrollContainerId?: string;
}

export default function SectionDisplay({
  sections,
  scrollContainerId,
}: SectionDisplayProps) {
  const sectionIdsKey = useMemo(
    () => sections.map((section) => section.id).join('|'),
    [sections]
  );

  const [activeSection, setActiveSection] = useState<string | null>(
    sections[0]?.id ?? null
  );

  useEffect(() => {
    if (!sections.length) return;

    const root = scrollContainerId
      ? document.getElementById(scrollContainerId)
      : null;
    const observedIds = new Set<string>();
    const visibleRatios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleRatios.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleRatios.delete(entry.target.id);
          }
        });

        let nextActive: string | null = null;
        let bestRatio = -1;

        visibleRatios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            nextActive = id;
          }
        });

        if (nextActive) {
          setActiveSection(nextActive);
        }
      },
      {
        root,
        threshold: [0.25, 0.4, 0.6, 0.8],
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    const syncObservedSections = () => {
      sections.forEach((section) => {
        if (observedIds.has(section.id)) return;

        const el = document.getElementById(section.id);
        if (!el) return;

        observer.observe(el);
        observedIds.add(section.id);
      });
    };

    syncObservedSections();

    const mutationObserver = new MutationObserver(syncObservedSections);

    mutationObserver.observe(root ?? document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [sections, sectionIdsKey, scrollContainerId]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hidden md:fixed md:top-1/2 md:right-6 md:-translate-y-1/2 md:flex md:flex-col md:items-end md:z-50 md:space-y-8">
      {sections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <div key={section.id} className="relative flex items-center justify-end w-32">
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
                  {section.label}
                </motion.span>
              )}
            </AnimatePresence>

            <motion.button
              type="button"
              aria-label={`Go to ${section.label}`}
              animate={{
                scale: isActive ? 1 : 0.5,
                backgroundColor: isActive ? '#ffffff' : '#ffffff55',
                boxShadow: isActive
                  ? '0 0 10px rgba(255,255,255,0.8)'
                  : '0 0 0 rgba(255,255,255,0)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              whileHover={{ scale: isActive ? 1.08 : 0.62 }}
              whileTap={{ scale: isActive ? 0.95 : 0.5 }}
              className="w-4 h-4 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              title={section.label}
              onClick={() => scrollToSection(section.id)}
            />
          </div>
        );
      })}
    </div>
  );
}
