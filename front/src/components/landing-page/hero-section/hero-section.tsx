"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface HeroSectionProps {
  scrollToId: string;
}

export default function HeroSection({ scrollToId }: HeroSectionProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-left relative snap-center md:snap-none">
      <div className="flex flex-col md:flex-row justify-left gap-8">
        <h1 className="text-7xl font-bold text-white">
          Hi, I&apos;m Diego, <br />a{" "}
          <span className="relative inline-block">
            <motion.div
              className="absolute left-0 bottom-1 h-[12px] bg-pink-500/80 z-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ transformOrigin: "left", width: "100%" }}
            />
            <span className="relative z-10">Fullstack</span>
          </span>{" "}
          developer
        </h1>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{ opacity }}
      >
        <button
          className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 transition text-white"
          onClick={() => {
            document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <ExpandMoreIcon className="animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
