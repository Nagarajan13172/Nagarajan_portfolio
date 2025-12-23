import { motion } from "motion/react";

interface FlickerTextProps {
  text: string;
  className?: string;
  flickerSpeed?: number;
  glowColor?: string;
}

const FlickerText: React.FC<FlickerTextProps> = ({
  text,
  className = "",
  flickerSpeed = 0.1,
  glowColor = "hsl(var(--primary))",
}) => {
  return (
    <span className={`relative inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          style={{
            textShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 40px ${glowColor}`,
          }}
          animate={{
            opacity: [1, 0.4, 1, 0.7, 1, 0.3, 1],
            textShadow: [
              `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 40px ${glowColor}`,
              `0 0 5px ${glowColor}, 0 0 10px ${glowColor}, 0 0 20px ${glowColor}`,
              `0 0 15px ${glowColor}, 0 0 30px ${glowColor}, 0 0 60px ${glowColor}`,
              `0 0 8px ${glowColor}, 0 0 16px ${glowColor}, 0 0 32px ${glowColor}`,
              `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 40px ${glowColor}`,
            ],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: index * flickerSpeed,
            ease: "easeInOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default FlickerText;
