// Central image manifest. Once the real Figma assets are downloaded into
// /public/images, set the value here (e.g. "/images/about-hero.png") and the
// <Figure> component will render the image instead of the placeholder.
// Left empty => an on-brand placeholder canvas renders in its place.

export const IMAGES: Record<string, string> = {
  "about-hero": "",
  "logo-qantas": "",
  "logo-convokelab": "",
  "logo-cba": "",
  "logo-academyxi": "",
  "logo-forage": "",
  "qantas-hero": "",
  "qantas-outcome": "",
  "cba-hero": "",
  "cba-outcome": "",
  "convokelab-hero": "",
  "convokelab-outcome": "",
  "thumb-qantas": "",
  "thumb-cba": "",
  "thumb-convokelab": "",
  "thumb-forage": "",
  "home-reel": "",
};

export function img(key: string): string {
  return IMAGES[key] ?? "";
}
