import { useRef, useEffect, useCallback, useState } from "react";
import { gsap } from "gsap";
import { usePerformance } from "@/hooks/use-performance";

interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  className?: string;
}

const DotGrid: React.FC<DotGridProps> = ({
  dotSize = 3,
  gap = 30,
  baseColor = "hsl(var(--muted-foreground) / 0.2)",
  activeColor = "hsl(var(--primary))",
  proximity = 100,
  className = "",
}) => {
  const { isLowEnd, enableMouseTracking } = usePerformance();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const dotsRef = useRef<
    { x: number; y: number; originalX: number; originalY: number }[]
  >([]);
  const animationRef = useRef<number>();
  const [inView, setInView] = useState(true);

  const initDots = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const dots: {
      x: number;
      y: number;
      originalX: number;
      originalY: number;
    }[] = [];
    const cols = Math.ceil(canvas.width / gap);
    const rows = Math.ceil(canvas.height / gap);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * gap + gap / 2;
        const y = j * gap + gap / 2;
        dots.push({ x, y, originalX: x, originalY: y });
      }
    }

    dotsRef.current = dots;
  }, [gap]);

  const draw = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const trackingEnabled = enableMouseTracking;

    dotsRef.current.forEach((dot) => {
      let force = 0;

      if (trackingEnabled) {
        const dx = mouseRef.current.x - dot.x;
        const dy = mouseRef.current.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < proximity) {
          force = (proximity - distance) / proximity;
          const angle = Math.atan2(dy, dx);
          const moveX = Math.cos(angle) * force * 20;
          const moveY = Math.sin(angle) * force * 20;

          gsap.to(dot, {
            x: dot.originalX - moveX,
            y: dot.originalY - moveY,
            duration: 0.3,
            ease: "power2.out",
            overwrite: true,
          });

          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dotSize + force * 2, 0, Math.PI * 2);
          ctx.fillStyle = activeColor;
          ctx.globalAlpha = 0.3 + force * 0.7;
          ctx.fill();
          return;
        }

        if (dot.x !== dot.originalX || dot.y !== dot.originalY) {
          gsap.to(dot, {
            x: dot.originalX,
            y: dot.originalY,
            duration: 0.5,
            ease: "power2.out",
            overwrite: true,
          });
        }
      }

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
      ctx.fillStyle = baseColor;
      ctx.globalAlpha = 1;
      ctx.fill();
    });

    animationRef.current = requestAnimationFrame(draw);
  }, [dotSize, baseColor, activeColor, proximity, enableMouseTracking]);

  useEffect(() => {
    if (isLowEnd || !containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isLowEnd]);

  useEffect(() => {
    if (isLowEnd || !inView) return;
    initDots();
    draw();

    const handleResize = () => initDots();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [initDots, draw, isLowEnd, inView]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!enableMouseTracking) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000 };
  };

  if (isLowEnd) {
    return (
      <div
        ref={containerRef}
        className={`absolute inset-0 ${className}`}
        style={{
          backgroundImage: `radial-gradient(${baseColor} ${dotSize / 2}px, transparent ${dotSize / 2}px)`,
          backgroundSize: `${gap}px ${gap}px`,
        }}
      />
    );
  }

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default DotGrid;
