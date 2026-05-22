import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export function TestimonialSection() {
  const { ref, inView } = useInViewAnimation<HTMLElement>();
  const imgWrapRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;
    let visible = false;
    const el = imgWrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver((e) => { visible = e[0].isIntersecting; }, { threshold: 0 });
    io.observe(el);
    const onScroll = () => {
      if (!visible) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = 1 - (rect.top + rect.height / 2) / (vh + rect.height / 2);
        const o = Math.max(-48, Math.min(48, (progress - 0.5) * 120));
        setOffset(o);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const stage = (d: number) => ({
    className: inView ? "animate-fade-in-up" : "opacity-0",
    style: { animationDelay: `${d}s` },
  });

  return (
    <section ref={ref} className="w-full py-12 px-6">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
        <div {...stage(0.1)}><Quote className="w-6 h-6 text-slate-900" /></div>
        <h2
          {...stage(0.2)}
          className={`${stage(0.2).className} mt-4 text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight`}
          style={{ ...stage(0.2).style, color: "#0D212C" }}
        >
          I write models that <span className="font-serif-display">fit on the edge</span> - from autonomous cars to efficient CLIP adaptation.
        </h2>
        <p {...stage(0.3)} className={`${stage(0.3).className} italic text-sm mt-6`} style={{ ...stage(0.3).style, color: "#273C46" }}>
          Nguyen Ngo Nhat Nam
        </p>
        <div {...stage(0.4)} className={`${stage(0.4).className} mt-8 flex items-center justify-center gap-10 text-slate-900 font-medium`} style={stage(0.4).style}>
          <span style={{ fontSize: 20 }}>Springer</span>
          <span style={{ fontSize: 20 }}>Elsevier</span>
          <span style={{ fontSize: 20 }}>FPT&nbsp;University</span>
        </div>
        <div ref={imgWrapRef} {...stage(0.5)} className={`${stage(0.5).className} mt-10 w-full max-w-xs overflow-hidden rounded-2xl shadow-lg`} style={stage(0.5).style}>
          <img
            src="/img/me.jpg"
            alt="Nguyen Ngo Nhat Nam"
            className="w-full block"
            style={{ transform: `translateY(${offset}px)`, willChange: "transform" }}
          />
        </div>
      </div>
    </section>
  );
}
