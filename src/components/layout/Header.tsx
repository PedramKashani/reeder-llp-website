"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_SECTIONS, type NavSection } from "@/data/navigation";
import { Logo } from "@/components/layout/Logo";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [desktopOpen, setDesktopOpen] = useState<"Who We Are" | "What We Do" | null>(null);
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

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroIntegrated = !isScrolled;
  const editorialMode = true;

  return (
    <header
      key={pathname}
      className={
        "sticky top-0 z-50 transition-all duration-500 " +
        (editorialMode
          ? heroIntegrated
            ? "bg-transparent border-transparent"
            : "border-transparent bg-neutral-950/30 backdrop-blur-md"
          : "border-b border-neutral-200/90 bg-white/95 shadow-[0_8px_28px_rgba(0,0,0,0.08)] backdrop-blur")
      }
    >
      <div
        className={
          "mx-auto flex items-center justify-between transition-all duration-500 " +
          (editorialMode
            ? "max-w-none px-8 lg:px-14 " +
              (isScrolled ? "py-2 lg:py-2.5" : "py-2.5 lg:py-3")
            : "max-w-6xl px-6 py-1")
        }
      >
        <Logo heroMode={editorialMode} subtleShrink={editorialMode && isScrolled} />

        {editorialMode && (
          <nav className="hidden items-center gap-10 md:flex lg:gap-12">
            <button
              type="button"
              onClick={() =>
                setDesktopOpen((prev) =>
                  prev === "Who We Are" ? null : "Who We Are",
                )
              }
              className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/80 transition-colors duration-300 ease-out hover:text-white"
            >
              Who We Are
            </button>
            <button
              type="button"
              onClick={() =>
                setDesktopOpen((prev) =>
                  prev === "What We Do" ? null : "What We Do",
                )
              }
              className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/80 transition-colors duration-300 ease-out hover:text-white"
            >
              What We Do
            </button>
            <Link
              href="/contact"
              className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/80 transition-colors duration-300 ease-out hover:text-white"
            >
              Contact
            </Link>
          </nav>
        )}

        <button
          type="button"
          className={
            "inline-flex h-9 items-center gap-1.5 rounded-xl border px-2.5 text-sm transition " +
            (editorialMode ? "md:hidden " : "") +
            (editorialMode
              ? "border-white/25 bg-transparent text-white/90 hover:bg-white/8"
              : "border-neutral-200/70 bg-white/75 text-neutral-700 hover:bg-white")
          }
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.14em]">
            Menu
          </span>
          <div className="flex flex-col gap-1.5">
            <span
              className={
                "block h-0.5 w-5 " + (editorialMode ? "bg-white" : "bg-neutral-900")
              }
            />
            <span
              className={
                "block h-0.5 w-5 " + (editorialMode ? "bg-white" : "bg-neutral-900")
              }
            />
            <span
              className={
                "block h-0.5 w-5 " + (editorialMode ? "bg-white" : "bg-neutral-900")
              }
            />
          </div>
        </button>
      </div>

      {desktopOpen && (
        <div className="animate-fade-in hidden border-t border-white/15 bg-neutral-950/72 shadow-[0_24px_48px_rgba(0,0,0,0.35)] backdrop-blur-xl md:block">
          <div className="mx-auto max-w-6xl px-8 py-9 lg:px-14">
            {desktopOpen === "Who We Are" ? (
              <div className="grid gap-16 lg:grid-cols-2">
                {sectionByLabel["Who We Are"].rows.flat().map((group) => (
                  <div key={group.title}>
                    <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">
                      {group.title}
                    </div>
                    <div className="mt-6 space-y-2">
                      {group.links.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group block py-2.5 text-[1.05rem] text-white/84 transition duration-300 ease-out hover:text-white"
                          onClick={() => setDesktopOpen(null)}
                        >
                          {item.label}
                          <span className="mt-0.5 block h-px w-0 bg-white/40 transition-all duration-300 ease-out group-hover:w-16" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              sectionByLabel[desktopOpen].rows.flat().map((group) => (
                <div key={group.title} className="mb-6 last:mb-0">
                  <div className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/55">
                    {group.title}
                  </div>
                  <div
                    className={
                      "mt-4 grid gap-2 " +
                      (group.twoCols ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2")
                    }
                  >
                    {group.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="group rounded-xl px-3 py-2.5 text-[1rem] text-white/84 transition duration-300 ease-out hover:bg-white/8 hover:text-white"
                        onClick={() => setDesktopOpen(null)}
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="border-t border-white/20 bg-neutral-950/75 shadow-[0_24px_48px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-6 py-7">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/70">
                Menu
              </div>
              <button
                type="button"
                className="rounded-lg px-2 py-1 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                Close
              </button>
            </div>

            <div className="mt-6">
              <Link
                href="/contact"
                className="block rounded-2xl border border-white/20 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/[0.09]"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </div>

            <div className="mt-6 space-y-3">
              {Object.keys(mobileExpanded).map((label) => {
                const s = sectionByLabel[label];
                const expanded = mobileExpanded[label];
                return (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/15 bg-white/[0.03]"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-4 py-3.5 text-left text-sm font-medium text-white/90"
                      onClick={() =>
                        setMobileExpanded((prev) => ({
                          ...prev,
                          [label]: !prev[label],
                        }))
                      }
                    >
                      <span>{label}</span>
                      <span className="text-white/60">
                        {expanded ? "–" : "+"}
                      </span>
                    </button>

                    {expanded && (
                      <div className="px-4 pb-4">
                        <div className="text-[11px] uppercase tracking-[0.2em] text-white/55">
                          {s.leftBlurb}
                        </div>

                        <div className="mt-4 space-y-5">
                          {s.rows.flat().map((g) => (
                            <div key={g.title}>
                              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70">
                                {g.title}
                              </div>
                              <div className="mt-2.5 space-y-1.5">
                                {g.links.map((l) => (
                                  <Link
                                    key={l.href}
                                    href={l.href}
                                    className="block rounded-lg px-2.5 py-2 text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
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
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
