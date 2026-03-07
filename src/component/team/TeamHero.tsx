"use client";

import Link from "next/link";

type Props = {
  backgroundImageUrl: string;
  subtitle: string; // "Toronto" / "Los Angeles"
  title: string; // "Legal Team" / "Professionals"
  scrollToId?: string;
};

export function TeamHero({
  backgroundImageUrl,
  subtitle,
  title,
  scrollToId = "team",
}: Props) {
  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImageUrl}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/45" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex min-h-[calc(100vh-72px)] items-end py-20 md:py-24">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/85">
              {subtitle}
            </div>
            <h1 className="mt-3 text-5xl font-semibold tracking-tight text-white md:text-7xl">
              {title}
            </h1>
          </div>
        </div>
      </div>

      <Link
        href={`#${scrollToId}`}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/30 bg-white/10 p-3 text-white backdrop-blur hover:bg-white/15"
        aria-label="Scroll to next section"
      >
        <span className="block text-xl leading-none">↓</span>
      </Link>
    </section>
  );
}
