export type PracticeAreaSection = {
  heading?: string;
  paragraphs: string[];
};

export type PracticeArea = {
  slug: string;
  title: string;
  excerpt?: string;
  heroSubtitle?: string; // e.g. "Practice Areas" or "Litigation"
  heroImage: string;
  sections?: PracticeAreaSection[]; // heading + paragraphs; if omitted, use paragraphs
  paragraphs?: string[]; // legacy: flat list when sections not used
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "trials-commercial-litigation",
    title: "Trials and Commercial Litigation",
    heroImage: "/images/team/team-outdoor.webp",
    paragraphs: [
      "Successful litigation requires focus, strategy, direction, and knowledge. With a wealth of legal knowledge, tight team, and a unique litigation strategy, we charge hard, don't pull punches, and are goal oriented. At trial, winning is everything and losing is not an option. Whether it is a bet-the-company or any other case, we try every case like it is our own.",

      "Reeder McCreary professionals represent clients in complex trial and litigation matters across a wide variety of industries including real estate, franchise, hospitality, construction, entertainment, sports, energy, and finance.",

      "Chris has obtained dismissal of putative class action brought against large home improvement contractor and national franchisor alleging claims of false advertising and unfair business practices.",

      "Always focused on winning results, Reeder McCreary, LLP has a nationwide complex commercial trial and litigation practice. In an aggressive yet strategic manner, Reeder McCreary successfully represent clients in a vast array of industries including real estate, hospitality, franchising, sports, health care, entertainment, construction, and other investments.",

      "Reeder McCreary utilize a focused team methodology to trials and commercial litigation. This method, as opposed to spreading out a case among multiple lawyers with a discrete knowledge base, assures that every lawyer on the case, knows the case. This approach can and has accommodated any size trial or litigation and leads to the best results. It is also far more efficient than the normal approach to large litigation utilizing multiple lawyers.",

      "The proof is in the wins.",

      "At trial, Chris has obtained winning results for both plaintiffs and defendants ranging from large corporations to individuals in a broad variety of cases for, among others, real estate developers, real estate investment companies, commercial borrowers and lenders, medical management companies, investment firms, health care providers, and individual members/partners/shareholders/investors. To date, Chris' clients have won every trial that has gone to a verdict.",

      "For example, Chris won a jury verdict for a medical management company against an operating partner including an award of punitive damages. Chris won a defense jury verdict for an investment company against claims brought by a former investor. Chris won a plaintiff's bench verdict on behalf of an investor against a commercial hard money lender. Chris won a defense bench verdict in favor of a commercial lender against a former owner in a lender liability case asserting over $10 million in damages.",

      "In litigation, Chris has successfully prosecuted and defended claims for real estate developers, hospitality companies, fiduciaries, entertainment celebrities, commercial borrowers and lenders, numerous diverse business partners, and an entertainment business management company.",

      "For example, Chris has successfully litigated against billion dollar private equity funds, financial institutions, and a major international sports conglomerate on behalf of clients such as partners/members, investors, and a large corporation with an international franchise network. Chris has obtained results ranging from numerous multi-million dollar settlements, to eliminating an over $49 million preferred return claimed to be owed by a private equity fund and exiting it for less than one-half of its initial investment, to obtaining a release for real estate developers of an over $100 million guarantee and complete loan modification related to a major sports complex.",

      "Chris has also prosecuted individual and derivative claims for the minority owner of an aviation maintenance and repair company against the majority shareholder resulting in a favorable buy out of the client's interest in the corporation.",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    heroImage: "/images/team/team-outdoor.webp",
    paragraphs: [
      "Chris has represented some of the West Coast's premier real estate developers, building owners, and construction companies ranging from office/medical building owners to massive mixed-use developments and sports complexes. Chris and other Reeder McCreary professionals have successfully represented clients in acquisition/disposition disputes, partnership/investment disputes, development, due diligence, financing, contracting, public improvements, quality assurance, mechanics liens, licensing, insurance, landlord/tenant, and construction matters.",

      "Chris has won almost every real estate related case imaginable in several states from ultra-complex lender disputes involving hundreds of millions of dollars and high profile projects, to public improvement leasehold and development projects, to circumvention by joint venture partners in casino/condominium/hotel developments, to complex agreements involving technical development/construction obligations, to partner disputes related to the profitability of a project, to investor claims relating to missed opportunities, to disputes involving development rights and obligations, to disputes involving financial institution funding obligations, to disputes involving representations and warranties, to disputes involving deposits, to disputes involving brokerage commissions, and to unlawful detainer cases. We represent owners, buyers, sellers, joint venture partners, developers, lenders, lessors, lessees, and brokers.",

      "Chris has also successfully represented clients in the wind and solar power industries. Chris has obtained winning results for these clients with a particular emphasis on the complicated business issues and timing critical in these industries.",

      "Chris has also successfully represented clients in closing real estate acquisitions and dispositions as well as associated financing's involving major sports facilities, mixed-use developments, a world famous nightclub, industrial buildings, office buildings, restaurants, and bars. Reeder McCreary, LLP also provide day to day real estate advice, manage problem situations, and close commercial office/medical leases.",

      "Chris has also obtained a settlement massively reducing triple net lease charges for several groups of medical professionals based on claims of fraud in the procurement of leases and lease extensions after the acquisition of several Class A medical buildings.",
    ],
  },
  {
    slug: "corporate",
    title: "Corporate",
    heroImage: "/images/team/team-outdoor.webp",
    paragraphs: [
      "Chris serves as general counsel to several select clients including one of the largest home improvement contracting companies in the country with an international franchise network and a hospitality company that owns a world famous night club.",
      "Chris also makes deals. Big ones and small ones.",
      "Chris acted as general counsel in the re-acquisition of the majority interest in a major night club and associated financing, the $100 million sale of an international food distributor, closed several acquisitions of home improvement companies, managed the acquisition of a bottling company, closed on a transaction to acquire another nightclub along with a lease transaction, managed the re-financing of a credit facility for a home improvement holding company with a franchise network, and closed on an interest in a high end restaurant.",
      "Chris also has closed several acquisitions, related financing's, and lease transactions for real estate developer and holding company including an $18 million acquisition of an industrial building with unique title and zoning issues.",
      "Chris has also successfully represented a water container and distribution company in several acquisitions of retail locations as well as establishment of a franchising unit.",
    ],
  },
  {
    slug: "franchise-dealership",
    title: "Franchise and Dealership",
    heroImage: "/images/team/team-outdoor.webp",
    paragraphs: [
      "Reeder McCreary professionals successfully represent clients in a wide variety of national and international dealership/franchise litigation and transactional matters. Reeder McCreary professionals understand the importance and system wide concerns raised by dealership/franchise issues that make these “must win” situations.",

      "Reeder McCreary professionals provide general counsel and transactional services in this complicated field. Reeder McCreary professionals has represented clients in system wide negotiations with franchisee associations resulting in the successful establishment of a uniform system-wide franchise agreement.",

      "Reeder McCreary professionals provide Franchise Agreements and associated documents, counsel on system wide and individual franchise situations, and establish unique workout solutions for troubled franchises. Reeder McCreary professionals also manage and enforce trademark portfolios for franchise clients.",

      "Chris is national counsel to an international franchisor and has successfully established its rights under the Franchise Agreement against various franchisees seeking to depart the franchise system resulting in injunctions and monetary judgments in numerous jurisdictions.",

      "Representing another national franchisor/distributor, Chris and Reeder McCreary professionals defeated an association of franchisees/distributors, enforced the client's rights to impose a variety of charges on the network, and obtained an outright dismissal of the association's claims.",

      "Chris and Reeder McCreary professionals also successfully represented an automobile dealership in litigation over the sale of a $30 million dealership.",

      "Chris and Reeder McCreary professionals also successfully closed several franchise acquisitions for a national franchisor.",
    ],
  },
  {
    slug: "entertainment",
    title: "Entertainment",
    heroImage: "/images/team/team-outdoor.webp",
    paragraphs: [
      "The entertainment industry is unique with its own customs, expectations, and practices. Whether the matter involves a contract, copyright or trademark, licensing, employment, publicity, privacy, the media, internet, or trade secret, Reeder McCreary professionals aggressively seek creative solutions to win.",

      "Chris and Reeder McCreary professionals has successfully represented entertainment industry clients including major film production companies, business managers, film editors, magazine editors, producers, a recording artist, and sporting event promoters in a variety of cases.",

      "For example, Chris successfully represented a major film production company in litigation against another production company related to a major motion picture. Chris also developed and implemented the employment policies and procedures as well as artist/executive agreements for a film editing company accommodating for the unique structure of its working environment and structure. Chris also represented a film editing company in a dispute with an editor seeking to leave the company resulting in a restoration of the relationship. Finally, Chris has successfully represented numerous entertainment industry executives in employment and severance matters resulting in lucrative severance packages.",
    ],
  },
  {
    slug: "sports",
    title: "Sports",
    heroImage: "/images/team/team-outdoor.webp",
    paragraphs: [
      "Chris has won for clients in sports related litigations and transactions involving professional football, baseball, hockey, bicycling, Olympic basketball, and action sports.",

      "Chris has successfully represented event promoters, executives, agents, developers, and investors in a wide variety of matters including profits litigation, employment, and real estate development.",

      "Chris recently won a multimillion dollar settlement in profits litigation on behalf of the minority partners of a major sporting event against an international sport conglomerate.",
    ],
  },
  {
    slug: "employment",
    title: "Employment",
    heroImage: "/images/team/team-outdoor.webp",
    paragraphs: [
      "In employment and labor situations, issues of exposure, collateral consequences, and cost effectiveness often collide. Reeder McCreary professionals place particular emphasis on a strategy at the outset that takes into account each of these issues.",

      "Chris and Reeder McCreary professionals has won for clients in major wage and hour class action, discrimination, executive compensation, labor, fiduciary duty, trade secret litigation, and administrative proceedings.",

      "Chris has also represented several high level executives in employment agreement negotiations, severance issues, and termination disputes including the executive vice president of a major recording label, the executive editor of one of the most famous adult magazines, a professional hockey team executive, and the portfolio manager for a major recording artist.",
    ],
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    heroImage: "/images/team/team-outdoor.webp",
    paragraphs: [
      "Whether you have a copyright, trademark, or trade secret matter, the protection of your intellectual property is of utmost importance. Reeder McCreary professionals represent clients in diverse industries including franchise, hospitality, home improvement, entertainment, and food distribution.",

      "Chris and Reeder McCreary professionals have successfully prosecuted claims on behalf of and defended clients in trade secret, trademark, design patent, and copyright litigation including an international food distributor, one of the nation's largest home improvement contractors, and a national bottling company.",

      "With a full appreciation of the importance of their clients' creative works, branding, and trade names, Reeder McCreary professionals manage the trademark/service mark portfolios for several clients. Reeder McCreary professionals are also highly experienced in assisting clients license the use of their intellectual property.",
    ],
  },
  {
    slug: "white-collar-investigations",
    title: "White Collar Crime / Investigations",
    heroImage: "/images/team/team-outdoor.webp",
    paragraphs: [
      "Criminal, regulatory, and investigations are some of the most high risk matters for individuals and businesses. Reeder McCreary professionals handle these matters with the utmost discretion with the goal to obtain the best disposition obtainable in the shortest amount of time with a full understanding of the stress involved in these situations.",

      "As such, Chris' best wins in white collar crime cases have been avoiding charges being brought against clients altogether in numerous matters including on behalf of a real estate investor under investigation for the alleged bribing of a public official and a celebrity recording artist in a fiduciary matter.",

      "Chris has conducted numerous internal and independent investigations for clients in a wide variety of matters including embezzlement, theft from clients, fiduciary, accounting, and employment related issues greatly mitigating exposure to clients.",

      "Chris has also successfully represented clients in numerous regulatory investigative proceedings and enforcement actions involving securities, fiduciary, contracting, employment, and advertising.",
    ],
  },
];
