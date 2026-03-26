export type ProfessionalLink = {
  label: string;
  href: string;
};

export type Professional = {
  slug: string;
  name: string;
  title: string;

  officePhone?: string;
  directDial?: string;
  email?: string;

  photo?: string;
  photoSmall?: string;
  photoLarge?: string;
  badgeImages?: string[];

  links?: ProfessionalLink[];

  /** Practice area slugs this attorney is associated with (see `practiceAreas`). */
  relatedPracticeSlugs?: string[];

  sections: {
    background?: string[];
    winningResults?: string[];
    winningTrialLitigation?: string[];
    winningTransaction?: string[];
    education?: string[];
    associations?: string[];
    admissions?: string[];
    publications?: string[];
    awards?: string[];
    speakingEngagements?: string[];
  };
};
