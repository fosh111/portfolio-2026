// Central image manifest. Once the real Figma assets are downloaded into
// /public/images, set the value here (e.g. "/images/about-hero.png") and the
// <Figure> component will render the image instead of the placeholder.
// Left empty => an on-brand placeholder canvas renders in its place.

export const IMAGES: Record<string, string> = {
  "about-hero": "/images/about-hero.png",
  "logo-qantas": "/images/logo-qantas.png",
  "logo-convokelab": "/images/logo-convokelab.png",
  "logo-cba": "/images/logo-cba.png",
  "logo-academyxi": "/images/logo-academyxi.png",
  "logo-forage": "/images/logo-forage.png",
  "qantas-hero": "/images/qantas-hero.png",
  "qantas-outcome": "/images/qantas-outcome.png",
  "cba-hero": "/images/cba-hero.png",
  "cba-outcome": "/images/cba-outcome.png",
  "convokelab-hero": "/images/convokelab-hero.png",
  "convokelab-outcome": "/images/convokelab-outcome.png",
  "thumb-qantas": "/images/thumb-qantas.png",
  "thumb-cba": "/images/thumb-cba.png",
  "thumb-convokelab": "/images/thumb-convokelab.png",
  "thumb-forage": "/images/thumb-forage.png",
  "thumb-qantas-hover": "/images/thumb-qantas-hover.png",
  "thumb-cba-hover": "/images/thumb-cba-hover.png",
  "thumb-convokelab-hover": "/images/thumb-convokelab-hover.png",
  "thumb-forage-hover": "/images/thumb-forage-hover.png",
  "home-reel": "/images/home-reel.png",
};

export function img(key: string): string {
  return IMAGES[key] ?? "";
}
