import Link from "next/link";
import { professionals } from "@/data/professionals";

export function MembersGrid() {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {professionals.map((p) => (
            <MemberCard
              key={p.slug}
              slug={p.slug}
              name={p.name}
              role={p.title}
              imageUrl={p.photoLarge ?? p.photoSmall ?? ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({
  slug,
  name,
  role,
  imageUrl,
}: {
  slug: string;
  name: string;
  role: string;
  imageUrl: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white">
      <Link
        href={`/professionals/${slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View profile: ${name}`}
      />

      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="h-[440px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent opacity-95" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="text-lg font-semibold tracking-tight">{name}</div>
        <div className="mt-1 text-sm text-white/85">{role}</div>
      </div>
    </div>
  );
}
