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
}: {
  lead: string;
  accent: string;
  className?: string;
}) {
  return (
    <span className={`font-serif ${className}`}>
      <span className="text-ink">{lead} </span>
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
      className="inline-flex h-14 items-center justify-center rounded-full border-2 border-stroke bg-paper px-7 font-mono text-[18px] text-stroke transition-colors hover:bg-ink hover:text-paper"
    >
      {children}
    </a>
  );
}
