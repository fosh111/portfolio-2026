import { ReactNode } from "react";

export function Container({
  children,
  className = "",
  width = "content",
}: {
  children: ReactNode;
  className?: string;
  width?: "content" | "inner" | "study";
}) {
  const max =
    width === "study"
      ? "max-w-study"
      : width === "inner"
        ? "max-w-inner"
        : "max-w-content";
  return (
    <div className={`mx-auto w-full ${max} px-6 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}
