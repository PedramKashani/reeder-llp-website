import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Cinematic hero – match case results/professionals style */}
      <div className="relative min-h-[85vh] w-full overflow-hidden sm:min-h-[90vh]">
        <img
          src="/images/team/team-in-office-1.webp"
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
          <div className="mx-auto w-full max-w-6xl px-8 pb-14 pt-20 md:px-12 md:pb-20 lg:px-16 lg:pb-24">
            <div className="mb-5 h-px w-14 bg-white/70" />
            <h6 className="text-sm font-semibold uppercase tracking-[0.28em] text-white/95 md:text-base">
              About the Firm
            </h6>
            <h1 className="mt-3 text-5xl font-semibold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)] md:text-6xl lg:text-7xl">
              Reeder McCreary
            </h1>
          </div>
        </div>
      </div>

      <section className="border-b border-white/10 bg-neutral-950 py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-8 md:px-12 lg:px-16">
          <div className="max-w-none space-y-10">
            <p className="text-xl leading-[1.8] text-white/95 md:text-2xl md:leading-[1.75]">
              With Chris Reeder as its lead trial lawyer, Reeder McCreary, LLP
              is a full service business litigation firm. Reeder McCreary
              professionals are focused, driven, and results oriented. Utilizing
              tight team-based litigation approach, trial preparation model, and
              strategy unique to each client, Reeder McCreary professionals
              represent a wide variety of clients from entrepreneurs to large
              international corporations in an infinite number of industries.
            </p>
            <p className="text-xl leading-[1.8] text-white/95 md:text-2xl md:leading-[1.75]">
              Chris Reeder also acts as general counsel to several companies and
              high net worth individuals. Chris has navigated clients through a
              large assortment of mergers, acquisitions, dispositions,
              financings, government investigations, franchising issues, and
              real estate transactions. Reeder McCreary professionals also
              provide day to day general counsel services to clients such as
              trademark registration, corporate compliance, real estate tax
              assessments, franchise transactions, and contractors licensing.
            </p>
            <p className="text-xl leading-[1.8] font-medium text-white md:text-2xl md:leading-[1.75]">
              Reeder McCreary professionals have one goal: winning for the
              client. It is as simple as that and the results speak for
              themselves.
            </p>

            <div className="mt-20 flex flex-wrap gap-5 border-t border-white/10 pt-12">
              <Link
                href="/professionals"
                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-base font-semibold text-neutral-900 transition hover:bg-white/90"
              >
                Meet Our Team
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-10 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
