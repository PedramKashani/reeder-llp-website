"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const whoWeAreBtnRef = useRef<HTMLButtonElement>(null);
  const whatWeDoBtnRef = useRef<HTMLButtonElement>(null);
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

  useEffect(() => {
    if (!desktopOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (megaMenuRef.current?.contains(t)) return;
      if (whoWeAreBtnRef.current?.contains(t)) return;
      if (whatWeDoBtnRef.current?.contains(t)) return;
      setDesktopOpen(null);
    };
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
  }, [desktopOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <header
      key={pathname}
      className={
        "sticky top-0 z-50 transition-all duration-500 " +
        (!isScrolled
          ? "border-transparent bg-transparent"
          : "border-b border-white/[0.055] bg-black/[0.09] backdrop-blur-2xl supports-[backdrop-filter]:bg-black/[0.06]")
      }
    >
      <div
        className={
          "relative mx-auto flex min-h-[3.625rem] max-w-none items-center transition-all duration-500 " +
          "md:min-h-0 md:justify-between md:px-7 lg:px-12 " +
          (isScrolled ? "py-1 lg:py-1.5" : "py-1.5 lg:py-2")
        }
      >
        <div
          className={
            "absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 " +
            "md:static md:left-auto md:top-auto md:z-auto md:translate-none"
          }
        >
          <Logo
            heroMode
            subtleShrink={isScrolled}
            onHomeClick={(e) => {
              setDesktopOpen(null);
              setMobileOpen(false);
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo(0, 0);
              }
            }}
          />
        </div>

        <nav className="hidden items-center gap-10 md:flex lg:gap-12">
          <button
            ref={whoWeAreBtnRef}
            type="button"
            onClick={() =>
              setDesktopOpen((prev) =>
                prev === "Who We Are" ? null : "Who We Are",
              )
            }
            className="text-[11px] font-normal uppercase tracking-[0.26em] text-white/42 transition-colors duration-300 ease-out hover:text-white/78"
          >
            Who We Are
          </button>
          <button
            ref={whatWeDoBtnRef}
            type="button"
            onClick={() =>
              setDesktopOpen((prev) =>
                prev === "What We Do" ? null : "What We Do",
              )
            }
            className="text-[11px] font-normal uppercase tracking-[0.26em] text-white/42 transition-colors duration-300 ease-out hover:text-white/78"
          >
            What We Do
          </button>
          <Link
            href="/contact"
            className="text-[11px] font-normal uppercase tracking-[0.26em] text-white/42 transition-colors duration-300 ease-out hover:text-white/78"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className={
            "absolute right-6 top-1/2 z-20 inline-flex h-7 -translate-y-1/2 items-center gap-1.5 " +
            "rounded-full border border-white/[0.14] bg-white/[0.03] px-2.5 text-sm text-white/68 transition " +
            "hover:border-white/22 hover:bg-white/[0.05] hover:text-white/85 md:hidden"
          }
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
          menuRootRef={megaMenuRef}
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
