"use client";

import Link from "next/link";
import { useState } from "react";
import { CASE_STUDIES } from "@/lib/content";
import { Figure } from "./Figure";
import { AccentTitle, Dot } from "./ui";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 10H17M17 10L12 5M17 10L12 15"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
              className={`group flex items-center justify-between gap-4 px-6 py-8 transition-colors duration-200 ${
                isActive ? "bg-panel" : ""
              }`}
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
                  leadClassName={`transition-colors duration-200 ${
                    isActive ? "text-white" : "text-ink"
                  }`}
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
              {c.available ? (
                <ArrowIcon
                  className={`shrink-0 transition-all duration-200 ease-out group-hover:translate-x-0.5 ${
                    isActive ? "text-white" : "text-ink"
                  }`}
                />
              ) : (
                <span
                  className={`shrink-0 font-mono text-lg transition-colors duration-200 ${
                    isActive ? "text-white" : "text-muted-light"
                  }`}
                  aria-hidden
                >
                  •
                </span>
              )}
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
