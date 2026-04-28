"use client";

import { useState } from "react";
import Link from "next/link";
import { type NavSection } from "@/data/navigation";

type Props = {
  sectionByLabel: Record<string, NavSection>;
  onClose: () => void;
};

const MOBILE_SECTION_LABELS = ["Who We Are", "What We Do"] as const;

export function MobileMenu({ sectionByLabel, onClose }: Props) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <div className="border-t border-white/20 bg-neutral-950/75 shadow-[0_24px_48px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 py-7">
        <div className="flex items-center justify-between">
          <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/70">
            Menu
          </div>
          <button
            type="button"
            className="rounded-lg px-2 py-1 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="mt-6">
          <Link
            href="/contact"
            className="block rounded-2xl border border-white/20 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/[0.09]"
            onClick={onClose}
          >
            Contact
          </Link>
        </div>

        <div className="mt-6 space-y-3">
          {MOBILE_SECTION_LABELS.map((label) => {
            const s = sectionByLabel[label];
            const expanded = openSection === label;
            return (
              <div
                key={label}
                className="rounded-2xl border border-white/15 bg-white/[0.03]"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-3.5 text-left text-sm font-medium text-white/90"
                  onClick={() =>
                    setOpenSection((prev) => (prev === label ? null : label))
                  }
                >
                  <span>{label}</span>
                  <span className="text-white/60">{expanded ? "–" : "+"}</span>
                </button>

                {expanded && (
                  <div className="px-4 pb-4">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white/55">
                      {s.leftBlurb}
                    </div>

                    <div className="mt-4 space-y-5">
                      {s.rows.flat().map((g) => (
                        <div key={g.title}>
                          {g.title !== s.leftBlurb ? (
                            <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70">
                              {g.title}
                            </div>
                          ) : null}
                          <div className="mt-2.5 space-y-1.5">
                            {g.links.map((l) => (
                              <Link
                                key={l.href}
                                href={l.href}
                                className="block rounded-lg px-2.5 py-2 text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
                                onClick={onClose}
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
  );
}
