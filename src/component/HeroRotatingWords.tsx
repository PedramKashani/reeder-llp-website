"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

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
    <section className="snap-section relative min-h-screen overflow-hidden">
      {/* Fixed hero image layer */}
      <div className="fixed inset-0 z-0 flex items-center justify-center bg-neutral-900">
        <img
          src={backgroundImageUrl}
          alt=""
          className="h-full w-full object-contain"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-neutral-950/40" />
      </div>

      <h1 className="sr-only">Reeder McCreary, LLP</h1>

      <div className="relative z-10 mx-auto flex max-w-6xl px-6">
        <div className="flex min-h-screen w-full items-end py-20 md:py-24">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
              {kicker}
            </div>

            <p className="mt-3 text-5xl font-semibold tracking-tight text-white md:text-7xl">
              <span className="inline-block">{safeWords[idx]}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to next section button */}
      <Link
        href={`#${scrollToId}`}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/30 bg-white/10 p-3 text-white backdrop-blur hover:bg-white/15"
        aria-label="Scroll to next section"
      >
        <span className="block text-xl leading-none">↓</span>
      </Link>
    </section>
  );
}
