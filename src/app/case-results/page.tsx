import Link from "next/link";
import { CaseResultsList } from "@/component/case-results/CaseResultsList";

const CASE_RESULTS = [
  {
    title: "Multi-Million Dollar Settlement for Major Sporting Event Partners",
    description:
      "Chris has obtained a multi-million dollar settlement for the minority members of a company that operates one of the nation's premier multi-day sporting events against a national event and venue owner in profits litigation involving claims of breach of contract, fraud, and breach of fiduciary duty.",
  },
  {
    title: "Plaintiff Jury Verdict with Award of Punitive Damages",
    description:
      "Chris won a jury verdict for a medical management company against an operating partner including an award of punitive damages.",
  },
  {
    title: "Defense Jury Verdict for Investment Company",
    description:
      "Chris obtained a defense jury verdict for an investment company and its principal in a case brought by a former investor alleging fraud and breach of contract among other claims.",
  },
  {
    title: "Company Saved from Private Equity Takeover",
    description:
      'Chris prosecuted claims on behalf of a large home-furnishings company and national franchisor for fraud, breach of contract, intentional interference, and unlawful business practices against private equity funds and their principals seeking to take over the company by claiming that the owner was "out of the money", ultimately resulting in the elimination of the entire preferred return (in excess of $49 million) associated with stock issued to the private equity funds. The case also resulted in the surrender of the preferred shares to the company for less than half of the amount of the original principal investment of the private equity funds.',
  },
  {
    title: "Defense Verdict in Lender Liability Case",
    description:
      "Chris defended at trial a loan acquisition company against claims brought by a borrower who claimed that he had formed a joint venture with the client to obtain a loan pool from the FDIC and alleged claims including breach of a joint venture agreement, promissory estoppel, and wrongful foreclosure resulting in a judgment for the client.",
  },
  {
    title: "Plaintiff Verdict for Loan Investor",
    description:
      "Chris obtained a judgment at trial on behalf of a loan investor against a lender arising out of defaulted loans on various real estate projects due to inadequate due diligence performed by the lender prior to funding the loan, inappropriate construction draw approvals, and disregard of the investor's instructions during the foreclosure process.",
  },
  {
    title: "Closed: $100 Million Acquisition of International Food Distributor",
    description:
      "Chris served as General Counsel in the $100 million acquisition of an international food distributor.",
  },
  {
    title:
      "Deals Made:  World Famous Nightclub Reacquired and Portfolio Expanded",
    description:
      "Chris served as General Counsel to a hospitality company in the reacquisition of the majority interest in a world famous nightclub including an $11.9 million financing package, the subsequent acquisition and re-branding of a competing nightclub, and an investment in a high-end restaurant.",
  },
];

export default function CaseResultsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Cinematic hero — same style as professionals pages */}
      <div className="case-results-hero relative min-h-[85vh] w-full overflow-hidden sm:min-h-[90vh]">
        <img
          src="/images/chris-duncan/chris-duncan-1.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
          aria-hidden
        />
        <div className="relative z-10 flex min-h-[85vh] flex-col justify-end sm:min-h-[90vh]">
          <div className="w-full px-6 pb-14 pt-20 md:px-12 md:pb-20 lg:px-16 lg:pb-24">
            <div className="mb-5 h-px w-14 bg-white/70" />
            <h6 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/90 md:text-sm">
              Highlighted
            </h6>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)] md:text-5xl lg:text-6xl xl:text-7xl">
              Case Results
            </h1>
          </div>
        </div>
      </div>

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
