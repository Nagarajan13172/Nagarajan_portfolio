import { motion } from "motion/react";

interface WaveTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  replay?: boolean;
}

const WaveText: React.FC<WaveTextProps> = ({
  text,
  className = "",
  delay = 0.05,
  duration = 0.5,
  replay = true,
}) => {
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration,
            delay: index * delay,
            repeat: replay ? Infinity : 0,
            repeatDelay: text.length * delay + 1,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default WaveText;
