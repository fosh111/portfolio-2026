"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { useRouter } from "next/navigation";

// Client-side-only soft gate -- the password ships in the JS bundle either
// way, same as any front-end check. This is a fun barrier, not real
// security, and shouldn't be used to protect anything sensitive.
const SITE_PASSWORDS = ["2026!*", "Apr2026!", "Apr26!"];

// Cookie (not sessionStorage) so middleware.ts can read it too -- that's
// what lets a direct link to an inner page (e.g. /case-studies) redirect
// back here if the visitor hasn't unlocked. No max-age/expires is set, so
// it behaves like a session cookie: survives reloads/navigation in this
// tab, forgotten once the browser is closed. Keep this in sync with
// UNLOCK_COOKIE in middleware.ts.
const UNLOCK_KEY = "portfolio-unlocked";

function readUnlockCookie(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie
    .split("; ")
    .some((entry) => entry === `${UNLOCK_KEY}=true`);
}

function writeUnlockCookie() {
  document.cookie = `${UNLOCK_KEY}=true; path=/; SameSite=Lax`;
}

function CloseIcon({ className = "" }: { className?: string }) {
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
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function InfoIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="12" cy="7.7" r="1.05" fill="currentColor" />
      <rect x="11" y="10.6" width="2" height="6" rx="1" fill="currentColor" />
    </svg>
  );
}

/**
 * ENTER pill that expands in place into a password field (same glass shell,
 * no modal/overlay) rather than navigating immediately. Matches the
 * ThemeToggle/PillLink glass recipe so it stays consistent in both themes.
 */
export function EnterGate({
  href = "/about",
  className = "",
}: {
  href?: string;
  className?: string;
}) {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [value, setValue] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Read before paint (mirrors the ThemeToggle pattern) so there's no
  // flash of the prompt for someone who's already unlocked this session.
  useLayoutEffect(() => {
    if (readUnlockCookie()) setUnlocked(true);
  }, []);

  function handleTriggerClick() {
    if (unlocked) {
      router.push(href);
      return;
    }
    expand();
  }

  function expand() {
    setExpanded(true);
    setStatus("idle");
    window.setTimeout(() => inputRef.current?.focus(), 200);
  }

  function collapse() {
    setExpanded(false);
    setStatus("idle");
    setValue("");
  }

  function handleTriggerKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (expanded) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleTriggerClick();
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (SITE_PASSWORDS.includes(value)) {
      setStatus("success");
      writeUnlockCookie();
      setUnlocked(true);
      window.setTimeout(() => router.push(href), 700);
    } else {
      setStatus("error");
      setValue("");
      inputRef.current?.focus();
      window.setTimeout(() => {
        setStatus((s) => (s === "error" ? "idle" : s));
      }, 400);
    }
  }

  const stateClasses =
    status === "error"
      ? "border-accent/60 shadow-[0_8px_24px_rgba(204,0,0,0.2)] dark:shadow-[0_8px_24px_rgba(255,92,92,0.25)] animate-[gate-shake_380ms_ease]"
      : status === "success"
        ? "border-[rgb(90,170,100)] shadow-[0_8px_24px_rgba(80,170,90,0.2)] dark:border-[rgb(120,200,130)] dark:shadow-[0_8px_24px_rgba(120,200,130,0.2)]"
        : "border-ink/10 shadow-[0_8px_24px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)]";

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        role={!expanded ? "button" : undefined}
        tabIndex={!expanded ? 0 : undefined}
        aria-label={!expanded ? "Enter" : undefined}
        onClick={!expanded ? handleTriggerClick : undefined}
        onKeyDown={handleTriggerKeyDown}
        className={`relative flex h-14 shrink-0 items-center overflow-hidden rounded-full border bg-paper/50 backdrop-blur-[20px] backdrop-saturate-150 transition-all duration-300 ${
          expanded ? "w-[320px]" : "w-[152px] cursor-pointer"
        } ${stateClasses}`}
      >
        <span
          className={`pointer-events-none absolute inset-0 flex items-center justify-center gap-2 font-mono text-[18px] text-ink transition-opacity duration-200 ${
            expanded ? "opacity-0" : "opacity-100"
          }`}
        >
          ENTER →
        </span>

        <form
          onSubmit={handleSubmit}
          className={`absolute inset-0 flex items-center gap-2 px-2 transition-opacity delay-150 duration-200 ${
            expanded ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={collapse}
            aria-label="Cancel"
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ink/10 text-ink transition-colors hover:bg-ink/15"
          >
            <CloseIcon className="size-4" />
          </button>
          <input
            ref={inputRef}
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter password"
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent font-mono text-[15px] text-ink outline-none placeholder:text-ink/40"
          />
          <button
            type="submit"
            aria-label="Submit password"
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ink/10 text-ink transition-colors hover:bg-ink/15"
          >
            <ArrowIcon className="size-4" />
          </button>
        </form>
      </div>

      {/* "password required" nudge -- only while idle/collapsed, same slot
          the error/success message below takes over once expanded. */}
      <div
        className={`pointer-events-none absolute left-1/2 top-[68px] flex -translate-x-1/2 items-center gap-[7px] whitespace-nowrap transition-opacity duration-200 ${
          expanded || unlocked ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="relative flex size-[18px] shrink-0 items-center justify-center">
          <span className="absolute inset-0 animate-[hint-ping_2.2s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full border border-muted-dark/50" />
          <InfoIcon className="relative size-[18px] text-muted-dark" />
        </span>
        <span className="eyebrow text-muted-dark">password required</span>
      </div>

      <p
        aria-live="polite"
        className={`pointer-events-none absolute left-1/2 top-[68px] -translate-x-1/2 whitespace-nowrap text-center font-mono text-[11px] tracking-[0.04em] transition-all duration-200 ${
          status === "error"
            ? "translate-y-0 text-accent opacity-100"
            : status === "success"
              ? "translate-y-0 text-[rgb(90,160,100)] opacity-100 dark:text-[rgb(130,210,140)]"
              : "-translate-y-1 opacity-0"
        }`}
      >
        {status === "error" && "Incorrect password — try again"}
        {status === "success" && "✓ Correct — entering..."}
      </p>
    </div>
  );
}
