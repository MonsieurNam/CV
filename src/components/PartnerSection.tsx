import { useRef, useState, useEffect } from "react";
import { Button } from "./Button";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
  "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
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
        className="relative max-w-7xl mx-auto py-48 rounded-[40px] bg-white overflow-hidden"
        style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.06), 0 0 0 0.5px rgba(0,0,0,0.05)" }}
      >
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
                width: 160,
                height: 110,
                objectFit: "cover",
                transform: `translate(-50%, -50%) rotate(${s.rot}deg) scale(${scale})`,
                opacity,
                transition: "opacity 0.1s linear",
              }}
            />
          );
        })}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2
            className={`${inView ? "animate-fade-in-up" : "opacity-0"} font-serif-display text-[48px] md:text-[64px] lg:text-[80px] mb-12`}
            style={{ color: "#0D212C", animationDelay: "0.1s" }}
          >
            Let's build together
          </h2>
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
