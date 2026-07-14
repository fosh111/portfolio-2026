import { PageChrome } from "@/components/PageChrome";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ThumbnailCard } from "@/components/ThumbnailCard";
import { CASE_STUDIES, CASE_STUDIES_INTRO } from "@/lib/content";

export const metadata = {
  title: "Case Studies — Jose R. Parra",
};

export default function CaseStudiesPage() {
  return (
    <PageChrome active="case-studies">
      <Container width="inner">
        <div className="mx-auto max-w-[950px]">
          <Reveal className="max-w-[563px]">
            <h1 className="font-display text-[56px] leading-none tracking-tight2 text-ink sm:text-[72px]">
              Case studies
            </h1>
            <p className="mt-6 text-[16px] leading-6 text-muted-body">
              {CASE_STUDIES_INTRO}
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {CASE_STUDIES.map((study, i) => (
              <Reveal key={study.slug} delay={(i % 2) * 90}>
                <ThumbnailCard study={study} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </PageChrome>
  );
}
