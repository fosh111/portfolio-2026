import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import type { NavKey } from "@/lib/content";

export function PageChrome({
  children,
  active,
}: {
  children: ReactNode;
  active?: NavKey;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader active={active} />
      <main className="flex-1 pt-12 sm:pt-16">{children}</main>
      <SiteFooter />
    </div>
  );
}
