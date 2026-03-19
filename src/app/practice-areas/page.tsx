import Link from "next/link";
import { practiceAreas } from "@/data/practiceAreas";

export default function PracticeAreasIndex() {
  return (
    <div className="bg-black text-white">
      <section className="relative">
        <div className="relative h-[70svh] min-h-[560px] w-full overflow-hidden">
          <img
            src="/images/team/team-in-office-2.webp"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-6xl items-end px-6 pb-14">
              <div className="max-w-4xl">
                <h6 className="text-xs uppercase tracking-[0.32em] text-white/75">
                  Practice Areas
                </h6>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
                  Litigation & Business Counsel
                </h1>
                <div className="mt-6 flex items-center gap-6">
                  <div className="h-px w-24 bg-[#c8a24a]" />
                  <span className="text-xs uppercase tracking-[0.28em] text-white/70">
                    Reeder McCreary, LLP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-5 md:grid-cols-2">
            {practiceAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/practice-areas/${a.slug}`}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/7"
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
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white/80 transition group-hover:border-[#c8a24a]/60 group-hover:text-white">
                      ↗
                    </span>
                  </div>
                </div>

                <div className="mt-7 h-px w-full bg-white/10" />
                <div className="mt-5 text-xs uppercase tracking-[0.28em] text-white/60">
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
