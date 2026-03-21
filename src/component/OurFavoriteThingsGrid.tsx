import {
  OurFavoriteThingsCategorySection,
  type FavoriteThing,
} from "@/component/OurFavoriteThingsCategoryCarousel";

const CATEGORY_ORDER = [
  "Dining & Nightlife",
  "Retail & Style",
  "Venues & Creative",
  "Health & Wellness",
  "Real Estate & Business",
  "More Favorites",
] as const;

const CATEGORY_INTRO: Record<string, string> = {
  "Dining & Nightlife":
    "Restaurants and lounges we rely on for client dinners, celebrations, and nights worth remembering.",
  "Retail & Style":
    "Designers, craftspeople, and brands we trust when the details have to be right.",
  "Venues & Creative":
    "Spaces and creative partners we’re proud to recommend when the setting matters as much as the work.",
  "Health & Wellness":
    "Practitioners and teams we suggest when discretion, expertise, and outcomes are non‑negotiable.",
  "Real Estate & Business":
    "Professional resources that meet the standard we hold in our own practice.",
  "More Favorites":
    "A handful of other names we’re glad to pass along.",
};

const favorites: FavoriteThing[] = [
  {
    href: "https://briowt.com/",
    img: "/images/favorites/favorite-brio.webp",
    alt: "Brio",
    category: "Dining & Nightlife",
    description:
      "Upscale Italian with a polished room—ideal for hosting clients or marking an occasion.",
  },
  {
    href: "https://instagram.com/tonyynotstyle?igshid=c35cnto6g6s",
    img: "/images/favorites/favorite-tonywebp.webp",
    alt: "Tony Ynot Style",
    category: "Retail & Style",
    description:
      "Personal styling with a clear point of view—sharp, tailored, and never overdone.",
  },
  {
    href: "https://Closetworld.com",
    img: "/images/favorites/favorite-closetWorld.webp",
    alt: "Closet World",
    category: "Retail & Style",
    description:
      "Custom closets and storage that balance function with a clean, finished look.",
  },
  {
    href: "https://Closetsbydesign.com",
    img: "/images/favorites/favorite-closetByDesign.webp",
    alt: "Closets By Design",
    category: "Retail & Style",
    description:
      "Thoughtful closet systems for homes where flow and order matter day to day.",
  },
  {
    href: "http://glassieofficial.com",
    img: "/images/favorites/favorite-glassie.webp",
    alt: "Glassie",
    category: "Retail & Style",
    description:
      "Glass art and objects that add depth and light—residential or commercial.",
  },
  {
    name: "The Houdini Estate",
    href: "https://www.thehoudiniestate.com",
    img: "/images/favorites/favorite-houdini.webp",
    alt: "The Houdini Estate",
    category: "Venues & Creative",
    description:
      "A landmark Hollywood Hills estate for events that need history, drama, and privacy.",
  },
  {
    href: "http://www.britneyegner.com",
    img: "/images/favorites/favorite-britney.webp",
    alt: "Britney Egner",
    category: "Venues & Creative",
    description:
      "Creative direction and production with a cinematic eye and calm execution.",
  },
  {
    href: "https://www.cabinedit.com",
    img: "/images/favorites/favorite-cabin.webp",
    alt: "Cabin Edit",
    category: "Venues & Creative",
    description:
      "Editorial, design-forward takes on cabin and lifestyle—refined without losing warmth.",
  },
  {
    href: "https://www.robertkotlermd.com",
    img: "/images/favorites/favorite-robert.webp",
    alt: "Robert Kotler MD",
    category: "Health & Wellness",
    description:
      "Facial plastic surgery with meticulous technique and an understated bedside manner.",
  },
  {
    href: "https://www.drlinder.com",
    img: "/images/favorites/favorite-stuart.webp",
    alt: "Dr. Linder",
    category: "Health & Wellness",
    description:
      "Plastic surgery practice known for clear counsel and natural, considered results.",
  },
  {
    href: "https://www.inhance.com",
    img: "/images/favorites/favorite-inhance.webp",
    alt: "Inhance",
    category: "Health & Wellness",
    description:
      "Aesthetic and wellness care in a setting that feels calm, private, and precise.",
  },
  {
    href: "https://www.dealpointmerrill.com",
    img: "/images/favorites/favorite-dealpoint.webp",
    alt: "DealPoint Merrill",
    category: "Real Estate & Business",
    description:
      "M&A and transaction support for deals where diligence and judgment move in lockstep.",
  },
  {
    href: "#",
    img: "/images/favorites/favorite-icon-collective.webp",
    alt: "Icon Collective",
    category: "More Favorites",
    description:
      "A music and creative education community we follow—worth keeping on your radar.",
  },
];

export function OurFavoriteThingsGrid() {
  const byCategory = CATEGORY_ORDER.map((cat) => ({
    title: cat,
    intro: CATEGORY_INTRO[cat] ?? "",
    items: favorites.filter((f) => f.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-12 md:py-32 lg:px-16">
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
