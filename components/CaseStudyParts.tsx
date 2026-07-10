"use client";

import { useState } from "react";
import type { Metric } from "@/lib/content";

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
