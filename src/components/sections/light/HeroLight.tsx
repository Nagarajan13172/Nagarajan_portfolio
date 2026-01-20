import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero.png";
import { useEffect, useRef } from "react";

const HeroLight: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  // Parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const x = (e.clientX - centerX) / rect.width;
        const y = (e.clientY - centerY) / rect.height;

        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, hsl(var(--primary)/0.08) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--primary)/0.08) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">

          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for work
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-foreground">Hi, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Nagarajan
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6"
            >
              Full Stack Developer
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              I craft beautiful, performant web experiences with modern technologies.
              Passionate about clean code, user experience, and innovative solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all"
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all"
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:snagarajan0209@gmail.com", label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-xl bg-secondary hover:bg-primary/10 hover:text-primary transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-shrink-0 relative"
          >
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border-2 border-primary/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border-2 border-primary/10 rounded-full"
            />

            {/* Image container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-primary/20">
              <motion.img
                ref={imageRef}
                src={heroImage}
                alt="Nagarajan"
                className="w-full h-full object-cover"
                style={{ x, y }}
                animate={{
                  rotate: [0, 0.5, -0.5, 0.5, 0],
                  scale: [1, 1.02, 0.98, 1.02, 1]
                }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                        <div class="text-center">
                          <div class="text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">N</div>
                        </div>
                      </div>
                    `;
                  }
                }}
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:block absolute -top-4 -left-4 px-4 py-2 bg-white rounded-lg shadow-lg border border-primary/20"
            >
              <p className="text-sm font-semibold text-primary">1+ Years</p>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="hidden sm:block absolute -bottom-4 -right-4 px-4 py-2 bg-white rounded-lg shadow-lg border border-primary/20"
            >
              <p className="text-sm font-semibold text-primary">50+ Projects</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm">Scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-current rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroLight;
