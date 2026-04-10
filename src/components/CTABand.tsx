import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HomeReveal } from "@/components/HomeReveal";

type CTABandProps = {
  variant: "dark" | "light" | "animated";
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonHref: string;
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
  /** Homepage animated band: scroll reveal instead of legacy section animation */
  scrollReveal?: boolean;
};

export function CTABand({
  variant,
  title,
  subtitle,
  buttonLabel,
  buttonHref,
  secondaryButtonLabel,
  secondaryButtonHref,
  scrollReveal = false,
}: CTABandProps) {
  if (variant === "animated") {
    const inner = (
      <div className="section-content-in mx-auto w-full max-w-[90rem] px-6 py-16 sm:px-10 md:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto flex w-full max-w-[42rem] flex-col items-center gap-10 border-y border-white/[0.08] py-14 md:flex-row md:items-center md:gap-10 md:py-16 lg:max-w-[56rem] lg:gap-12 lg:py-20">
          {scrollReveal ? (
            <>
              <HomeReveal
                delayMs={0}
                className="min-w-0 w-full md:grow md:basis-0 md:pr-2"
              >
                <h4 className="text-center text-3xl font-light leading-snug tracking-[-0.02em] text-white/95 md:text-left md:text-4xl lg:text-[2.15rem] lg:leading-tight">
                  {title}
                </h4>
              </HomeReveal>
              <HomeReveal
                delayMs={200}
                className="flex w-full shrink-0 justify-center md:block md:w-auto"
              >
                <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center md:w-auto">
                  <Link
                    href={buttonHref}
                    className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-10 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-white/90 transition-colors duration-300 hover:border-white/50 hover:bg-white/[0.04] md:w-auto"
                  >
                    {buttonLabel}
                  </Link>
                  {secondaryButtonLabel && secondaryButtonHref ? (
                    <Link
                      href={secondaryButtonHref}
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-white/80 transition-colors duration-300 hover:border-white/40 hover:bg-white/[0.03] hover:text-white/90 md:w-auto"
                    >
                      {secondaryButtonLabel}
                    </Link>
                  ) : null}
                </div>
              </HomeReveal>
            </>
          ) : (
            <>
              <div className="min-w-0 w-full md:grow md:basis-0 md:pr-2">
                <h4 className="text-center text-3xl font-light leading-snug tracking-[-0.02em] text-white/95 md:text-left md:text-4xl lg:text-[2.15rem] lg:leading-tight">
                  {title}
                </h4>
              </div>
              <div className="flex w-full shrink-0 justify-center md:contents">
                <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center md:w-auto">
                  <Link
                    href={buttonHref}
                    className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/30 bg-transparent px-10 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-white/90 transition-colors duration-300 hover:border-white/50 hover:bg-white/[0.04] md:w-auto"
                  >
                    {buttonLabel}
                  </Link>
                  {secondaryButtonLabel && secondaryButtonHref ? (
                    <Link
                      href={secondaryButtonHref}
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-white/80 transition-colors duration-300 hover:border-white/40 hover:bg-white/[0.03] hover:text-white/90 md:w-auto"
                    >
                      {secondaryButtonLabel}
                    </Link>
                  ) : null}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );

    if (scrollReveal) {
      return (
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
          {inner}
        </div>
      );
    }

    return (
      <AnimatedSection className="flex min-h-0 flex-1 flex-col items-center justify-center">
        {inner}
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

  // variant === "dark" — aligned with animated band: light display + outlined primary control
  return (
    <section className="border-t border-white/[0.06] bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-10">
          <h4 className="max-w-lg text-2xl font-light leading-snug tracking-[-0.02em] text-white/95 md:text-3xl">
            {title}
          </h4>
          <Link
            href={buttonHref}
            className="shrink-0 inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-9 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-white/90 transition-colors duration-300 hover:border-white/50 hover:bg-white/[0.04]"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
