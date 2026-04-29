import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { usePerformance } from "@/hooks/use-performance";

interface AnimatedGridProps {
  className?: string;
}

const AnimatedGrid: React.FC<AnimatedGridProps> = ({ className = "" }) => {
  const { enableMouseTracking, enableHeavyEffects, isLowEnd } = usePerformance();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enableMouseTracking) return;

    let animationFrameId = 0;
    let pending = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (pending) return;
      pending = true;
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        pending = false;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [enableMouseTracking]);

  if (isLowEnd) {
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    );
  }

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="hsl(var(--primary) / 0.1)"
              strokeWidth="1"
            />
          </pattern>
          {enableMouseTracking && (
            <radialGradient id="grid-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--primary) / 0.2)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          )}
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {enableMouseTracking && (
          <circle
            cx={mousePosition.x}
            cy={mousePosition.y}
            r="200"
            fill="url(#grid-glow)"
            opacity={0.5}
          />
        )}
      </svg>

      {enableHeavyEffects && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-40 h-40"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--primary) / 0.1), transparent)",
            }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-40 h-40"
            style={{
              background:
                "linear-gradient(-45deg, hsl(var(--primary) / 0.1), transparent)",
            }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
        </>
      )}
    </div>
  );
};

export default AnimatedGrid;
