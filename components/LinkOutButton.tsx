export function LinkOutButton({
  href,
  label,
  accent,
  className = "",
}: {
  href: string;
  label: string;
  accent: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-2 font-serif text-[24px] ${className}`}
    >
      <span className="whitespace-nowrap underline decoration-from-font underline-offset-2">
        <span className="text-ink transition-colors duration-200 group-hover:text-muted">
          {label}{" "}
        </span>
        <span className="italic text-muted transition-colors duration-200 group-hover:text-ink">
          {accent}
        </span>
      </span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="shrink-0 text-ink transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        <path
          d="M4 12L12 4M12 4H5.5M12 4V10.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
