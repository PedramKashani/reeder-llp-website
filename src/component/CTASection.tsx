import Link from "next/link";
import { AnimatedSection } from "@/component/AnimatedSection";

type CTASectionProps = {
  title: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CTASection({
  title,
  buttonLabel,
  buttonHref,
}: CTASectionProps) {
  return (
    <AnimatedSection className="flex min-h-0 flex-1 flex-col items-center justify-center">
      <div className="section-content-in mx-auto w-full max-w-[88rem] px-6 py-12 md:px-10">
        <div className="flex flex-col items-center justify-between gap-10 rounded-3xl border border-white/20 bg-white/5 p-14 shadow-lg md:flex-row md:items-center md:p-20">
          <h4 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl">
            {title}
          </h4>
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center rounded-xl bg-white px-12 py-6 text-2xl font-bold text-neutral-900 transition hover:bg-neutral-100"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
