import { useEffect, useRef, useState } from "react";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const PUBLICATIONS = [
  {
    quote:
      "Enhancing Semantic Scene Segmentation for Indoor Autonomous Systems Using Advanced Attention-Supported Improved UNet.",
    venue: "Signal, Image and Video Processing — Springer",
    year: "2025",
    url: "https://link.springer.com/article/10.1007/s11760-024-03779-w",
  },
  {
    quote:
      "Semantic Scene Segmentation for Indoor Autonomous Vision Systems: Leveraging an Enhanced and Efficient U-Net Architecture.",
    venue: "Multimedia Tools and Applications — Springer",
    year: "2025",
    url: "https://link.springer.com/article/10.1007/s11042-024-19302-9",
  },
  {
    quote:
      "Grounding DINO and Distillation-Enhanced Model for Traffic Sign Detection.",
    venue: "ScienceDirect / Elsevier",
    year: "2025",
    url: "https://www.sciencedirect.com/science/article/pii/S2215098625000837",
  },
  {
    quote:
      "SingLoRA-CLIP — replacing the dual-matrix LoRA update with a single symmetric matrix, cutting trainable parameters by 50%.",
    venue: "Independent research · 8 benchmark datasets",
    year: "2025",
    url: "https://github.com/MonsieurNam/singlora_clip",
  },
  {
    quote:
      "Dissecting QLoRA's efficiency for VLM adaptation — peak training VRAM driven down to 0.17 GB via gradient checkpointing.",
    venue: "Independent research · Edge-hardware fine-tuning",
    year: "2025",
    url: "https://github.com/MonsieurNam/QLORA_CLIP_IxT",
  },
];

const LIST = [...PUBLICATIONS, ...PUBLICATIONS, ...PUBLICATIONS];

export function TestimonialCarousel() {
  const { ref, inView } = useInViewAnimation<HTMLElement>();
  const [index, setIndex] = useState(PUBLICATIONS.length);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setInterval(() => setIndex((i) => i + 1), 3500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused]);

  const cardW = 427.5;
  const gap = 24;
  const step = cardW + gap;

  return (
    <section ref={ref} id="research" className="w-full py-20 overflow-hidden">
      <div className="md:max-w-4xl md:ml-auto px-6 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight" style={{ color: "#0D212C" }}>
          What I've <span className="font-serif-display">published</span>
        </h2>
        <div className="flex items-center gap-2 text-sm" style={{ color: "#051A24" }}>
          <BookOpen className="w-5 h-5" />
          <span className="ml-1">3 peer-reviewed papers · Springer / Elsevier</span>
        </div>
      </div>

      <div
        className={inView ? "animate-fade-in-up" : "opacity-0"}
        style={{ animationDelay: "0.2s" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pl-6 overflow-hidden">
          <div
            className="flex"
            style={{
              gap: `${gap}px`,
              transform: `translateX(-${index * step}px)`,
              transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {LIST.map((t, i) => (
              <a
                key={i}
                href={t.url}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 bg-white rounded-[32px] md:rounded-[40px] px-6 md:pl-10 md:pr-24 py-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow"
                style={{ width: `min(${cardW}px, calc(100vw - 48px))` }}
              >
                <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="mb-4">
                  <path d="M0 22V13C0 5.82 4.82 0.5 12 0V4.5C7.5 5.5 5 9 5 13H12V22H0ZM16 22V13C16 5.82 20.82 0.5 28 0V4.5C23.5 5.5 21 9 21 13H28V22H16Z" fill="#0D212C" />
                </svg>
                <p className="text-base leading-relaxed" style={{ color: "#0D212C" }}>{t.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0D212C] text-white flex items-center justify-center text-sm font-semibold">
                    {t.year}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "#0D212C" }}>{t.venue}</div>
                    <div className="text-sm" style={{ color: "#273C46" }}>→ Read paper</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="md:max-w-4xl md:ml-auto px-6 mt-8 flex gap-3 justify-end">
          <button
            onClick={() => setIndex((i) => i - 1)}
            className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#0D212C]/5"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" style={{ color: "#0D212C" }} />
          </button>
          <button
            onClick={() => setIndex((i) => i + 1)}
            className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#0D212C]/5"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" style={{ color: "#0D212C" }} />
          </button>
        </div>
      </div>
    </section>
  );
}
