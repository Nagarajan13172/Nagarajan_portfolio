import { useEffect, useRef, useState } from "react";
import { usePerformance } from "@/hooks/use-performance";

interface GravitySkillsProps {
  skills: string[];
  className?: string;
}

const SKILL_COLORS = [
  "hsl(185, 100%, 50%)",
  "hsl(270, 100%, 65%)",
  "hsl(25, 100%, 55%)",
  "hsl(150, 100%, 45%)",
  "hsl(340, 100%, 60%)",
];

const StaticSkillChips: React.FC<GravitySkillsProps> = ({
  skills,
  className = "",
}) => (
  <div
    className={`relative flex flex-wrap items-center justify-center gap-3 p-6 ${className}`}
  >
    {skills.map((skill, i) => (
      <span
        key={skill}
        className="px-4 py-2 rounded-full text-sm md:text-base font-semibold text-[#0a0a0f]"
        style={{ backgroundColor: SKILL_COLORS[i % SKILL_COLORS.length] }}
      >
        {skill}
      </span>
    ))}
  </div>
);

const GravitySkills: React.FC<GravitySkillsProps> = ({
  skills,
  className = "",
}) => {
  const { enablePhysics } = usePerformance();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!enablePhysics || !containerRef.current) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [enablePhysics]);

  useEffect(() => {
    if (!enablePhysics || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [enablePhysics]);

  useEffect(() => {
    if (
      !enablePhysics ||
      !canvasRef.current ||
      !containerRef.current ||
      dimensions.width === 0 ||
      !inView
    ) {
      return;
    }

    let cleanup = () => {};
    let cancelled = false;

    import("matter-js").then((MatterModule) => {
      if (cancelled || !canvasRef.current || !containerRef.current) return;
      const Matter = MatterModule.default ?? MatterModule;
      const {
        Engine,
        Render,
        World,
        Bodies,
        Mouse,
        MouseConstraint,
        Runner,
        Events,
      } = Matter;

      const engine = Engine.create();
      engine.world.gravity.y = 0.5;

      const render = Render.create({
        element: containerRef.current,
        canvas: canvasRef.current,
        engine,
        options: {
          width: dimensions.width,
          height: dimensions.height,
          wireframes: false,
          background: "transparent",
          pixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        },
      });

      const wallThickness = 50;
      const walls = [
        Bodies.rectangle(
          dimensions.width / 2,
          dimensions.height + wallThickness / 2,
          dimensions.width,
          wallThickness,
          { isStatic: true, render: { visible: false } }
        ),
        Bodies.rectangle(
          -wallThickness / 2,
          dimensions.height / 2,
          wallThickness,
          dimensions.height,
          { isStatic: true, render: { visible: false } }
        ),
        Bodies.rectangle(
          dimensions.width + wallThickness / 2,
          dimensions.height / 2,
          wallThickness,
          dimensions.height,
          { isStatic: true, render: { visible: false } }
        ),
      ];

      const isMobile = dimensions.width < 768;
      const fontSize = isMobile ? 12 : 14;
      const charWidth = isMobile ? 8 : 12;
      const padding = isMobile ? 24 : 40;
      const height = isMobile ? 32 : 40;

      const skillBodies = skills.map((skill, index) => {
        const width = skill.length * charWidth + padding;
        const x = Math.random() * (dimensions.width - width) + width / 2;
        const y = -100 - index * 80;
        return Bodies.rectangle(x, y, width, height, {
          chamfer: { radius: height / 2 },
          restitution: 0.6,
          friction: 0.1,
          render: {
            fillStyle: SKILL_COLORS[index % SKILL_COLORS.length],
          },
          label: skill,
        });
      });

      World.add(engine.world, [...walls, ...skillBodies]);

      const mouse = Mouse.create(canvasRef.current);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.2, render: { visible: false } },
      });
      World.add(engine.world, mouseConstraint);

      Events.on(render, "afterRender", () => {
        const ctx = render.context;
        skillBodies.forEach((body) => {
          ctx.save();
          ctx.translate(body.position.x, body.position.y);
          ctx.rotate(body.angle);
          ctx.font = `bold ${fontSize}px 'Syne', sans-serif`;
          ctx.fillStyle = "#0a0a0f";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(body.label, 0, 0);
          ctx.restore();
        });
      });

      const runner = Runner.create();
      Runner.run(runner, engine);
      Render.run(render);

      cleanup = () => {
        Render.stop(render);
        Runner.stop(runner);
        Engine.clear(engine);
        World.clear(engine.world, false);
      };
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [dimensions, skills, enablePhysics, inView]);

  if (!enablePhysics) {
    return <StaticSkillChips skills={skills} className={className} />;
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default GravitySkills;
