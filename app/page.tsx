import React from 'react';
import Hero from '@/components/hero/Hero';
import AboutSection from '@/components/about/AboutSection';
import FocusSection from '@/components/focus/FocusSection';
import FeaturedProjects from '@/components/projects/FeaturedProjects';
import AdditionalProjects from '@/components/projects/AdditionalProjects';
import SkillsSection from '@/components/skills/SkillsSection';
import ExperienceSection from '@/components/experience/ExperienceSection';
import ResumeSection from '@/components/resume/ResumeSection';
import ContactSection from '@/components/contact/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSection />
      <FocusSection />
      <FeaturedProjects />
      <AdditionalProjects />
      <SkillsSection />
      <ExperienceSection />
      <ResumeSection />
      <ContactSection />
    </div>
  );
}
