"use client";

import { useRef } from "react";
import Link from "next/link";
import type { PracticeArea } from "@/types/practiceArea";

const DEFAULT_EXCERPT =
  "Overview, representative matters, and strategic counsel.";

export const PROFILE_PRACTICE_AREAS_HEADING_ID =
  "profile-practice-areas-heading";

export function ProfilePracticeAreasCarousel({
  areas,
}: {
  areas: PracticeArea[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const eps = 2;
    const maxLeft = Math.max(0, scrollWidth - clientWidth);
    const atStart = scrollLeft <= eps;
    const atEnd = scrollLeft >= maxLeft - eps;

    if (dir === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: "auto" });
      return;
    }
    if (dir === -1 && atStart) {
      el.scrollTo({ left: maxLeft, behavior: "auto" });
      return;
    }

    el.scrollBy({
      left: Math.round(el.clientWidth * 0.85) * dir,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  const showNav = areas.length > 1;

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h3
          id={PROFILE_PRACTICE_AREAS_HEADING_ID}
          className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55"
        >
          Practice Areas
        </h3>
        {showNav ? (
          <div className="flex gap-2">
            <button
              type="button"
              aria-controls="profile-practice-areas-track"
              aria-label="Previous practice areas"
              onClick={() => scrollByDir(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/25 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
            >
              <span aria-hidden>←</span>
            </button>
            <button
              type="button"
              aria-controls="profile-practice-areas-track"
              aria-label="Next practice areas"
              onClick={() => scrollByDir(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/25 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
            >
              <span aria-hidden>→</span>
            </button>
          </div>
        ) : null}
      </div>

      <div
        ref={scrollRef}
        id="profile-practice-areas-track"
        role="list"
        aria-label="Practice area links"
        className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 motion-reduce:scroll-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {areas.map((a) => (
          <div
            key={a.slug}
            role="listitem"
            className="w-[min(85vw,28rem)] shrink-0 snap-start sm:w-[28rem]"
          >
            <Link
              href={`/practice-areas/${a.slug}`}
              className="group flex h-full min-h-[12rem] flex-col rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 shadow-none transition duration-500 ease-out hover:border-white/12 hover:bg-white/[0.06] md:min-h-0 md:p-8"
            >
              <div className="flex flex-1 items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h4 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                    {a.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {a.excerpt ?? DEFAULT_EXCERPT}
                  </p>
                </div>
                <div className="hidden shrink-0 md:block">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-black/25 text-sm text-white/80 transition duration-500 ease-out group-hover:border-[#c8a24a]/55 group-hover:bg-black/35 group-hover:text-white md:h-10 md:w-10">
                    ↗
                  </span>
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-white/10 md:mt-7" />
              <div className="mt-4 text-[11px] font-medium uppercase tracking-[0.24em] text-white/55 md:mt-5">
                View Practice Area
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
