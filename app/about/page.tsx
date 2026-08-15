import { PageChrome } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Container";
import { Figure } from "@/components/Figure";
import { CaseStudyMenu } from "@/components/CaseStudyMenu";
import { ExperienceList } from "@/components/ExperienceList";
import { SectionLabel, TertiaryLink } from "@/components/ui";
import { LinkOutButton } from "@/components/LinkOutButton";
import { ABOUT, SITE } from "@/lib/content";

export default function AboutPage() {
  return (
    <PageChrome active="about">
      {/* Hero */}
      <Container width="inner">
        <Reveal className="grid grid-cols-1 gap-10 md:grid-cols-[563px_minmax(0,1fr)]">
          <div className="flex flex-col gap-6">
            <h1 className="font-display text-[64px] leading-none tracking-tight2 text-ink sm:text-[84px]">
              About
            </h1>
            <div className="flex flex-col gap-3">
              <p className="text-[16px] leading-6 text-muted-body">
                {ABOUT.lead}
              </p>
              <p className="text-[14px] leading-5 text-muted">{ABOUT.sub}</p>
            </div>
          </div>
          <div className="md:sticky md:top-24">
            <Figure
              imageKey="about-hero"
              label="Portrait"
              className="aspect-[498/414] w-full"
              rounded="rounded-[2px]"
            />
          </div>
        </Reveal>
      </Container>

      {/* Case studies */}
      <Container width="inner" className="mt-24">
        <Reveal>
          <SectionLabel>UX/UI case studies</SectionLabel>
          <div className="mt-6">
            <CaseStudyMenu />
          </div>
        </Reveal>
      </Container>

      {/* Experience */}
      <Container width="inner" className="mt-24">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
          <div className="mt-6">
            <ExperienceList />
          </div>
        </Reveal>
      </Container>

      {/* LinkedIn CTA */}
      <Container width="inner" className="mt-12">
        <Reveal className="flex flex-col items-center gap-8">
          <LinkOutButton href={SITE.linkedin} label="more on" accent="linkedin" />
          <TertiaryLink href="/case-studies">View case studies</TertiaryLink>
        </Reveal>
      </Container>
    </PageChrome>
  );
}
