"use client";

import { useState, useEffect, useRef } from "react";

type Favorite = {
  name?: string;
  href: string;
  img: string;
  alt: string;
  category: string;
};

function FavoriteCard({ item }: { item: Favorite }) {
  const card = (
    <div className="group flex h-full min-h-[320px] flex-col rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 ease-out hover:scale-[1.15] hover:bg-white/7 hover:shadow-2xl hover:shadow-black/30 md:min-h-[360px] md:p-10">
      <div className="flex h-40 flex-1 items-center justify-center md:h-48">
        <img
          src={item.img}
          alt={item.alt}
          className="max-h-40 w-auto max-w-full object-contain opacity-90 transition group-hover:opacity-100 md:max-h-48"
          loading="lazy"
        />
      </div>
      {item.name ? (
        <>
          <div className="mt-8 h-px w-full bg-white/10" />
          <h5 className="mt-5 text-lg font-semibold tracking-tight text-white md:text-xl">
            {item.name}
          </h5>
          <div className="mt-3 text-base uppercase tracking-[0.28em] text-white/60">
            Visit
          </div>
        </>
      ) : (
        <div className="mt-8 text-base uppercase tracking-[0.28em] text-white/60">
          Visit
        </div>
      )}
    </div>
  );

  if (item.href === "#") {
    return <div className="block">{card}</div>;
  }
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={item.alt}
      className="block h-full"
    >
      {card}
    </a>
  );
}

const ROTATE_INTERVAL_MS = 4000;
const CARD_WIDTH = 420;
const CARD_GAP = 28;

export function OurFavoriteThingsCategoryCarousel({
  title,
  items,
}: {
  title: string;
  items: Favorite[];
}) {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [items.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || items.length <= 1) return;
    const scrollLeft = index * (CARD_WIDTH + CARD_GAP);
    el.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }, [index, items.length]);

  return (
    <div className="mb-14 last:mb-0 md:mb-20">
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-white/70 md:mb-8">
        {title}
      </h2>
      <div
        ref={scrollRef}
        className="scrollbar-hide -mx-6 overflow-x-auto overflow-y-hidden px-6 md:-mx-10 md:px-10"
        style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
      >
        <div className="flex gap-5 py-2 pr-4 md:gap-6 md:pr-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 overflow-visible"
              style={{
                width: CARD_WIDTH,
                scrollSnapAlign: "start",
                scrollSnapStop: "always",
              }}
            >
              <FavoriteCard item={item} />
            </div>
          ))}
        </div>
      </div>
      {items.length > 1 && (
        <div className="mt-6 flex justify-center gap-1.5" aria-hidden>
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white/90" : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to item ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
