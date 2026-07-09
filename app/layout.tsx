import type { Metadata } from "next";
import "./globals.css";

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
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={FONT_HREF} />
      </head>
      <body className="bg-paper font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
