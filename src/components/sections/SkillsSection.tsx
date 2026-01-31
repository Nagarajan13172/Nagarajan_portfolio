import { motion } from "motion/react";
import FadeInSection from "@/components/animations/FadeInSection";
import GlitchText from "@/components/animations/GlitchText";
import GravitySkills from "@/components/backgrounds/GravitySkills";
import FloatingParticles from "@/components/backgrounds/FloatingParticles";
import { useState } from "react";

const allSkills = [
  "React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "React Native",
  "Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "Redis",
  "Git", "Docker", "AWS", "Figma", "CI/CD", "Testing",
];

const skillCategories = {
  frontend: [
    { name: "React", level: 95, color: "hsl(185 100% 50%)" },
    { name: "TypeScript", level: 90, color: "hsl(210 100% 60%)" },
    { name: "Next.js", level: 88, color: "hsl(0 0% 80%)" },
    { name: "Tailwind CSS", level: 92, color: "hsl(185 100% 50%)" },
    { name: "Flutter", level: 70, color: "hsl(185 100% 50%)" },
  ],
  backend: [
    { name: "Node.js", level: 88, color: "hsl(120 60% 45%)" },
    { name: "Express", level: 85, color: "hsl(0 0% 70%)" },
    { name: "PostgreSQL", level: 82, color: "hsl(210 80% 55%)" },
    { name: "MongoDB", level: 78, color: "hsl(120 50% 40%)" },
    { name: "GraphQL", level: 75, color: "hsl(320 80% 55%)" },
  ],
};

const AnimatedSkillBar: React.FC<{
  name: string;
  level: number;
  color: string;
  index: number
}> = ({ name, level, color, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring" }}
      className="space-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center">
        <motion.span
          className="font-medium text-foreground"
          animate={{ x: isHovered ? 5 : 0 }}
        >
          {name}
        </motion.span>
        <motion.span
          className="text-sm font-mono"
          style={{ color }}
          animate={{ scale: isHovered ? 1.1 : 1 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-3 bg-secondary/50 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
          className="h-full rounded-full relative"
          style={{ backgroundColor: color }}
        >
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
          />
          {/* Glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: isHovered
                ? `0 0 20px ${color}, 0 0 40px ${color}`
                : `0 0 10px ${color}`
            }}
          />
        </motion.div>
        {/* Animated particles on bar */}
        {isHovered && (
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
            style={{ backgroundColor: color, left: `${level}%` }}
            animate={{
              scale: [1, 2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        )}
      </div>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <FloatingParticles count={30} className="opacity-30" />

      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.2), transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Glow */}
      <motion.div
        className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full opacity-20 translate-y-1/2 -translate-x-1/2"
        style={{ background: "var(--gradient-glow)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <FadeInSection className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-mono text-primary mb-6"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                "0 0 10px hsl(var(--primary) / 0.2)",
                "0 0 20px hsl(var(--primary) / 0.4)",
                "0 0 10px hsl(var(--primary) / 0.2)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Skills & Expertise
          </motion.span>
          <GlitchText
            text="Technologies I Work With"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold"
            speed={0.4}
            enableOnHover={true}
          />
        </FadeInSection>

        {/* Interactive Gravity Skills Demo */}
        <FadeInSection className="mb-20">
          <div className="text-center mb-8">
            <p className="text-muted-foreground">Click and drag the skills below!</p>
          </div>
          <div className="h-[400px] md:h-[300px] rounded-3xl card-gradient border border-border/50 overflow-hidden">
            <GravitySkills skills={allSkills} className="w-full h-full" />
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend */}
          <FadeInSection delay={0.1}>
            <motion.div
              className="p-6 md:p-8 rounded-3xl card-gradient border border-border/50 h-full relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at center, hsl(var(--primary) / 0.1), transparent 70%)",
                }}
              />

              <div className="flex items-center gap-3 mb-8 relative z-10">
                <motion.div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="text-2xl md:text-3xl">🎨</span>
                </motion.div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">Frontend</h3>
                  <p className="text-sm text-muted-foreground">UI & Interfaces</p>
                </div>
              </div>
              <div className="space-y-5 relative z-10">
                {skillCategories.frontend.map((skill, index) => (
                  <AnimatedSkillBar key={skill.name} {...skill} index={index} />
                ))}
              </div>
            </motion.div>
          </FadeInSection>

          {/* Backend */}
          <FadeInSection delay={0.2}>
            <motion.div
              className="p-6 md:p-8 rounded-3xl card-gradient border border-border/50 h-full relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at center, hsl(270 100% 65% / 0.1), transparent 70%)",
                }}
              />

              <div className="flex items-center gap-3 mb-8 relative z-10">
                <motion.div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center"
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                >
                  <span className="text-2xl md:text-3xl">⚙️</span>
                </motion.div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">Backend</h3>
                  <p className="text-sm text-muted-foreground">Server & Database</p>
                </div>
              </div>
              <div className="space-y-5 relative z-10">
                {skillCategories.backend.map((skill, index) => (
                  <AnimatedSkillBar key={skill.name} {...skill} index={index} />
                ))}
              </div>
            </motion.div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
