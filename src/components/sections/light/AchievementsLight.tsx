import { motion } from "motion/react";
import { Trophy, Award, Users, Calendar, MapPin, Target, Sparkles, ChevronRight, Flag, Shield } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import frndsImg from "@/assets/achivements/frnds.jpeg";
import shieldImg from "@/assets/achivements/shield.jpeg";
import weImg from "@/assets/achivements/we.jpeg";
import ctfImg from "@/assets/achivements/ctf1.jpeg";
import finalsImg from "@/assets/achivements/finals3.jpeg";
import usImg from "@/assets/achivements/us.jpeg";

const achievements = [
    {
    title: "Smart India Hackathon 2024 - Grand Finale Finalist",
    subtitle: "Hardware Edition | Team TECH IQ",
    date: "December 11-15, 2024",
    location: "Amal Jyothi College of Engineering, Kanjirappally",
    role: "Team Leader",
    description: "Led Team TECH IQ from Periyar University to the Grand Finale of SIH 2024. Developed an innovative app to help students with learning disabilities, solving real-world educational challenges through technology.",
    highlights: [
      "🏆 Finalist among thousands of teams nationwide",
      "🎖️ Certified by Ministry of Education & AICTE",
      "💡 Developed assistive learning app for students with disabilities",
      "👥 Led a team through intense 5-day national challenge",
      "⚙️ Hardware Edition - Real-world problem solving"
    ],
    tags: ["Hardware", "Education Tech", "Team Leadership", "Innovation"],
    images: [frndsImg, weImg, shieldImg],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Yukthi CTF Grand Finale 2025",
    subtitle: "🥉 3rd Place | ₹25,000 Cash Prize | Competed with Industry Experts",
    date: "December 19-20, 2025",
    location: "Grand Finale | Kyndleit & Selfmade Ninja Labs",
    role: "Elite Cybersecurity Team",
    description: "After dominating the prelims with 1st place among 361 teams, we advanced to the Grand Finale and secured an impressive 3rd place. The challenges were exceptionally tough as we competed not only with top student teams but also with industrial cybersecurity specialists and domain experts - making this achievement even more remarkable. Won ₹25,000 cash prize.",
    highlights: [
      "🥉 3rd Place in Grand Finale with ₹25,000 cash prize",
      "🏆 Qualified from prelims (1st place among 361 teams)",
      "💼 Competed against industry cybersecurity specialists",
      "🎯 Solved extremely tough professional-level challenges",
      "⚔️ Battled with domain experts from the industry",
      "🔐 Advanced cryptography and real-world scenarios",
      "🛡️ Demonstrated elite ethical hacking capabilities",
      "🚀 Proved skills against experienced professionals"
    ],
    tags: ["CTF Grand Finale", "3rd Place", "Industry Competition", "₹25K Prize", "Elite Level"],
    images: [finalsImg, usImg],
    color: "from-rose-500 to-pink-500"
  },
  {
    title: "Yukthi CTF Prelims Round 2025",
    subtitle: "1st Place Winner 🏆 | Capture The Flag Champion",
    date: "December 13-14, 2025",
    location: "Arena.Yukthi CTF Prelims",
    role: "Cybersecurity Expert",
    description: "Secured 1st place among 361 teams in the prestigious Yukthi CTF Prelims Round 2025. Demonstrated exceptional skills in ethical hacking, cryptography, and cybersecurity challenges, outperforming hundreds of talented competitors.",
    highlights: [
      "🥇 1st Place out of 361 competing teams",
      "🔐 Mastered complex cybersecurity challenges",
      "💻 Expert in cryptography and exploitation",
      "⚡ Speed and precision under pressure",
      "🧠 Advanced problem-solving in CTF scenarios",
      "🛡️ Ethical hacking and penetration testing"
    ],
    tags: ["CTF", "Cybersecurity", "Ethical Hacking", "Cryptography", "Winner"],
    images: [ctfImg],
    color: "from-purple-500 to-pink-500"
  },
];




const otherAchievements = [
  {
    icon: Shield,
    title: "Cybersecurity Excellence",
    description: "Recognized for outstanding skills in ethical hacking and security research",
    year: "2025",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Award,
    title: "Academic Excellence Award",
    description: "Recognized for outstanding academic performance",
    year: "2023",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description: "First place in regional coding competition",
    year: "2023",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Target,
    title: "Project Innovation Award",
    description: "Best innovative project at university tech fest",
    year: "2024",
    color: "from-orange-500 to-red-500"
  }
];

const AchievementsLight: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Milestones & Recognition
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Celebrating moments of innovation, leadership, and excellence
          </p>
        </motion.div>

        {/* Featured Achievements Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <Carousel 
            opts={{ 
              align: "start",
              loop: true,
            }}
            className="w-full min-h-[800px]"
          >
            <CarouselContent>
              {achievements.map((achievement, index) => (
                <CarouselItem key={index}>
                  <div className="bg-white rounded-3xl shadow-2xl border border-primary/10 overflow-hidden h-full">
                    {/* Gradient Header */}
                    <div className={`h-3 bg-gradient-to-r ${achievement.color}`} />
                    
                    <div className="p-8 md:p-12">
                      {/* Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary font-semibold mb-6"
                      >
                        <Trophy className="w-5 h-5" />
                        Featured Achievement
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                        {achievement.title}
                      </h3>
                      <p className="text-xl text-primary font-semibold mb-6">
                        {achievement.subtitle}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{achievement.date}</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{achievement.location}</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold text-primary">{achievement.role}</span>
                        </div>
                      </div>

                      {/* Images Grid */}
                      <div className={`grid ${achievement.images.length === 1 ? 'md:grid-cols-1 max-w-3xl mx-auto' : achievement.images.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-4 mb-8`}>
                        {achievement.images.map((img, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative rounded-xl overflow-hidden shadow-lg aspect-video cursor-pointer group"
                          >
                            <img 
                              src={img} 
                              alt={`${achievement.title} ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {achievement.description}
                      </p>

                      {/* Highlights */}
                      <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 mb-6">
                        <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5 text-primary" />
                          Key Highlights
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {achievement.highlights.map((highlight, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {achievement.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 bg-white border border-primary/20 rounded-full text-sm font-medium text-foreground hover:border-primary/50 hover:shadow-md transition-all"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-2 border-primary/50 hover:border-primary text-primary hover:bg-primary/20 -left-4 md:-left-12" />
            <CarouselNext className="border-2 border-primary/50 hover:border-primary text-primary hover:bg-primary/20 -right-4 md:-right-12" />
          </Carousel>

          {/* Slider Indicator */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-bold">◄</span> Swipe to explore more achievements <span className="text-primary font-bold">►</span>
            </p>
          </div>
        </motion.div>

        {/* Other Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Other <span className="text-primary">Recognitions</span>
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {otherAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg border border-primary/10 p-6 hover:shadow-2xl hover:border-primary/30 transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} bg-opacity-20 flex items-center justify-center mb-4`}>
                  <achievement.icon className="w-7 h-7 text-primary" />
                </div>
                
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-foreground flex-1">{achievement.title}</h4>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {achievement.year}
                  </span>
                </div>
                
                <p className="text-muted-foreground">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-lg">
            More achievements to come... The journey continues! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsLight;
