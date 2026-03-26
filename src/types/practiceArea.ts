export type PracticeAreaSection = {
  heading?: string;
  paragraphs: string[];
};

export type PracticeArea = {
  slug: string;
  title: string;
  /** Shorter label for nav menus; falls back to title when omitted. */
  navLabel?: string;
  /** Short card / index summary; also a strong default for meta description when metaDescription is omitted. */
  excerpt?: string;
  heroSubtitle?: string;
  heroImage: string;
  /** Descriptive text for the hero image (non-decorative photography). */
  heroImageAlt?: string;
  /** Overrides the HTML page title for this practice route when set. */
  metaTitle?: string;
  /** Overrides meta description (and Open Graph description when wired) when set. */
  metaDescription?: string;
  sections?: PracticeAreaSection[];
  paragraphs?: string[];
};
