import Link from "next/link";
import { SITE } from "@/lib/content";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16 sm:px-16">
      <div className="flex w-full max-w-[1120px] flex-col gap-10">
        <header className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
          <h1 className="font-display text-[44px] leading-none text-black sm:text-[64px]">
            {SITE.name}
          </h1>
          <p className="font-display text-[22px] font-light italic text-muted-soft sm:text-[32px]">
            {SITE.role}
          </p>
        </header>

        <div className="flex flex-col items-center gap-10 sm:flex-row sm:gap-20">
          <div className="relative aspect-[771/459] w-full overflow-hidden rounded-[2px] bg-card sm:flex-1">
            <video
              src="/videos/intro-hero.mp4"
              poster="/images/home-reel.png"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Design & wireframe reel"
              className="h-full w-full object-cover"
            />
          </div>
          <Link
            href="/about"
            className="inline-flex h-14 shrink-0 items-center justify-center rounded-full border-2 border-stroke bg-paper px-7 font-mono text-[18px] text-stroke transition-colors hover:bg-ink hover:text-paper"
          >
            ENTER →
          </Link>
        </div>
      </div>
    </main>
  );
}
