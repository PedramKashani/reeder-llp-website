"use client";

export type FavoriteThing = {
  name?: string;
  href: string;
  img: string;
  alt: string;
  category: string;
  /** Short editorial line — why we recommend it */
  description: string;
};

function EditorialFavoriteItem({ item }: { item: FavoriteThing }) {
  const label = item.name ?? item.alt;
  const isPlaceholder = item.href === "#";

  const content = (
    <>
      {/* Normalized logo stage — consistent weight on black; lifts faint marks */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-10 ring-1 ring-white/[0.12] md:p-12">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,255,255,0.08),transparent_65%)]"
          aria-hidden
        />
        <div className="relative flex min-h-[120px] items-center justify-center md:min-h-[140px]">
          <img
            src={item.img}
            alt=""
            className="max-h-[88px] w-auto max-w-[min(100%,260px)] object-contain brightness-[1.05] contrast-[1.02] transition duration-500 ease-out group-hover:brightness-110 md:max-h-[104px]"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-8 md:mt-10">
        <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
          {label}
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/65 md:text-base md:leading-relaxed">
          {item.description}
        </p>
        {!isPlaceholder ? (
          <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/50 transition duration-300 ease-out group-hover:gap-3 group-hover:text-white/95">
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
          <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-white/40">
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
      className="mb-28 border-b border-white/[0.07] pb-28 last:mb-0 last:border-0 last:pb-0 md:mb-36 md:pb-36"
      aria-labelledby={`favorites-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <header className="mb-14 max-w-2xl md:mb-20 lg:mb-24">
        <p
          id={`favorites-${title.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white md:text-xs"
        >
          {title}
        </p>
        <div className="mt-6 h-px w-20 bg-white/40 md:mt-7 md:w-24" aria-hidden />
        {intro ? (
          <p className="mt-8 text-lg font-normal leading-snug text-white/80 md:mt-10 md:text-xl md:leading-relaxed">
            {intro}
          </p>
        ) : null}
      </header>

      {/* Editorial grid: one column mobile, two on md+ so each pick has presence */}
      <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 md:gap-x-14 md:gap-y-20 lg:gap-x-16 lg:gap-y-24">
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
