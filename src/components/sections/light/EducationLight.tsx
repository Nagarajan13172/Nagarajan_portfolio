import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Trophy } from "lucide-react";

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
      "Developed various web applications projects for college ",
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
];

const EducationLight: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
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
            Education & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-xl border border-primary/10 overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all">
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${edu.color}`} />
                  
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      {/* Left: Main Info */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                            <GraduationCap className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>
                            <p className="text-lg font-semibold text-primary mb-2">{edu.institution}</p>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {edu.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {edu.period}
                              </div>
                              <div className="flex items-center gap-1">
                                <Award className="w-4 h-4" />
                                {edu.grade}
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {edu.description}
                        </p>

                        {/* Achievements */}
                        {edu.achievements && (
                          <div className="space-y-2">
                            <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                              <Trophy className="w-4 h-4 text-primary" />
                              Key Achievements:
                            </p>
                            <ul className="space-y-1 ml-6">
                              {edu.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationLight;
