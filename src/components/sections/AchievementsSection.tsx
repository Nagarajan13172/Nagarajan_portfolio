import { motion } from "motion/react";
import { Trophy, Award, Users, Calendar, MapPin, Target, Sparkles, ChevronRight, Zap, Flag, Shield } from "lucide-react";
import FloatingParticles from "@/components/backgrounds/FloatingParticles";
import GlitchText from "@/components/animations/GlitchText";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import frndsImg from "@/assets/achivements/frnds.jpeg";
import shieldImg from "@/assets/achivements/shield.jpeg";
import weImg from "@/assets/achivements/we.jpeg";
import ctfImg from "@/assets/achivements/ctf1.jpeg";
import finalsImg from "@/assets/achivements/finals3.jpeg";
import usImg from "@/assets/achivements/us.jpeg";

const achievements = [
  {
    title: "Smart India Hackathon 2024",
    subtitle: "Grand Finale Finalist | Team TECH IQ",
    date: "December 11-15, 2024",
    location: "Amal Jyothi College of Engineering, Kanjirappally",
    role: "Team Leader",
    description: "Led Team TECH IQ from Periyar University to the Grand Finale of SIH 2024. Developed an innovative app to help students with learning disabilities, solving real-world educational challenges through technology.",
    highlights: [
      "🏆 Finalist among thousands of teams nationwide",
      "🎖️ Certified by Ministry of Education & AICTE",
      "💡 Developed assistive learning app for students with disabilities",
      "👥 Led a team through intense 5-day national challenge",
      "⚙️ Hardware Edition - Real-world problem solving",
      "🔥 Brainstorming to building with relentless teamwork"
    ],
    tags: ["Hardware", "Education Tech", "Team Leadership", "Innovation", "Problem Solving"],
    images: [frndsImg, weImg, shieldImg],
    color: "hsl(185 100% 50%)"
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
    color: "hsl(340 100% 60%)"
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
    color: "hsl(280 100% 60%)"
  },
];




const otherAchievements = [
  {
    icon: Shield,
    title: "Cybersecurity Excellence",
    description: "Recognized for outstanding skills in ethical hacking and security research",
    year: "2025",
    color: "hsl(280 100% 60%)"
  },
  {
    icon: Award,
    title: "Academic Excellence Award",
    description: "Recognized for outstanding academic performance and consistent high grades",
    year: "2023",
    color: "hsl(270 100% 65%)"
  },
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description: "First place in regional coding competition with innovative solution",
    year: "2023",
    color: "hsl(150 100% 45%)"
  },
  {
    icon: Target,
    title: "Project Innovation Award",
    description: "Best innovative project at university tech fest",
    year: "2024",
    color: "hsl(25 100% 55%)"
  }
];

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <FloatingParticles count={30} className="opacity-20" />
      
      <motion.div 
        className="absolute top-0 left-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full opacity-20"
        style={{ background: "var(--gradient-glow)" }}
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
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
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl glass-effect flex items-center justify-center border-2 border-primary/30">
              <Trophy className="w-10 h-10 text-primary" />
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <GlitchText text="Achievements" className="gradient-text" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones in innovation, leadership, and technical excellence
          </p>
        </motion.div>

        {/* Featured Achievements Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mb-24"
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
                  <div className="relative glass-effect rounded-3xl p-1 border border-primary/30 overflow-hidden h-full">
                    {/* Animated Border Glow */}
                    <motion.div
                      className="absolute inset-0 opacity-50"
                      style={{
                        background: `linear-gradient(90deg, ${achievement.color}, transparent, ${achievement.color})`,
                        filter: "blur(20px)",
                      }}
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="relative glass-effect rounded-3xl p-8 md:p-12">
                      {/* Badge */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-effect border-2 border-primary/50 mb-6"
                      >
                        <Sparkles className="w-5 h-5 text-primary" />
                        <span className="font-display font-bold text-primary">Featured Achievement</span>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-4xl md:text-5xl font-display font-bold mb-3">
                        <span className="gradient-text">{achievement.title}</span>
                      </h3>
                      <p className="text-2xl font-semibold mb-6" style={{ color: achievement.color }}>
                        {achievement.subtitle}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-lg border border-primary/20">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-sm font-mono">{achievement.date}</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-lg border border-primary/20">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-sm font-mono">{achievement.location}</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-lg border-2 border-primary/50">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm font-bold text-primary">{achievement.role}</span>
                        </div>
                      </div>

                      {/* Images Grid */}
                      <div className={`grid ${achievement.images.length === 1 ? 'md:grid-cols-1 max-w-3xl mx-auto' : achievement.images.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6 mb-8`}>
                        {achievement.images.map((img, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, type: "spring" }}
                            whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
                            className="relative rounded-2xl overflow-hidden aspect-video cursor-pointer group"
                            style={{ transformStyle: "preserve-3d" }}
                          >
                            {/* White background behind image for better visibility */}
                            <div className="absolute inset-0 bg-white" />
                            <div className="absolute inset-0 border-2 border-primary/30 group-hover:border-primary transition-colors rounded-2xl" style={{ boxShadow: `0 0 30px ${achievement.color}40` }} />
                            <img 
                              src={img} 
                              alt={`${achievement.title} ${idx + 1}`}
                              className="relative w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {achievement.description}
                      </p>

                      {/* Highlights */}
                      <div className="glass-effect rounded-2xl p-6 mb-6 border border-primary/20">
                        <div className="flex items-center gap-3 mb-6">
                          <Target className="w-6 h-6 text-primary" />
                          <h4 className="text-xl font-display font-bold text-primary">Key Highlights</h4>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {achievement.highlights.map((highlight, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              whileHover={{ x: 10, scale: 1.02 }}
                              className="flex items-start gap-3 glass-effect p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-all"
                            >
                              <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-3">
                        {achievement.tags.map((tag, idx) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-4 py-2 glass-effect border border-primary/30 rounded-full text-sm font-mono text-primary"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="glass-effect border-2 border-primary/50 hover:border-primary text-primary hover:bg-primary/20 -left-4 md:-left-12" />
            <CarouselNext className="glass-effect border-2 border-primary/50 hover:border-primary text-primary hover:bg-primary/20 -right-4 md:-right-12" />
          </Carousel>

          {/* Slider Indicator */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground font-mono">
              <span className="text-primary">◄</span> Swipe to explore more achievements <span className="text-primary">►</span>
            </p>
          </div>
        </motion.div>

        {/* Other Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold">
              <span className="text-muted-foreground">Other </span>
              <span className="gradient-text">Recognitions</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {otherAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -12, scale: 1.05 }}
                className="glass-effect rounded-2xl p-6 border border-primary/20 hover:border-primary/50 transition-all"
                style={{ boxShadow: `0 0 30px ${achievement.color}20` }}
              >
                <div 
                  className="w-16 h-16 rounded-xl glass-effect flex items-center justify-center mb-4 border-2"
                  style={{ borderColor: achievement.color }}
                >
                  <achievement.icon className="w-8 h-8" style={{ color: achievement.color }} />
                </div>
                
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-display font-bold text-foreground flex-1">
                    {achievement.title}
                  </h4>
                  <span 
                    className="text-xs font-mono font-bold px-3 py-1 rounded-full glass-effect border-2"
                    style={{ borderColor: achievement.color, color: achievement.color }}
                  >
                    {achievement.year}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="inline-block glass-effect px-8 py-4 rounded-2xl border border-primary/30">
            <p className="text-xl font-display font-semibold gradient-text">
              The journey continues... More achievements to come! 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
