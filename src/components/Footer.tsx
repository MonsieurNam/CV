import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const link = "text-base hover:opacity-70 transition-opacity";
  return (
    <footer className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-10 md:justify-between">
        <div className="max-w-sm">
          <div className="text-lg font-medium tracking-[-0.03em]" style={{ color: "#051A24" }}>
            Nguyen Ngo Nhat Nam
          </div>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(5,26,36,0.64)" }}>
            AI research portfolio for computer vision, ADAS, edge systems, and efficient model adaptation.
          </p>
          <div className="mt-5 flex flex-col items-start gap-2 text-sm" style={{ color: "#051A24" }}>
            <a href="mailto:namnguyenfnw@gmail.com" className="transition-opacity hover:opacity-65">
              namnguyenfnw@gmail.com
            </a>
            <a href="tel:+84325235826" className="transition-opacity hover:opacity-65">
              0325235826
            </a>
          </div>
        </div>
        <div className="flex items-start gap-8">
          <ArrowUpRight className="w-6 h-6 mt-1" style={{ color: "#051A24" }} />
          <div className="flex flex-col gap-2" style={{ color: "#051A24" }}>
            <a href="#about" className={link}>About</a>
            <a href="#research" className={link}>Research</a>
            <a href="#work" className={link}>Projects</a>
          </div>
          <div className="flex flex-col gap-2" style={{ color: "#051A24" }}>
            <a href="https://github.com/MonsieurNam" target="_blank" rel="noreferrer" className={link}>GitHub</a>
            <a href="https://www.linkedin.com/in/nguyen-nam-893b52280/" target="_blank" rel="noreferrer" className={link}>LinkedIn</a>
            <a href="https://scholar.google.com/citations?user=OtccK6UAAAAJ" target="_blank" rel="noreferrer" className={link}>Scholar</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
