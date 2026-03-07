"use client";

import { useMemo, useState } from "react";
import type { Professional } from "@/data/professionals";

type Item = { title: string; lines: string[] };

export function CredentialsAccordion({ profile }: { profile: Professional }) {
  const items = useMemo<Item[]>(() => {
    const s = profile.sections;
    const out: Item[] = [];

    if (s.education?.length) out.push({ title: "Education", lines: s.education });
    if (s.admissions?.length) out.push({ title: "Admissions", lines: s.admissions });
    if (s.associations?.length) out.push({ title: "Associations", lines: s.associations });
    if (s.awards?.length) out.push({ title: "Awards", lines: s.awards });
    if (s.publications?.length) out.push({ title: "Publications", lines: s.publications });
    if (s.speakingEngagements?.length)
      out.push({ title: "Speaking Engagements", lines: s.speakingEngagements });
    if (s.winningResults?.length)
      out.push({ title: "Winning Results", lines: s.winningResults });
    if (s.winningTrialLitigation?.length)
      out.push({ title: "Winning Trial / Litigation Results", lines: s.winningTrialLitigation });
    if (s.winningTransaction?.length)
      out.push({ title: "Winning Transaction Results", lines: s.winningTransaction });

    return out;
  }, [profile]);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items.length) return null;

  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
          Credentials
        </div>

        <div className="mt-8 divide-y divide-neutral-200 rounded-3xl border border-neutral-200 bg-white">
          {items.map((item, idx) => {
            const open = openIndex === idx;
            return (
              <div key={item.title} className="p-6">
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-left"
                  onClick={() => setOpenIndex(open ? null : idx)}
                >
                  <div className="text-lg font-semibold tracking-tight text-neutral-950">
                    {item.title}
                  </div>
                  <span className="text-xl text-neutral-500">{open ? "–" : "+"}</span>
                </button>

                {open && (
                  <div className="mt-5">
                    <ul className="space-y-2 text-sm text-neutral-700">
                      {item.lines.map((line, i) => (
                        <li key={i} className="leading-relaxed">
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
