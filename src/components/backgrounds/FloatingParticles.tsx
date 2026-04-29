import { useMemo } from "react";
import { motion } from "motion/react";
import { usePerformance } from "@/hooks/use-performance";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
}

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  count = 15,
  className = "",
}) => {
  const { particleScale, enableParticles } = usePerformance();

  const effectiveCount = Math.max(0, Math.round(count * particleScale));

  const particles = useMemo<Particle[]>(() => {
    if (effectiveCount === 0) return [];
    return Array.from({ length: effectiveCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      drift: Math.random() * 30 - 15,
    }));
  }, [effectiveCount]);

  if (!enableParticles || effectiveCount === 0) {
    return null;
  }

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `hsl(var(--primary) / 0.4)`,
            willChange: "transform, opacity",
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particle.drift, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
