import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  ease?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 0,
  duration = 0.8,
  staggerDelay = 0.03,
  ease = "power3.out",
  tag = "p",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useGSAP(() => {
    if (!containerRef.current || hasAnimated.current) return;

    const chars = containerRef.current.querySelectorAll('.split-char');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            gsap.fromTo(
              chars,
              {
                opacity: 0,
                y: 50,
                rotateX: -90,
              },
              {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration,
                stagger: staggerDelay,
                delay: delay / 1000,
                ease,
              }
            );
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [text, delay, duration, staggerDelay, ease]);

  const Tag = tag;

  return (
    <div ref={containerRef} className={className} style={{ perspective: "1000px" }}>
      <Tag className="inline-block">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="split-char inline-block opacity-0"
            style={{ 
              transformStyle: "preserve-3d",
              display: char === " " ? "inline" : "inline-block",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </Tag>
    </div>
  );
};

export default SplitText;
