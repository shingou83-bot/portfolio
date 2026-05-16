import Link from "next/link";
import {
  Building2,
  Scissors,
  ShoppingCart,
  Stethoscope,
} from "lucide-react";
import { caseStudies, liveDemosSection } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Stethoscope, Building2, Scissors, ShoppingCart];

const defaultDemoLabel = "実際に触ってみる";

function CaseStudiesList() {
  return (
    <ul className="grid gap-6 lg:grid-cols-3 lg:gap-8">
      {caseStudies.map((c, i) => {
        const Icon = icons[i] ?? Building2;
        const demoLabel = c.demoLabel ?? defaultDemoLabel;
        const isDemoPlaceholder = c.demoUrl === "" || c.demoUrl === "#";

        return (
          <li key={`${c.industry}-${i}`}>
            <FadeInSection delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-lg border border-border bg-white p-6 md:p-7">
                <header className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-100 text-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground md:text-xl">
                    {c.industry}
                  </h3>
                </header>
                <div className="flex flex-1 flex-col space-y-3 text-sm leading-relaxed md:text-base">
                  <div>
                    <p className="font-medium text-foreground">悩み</p>
                    <p className="mt-1 text-muted">{c.challenge}</p>
                  </div>
                  {c.approach != null && c.approach !== "" ? (
                    <div>
                      <p className="font-medium text-foreground">取り組み</p>
                      <p className="mt-1 text-muted">{c.approach}</p>
                    </div>
                  ) : null}
                  {c.result != null && c.result !== "" ? (
                    <div>
                      <p className="font-medium text-foreground">効果</p>
                      <p className="mt-1 text-muted">{c.result}</p>
                    </div>
                  ) : null}
                  {c.outcome != null && c.outcome !== "" ? (
                    <div>
                      <p className="font-medium text-foreground">成果・方向性</p>
                      <p className="mt-1 text-muted">{c.outcome}</p>
                    </div>
                  ) : null}
                  <div className="mt-auto pt-4">
                    {isDemoPlaceholder ? (
                      <span
                        className="inline-flex w-full min-h-10 cursor-not-allowed items-center justify-center rounded-md border border-border bg-neutral-50 px-4 text-center text-sm font-medium text-muted"
                        aria-disabled="true"
                      >
                        {demoLabel}（準備中）
                      </span>
                    ) : (
                      <Link
                        href={c.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 w-full items-center justify-center rounded-md border border-accent px-4 text-center text-sm font-semibold text-accent transition hover:bg-accent/5"
                      >
                        {demoLabel}
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </FadeInSection>
          </li>
        );
      })}
    </ul>
  );
}

type CaseStudiesSectionProps = {
  embedded?: boolean;
};

export function CaseStudiesSection({ embedded = false }: CaseStudiesSectionProps) {
  if (embedded) {
    return (
      <div id="cases" className="scroll-mt-24 space-y-6">
        <FadeInSection>
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              {liveDemosSection.casesSubheading}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
              {liveDemosSection.casesLead}
            </p>
          </div>
        </FadeInSection>
        <CaseStudiesList />
      </div>
    );
  }

  return (
    <section
      id="cases"
      className="scroll-mt-24 bg-white py-24 md:py-32"
      aria-labelledby="cases-heading"
    >
      <Container>
        <FadeInSection>
          <SectionHeading
            id="cases-heading"
            variant="marketing"
            eyebrow="Case studies"
            title="導入事例"
            description="業種別のチャットデモを、その場でお試しください。"
          />
        </FadeInSection>
        <CaseStudiesList />
      </Container>
    </section>
  );
}
