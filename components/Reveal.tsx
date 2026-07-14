"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Wraps children in a fade + rise scroll animation. Content animates in
 * when it enters the viewport and animates back out when it scrolls out
 * of view in either direction — driven by IntersectionObserver toggling
 * the `.reveal-in` class defined in globals.css (see `.reveal`).
 *
 * Once the enter transition finishes, the transform is dropped entirely
 * (`.reveal-settled`) rather than left at translateY(0). A lingering
 * `transform` — even an identity one — creates a new containing block,
 * which breaks any `position: sticky` descendant (e.g. the case study
 * hero image, the About page case-study preview panel). Settling to
 * `transform: none` keeps those working once the reveal is at rest.
 *
 * Respects prefers-reduced-motion globally (handled in globals.css).
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
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
      { threshold, rootMargin: "0px 0px -10% 0px" },
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
