import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

type CTABandProps = {
  variant: "dark" | "light" | "animated";
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CTABand({
  variant,
  title,
  subtitle,
  buttonLabel,
  buttonHref,
}: CTABandProps) {
  if (variant === "animated") {
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

  if (variant === "light") {
    return (
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm md:flex-row md:items-center md:gap-10">
            <div>
              <h4 className="text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl lg:text-4xl">
                {title}
              </h4>
              {subtitle && (
                <p className="mt-2 text-base text-neutral-600 md:text-lg">
                  {subtitle}
                </p>
              )}
            </div>
            <Link
              href={buttonHref}
              className="shrink-0 inline-flex items-center justify-center rounded-xl bg-neutral-900 px-8 py-4 text-base font-semibold text-white hover:bg-neutral-800 md:text-lg"
            >
              {buttonLabel}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // variant === "dark"
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h4 className="text-3xl font-semibold text-white md:text-4xl">
            {title}
          </h4>
          <Link
            href={buttonHref}
            className="rounded-full bg-white px-8 py-4 text-base font-semibold text-black hover:bg-white/90"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
