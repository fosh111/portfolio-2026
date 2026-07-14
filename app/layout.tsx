import type { Metadata } from "next";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GoogleAnalytics } from "@next/third-parties/google";

// Runs before hydration (blocking, in <head>) to set html.dark from the
// stored preference (or system preference on first visit) so there's no
// flash of the wrong theme on load. Kept as a plain inline script rather
// than a dependency since the site otherwise has no theme/dark-mode infra.
const NO_FLASH_THEME_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (theme === "dark") document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

const FONT_HREF =
  "https://fonts.googleapis.com/css2?" +
  "family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,100..900,0..100,0..1;1,9..144,100..900,0..100,0..1&" +
  "family=Instrument+Serif:ital@0;1&" +
  "family=Fira+Code:wght@300;400;500;700&" +
  "family=Inter:wght@400;500;600&" +
  "display=swap";

export const metadata: Metadata = {
  title: "Jose R. Parra — Product, Industrial & VR Designer",
  description:
    "Senior Product Designer bridging tier-one enterprise scale and startup velocity. Modernising legacy platforms into high-converting engines for Qantas and CBA, and building 0\u21921 products at Convoke Lab and Forage.",
  openGraph: {
    title: "Jose R. Parra — Product, Industrial & VR Designer",
    description:
      "10+ years designing impactful digital and physical experiences through human-centred design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH_THEME_SCRIPT }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={FONT_HREF} />
      </head>
      <body className="bg-paper font-sans text-ink antialiased">
        {children}
        <ThemeToggle />
        {/* GA4 via Next's official helper. Reads NEXT_PUBLIC_GA_ID (set in
            Vercel). Gated to production so localhost/preview dev doesn't
            pollute analytics; renders nothing if the id is unset. */}
        {gaId && process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId={gaId} />
        )}
      </body>
    </html>
  );
}
