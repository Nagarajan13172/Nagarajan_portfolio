import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

interface GlitchTextProps {
  text: string;
  className?: string;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
  glitchColors?: [string, string];
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = "",
  speed = 0.5,
  enableShadows = true,
  enableOnHover = false,
  glitchColors = ["hsl(var(--primary))", "hsl(340 100% 60%)"],
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [glitchKey, setGlitchKey] = useState(0);

  useEffect(() => {
    if (!enableOnHover) {
      const interval = setInterval(() => {
        setGlitchKey((prev) => prev + 1);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [enableOnHover]);

  const shouldAnimate = enableOnHover ? isHovered : true;

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main text */}
      <span className="relative z-10">{text}</span>
      
      {/* Glitch layer 1 */}
      <motion.span
        key={`glitch1-${glitchKey}`}
        className="absolute inset-0 z-0"
        style={{
          color: glitchColors[0],
          textShadow: enableShadows ? `2px 0 ${glitchColors[0]}` : "none",
        }}
        animate={shouldAnimate ? {
          x: [-2, 2, -2, 0],
          opacity: [0, 1, 0, 0],
        } : {}}
        transition={{
          duration: speed,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          times: [0, 0.25, 0.5, 1],
        }}
      >
        {text}
      </motion.span>

      {/* Glitch layer 2 */}
      <motion.span
        key={`glitch2-${glitchKey}`}
        className="absolute inset-0 z-0"
        style={{
          color: glitchColors[1],
          textShadow: enableShadows ? `-2px 0 ${glitchColors[1]}` : "none",
        }}
        animate={shouldAnimate ? {
          x: [2, -2, 2, 0],
          opacity: [0, 1, 0, 0],
        } : {}}
        transition={{
          duration: speed,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          times: [0, 0.25, 0.5, 1],
          delay: speed / 4,
        }}
      >
        {text}
      </motion.span>

      {/* Scanline effect */}
      {shouldAnimate && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              hsl(var(--foreground) / 0.03) 2px,
              hsl(var(--foreground) / 0.03) 4px
            )`,
          }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 0.1, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
};

export default GlitchText;
