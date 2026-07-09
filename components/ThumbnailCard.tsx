import Link from "next/link";
import { Figure } from "./Figure";
import type { CaseStudySummary } from "@/lib/content";

export function ThumbnailCard({ study }: { study: CaseStudySummary }) {
  const card = (
    <div className="group relative aspect-square w-full overflow-hidden rounded-[2px] bg-card">
      <Figure
        imageKey={`thumb-${study.slug}`}
        label={`${study.titleLead} ${study.titleAccent}`}
        className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.02]"
      />
      {/* Brand badge */}
      <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-panel px-3 py-1.5">
        <span className="font-mono text-[10px] font-medium tracking-[0.05em] text-white">
          {study.company.toUpperCase()}
        </span>
      </div>
      {!study.available && (
        <div className="absolute right-3 top-3 bg-paper/85 px-2 py-1">
          <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted-dark">
            Coming soon
          </span>
        </div>
      )}
    </div>
  );

  if (!study.available) return card;

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="block"
      aria-label={`${study.titleLead} ${study.titleAccent} — ${study.company}`}
    >
      {card}
    </Link>
  );
}
