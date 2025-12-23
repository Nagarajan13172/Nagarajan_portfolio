import { useEffect, useRef } from "react";
import { motion } from "motion/react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  count = 50,
  className = "",
}) => {
  const particles = useRef<Particle[]>([]);

  if (particles.current.length === 0) {
    particles.current = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.current.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `hsl(var(--primary) / ${0.2 + Math.random() * 0.4})`,
            boxShadow: `0 0 ${particle.size * 2}px hsl(var(--primary) / 0.5)`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
