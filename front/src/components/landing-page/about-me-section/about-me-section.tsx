"use client";
import LandingPageSection from "@/components/landing-page/landing-page-section";

export default function AboutMeSection() {
  return (
    <LandingPageSection sectionId="about-me">
        <h2 className="text-5xl font-bold text-white">About me</h2>
        <p className="text-white/70">
I’m Diego T., a passionate and curious full-stack developer currently completing my third year of a Bachelor’s degree in Computer Science, specialized in application development. I enjoy turning ideas into functional and user-friendly web experiences, exploring both frontend and backend aspects of development.

Alongside software engineering, I have developed a strong interest in machine learning and deep learning, particularly through image classification projects using convolutional neural networks (CNNs) and transfer learning.
        </p>
    </LandingPageSection>
  );
}
