import { PageChrome } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Container";
import { SITE, CONTACT_INTRO } from "@/lib/content";

export const metadata = {
  title: "Contact — Jose R. Parra",
};

function ContactCard({
  kind,
  value,
  href,
}: {
  kind: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex aspect-square flex-col items-center justify-center gap-6 rounded-[2px] bg-card transition-colors hover:bg-ink/5"
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-dark">
        {kind}
      </span>
      <span className="px-6 text-center font-serif text-[24px] text-ink transition-transform group-hover:-translate-y-0.5">
        {value}
      </span>
      <span className="font-mono text-[12px] text-muted" aria-hidden>
        →
      </span>
    </a>
  );
}

export default function ContactPage() {
  return (
    <PageChrome active="contact">
      <Container width="inner">
        <div className="mx-auto max-w-[950px]">
          <Reveal className="max-w-[563px]">
            <h1 className="font-display text-[56px] leading-none tracking-tight2 text-ink sm:text-[72px]">
              Contact
            </h1>
            <p className="mt-6 text-[16px] leading-6 text-muted-body">
              {CONTACT_INTRO}
            </p>
          </Reveal>

          <Reveal className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <ContactCard
              kind="Email"
              value={SITE.email}
              href={`mailto:${SITE.email}`}
            />
            <ContactCard kind="LinkedIn" value="/in/fozsh" href={SITE.linkedin} />
          </Reveal>
        </div>
      </Container>
    </PageChrome>
  );
}
