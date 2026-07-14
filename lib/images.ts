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
  "menu-default": "/images/menu-default.png",
  "carousel-qantas-new-ui": "/images/carousel-qantas/new-ui-poster.png",
  "carousel-qantas-service-design": "/images/carousel-qantas/service-design.png",
  "carousel-qantas-research": "/images/carousel-qantas/research.png",
  "carousel-qantas-legacy-preview": "/images/carousel-qantas/legacy-preview.png",
  "carousel-qantas-legacy-detail": "/images/carousel-qantas/legacy-detail.png",
  "carousel-qantas-final-mask": "/images/carousel-qantas/final-mask.png",
  "carousel-qantas-final-preview": "/images/carousel-qantas/final-preview.png",
  "carousel-qantas-user-testing-image": "/images/carousel-qantas/user-testing-image.png",
  "carousel-qantas-user-testing-secondary": "/images/carousel-qantas/user-testing-secondary.png",
  "carousel-qantas-sneak-peak": "/images/carousel-qantas/sneak-peak-poster.png",
  "carousel-cba-intro-mask": "/images/carousel-cba/intro-mask.png",
  "carousel-cba-intro-addressbar": "/images/carousel-cba/intro-addressbar.png",
  "carousel-cba-mobile-design": "/images/carousel-cba/mobile-design.png",
  "carousel-cba-flow-1": "/images/carousel-cba/flow-1.png",
  "carousel-cba-flow-2": "/images/carousel-cba/flow-2.png",
  "carousel-cba-ab-1": "/images/carousel-cba/ab-1.png",
  "carousel-cba-design-critique-1": "/images/carousel-cba/design-critique-1.png",
  "carousel-cba-design-critique-2": "/images/carousel-cba/design-critique-2.png",
  "carousel-cba-design-critique-3": "/images/carousel-cba/design-critique-3.png",
  "carousel-cba-stakeholder": "/images/carousel-cba/stakeholder.png",
  "carousel-cba-ut-insights": "/images/carousel-cba/ut-insights.png",
  "carousel-cba-delivery": "/images/carousel-cba/delivery.png",
  "carousel-cba-stitching-1": "/images/carousel-cba/stitching-1.png",
};

export function img(key: string): string {
  return IMAGES[key] ?? "";
}
