"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, SITE, type NavKey } from "@/lib/content";

export function SiteHeader({ active }: { active?: NavKey }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line-faint bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-[57px] max-w-content items-center justify-between px-6 sm:px-14">
        <Link
          href="/"
          className="font-display text-[13px] tracking-[0.07em] text-ink"
        >
          {SITE.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-[52px] md:flex">
          {NAV.map((item) => {
            const isActive = active === item.key;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`eyebrow transition-colors hover:text-ink ${
                  isActive ? "text-muted-dark" : "text-muted-light"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="eyebrow text-muted-dark md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="border-t border-line-faint bg-paper px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`eyebrow ${
                    active === item.key ? "text-ink" : "text-muted-light"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
