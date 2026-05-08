import Link from "next/link";
import Image from "next/image";
import { FOOTER_COLUMNS, FOOTER_LEGAL_LINKS } from "@/data/navigation";

function SocialIcon({ href, sizeClass = "h-4 w-4" }: { href: string; sizeClass?: string }) {
  if (href.includes("x.com") || href.includes("twitter.com")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`${sizeClass} shrink-0`} aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  if (href.includes("linkedin.com")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`${sizeClass} shrink-0`} aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  return null;
}

const LEGAL_LINKS = FOOTER_LEGAL_LINKS;

export function Footer() {
  return (
    <footer className="relative z-20 border-t border-neutral-200 bg-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] md:inset-auto md:bottom-10 md:left-1/2 md:-translate-x-1/2 md:opacity-[0.07]">
          <Image
            src="/images/logos/rmc-logo-light.webp"
            alt=""
            width={540}
            height={168}
            sizes="(max-width: 768px) 320px, 540px"
            className="h-auto w-[140%] max-w-none md:w-[540px]"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="grid gap-10 sm:grid-cols-2">
              {FOOTER_COLUMNS.map((col) => (
                <div key={col.title}>
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                    {col.title}
                  </div>
                  <ul
                    className={
                      col.title === "Connect"
                        ? "mt-4 flex flex-wrap gap-5"
                        : "mt-4 space-y-3"
                    }
                  >
                    {col.links.map((l) => {
                      const external = l.href.startsWith("http");
                      const iconOnly = col.title === "Connect";
                      return (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            className={
                              iconOnly
                                ? "inline-flex items-center justify-center text-neutral-800 transition-colors hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                                : "inline-flex items-center gap-2 text-sm text-neutral-800 hover:text-neutral-950"
                            }
                            {...(iconOnly ? { "aria-label": l.label } : {})}
                            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          >
                            <SocialIcon href={l.href} sizeClass={iconOnly ? "h-5 w-5" : undefined} />
                            {!iconOnly ? l.label : null}
                          </Link>
                        </li>
                      );
                    })}
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

      <div className="relative z-10 border-t border-neutral-200">
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
