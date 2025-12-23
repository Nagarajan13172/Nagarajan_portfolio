import { motion } from "motion/react";

interface GradientTextProps {
  text: string;
  className?: string;
  animate?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({
  text,
  className = "",
  animate = true,
}) => {
  return (
    <motion.span
      className={`gradient-text ${animate ? 'gradient-animate' : ''} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.span>
  );
};

export default GradientText;
