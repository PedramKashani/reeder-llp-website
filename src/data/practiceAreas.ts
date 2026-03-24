export type PracticeAreaSection = {
  heading?: string;
  paragraphs: string[];
};

export type PracticeArea = {
  slug: string;
  title: string;
  /** Short card / index summary; also a strong default for meta description when metaDescription is omitted. */
  excerpt?: string;
  heroSubtitle?: string; // e.g. "Practice Areas" or "Litigation"
  heroImage: string;
  /** Descriptive text for the hero image (non-decorative photography). */
  heroImageAlt?: string;
  /** Overrides the HTML page title for this practice route when set. */
  metaTitle?: string;
  /** Overrides meta description (and Open Graph description when wired) when set. */
  metaDescription?: string;
  sections?: PracticeAreaSection[]; // heading + paragraphs; if omitted, use paragraphs
  paragraphs?: string[]; // legacy: flat list when sections not used
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "trials-commercial-litigation",
    title: "Trials and Commercial Litigation",
    excerpt:
      "Complex commercial trial and litigation for plaintiffs and defendants—disputes across real estate, franchise, hospitality, construction, entertainment, sports, energy, and finance.",
    heroImage: "/images/team/team-outdoor.webp",
    heroImageAlt:
      "Reeder McCreary attorneys and professionals standing together outdoors in business attire.",
    metaTitle: "Commercial Litigation & Trial Counsel | Reeder McCreary, LLP",
    metaDescription:
      "Commercial trial and litigation counsel for companies, investors, and individuals in contract, partnership, lender, and high-value business disputes nationwide.",
    sections: [
      {
        paragraphs: [
          "Successful litigation requires focus, strategy, direction, and knowledge. With a wealth of legal knowledge, tight team, and a unique litigation strategy, we charge hard, don't pull punches, and are goal oriented. At trial, winning is everything and losing is not an option. Whether it is a bet-the-company or any other case, we try every case like it is our own.",
        ],
      },
      {
        heading: "Practice Scope and Approach",
        paragraphs: [
          "Reeder McCreary professionals represent clients in complex trial and litigation matters across a wide variety of industries including real estate, franchise, hospitality, construction, entertainment, sports, energy, and finance.",

          "Chris has obtained dismissal of putative class action brought against large home improvement contractor and national franchisor alleging claims of false advertising and unfair business practices.",

          "Always focused on winning results, Reeder McCreary, LLP has a nationwide complex commercial trial and litigation practice. In an aggressive yet strategic manner, Reeder McCreary successfully represent clients in a vast array of industries including real estate, hospitality, franchising, sports, health care, entertainment, construction, and other investments.",

          "Reeder McCreary utilize a focused team methodology to trials and commercial litigation. This method, as opposed to spreading out a case among multiple lawyers with a discrete knowledge base, assures that every lawyer on the case, knows the case. This approach can and has accommodated any size trial or litigation and leads to the best results. It is also far more efficient than the normal approach to large litigation utilizing multiple lawyers.",
        ],
      },
      {
        heading: "Trial Experience",
        paragraphs: [
          "The proof is in the wins.",

          "At trial, Chris has obtained winning results for both plaintiffs and defendants ranging from large corporations to individuals in a broad variety of cases for, among others, real estate developers, real estate investment companies, commercial borrowers and lenders, medical management companies, investment firms, health care providers, and individual members/partners/shareholders/investors. To date, Chris' clients have won every trial that has gone to a verdict.",

          "For example, Chris won a jury verdict for a medical management company against an operating partner including an award of punitive damages. Chris won a defense jury verdict for an investment company against claims brought by a former investor. Chris won a plaintiff's bench verdict on behalf of an investor against a commercial hard money lender. Chris won a defense bench verdict in favor of a commercial lender against a former owner in a lender liability case asserting over $10 million in damages.",
        ],
      },
      {
        heading: "Litigation Experience",
        paragraphs: [
          "In litigation, Chris has successfully prosecuted and defended claims for real estate developers, hospitality companies, fiduciaries, entertainment celebrities, commercial borrowers and lenders, numerous diverse business partners, and an entertainment business management company.",

          "For example, Chris has successfully litigated against billion dollar private equity funds, financial institutions, and a major international sports conglomerate on behalf of clients such as partners/members, investors, and a large corporation with an international franchise network. Chris has obtained results ranging from numerous multi-million dollar settlements, to eliminating an over $49 million preferred return claimed to be owed by a private equity fund and exiting it for less than one-half of its initial investment, to obtaining a release for real estate developers of an over $100 million guarantee and complete loan modification related to a major sports complex.",

          "Chris has also prosecuted individual and derivative claims for the minority owner of an aviation maintenance and repair company against the majority shareholder resulting in a favorable buy out of the client's interest in the corporation.",
        ],
      },
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    excerpt:
      "Developers, owners, lenders, and investors—litigation and transactions involving development, finance, leasing, construction, and mixed-use and sports-adjacent projects.",
    heroImage: "/images/team/team-outdoor.webp",
    heroImageAlt:
      "Reeder McCreary attorneys and professionals standing together outdoors in business attire.",
    metaTitle: "Real Estate Law & Litigation | Reeder McCreary, LLP",
    metaDescription:
      "Real estate counsel in disputes and closings: development, partnership and lender conflicts, acquisitions, leasing, and renewable energy–related projects for West Coast and multi-state clients.",
    sections: [
      {
        paragraphs: [
          "Chris has represented some of the West Coast's premier real estate developers, building owners, and construction companies ranging from office/medical building owners to massive mixed-use developments and sports complexes. Chris and other Reeder McCreary professionals have successfully represented clients in acquisition/disposition disputes, partnership/investment disputes, development, due diligence, financing, contracting, public improvements, quality assurance, mechanics liens, licensing, insurance, landlord/tenant, and construction matters.",
        ],
      },
      {
        heading: "Litigation and Dispute Resolution",
        paragraphs: [
          "Chris has won almost every real estate related case imaginable in several states from ultra-complex lender disputes involving hundreds of millions of dollars and high profile projects, to public improvement leasehold and development projects, to circumvention by joint venture partners in casino/condominium/hotel developments, to complex agreements involving technical development/construction obligations, to partner disputes related to the profitability of a project, to investor claims relating to missed opportunities, to disputes involving development rights and obligations, to disputes involving financial institution funding obligations, to disputes involving representations and warranties, to disputes involving deposits, to disputes involving brokerage commissions, and to unlawful detainer cases. We represent owners, buyers, sellers, joint venture partners, developers, lenders, lessors, lessees, and brokers.",
        ],
      },
      {
        heading: "Renewable Energy",
        paragraphs: [
          "Chris has also successfully represented clients in the wind and solar power industries. Chris has obtained winning results for these clients with a particular emphasis on the complicated business issues and timing critical in these industries.",
        ],
      },
      {
        heading: "Transactions and Leasing",
        paragraphs: [
          "Chris has also successfully represented clients in closing real estate acquisitions and dispositions as well as associated financing's involving major sports facilities, mixed-use developments, a world famous nightclub, industrial buildings, office buildings, restaurants, and bars. Reeder McCreary, LLP also provide day to day real estate advice, manage problem situations, and close commercial office/medical leases.",

          "Chris has also obtained a settlement massively reducing triple net lease charges for several groups of medical professionals based on claims of fraud in the procurement of leases and lease extensions after the acquisition of several Class A medical buildings.",
        ],
      },
    ],
  },
  {
    slug: "corporate",
    title: "Corporate",
    excerpt:
      "Outside general counsel and transactional counsel for select companies—governance, compliance, and complex deals across acquisitions, financings, and operations.",
    heroImage: "/images/team/team-outdoor.webp",
    heroImageAlt:
      "Reeder McCreary attorneys and professionals standing together outdoors in business attire.",
    metaTitle: "Corporate Law & Outside General Counsel | Reeder McCreary, LLP",
    metaDescription:
      "Reeder McCreary serves as strategic outside general counsel on governance, compliance, and high-stakes corporate transactions for growth-oriented and multi-jurisdictional clients.",
    sections: [
      {
        paragraphs: [
          "Corporate law governs the structure and day-to-day operations of businesses, including transactions, compliance, governance, and strategic growth.",
        ],
      },
      {
        heading: "Outside General Counsel",
        paragraphs: [
          "Chris serves as general counsel to a select group of clients, including one of the nation’s largest home improvement contracting companies with an international franchise network, as well as a hospitality company that owns a world-renowned nightclub and other investments and properties. Reeder McCreary, LLP functions as an extension of in-house legal departments, managing entity compliance, human resource matters, and ongoing operational needs.",
        ],
      },
      {
        heading: "Transactions and Acquisitions",
        paragraphs: [
          "Chris also makes deals. Big ones and small ones.",

          "He has acted as general counsel in the re-acquisition of a majority interest in a major nightclub and its related financing, the $100 million sale of an international food distributor, and has closed multiple acquisitions involving home improvement companies. His experience also includes managing the acquisition of a bottling company, negotiating the purchase and lease of another nightclub, managing the re-financing of a credit facility for a home improvement holding company with a franchise network, and closing on an ownership interest in a high-end restaurant.",

          "In addition, Chris has closed numerous acquisitions, related financings, and lease transactions for real estate developers and holding companies, including an $18 million acquisition of an industrial property with complex title and zoning issues.",

          "Chris has also successfully represented a water container and distribution company in several retail acquisitions and the establishment of a franchising unit.",
        ],
      },
    ],
  },
  {
    slug: "franchise-dealership",
    title: "Franchise and Dealership",
    excerpt:
      "Franchise and dealership disputes, system-wide negotiations, agreement drafting, and transactions for franchisors, franchisees, manufacturers, and dealers.",
    heroImage: "/images/team/team-outdoor.webp",
    heroImageAlt:
      "Reeder McCreary attorneys and professionals standing together outdoors in business attire.",
    metaTitle: "Franchise & Dealership Law | Reeder McCreary, LLP",
    metaDescription:
      "Litigation and transactional work for franchise and dealership systems—agreements, network charges, association disputes, trademark enforcement, and national counsel roles.",
    sections: [
      {
        paragraphs: [
          "Franchise and dealership law governs the relationships between franchisors, franchisees, manufacturers, and dealers which often involve high-stakes disputes, system-wide negotiations, and complex transactional matters that can impact brands and networks.",
        ],
      },
      {
        heading: "Scope of Representation",
        paragraphs: [
          "Reeder McCreary professionals successfully represent clients in a wide range of national and international dealerships, franchise litigation, and transactional matters. They understand the importance and system-wide implications of franchise and dealership issues that often make these “must win” situations.",

          "Reeder McCreary professionals provide general counsel and transactional services in this complex field. They have represented clients in system-wide negotiations with franchisee associations, resulting in the successful establishment of uniform, system-wide franchise agreements.",

          "The firm prepares franchise agreements and related documents, advises on both system-wide and individual franchise matters, and develops tailored workout solutions for troubled franchises. Reeder McCreary professionals also manage and enforce trademark portfolios for franchise clients.",
        ],
      },
      {
        heading: "Enforcement and Disputes",
        paragraphs: [
          "Chris serves as national counsel to an international franchisor and has successfully established its rights under the Franchise Agreements against franchisees attempting to depart the system, resulting in injunctions and monetary judgments across multiple jurisdictions.",

          "In representing another national franchisor/distributor, Chris and Reeder McCreary professionals defeated an association of franchisees/distributors, enforced the client’s rights to impose various network charges, and secured a complete dismissal of the association’s claims.",

          "Chris and Reeder McCreary professionals also successfully represented an automobile dealership in litigation involving the sale of a $30 million dealership.",
        ],
      },
      {
        heading: "Transactions",
        paragraphs: [
          "They have also successfully closed several franchise acquisitions for a national franchisor.",
        ],
      },
    ],
  },
  {
    slug: "entertainment",
    title: "Entertainment",
    excerpt:
      "Film, music, and media clients—contracts, licensing, employment, publicity and privacy issues, and dispute resolution for production companies, artists, and executives.",
    heroImage: "/images/team/team-outdoor.webp",
    heroImageAlt:
      "Reeder McCreary attorneys and professionals standing together outdoors in business attire.",
    metaTitle: "Entertainment Law | Reeder McCreary, LLP",
    metaDescription:
      "Entertainment industry counsel covering agreements, copyright and trademark questions, employment and severance, and litigation for production, editorial, and management clients.",
    sections: [
      {
        paragraphs: [
          "The entertainment industry operates within a distinct set of customs, expectations, and business practices. Whether the matter involves contracts, copyright or trademark issues, licensing, employment, publicity, privacy, media, internet, or trade secrets, Reeder McCreary delivers strategic, creative solutions tailored to each client’s needs.",
        ],
      },
      {
        heading: "Clients",
        paragraphs: [
          "Chris and Reeder McCreary professionals have successfully represented a wide range of entertainment industry clients, including major film production companies, business managers, film and magazine editors, producers, recording artists, and sporting event promoters.",
        ],
      },
      {
        heading: "Representative Matters",
        paragraphs: [
          "For example, Chris successfully represented a major film production company in litigation against another production company related to a major motion picture. Chris has also developed and implemented employment policies and procedures as well as artist/executive agreements for a film editing company, carefully tailored to its unique operational structure. In addition, Chris has represented a film editing company in a dispute with an editor seeking to leave the company resulting in a restoration of the relationship. Finally, Chris has successfully represented numerous entertainment industry executives in employment and severance matters resulting in lucrative severance packages.",
        ],
      },
    ],
  },
  {
    slug: "sports",
    title: "Sports",
    excerpt:
      "Sports-related litigation and deals for promoters, executives, agents, developers, and investors—league and event economics, employment, and venue-linked real estate.",
    heroImage: "/images/team/team-outdoor.webp",
    heroImageAlt:
      "Reeder McCreary attorneys and professionals standing together outdoors in business attire.",
    metaTitle: "Sports Law | Reeder McCreary, LLP",
    metaDescription:
      "Counsel in sports industry disputes and transactions, including profits litigation, employment matters, and development work tied to teams, events, and related investments.",
    sections: [
      {
        paragraphs: [
          "Sports law focuses on the legal and business issues that arise in the sports industry. It covers areas such as financial disputes, contracts, employment matters, and transactions involving teams, athletes, agents, event promoters, and investors. Whether it’s resolving conflicts or advising on complex deals, sports law requires practical understanding of both the industry and the laws within that industry—an approach that is reflected in Chris’s work across a wide range of sports and high-stake matters.",
        ],
      },
      {
        heading: "Scope of Representation",
        paragraphs: [
          "Chris has successfully represented clients in sports-related litigation and transactions involving professional football, baseball, hockey, cycling, Olympic basketball, and action sports.",

          "He has represented event promoters, executives, agents, developers, and investors in a wide range of matters, including profits litigation, employment disputes, and real estate development related to sports ventures.",
        ],
      },
      {
        heading: "Representative Matters",
        paragraphs: [
          "Most recently, Chris secured a multimillion-dollar settlement in a profits dispute on behalf of minority partners of a major sporting event against an international sport conglomerate.",
        ],
      },
    ],
  },
  {
    slug: "employment",
    title: "Employment",
    excerpt:
      "Wage-and-hour class actions, discrimination and executive disputes, trade secrets, policies, investigations, and agreements for employers and senior individuals.",
    heroImage: "/images/team/team-outdoor.webp",
    heroImageAlt:
      "Reeder McCreary attorneys and professionals standing together outdoors in business attire.",
    metaTitle: "Employment Law | Reeder McCreary, LLP",
    metaDescription:
      "Employment and labor counsel: class and collective actions, discrimination and compensation disputes, trade secret litigation, executive agreements, and internal and regulatory investigations.",
    sections: [
      {
        paragraphs: [
          "In employment and labor matters, issues of exposure, collateral consequences, and cost-effectiveness often intersect. Reeder McCreary approaches these matters strategically from the outset, developing solutions that account for each of these competing considerations.",
        ],
      },
      {
        heading: "Litigation and Class Actions",
        paragraphs: [
          "Chris and the professionals at Reeder McCreary have achieved successful outcomes for clients in matters involving wage and hour class actions, discrimination claims, executive compensation disputes, labor issues, fiduciary duty claims, trade secret litigation, and administrative proceedings.",

          "Chris has significantly mitigated wage and hour exposure to several large home improvement companies in multiple class actions. He has also successfully prosecuted claims against aircraft industry executives for breach of fiduciary duty and usurpation of corporate opportunities and protected the trade secrets of an international food distributor in litigation against former employees seeking to establish a competing business.",
        ],
      },
      {
        heading: "Counseling and Investigations",
        paragraphs: [
          "Beyond litigation, Reeder McCreary professionals advise companies on the development of employment policies and procedures, handle day-to-day employment issues, and negotiate executive and artist employment agreements. Chris has also managed high-risk employment situations, including internal investigations, independent investigations, regulatory inquiries, and reduction-in-force events.",
        ],
      },
      {
        heading: "Executive Matters",
        paragraphs: [
          "Chris has represented numerous high-level executives in employment agreement negotiations, severance matters, and termination disputes, including the executive vice president of a major recording label, the executive editor of one of the country’s most widely known adult magazines, a professional hockey team executive, and the portfolio manager for a major recording artist.",
        ],
      },
    ],
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    excerpt:
      "Trademarks, copyrights, trade secrets, and design patents—enforcement, defense, portfolio management, and licensing for operating companies across several industries.",
    heroImage: "/images/team/team-outdoor.webp",
    heroImageAlt:
      "Reeder McCreary attorneys and professionals standing together outdoors in business attire.",
    metaTitle: "Intellectual Property Law | Reeder McCreary, LLP",
    metaDescription:
      "Intellectual property litigation and counseling: trade secrets, trademarks, copyrights, and design patents, plus portfolio stewardship and licensing for franchise, hospitality, and distribution clients.",
    sections: [
      {
        paragraphs: [
          "Intellectual property law protects the creations that drive your business, including your brand, content, designs, and proprietary information, from unauthorized use and unfair competition. Whether your matter involves copyrights, trademarks, or trade secrets, protecting your intellectual property is critical.",
        ],
      },
      {
        heading: "Industries Served",
        paragraphs: [
          "Reeder McCreary represents clients across a range of industries, including franchise, hospitality, home improvement, entertainment, and food distribution.",
        ],
      },
      {
        heading: "Enforcement and Litigation",
        paragraphs: [
          "Chris and Reeder McCreary professionals have successfully prosecuted and defended claims involving trade secrets, trademarks, design patents, and copyrights, representing clients such as an international food distributor, one of the nation’s largest home improvement contractors, and a national bottling company.",
        ],
      },
      {
        heading: "Portfolios and Licensing",
        paragraphs: [
          "With a clear understanding of the value of creative works, branding, and trade names, Reeder McCreary manages trademark and service mark portfolios for multiple clients and advises them on the strategic licensing of intellectual property.",
        ],
      },
    ],
  },
  {
    slug: "white-collar-investigations",
    title: "White Collar Crime / Investigations",
    excerpt:
      "Government and internal investigations, regulatory proceedings, and defense-oriented strategy in fraud, fiduciary, securities, and related white collar matters.",
    heroImage: "/images/team/team-outdoor.webp",
    heroImageAlt:
      "Reeder McCreary attorneys and professionals standing together outdoors in business attire.",
    metaTitle: "White Collar Defense & Investigations | Reeder McCreary, LLP",
    metaDescription:
      "White collar and investigations practice: internal and independent investigations, regulatory and enforcement matters, and early-stage strategy for individuals and businesses.",
    sections: [
      {
        paragraphs: [
          "White collar crime and investigations involve high-stakes, non-violent matters such as fraud, bribery, and breaches of fiduciary duty. These matters present significant risks for both individuals and businesses. Reeder McCreary approaches these cases with efficiency, discretion, and a clear focus on achieving the best possible outcome in the shortest amount of time.",
        ],
      },
      {
        heading: "Defense and Investigations",
        paragraphs: [
          "Chris has secured notable results in white collar matters, including preventing charges from being filed altogether in cases involving alleged bribery and fiduciary disputes for high-profile clients.",

          "Chris has also conducted internal and independent investigations across a wide range of issues, including embezzlement, client fund misappropriation, accounting irregularities, and employment matters, helping clients identify risks early and mitigate potential exposure.",
        ],
      },
      {
        heading: "Regulatory Proceedings",
        paragraphs: [
          "In addition, Chris represents clients in regulatory proceedings and enforcement actions involving securities, fiduciary duties, contracting, employment, and advertising.",
        ],
      },
    ],
  },
];
