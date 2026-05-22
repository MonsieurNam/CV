import { useRef, useState, useEffect } from "react";
import { Button } from "./Button";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const IMAGES = [
  "/img/giai-nhat-AIchallegePTIT.jpg",
  "/img/jetsoncar.jpg",
  "/img/autorace.jpg",
  "/img/vorc.jpg",
  "/img/mentor_autorace2024.jpg",
  "/img/teamlead.jpg",
  "/img/aiyoungguru.jpg",
  "/img/tuyensinh1.jpg",
];

type Spawn = { id: number; x: number; y: number; rot: number; src: string; born: number };

export function PartnerSection() {
  const { ref: animRef, inView } = useInViewAnimation<HTMLDivElement>();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [spawns, setSpawns] = useState<Spawn[]>([]);
  const lastSpawn = useRef(0);
  const idRef = useRef(0);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const now = performance.now();
      setSpawns((prev) => prev.filter((s) => now - s.born < 1000));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const now = performance.now();
    if (now - lastSpawn.current < 80) return;
    lastSpawn.current = now;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const src = IMAGES[Math.floor(Math.random() * IMAGES.length)];
    const rot = Math.random() * 20 - 10;
    setSpawns((p) => [
      ...p,
      { id: idRef.current++, x: e.clientX - rect.left, y: e.clientY - rect.top, rot, src, born: now },
    ]);
  };

  return (
    <section id="contact" className="w-full py-12 px-6" ref={animRef}>
      <div
        ref={containerRef}
        onMouseMove={onMove}
        className="relative max-w-7xl mx-auto py-36 md:py-48 rounded-[40px] bg-white overflow-hidden"
        style={{
          boxShadow: "0 4px 30px rgba(0,0,0,0.06), 0 0 0 0.5px rgba(0,0,0,0.05)",
          background:
            "radial-gradient(circle at 18% 20%, rgba(5,26,36,0.08), transparent 26%), radial-gradient(circle at 82% 24%, rgba(20,96,160,0.12), transparent 28%), linear-gradient(135deg, #ffffff 0%, #f6fcff 52%, #eef7f3 100%)",
        }}
      >
        <div className="absolute inset-x-10 top-10 flex flex-wrap justify-center gap-3 text-xs" style={{ color: "#051A24" }}>
          {["AI R&D", "Autonomous Driving", "ADAS", "Computer Vision", "Edge AI"].map((item) => (
            <span key={item} className="rounded-full bg-white/75 px-4 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              {item}
            </span>
          ))}
        </div>

        {spawns.map((s) => {
          const age = (performance.now() - s.born) / 1000;
          const opacity = Math.max(0, 1 - age);
          const scale = 1 - age * 0.3;
          return (
            <img
              key={s.id}
              src={s.src}
              alt=""
              className="absolute pointer-events-none rounded-xl shadow-lg"
              style={{
                left: s.x,
                top: s.y,
                width: 170,
                height: 112,
                objectFit: "cover",
                transform: `translate(-50%, -50%) rotate(${s.rot}deg) scale(${scale})`,
                opacity,
                transition: "opacity 0.1s linear",
              }}
            />
          );
        })}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <h2
            className={`${inView ? "animate-fade-in-up" : "opacity-0"} font-serif-display text-[48px] md:text-[64px] lg:text-[80px] mb-6 md:mb-12`}
            style={{ color: "#0D212C", animationDelay: "0.1s" }}
          >
            Let's build together
          </h2>
          <p
            className={`${inView ? "animate-fade-in-up" : "opacity-0"} max-w-2xl mb-8 text-sm md:text-base leading-relaxed`}
            style={{ color: "rgba(5,26,36,0.7)", animationDelay: "0.18s" }}
          >
            Move your cursor here to reveal moments from AI research, mentoring, robotics, and autonomous-car work.
          </p>
          <Button href="mailto:namnguyenfnw@gmail.com" variant="primary" className={`${inView ? "animate-fade-in-up" : "opacity-0"} !pl-2`}>
            <img
              src="/img/me.jpg"
              alt="Nam"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span>Start a chat with Nam</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
