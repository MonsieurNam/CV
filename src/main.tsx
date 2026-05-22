import React from "react";
import { createRoot } from "react-dom/client";
import { BottomNav } from "@/components/BottomNav";
import { CopyrightBar } from "@/components/CopyrightBar";
import { Footer } from "@/components/Footer";
import { PartnerSection } from "@/components/PartnerSection";
import { PricingSection } from "@/components/PricingSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { TestimonialSection } from "@/components/TestimonialSection";
import { Button } from "@/components/Button";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import "./styles.css";

const MARQUEE_IMAGES = [
  "/img/giai-nhat-AIchallegePTIT.jpg",
  "/img/jetsoncar.jpg",
  "/img/autorace.jpg",
  "/img/vorc.jpg",
  "/img/mentor_autorace2024.jpg",
  "/img/nguoi-tre-voi-nckh-enh-seg.jpg",
  "/img/Nguoi-tre-voi-nckh-seg.jpg",
  "/img/teamlead.jpg",
];

function Hero() {
  const { ref, inView } = useInViewAnimation<HTMLElement>();
  const stage = (delay: number) => ({
    className: inView ? "animate-fade-in-up" : "opacity-0",
    style: { animationDelay: `${delay}s` } as React.CSSProperties,
  });

  return (
    <section ref={ref} className="relative max-w-[1120px] mx-auto px-6 pt-12 md:pt-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-6 top-6 bottom-0 rounded-[48px] bg-[radial-gradient(circle_at_18%_20%,rgba(5,26,36,0.08),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(25,118,210,0.10),transparent_24%),linear-gradient(180deg,rgba(246,252,255,0.94),rgba(255,255,255,0))]" />
      <div className="relative z-10 max-w-[1040px] mx-auto text-center pt-10 md:pt-12">
        <h1
          {...stage(0.1)}
          className={`${stage(0.1).className} font-serif-display font-semibold tracking-tight mb-4 whitespace-nowrap`}
          style={{ ...stage(0.1).style, color: "#051A24", fontSize: "clamp(26px, 6vw, 76px)" }}
        >
          Nguyen Ngo Nhat Nam
        </h1>
        <p
          {...stage(0.2)}
          className={`${stage(0.2).className} font-mono text-xs md:text-sm mb-2`}
          style={{ ...stage(0.2).style, color: "#051A24" }}
        >
          AI Researcher · Autonomous Systems
        </p>
        <h2
          {...stage(0.3)}
          className={`${stage(0.3).className} text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight`}
          style={{ ...stage(0.3).style, color: "#0D212C" }}
        >
          Build the <span className="font-serif-display">edge of vision,</span>
          <br />
          the <span className="font-serif-display">efficient way.</span>
        </h2>
        <div
          className={`${stage(0.35).className} pointer-events-none mx-auto mt-6 hidden md:flex flex-wrap justify-center gap-3`}
          style={stage(0.35).style}
        >
          {["AI perception", "ADAS", "Edge VLM", "Autonomous car"].map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/80 px-4 py-2 text-xs shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              style={{ color: "#051A24" }}
            >
              {item}
            </span>
          ))}
        </div>
        <div
          {...stage(0.4)}
          className={`${stage(0.4).className} flex flex-col gap-6 text-sm md:text-base leading-relaxed mt-5 md:mt-6`}
          style={{ ...stage(0.4).style, color: "#051A24" }}
        >
          <p>
            I am an AI undergraduate at FPT University Can Tho (GPA 8.77/10)
            with three peer-reviewed papers in Springer and Elsevier on
            Computer Vision and Autonomous Systems.
          </p>
          <p>
            My focus is delivering lightweight, high-performance models for
            edge devices, from OrthoAdapt-style CLIP adaptation to
            traffic-sign detection for ADAS and autonomous driving.
          </p>
          <p>Open to Intern / Fresher AI R&amp;D Engineer roles.</p>
        </div>
        <div
          {...stage(0.5)}
          className={`${stage(0.5).className} flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-5 md:mt-6`}
          style={stage(0.5).style}
        >
          <Button href="mailto:namnguyenfnw@gmail.com" variant="primary">
            Get in touch
          </Button>
          <Button href="#work" variant="secondary">
            View research
          </Button>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES];
  return (
    <div className="w-full mt-16 md:mt-20 mb-16 overflow-hidden">
      <div className="flex animate-marquee w-max">
        {items.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt=""
            className="h-[240px] md:h-[420px] mx-3 rounded-2xl shadow-lg object-cover"
            style={{ minWidth: 320 }}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden pb-32">
      <Hero />
      <Marquee />
      <TestimonialSection />
      <PricingSection />
      <TestimonialCarousel />
      <ProjectsSection />
      <PartnerSection />
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
