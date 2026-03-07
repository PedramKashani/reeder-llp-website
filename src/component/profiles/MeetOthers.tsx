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
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-black/70">
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
                <h5 className="text-lg font-semibold">{p.name}</h5>
                {p.title ? (
                  <p className="mt-1 text-sm text-black/70">{p.title}</p>
                ) : null}

                <div className="mt-5">
                  <Link
                    href={`/professionals/${p.slug}`}
                    className="inline-flex rounded-full border border-black/15 px-4 py-2 text-sm font-medium hover:bg-black/5"
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
