import type { FavoriteThing } from "@/types/favorite";

export const CATEGORY_ORDER = [
  "Dining & Nightlife",
  "Retail & Style",
  "Creative & Entertainment",
  "Health & Wellness",
  "Real Estate & Business",
  "More Favorites",
] as const;

export const CATEGORY_INTRO: Record<string, string> = {
  "Dining & Nightlife":
    "Restaurants and lounges we rely on for client dinners, celebrations, and nights worth remembering.",
  "Retail & Style":
    "Designers, craftspeople, and brands we trust when the details have to be right.",
  "Creative & Entertainment":
    "Production partners, entertainment companies, and distinctive settings we recommend when the work—or the occasion—has to feel intentional.",
  "Health & Wellness":
    "Practitioners and teams we suggest when discretion, expertise, and outcomes are non‑negotiable.",
  "Real Estate & Business":
    "Professional resources that meet the standard we hold in our own practice.",
  "More Favorites": "A handful of other names we're glad to pass along.",
};

export const favorites: FavoriteThing[] = [
  {
    href: "https://instagram.com/tonyynotstyle?igshid=c35cnto6g6s",
    img: "/images/favorites/favorite-tony.webp",
    alt: "Tony Ynot Style",
    category: "Retail & Style",
    description:
      "Personal styling with a clear point of view—sharp, tailored, and never overdone.",
  },
  {
    href: "https://closetworld.com",
    img: "/images/favorites/favorite-closetWorld.webp",
    alt: "Closet World",
    category: "Retail & Style",
    description:
      "Custom closets and storage that balance function with a clean, finished look.",
  },
  {
    href: "https://closetsbydesign.com",
    img: "/images/favorites/favorite-closetByDesign.webp",
    alt: "Closets By Design",
    category: "Retail & Style",
    description:
      "Thoughtful closet systems for homes where flow and order matter day to day.",
  },
  {
    href: "https://glassieofficial.com",
    img: "/images/favorites/favorite-glassie.webp",
    alt: "Glassie",
    category: "Retail & Style",
    description:
      "Glass art and objects that add depth and light—residential or commercial.",
  },
  {
    href: "https://www.cabinedit.com",
    img: "/images/favorites/favorite-cabin.webp",
    alt: "Cabin Edit",
    category: "Creative & Entertainment",
    description:
      "Entertainment-focused creative and editorial work with a refined, story-driven point of view.",
  },
  {
    href: "https://www.pistudios.com/",
    img: "/images/favorites/favorite-pure-imagination.webp",
    alt: "Pure Imagination Studios",
    category: "Creative & Entertainment",
    description:
      "Immersive storytelling and world-building across film, location-based experiences, and original IP.",
  },
  {
    name: "The Houdini Estate",
    href: "https://www.thehoudiniestate.com",
    img: "/images/favorites/favorite-houdini.webp",
    alt: "The Houdini Estate",
    category: "Creative & Entertainment",
    description:
      "A landmark Hollywood Hills estate for private events that need history, drama, and discretion.",
  },
  {
    href: "https://www.britneyegner.com",
    img: "/images/favorites/favorite-britney.webp",
    alt: "Brittany Egner",
    category: "Creative & Entertainment",
    description:
      "Photography and creative production with a cinematic eye and calm, professional execution on set.",
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
    href: "https://briowt.com/",
    img: "/images/favorites/favorite-brio.webp",
    alt: "Brio Water Technology",
    category: "Real Estate & Business",
    description:
      "Water dispensers, filtration systems, and hydration solutions for home and office—with strong inventory and dealer support.",
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
    href: "",
    img: "/images/favorites/favorite-icon-collective.webp",
    alt: "Icon Collective",
    category: "More Favorites",
    description:
      "A music and creative education community we follow—worth keeping on your radar.",
  },
];
