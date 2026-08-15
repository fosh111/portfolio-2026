"use client";

import { useState } from "react";
import { img } from "@/lib/images";
import type {
  Metric,
  CaseStudyExpanded,
  CaseStudyExpandedItem,
  QantasCarouselSlide,
  CbaCarouselSlide,
  ForageCarouselSlide,
} from "@/lib/content";
import { QANTAS_CAROUSEL, CBA_CAROUSEL, FORAGE_CAROUSEL } from "@/lib/content";

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="flex h-full flex-col justify-center gap-2 bg-metric p-6">
      <p className="font-display text-[32px] leading-none text-ink sm:text-[40px]">
        {metric.value}
      </p>
      <div className="flex flex-col gap-1">
        <p className="text-[15px] font-semibold leading-tight text-[#1a0f0a] dark:text-white">
          {metric.label}
        </p>
        <p className="text-[13px] leading-normal text-[#6d6860]">
          {metric.detail}
        </p>
      </div>
    </div>
  );
}

function ExpandedSection({
  title,
  items,
}: {
  title: string;
  items: CaseStudyExpandedItem[];
}) {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <div className="h-px w-full bg-line" />
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
        <p className="font-serif text-[24px] leading-none text-muted sm:w-[200px] sm:shrink-0 sm:text-[28px]">
          {title}
        </p>
        <div className="flex flex-1 flex-col gap-6">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col gap-1">
              <p className="text-[15px] font-bold text-ink sm:text-[16px]">
                {item.title}
              </p>
              <p className="text-[14px] leading-[1.5] text-ink sm:text-[15px]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CaseStudyExpandedContent({
  detail,
}: {
  detail: CaseStudyExpanded;
}) {
  return (
    <div className="flex w-full flex-col gap-16 pb-16 pt-2 text-left sm:gap-[88px]">
      {/* Intro */}
      <div className="flex flex-col gap-8 sm:gap-10">
        <div className="flex flex-col gap-6">
          <h3 className="font-display text-[36px] leading-[1.1] text-ink sm:text-[56px]">
            {detail.headline}
          </h3>
          <p className="max-w-[800px] text-[16px] leading-[1.45] text-ink sm:text-[18px]">
            {detail.intro}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 rounded-lg border border-line p-6 sm:flex sm:items-start sm:gap-6 sm:p-8">
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

      <ExpandedSection title={detail.pivotTitle} items={detail.pivotColumns} />
      <ExpandedSection title={detail.methodologyTitle} items={detail.phases} />
      <ExpandedSection
        title={detail.interventionsTitle}
        items={detail.interventions}
      />

      {/* Takeaways */}
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="h-px w-full bg-line" />
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
          <p className="font-serif text-[24px] leading-none text-muted sm:w-[200px] sm:shrink-0 sm:text-[28px]">
            {detail.takeawaysTitle}
          </p>
          <div className="flex flex-1 flex-col gap-6">
            {detail.takeaways.map((t, i) => (
              <div key={t} className="flex gap-4">
                <p className="shrink-0 font-mono text-[14px] text-muted-light">
                  {i + 1}
                </p>
                <p className="flex-1 text-[15px] leading-[1.5] text-ink sm:text-[16px]">
                  {t}
                </p>
              </div>
            ))}
          </div>
        </div>
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
        <div key={slide.id} className="absolute inset-0 qantas-dissolve">
        {slide.kind === "video" ? (
          slide.layout === "split" ? (
            // "new-ui": text on the left, media on the right, both vertically
            // centered with breathing room top/bottom/sides — matches Figma's
            // slide-preview-container padding (113px/46px on a 1170x893 frame)
            <div className="absolute inset-0 flex items-center bg-card px-[9.66%] py-[5.15%]">
              <div className="flex w-full items-center gap-x-[6%] sm:gap-x-[10%] md:gap-x-[21.2%]">
                <div className="flex w-[38%] shrink-0 flex-col items-start gap-1 text-left sm:w-[30%] md:w-[27.86%]">
                  <p className="font-mono text-[11px] font-medium leading-snug tracking-[0.03em] text-ink sm:text-[14px] md:text-[16px]">
                    {slide.captionTitle}
                  </p>
                  <p className="font-mono text-[9px] leading-snug tracking-[0.03em] text-muted sm:text-[11px] md:text-[13px]">
                    {slide.captionSubtitle}
                  </p>
                </div>
                <div className="relative h-full flex-1 overflow-hidden rounded-[16px] py-[6%] sm:rounded-[24px]">
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
                      className="h-full w-full object-contain blur-[5px]"
                    />
                  )}
                </div>
              </div>
            </div>
          ) : (
            // "sneak-peak": full-bleed background image with the caption
            // positioned lower-left on top of it, matching Figma's
            // slide-preview-overlay (left 57px / top 583px on 1170x893)
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img(slide.posterKey)}
                alt=""
                aria-hidden="true"
                className="h-full w-full scale-105 object-cover blur-[5px]"
              />
              <div
                className="absolute flex w-[45%] flex-col items-start gap-1 text-left sm:w-[34%] md:w-[27.86%]"
                style={{ left: "4.87%", top: "65.29%" }}
              >
                <p className="font-mono text-[11px] font-medium leading-snug tracking-[0.03em] text-ink sm:text-[14px] md:text-[16px]">
                  {slide.captionTitle}
                </p>
                <p className="font-mono text-[9px] leading-snug tracking-[0.03em] text-muted sm:text-[11px] md:text-[13px]">
                  {slide.captionSubtitle}
                </p>
              </div>
            </div>
          )
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
              <div
                className="absolute inset-0 qantas-fade-in bg-[#2C2C2C]/90"
                aria-hidden="true"
              />
            )}

            {/* Collapsed state (the default/neutral view): no overlays at all, just the
                clean image plus the labeled '?' button to expand */}
            {state === "collapsed" && (
              <button
                type="button"
                onClick={() => setState("expanded")}
                aria-label="Expand details"
                className="qantas-pop-in absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[#0a0a0a] transition-all duration-200 hover:scale-105 hover:bg-white active:scale-95"
              >
                <QuestionMarkIcon />
                <span className="font-mono text-[12px] uppercase tracking-[0.05em]">tell me more</span>
              </button>
            )}

            {/* Expanded state: scrollable full copy, closed via the 'x' button */}
            {state === "expanded" && (
              <div className="qantas-rise-in absolute inset-0 flex flex-col">
                <div className="flex items-start px-[52px] pt-6 sm:px-[60px]">
                  <p className="max-w-[80%] font-mono text-[12px] uppercase tracking-[0.05em] text-white sm:text-[13px]">
                    {slide.tabLabel}
                  </p>
                </div>
                <div className="mt-auto max-h-[82%] overflow-y-auto px-[52px] pb-14 pt-3 text-left font-mono text-[12px] font-normal leading-snug text-white/90 sm:px-[60px] sm:text-[13px]">
                  {slide.intro.map((p, i) => (
                    <p key={`intro-${i}`} className="mb-2">
                      {p}
                    </p>
                  ))}
                  {slide.bullets && (
                    <ul className="mb-2 space-y-1.5">
                      {slide.bullets.map((b, i) => (
                        <li key={`bullet-${i}`}>
                          <span className="font-bold text-white">{b.label}</span>{" "}
                          {b.body}
                        </li>
                      ))}
                    </ul>
                  )}
                  {slide.outro?.map((p, i) => (
                    <p key={`outro-${i}`} className="mb-2">
                      {p}
                    </p>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setState("collapsed")}
                  aria-label="Close"
                  className="absolute bottom-4 right-4 flex size-7 items-center justify-center rounded-full bg-white/90 text-[#0a0a0a] transition-all duration-200 hover:scale-110 hover:bg-white active:scale-95"
                >
                  <CloseIcon />
                </button>
              </div>
            )}
          </>
        )}
        </div>

        {/* Prev/next controls — always present, on every slide and every state
            (including expanded), so the user can browse without closing first */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#0a0a0a] transition-all duration-200 hover:scale-110 hover:bg-white active:scale-95 sm:left-6"
        >
          <ChevronIcon direction="left" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#0a0a0a] transition-all duration-200 hover:scale-110 hover:bg-white active:scale-95 sm:right-6"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>

      {/* Below-media nav row: short description + left/right arrows, always jumps to the collapsed state */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide (description nav)"
          className="font-mono text-[14px] tracking-[0.05em] text-[#afafaf] transition-all duration-150 hover:text-ink active:scale-90"
        >
          ←
        </button>
        <span key={slide.id} className="qantas-dissolve max-w-[220px] text-center font-mono text-[14px] tracking-[0.05em] text-ink sm:max-w-[420px]">
          {slide.tabLabel}
        </span>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide (description nav)"
          className="font-mono text-[14px] tracking-[0.05em] text-[#afafaf] transition-all duration-150 hover:text-ink active:scale-90"
        >
          →
        </button>
      </div>
    </div>
  );
}

type CbaSlideState = "collapsed" | "expanded";

export function CBACarousel() {
  const slides: CbaCarouselSlide[] = CBA_CAROUSEL;
  const startIndex = slides.findIndex((s) => s.id === "intro");
  const [index, setIndex] = useState(startIndex === -1 ? 0 : startIndex);
  const [state, setState] = useState<CbaSlideState>("collapsed");
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
        className="relative aspect-[1170/577] w-full overflow-hidden rounded-[2px] bg-card"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div key={slide.id} className="absolute inset-0 qantas-dissolve">
          {/* Background image(s) — either a single cover image, a pixel-accurate
              multi-layer composite matching the exact Figma layout for this slide,
              or (as a fallback) a plain neutral canvas */}
          <div className="absolute inset-0">
            {slide.video ? (
              <div className="relative h-full w-full bg-[#e3e3e3]">
                {/* Laptop mockup shell — pre-clipped to the visible frame, sits behind
                    the address-bar + video content it was designed to frame */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img(slide.video.maskImageKey)}
                  alt=""
                  aria-hidden="true"
                  className="absolute object-cover"
                  style={{ top: 0, left: "5.726%", width: "88.547%", height: "100%" }}
                />
                {/* Screen content — sits exactly inside the mockup's screen cutout,
                    address-bar strip on top, looping screen-recording video below it.
                    Keep the mockup's own top/bottom bezel padding: don't stretch this
                    to fill the frame. */}
                <div
                  className="absolute overflow-hidden rounded-[4px]"
                  style={{ top: "7.279%", left: "18.205%", width: "63.419%", height: "75.217%" }}
                >
                  <div className="absolute inset-x-0 top-0 overflow-hidden" style={{ height: "8.065%" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img(slide.video.addressBarImageKey)}
                      alt=""
                      aria-hidden="true"
                      className="absolute object-cover"
                      style={{ top: "-3.17%", left: "-0.54%", width: "102.88%", height: "106.34%" }}
                    />
                  </div>
                  <video
                    src={slide.video.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[91.935%] w-full object-cover"
                  />
                </div>
              </div>
            ) : slide.layers ? (
              <div className="relative h-full w-full bg-[#e3e3e3]">
                {slide.layers.map((layer, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={img(layer.imageKey)}
                    alt=""
                    aria-hidden="true"
                    className={`absolute object-cover ${layer.rounded ? "rounded-[10px]" : ""}`}
                    style={{
                      top: `${layer.top}%`,
                      left: `${layer.left}%`,
                      width: `${layer.width}%`,
                      height: `${layer.height}%`,
                    }}
                  />
                ))}
              </div>
            ) : slide.imageKey ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={img(slide.imageKey)}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-[#e3e3e3]" />
            )}
          </div>

          {/* Always-visible inline captions for static (noToggle) slides like
              "ut-insights" — composited directly over the media, no tint, no toggle */}
          {slide.captions && (
            <div className="qantas-dissolve absolute inset-0">
              {slide.captions.map((c, i) => (
                <div
                  key={i}
                  className={`absolute text-right font-mono text-[9px] leading-snug tracking-[0.02em] sm:text-[11px] ${
                    c.muted ? "text-[#555]" : "text-ink"
                  }`}
                  style={{
                    top: `${c.top}%`,
                    left: `${c.left}%`,
                    width: `${c.width}%`,
                  }}
                >
                  <p className="font-bold">{c.label}</p>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          )}

          {/* Expanded-state overlay tint, sits above the image and below the copy/controls */}
          {!slide.noToggle && state === "expanded" && (
            <div
              className="absolute inset-0 qantas-fade-in bg-[#2C2C2C]/90"
              aria-hidden="true"
            />
          )}

          {/* Collapsed state (the neutral/landing view): no overlays at all, just the
              clean image plus the labeled '?' button to expand. Slides marked
              noToggle (e.g. "intro", "ut-insights") never show this button — they
              only ever render their static default view. */}
          {!slide.noToggle && state === "collapsed" && (
            <button
              type="button"
              onClick={() => setState("expanded")}
              aria-label="Expand details"
              className="qantas-pop-in absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[#0a0a0a] transition-all duration-200 hover:scale-105 hover:bg-white active:scale-95"
            >
              <QuestionMarkIcon />
              <span className="font-mono text-[12px] uppercase tracking-[0.05em]">tell me more</span>
            </button>
          )}

          {/* Expanded state: full copy, closed via the 'x' button */}
          {!slide.noToggle && state === "expanded" && (
            <div className="qantas-rise-in absolute inset-0 flex flex-col">
              <div className="flex items-start px-[52px] pt-6 sm:px-[60px]">
                <p className="max-w-[80%] font-mono text-[12px] uppercase tracking-[0.05em] text-white sm:text-[13px]">
                  {slide.tabLabel}
                </p>
              </div>
              <div className="mt-auto max-h-[82%] overflow-y-auto px-[52px] pb-14 pt-3 text-left font-mono text-[12px] font-normal leading-snug text-white/90 sm:px-[60px] sm:text-[13px]">
                {slide.intro.map((p, i) => (
                  <p key={`intro-${i}`} className="mb-2">
                    {p}
                  </p>
                ))}
                {slide.bullets && (
                  <ul className="mb-2 space-y-1.5">
                    {slide.bullets.map((b, i) => (
                      <li key={`bullet-${i}`}>
                        {b.label && <span className="font-bold text-white">{b.label}</span>}{" "}
                        {b.body}
                      </li>
                    ))}
                  </ul>
                )}
                {slide.outro?.map((p, i) => (
                  <p key={`outro-${i}`} className="mb-2">
                    {p}
                  </p>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setState("collapsed")}
                aria-label="Close"
                className="absolute bottom-4 right-4 flex size-7 items-center justify-center rounded-full bg-white/90 text-[#0a0a0a] transition-all duration-200 hover:scale-110 hover:bg-white active:scale-95"
              >
                <CloseIcon />
              </button>
            </div>
          )}
        </div>

        {/* Prev/next controls — always present, on every slide and every state
            (including expanded), so the user can browse without closing first */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#0a0a0a] transition-all duration-200 hover:scale-110 hover:bg-white active:scale-95 sm:left-6"
        >
          <ChevronIcon direction="left" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#0a0a0a] transition-all duration-200 hover:scale-110 hover:bg-white active:scale-95 sm:right-6"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>

      {/* Below-media nav row: short description + left/right arrows, always jumps to the collapsed state */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide (description nav)"
          className="font-mono text-[14px] tracking-[0.05em] text-[#afafaf] transition-all duration-150 hover:text-ink active:scale-90"
        >
          ←
        </button>
        <span key={slide.id} className="qantas-dissolve max-w-[220px] text-center font-mono text-[14px] tracking-[0.05em] text-ink sm:max-w-[420px]">
          {slide.tabLabel}
        </span>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide (description nav)"
          className="font-mono text-[14px] tracking-[0.05em] text-[#afafaf] transition-all duration-150 hover:text-ink active:scale-90"
        >
          →
        </button>
      </div>
    </div>
  );
}

export function ForageCarousel() {
  const slides: ForageCarouselSlide[] = FORAGE_CAROUSEL;
  const [index, setIndex] = useState(0);
  const [state, setState] = useState<"collapsed" | "expanded">("collapsed");
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
        className="relative aspect-[1170/577] w-full overflow-hidden rounded-[2px] bg-card"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div key={slide.id} className="absolute inset-0 qantas-dissolve">
          {/* Background — a pixel-accurate multi-layer composite when the real
              Figma layout is available, a single cover image, or (currently,
              for every placeholder stage) a plain neutral canvas fallback */}
          <div className="absolute inset-0">
            {slide.layers ? (
              <div className="relative h-full w-full bg-[#e3e3e3]">
                {slide.layers.map((layer, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={img(layer.imageKey)}
                    alt=""
                    aria-hidden="true"
                    className={`absolute object-cover ${layer.rounded ? "rounded-[10px]" : ""}`}
                    style={{
                      top: `${layer.top}%`,
                      left: `${layer.left}%`,
                      width: `${layer.width}%`,
                      height: `${layer.height}%`,
                    }}
                  />
                ))}
              </div>
            ) : slide.imageKey ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={img(slide.imageKey)}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-[#e3e3e3]" />
            )}
          </div>

          {/* Expanded-state overlay tint, sits above the image and below the copy/controls.
              noToggle slides (e.g. Design Rationale) show this permanently, no click needed. */}
          {(slide.noToggle || state === "expanded") && (
            <div
              className="absolute inset-0 qantas-fade-in bg-[#2C2C2C]/90"
              aria-hidden="true"
            />
          )}

          {/* Collapsed state: clean image plus the labeled '?' button to expand.
              Never shown for noToggle slides — their copy is always visible. */}
          {!slide.noToggle && state === "collapsed" && (
            <button
              type="button"
              onClick={() => setState("expanded")}
              aria-label="Expand details"
              className="qantas-pop-in absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[#0a0a0a] transition-all duration-200 hover:scale-105 hover:bg-white active:scale-95"
            >
              <QuestionMarkIcon />
              <span className="font-mono text-[12px] uppercase tracking-[0.05em]">tell me more</span>
            </button>
          )}

          {/* Full copy — permanently on for noToggle slides, otherwise only in expanded state */}
          {(slide.noToggle || state === "expanded") && (
            <div className="qantas-rise-in absolute inset-0 flex flex-col">
              <div className="flex items-start px-[52px] pt-6 sm:px-[60px]">
                <p className="max-w-[80%] font-mono text-[12px] uppercase tracking-[0.05em] text-white sm:text-[13px]">
                  {slide.tabLabel}
                </p>
              </div>
              <div className="mt-auto max-h-[82%] overflow-y-auto px-[52px] pb-14 pt-3 text-left font-mono text-[12px] font-normal leading-snug text-white/90 sm:px-[60px] sm:text-[13px]">
                {slide.intro.map((p, i) => (
                  <p key={`intro-${i}`} className="mb-2">
                    {p}
                  </p>
                ))}
                {slide.bullets && (
                  <ul className="mb-2 space-y-1.5">
                    {slide.bullets.map((b, i) => (
                      <li key={`bullet-${i}`}>
                        {b.label && <span className="font-bold text-white">{b.label}</span>}{" "}
                        {b.body}
                      </li>
                    ))}
                  </ul>
                )}
                {slide.outro?.map((p, i) => (
                  <p key={`outro-${i}`} className="mb-2">
                    {p}
                  </p>
                ))}
              </div>
              {!slide.noToggle && (
                <button
                  type="button"
                  onClick={() => setState("collapsed")}
                  aria-label="Close"
                  className="absolute bottom-4 right-4 flex size-7 items-center justify-center rounded-full bg-white/90 text-[#0a0a0a] transition-all duration-200 hover:scale-110 hover:bg-white active:scale-95"
                >
                  <CloseIcon />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Prev/next controls — always present, every slide and every state */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#0a0a0a] transition-all duration-200 hover:scale-110 hover:bg-white active:scale-95 sm:left-6"
        >
          <ChevronIcon direction="left" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#0a0a0a] transition-all duration-200 hover:scale-110 hover:bg-white active:scale-95 sm:right-6"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>

      {/* Below-media nav row: short description + left/right arrows */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide (description nav)"
          className="font-mono text-[14px] tracking-[0.05em] text-[#afafaf] transition-all duration-150 hover:text-ink active:scale-90"
        >
          ←
        </button>
        <span key={slide.id} className="qantas-dissolve max-w-[220px] text-center font-mono text-[14px] tracking-[0.05em] text-ink sm:max-w-[420px]">
          {slide.tabLabel}
        </span>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide (description nav)"
          className="font-mono text-[14px] tracking-[0.05em] text-[#afafaf] transition-all duration-150 hover:text-ink active:scale-90"
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
