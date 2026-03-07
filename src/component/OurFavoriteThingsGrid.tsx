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
    img: "https://cdn.lawlytics.com/law-media/uploads/830/104394/large/Favorite2.png?1593308369",
    alt: "Brio",
    category: "Dining & Nightlife",
  },
  {
    href: "https://instagram.com/tonyynotstyle?igshid=c35cnto6g6s",
    img: "https://cdn.lawlytics.com/law-media/uploads/830/112369/large/TonyStyle.jpg?1598621030",
    alt: "Tony Ynot Style",
    category: "Retail & Style",
  },
  {
    href: "https://Closetworld.com",
    img: "https://cdn.lawlytics.com/law-media/uploads/830/104395/large/Favorite1.png?1593308369",
    alt: "Closet World",
    category: "Retail & Style",
  },
  {
    href: "https://Closetsbydesign.com",
    img: "https://cdn.lawlytics.com/law-media/uploads/830/103146/large/download.png?1592264521",
    alt: "Closets By Design",
    category: "Retail & Style",
  },
  {
    href: "http://glassieofficial.com",
    img: "https://cdn.lawlytics.com/law-media/uploads/830/107870/large/GlassieLogo.png?1594649098",
    alt: "Glassie",
    category: "Retail & Style",
  },
  {
    name: "The Houdini Estate",
    href: "https://www.thehoudiniestate.com",
    img: "https://cdn.lawlytics.com/law-media/uploads/830/107874/large/Houdini.png?1594649843",
    alt: "The Houdini Estate",
    category: "Venues & Creative",
  },
  {
    href: "http://www.britneyegner.com",
    img: "https://cdn.lawlytics.com/law-media/uploads/830/104389/large/Favorite7.png?1593308366",
    alt: "Britney Egner",
    category: "Venues & Creative",
  },
  {
    href: "https://www.cabinedit.com",
    img: "https://cdn.lawlytics.com/law-media/uploads/830/107869/large/CabinLogo.png?1594649097",
    alt: "Cabin Edit",
    category: "Venues & Creative",
  },
  {
    href: "https://www.robertkotlermd.com",
    img: "https://cdn.lawlytics.com/law-media/uploads/830/107871/large/Robert_20Logo.png?1594649098",
    alt: "Robert Kotler MD",
    category: "Health & Wellness",
  },
  {
    href: "https://www.drlinder.com",
    img: "https://cdn.lawlytics.com/law-media/uploads/830/107872/large/StuartLogo.png?1594649099",
    alt: "Dr. Linder",
    category: "Health & Wellness",
  },
  {
    href: "https://www.inhance.com",
    img: "https://cdn.lawlytics.com/law-media/uploads/830/104388/large/Favorite8.png?1593308365",
    alt: "Inhance",
    category: "Health & Wellness",
  },
  {
    href: "https://www.dealpointmerrill.com",
    img: "https://cdn.lawlytics.com/law-media/uploads/830/107873/large/DealPoint.png?1594649717",
    alt: "DealPoint Merrill",
    category: "Real Estate & Business",
  },
  {
    href: "#",
    img: "https://cdn.lawlytics.com/law-media/uploads/830/321574/original/Icon-Collective-logo-1.jpg?1740180254",
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
