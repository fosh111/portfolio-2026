import { SITE, WORKED_WITH } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { EnterGate } from "@/components/EnterGate";

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
          <EnterGate href="/about" />
        </Reveal>

        <Reveal className="mt-4 border-t border-line-soft pt-7">
          <p className="eyebrow text-muted">worked with</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-4">
            {WORKED_WITH.map((name) => (
              <span
                key={name}
                className="font-mono text-[18px] text-ink/60 dark:text-ink/60"
              >
                {name}
              </span>
            ))}
            <span className="font-mono text-[18px] text-ink/35 dark:text-ink/40">
              + others
            </span>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
