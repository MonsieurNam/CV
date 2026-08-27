import { BookOpen, ArrowUpRight } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

type PublicationBadge = {
  type: "quartile" | "coreRank";
  label: string;
};

const PUBLICATIONS = [
  {
    quote:
      "SingLoRA-CLIP: Highly Efficient VLM Adaptation with a Single Parameter Matrix",
    venue: "ICCSA 2026, Springer LNCS 16768, pp. 251-263",
    year: "2026",
    url: "https://doi.org/10.1007/978-3-032-30488-9_16",
    badge: { type: "coreRank", label: "CORE C" } satisfies PublicationBadge,
  },
  {
    quote:
      "Enhancing AGWO-YOLO for Surveillance: Real-Time Human Detection with Adaptive Grey Wolf Optimizer",
    venue: "ACIIDS 2026, Springer LNAI 16530, pp. 370-383",
    year: "2026",
    url: "https://doi.org/10.1007/978-981-92-0071-9_25",
    badge: { type: "coreRank", label: "CORE B" } satisfies PublicationBadge,
  },
  {
    quote:
      "Grounding DINO and distillation-enhanced model for advanced traffic sign detection and classification in autonomous vehicles",
    venue: "Engineering Science and Technology, an International Journal 64, 102028",
    year: "2025",
    url: "https://www.sciencedirect.com/science/article/pii/S2215098625000837",
    badge: { type: "quartile", label: "Q1" } satisfies PublicationBadge,
  },
  {
    quote:
      "Enhancing semantic scene segmentation for indoor autonomous systems using advanced attention-supported improved UNet",
    venue: "Signal, Image and Video Processing 19 (2), 190",
    year: "2025",
    url: "https://link.springer.com/article/10.1007/s11760-024-03779-w",
    badge: { type: "quartile", label: "Q2" } satisfies PublicationBadge,
  },
  {
    quote:
      "Semantic scene segmentation for indoor autonomous vision systems: leveraging an enhanced and efficient U-NET architecture",
    venue: "Multimedia Tools and Applications 84 (11), 9341-9365",
    year: "2025",
    url: "https://link.springer.com/article/10.1007/s11042-024-19302-9",
    badge: { type: "quartile", label: "Q1" } satisfies PublicationBadge,
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
            <span className="ml-1">5 peer-reviewed publications across Springer and Elsevier</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PUBLICATIONS.map((paper, index) => (
            <a
              key={paper.quote}
              href={paper.url}
              target="_blank"
              rel="noreferrer"
              className={`${inView ? "animate-fade-in-up" : "opacity-0"} ${index === 0 ? "md:col-span-2" : ""} group relative overflow-hidden rounded-[32px] bg-white px-6 py-8 shadow-[0_4px_16px_rgba(5,26,36,0.06)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(5,26,36,0.10)] md:rounded-[40px] md:px-10`}
              style={{ animationDelay: `${0.12 + index * 0.08}s` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#E0EBF0] opacity-60 transition-transform group-hover:scale-125" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D212C] text-sm font-semibold text-white">
                      {paper.year}
                    </div>
                    <span
                      className="rounded-full border border-[#0D6B83]/15 bg-[#E4F2F6] px-3 py-1.5 text-xs font-semibold text-[#0D5D74]"
                      aria-label={`${paper.badge.type === "quartile" ? "Journal quartile" : "CORE conference rank"} ${paper.badge.label}`}
                    >
                      {paper.badge.label}
                    </span>
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
