"use client";

import { useLayoutEffect, useState } from "react";

function SunIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
  );
}

function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />
    </svg>
  );
}

/**
 * Floating glass theme toggle. Fixed to the bottom-right corner and mounted
 * once in the root layout, so it persists (unmounted-free) across route
 * changes and stays visible on every page.
 *
 * Colors are the theme tokens (ink/paper/etc, defined as CSS vars in
 * globals.css and swapped under html.dark), so the toggle automatically
 * re-skins itself for whichever theme is currently active -- no separate
 * light/dark component variant needed here, unlike FloatingGlassButton
 * (which is placement-based rather than theme-based).
 */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Runs synchronously before paint, after the inline anti-FOUC script in
  // the document head has already set html.dark (if applicable) -- so this
  // just mirrors the already-correct DOM state into React, with no visible
  // flash and no SSR/client hydration mismatch (both render "light" first).
  useLayoutEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable (private mode etc) -- toggle still works
      // for the current session, it just won't persist.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      suppressHydrationWarning
      className="fixed bottom-6 right-6 z-50 flex h-14 w-[104px] items-center rounded-full border border-ink/10 bg-paper/50 p-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.15)] backdrop-blur-[20px] backdrop-saturate-150 transition-colors duration-300 dark:shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)]"
    >
      <span className="flex w-full items-center justify-between px-[13px]">
        <SunIcon
          className={`size-[18px] transition-opacity duration-300 ${
            isDark ? "text-ink/40" : "text-ink"
          }`}
        />
        <MoonIcon
          className={`size-[18px] transition-opacity duration-300 ${
            isDark ? "text-ink" : "text-ink/40"
          }`}
        />
      </span>
      <span
        className={`absolute left-1.5 flex size-11 items-center justify-center rounded-full bg-paper shadow-[0_4px_14px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.5)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDark ? "translate-x-12" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <MoonIcon className="size-5 text-ink" />
        ) : (
          <SunIcon className="size-5 text-ink" />
        )}
      </span>
    </button>
  );
}
