"use client";

import { useMemo, useState } from "react";
import type { Professional } from "@/data/professionals";

type Item = { title: string; lines: string[] };

export function CredentialsAccordion({ profile }: { profile: Professional }) {
  const items = useMemo<Item[]>(() => {
    const s = profile.sections;
    const out: Item[] = [];

    if (s.education?.length)
      out.push({ title: "Education", lines: s.education });
    if (s.admissions?.length)
      out.push({ title: "Admissions", lines: s.admissions });
    if (s.associations?.length)
      out.push({ title: "Associations", lines: s.associations });
    if (s.awards?.length) out.push({ title: "Awards", lines: s.awards });
    if (s.publications?.length)
      out.push({ title: "Publications", lines: s.publications });
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

  if (!items.length) return null;

  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto w-full max-w-7xl px-8 py-20 md:px-12 md:py-24 lg:px-16">
        <div className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-600">
          Credentials
        </div>

        <div className="mt-10 divide-y divide-neutral-200 rounded-3xl border border-neutral-200 bg-white">
          {items.map((item, idx) => {
            const open = openIndex === idx;
            return (
              <div key={item.title} className="p-6 md:p-8">
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-left"
                  onClick={() => setOpenIndex(open ? null : idx)}
                >
                  <div className="text-xl font-semibold tracking-tight text-neutral-950 md:text-2xl">
                    {item.title}
                  </div>
                  <span className="text-2xl text-neutral-500">
                    {open ? "–" : "+"}
                  </span>
                </button>

                {open && (
                  <div className="mt-6">
                    <ul className="space-y-5 text-lg leading-[1.7] text-neutral-800 md:text-xl md:leading-[1.65]">
                      {item.lines.map((line, i) => (
                        <li
                          key={i}
                          className="border-l-2 border-neutral-300 pl-5 py-2 first:pt-0"
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                    {item.title === "Awards" && profile.badgeImages?.length ? (
                      <div className="mt-6 flex flex-wrap gap-4">
                        {profile.badgeImages.map((src) => (
                          <img
                            key={src}
                            src={src}
                            alt={`${profile.name} badge`}
                            className="h-14 w-auto rounded"
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
