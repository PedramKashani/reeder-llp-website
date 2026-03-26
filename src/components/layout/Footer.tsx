import Link from "next/link";

type FooterLink = { label: string; href: string };
type FooterColumn = { title: string; links: FooterLink[] };

const FOOTER_COLUMNS: FooterColumn[] = [
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
      { label: "X", href: "https://x.com/ReederMcCreary" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/reeder-mccreary-llp-/",
      },
    ],
  },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Anti-spam", href: "/anti-spam" },
];

export function Footer() {
  return (
    <footer className="relative z-20 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="grid gap-10 sm:grid-cols-2">
              {FOOTER_COLUMNS.map((col) => (
                <div key={col.title}>
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                    {col.title}
                  </div>
                  <ul className="mt-4 space-y-3">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="text-sm text-neutral-800 hover:text-neutral-950"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Attorney Advertising
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                Results depend on a number of factors unique to each matter.
                Prior results do not guarantee a similar outcome.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {LEGAL_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Reeder McCreary, LLP</div>

          <div className="hidden sm:flex items-center gap-4">
            {LEGAL_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-neutral-900"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
