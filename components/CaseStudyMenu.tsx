"use client";

import Link from "next/link";
import { useState } from "react";
import { CASE_STUDIES } from "@/lib/content";
import { Figure } from "./Figure";
import { AccentTitle, Dot } from "./ui";

export function CaseStudyMenu() {
  const [active, setActive] = useState(CASE_STUDIES[0].slug);
  const activeStudy =
    CASE_STUDIES.find((c) => c.slug === active) ?? CASE_STUDIES[0];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,512px)_minmax(0,1fr)] md:items-stretch">
      {/* List */}
      <ul className="border-line">
        {CASE_STUDIES.map((c, i) => {
          const isActive = c.slug === active;
          const inner = (
            <div
              className="group flex items-center justify-between gap-4 px-1 py-8"
              onMouseEnter={() => setActive(c.slug)}
              onFocus={() => setActive(c.slug)}
            >
              <div className="flex flex-col gap-[6px]">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-light tracking-[0.05em] text-muted">
                    {c.company.toUpperCase()}
                  </span>
                  <Dot />
                  <span className="font-mono text-[10px] font-light tracking-[0.05em] text-muted">
                    {c.period}
                  </span>
                </div>
                <AccentTitle
                  lead={c.titleLead}
                  accent={c.titleAccent}
                  className="text-[24px] leading-tight"
                />
                <div className="mt-1 flex flex-wrap items-center gap-4">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] font-medium uppercase tracking-[0.05em] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span
                className={`font-mono text-lg transition-transform ${
                  isActive ? "text-ink" : "text-muted-light"
                } ${c.available ? "group-hover:-translate-y-0.5" : ""}`}
                aria-hidden
              >
                {c.available ? "↗" : "•"}
              </span>
            </div>
          );

          return (
            <li
              key={c.slug}
              className={`border-t ${
                i === CASE_STUDIES.length - 1 ? "border-b" : ""
              } border-line`}
            >
              {c.available ? (
                <Link
                  href={`/case-studies/${c.slug}`}
                  className="block"
                  aria-label={`${c.titleLead} ${c.titleAccent} — ${c.company}`}
                >
                  {inner}
                </Link>
              ) : (
                <div className="block cursor-default" aria-disabled>
                  {inner}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* Preview panel */}
      <div className="hidden md:block">
        <div className="sticky top-24">
          <Figure
            imageKey={`thumb-${activeStudy.slug}`}
            label={`${activeStudy.company} — ${activeStudy.titleLead} ${activeStudy.titleAccent}${activeStudy.available ? "" : " · coming soon"}`}
            className="aspect-square w-full"
            rounded="rounded-[2px]"
          />
        </div>
      </div>
    </div>
  );
}
