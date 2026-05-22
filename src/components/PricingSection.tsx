import { Button } from "./Button";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export function PricingSection() {
  const { ref, inView } = useInViewAnimation<HTMLElement>();
  const cls = () =>
    `${inView ? "animate-fade-in-up" : "opacity-0"} rounded-[40px] px-8 md:px-10 pt-3 pb-10 text-center flex flex-col items-center`;

  return (
    <section ref={ref} id="about" className="w-full py-12 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`${cls()} bg-[#051A24]`}
          style={{ animationDelay: "0.1s", boxShadow: "inset 0 2px 12px rgba(255,255,255,0.06)" }}
        >
          <div className="pt-6 text-[#F6FCFF] max-w-sm mx-auto">
            <h3 className="text-[22px] font-medium">Education</h3>
            <p className="mt-4 text-[#E0EBF0] text-sm leading-relaxed">
              FPT University Can Tho<br />B.Sc. Artificial Intelligence
            </p>
            <div className="mt-10">
              <div className="text-2xl text-[#F6FCFF]">GPA 8.77 / 10</div>
              <div className="text-sm text-[#E0EBF0] mt-1">
                Oct 2023 - 2026 · Excellent Student (Fall 2023 - Fall 2025)
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Button href="https://scholar.google.com/citations?user=OtccK6UAAAAJ" variant="primary">Google Scholar</Button>
              <Button href="https://github.com/MonsieurNam" variant="secondary">GitHub</Button>
            </div>
          </div>
        </div>
        <div
          className={`${cls()} bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)]`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="pt-6 text-[#0D212C] max-w-sm mx-auto">
            <h3 className="text-[22px] font-medium">Currently looking for</h3>
            <p className="mt-4 text-[#051A24]/70 text-sm leading-relaxed">
              Intern / Fresher AI R&amp;D roles in ADAS &amp; Autonomous Driving - building lightweight, edge-ready vision models.
            </p>
            <div className="mt-10">
              <div className="text-2xl text-[#0D212C]">Available 2026</div>
              <div className="text-sm text-[#051A24]/70 mt-1">Can Tho, Vietnam · Open to remote</div>
            </div>
            <div className="mt-8 flex justify-center">
              <Button href="mailto:namnguyenfnw@gmail.com" variant="tertiary">Start a chat</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
