import { img } from "@/lib/images";

export function Figure({
  imageKey,
  label,
  className = "",
  rounded = "rounded-none",
  labelClassName = "",
}: {
  imageKey: string;
  label?: string;
  className?: string;
  rounded?: string;
  labelClassName?: string;
}) {
  const src = img(imageKey);

  if (src) {
    return (
      <div className={`relative overflow-hidden bg-card ${rounded} ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={label ?? ""}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-card ${rounded} ${className}`}
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
