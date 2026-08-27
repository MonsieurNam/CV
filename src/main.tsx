import React from "react";
import { createRoot } from "react-dom/client";
import { BottomNav } from "@/components/BottomNav";
import { CopyrightBar } from "@/components/CopyrightBar";
import { Footer } from "@/components/Footer";
import { PartnerSection } from "@/components/PartnerSection";
import { PricingSection } from "@/components/PricingSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ResfesSection } from "@/components/ResfesSection";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { TestimonialSection } from "@/components/TestimonialSection";
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
  "/img/resfes1.jpg",
  "/img/resfes2.jpg",
  "/img/resfes3.jpg",
  "/img/resfes4.jpg",
];

function Hero() {
  const { ref, inView } = useInViewAnimation<HTMLElement>();
  const rise = (delay: number) => ({
    className: inView ? "animate-velvet-rise" : "opacity-0",
    style: { animationDelay: `${delay}s` } as React.CSSProperties,
  });

  return (
    <section
      ref={ref}
      className="relative min-h-[720px] md:min-h-screen w-full overflow-hidden bg-[#032534] text-white"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/img/Person_working_in_flower_field_202605222337.mp4"
        className="absolute inset-0 h-full w-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(112,197,255,0.35),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(180,255,226,0.18),transparent_28%),linear-gradient(180deg,rgba(3,37,52,0.42),rgba(3,37,52,0.92)_78%,#F2F6F9_100%)]" />
      <div className="velvet-orb left-[8%] top-[24%] h-72 w-72" />
      <div className="velvet-orb velvet-orb-delay right-[5%] top-[18%] h-96 w-96" />
      <div className="velvet-orb velvet-orb-slow left-1/2 bottom-[14%] h-80 w-80" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />

      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-8">
        <a href="#" className="text-3xl font-semibold tracking-[-0.05em] text-white">
          Nam<sup className="ml-1 text-xs font-normal">AI</sup>
        </a>
        <div className="hidden items-center gap-8 rounded-full px-6 py-3 text-sm text-white/68 md:flex">
          {[
            ["Research", "#research"],
            ["Projects", "#work"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="transition-colors hover:text-white">
              {label}
            </a>
          ))}
        </div>
        <span className="liquid-glass rounded-full px-5 py-2.5 text-sm text-white/78">
          Available 2026
        </span>
      </nav>

      <div className="hero-velvet-content relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-20 pt-14 text-center md:pb-28 md:pt-16">
        <div
          {...rise(0.05)}
          className={`${rise(0.05).className} hero-velvet-kicker liquid-glass mb-8 inline-flex flex-wrap items-center justify-center gap-2 rounded-full px-4 py-2 text-xs text-white/78 md:text-sm`}
          style={rise(0.05).style}
        >
          <span>AI Researcher</span>
          <span className="text-white/35">/</span>
          <span>Autonomous Systems</span>
          <span className="text-white/35">/</span>
          <span>Edge Vision</span>
        </div>
        <h1
          {...rise(0.1)}
          className={`${rise(0.1).className} hero-velvet-title max-w-7xl font-serif-display font-semibold leading-[0.88] tracking-[-0.07em] text-white`}
          style={{ ...rise(0.1).style, fontSize: "clamp(48px, 11vw, 144px)" }}
        >
          Nguyen Ngo
          <br />
          Nhat Nam
        </h1>
        <h2
          {...rise(0.2)}
          className={`${rise(0.2).className} hero-velvet-subtitle mt-6 max-w-4xl text-[28px] leading-[1.03] tracking-tight text-white/92 sm:text-[40px] md:text-[52px]`}
          style={rise(0.2).style}
        >
          Building edge-ready vision for
          <span className="text-white/56"> autonomous machines that understand roads.</span>
        </h2>
        <p
          {...rise(0.3)}
          className={`${rise(0.3).className} hero-velvet-copy mt-6 max-w-2xl text-sm leading-relaxed text-white/68 sm:text-base md:text-lg`}
          style={rise(0.3).style}
        >
          AI undergraduate at FPT University Can Tho with five peer-reviewed
          publications from Springer and Elsevier. I build lightweight computer-vision
          systems for ADAS, autonomous driving, and edge deployment.
        </p>
        <div {...rise(0.4)} className={`${rise(0.4).className} hero-velvet-chips mt-8 flex flex-wrap justify-center gap-3`} style={rise(0.4).style}>
          {["Computer Vision", "ADAS", "Open-vocabulary Detection", "Efficient VLM", "Jetson / Edge AI"].map((item) => (
            <span key={item} className="liquid-glass rounded-full px-4 py-2 text-xs text-white/76">
              {item}
            </span>
          ))}
        </div>
        <div {...rise(0.5)} className={`${rise(0.5).className} hero-velvet-actions mt-8 flex flex-col justify-center gap-4 sm:flex-row`} style={rise(0.5).style}>
          <a
            href="https://zalo.me/0325235826"
            target="_blank"
            rel="noreferrer"
            className="liquid-glass rounded-full px-12 py-5 text-base text-white transition-transform hover:scale-[1.03]"
          >
            Start a chat
          </a>
          <a
            href="#work"
            className="rounded-full bg-white px-12 py-5 text-base font-medium text-[#032534] shadow-[0_20px_60px_rgba(255,255,255,0.18)] transition-transform hover:scale-[1.03]"
          >
            View research
          </a>
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
          <div
            key={`${src}-${index}`}
            className="relative mx-3 h-[240px] w-[320px] shrink-0 overflow-hidden rounded-2xl bg-[#E2EAF0] shadow-lg md:h-[420px] md:w-[560px]"
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 h-full w-full object-cover ${src.endsWith("resfes2.jpg") ? "-rotate-90 scale-[1.34]" : ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="bg-[#F2F6F9] min-h-screen overflow-x-hidden pb-32">
      <Hero />
      <Marquee />
      <TestimonialSection />
      <PricingSection />
      <div className="soft-divider my-10" />
      <TestimonialCarousel />
      <div className="soft-divider my-10" />
      <ProjectsSection />
      <ResfesSection />
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
