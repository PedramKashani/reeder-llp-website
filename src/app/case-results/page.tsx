import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CaseResultsList } from "@/components/case-results/CaseResultsList";
import { CASE_RESULTS } from "@/data/caseResults";

export const metadata: Metadata = {
  title: "Case Results | Reeder McCreary, LLP",
  description:
    "Representative matters and outcomes from Reeder McCreary, LLP in complex commercial litigation, trials, and high-stakes disputes. Past results do not guarantee a similar outcome.",
  alternates: {
    canonical: "/case-results",
  },
};

export default function CaseResultsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <PageHero
        imageSrc="/images/logos/RMC-Logo-White-Bkgd.webp"
        imageClassName="object-contain object-center"
        className="case-results-hero"
        contentClassName="w-full px-6 pb-14 pt-20 md:px-12 md:pb-20 lg:px-16 lg:pb-24"
        subtitle="Highlighted"
        subtitleClassName="text-xs font-semibold uppercase tracking-[0.28em] text-white/90 md:text-sm"
        title="Case Results"
        titleClassName="mt-3 text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)] md:text-5xl lg:text-6xl xl:text-7xl"
      />

      <section className="border-b border-neutral-200 bg-white py-16 md:py-24 text-neutral-900">
        <div className="mx-auto max-w-6xl px-6 md:max-w-7xl md:px-10 lg:px-12 [&_h3]:text-neutral-900 [&_p]:text-neutral-700">
          <p className="mb-12 text-lg leading-relaxed md:text-xl lg:text-2xl">
            Past results do not guarantee a similar outcome. Every case is
            different and results depend on a number of factors unique to each
            matter.
          </p>

          <CaseResultsList results={CASE_RESULTS} />

          <div className="mt-16 border-t border-neutral-200 pt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
