import { FIRM_NAME } from "@/data/firm";
import { practiceAreaNavLinks } from "@/data/practiceAreas";

export type NavLink = { label: string; href: string };
export type NavGroup = { title: string; links: NavLink[]; twoCols?: boolean };
export type NavSection = {
  label: string;
  leftBlurb: string;
  mainHref?: string;
  rows: NavGroup[][];
};

export type FooterColumn = { title: string; links: NavLink[] };

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "Professionals", href: "/professionals" },
      { label: "Practice Areas", href: "/practice-areas" },
      { label: "Case Results", href: "/case-results" },
      { label: "Our Favorite Things", href: "/our-favorite-things" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "X", href: "https://x.com/Reederllp" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/reeder-llp/",
      },
    ],
  },
];

export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Anti-spam", href: "/anti-spam" },
];

export const NAV_SECTIONS: NavSection[] = [
  {
    label: "Who We Are",
    leftBlurb: FIRM_NAME,
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
          title: "Practice Areas",
          twoCols: true,
          links: practiceAreaNavLinks,
        },
      ],
    ],
  },
];
