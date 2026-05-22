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
  "/img/pixelplane.png",
  "/img/deepmirror.png",
  "/img/jetracer.jpg",
  "/img/pdfviewachatbot.png",
  "/img/me.jpg",
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
];

function Hero() {
  const { ref, inView } = useInViewAnimation<HTMLElement>();
  const stage = (delay: number) => ({
    className: inView ? "animate-fade-in-up" : "opacity-0",
    style: { animationDelay: `${delay}s` } as React.CSSProperties,
  });

  return (
    <section ref={ref} className="max-w-[440px] mx-auto px-6 pt-12 md:pt-16">
      <h1
        {...stage(0.1)}
        className={`${stage(0.1).className} font-serif-display text-[32px] md:text-[40px] lg:text-[44px] font-semibold tracking-tight mb-4`}
        style={{ ...stage(0.1).style, color: "#051A24" }}
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
        {...stage(0.4)}
        className={`${stage(0.4).className} flex flex-col gap-6 text-sm md:text-base leading-relaxed mt-5 md:mt-6`}
        style={{ ...stage(0.4).style, color: "#051A24" }}
      >
        <p>
          I am an AI undergraduate at FPT University Can Tho (GPA 8.77/10) with
          three peer-reviewed papers in Springer and Elsevier on Computer Vision
          and Autonomous Systems.
        </p>
        <p>
          My focus is delivering lightweight, high-performance models for edge
          devices, from VLM fine-tuning at 0.17 GB peak VRAM to traffic-sign
          detection for ADAS and autonomous driving.
        </p>
        <p>Open to Intern / Fresher AI R&amp;D Engineer roles.</p>
      </div>
      <div
        {...stage(0.5)}
        className={`${stage(0.5).className} flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6`}
        style={stage(0.5).style}
      >
        <Button href="mailto:namnguyenfnw@gmail.com" variant="primary">
          Get in touch
        </Button>
        <Button href="#work" variant="secondary">
          View research
        </Button>
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
            className="h-[280px] md:h-[500px] mx-3 rounded-2xl shadow-lg object-cover"
            style={{ minWidth: 280 }}
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
