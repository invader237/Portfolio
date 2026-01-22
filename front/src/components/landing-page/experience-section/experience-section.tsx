"use client";
import { useState, useLayoutEffect, useRef } from "react";
import { ToggleGroup } from "radix-ui";
import LandingPageSection from "@/components/landing-page/landing-page-section";

interface ExperienceItem {
  value: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
}

interface ExperienceSectionProps {
  items: ExperienceItem[];
}

export default function ExperienceSection({ items }: ExperienceSectionProps) {
  const [value, setValue] = useState(items[0].value);
  const [itemHeight, setItemHeight] = useState(0);
  const ref = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (ref.current) setItemHeight(ref.current.offsetHeight);
  }, []);

  return (
    <LandingPageSection sectionId="my-experiences">
        <h1 className="text-5xl font-bold text-white">My experiences</h1>

      <div className="relative inline-flex flex-row">
        <span
          className="absolute left-0 w-1 bg-pink-500/80 transition-all duration-300"
          style={{
            top: `${items.findIndex(i => i.value === value) * itemHeight}px`,
            height: `${itemHeight}px`,
          }}
        />
        <ToggleGroup.Root type="single" value={value} onValueChange={(val) => val && setValue(val)} className="flex-col inline-flex">
          {items.map((item, idx) => (
            <ToggleGroup.Item
              key={item.value}
              value={item.value}
              ref={idx === 0 ? ref : null}
              className="px-4 py-8 text-left border-l-4 border-gray-300 data-[state=on]:text-pink-500/80"
            >
              {item.label}
            </ToggleGroup.Item>
          ))}
        </ToggleGroup.Root>

        <div className="ml-8 mt-4 flex flex-col">
          <span className="text-2xl font-bold text-white">{items.find(i => i.value === value)?.title}</span>
          <span className="text-md text-white/70">{items.find(i => i.value === value)?.subtitle}</span>
          <span className="mt-2 text-white/60">{items.find(i => i.value === value)?.description}</span>
        </div>
      </div>
    </LandingPageSection>
  );
}
