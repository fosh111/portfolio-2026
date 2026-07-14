import { img } from "@/lib/images";

export function Figure({
  imageKey,
  hoverImageKey,
  label,
  className = "",
  rounded = "rounded-none",
  labelClassName = "",
  bg = "bg-card",
}: {
  imageKey: string;
  hoverImageKey?: string;
  label?: string;
  className?: string;
  rounded?: string;
  labelClassName?: string;
  /** Container background, shown through any transparent pixels in the
   * image itself. Defaults to bg-card (right for photos/thumbnails, which
   * are fully opaque anyway). Pass "bg-transparent" for assets that are
   * meant to float free, like logos with real alpha transparency. */
  bg?: string;
}) {
  const src = img(imageKey);
  const hoverSrc = hoverImageKey ? img(hoverImageKey) : "";

  if (src) {
    return (
      <div className={`relative overflow-hidden ${bg} ${rounded} ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={label ?? ""}
          className={`h-full w-full object-cover ${
            hoverSrc ? "transition-opacity duration-300 ease-out group-hover:opacity-0" : ""
          }`}
        />
        {hoverSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={hoverSrc}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
          />
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${bg} ${rounded} ${className}`}
      role="img"
      aria-label={label ?? "Image placeholder"}
    >
      {/* Subtle grid texture to read as an intentional canvas, not a broken image */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {label && (
        <span
          className={`relative z-10 max-w-[80%] text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted ${labelClassName}`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
