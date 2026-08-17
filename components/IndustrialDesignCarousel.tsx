"use client";

import { useState } from "react";
import { img } from "@/lib/images";
import type { IndustrialDesignCarouselSlide } from "@/lib/content";

function ChevronIcon({ direction = "left" }: { direction?: "left" | "right" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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

export function IndustrialDesignCarousel({
  slides,
}: {
  slides: IndustrialDesignCarouselSlide[];
}) {
  const [index, setIndex] = useState(0);
  const touchStartX = useState({ x: 0 })[0];

  const slide = slides[index];

  function goTo(nextIndex: number) {
    const len = slides.length;
    setIndex(((nextIndex % len) + len) % len);
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
        className="relative w-full overflow-hidden rounded-[2px]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div key={slide.id} className="qantas-dissolve">
          {slide.kind === "video" ? (
            <video
              src={slide.videoSrc}
              poster={img(slide.posterKey)}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
              className="block w-full"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={img(slide.imageKey)}
              alt={slide.tabLabel}
              className="block w-full"
            />
          )}
        </div>

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

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide (description nav)"
          className="font-mono text-[14px] tracking-[0.05em] text-[#afafaf] transition-all duration-150 hover:text-ink active:scale-90"
        >
          ←
        </button>
        <span
          key={slide.id}
          className="qantas-dissolve max-w-[220px] text-center font-mono text-[14px] tracking-[0.05em] text-ink sm:max-w-[420px]"
        >
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
