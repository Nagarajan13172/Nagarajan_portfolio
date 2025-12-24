import { motion } from "motion/react";
import FadeInSection from "@/components/animations/FadeInSection";
import BlurText from "@/components/animations/BlurText";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import vpnImage from "@/assets/project/vpn.png";
import facultyPortalImage from "@/assets/project/faculty.png";
import registrationPortalImage from "@/assets/project/graduation.png";
import electionImage from "@/assets/project/election.png";



const projects = [
  {
    id: 1,
    title: "Trinity Secure VPN Network",
    description: "A secure VPN platform enabling encrypted tunnels for remote devices, private network access, and protected communication using modern tunneling protocols with centralized authentication.",
    image: vpnImage,
    tags: ["WireGuard", "Node.js", "Linux", "Networking", "Security"],
    liveUrl: "https://vpn.youngstorage.in/auth/login",
    githubUrl: "https://github.com/nagarajan13172",
    featured: true,
  },
  {
    id: 2,
    title: "University Faculty Portal",
    description: "A role-based faculty management portal designed for university staff, providing centralized access to personal profiles, leave management, and payslip records through a secure and responsive web interface.",
    image: facultyPortalImage,
    tags: ["React", "Node.js", "MySQL", "REST API"],
    github: "https://github.com/nagarajan13172",
    live: "https://faculty.periyaruniversity.ac.in",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 3,
    title: "Graduate Registration & Payment Portal",
    description: "A secure graduate registration system built for university admissions, featuring high-security BillDesk payment integration, real-time user registration tracking, and an admin dashboard that successfully handled 3,000+ student registrations.",
    image: registrationPortalImage,
    tags: ["React", "Node.js", "MySQL", "BillDesk", "Security"],
    github: "https://github.com/Nagarajan13172/Graduation-Frontend-Admin",
    live: "https://graduate.periyaruniversity.ac.in/admin",
    color: "from-rose-500 to-orange-500",
    featured: false,
  },
    {
    id: 4,
    title: "University Online Voting System",
    description: "A secure and transparent online voting system developed for a university president election, enabling authenticated student voting, real-time vote counting, and an admin-controlled results dashboard built for accuracy and integrity.",
    image: electionImage,
    tags: ["Next.js", "React", "Node.js", "MySQL", "Authentication", "Security"],
    github: "https://github.com/Nagarajan13172/PU_Election",
    live: "https://pu-election-vjxs.vercel.app/vote",
    color: "from-sky-500 to-indigo-500"
  },
  {
    id: 5,
    title: "Crypto Tracker",
    description: "Real-time cryptocurrency tracking with portfolio management and price alerts.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "WebSocket", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 6,
    title: "Learning Platform",
    description: "Online education platform with video courses, quizzes, and progress tracking.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80",
    tags: ["Next.js", "Prisma", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

const ProjectCard: React.FC<{
  project: typeof projects[0];
  index: number;
  featured?: boolean;
}> = ({ project, index, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FadeInSection delay={index * 0.1}>
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`group relative rounded-3xl overflow-hidden card-gradient border border-border/50 ${featured ? "md:col-span-2 md:row-span-2" : ""
          }`}
      >
        {/* Image */}
        <div className={`relative overflow-hidden ${featured ? "aspect-[16/10]" : "aspect-video"}`}>
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

          {/* Overlay Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 flex items-center justify-center gap-4 bg-background/60 backdrop-blur-sm"
          >
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Ping effect */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
              </span>
              <ExternalLink className="w-5 h-5" />
              <span>View Live</span>
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass-effect border border-primary/30 font-semibold hover:border-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className={`font-bold font-display ${featured ? "text-2xl" : "text-xl"}`}>
              {project.title}
            </h3>
            <motion.div
              animate={{ x: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
              className="text-primary"
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
          </div>

          <p className={`text-muted-foreground mb-4 ${featured ? "text-base" : "text-sm"}`}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </FadeInSection>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <FadeInSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-mono text-primary mb-6">
            Featured Work
          </span>
          <BlurText
            text="Projects I've Built"
            className="text-4xl md:text-5xl font-display font-bold justify-center"
            delay={50}
          />
        </FadeInSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Featured Projects */}
          {projects.filter(p => p.featured).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} featured />
          ))}

          {/* Other Projects */}
          {projects.filter(p => !p.featured).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
