import { ArrowRight, CheckCircle2 } from "lucide-react";
import { processSteps } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="scroll-mt-24 bg-navy-950 py-24 text-white md:py-32"
      aria-labelledby="process-heading"
    >
      <Container>
        <FadeInSection>
          <SectionHeading
            id="process-heading"
            invert
            eyebrow="Process"
            title="導入の流れ"
            description="相談から公開・運用まで、段階を明示します。"
          />
        </FadeInSection>
        <FadeInSection>
          <ol className="mx-auto max-w-4xl space-y-0">
            {processSteps.map((step, i) => (
              <li key={step.title} className="relative flex gap-4 md:gap-6">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500 text-sm font-bold text-navy-950">
                    {i + 1}
                  </span>
                  {i < processSteps.length - 1 ? (
                    <span
                      className="my-1 w-px flex-1 min-h-[2rem] bg-gold-500/40 md:min-h-[3rem]"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col pb-10 md:flex-row md:items-start md:gap-4 md:pb-12">
                  <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur md:p-5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-gold-400" aria-hidden />
                      <h3 className="text-xl font-bold md:text-2xl">{step.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-[1.85] text-white/75 md:text-base md:leading-[1.85]">
                      {step.description}
                    </p>
                  </div>
                  {i < processSteps.length - 1 ? (
                    <ArrowRight
                      className="hidden h-6 w-6 shrink-0 text-gold-500/50 md:mt-8 lg:block"
                      aria-hidden
                    />
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </FadeInSection>
      </Container>
    </section>
  );
}
