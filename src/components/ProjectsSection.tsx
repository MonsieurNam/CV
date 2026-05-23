import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const PROJECTS = [
  {
    name: "Video Retrieval System",
    label: "AI Challenge Winner",
    desc: "First Prize, AI Challenge PTIT 2024. YOLO + SAM + CLIP pipeline with object tracking and temporal reasoning for content-based video queries.",
    img: "/img/giai-nhat-AIchallegePTIT.jpg",
    url: "https://github.com/MonsieurNam/object_video_retrieval",
    year: "2024",
    accent: "#0A84A6",
    tint: "#E5F6FB",
    tags: ["YOLO", "SAM", "CLIP"],
  },
  {
    name: "OrthoAdapt",
    label: "Efficient VLM Adaptation",
    desc: "Few-shot CLIP adaptation research code for gated multi-head symmetric adapters with orthogonal regularization. Includes ablations, robustness evaluation, and 4-shot benchmark visualization.",
    img: "/img/combined_performance_4shot.png",
    url: "https://github.com/MonsieurNam/OthorAdapt",
    year: "2025",
    accent: "#7A5CFF",
    tint: "#F0EDFF",
    tags: ["CLIP", "Few-shot", "Adapters"],
  },
  {
    name: "Semantic-Guided Traffic Sign Detection",
    label: "Autonomous Driving",
    desc: "GroundingDINO + lightweight LB-scSE self-distilled ResNet for small and occluded traffic signs. Achieves 68.52% mAP@50 on DINO&GTSRBv1 while reducing model size by 10x for real-time autonomous-driving deployment.",
    img: "/img/gdino_tfsign_overview.png",
    url: "https://www.sciencedirect.com/science/article/pii/S2215098625000837",
    year: "2025",
    accent: "#E4582E",
    tint: "#FFF1E9",
    tags: ["GroundingDINO", "LB-scSE", "Edge"],
  },
  {
    name: "PIXEL PLANE",
    label: "Generative Data Engine",
    desc: "Generative-AI Streamlit app that scales 100 images into 10,000 synthetic samples for autonomous-vehicle training, with GroundingDINO + SAM + PowerPaint + Stable Video Diffusion.",
    img: "/img/pixelplane.png",
    url: "https://github.com/MonsieurNam/PIXEL_PLANE",
    year: "2023",
    accent: "#1A9B72",
    tint: "#EAF8F0",
    tags: ["Synthetic Data", "SAM", "SVD"],
  },
];

function Project({ p }: { p: (typeof PROJECTS)[number] }) {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();
  const style = {
    "--project-accent": p.accent,
    "--project-tint": p.tint,
  } as CSSProperties;

  return (
    <div ref={ref} className={inView ? "animate-fade-in-up" : "opacity-0"}>
      <a
        href={p.url}
        target="_blank"
        rel="noreferrer"
        className="project-card group relative grid gap-8 overflow-hidden rounded-[36px] p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(5,26,36,0.14)] md:grid-cols-[0.9fr_1.1fr] md:gap-10 md:p-8"
        style={style}
      >
        <div className="flex min-h-[320px] flex-col justify-between rounded-[28px] bg-white/58 p-6 ring-1 ring-white/70 backdrop-blur-sm">
          <div>
            <div className="mb-8 flex items-center justify-between gap-4">
              <span className="project-tag rounded-full px-3 py-1 text-xs font-medium">
                {p.label}
              </span>
              <span className="project-accent-text text-sm font-medium">{p.year}</span>
            </div>
            <h3 className="text-3xl font-medium leading-[0.98] tracking-[-0.04em] md:text-5xl" style={{ color: "#051A24" }}>
              {p.name}
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-relaxed md:text-base" style={{ color: "rgba(5,26,36,0.68)" }}>
              {p.desc}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {p.tags.map((tag) => (
              <span key={tag} className="project-tag rounded-full px-3 py-1.5 text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[28px] bg-[#051A24]">
          <div className="project-accent-bg absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
            <ArrowUpRight className="h-5 w-5" />
          </div>
          <img
            src={p.img}
            alt={p.name}
            className="project-media h-full min-h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(5,26,36,0.55)_100%)]" />
          <div className="absolute bottom-5 left-5 rounded-full bg-white/86 px-4 py-2 text-sm font-medium text-[#051A24] backdrop-blur-sm">
            Open project
          </div>
        </div>
      </a>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="work" className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight" style={{ color: "#0D212C" }}>
          Selected research &amp; projects
        </h2>
        <p className="mt-4 text-sm leading-relaxed md:text-base" style={{ color: "rgba(5,26,36,0.68)" }}>
          Each project is marked with its own visual identity so the portfolio reads less like a gallery and more like a map of research directions.
        </p>
      </div>
      <div className="flex flex-col gap-8 md:gap-10">
        {PROJECTS.map((p) => <Project key={p.name} p={p} />)}
      </div>
    </section>
  );
}
