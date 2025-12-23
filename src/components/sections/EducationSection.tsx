import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Trophy, Zap } from "lucide-react";
import FloatingParticles from "@/components/backgrounds/FloatingParticles";

const educationData = [
     {
    degree: "Master of  Computer Application",
    institution: "Periyar University",
    location: "Salem, Tamil Nadu",
    period: "2024 - 2026",
    grade: "CGPA: 8.5/10",
    description: "Focused on software engineering, algorithms, data structures, and web development. Active member of the coding club.",
    achievements: [
      "Smart India Hackathon 2024 - Finalist",
      "Developed various web applications projects for college",
      "Won Inter-college Symposiums",
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    degree: "Bachelor of  Computer Science",
    institution: "Mahendra Arts and Science College",
    location: "Salem, Tamil Nadu",
    period: "2020 - 2024",
    grade: "CGPA: 7.9/10",
    description: "Focused on software engineering, algorithms, data structures, and web development. Active member of the coding club.",
    achievements: [
      "Won Inter-college Symposiums",
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    degree: "Higher Secondary Education",
    institution: "Sri Vidya Mandir Higher Secondary School",
    location: "Salem, Tamil Nadu",
    period: "2016 - 2018",
    grade: "Percentage: 80%",
    description: "Specialized in Mathematics and Computer Science.",
    achievements: [
      "School Topper in Computer Science",
    ],
    color: "from-purple-500 to-pink-500"
  }
];

const certifications = [
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
  { name: "React Advanced Patterns", issuer: "Frontend Masters", year: "2023" },
  { name: "Full Stack Development", issuer: "Udemy", year: "2022" },
  { name: "Docker & Kubernetes", issuer: "Linux Foundation", year: "2023" },
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <FloatingParticles count={20} className="opacity-20" />
      
      <motion.div 
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: "var(--gradient-glow)" }}
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl glass-effect flex items-center justify-center border-2 border-primary/30">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Education</span> & Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous quest for knowledge
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-6xl mx-auto mb-24">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Connecting Line */}
              {index < educationData.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent md:left-1/2" />
              )}

              <div className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full glass-effect border-4 border-primary items-center justify-center z-10">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-6 rounded-full bg-primary"
                  />
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`flex-1 glass-effect rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}
                  style={{
                    boxShadow: `0 0 30px ${edu.color}20`,
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div 
                      className="w-14 h-14 rounded-xl glass-effect flex items-center justify-center border-2"
                      style={{ borderColor: edu.color }}
                    >
                      <GraduationCap className="w-7 h-7" style={{ color: edu.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold mb-2 text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-semibold mb-3" style={{ color: edu.color }}>
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Info Tags */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-effect text-sm border border-primary/20">
                      <Calendar className="w-4 h-4 text-primary" />
                      {edu.period}
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-effect text-sm border border-primary/20">
                      <MapPin className="w-4 h-4 text-primary" />
                      {edu.location}
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-effect text-sm border border-primary/20">
                      <Award className="w-4 h-4 text-primary" />
                      {edu.grade}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Trophy className="w-5 h-5" />
                      <span>Key Achievements</span>
                    </div>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * idx }}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <Zap className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
