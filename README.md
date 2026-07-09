# Jose R. Parra — Portfolio

Personal portfolio for Jose R. Parra (Senior Product / Industrial / VR Designer), built from the Figma design.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling, with design tokens mapped from Figma
- Google Fonts (Fraunces, Instrument Serif, Fira Code, Inter) loaded via `<link>`

## Pages

| Route | Description |
| --- | --- |
| `/` | Splash / entry screen |
| `/about` | About, case-studies menu, experience |
| `/case-studies` | Case study grid |
| `/case-studies/[slug]` | Qantas · CBA · Convoke Lab detail pages |
| `/experience` | Full experience list |
| `/contact` | Email + LinkedIn |

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Images

Image slots are wired through `lib/images.ts`. Each key maps to a file in
`/public/images`. Where a value is empty, an on-brand placeholder canvas renders
in its place. To add a real asset, drop it in `/public/images` and set its path
in `lib/images.ts` (e.g. `"about-hero": "/images/about-hero.png"`).

## Deploy

Deploys to Vercel with zero config — Vercel auto-detects Next.js. Push to the
connected repo and Vercel builds and deploys automatically.

## Content

All copy lives in `lib/content.ts` for easy editing.
