import { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";

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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const dotsRef = useRef<{ x: number; y: number; originalX: number; originalY: number }[]>([]);
  const animationRef = useRef<number>();

  const initDots = useCallback(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const dots: { x: number; y: number; originalX: number; originalY: number }[] = [];
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

    dotsRef.current.forEach((dot) => {
      const dx = mouseRef.current.x - dot.x;
      const dy = mouseRef.current.y - dot.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < proximity) {
        const force = (proximity - distance) / proximity;
        const angle = Math.atan2(dy, dx);
        const moveX = Math.cos(angle) * force * 20;
        const moveY = Math.sin(angle) * force * 20;

        gsap.to(dot, {
          x: dot.originalX - moveX,
          y: dot.originalY - moveY,
          duration: 0.3,
          ease: "power2.out",
        });

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize + force * 2, 0, Math.PI * 2);
        ctx.fillStyle = activeColor;
        ctx.globalAlpha = 0.3 + force * 0.7;
        ctx.fill();
      } else {
        gsap.to(dot, {
          x: dot.originalX,
          y: dot.originalY,
          duration: 0.5,
          ease: "power2.out",
        });

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = baseColor;
        ctx.globalAlpha = 1;
        ctx.fill();
      }
    });

    animationRef.current = requestAnimationFrame(draw);
  }, [dotSize, baseColor, activeColor, proximity]);

  useEffect(() => {
    initDots();
    draw();

    const handleResize = () => {
      initDots();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initDots, draw]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
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

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default DotGrid;
