import { ArrowUpRight } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const FACEBOOK_VIDEO = "https://www.facebook.com/share/v/1Y1YuTCAAf/";

type ResfesImageProps = {
  src: string;
  alt: string;
  className?: string;
  rotateResfesTwo?: boolean;
};

function ResfesImage({ src, alt, className = "", rotateResfesTwo = false }: ResfesImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-[28px] bg-[#DCE6EC] ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover ${rotateResfesTwo ? "-rotate-90 scale-[1.34]" : ""}`}
      />
    </div>
  );
}

export function ResfesSection() {
  const { ref, inView } = useInViewAnimation<HTMLElement>();

  return (
    <section ref={ref} id="resfes" className="mx-auto w-full max-w-[1200px] px-6 py-12">
      <div
        className={`${inView ? "animate-fade-in-up" : "opacity-0"} overflow-hidden rounded-[40px] border border-[#051A24]/8 bg-white p-5 shadow-[0_22px_70px_rgba(5,26,36,0.09)] md:p-8`}
      >
        <div className="mb-8 max-w-3xl md:mb-10">
          <h2 className="text-[40px] font-medium leading-[0.98] tracking-[-0.05em] text-[#0D212C] md:text-[58px]">
            ResFes 2025
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#334A55] md:text-lg">
            Second Runner-up in the Information Technology Sub-committee, celebrating applied research, teamwork, and a project built for real-world impact.
          </p>
          <a
            href={FACEBOOK_VIDEO}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#051A24] px-5 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0D212C]/20"
          >
            Watch the event video
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.45fr_0.55fr] lg:grid-rows-3">
          <ResfesImage
            src="/img/resfes3.jpg"
            alt="Nguyen Ngo Nhat Nam and teammates receiving the Second Runner-up award at ResFes 2025"
            className="aspect-[4/5] lg:row-span-3 lg:aspect-auto lg:min-h-[760px]"
          />
          <ResfesImage
            src="/img/resfes1.jpg"
            alt="ResFes 2025 team presenting research posters at the exhibition"
            className="aspect-[4/3] lg:aspect-auto"
          />
          <ResfesImage
            src="/img/resfes2.jpg"
            alt="Second Runner-up medals from the ResFes 2025 Information Technology competition"
            className="aspect-[4/3] lg:aspect-auto"
            rotateResfesTwo
          />
          <ResfesImage
            src="/img/resfes4.jpg"
            alt="ResFes 2025 team standing beside their research posters"
            className="aspect-[4/3] lg:aspect-auto"
          />
        </div>
      </div>
    </section>
  );
}
