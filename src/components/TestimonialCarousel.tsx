import { BookOpen, ArrowUpRight } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const PUBLICATIONS = [
  {
    quote:
      "Enhancing Semantic Scene Segmentation for Indoor Autonomous Systems Using Advanced Attention-Supported Improved UNet.",
    venue: "Signal, Image and Video Processing - Springer",
    year: "2025",
    url: "https://link.springer.com/article/10.1007/s11760-024-03779-w",
  },
  {
    quote:
      "Semantic Scene Segmentation for Indoor Autonomous Vision Systems: Leveraging an Enhanced and Efficient U-Net Architecture.",
    venue: "Multimedia Tools and Applications - Springer",
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
];

export function TestimonialCarousel() {
  const { ref, inView } = useInViewAnimation<HTMLElement>();

  return (
    <section ref={ref} id="research" className="w-full py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight" style={{ color: "#0D212C" }}>
            What I've <span className="font-serif-display">published</span>
          </h2>
          <div className="flex items-center gap-2 text-sm" style={{ color: "#051A24" }}>
            <BookOpen className="w-5 h-5" />
            <span className="ml-1">3 peer-reviewed papers · Springer / Elsevier</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PUBLICATIONS.map((paper, index) => (
            <a
              key={paper.quote}
              href={paper.url}
              target="_blank"
              rel="noreferrer"
              className={`${inView ? "animate-fade-in-up" : "opacity-0"} group relative overflow-hidden bg-white rounded-[32px] md:rounded-[40px] px-6 md:px-10 py-8 ring-1 ring-black/5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 transition-all duration-300`}
              style={{ animationDelay: `${0.12 + index * 0.08}s` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#E0EBF0] opacity-60 transition-transform group-hover:scale-125" />
              <div className="relative">
                <div className="flex items-center justify-between gap-6 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#0D212C] text-white flex items-center justify-center text-sm font-semibold">
                    {paper.year}
                  </div>
                  <ArrowUpRight className="w-5 h-5" style={{ color: "#0D212C" }} />
                </div>
                <p className="text-base leading-relaxed" style={{ color: "#0D212C" }}>{paper.quote}</p>
                <div className="mt-6 font-semibold text-sm" style={{ color: "#0D212C" }}>{paper.venue}</div>
                <div className="text-sm mt-1" style={{ color: "#273C46" }}>Read paper</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
