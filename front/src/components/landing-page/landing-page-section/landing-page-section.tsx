"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LandingPageSectionProps {
  children: ReactNode;
  sectionId: string;
}

export default function LandingPageSection({
  children,
  sectionId,
}: LandingPageSectionProps) {
  return (
    <section
      id={sectionId}
      className="
        min-h-screen
        flex
        items-center
        justify-center
        snap-none
        md:snap-center
      "
    >
      <motion.div
        className="
          w-full
          max-w-4xl
          flex
          flex-col
          gap-8
          items-start
        "
        initial={{ opacity: 0.1, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
