"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Professional } from "@/types/professional";

export const MEET_OTHERS_HEADING_ID = "meet-the-others-heading";

function AttorneyCard({ p }: { p: Professional }) {
  return (
    <Link
      href={`/professionals/${p.slug}`}
      className="group block h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] text-left transition-[border-color,box-shadow] duration-200 hover:border-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/30">
        <Image
          src={p.photoSmall || p.photoLarge || ""}
          alt={p.name}
          fill
          loading="lazy"
          fetchPriority="low"
          sizes="(max-width: 639px) 85vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-[center_30%] transition-transform duration-300 ease-out group-hover:scale-[1.02] sm:object-[center_28%] lg:object-[center_26%]"
        />
      </div>

      <div className="p-6">
        <h5 className="text-xl font-semibold text-white md:text-2xl">{p.name}</h5>
        {p.title ? (
          <p className="mt-2 text-base text-white/70 md:text-lg">{p.title}</p>
        ) : null}

        <div className="mt-5">
          <span className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-base font-medium text-white/90 transition-colors duration-200 group-hover:border-white/30 group-hover:bg-white/10">
            View Profile
          </span>
        </div>
      </div>
    </Link>
  );
}

export function MeetOthersClient({ others }: { others: Professional[] }) {
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

  const showMobileNav = others.length > 1;

  return (
    <>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
        <h3
          id={MEET_OTHERS_HEADING_ID}
          className="text-base font-semibold uppercase tracking-[0.22em] text-white/70 md:text-lg"
        >
          Meet the Others
        </h3>
        {showMobileNav ? (
          <div className="flex gap-2 sm:hidden">
            <button
              type="button"
              aria-controls="meet-others-track"
              aria-label="Previous attorneys"
              onClick={() => scrollByDir(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/25 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
            >
              <span aria-hidden>←</span>
            </button>
            <button
              type="button"
              aria-controls="meet-others-track"
              aria-label="Next attorneys"
              onClick={() => scrollByDir(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/25 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
            >
              <span aria-hidden>→</span>
            </button>
          </div>
        ) : null}
      </div>

      <div className="sm:hidden">
        <div
          ref={scrollRef}
          id="meet-others-track"
          role="list"
          aria-label="Other attorneys"
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 motion-reduce:scroll-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {others.map((p) => (
            <div
              key={p.slug}
              role="listitem"
              className="w-[min(85vw,22rem)] shrink-0 snap-start"
            >
              <AttorneyCard p={p} />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {others.map((p) => (
          <AttorneyCard key={p.slug} p={p} />
        ))}
      </div>
    </>
  );
}
