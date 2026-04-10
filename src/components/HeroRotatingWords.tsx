"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ScrollDownButton } from "@/components/ScrollDownButton";

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

  useEffect(() => {
    const t = window.setInterval(() => {
      setIdx((i) => (i + 1) % safeWords.length);
    }, 2400);
    return () => window.clearInterval(t);
  }, [safeWords.length]);

  return (
    <section className="snap-section relative min-h-[min(70svh,52rem)] overflow-hidden md:min-h-[min(100svh,56rem)]">
      {/* Fixed hero image layer */}
      <div className="fixed inset-0 z-0 bg-neutral-900">
        <div className="absolute inset-0">
          <Image
            src={backgroundImageUrl}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        </div>
        {/* Top-weighted scrim: nav legibility */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10, 10, 10, 0.52) 0%, rgba(10, 10, 10, 0.2) 30%, rgba(10, 10, 10, 0.07) 48%, transparent 64%)",
          }}
          aria-hidden
        />
        {/* Soft pool behind hero type (bottom-left) — keeps cream/white copy readable on bright photo */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 110% 65% at 12% 88%, rgba(8, 8, 10, 0.48) 0%, rgba(8, 8, 10, 0.18) 42%, transparent 68%)",
          }}
          aria-hidden
        />
      </div>

      <h1 className="sr-only">Reeder McCreary, LLP</h1>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl px-6 sm:px-10 lg:px-14 xl:max-w-7xl">
        <div className="flex min-h-[min(70svh,52rem)] w-full flex-col justify-start items-center pb-20 pt-24 text-center md:min-h-[min(100svh,56rem)] md:items-start md:justify-end md:pb-28 md:pt-32 md:text-left">
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
