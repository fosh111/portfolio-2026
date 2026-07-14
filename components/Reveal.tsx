"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Wraps children in a fade + rise scroll animation. Content animates in
 * when it enters the viewport and animates back out when it scrolls out
 * of view in either direction — driven by IntersectionObserver toggling
 * the `.reveal-in` class defined in globals.css (see `.reveal`).
 *
 * The trigger boundary is the actual viewport edge (no rootMargin) with
 * threshold 0, so the reveal fires the instant a section's top touches
 * the bottom of the screen — no earlier (or it'd pre-reveal content on
 * page load, before the user has scrolled at all, killing the visible
 * effect) and no later (which left a "scrolled it into view but it's
 * still blank" dead zone with the old ratio-based threshold).
 *
 * Once the enter transition finishes, the transform is dropped entirely
 * (`.reveal-settled`) rather than left at translateY(0). A lingering
 * `transform` — even an identity one — creates a new containing block,
 * which breaks any `position: sticky` descendant (e.g. the case study
 * hero image, the About page case-study preview panel). Settling to
 * `transform: none` keeps those working once the reveal is at rest.
 *
 * Use `once` for anything whose height can change a lot after it's first
 * revealed (e.g. an accordion/expander). Ratio-based visibility is
 * recomputed against the element's *current* height, so a block that
 * grows tall after a click can suddenly read as "mostly off-screen" and
 * fade back out even though the user just interacted with it. `once`
 * sidesteps that by locking the reveal in after the first appearance.
 *
 * Respects prefers-reduced-motion globally (handled in globals.css).
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  threshold = 0,
  once = false,
}: {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms, useful for revealing a row of items in sequence. */
  delay?: number;
  /** Fraction of the element that must be visible to trigger the reveal. */
  threshold?: number;
  /** If true, plays once and stays revealed instead of reversing on exit. */
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
          setSettled(false);
        }
      },
      { threshold, rootMargin: "0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "reveal-in" : ""} ${settled ? "reveal-settled" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      onTransitionEnd={(e) => {
        if (e.propertyName === "transform" && inView) setSettled(true);
      }}
    >
      {children}
    </div>
  );
}
