import { ArrowUpRight } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const PROJECTS = [
  {
    name: "Video Retrieval System",
    desc: "First Prize, AI Challenge PTIT 2024. YOLO + SAM + CLIP pipeline with object tracking and temporal reasoning for content-based video queries.",
    img: "/img/giai-nhat-AIchallegePTIT.jpg",
    url: "https://github.com/MonsieurNam/object_video_retrieval",
    year: "2024",
  },
  {
    name: "SingLoRA-CLIP",
    desc: "Ultra-efficient VLM adaptation: replacing LoRA's dual-matrix update with a single symmetric matrix (AA^T) - 50% fewer trainable parameters, SOTA few-shot across 8 datasets.",
    img: "/img/nguoi-tre-voi-nckh-enh-seg.jpg",
    url: "https://github.com/MonsieurNam/singlora_clip",
    year: "2025",
  },
  {
    name: "Dissecting QLoRA",
    desc: "Systematic analysis of static vs. dynamic memory in VLMs. Reduced peak training VRAM to 0.17 GB via gradient checkpointing, unlocking fine-tuning on consumer-grade and edge hardware.",
    img: "/img/Nguoi-tre-voi-nckh-seg.jpg",
    url: "https://github.com/MonsieurNam/QLORA_CLIP_IxT",
    year: "2025",
  },
  {
    name: "Traffic Sign Detection",
    desc: "Lightweight detector using Self-Distillation on ResNet34 with Grounding DINO for open-set detection on edge devices. Published in ScienceDirect / Elsevier.",
    img: "/img/jetsoncar.jpg",
    url: "https://www.sciencedirect.com/science/article/pii/S2215098625000837",
    year: "2025",
  },
  {
    name: "PIXEL PLANE",
    desc: "Generative-AI Streamlit app that scales 100 images into 10,000 synthetic samples for autonomous-vehicle training, with GroundingDINO + SAM + PowerPaint + Stable Video Diffusion.",
    img: "/img/autorace.jpg",
    url: "https://github.com/MonsieurNam/PIXEL_PLANE",
    year: "2023",
  },
];

function Project({ p }: { p: (typeof PROJECTS)[number] }) {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();
  return (
    <div ref={ref} className={inView ? "animate-fade-in-up" : "opacity-0"}>
      <div className="ml-0 md:ml-28 mb-6 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-serif-display text-2xl md:text-3xl font-semibold" style={{ color: "#051A24" }}>{p.name}</h3>
          <p className="mt-2 text-sm md:text-base max-w-xl" style={{ color: "rgba(5,26,36,0.7)" }}>{p.desc}</p>
        </div>
        <a
          href={p.url}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 inline-flex items-center gap-1 text-sm hover:opacity-70 transition-opacity"
          style={{ color: "#051A24" }}
        >
          {p.year}
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
      <a href={p.url} target="_blank" rel="noreferrer">
        <img src={p.img} alt={p.name} className="w-full rounded-2xl shadow-lg object-cover max-h-[520px]" />
      </a>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="work" className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="ml-0 md:ml-28 mb-10">
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight" style={{ color: "#0D212C" }}>
          Selected <span className="font-serif-display">research &amp; projects</span>
        </h2>
      </div>
      <div className="flex flex-col gap-16 md:gap-20">
        {PROJECTS.map((p) => <Project key={p.name} p={p} />)}
      </div>
    </section>
  );
}
