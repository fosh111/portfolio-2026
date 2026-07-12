"use client";

import { useState } from "react";
import type { Metric, ExpandedCaseStudy } from "@/lib/content";

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="flex h-full flex-col justify-center gap-2 bg-metric p-6">
      <p className="font-display text-[32px] leading-none text-ink sm:text-[40px]">
        {metric.value}
      </p>
      <div className="flex flex-col gap-1">
        <p className="text-[15px] font-semibold leading-tight text-[#1a0f0a]">
          {metric.label}
        </p>
        <p className="text-[13px] leading-normal text-[#6d6860]">
          {metric.detail}
        </p>
      </div>
    </div>
  );
}

export function ExpandedCaseStudyContent({
  detail,
}: {
  detail: ExpandedCaseStudy;
}) {
  return (
    <div className="flex w-full flex-col gap-16 pb-16 pt-2 text-left sm:gap-[88px]">
      {/* Intro */}
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.05em] text-muted">
            {detail.eyebrow}
          </p>
          <h3 className="font-display text-[36px] leading-[1.1] text-ink sm:text-[56px]">
            {detail.headline}
          </h3>
          <p className="max-w-[800px] text-[16px] leading-[1.45] text-ink sm:text-[18px]">
            {detail.intro}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:flex sm:items-start sm:gap-6">
          {detail.stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-2 sm:flex-1">
              <p className="font-display text-[28px] leading-none text-ink sm:text-[36px]">
                {s.value}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.05em] text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Challenge */}
      <div className="flex flex-col gap-6 sm:gap-10">
        <div className="flex flex-col gap-4">
          <div className="h-px w-full bg-line" />
          <p className="font-serif text-[24px] text-muted sm:text-[32px]">
            {detail.challengeTitle}
          </p>
        </div>
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
          <p className="text-[16px] leading-[1.55] text-ink sm:flex-1 sm:text-[18px]">
            {detail.challengeBody}
          </p>
          <div className="flex flex-col gap-4 sm:flex-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.05em] text-muted">
              {detail.touchpointsLabel}
            </p>
            <div className="flex flex-col gap-2">
              {detail.touchpoints.map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <span className="size-1 shrink-0 rounded-full bg-ink" />
                  <p className="text-[14px] font-semibold text-ink">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-lg bg-metric p-6 sm:p-8">
          <p className="font-serif text-[20px] text-muted sm:text-[24px]">
            {detail.constraintsTitle}
          </p>
          <div className="flex flex-col gap-4">
            {detail.constraints.map((item) => (
              <div key={item.title} className="flex flex-col gap-1">
                <p className="text-[15px] font-bold text-ink">{item.title}</p>
                <p className="text-[14px] leading-[1.45] text-ink">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Frameworks */}
      <div className="flex flex-col gap-6 sm:gap-10">
        <div className="flex flex-col gap-4">
          <div className="h-px w-full bg-line" />
          <p className="font-serif text-[24px] text-muted sm:text-[32px]">
            {detail.frameworksTitle}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {detail.frameworks.map((f) => (
            <div
              key={f.label}
              className="flex flex-col gap-4 rounded-lg bg-metric p-6"
            >
              <div className="flex flex-col gap-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.055em] text-muted">
                  {f.label}
                </p>
                <p className="text-[18px] font-bold text-ink">{f.title}</p>
              </div>
              <p className="text-[14px] leading-[1.5] text-ink">{f.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Takeaways */}
      <div className="flex flex-col gap-6 sm:gap-10">
        <div className="flex flex-col gap-4">
          <div className="h-px w-full bg-line" />
          <p className="font-serif text-[24px] text-muted sm:text-[32px]">
            {detail.takeawaysTitle}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {detail.takeaways.map((t, i) => (
            <div key={t} className="flex gap-4">
              <p className="shrink-0 font-mono text-[14px] font-bold text-muted-light">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="flex-1 text-[15px] leading-[1.5] text-ink sm:text-[16px]">
                {t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TellMeMore({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full border-y border-line">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full items-center justify-center gap-1.5 py-4"
      >
        <span className="whitespace-nowrap font-serif text-[24px]">
          {open ? (
            <span className="text-ink transition-colors duration-200 group-hover:text-muted">
              less
            </span>
          ) : (
            <>
              <span className="text-ink transition-colors duration-200 group-hover:text-muted">
                tell me
              </span>{" "}
              <span className="text-muted transition-colors duration-200 group-hover:text-ink">
                more
              </span>
            </>
          )}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className={`shrink-0 text-muted transition-all duration-200 ease-out group-hover:text-ink ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div className="pb-8 text-[15px] leading-relaxed text-ink">
          {children}
        </div>
      )}
    </div>
  );
}
