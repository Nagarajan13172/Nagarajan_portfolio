import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface AnimatedGridProps {
  className?: string;
}

const AnimatedGrid: React.FC<AnimatedGridProps> = ({ className = "" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle updates using requestAnimationFrame
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        animationFrameId = 0;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated grid lines */}
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <motion.path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="hsl(var(--primary) / 0.1)"
              strokeWidth="1"
              animate={{
                stroke: [
                  "hsl(var(--primary) / 0.05)",
                  "hsl(var(--primary) / 0.15)",
                  "hsl(var(--primary) / 0.05)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </pattern>
          <radialGradient id="grid-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.2)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Mouse glow effect */}
        <motion.circle
          cx={mousePosition.x}
          cy={mousePosition.y}
          r="200"
          fill="url(#grid-glow)"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>

      {/* Corner accents */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40"
        style={{
          background: "linear-gradient(135deg, hsl(var(--primary) / 0.1), transparent)",
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40"
        style={{
          background: "linear-gradient(-45deg, hsl(var(--primary) / 0.1), transparent)",
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      />
    </div>
  );
};

export default AnimatedGrid;
