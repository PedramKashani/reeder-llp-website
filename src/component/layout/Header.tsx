"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type NavLink = { label: string; href: string };
type NavGroup = { title: string; links: NavLink[]; twoCols?: boolean };
type NavSection = {
  label: string;
  leftBlurb: string;
  mainHref?: string; // optional: clicking the label goes here (e.g. "What We Do" → /practice-areas)
  rows: NavGroup[][];
};

const NAV_SECTIONS: NavSection[] = [
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
          links: [
            {
              label: "Trials & Commercial Litigation",
              href: "/practice-areas/trials-commercial-litigation",
            },
            { label: "Real Estate", href: "/practice-areas/real-estate" },
            { label: "Corporate", href: "/practice-areas/corporate" },
            {
              label: "Franchise & Dealership",
              href: "/practice-areas/franchise-dealership",
            },
            { label: "Entertainment", href: "/practice-areas/entertainment" },
            { label: "Sports", href: "/practice-areas/sports" },
            { label: "Employment", href: "/practice-areas/employment" },
            {
              label: "Intellectual Property",
              href: "/practice-areas/intellectual-property",
            },
            {
              label: "White Collar / Investigations",
              href: "/practice-areas/white-collar-investigations",
            },
          ],
        },
      ],
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>(
    {
      "Who We Are": false,
      "What We Do": false,
    },
  );

  const sectionByLabel = useMemo(() => {
    const map: Record<string, NavSection> = {};
    for (const s of NAV_SECTIONS) map[s.label] = s;
    return map;
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_SECTIONS.map((section) => (
            <DesktopNavItem key={section.label} section={section} />
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <PrimaryCTA />
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-neutral-900" />
            <span className="block h-0.5 w-5 bg-neutral-900" />
            <span className="block h-0.5 w-5 bg-neutral-900" />
          </div>
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-neutral-600">Menu</div>
              <button
                type="button"
                className="rounded-lg px-2 py-1 text-sm text-neutral-700 hover:bg-neutral-100"
                onClick={() => setMobileOpen(false)}
              >
                Close
              </button>
            </div>

            <div className="mt-4 space-y-2">
              <Link
                href="/"
                className="block rounded-xl px-3 py-3 text-sm font-medium hover:bg-neutral-50"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              {Object.keys(mobileExpanded).map((label) => {
                const s = sectionByLabel[label];
                const expanded = mobileExpanded[label];
                return (
                  <div
                    key={label}
                    className="rounded-2xl border border-neutral-200"
                  >
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-3 py-3 text-left text-sm font-medium"
                      onClick={() =>
                        setMobileExpanded((prev) => ({
                          ...prev,
                          [label]: !prev[label],
                        }))
                      }
                    >
                      <span>{label}</span>
                      <span className="text-neutral-500">
                        {expanded ? "–" : "+"}
                      </span>
                    </button>

                    {expanded && (
                      <div className="px-3 pb-3">
                        <div className="text-xs uppercase tracking-widest text-neutral-500">
                          {s.leftBlurb}
                        </div>

                        <div className="mt-3 space-y-4">
                          {s.rows.flat().map((g) => (
                            <div key={g.title}>
                              <div className="text-xs font-semibold text-neutral-700">
                                {g.title}
                              </div>
                              <div className="mt-2 space-y-1">
                                {g.links.map((l) => (
                                  <Link
                                    key={l.href}
                                    href={l.href}
                                    className="block rounded-lg px-2 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {l.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white hover:bg-neutral-800"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* --------------------------- Subcomponents --------------------------- */

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-2xl border border-neutral-200 bg-white">
        <span className="text-sm font-semibold">RM</span>
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-tight">
          Reeder McCreary
        </div>
        <div className="text-xs text-neutral-600">Attorneys at Law</div>
      </div>
    </Link>
  );
}

function PrimaryCTA() {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
    >
      Contact
    </Link>
  );
}

function DesktopNavItem({ section }: { section: NavSection }) {
  const labelContent = (
    <>
      {section.label}
      <span className="text-neutral-400">▾</span>
    </>
  );
  return (
    <div className="relative group">
      {section.mainHref ? (
        <Link
          href={section.mainHref}
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-800 hover:text-neutral-950"
        >
          {labelContent}
        </Link>
      ) : (
        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-800 hover:text-neutral-950"
        >
          {labelContent}
        </button>
      )}

      {/* Dropdown */}
      <div
        className="
          pointer-events-none absolute left-0 top-full z-50 mt-3 w-[min(980px,calc(100vw-3rem))]
          opacity-0 translate-y-2 transition
          group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0
          group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0
        "
      >
        <div className="rounded-2xl border border-neutral-200 bg-white shadow-xl">
          <div className="grid grid-cols-[240px_1fr] gap-10 p-8">
            {/* Left blurb */}
            <div className="pr-2">
              <div className="text-xs uppercase tracking-widest text-neutral-500">
                {section.leftBlurb}
              </div>
              <div className="mt-3 text-sm text-neutral-700">
                Explore pages under{" "}
                <span className="font-semibold">{section.label}</span>.
              </div>
            </div>

            {/* Right groups */}
            <div className="space-y-8">
              {section.rows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-2 gap-8">
                  {row.map((group) => (
                    <div key={group.title}>
                      <div className="text-xs uppercase tracking-widest text-neutral-500">
                        {group.title}
                      </div>

                      <div
                        className={
                          "mt-4 grid gap-2 " +
                          (group.twoCols ? "sm:grid-cols-2" : "")
                        }
                      >
                        {group.links.map((l) => (
                          <Link
                            key={l.href}
                            href={l.href}
                            className="flex items-center gap-3 rounded-xl p-3 text-sm text-neutral-800 hover:bg-neutral-50"
                          >
                            <span className="grid h-8 w-8 place-items-center rounded-xl border border-neutral-200 bg-white text-xs font-semibold">
                              •
                            </span>
                            <span>{l.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-neutral-200 px-8 py-4">
            <Link
              href="/contact#section-form"
              className="text-xs text-neutral-600 hover:text-neutral-900"
            >
              Want to talk? Let's start with a quick message.
            </Link>
            <Link
              href="/contact#section-form"
              className="rounded-xl border border-neutral-200 px-3 py-2 text-sm font-medium hover:bg-neutral-50"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
