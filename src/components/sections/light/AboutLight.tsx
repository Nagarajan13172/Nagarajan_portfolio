import { motion } from "motion/react";
import { Code2, Rocket, Heart, Zap, Award, Target } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "1+", icon: Code2 },
  { label: "Projects Completed", value: "50+", icon: Rocket },
  { label: "Happy Clients", value: "30+", icon: Heart },
  { label: "Technologies", value: "20+", icon: Zap },
];

const skills = [
  { name: "Frontend Development", level: 95 },
  { name: "Backend Development", level: 90 },
  { name: "UI/UX Design", level: 85 },
  { name: "DevOps & Cloud", level: 80 },
];

const AboutLight: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer creating impactful digital experiences
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative p-6 bg-white rounded-2xl shadow-lg border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                Professional Developer
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Crafting Digital Experiences with{" "}
                <span className="text-primary">Passion</span>
              </h3>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a full-stack developer specializing in building exceptional digital experiences. 
                Currently, I'm focused on creating accessible, human-centered products using modern 
                web technologies.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                With a strong foundation in both frontend and backend development, I bring ideas to 
                life through clean, efficient code and thoughtful design. I'm always eager to learn 
                new technologies and tackle challenging problems.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white rounded-lg border border-primary/20 text-sm font-medium text-foreground hover:border-primary/50 hover:shadow-md transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Skills Progress */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl border border-primary/10 p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">My Expertise</h3>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-center text-muted-foreground text-sm">
                Constantly learning and improving every day
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutLight;
