import Spline from "@splinetool/react-spline";
import { motion } from "motion/react";
import GlitchText from "@/components/animations/GlitchText";
import FlickerText from "@/components/animations/FlickerText";
import TypewriterText from "@/components/animations/TypewriterText";
import WaveText from "@/components/animations/WaveText";
import Magnet from "@/components/animations/Magnet";
import FloatingParticles from "@/components/backgrounds/FloatingParticles";
import AnimatedGrid from "@/components/backgrounds/AnimatedGrid";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero.png";
import { Suspense } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const HeroSection: React.FC = () => {
  const { mode } = useTheme();
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const roles = [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Open Source Contributor",
    "Problem Solver",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Animated Grid Background */}
      <AnimatedGrid className="z-0 opacity-50" />

      {/* Floating Particles */}
      <FloatingParticles count={60} className="z-5" />

      {/* Spline 3D Background - Only in Dark Mode */}
      {mode === 'dark' ? (
        <>
          <div className="absolute inset-0 z-10">
            <Suspense fallback={
              <div className="w-full h-full bg-gradient-to-b from-background to-secondary/20" />
            }>
              <Spline
                scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
                className="w-full h-full"
              />
            </Suspense>
          </div>

          {/* Multiple Gradient Overlays for depth - Dark Mode */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background z-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30 z-15" />
        </>
      ) : (
        /* Light Mode Clean Background - Similar to reference */
        <>
          {/* Base white/light background */}
          <div className="absolute inset-0 bg-background z-10" />
          
          {/* Grid pattern background */}
          <div className="absolute inset-0 z-11" style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)/0.1) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)/0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
          
          {/* Subtle gradient glow spots */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-12" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-12" />
        </>
      )}

      {/* Animated Glow Orbs - Only in Dark Mode */}
      {mode === 'dark' && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full z-5"
            style={{ background: "var(--gradient-glow)", filter: "blur(60px)" }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full z-5"
            style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.2), transparent)", filter: "blur(40px)" }}
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="mb-8 lg:justify-start justify-center flex"
            >
              <motion.span
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass-effect text-sm font-mono text-primary"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    "0 0 20px hsl(var(--primary) / 0.2)",
                    "0 0 40px hsl(var(--primary) / 0.4)",
                    "0 0 20px hsl(var(--primary) / 0.2)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.span>
                Welcome to my portfolio
              </motion.span>
            </motion.div>

            {/* Name with Glitch Effect */}
            <div className="mb-6">
              <GlitchText
                text="Nagarajan"
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground"
                speed={0.3}
                enableShadows={true}
              />
            </div>

            {/* Role with Typewriter */}
            <div className="text-xl md:text-3xl lg:text-4xl font-display font-semibold mb-4">
              <TypewriterText
                words={roles}
                typeSpeed={80}
                deleteSpeed={40}
                pauseDuration={2000}
              />
            </div>

            {/* Subtitle with Flicker Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8"
            >
              <FlickerText
                text="< Building the Future />"
                className="text-base md:text-lg font-mono text-primary"
                flickerSpeed={0.15}
              />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="max-w-xl lg:mx-0 mx-auto mb-10"
            >
              <p className="text-base md:text-lg text-muted-foreground">
                Crafting beautiful, performant web experiences with modern technologies.
                Passionate about clean code, user experience, and pushing the boundaries of what's possible.
              </p>
            </motion.div>

            {/* CTA Buttons with Magnet Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap items-center lg:justify-start justify-center gap-4 md:gap-6 mb-8"
            >
              <Magnet magnetStrength={1.5} padding={80}>
                <motion.a
                  href="#projects"
                  className="relative px-8 md:px-10 py-4 md:py-5 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-base md:text-lg overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {/* Subtle glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">View My Work</span>
                </motion.a>
              </Magnet>

              <Magnet magnetStrength={1.5} padding={80}>
                <motion.a
                  href="#contact"
                  className="px-8 md:px-10 py-4 md:py-5 rounded-2xl glass-effect font-bold text-base md:text-lg hover:bg-secondary/50 transition-all border border-primary/30"
                  whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary))" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get in Touch
                </motion.a>
              </Magnet>
            </motion.div>

            {/* Social Links with Magnet */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex items-center lg:justify-start justify-center gap-6 md:gap-8"
            >
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
              ].map((social) => (
                <Magnet key={social.label} magnetStrength={1} padding={60}>
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 md:p-4 rounded-2xl glass-effect group relative overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    aria-label={social.label}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/20"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <social.icon className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
                  </motion.a>
                </Magnet>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow effect behind photo */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: "var(--gradient-glow)", filter: "blur(40px)" }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Photo Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <motion.div
                  className="absolute inset-0 rounded-full glass-effect overflow-hidden border-4 border-primary/30"
                  whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Replace this src with your actual photo path */}
                  <img
                    src={heroImage}
                    alt="Nagarajan"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                            <div class="text-center">
                              <div class="text-7xl md:text-8xl lg:text-9xl font-display font-bold gradient-text mb-4">JD</div>
                              <p class="text-sm text-muted-foreground">Add your photo at<br/>/public/profile-photo.jpg</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </motion.div>
                
                {/* Decorative rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/20"
                  style={{ padding: "1rem" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/10"
                  style={{ padding: "2rem" }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            boxShadow: [
              "0 0 20px hsl(var(--primary) / 0.3)",
              "0 0 40px hsl(var(--primary) / 0.6)",
              "0 0 20px hsl(var(--primary) / 0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-4 rounded-full glass-effect border border-primary/30"
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.button>

      {/* Decorative corners - More prominent in light mode */}
      <div className={`absolute top-20 left-10 w-20 h-20 border-l-2 border-t-2 z-20 ${mode === 'light' ? 'border-primary/60' : 'border-primary/30'}`} />
      <div className={`absolute top-20 right-10 w-20 h-20 border-r-2 border-t-2 z-20 ${mode === 'light' ? 'border-primary/60' : 'border-primary/30'}`} />
      <div className={`absolute bottom-20 left-10 w-20 h-20 border-l-2 border-b-2 z-20 ${mode === 'light' ? 'border-primary/60' : 'border-primary/30'}`} />
      <div className={`absolute bottom-20 right-10 w-20 h-20 border-r-2 border-b-2 z-20 ${mode === 'light' ? 'border-primary/60' : 'border-primary/30'}`} />
    </section>
  );
};

export default HeroSection;
