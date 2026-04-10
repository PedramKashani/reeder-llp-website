import Image from "next/image";
import Link from "next/link";
import type { Professional } from "@/types/professional";
import { GRID_GAP_CARDS } from "@/lib/luxuryLayout";

export function MembersGrid({ professionals }: { professionals: Professional[] }) {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-8 pb-16 sm:px-6 md:pb-24">
        <div
          className={`grid grid-cols-1 justify-items-center sm:grid-cols-2 sm:justify-items-stretch lg:grid-cols-3 ${GRID_GAP_CARDS}`}
        >
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
    <div className="group relative w-full max-w-[min(100%,19.5rem)] overflow-hidden rounded-3xl border border-neutral-200 bg-white sm:max-w-none">
      <Link
        href={`/professionals/${slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View profile: ${name}`}
      />

      <div className="relative h-[440px] w-full">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 639px) 312px, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent opacity-95" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="text-lg font-semibold tracking-tight">{name}</div>
        <div className="mt-1 text-sm text-white/85">{role}</div>
      </div>
    </div>
  );
}
