import { notFound } from "next/navigation";
import { PageChrome } from "@/components/PageChrome";
import { CaseStudyView } from "@/components/CaseStudyView";
import { CASE_STUDY_DETAILS } from "@/lib/content";

export function generateStaticParams() {
  return Object.keys(CASE_STUDY_DETAILS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = CASE_STUDY_DETAILS[params.slug];
  if (!study) return { title: "Case Study — Jose R. Parra" };
  return {
    title: `${study.titleLead} ${study.titleAccent} — ${study.company} · Jose R. Parra`,
    description: study.challenge,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = CASE_STUDY_DETAILS[params.slug];
  if (!study) notFound();

  return (
    <PageChrome active="case-studies">
      <CaseStudyView study={study} />
    </PageChrome>
  );
}
