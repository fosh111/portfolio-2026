import { Figure } from "./Figure";
import { MetaRow } from "./ui";
import { IndustrialDesignCarousel } from "./IndustrialDesignCarousel";
import type { IndustrialDesignProject } from "@/lib/content";

function metaItems(project: IndustrialDesignProject): string[] {
  return project.recognition
    ? [project.brand, project.recognition]
    : [project.brand];
}

export function FeaturedProject({
  project,
}: {
  project: IndustrialDesignProject;
}) {
  return (
    <div>
      {project.carousel ? (
        <IndustrialDesignCarousel slides={project.carousel} />
      ) : (
        <>
          <Figure
            imageKey={project.imageKey}
            label={project.title}
            className="aspect-[16/10] w-full"
            rounded="rounded-[2px]"
            imageFit="cover"
          />
          {project.secondaryImageKey && (
            <Figure
              imageKey={project.secondaryImageKey}
              label={`${project.title} — detail`}
              className="mt-3 aspect-[21/9] w-full sm:w-1/2"
              rounded="rounded-[2px]"
              imageFit="cover"
            />
          )}
        </>
      )}
      <div className="mt-6 max-w-[560px]">
        <MetaRow items={metaItems(project)} />
        <h3 className="mt-3 font-display text-[22px] leading-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-3 text-[14px] leading-6 text-muted-body">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export function ArchiveRow({
  project,
}: {
  project: IndustrialDesignProject;
}) {
  return (
    <div className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:gap-8">
      <Figure
        imageKey={project.imageKey}
        label={project.title}
        className="aspect-[4/3] w-full shrink-0 sm:w-[220px]"
        rounded="rounded-[2px]"
        imageFit="cover"
      />
      <div className="max-w-[480px]">
        <MetaRow items={metaItems(project)} />
        <h3 className="mt-2 font-display text-[18px] leading-snug text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-[13px] leading-6 text-muted-body">
          {project.description}
        </p>
      </div>
    </div>
  );
}
