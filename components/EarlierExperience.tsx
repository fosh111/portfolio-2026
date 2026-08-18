import { EARLIER_EXPERIENCE } from "@/lib/content";

export function EarlierExperience() {
  return (
    <div className="border-t border-line py-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-6">
        <div className="w-12 shrink-0" />
        <div className="flex-1">
          <h3 className="font-serif text-[24px] leading-tight text-ink">
            Earlier
          </h3>
          <ul className="mt-4 flex max-w-[937px] flex-col gap-2.5">
            {EARLIER_EXPERIENCE.map((item, i) => (
              <li
                key={i}
                className="flex gap-2 text-[14px] leading-6 text-muted"
              >
                <span className="select-none">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
