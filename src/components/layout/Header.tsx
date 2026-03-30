"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_SECTIONS, type NavSection } from "@/data/navigation";
import { Logo } from "@/components/layout/Logo";
import { DesktopMegaMenu } from "@/components/layout/DesktopMegaMenu";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [desktopOpen, setDesktopOpen] = useState<"Who We Are" | "What We Do" | null>(null);
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

  return (
    <header
      key={pathname}
      className={
        "sticky top-0 z-50 transition-all duration-500 " +
        (!isScrolled
          ? "bg-transparent border-transparent"
          : "border-transparent bg-neutral-950/30 backdrop-blur-md")
      }
    >
      <div
        className={
          "mx-auto flex items-center justify-between transition-all duration-500 max-w-none px-8 lg:px-14 " +
          (isScrolled ? "py-2 lg:py-2.5" : "py-2.5 lg:py-3")
        }
      >
        <Logo heroMode subtleShrink={isScrolled} />

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

        <button
          type="button"
          className="inline-flex h-9 items-center gap-1.5 rounded-xl border px-2.5 text-sm transition md:hidden border-white/25 bg-transparent text-white/90 hover:bg-white/8"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.14em]">
            Menu
          </span>
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </div>
        </button>
      </div>

      {desktopOpen && (
        <DesktopMegaMenu
          openSection={desktopOpen}
          sectionByLabel={sectionByLabel}
          onClose={() => setDesktopOpen(null)}
        />
      )}

      {mobileOpen && (
        <MobileMenu
          sectionByLabel={sectionByLabel}
          onClose={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
