import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";

// Dark mode sections
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

// Light mode sections
import HeroLight from "@/components/sections/light/HeroLight";
import AboutLight from "@/components/sections/light/AboutLight";
import SkillsLight from "@/components/sections/light/SkillsLight";
import EducationLight from "@/components/sections/light/EducationLight";
import AchievementsLight from "@/components/sections/light/AchievementsLight";
import ProjectsLight from "@/components/sections/light/ProjectsLight";
import ContactLight from "@/components/sections/light/ContactLight";

import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "motion/react";

const MainContent = () => {
  const { mode } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={mode}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {mode === 'dark' ? (
          // Dark Mode Layout
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <EducationSection />
            <AchievementsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
        ) : (
          // Light Mode Layout
          <main>
            <HeroLight />
            <AboutLight />
            <SkillsLight />
            <EducationLight />
            <AchievementsLight />
            <ProjectsLight />
            <ContactLight />
          </main>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden w-full max-w-full">
        <Navigation />
        <MainContent />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
