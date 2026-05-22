import { ArrowUpRight } from "lucide-react";
import { Button } from "./Button";

export function Footer() {
  const link = "text-base hover:opacity-70 transition-opacity";
  return (
    <footer className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-10 md:justify-between">
        <div>
          <Button href="mailto:namnguyenfnw@gmail.com" variant="primary">Start a chat</Button>
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
