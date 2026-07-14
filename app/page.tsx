import Link from "next/link";
import { SITE } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16 sm:px-16">
      <div className="flex w-full max-w-[1120px] flex-col gap-10">
        <header className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
          <h1 className="font-display text-[44px] leading-none text-ink sm:text-[64px]">
            {SITE.name}
          </h1>
          <p className="font-display text-[22px] font-light italic text-muted-soft sm:text-[32px]">
            {SITE.role}
          </p>
        </header>

        <Reveal className="flex flex-col items-center gap-10 sm:flex-row sm:gap-20">
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
            className="inline-flex h-14 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-paper/50 px-7 font-mono text-[18px] text-ink shadow-[0_8px_24px_rgba(0,0,0,0.15)] backdrop-blur-[20px] backdrop-saturate-150 transition-all duration-300 dark:shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-ink/10 hover:shadow-[0_10px_28px_rgba(0,0,0,0.2)]"
          >
            ENTER →
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
