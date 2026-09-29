"use client";

import { useMemo, useRef, useState } from "react";
import type { Professional } from "@/types/professional";

function scrollTitleIntoView(el: HTMLButtonElement | null) {
  if (!el) return;
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({
    behavior: reduce ? "auto" : "smooth",
    block: "start",
  });
  el.focus({ preventScroll: true });
}

type Item = { title: string; lines: string[] };

export function CredentialsAccordion({ profile }: { profile: Professional }) {
  const items = useMemo<Item[]>(() => {
    const s = profile.sections;
    const out: Item[] = [];

    if (s.awards?.length) out.push({ title: "Awards", lines: s.awards });
    if (s.education?.length)
      out.push({ title: "Education", lines: s.education });
    if (s.admissions?.length)
      out.push({ title: "Admissions", lines: s.admissions });
    if (s.associations?.length)
      out.push({ title: "Associations", lines: s.associations });
    if (s.publications?.length)
      out.push({ title: "Publications and News", lines: s.publications });
    if (s.speakingEngagements?.length)
      out.push({ title: "Speaking Engagements", lines: s.speakingEngagements });
    if (s.winningResults?.length)
      out.push({ title: "Winning Results", lines: s.winningResults });
    if (s.winningTrialLitigation?.length)
      out.push({
        title: "Winning Trial / Litigation Results",
        lines: s.winningTrialLitigation,
      });
    if (s.winningTransaction?.length)
      out.push({
        title: "Winning Transaction Results",
        lines: s.winningTransaction,
      });

    return out;
  }, [profile]);

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const titleRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const closePanel = (closedIdx: number) => {
    setOpenIndex(null);
    queueMicrotask(() => scrollTitleIntoView(titleRefs.current[closedIdx] ?? null));
  };

  if (!items.length) return null;

  return (
    <section className="border-b border-white/10 bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl px-8 py-20 md:px-12 md:py-24 lg:px-16">
        <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
          Credentials
        </div>

        <div className="mt-10 divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.04]">
          {items.map((item, idx) => {
            const open = openIndex === idx;
            return (
              <div key={item.title} className="p-6 md:p-8">
                <button
                  type="button"
                  ref={(el) => {
                    titleRefs.current[idx] = el;
                  }}
                  className="flex w-full scroll-mt-28 items-center justify-between text-left"
                  onClick={() => (open ? closePanel(idx) : setOpenIndex(idx))}
                >
                  <div className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                    {item.title}
                  </div>
                  <span className="text-2xl text-white/50">
                    {open ? "–" : "+"}
                  </span>
                </button>

                {open && (
                  <div
                    className="mt-6 cursor-pointer"
                    onClick={() => closePanel(idx)}
                  >
                    <ul className="space-y-5 text-lg leading-[1.7] text-white/[0.82] md:text-xl md:leading-[1.65]">
                      {item.lines.map((line, i) => (
                        <li
                          key={i}
                          className="border-l-2 border-white/20 pl-5 py-2 first:pt-0"
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                    {item.title === "Awards" && profile.badgeImages?.length ? (
                      <div className="mt-8 flex flex-wrap items-center gap-5 md:gap-6">
                        {profile.badgeImages.map((src) => (
                          <img
                            key={src}
                            src={src}
                            alt={`${profile.name} badge`}
                            className="h-24 w-auto rounded md:h-32"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
