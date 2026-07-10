import { PageChrome } from "@/components/PageChrome";
import { Container } from "@/components/Container";
import { Figure } from "@/components/Figure";
import { CaseStudyMenu } from "@/components/CaseStudyMenu";
import { ExperienceList } from "@/components/ExperienceList";
import { SectionLabel } from "@/components/ui";
import { LinkOutButton } from "@/components/LinkOutButton";
import { ABOUT, SITE } from "@/lib/content";

export default function AboutPage() {
  return (
    <PageChrome active="about">
      {/* Hero */}
      <Container width="inner">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[563px_minmax(0,1fr)]">
          <div className="flex flex-col gap-6">
            <h1 className="font-display text-[64px] leading-none tracking-tight2 text-ink sm:text-[84px]">
              About
            </h1>
            <div className="flex flex-col gap-1">
              <p className="text-[16px] leading-6 text-muted-body">
                {ABOUT.lead}
              </p>
              <p className="text-[14px] leading-5 text-muted">{ABOUT.sub}</p>
            </div>
          </div>
          <Figure
            imageKey="about-hero"
            label="Portrait"
            className="aspect-[498/414] w-full"
            rounded="rounded-[2px]"
          />
        </div>
      </Container>

      {/* Case studies */}
      <Container width="inner" className="mt-24">
        <SectionLabel>UX/UI case studies</SectionLabel>
        <div className="mt-6">
          <CaseStudyMenu />
        </div>
      </Container>

      {/* Experience */}
      <Container width="inner" className="mt-24">
        <SectionLabel>Experience</SectionLabel>
        <div className="mt-6">
          <ExperienceList />
        </div>
      </Container>

      {/* LinkedIn CTA */}
      <Container width="inner" className="mt-16">
        <div className="flex justify-center">
          <LinkOutButton href={SITE.linkedin} label="more on" accent="linkedin" />
        </div>
      </Container>
    </PageChrome>
  );
}
