import { AnimatedSection } from "@/components/AnimatedSection";
import { HomeReveal } from "@/components/HomeReveal";
import { KICKER_LUXURY } from "@/lib/luxuryLayout";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  id?: string;
  center?: boolean;
  /** Luxury firm wordmark: warm tones, wide tracking, engraved feel (home welcome) */
  variant?: "default" | "firmMark";
  /** Override inner shell (e.g. homepage editorial gutters) */
  shellClassName?: string;
  /** Homepage: staggered scroll reveal instead of legacy section animation */
  scrollReveal?: boolean;
};

function splitFirmTitle(title: string): {
  primary: string;
  secondary: string | null;
} {
  const trimmed = title.trim();
  const match = trimmed.match(/^(.+?),\s*(LLP)\s*$/i);
  if (match) {
    return { primary: match[1].trim(), secondary: match[2].toUpperCase() };
  }
  return { primary: trimmed, secondary: null };
}

const FIRM_HERO_SHADOW =
  "0 0.5px 0 rgba(255, 250, 240, 0.06), 0 -0.5px 0 rgba(0, 0, 0, 0.25)";

export function SectionHeading({
  kicker,
  title,
  id,
  center = false,
  variant = "default",
  shellClassName,
  scrollReveal = false,
}: SectionHeadingProps) {
  const isFirmMark = variant === "firmMark";
  const { primary, secondary } = isFirmMark
    ? splitFirmTitle(title)
    : { primary: title, secondary: null };

  const shell =
    shellClassName ??
    "section-content-in mx-auto w-full max-w-[90rem] px-8 py-12 md:px-12 md:py-16";

  const inner = (
    <div className={`${shell} ${center ? "text-center" : ""}`}>
      {scrollReveal ? (
        <HomeReveal delayMs={0}>
          <div
            className={
              isFirmMark
                ? `text-sm font-medium uppercase tracking-[0.42em] text-[#b8a88a]/70 md:text-base ${
                    center ? "text-center" : ""
                  }`
                : `${KICKER_LUXURY} ${center ? "text-center" : ""}`
            }
          >
            {kicker}
          </div>
        </HomeReveal>
      ) : (
        <div
          className={
            isFirmMark
              ? `text-sm font-medium uppercase tracking-[0.42em] text-[#b8a88a]/70 md:text-base ${
                  center ? "text-center" : ""
                }`
              : `${KICKER_LUXURY} ${center ? "text-center" : ""}`
          }
        >
          {kicker}
        </div>
      )}
      {isFirmMark ? (
        scrollReveal ? (
          <HomeReveal delayMs={140}>
            <h2
              className={`mt-10 text-[#ebe7df]/95 md:mt-12 ${center ? "text-center" : ""}`}
              style={{ textShadow: FIRM_HERO_SHADOW }}
            >
              <span className="inline font-light tracking-[0.12em] text-[clamp(2.25rem,4.2vw+1rem,3.5rem)] sm:text-[clamp(2.5rem,3.8vw+1.1rem,3.75rem)] md:tracking-[0.14em] md:text-[clamp(2.65rem,3.2vw+1.2rem,3.85rem)] lg:text-[clamp(2.75rem,2.8vw+1.25rem,4rem)] xl:text-[clamp(2.85rem,2.4vw+1.3rem,4.25rem)]">
                {primary}
              </span>
              {secondary ? (
                <>
                  <span className="inline font-light text-[#c9b896]/65">
                    ,{" "}
                  </span>
                  <span className="inline align-baseline text-lg font-medium tracking-[0.48em] text-[#d4c4a8]/90 sm:text-xl md:text-2xl lg:text-[1.65rem]">
                    {secondary}
                  </span>
                </>
              ) : null}
            </h2>
          </HomeReveal>
        ) : (
          <h2
            className={`mt-10 text-[#ebe7df]/95 md:mt-12 ${center ? "text-center" : ""}`}
            style={{ textShadow: FIRM_HERO_SHADOW }}
          >
            <span className="inline font-light tracking-[0.12em] text-[clamp(2.25rem,4.2vw+1rem,3.5rem)] sm:text-[clamp(2.5rem,3.8vw+1.1rem,3.75rem)] md:tracking-[0.14em] md:text-[clamp(2.65rem,3.2vw+1.2rem,3.85rem)] lg:text-[clamp(2.75rem,2.8vw+1.25rem,4rem)] xl:text-[clamp(2.85rem,2.4vw+1.3rem,4.25rem)]">
              {primary}
            </span>
            {secondary ? (
              <>
                <span className="inline font-light text-[#c9b896]/65">, </span>
                <span className="inline align-baseline text-lg font-medium tracking-[0.48em] text-[#d4c4a8]/90 sm:text-xl md:text-2xl lg:text-[1.65rem]">
                  {secondary}
                </span>
              </>
            ) : null}
          </h2>
        )
      ) : scrollReveal ? (
        <HomeReveal delayMs={140}>
          <h2
            className={`mt-6 text-[clamp(2.75rem,5vw+1rem,4.25rem)] font-extrabold tracking-tight text-white md:text-[clamp(3.25rem,4.5vw+1rem,4.75rem)] lg:text-[clamp(3.5rem,3.5vw+1.25rem,5.25rem)] ${
              center ? "text-center" : ""
            }`}
          >
            {title}
          </h2>
        </HomeReveal>
      ) : (
        <h2
          className={`mt-6 text-[clamp(2.75rem,5vw+1rem,4.25rem)] font-extrabold tracking-tight text-white md:text-[clamp(3.25rem,4.5vw+1rem,4.75rem)] lg:text-[clamp(3.5rem,3.5vw+1.25rem,5.25rem)] ${
            center ? "text-center" : ""
          }`}
        >
          {title}
        </h2>
      )}
    </div>
  );

  if (scrollReveal) {
    return (
      <div
        id={id}
        className="flex min-h-0 flex-1 flex-col justify-start md:justify-center"
      >
        {inner}
      </div>
    );
  }

  return (
    <AnimatedSection
      id={id}
      className="flex min-h-0 flex-1 flex-col justify-center"
    >
      {inner}
    </AnimatedSection>
  );
}
