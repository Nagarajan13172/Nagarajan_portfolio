import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

interface GravitySkillsProps {
  skills: string[];
  className?: string;
}

const GravitySkills: React.FC<GravitySkillsProps> = ({ skills, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

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
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    // Clean up previous engine
    if (engineRef.current) {
      Matter.Engine.clear(engineRef.current);
    }
    if (renderRef.current) {
      Matter.Render.stop(renderRef.current);
      renderRef.current.canvas.remove();
    }
    if (runnerRef.current) {
      Matter.Runner.stop(runnerRef.current);
    }

    const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Runner, Events } = Matter;

    const engine = Engine.create();
    engineRef.current = engine;
    engine.world.gravity.y = 0.5;

    const render = Render.create({
      element: containerRef.current!,
      canvas: canvasRef.current,
      engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
      },
    });
    renderRef.current = render;

    // Create walls
    const wallThickness = 50;
    const walls = [
      Bodies.rectangle(dimensions.width / 2, dimensions.height + wallThickness / 2, dimensions.width, wallThickness, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(-wallThickness / 2, dimensions.height / 2, wallThickness, dimensions.height, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(dimensions.width + wallThickness / 2, dimensions.height / 2, wallThickness, dimensions.height, { isStatic: true, render: { visible: false } }),
    ];

    // Create skill bodies
    const colors = [
      "hsl(185, 100%, 50%)",
      "hsl(270, 100%, 65%)",
      "hsl(25, 100%, 55%)",
      "hsl(150, 100%, 45%)",
      "hsl(340, 100%, 60%)",
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
          fillStyle: colors[index % colors.length],
        },
        label: skill,
      });
    });

    World.add(engine.world, [...walls, ...skillBodies]);

    // Mouse interaction
    const mouse = Mouse.create(canvasRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    World.add(engine.world, mouseConstraint);

    // Custom render for text
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
    runnerRef.current = runner;
    Runner.run(runner, engine);
    Render.run(render);

    return () => {
      if (renderRef.current) {
        Render.stop(renderRef.current);
      }
      if (runnerRef.current) {
        Runner.stop(runnerRef.current);
      }
      if (engineRef.current) {
        Engine.clear(engineRef.current);
      }
    };
  }, [dimensions, skills]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default GravitySkills;
