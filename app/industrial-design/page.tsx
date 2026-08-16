import { PageChrome } from "@/components/PageChrome";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Divider } from "@/components/ui";
import { FeaturedProject, ArchiveRow } from "@/components/IndustrialDesignParts";
import { INDUSTRIAL_DESIGN_INTRO, INDUSTRIAL_DESIGN_PROJECTS } from "@/lib/content";

export const metadata = {
  title: "Industrial Design — Jose R. Parra",
};

export default function IndustrialDesignPage() {
  const featured = INDUSTRIAL_DESIGN_PROJECTS.filter(
    (p) => p.size === "featured",
  );
  const archive = INDUSTRIAL_DESIGN_PROJECTS.filter(
    (p) => p.size === "compact",
  );

  return (
    <PageChrome active="industrial-design">
      <Container width="inner">
        <Reveal className="max-w-[563px]">
          <h1 className="font-display text-[56px] leading-none tracking-tight2 text-ink sm:text-[72px]">
            Industrial design
          </h1>
          <p className="mt-6 text-[16px] leading-6 text-muted-body">
            {INDUSTRIAL_DESIGN_INTRO}
          </p>
        </Reveal>

        <div className="mt-14 sm:mt-20">
          {featured.map((project, i) => (
            <Reveal
              key={project.slug}
              className={i > 0 ? "mt-20 sm:mt-28" : ""}
            >
              <FeaturedProject project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 sm:mt-28" once>
          <Divider />
          <h2 className="mt-10 font-serif italic text-[15px] text-muted">
            More from the archive
          </h2>
          <div className="mt-2 divide-y divide-line">
            {archive.map((project) => (
              <ArchiveRow key={project.slug} project={project} />
            ))}
          </div>
        </Reveal>
      </Container>
    </PageChrome>
  );
}
