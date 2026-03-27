import { practiceAreaNavLinks } from "@/data/practiceAreas";

export type NavLink = { label: string; href: string };
export type NavGroup = { title: string; links: NavLink[]; twoCols?: boolean };
export type NavSection = {
  label: string;
  leftBlurb: string;
  mainHref?: string;
  rows: NavGroup[][];
};

export const NAV_SECTIONS: NavSection[] = [
  {
    label: "Who We Are",
    leftBlurb: "Reeder McCreary, LLP",
    rows: [
      [
        {
          title: "Firm",
          links: [
            { label: "About", href: "/about" },
            { label: "Attorneys", href: "/professionals" },
            { label: "Case Results", href: "/case-results" },
          ],
        },
        {
          title: "Connect",
          links: [
            { label: "Contact", href: "/contact" },
            { label: "Our Favorite Things", href: "/our-favorite-things" },
          ],
        },
      ],
    ],
  },
  {
    label: "What We Do",
    leftBlurb: "Practice Areas",
    mainHref: "/practice-areas",
    rows: [
      [
        {
          title: "Core",
          twoCols: true,
          links: practiceAreaNavLinks,
        },
      ],
    ],
  },
];
