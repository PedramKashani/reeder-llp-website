import Link from "next/link";
import Image from "next/image";
import { FOOTER_COLUMNS, FOOTER_LEGAL_LINKS } from "@/data/navigation";

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
