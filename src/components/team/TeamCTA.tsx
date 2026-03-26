import Link from "next/link";

export function TeamCTA({
  title,
  buttonLabel,
  buttonHref,
}: {
  title: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="team-cta-box flex flex-col items-start justify-between gap-6 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm md:flex-row md:items-center md:gap-10">
          <div>
            <h4 className="text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl lg:text-4xl">
              {title}
            </h4>
            <p className="mt-2 text-base text-neutral-600 md:text-lg">
              Get in touch with our team to discuss your matter.
            </p>
          </div>
          <Link
            href={buttonHref}
            className="shrink-0 inline-flex items-center justify-center rounded-xl bg-neutral-900 px-8 py-4 text-base font-semibold text-white hover:bg-neutral-800 md:text-lg"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
