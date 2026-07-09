import { EXPERIENCE, type Experience } from "@/lib/content";
import { Figure } from "./Figure";
import { Dot } from "./ui";

const LOGO_KEYS: Record<string, string> = {
  "Qantas (Contract)": "logo-qantas",
  "Convoke Lab": "logo-convokelab",
  "Commonwealth Bank": "logo-cba",
  "Academy Xi (Contract)": "logo-academyxi",
  Forage: "logo-forage",
};

function Row({ item }: { item: Experience }) {
  return (
    <div className="border-t border-line py-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-6">
        <Figure
          imageKey={LOGO_KEYS[item.company] ?? ""}
          label={item.company.split(" ")[0]}
          className="size-12 shrink-0"
          rounded="rounded-[3px]"
          labelClassName="text-[8px]"
        />
        <div className="flex-1">
          <h3 className="font-serif text-[24px] leading-tight text-ink">
            {item.title}
          </h3>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] font-light tracking-[0.05em] text-muted">
              {item.company.toUpperCase()}
            </span>
            <Dot />
            <span className="font-mono text-[10px] font-light tracking-[0.05em] text-muted">
              {item.period.toUpperCase()}
            </span>
          </div>
          <p className="mt-1 font-mono text-[10px] font-medium tracking-[0.05em] text-muted">
            {item.location.toUpperCase()}
          </p>

          {item.summary && (
            <p className="mt-4 max-w-[937px] text-[16px] leading-6 text-ink">
              {item.summary}
            </p>
          )}
          <ul className="mt-4 flex max-w-[937px] flex-col gap-2.5">
            {item.points.map((p, i) => (
              <li key={i} className="flex gap-2 text-[16px] leading-6 text-ink">
                <span className="select-none text-muted">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ExperienceList() {
  return (
    <div className="flex flex-col">
      {EXPERIENCE.map((item) => (
        <Row key={item.title + item.company} item={item} />
      ))}
    </div>
  );
}
