"use client";

import type { FavoriteThing } from "@/types/favorite";

export type { FavoriteThing } from "@/types/favorite";

function EditorialFavoriteItem({ item }: { item: FavoriteThing }) {
  const label = item.name ?? item.alt;
  const isPlaceholder = item.href === "#";

  const content = (
    <>
      {/* Logo stage — white field so marks read clearly on the dark page */}
      <div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-200/90 sm:p-5 md:p-6">
        <div className="relative flex min-h-[168px] items-center justify-center sm:min-h-[184px] md:min-h-[200px]">
          <img
            src={item.img}
            alt=""
            className="max-h-[144px] w-auto max-w-[min(100%,480px)] object-contain object-center transition duration-500 ease-out group-hover:opacity-95 sm:max-h-[160px] md:max-h-[176px]"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-5 md:mt-6">
        <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
          {label}
        </h3>
        <p className="mt-2 max-w-md text-[15px] leading-relaxed text-white/65 md:mt-2.5 md:text-base md:leading-relaxed">
          {item.description}
        </p>
        {!isPlaceholder ? (
          <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/50 transition duration-300 ease-out group-hover:gap-3 group-hover:text-white/95 md:mt-5">
            <span className="relative">
              Visit
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/70 transition-all duration-300 ease-out group-hover:w-full" />
            </span>
            <span
              className="translate-x-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
              aria-hidden
            >
              →
            </span>
          </span>
        ) : (
          <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-white/40 md:mt-5">
            Coming soon
          </p>
        )}
      </div>
    </>
  );

  if (isPlaceholder) {
    return (
      <article
        className="group flex h-full flex-col opacity-95"
        aria-label={item.alt}
      >
        {content}
      </article>
    );
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col outline-none transition-transform duration-500 ease-out hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
      aria-label={`Visit ${label}`}
    >
      {content}
    </a>
  );
}

export function OurFavoriteThingsCategorySection({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: FavoriteThing[];
}) {
  return (
    <section
      className="mb-16 border-b border-white/[0.07] pb-16 last:mb-0 last:border-0 last:pb-0 md:mb-20 md:pb-20 lg:mb-24 lg:pb-24"
      aria-labelledby={`favorites-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <header className="mb-8 max-w-2xl md:mb-10 lg:mb-12">
        <p
          id={`favorites-${title.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white md:text-xs"
        >
          {title}
        </p>
        <div className="mt-4 h-px w-20 bg-white/40 md:mt-5 md:w-24" aria-hidden />
        {intro ? (
          <p className="mt-5 text-lg font-normal leading-snug text-white/80 md:mt-6 md:text-xl md:leading-relaxed">
            {intro}
          </p>
        ) : null}
      </header>

      {/* Editorial grid: one column mobile, two on md+ so each pick has presence */}
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 md:gap-x-12 md:gap-y-12 lg:gap-x-14 lg:gap-y-14">
        {items.map((item, idx) => (
          <div
            key={`${item.href}-${idx}`}
            className={
              items.length === 1
                ? "md:col-span-2 md:max-w-xl md:justify-self-start"
                : ""
            }
          >
            <EditorialFavoriteItem item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
