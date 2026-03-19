import { OurFavoriteThingsCategoryCarousel } from "@/component/OurFavoriteThingsCategoryCarousel";

type Favorite = {
  name?: string;
  href: string;
  img: string;
  alt: string;
  category: string;
};

const CATEGORY_ORDER = [
  "Dining & Nightlife",
  "Retail & Style",
  "Venues & Creative",
  "Health & Wellness",
  "Real Estate & Business",
  "More Favorites",
];

const favorites: Favorite[] = [
  {
    href: "https://www.theabbeyweho.com/",
    img: "https://cdn.lawlytics.com/law-media/uploads/830/104392/large/Favorite3.png?1593308368",
    alt: "The Abbey WeHo",
    category: "Dining & Nightlife",
  },
  {
    href: "https://briowt.com/",
    img: "/images/favorites/favorite-brio.webp",
    alt: "Brio",
    category: "Dining & Nightlife",
  },
  {
    href: "https://instagram.com/tonyynotstyle?igshid=c35cnto6g6s",
    img: "/images/favorites/favorite-tonywebp.webp",
    alt: "Tony Ynot Style",
    category: "Retail & Style",
  },
  {
    href: "https://Closetworld.com",
    img: "/images/favorites/favorite-closetWorld.webp",
    alt: "Closet World",
    category: "Retail & Style",
  },
  {
    href: "https://Closetsbydesign.com",
    img: "/images/favorites/favorite-closetByDesign.webp",
    alt: "Closets By Design",
    category: "Retail & Style",
  },
  {
    href: "http://glassieofficial.com",
    img: "/images/favorites/favorite-glassie.webp",
    alt: "Glassie",
    category: "Retail & Style",
  },
  {
    name: "The Houdini Estate",
    href: "https://www.thehoudiniestate.com",
    img: "/images/favorites/favorite-houdini.webp",
    alt: "The Houdini Estate",
    category: "Venues & Creative",
  },
  {
    href: "http://www.britneyegner.com",
    img: "/images/favorites/favorite-britney.webp",
    alt: "Britney Egner",
    category: "Venues & Creative",
  },
  {
    href: "https://www.cabinedit.com",
    img: "/images/favorites/favorite-cabin.webp",
    alt: "Cabin Edit",
    category: "Venues & Creative",
  },
  {
    href: "https://www.robertkotlermd.com",
    img: "/images/favorites/favorite-robert.webp",
    alt: "Robert Kotler MD",
    category: "Health & Wellness",
  },
  {
    href: "https://www.drlinder.com",
    img: "/images/favorites/favorite-stuart.webp",
    alt: "Dr. Linder",
    category: "Health & Wellness",
  },
  {
    href: "https://www.inhance.com",
    img: "/images/favorites/favorite-inhance.webp",
    alt: "Inhance",
    category: "Health & Wellness",
  },
  {
    href: "https://www.dealpointmerrill.com",
    img: "/images/favorites/favorite-dealpoint.webp",
    alt: "DealPoint Merrill",
    category: "Real Estate & Business",
  },
  {
    href: "#",
    img: "/images/favorites/favorite-icon-collective.webp",
    alt: "Icon Collective",
    category: "More Favorites",
  },
];

export function OurFavoriteThingsGrid() {
  const byCategory = CATEGORY_ORDER.map((cat) => ({
    title: cat,
    items: favorites.filter((f) => f.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:max-w-7xl md:px-10 md:py-20">
        {byCategory.map((group) => (
          <OurFavoriteThingsCategoryCarousel
            key={group.title}
            title={group.title}
            items={group.items}
          />
        ))}
      </div>
    </section>
  );
}
