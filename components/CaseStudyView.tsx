import { Container } from "./Container";
import { Figure } from "./Figure";
import { ThumbnailCard } from "./ThumbnailCard";
import {
  MetricCard,
  TellMeMore,
  ExpandedCaseStudyContent,
  CbaExpandedContent,
  ConvokelabExpandedContent,
  ConvokelabProcessCarousel,
  QantasCarousel,
  CBACarousel,
} from "./CaseStudyParts";
import { SectionLabel, Divider, Dot, PillLink } from "./ui";
import { CASE_STUDIES, type CaseStudyDetail } from "@/lib/content";

function ProcessCanvas({ study }: { study: CaseStudyDetail }) {
  if (study.slug === "convokelab") {
    return <ConvokelabProcessCarousel videoSrc="/videos/convokelab-process.mp4" />;
  }
  if (study.slug === "qantas") {
    return <QantasCarousel />;
  }
  if (study.slug === "cba") {
    return <CBACarousel />;
  }
  return (
    <div className="relative w-full overflow-hidden rounded-[2px] bg-card">
      <div className="flex gap-4 overflow-x-auto p-6 hide-scrollbar sm:p-10">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <Figure
            key={i}
            imageKey=""
            label={`Frame ${i + 1}`}
            className="aspect-[9/19] w-[130px] shrink-0 bg-[#d6d6d6]"
            rounded="rounded-[6px]"
            labelClassName="text-[8px]"
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 pb-6">
        <span className="font-mono text-[14px] tracking-[0.05em] text-ink">
          ← DESIGN PROCESS →
        </span>
      </div>
    </div>
  );
}

export function CaseStudyView({ study }: { study: CaseStudyDetail }) {
  const others = CASE_STUDIES.filter((c) => c.slug !== study.slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <Container width="study">
        <div className="flex flex-col gap-2">
          <Figure
            imageKey={`logo-${study.slug}`}
            label={study.company.split(" ")[0]}
            className="size-24"
            rounded="rounded-[4px]"
            labelClassName="text-[9px]"
          />
          <h1 className="font-display text-[40px] leading-[1.05] tracking-tight2 text-ink sm:text-[48px]">
            {study.titleLead} {study.titleAccent}
          </h1>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[18px] text-muted sm:text-[24px]">
              {study.company}
            </span>
            <Dot />
            <span className="font-mono text-[18px] tracking-[0.05em] text-muted sm:text-[24px]">
              {study.period}
            </span>
          </div>
        </div>

        <Divider className="my-6" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[534px_minmax(0,1fr)]">
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-serif text-[20px] text-muted">Role</p>
              <p className="mt-1 text-[14px] leading-5 text-ink">
                {study.role}
              </p>
            </div>
            <div>
              <p className="font-serif text-[20px] text-muted">Challenge</p>
              <p className="mt-1 text-[14px] leading-5 text-ink">
                {study.challenge}
              </p>
            </div>
            <div>
              <p className="font-serif text-[20px] text-muted">
                Key contributions
              </p>
              <div className="mt-2 flex flex-col gap-4">
                {study.contributions.map((c) => (
                  <div key={c.heading}>
                    <p className="text-[14px] font-semibold leading-6 text-ink">
                      {c.heading}
                    </p>
                    <p className="text-[14px] leading-5 text-ink">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Figure
            imageKey={`${study.slug}-hero`}
            label={`${study.company} — key visual`}
            className="aspect-[558/393] w-full"
          />
        </div>

        <div className="mt-12">
          <TellMeMore>
            {study.cbaExpanded ? (
              <CbaExpandedContent detail={study.cbaExpanded} />
            ) : study.convokelabExpanded ? (
              <ConvokelabExpandedContent detail={study.convokelabExpanded} />
            ) : study.expanded ? (
              <ExpandedCaseStudyContent detail={study.expanded} />
            ) : (
              <p className="mx-auto max-w-[900px] px-2">{study.processNote}</p>
            )}
          </TellMeMore>
        </div>
      </Container>

      {/* Design process */}
      <Container width="study" className="mt-20">
        <SectionLabel>Design process</SectionLabel>
        <Divider className="my-4" />
        <ProcessCanvas study={study} />
      </Container>

      {/* Key outcomes */}
      <Container width="study" className="mt-16">
        <SectionLabel>{study.outcomesTitle}</SectionLabel>
        <Divider className="my-4" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[595px_minmax(0,1fr)]">
          <Figure
            imageKey={`${study.slug}-outcome`}
            label={`${study.company} — outcome`}
            className="aspect-[595/627] w-full"
            rounded="rounded-[2px]"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {study.metrics.map((m, i) => (
              <div
                key={m.label}
                className={
                  study.metrics.length % 2 !== 0 && i === 0
                    ? "sm:col-span-2"
                    : ""
                }
              >
                <MetricCard metric={m} />
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Further case studies */}
      <Container width="inner" className="mt-24">
        <div className="mx-auto max-w-[983px]">
          <SectionLabel>Further case studies</SectionLabel>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {others.map((c) => (
              <ThumbnailCard key={c.slug} study={c} />
            ))}
          </div>
          <div className="mt-20 flex justify-center">
            <PillLink href="/case-studies">MORE CASE STUDIES →</PillLink>
          </div>
        </div>
      </Container>
    </>
  );
}
