import { PageChrome } from "@/components/PageChrome";
import { Container } from "@/components/Container";
import { ExperienceList } from "@/components/ExperienceList";
import { SITE, EXPERIENCE_INTRO } from "@/lib/content";

export const metadata = {
  title: "Experience — Jose R. Parra",
};

export default function ExperiencePage() {
  return (
    <PageChrome active="experience">
      <Container width="inner">
        <div className="max-w-[563px]">
          <h1 className="font-display text-[56px] leading-none tracking-tight2 text-ink sm:text-[72px]">
            Experience
          </h1>
          <p className="mt-6 text-[16px] leading-6 text-muted-body">
            {EXPERIENCE_INTRO}
          </p>
        </div>

        <div className="mt-14">
          <ExperienceList />
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-serif text-[24px] text-ink underline decoration-from-font underline-offset-2"
          >
            more on <span className="italic text-muted">linkedin</span>
          </a>
        </div>
      </Container>
    </PageChrome>
  );
}
