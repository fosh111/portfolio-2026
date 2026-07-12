"use client";

import { useState } from "react";
import { img } from "@/lib/images";
import type {
  Metric,
  ExpandedCaseStudy,
  CbaExpandedCaseStudy,
  ConvokelabExpandedCaseStudy,
  QantasCarouselSlide,
} from "@/lib/content";
import { QANTAS_CAROUSEL } from "@/lib/content";

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

export function CbaExpandedContent({
  detail,
}: {
  detail: CbaExpandedCaseStudy;
}) {
  return (
    <div className="flex w-full flex-col gap-16 pb-16 pt-2 text-left sm:gap-[88px]">
      {/* Intro */}
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
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
              <p className="font-display text-[32px] leading-none text-ink sm:text-[48px]">
                {s.value}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.05em] text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic pivot */}
      <div className="flex flex-col gap-6 sm:gap-10">
        <div className="flex flex-col gap-4">
          <div className="h-px w-full bg-line" />
          <p className="font-serif text-[24px] text-muted sm:text-[32px]">
            {detail.pivotTitle}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
          {detail.pivotColumns.map((col) => (
            <div key={col.label} className="flex flex-col gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.05em] text-muted">
                {col.label}
              </p>
              <p
                className={`text-[14px] leading-[1.45] text-ink ${
                  col.bold ? "font-bold" : ""
                }`}
              >
                {col.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology */}
      <div className="flex flex-col gap-6 sm:gap-10">
        <div className="flex flex-col gap-4">
          <div className="h-px w-full bg-line" />
          <p className="font-serif text-[24px] text-muted sm:text-[32px]">
            {detail.methodologyTitle}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {detail.phases.map((p, i) => (
            <div
              key={p.title}
              className="flex flex-col gap-3 rounded-lg bg-metric p-6"
            >
              <p className="font-mono text-[24px] tracking-[0.06em] text-muted-light">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-[16px] font-bold text-ink">{p.title}</p>
                <p className="text-[14px] leading-[1.45] text-ink">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interventions */}
      <div className="flex flex-col gap-6 sm:gap-10">
        <div className="flex flex-col gap-4">
          <div className="h-px w-full bg-line" />
          <p className="font-serif text-[24px] text-muted sm:text-[32px]">
            {detail.interventionsTitle}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {detail.interventions.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-2 rounded-lg bg-metric p-6 sm:p-8"
            >
              <p className="text-[17px] font-bold text-ink sm:text-[18px]">
                {item.title}
              </p>
              <p className="text-[15px] leading-[1.45] text-ink sm:text-[16px]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics table */}
      <div className="flex flex-col gap-6 sm:gap-10">
        <div className="flex flex-col gap-4">
          <div className="h-px w-full bg-line" />
          <p className="font-serif text-[24px] text-muted sm:text-[32px]">
            {detail.metricsTitle}
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-4 border-b border-line px-1 py-4 sm:gap-6">
            <p className="flex-1 text-[14px] font-bold text-ink">
              {detail.metricsHeader.indicator}
            </p>
            <p className="w-[110px] shrink-0 text-right font-mono text-[12px] uppercase tracking-[0.05em] text-muted sm:w-[160px] sm:text-[13px]">
              {detail.metricsHeader.legacy}
            </p>
            <p className="w-[110px] shrink-0 text-right font-mono text-[12px] font-bold uppercase tracking-[0.05em] text-ink sm:w-[160px] sm:text-[13px]">
              {detail.metricsHeader.modernised}
            </p>
          </div>
          {detail.metricsRows.map((row) => (
            <div
              key={row.label}
              className="flex items-center gap-4 border-b border-line px-1 py-4 sm:gap-6"
            >
              <p className="flex-1 text-[13px] leading-[1.45] text-ink sm:text-[14px]">
                {row.label}
              </p>
              <p className="w-[110px] shrink-0 text-right font-mono text-[12px] text-muted sm:w-[160px] sm:text-[13px]">
                {row.legacy}
              </p>
              <p className="w-[110px] shrink-0 text-right font-mono text-[12px] font-medium text-[#00a36c] sm:w-[160px] sm:text-[13px]">
                {row.modernised}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing */}
      <div className="flex flex-col gap-6 sm:gap-10">
        <div className="flex flex-col gap-4">
          <div className="h-px w-full bg-line" />
          <p className="font-serif text-[24px] text-muted sm:text-[32px]">
            {detail.closingTitle}
          </p>
        </div>
        <p className="text-[18px] leading-[1.45] text-ink sm:text-[20px]">
          {detail.closingBody}
        </p>
      </div>
    </div>
  );
}

export function ConvokelabExpandedContent({
  detail,
}: {
  detail: ConvokelabExpandedCaseStudy;
}) {
  return (
    <div className="mx-auto flex w-full max-w-[1010px] flex-col gap-16 px-0 pb-16 pt-2 text-left sm:gap-[88px] sm:px-10">
      {/* Intro */}
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.05em] text-[#b5541a]">
            {detail.eyebrow}
          </p>
          <h3 className="font-display text-[36px] leading-[1.1] text-[#1a0f0a] sm:text-[56px]">
            {detail.headline}
          </h3>
          <p className="max-w-[800px] text-[16px] leading-[1.45] text-[#6d6860] sm:text-[18px]">
            {detail.intro}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:flex sm:items-start sm:gap-6">
          {detail.stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-2 sm:flex-1">
              <p className="font-display text-[32px] leading-none text-[#1a0f0a] sm:text-[48px]">
                {s.value}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.05em] text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic pivot */}
      <div className="flex flex-col gap-6 sm:gap-10">
        <div className="flex flex-col gap-4">
          <div className="h-px w-full bg-line" />
          <p className="font-serif text-[24px] text-[#6d6860] sm:text-[32px]">
            {detail.pivotTitle}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
          {detail.pivotColumns.map((col) => (
            <div key={col.label} className="flex flex-col gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.05em] text-muted">
                {col.label}
              </p>
              <p
                className={`text-[14px] leading-[1.45] text-[#6d6860] ${
                  col.bold ? "font-bold text-[#1a0f0a]" : ""
                }`}
              >
                {col.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology */}
      <div className="flex flex-col gap-6 sm:gap-10">
        <div className="flex flex-col gap-4">
          <div className="h-px w-full bg-line" />
          <p className="font-serif text-[24px] text-[#6d6860] sm:text-[32px]">
            {detail.methodologyTitle}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {detail.phases.map((p, i) => (
            <div
              key={p.title}
              className="flex flex-col gap-3 rounded-lg bg-metric p-6"
            >
              <p className="font-mono text-[24px] tracking-[0.06em] text-muted-light">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-[16px] font-bold text-[#1a0f0a]">
                  {p.title}
                </p>
                <p className="text-[14px] leading-[1.45] text-[#6d6860]">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interventions */}
      <div className="flex flex-col gap-6 sm:gap-10">
        <div className="flex flex-col gap-4">
          <div className="h-px w-full bg-line" />
          <p className="font-serif text-[24px] text-[#6d6860] sm:text-[32px]">
            {detail.interventionsTitle}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {detail.interventions.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-2 rounded-lg bg-metric p-6 sm:p-8"
            >
              <p className="text-[17px] font-bold text-[#1a0f0a] sm:text-[18px]">
                {item.title}
              </p>
              <p className="text-[15px] leading-[1.45] text-[#6d6860] sm:text-[16px]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="flex flex-col gap-6 sm:gap-10">
        <div className="flex flex-col gap-4">
          <div className="h-px w-full bg-line" />
          <p className="font-serif text-[24px] text-[#6d6860] sm:text-[32px]">
            {detail.milestonesTitle}
          </p>
        </div>
        <div className="flex flex-col">
          {detail.milestones.map((m) => (
            <div
              key={m.label}
              className="flex flex-col gap-2 border-b border-line py-4 sm:flex-row sm:items-center sm:gap-6"
            >
              <p className="w-[220px] shrink-0 font-mono text-[12px] uppercase tracking-[0.05em] text-muted sm:text-[13px]">
                {m.label}
              </p>
              <p className="flex-1 text-[13px] leading-[1.45] text-[#1a0f0a] sm:text-[14px]">
                {m.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing */}
      <div className="flex flex-col gap-6 sm:gap-10">
        <div className="flex flex-col gap-4">
          <div className="h-px w-full bg-line" />
          <p className="font-serif text-[24px] text-[#6d6860] sm:text-[32px]">
            {detail.closingTitle}
          </p>
        </div>
        <p className="text-[18px] leading-[1.45] text-[#1a0f0a] sm:text-[20px]">
          {detail.closingBody}
        </p>
      </div>
    </div>
  );
}

function ChevronIcon({ direction = "left" }: { direction?: "left" | "right" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={direction === "left" ? "M10 3L5 8L10 13" : "M6 3L11 8L6 13"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ConvokelabProcessCarousel({
  videoSrc,
}: {
  videoSrc?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative aspect-[1170/658] w-full overflow-hidden rounded-[2px] bg-card">
        {/* Background media */}
        <div className="absolute inset-0">
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
              className="h-full w-full scale-105 object-cover blur-[5px]"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={img("convokelab-process-bg")}
              alt=""
              aria-hidden="true"
              className="h-full w-full scale-105 object-cover blur-[5px]"
            />
          )}
        </div>

        {/* Coming soon overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p className="font-display text-[44px] leading-none text-ink sm:text-[72px]">
            Coming <span className="italic text-muted">soon</span>
          </p>
        </div>

        {/* Disabled prev/next controls */}
        <button
          type="button"
          disabled
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#afafaf] text-white sm:left-6"
        >
          <ChevronIcon direction="left" />
        </button>
        <button
          type="button"
          disabled
          aria-label="Next slide"
          className="absolute right-4 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#afafaf] text-white sm:right-6"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>

      {/* Below-media nav row */}
      <div className="flex items-center gap-4">
        <span className="font-mono text-[14px] tracking-[0.05em] text-[#afafaf]" aria-hidden>
          ←
        </span>
        <span className="font-mono text-[14px] tracking-[0.05em] text-ink">
          TEASER VIDEO
        </span>
        <span className="font-mono text-[14px] tracking-[0.05em] text-[#afafaf]" aria-hidden>
          →
        </span>
      </div>
    </div>
  );
}

function QuestionMarkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M6.1 6.2c.15-.95.9-1.6 1.95-1.6 1.1 0 1.9.65 1.9 1.6 0 .75-.4 1.15-1.05 1.6-.55.4-.75.7-.75 1.25v.2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="11.3" r="0.15" fill="currentColor" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 4L12 12M12 4L4 12"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

type QantasSlideState = "collapsed" | "expanded";

export function QantasCarousel() {
  const slides: QantasCarouselSlide[] = QANTAS_CAROUSEL;
  const startIndex = slides.findIndex((s) => s.id === "new-ui");
  const [index, setIndex] = useState(startIndex === -1 ? 0 : startIndex);
  const [state, setState] = useState<QantasSlideState>("collapsed");
  const touchStartX = useState({ x: 0 })[0];

  const slide = slides[index];

  function goTo(nextIndex: number) {
    const len = slides.length;
    const wrapped = ((nextIndex % len) + len) % len;
    setIndex(wrapped);
    setState("collapsed");
  }

  function goNext() {
    goTo(index + 1);
  }

  function goPrev() {
    goTo(index - 1);
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.x = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    const delta = e.changedTouches[0].clientX - touchStartX.x;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) goNext();
    else goPrev();
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative aspect-[1170/893] w-full overflow-hidden rounded-[2px] bg-card"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {slide.kind === "video" ? (
          <>
            <div className="absolute inset-0">
              {slide.videoSrc ? (
                <video
                  src={slide.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                  className="h-full w-full object-contain blur-[5px]"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={img(slide.posterKey)}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full scale-105 object-cover blur-[5px]"
                />
              )}
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
              <p className="font-mono text-[13px] uppercase tracking-[0.05em] text-ink sm:text-[14px]">
                {slide.captionTitle}
              </p>
              <p className="font-mono text-[13px] uppercase tracking-[0.05em] text-muted sm:text-[14px]">
                {slide.captionSubtitle}
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Background image(s) — either a single cover image, or a pixel-accurate
                multi-layer composite matching the exact Figma layout for this slide */}
            <div className="absolute inset-0">
              {slide.layers ? (
                <div className="relative h-full w-full bg-card">
                  {slide.layers.map((layer, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={i}
                      src={img(layer.imageKey)}
                      alt=""
                      aria-hidden="true"
                      className="absolute object-cover"
                      style={{
                        top: `${layer.top}%`,
                        left: `${layer.left}%`,
                        width: `${layer.width}%`,
                        height: `${layer.height}%`,
                      }}
                    />
                  ))}
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={img(slide.imageKey)}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                />
              )}
            </div>

            {/* Expanded-state overlay tint, sits above the image and below the copy/controls */}
            {state === "expanded" && (
              <div className="absolute inset-0 bg-[#2C2C2C]/90" aria-hidden="true" />
            )}

            {/* Collapsed state (the default/neutral view): no overlays at all, just the
                clean image plus the labeled '?' button to expand */}
            {state === "collapsed" && (
              <button
                type="button"
                onClick={() => setState("expanded")}
                aria-label="Expand details"
                className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-ink transition-colors hover:bg-white"
              >
                <QuestionMarkIcon />
                <span className="font-mono text-[12px] uppercase tracking-[0.05em]">tell me more</span>
              </button>
            )}

            {/* Expanded state: scrollable full copy, closed via the 'x' button */}
            {state === "expanded" && (
              <div className="absolute inset-0 flex flex-col">
                <div className="flex items-start px-6 pt-6">
                  <p className="max-w-[80%] font-mono text-[12px] uppercase tracking-[0.05em] text-white sm:text-[13px]">
                    {slide.tabLabel}
                  </p>
                </div>
                <div className="mt-auto max-h-[55%] overflow-y-auto px-6 pb-14 pt-6 text-left font-mono text-[13px] font-normal leading-relaxed text-white/90 sm:text-[14px]">
                  {slide.intro.map((p, i) => (
                    <p key={`intro-${i}`} className="mb-3">
                      {p}
                    </p>
                  ))}
                  {slide.bullets && (
                    <ul className="mb-3 space-y-2">
                      {slide.bullets.map((b, i) => (
                        <li key={`bullet-${i}`}>
                          <span className="font-bold text-white">{b.label}</span>{" "}
                          {b.body}
                        </li>
                      ))}
                    </ul>
                  )}
                  {slide.outro?.map((p, i) => (
                    <p key={`outro-${i}`} className="mb-3">
                      {p}
                    </p>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setState("collapsed")}
                  aria-label="Close"
                  className="absolute bottom-4 right-4 flex size-7 items-center justify-center rounded-full bg-white/90 text-ink transition-colors hover:bg-white"
                >
                  <CloseIcon />
                </button>
              </div>
            )}
          </>
        )}

        {/* Prev/next controls — present on the collapsed state for every slide,
            and always for video slides (which have no collapsed/expanded states) */}
        {state !== "expanded" && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink transition-colors hover:bg-white sm:left-6"
            >
              <ChevronIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink transition-colors hover:bg-white sm:right-6"
            >
              <ChevronIcon direction="right" />
            </button>
          </>
        )}
      </div>

      {/* Below-media nav row: short description + left/right arrows, always jumps to the collapsed state */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide (description nav)"
          className="font-mono text-[14px] tracking-[0.05em] text-[#afafaf] transition-colors hover:text-ink"
        >
          ←
        </button>
        <span className="font-mono text-[14px] tracking-[0.05em] text-ink">
          {slide.kind === "video" ? slide.tabLabel : slide.tabLabel}
        </span>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide (description nav)"
          className="font-mono text-[14px] tracking-[0.05em] text-[#afafaf] transition-colors hover:text-ink"
        >
          →
        </button>
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
