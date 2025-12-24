import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
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
];

const ProjectsLight: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-secondary/30">
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
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-primary/10 hover:shadow-2xl hover:border-primary/30 transition-all"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/30 transition-all overflow-hidden"
                  >
                    {/* Ping effect */}
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
                    </span>
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsLight;