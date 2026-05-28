import { OurFavoriteThingsCategorySection } from "@/components/OurFavoriteThingsCategoryCarousel";
import { CATEGORY_ORDER, CATEGORY_INTRO, favorites } from "@/data/favorites";

export function OurFavoriteThingsGrid() {
  const byCategory = CATEGORY_ORDER.map((cat) => ({
    title: cat,
    intro: CATEGORY_INTRO[cat] ?? "",
    items: favorites.filter((f) => f.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
        {byCategory.map((group) => (
          <OurFavoriteThingsCategorySection
            key={group.title}
            title={group.title}
            intro={group.intro}
            items={group.items}
          />
        ))}
      </div>
    </section>
  );
}
