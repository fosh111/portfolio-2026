import { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-serif text-[32px] leading-none text-muted">
      {children}
    </h2>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full bg-line ${className}`} />;
}

export function Dot() {
  return (
    <span className="inline-block size-[3px] shrink-0 rounded-full bg-muted" />
  );
}

/** Serif title with an italic-muted accent word, e.g. "Multichannel seat selection" */
export function AccentTitle({
  lead,
  accent,
  className = "",
  leadClassName = "text-ink",
}: {
  lead: string;
  accent: string;
  className?: string;
  leadClassName?: string;
}) {
  return (
    <span className={`font-serif ${className}`}>
      <span className={leadClassName}>{lead} </span>
      <span className="italic text-muted">{accent}</span>
    </span>
  );
}

export function MetaRow({ items }: { items: string[] }) {
  return (
    <div className="flex items-center gap-2">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <Dot />}
          <span className="tag text-muted">{item}</span>
        </span>
      ))}
    </div>
  );
}

export function PillLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="inline-flex h-14 items-center justify-center rounded-full border border-white/60 bg-white/30 px-7 font-mono text-[18px] text-stroke shadow-[0_8px_30px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur-[20px] backdrop-saturate-150 transition-all duration-300 hover:border-white/25 hover:bg-ink/55 hover:text-paper hover:shadow-[0_8px_30px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.15)]"
    >
      {children}
    </a>
  );
}

/**
 * Floating glass pill — not yet wired into any page. Standalone building
 * block for a future "sticky CTA over scrolling content" treatment, where
 * backdrop-blur has real content underneath to blur. Pick the surface that
 * matches what it will float over (paper/card → light, panel/video → dark).
 */
export function FloatingGlassButton({
  href,
  children,
  surface = "light",
  className = "",
}: {
  href: string;
  children: ReactNode;
  surface?: "light" | "dark";
  className?: string;
}) {
  const surfaceClasses =
    surface === "dark"
      ? "border border-white/15 bg-black/30 text-paper shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-black/50"
      : "border border-black/10 bg-white/50 text-ink shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:bg-white/70";

  return (
    <a
      href={href}
      className={`inline-flex h-14 items-center justify-center rounded-full px-7 font-mono text-[18px] backdrop-blur-lg backdrop-saturate-150 transition-all duration-300 ${surfaceClasses} ${className}`}
    >
      {children}
    </a>
  );
}
