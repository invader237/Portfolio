"use client";
import { motion } from "framer-motion";

export default function AboutMeSection() {
  return (
    <section id="about-me" className="min-h-screen flex flex-col justify-center items-start gap-8">
      <motion.div
        initial={{ opacity: 0.1, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <h1 className="text-5xl font-bold text-white">About me</h1>
        <p className="text-white/70">
I’m Diego T., a passionate and curious full-stack developer currently completing my third year of a Bachelor’s degree in Computer Science, specialized in application development. I enjoy turning ideas into functional and user-friendly web experiences, exploring both frontend and backend aspects of development.

Alongside software engineering, I have developed a strong interest in machine learning and deep learning, particularly through image classification projects using convolutional neural networks (CNNs) and transfer learning.
        </p>
      </motion.div>
    </section>
  );
}
