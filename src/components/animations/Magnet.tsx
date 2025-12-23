import { useRef, useState } from "react";
import { motion } from "motion/react";

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  magnetStrength?: number;
  disabled?: boolean;
  className?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 100,
  magnetStrength = 2,
  disabled = false,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    const maxDistance = Math.max(rect.width, rect.height) / 2 + padding;

    if (distance < maxDistance) {
      const strength = 1 - distance / maxDistance;
      setPosition({
        x: distanceX * strength / magnetStrength,
        y: distanceY * strength / magnetStrength,
      });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={position}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default Magnet;
