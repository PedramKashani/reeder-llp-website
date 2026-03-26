import Link from "next/link";
import type { Professional } from "@/data/professionals";

export function MeetOthers({
  others,
}: {
  current: Professional;
  others: Professional[];
}) {
  if (!others.length) return null;

  return (
    <section className="border-b border-black/10 bg-white">
      <div className="mx-auto w-full max-w-7xl px-8 py-16 md:px-12 md:py-20 lg:px-16">
        <div className="mb-10">
          <h3 className="text-base font-semibold uppercase tracking-[0.22em] text-black/70 md:text-lg">
            Meet the Others
          </h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p) => (
            <div
              key={p.slug}
              className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-black/5">
                <img
                  src={p.photoSmall || p.photoLarge || ""}
                  alt={p.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h5 className="text-xl font-semibold md:text-2xl">{p.name}</h5>
                {p.title ? (
                  <p className="mt-2 text-base text-black/70 md:text-lg">
                    {p.title}
                  </p>
                ) : null}

                <div className="mt-5">
                  <Link
                    href={`/professionals/${p.slug}`}
                    className="inline-flex rounded-full border border-black/15 px-5 py-2.5 text-base font-medium hover:bg-black/5"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
