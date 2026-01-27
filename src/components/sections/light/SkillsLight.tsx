import { motion, AnimatePresence } from "motion/react";
import { Star, Code, Database, Cloud, Palette, Filter, Sparkles } from "lucide-react";
import { useState } from "react";

// Skill data with star ratings instead of percentages
const skillsData = [
  // Frontend - 5 stars (Expert)
  { name: "React", category: "Frontend", stars: 5, years: "4+", color: "bg-blue-100 text-blue-700 border-blue-300", icon: "⚛️" },
  { name: "TypeScript", category: "Frontend", stars: 5, years: "3+", color: "bg-blue-100 text-blue-700 border-blue-300", icon: "📘" },
  { name: "Tailwind CSS", category: "Frontend", stars: 5, years: "3+", color: "bg-blue-100 text-blue-700 border-blue-300", icon: "🎨" },

  // Frontend - 4 stars (Advanced)
  { name: "Next.js", category: "Frontend", stars: 4, years: "2+", color: "bg-blue-100 text-blue-700 border-blue-300", icon: "▲" },
  { name: "Framer Motion", category: "Frontend", stars: 4, years: "2+", color: "bg-blue-100 text-blue-700 border-blue-300", icon: "🎬" },
  { name: "Vue.js", category: "Frontend", stars: 4, years: "2+", color: "bg-blue-100 text-blue-700 border-blue-300", icon: "💚" },

  // Backend - 5 stars
  { name: "Node.js", category: "Backend", stars: 5, years: "4+", color: "bg-green-100 text-green-700 border-green-300", icon: "🟢" },
  { name: "REST APIs", category: "Backend", stars: 5, years: "4+", color: "bg-green-100 text-green-700 border-green-300", icon: "🔌" },

  // Backend - 4 stars
  { name: "Express", category: "Backend", stars: 4, years: "3+", color: "bg-green-100 text-green-700 border-green-300", icon: "🚂" },
  { name: "PostgreSQL", category: "Backend", stars: 4, years: "3+", color: "bg-green-100 text-green-700 border-green-300", icon: "🐘" },
  { name: "MongoDB", category: "Backend", stars: 4, years: "2+", color: "bg-green-100 text-green-700 border-green-300", icon: "🍃" },
  { name: "GraphQL", category: "Backend", stars: 4, years: "2+", color: "bg-green-100 text-green-700 border-green-300", icon: "◈" },

  // Tools - 5 stars
  { name: "VS Code", category: "Tools", stars: 5, years: "5+", color: "bg-orange-100 text-orange-700 border-orange-300", icon: "💻" },
  { name: "Figma", category: "Tools", stars: 4, years: "3+", color: "bg-orange-100 text-orange-700 border-orange-300", icon: "🎨" },
  { name: "Postman", category: "Tools", stars: 4, years: "3+", color: "bg-orange-100 text-orange-700 border-orange-300", icon: "📮" },
  { name: "Linux", category: "Tools", stars: 4, years: "3+", color: "bg-orange-100 text-orange-700 border-orange-300", icon: "🐧" },
];

// Star Rating Component
const StarRating: React.FC<{ stars: number; size?: number }> = ({ stars, size = 16 }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.div
          key={star}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: star * 0.1, type: "spring" }}
        >
          <Star
            size={size}
            className={star <= stars ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Skill Badge Component with Flip Animation
const SkillBadge: React.FC<{ skill: typeof skillsData[0]; index: number }> = ({ skill, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Size based on stars (5 stars = largest, 3 stars = smallest)
  const sizeClasses = {
    5: "text-lg px-6 py-3",
    4: "text-base px-5 py-2.5",
    3: "text-sm px-4 py-2",
  }[skill.stars] || "text-base px-5 py-2.5";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1, y: -5, zIndex: 10 }}
      className="inline-block m-2"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of badge */}
        <motion.div
          className={`${skill.color} ${sizeClasses} rounded-full border-2 shadow-md font-semibold flex items-center gap-2 cursor-pointer`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-xl">{skill.icon}</span>
          <span>{skill.name}</span>
          <StarRating stars={skill.stars} size={12} />
        </motion.div>

        {/* Back of badge */}
        <motion.div
          className={`absolute inset-0 ${skill.color} ${sizeClasses} rounded-full border-2 shadow-md font-semibold flex flex-col items-center justify-center cursor-pointer`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <span className="text-xs opacity-75">Experience</span>
          <span className="text-lg font-bold">{skill.years} years</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Category Icon Component
const CategoryIcon: React.FC<{ category: string }> = ({ category }) => {
  const icons = {
    Frontend: <Code className="w-5 h-5" />,
    Backend: <Database className="w-5 h-5" />,
    DevOps: <Cloud className="w-5 h-5" />,
    Tools: <Palette className="w-5 h-5" />,
  };

  return icons[category as keyof typeof icons] || null;
};

const SkillsLight: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "Frontend", "Backend", "DevOps", "Tools"];

  const filteredSkills = selectedCategory === "All"
    ? skillsData
    : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <motion.div
          className="absolute top-10 left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-primary/20 shadow-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">My Expertise</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Hover over badges to see years of experience • Larger badges indicate higher proficiency
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-semibold border-2 transition-all flex items-center gap-2 ${selectedCategory === category
                  ? "bg-primary text-white border-primary shadow-lg scale-105"
                  : "bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category !== "All" && <CategoryIcon category={category} />}
              {category === "All" && <Filter className="w-4 h-4" />}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Tag Cloud */}
        <motion.div
          className="max-w-6xl mx-auto"
          layout
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center items-center"
            >
              {filteredSkills.map((skill, index) => (
                <SkillBadge key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 px-8 py-4 bg-white rounded-2xl border-2 border-gray-200 shadow-sm">
            <div className="flex items-center gap-2">
              <StarRating stars={5} size={14} />
              <span className="text-sm text-gray-600">Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <StarRating stars={4} size={14} />
              <span className="text-sm text-gray-600">Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <StarRating stars={3} size={14} />
              <span className="text-sm text-gray-600">Intermediate</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.p
            className="text-gray-500 text-sm italic"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✨ Continuously learning and expanding my skill set
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsLight;