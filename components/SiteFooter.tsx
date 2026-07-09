import { SITE } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-24 w-full">
      <div className="mx-auto max-w-content px-6 py-10 sm:px-20">
        <div className="h-px w-full bg-line-soft" />
        <div className="mt-6 flex items-start justify-between">
          <p className="font-display text-[13px] tracking-[0.07em] text-ink">
            {SITE.name}
          </p>
          <p className="font-mono text-[10px] font-light text-muted">
            © {SITE.year}
          </p>
        </div>
      </div>
    </footer>
  );
}
