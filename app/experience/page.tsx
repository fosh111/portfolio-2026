import { PageChrome } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Container";
import { ExperienceList } from "@/components/ExperienceList";
import { SITE, EXPERIENCE_INTRO } from "@/lib/content";
import { LinkOutButton } from "@/components/LinkOutButton";

export const metadata = {
  title: "Experience — Jose R. Parra",
};

export default function ExperiencePage() {
  return (
    <PageChrome active="experience">
      <Container width="inner">
        <Reveal className="max-w-[563px]">
          <h1 className="font-display text-[56px] leading-none tracking-tight2 text-ink sm:text-[72px]">
            Experience
          </h1>
          <p className="mt-6 text-[16px] leading-6 text-muted-body">
            {EXPERIENCE_INTRO}
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <ExperienceList />
        </Reveal>

        <Reveal className="mt-16 flex justify-center">
          <LinkOutButton href={SITE.linkedin} label="more on" accent="linkedin" />
        </Reveal>
      </Container>
    </PageChrome>
  );
}
