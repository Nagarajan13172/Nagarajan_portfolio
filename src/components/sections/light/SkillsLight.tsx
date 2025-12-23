import { motion } from "motion/react";
import { Code, Palette, Database, Cloud, Terminal, Zap, Layout, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    color: "from-blue-500/20 to-cyan-500/20",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-green-500/20 to-emerald-500/20",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"]
  },
  {
    title: "DevOps",
    icon: Cloud,
    color: "from-purple-500/20 to-pink-500/20",
    skills: ["Docker", "AWS", "CI/CD", "Kubernetes", "Terraform"]
  },
  {
    title: "Tools",
    icon: Terminal,
    color: "from-orange-500/20 to-red-500/20",
    skills: ["Git", "VS Code", "Figma", "Postman", "Linux"]
  }
];

const SkillsLight: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg border border-primary/10 p-6 hover:shadow-2xl hover:border-primary/30 transition-all"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Zap className="w-3 h-3 text-primary" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-primary font-medium">
            <Zap className="w-5 h-5" />
            Always learning and exploring new technologies
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsLight;