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
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm md:flex-row md:items-center">
          <h4 className="text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
            {title}
          </h4>
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
