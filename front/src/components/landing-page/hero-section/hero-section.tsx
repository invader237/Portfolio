"use client";

import { useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface HeroSectionProps {
  scrollToId: string;
}

export default function HeroSection({ scrollToId }: HeroSectionProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);

  const rotateX = useSpring(rotateXRaw, {
    stiffness: 200,
    damping: 20,
  });

  const rotateY = useSpring(rotateYRaw, {
    stiffness: 80,
    damping: 20,
  });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const x = e.clientX - centerX;
      const y = e.clientY - centerY;

      rotateXRaw.set(-(y / centerY) * 15);
      rotateYRaw.set((x / centerX) * 15);
    }

    function handleMouseLeave() {
      rotateXRaw.set(0);
      rotateYRaw.set(0);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [rotateXRaw, rotateYRaw]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center snap-center md:snap-none"
      style={{ perspective: "1200px" }}
    >
    <motion.div
      className="
        absolute
        top-8/20 left-14/20
        -translate-x-1/2 -translate-y-1/2
        rounded-2xl
        bg-white/10 backdrop-blur-md
        border border-white/20
        shadow-xl
        pointer-events-none
        overflow-hidden
        flex items-center justify-center
      "
      style={{
        width: "250px",
        height: "250px",
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <img
        src="/images/profile-picture.png"
        alt="Illustration"
        className="w-full h-full object-cover pointer-events-none"
      />
    </motion.div>

      <div className="relative z-10 flex flex-col gap-8">
        <h1 className="text-7xl font-bold text-white leading-tight">
          Hi, I&apos;m Diego, <br />
          a{" "}
          <span className="relative inline-block">
            <motion.div
              className="absolute left-0 bottom-1 h-[12px] w-full bg-pink-500/80"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
            <span className="relative z-10">Fullstack</span>
          </span>{" "}
          developer
        </h1>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity }}
      >
        <button
          className="
            px-4 py-2
            rounded-xl
            bg-white/10 backdrop-blur-md
            border border-white/20
            shadow-md
            hover:bg-white/20
            transition
            text-white
          "
          onClick={() =>
            document
              .getElementById(scrollToId)
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          <ExpandMoreIcon className="animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
