import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative h-[60svh] min-h-[400px] w-full overflow-hidden">
        <img
          src="https://cdn.lawlytics.com/law-media/uploads/830/230565/large/IMG_9313-1.jpg?1680286844"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-16">
            <h6 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/90">
              About the Firm
            </h6>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              Reeder McCreary
            </h1>
          </div>
        </div>
      </div>

      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <div className="prose prose-neutral max-w-none">
            <p className="text-base leading-relaxed text-neutral-700 md:text-lg">
              With Chris Reeder as its lead trial lawyer, Reeder McCreary, LLP
              is a full service business litigation firm. Reeder McCreary
              professionals are focused, driven, and results oriented. Utilizing
              tight team-based litigation approach, trial preparation model, and
              strategy unique to each client, Reeder McCreary professionals
              represent a wide variety of clients from entrepreneurs to large
              international corporations in an infinite number of industries.
            </p>
            <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
              Chris Reeder also acts as general counsel to several companies and
              high net worth individuals. Chris has navigated clients through a
              large assortment of mergers, acquisitions, dispositions,
              financings, government investigations, franchising issues, and
              real estate transactions. Reeder McCreary professionals also
              provide day to day general counsel services to clients such as
              trademark registration, corporate compliance, real estate tax
              assessments, franchise transactions, and contractors licensing.
            </p>
            <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
              Reeder McCreary professionals have one goal: winning for the
              client. It is as simple as that and the results speak for
              themselves.
            </p>

            <div className="mt-16 flex flex-wrap gap-4 border-t border-neutral-200 pt-10">
              <Link
                href="/professionals"
                className="inline-flex items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Meet Our Team
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-8 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
