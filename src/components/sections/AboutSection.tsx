import { motion } from "motion/react";
import FadeInSection from "@/components/animations/FadeInSection";
import GlitchText from "@/components/animations/GlitchText";
import WaveText from "@/components/animations/WaveText";
import FloatingParticles from "@/components/backgrounds/FloatingParticles";
import { Code2, Briefcase, GraduationCap, Coffee, Zap } from "lucide-react";
import { useState } from "react";

const stats = [
  { icon: Code2, label: "Years Experience", value: "1+", color: "hsl(185 100% 50%)" },
  { icon: Briefcase, label: "Projects Completed", value: "50+", color: "hsl(270 100% 65%)" },
  { icon: GraduationCap, label: "Technologies", value: "20+", color: "hsl(25 100% 55%)" },
  { icon: Coffee, label: "Cups of Coffee", value: "∞", color: "hsl(340 100% 60%)" },
];

const codeSnippet = `const developer = {
  name: "Nagarajan",
  role: "Full Stack Developer",
  skills: [
    "React", "TypeScript",
    "Node.js", "Next.js",
    "PostgreSQL", "AWS"
  ],
  passion: "Building amazing
    web experiences",
  
  getCurrentProject: () => {
    return "Something awesome";
  },
  
  coffeeLevel: Infinity
};`;

const AboutSection: React.FC = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles count={25} className="opacity-20" />

      {/* Background Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"
        style={{ background: "var(--gradient-glow)" }}
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="container mx-auto px-6">
        <FadeInSection className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-mono text-primary mb-6"
            whileHover={{ scale: 1.05 }}
          >
            About Me
          </motion.span>
          <GlitchText
            text="Passionate Developer"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold"
            speed={0.4}
            enableOnHover={true}
          />
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Code Visual */}
          <FadeInSection direction="left" delay={0.2}>
            <div className="relative">
              <motion.div 
                className="aspect-square rounded-3xl overflow-hidden card-gradient border border-border/50 p-8 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring" }}
              >
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "linear-gradient(45deg, hsl(var(--primary)), transparent, hsl(var(--primary)))",
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                
                <div className="absolute inset-[2px] rounded-3xl bg-card" />
                
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center relative z-10">
                  {/* Code with typing animation */}
                  <div className="absolute inset-4 rounded-xl overflow-hidden">
                    <pre className="text-xs md:text-sm font-mono leading-relaxed p-4 overflow-hidden">
                      {codeSnippet.split("").map((char, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.02, duration: 0.1 }}
                          className="text-primary/70"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </pre>
                    
                    {/* Blinking cursor */}
                    <motion.span
                      className="absolute bottom-4 ml-1 w-2 h-5 bg-primary"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>
                  
                  {/* Scanlines */}
                  <div 
                    className="absolute inset-0 pointer-events-none z-20 opacity-30"
                    style={{
                      background: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary) / 0.03) 2px, hsl(var(--primary) / 0.03) 4px)",
                    }}
                  />
                  
                  {/* Glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 px-6 py-4 md:px-8 md:py-5 rounded-2xl glass-effect glow-effect z-20"
              >
                <motion.span 
                  className="text-2xl md:text-3xl font-bold gradient-text block"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  1+
                </motion.span>
                <p className="text-xs md:text-sm text-muted-foreground">Years of Experience</p>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="hidden md:block absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary/30"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="hidden md:block absolute top-1/2 -left-6 w-3 h-3 rounded-full bg-accent/50"
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </FadeInSection>

          {/* Content */}
          <FadeInSection direction="right" delay={0.3}>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold">
                Turning Ideas into{" "}
                <span className="relative inline-block">
                  <WaveText 
                    text="Digital Reality" 
                    className="gradient-text"
                    delay={0.08}
                    duration={0.6}
                  />
                </span>
              </h3>
              
              <motion.p 
                className="text-muted-foreground text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                I'm a passionate Full Stack Developer with over 5 years of experience 
                building modern web applications. I specialize in creating intuitive, 
                performant, and scalable solutions using cutting-edge technologies.
              </motion.p>

              <motion.p 
                className="text-muted-foreground text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                My journey in tech started with a curiosity about how things work on 
                the web. Today, I craft seamless user experiences, architect robust 
                backends, and constantly explore new technologies.
              </motion.p>

              <motion.p 
                className="text-muted-foreground text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source, or enjoying a good cup of coffee.
              </motion.p>

              {/* Stats Grid with extreme animations */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    className="relative text-center p-5 rounded-2xl glass-effect overflow-hidden cursor-pointer"
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    {/* Animated background on hover */}
                    <motion.div
                      className="absolute inset-0"
                      style={{ backgroundColor: stat.color }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredStat === index ? 0.1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Icon with animation */}
                    <motion.div
                      animate={{ 
                        rotate: hoveredStat === index ? [0, 10, -10, 0] : 0,
                        scale: hoveredStat === index ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon 
                        className="w-7 h-7 mx-auto mb-3 relative z-10" 
                        style={{ color: stat.color }}
                      />
                    </motion.div>

                    {/* Value with count-up effect */}
                    <motion.div 
                      className="text-2xl font-bold relative z-10"
                      style={{ color: stat.color }}
                      animate={{ 
                        scale: hoveredStat === index ? [1, 1.2, 1] : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {stat.value}
                    </motion.div>
                    
                    <div className="text-xs text-muted-foreground relative z-10 mt-1">
                      {stat.label}
                    </div>

                    {/* Glow effect on hover */}
                    {hoveredStat === index && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                          boxShadow: `0 0 30px ${stat.color}`,
                        }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
