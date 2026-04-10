import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { practiceAreas } from "@/data/practiceAreas";
import { GRID_GAP_CARDS, SECTION_PAD_MAJOR } from "@/lib/luxuryLayout";

export const metadata: Metadata = {
  title: "Practice Areas | Reeder McCreary, LLP",
  description:
    "Explore Reeder McCreary, LLP’s practice areas—from commercial litigation and trials to corporate, real estate, franchise, entertainment, employment, and white collar matters.",
  alternates: {
    canonical: "/practice-areas",
  },
};

export default function PracticeAreasIndex() {
  return (
    <div className="bg-black text-white">
      <section className="relative">
        <div className="relative h-[min(68svh,36rem)] min-h-[480px] w-full overflow-hidden md:h-[min(72svh,40rem)] lg:h-[min(76svh,44rem)]">
          <Image
            src="/images/team/team-in-office-2.webp"
            alt="Reeder McCreary attorneys and professionals together in the firm’s office."
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-6xl items-end px-6 pb-14">
              <div className="max-w-4xl">
                <h6 className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/75 md:text-[11px]">
                  Practice Areas
                </h6>
                <h1 className="mt-3 text-[clamp(2rem,3.5vw+0.85rem,2.85rem)] font-semibold tracking-tight md:text-[clamp(2.25rem,2.8vw+0.95rem,3.35rem)] lg:text-[clamp(2.4rem,2.2vw+1rem,3.75rem)]">
                  Litigation & Business Counsel
                </h1>
                <div className="mt-5 flex items-center gap-6 md:mt-6">
                  <div className="h-px w-24 bg-[#c8a24a]" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/65 md:text-[11px]">
                    Reeder McCreary, LLP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black">
        <div className={`mx-auto max-w-6xl px-6 ${SECTION_PAD_MAJOR}`}>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55 md:text-[11px]">
            Our practice areas
          </h2>
          <div className={`mt-8 grid md:grid-cols-2 ${GRID_GAP_CARDS}`}>
            {practiceAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/practice-areas/${a.slug}`}
                className="group rounded-3xl border border-white/[0.08] bg-white/[0.04] p-8 shadow-none transition duration-500 ease-out hover:border-white/12 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {a.excerpt ??
                        "Overview, representative matters, and strategic counsel."}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/25 text-white/80 transition duration-500 ease-out group-hover:border-[#c8a24a]/55 group-hover:bg-black/35 group-hover:text-white">
                      ↗
                    </span>
                  </div>
                </div>

                <div className="mt-7 h-px w-full bg-white/10" />
                <div className="mt-5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/55 md:text-[11px]">
                  View Practice Area
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
