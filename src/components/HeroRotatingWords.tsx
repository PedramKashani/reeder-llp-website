"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { CursorBadgeTrail } from "@/components/CursorBadgeTrail";
import { ScrollDownButton } from "@/components/ScrollDownButton";
import { FIRM_NAME } from "@/data/firm";

const DISPLAY_SERIF =
  "var(--font-firm-serif), 'Cormorant Garamond', Georgia, 'Times New Roman', serif";

type HeroRotatingWordsProps = {
  backgroundImageUrl: string;
  kicker: string; // "We were born to be"
  words: string[]; // ["Trial Lawyers", "Deal Makers", "Litigators"]
  scrollToId?: string; // "welcome"
};

export function HeroRotatingWords({
  backgroundImageUrl,
  kicker,
  words,
  scrollToId = "welcome",
}: HeroRotatingWordsProps) {
  const safeWords = useMemo(
    () => (words.length ? words : ["Attorneys"]),
    [words],
  );
  const [idx, setIdx] = useState(0);
  const heroSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = window.setInterval(() => {
      setIdx((i) => (i + 1) % safeWords.length);
    }, 2400);
    return () => window.clearInterval(t);
  }, [safeWords.length]);

  return (
    <section
      ref={heroSectionRef}
      className="snap-section relative -mt-[4.25rem] w-full min-h-screen overflow-hidden bg-black"
    >
      {/* Portrait hero — tuned for chris-reeder-hero.webp (subject upper-right, desk on left) */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <Image
          src={backgroundImageUrl}
          alt=""
          fill
          priority
          sizes="100vw"
          className={[
            "h-full w-full object-cover",
            "object-[center_14%]",
            "brightness-[0.9] contrast-[1.06] saturate-[0.9]",
            "sm:object-[center_16%]",
            "md:object-[48%_12%]",
            "lg:object-[50%_14%]",
            "xl:object-[52%_16%]",
          ].join(" ")}
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/10" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 72% at 10% 90%, rgba(8, 8, 10, 0.48) 0%, rgba(8, 8, 10, 0.18) 44%, transparent 70%)",
          }}
        />
      </div>

      <h1 className="sr-only">{FIRM_NAME}</h1>

      <CursorBadgeTrail rootRef={heroSectionRef} />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl px-6 sm:px-10 lg:px-14 xl:max-w-7xl">
        <div className="flex min-h-screen w-full flex-col items-center justify-center pb-14 text-center md:items-start md:justify-end md:pb-28 md:pt-32 md:text-left">
          <div className="mx-auto w-full max-w-[22rem] md:mx-0 md:max-w-5xl">
            <div className="flex flex-col items-center gap-0 md:items-start">
              <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-[#e8e2d6]/85 sm:text-[13px] md:text-left md:text-sm md:tracking-[0.24em]">
                {kicker}
              </p>
              <div
                className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-white/55 to-transparent sm:w-18 md:mx-0 md:mt-3.5 md:w-24"
                aria-hidden
              />
              <p
                className="mt-3 text-center text-[clamp(2.85rem,6.2vw+0.85rem,4.1rem)] font-medium leading-[0.95] tracking-[-0.025em] text-[#faf8f4] antialiased sm:mt-3.5 sm:text-[clamp(3.15rem,5.4vw+1rem,4.5rem)] sm:leading-[0.94] md:mt-4 md:text-left md:text-[clamp(3.45rem,4.6vw+1.05rem,4.85rem)] lg:text-[clamp(3.75rem,3.8vw+1.1rem,5.35rem)] lg:leading-[0.92] xl:text-[clamp(4rem,3.1vw+1.2rem,5.85rem)]"
                style={{
                  fontFamily: DISPLAY_SERIF,
                  textShadow:
                    "0 2px 24px rgba(0,0,0,0.45), 0 12px 48px rgba(0,0,0,0.25)",
                }}
              >
                <span key={idx} className="hero-rotating-word inline-block">
                  {safeWords[idx]}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <ScrollDownButton scrollToId={scrollToId} />
    </section>
  );
}
