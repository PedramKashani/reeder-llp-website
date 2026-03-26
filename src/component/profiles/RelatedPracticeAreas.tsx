import Link from "next/link";
import type { PracticeArea } from "@/types/practiceArea";
import type { Professional } from "@/types/professional";

export function RelatedPracticeAreas({
  profile,
  practiceAreas,
}: {
  profile: Professional;
  practiceAreas: PracticeArea[];
}) {
  const slugs = profile.relatedPracticeSlugs;
  if (!slugs?.length) return null;

  const areas = slugs
    .map((s) => practiceAreas.find((a) => a.slug === s))
    .filter((a): a is PracticeArea => Boolean(a));

  if (!areas.length) return null;

  return (
    <section className="border-b border-black/10 bg-white">
      <div className="mx-auto w-full max-w-7xl px-8 py-12 md:px-12 md:py-16 lg:px-16">
        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
          Practice Areas
        </h3>
        <ul className="mt-6 divide-y divide-black/[0.06]">
          {areas.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/practice-areas/${a.slug}`}
                className="block py-3.5 text-base font-medium tracking-tight text-neutral-900 transition hover:underline hover:decoration-neutral-400 hover:underline-offset-4 md:text-[17px]"
              >
                {a.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
