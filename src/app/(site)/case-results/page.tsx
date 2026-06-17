import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CaseResultsList } from "@/components/case-results/CaseResultsList";
import { CASE_RESULTS } from "@/data/caseResults";
import { LOGO_SRC } from "@/data/firm";

export const metadata: Metadata = {
  title: "Case Results",
  description:
    "Representative matters and outcomes from Reeder LLP in complex commercial litigation, trials, and high-stakes disputes. Past results do not guarantee a similar outcome.",
  alternates: {
    canonical: "/case-results",
  },
};

export default function CaseResultsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <PageHero
        imageSrc={LOGO_SRC}
        imageClassName="scale-[0.55] object-contain object-center"
        className="case-results-hero"
        contentClassName="w-full px-6 pb-14 pt-20 md:px-12 md:pb-20 lg:px-16 lg:pb-24"
        subtitle="Highlighted"
        subtitleClassName="text-xs font-semibold uppercase tracking-[0.28em] text-white/90 md:text-sm"
        title="Case Results"
        titleClassName="mt-3 text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)] md:text-5xl lg:text-6xl xl:text-7xl"
      />

      <section className="border-b border-white/10 bg-neutral-950 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:max-w-7xl md:px-10 lg:px-12">
          <p className="mb-12 text-lg leading-relaxed text-white/[0.82] md:text-xl lg:text-2xl">
            Past results do not guarantee a similar outcome. Every case is
            different and results depend on a number of factors unique to each
            matter.
          </p>

          <CaseResultsList results={CASE_RESULTS} />

          <div className="mt-16 border-t border-white/10 pt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
