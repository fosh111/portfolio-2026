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
        className="flex w-full items-center justify-center gap-1.5 py-4"
      >
        <span className="font-serif text-[24px] text-ink">
          {open ? "less" : "tell me more"}
        </span>
        <span
          className={`font-mono text-sm text-ink transition-transform ${
            open ? "rotate-90" : ""
          }`}
          aria-hidden
        >
          ›
        </span>
      </button>
      {open && (
        <div className="pb-8 text-[15px] leading-relaxed text-ink">
          {children}
        </div>
      )}
    </div>
  );
}
