import type { Metadata } from "next";
import { OurFavoriteThingsGrid } from "@/component/OurFavoriteThingsGrid";

export const metadata: Metadata = {
  title: "Our Favorite Things | Reeder McCreary, LLP",
  description:
    "A curated list of restaurants, makers, venues, and professionals the team at Reeder McCreary, LLP recommends—places and people we trust enough to share with clients and friends.",
  alternates: {
    canonical: "/our-favorite-things",
  },
};

export default function OurFavoriteThingsPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Editorial text hero — no portrait; aligns with curated content below */}
      <header className="relative overflow-hidden border-b border-white/[0.08] bg-neutral-950">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_70%_at_50%_-30%,rgba(255,255,255,0.09),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1200px] px-6 py-16 md:px-12 md:py-20 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/50 md:text-xs">
              Recommendations
            </p>
            <div className="mt-5 h-px w-14 bg-white/35" aria-hidden />
            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white md:mt-10 md:text-5xl lg:text-6xl">
              Our Favorite Things
            </h1>
            <p className="mt-6 text-base font-normal leading-relaxed text-white/70 md:mt-8 md:text-lg md:leading-relaxed">
              A shortlist of restaurants, makers, venues, and professionals we rely
              on and recommend—places and people we&apos;d send a client or a friend
              without hesitation.
            </p>
          </div>
        </div>
      </header>

      <OurFavoriteThingsGrid />
    </main>
  );
}
