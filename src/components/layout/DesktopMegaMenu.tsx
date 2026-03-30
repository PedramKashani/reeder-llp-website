"use client";

import Link from "next/link";
import { type NavSection } from "@/data/navigation";

type Props = {
  openSection: "Who We Are" | "What We Do";
  sectionByLabel: Record<string, NavSection>;
  onClose: () => void;
};

export function DesktopMegaMenu({ openSection, sectionByLabel, onClose }: Props) {
  return (
    <div className="animate-fade-in hidden border-t border-white/15 bg-neutral-950/72 shadow-[0_24px_48px_rgba(0,0,0,0.35)] backdrop-blur-xl md:block">
      <div className="mx-auto max-w-6xl px-8 py-9 lg:px-14">
        {openSection === "Who We Are" ? (
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
                      onClick={onClose}
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
          sectionByLabel[openSection].rows.flat().map((group) => (
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
                    onClick={onClose}
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
  );
}
