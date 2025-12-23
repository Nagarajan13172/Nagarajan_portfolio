import { useRef, useEffect, useState } from "react";
import { motion, useInView, type Easing } from "motion/react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  stepDuration?: number;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  className = "",
  delay = 100,
  animateBy = "words",
  direction = "top",
  stepDuration = 0.35,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  const easing: Easing = "easeOut";

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      {elements.map((element, i) => (
        <motion.span
          key={i}
          initial={{
            filter: "blur(10px)",
            opacity: 0,
            y: direction === "top" ? -20 : 20,
          }}
          animate={hasAnimated ? {
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
          } : {
            filter: "blur(10px)",
            opacity: 0,
            y: direction === "top" ? -20 : 20,
          }}
          transition={{
            delay: i * (delay / 1000),
            duration: stepDuration,
            ease: easing,
          }}
          className="inline-block"
          style={{ marginRight: animateBy === "words" ? "0.25em" : "0" }}
        >
          {element}
        </motion.span>
      ))}
    </div>
  );
};

export default BlurText;
