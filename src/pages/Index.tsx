import { lazy, Suspense } from "react";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "motion/react";

// Hero loads eagerly so the first paint is meaningful.
import HeroSection from "@/components/sections/HeroSection";
import HeroLight from "@/components/sections/light/HeroLight";

// Below-the-fold sections are split into per-mode chunks so a visitor
// only downloads what their current theme actually uses.
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const SkillsSection = lazy(() => import("@/components/sections/SkillsSection"));
const EducationSection = lazy(() =>
  import("@/components/sections/EducationSection")
);
const AchievementsSection = lazy(() =>
  import("@/components/sections/AchievementsSection")
);
const ProjectsSection = lazy(() =>
  import("@/components/sections/ProjectsSection")
);
const ContactSection = lazy(() =>
  import("@/components/sections/ContactSection")
);

const AboutLight = lazy(() =>
  import("@/components/sections/light/AboutLight")
);
const SkillsLight = lazy(() =>
  import("@/components/sections/light/SkillsLight")
);
const EducationLight = lazy(() =>
  import("@/components/sections/light/EducationLight")
);
const AchievementsLight = lazy(() =>
  import("@/components/sections/light/AchievementsLight")
);
const ProjectsLight = lazy(() =>
  import("@/components/sections/light/ProjectsLight")
);
const ContactLight = lazy(() =>
  import("@/components/sections/light/ContactLight")
);

const SectionFallback: React.FC = () => (
  <div className="min-h-[40vh] w-full" aria-hidden="true" />
);

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
        {mode === "dark" ? (
          <main>
            <HeroSection />
            <Suspense fallback={<SectionFallback />}>
              <AboutSection />
              <SkillsSection />
              <EducationSection />
              <AchievementsSection />
              <ProjectsSection />
              <ContactSection />
            </Suspense>
          </main>
        ) : (
          <main>
            <HeroLight />
            <Suspense fallback={<SectionFallback />}>
              <AboutLight />
              <SkillsLight />
              <EducationLight />
              <AchievementsLight />
              <ProjectsLight />
              <ContactLight />
            </Suspense>
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
