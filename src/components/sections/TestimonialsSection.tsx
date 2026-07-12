import { workCaseStudies } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-white py-20 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <Container size="narrow">
        <FadeInSection disabled>
          <SectionHeading
            id="testimonials-heading"
            variant="document"
            title="支援事例"
            description="守秘義務の範囲で掲載している支援・制作事例です。"
          />
        </FadeInSection>
        <ul className="space-y-8">
          {workCaseStudies.map((study, i) => {
            const approachSummary = study.approachSections
              .map((s) => s.heading.replace(/^\d+\.\s*/, ""))
              .join(" / ");

            return (
              <li key={study.title}>
                <FadeInSection disabled>
                  <article>
                    <h3 className="text-lg font-semibold text-foreground md:text-xl">
                      {study.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{study.client}</p>

                    <div className="mt-4 space-y-4 text-sm leading-relaxed md:text-base">
                      <div>
                        <p className="font-medium text-foreground">背景・課題</p>
                        <p className="mt-1 text-muted">{study.backgroundIntro}</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">対応</p>
                        <p className="mt-1 text-muted">{approachSummary}</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">成果</p>
                        <ul className="mt-1 list-disc space-y-1 pl-5 text-muted">
                          {study.outcomes.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted">
                      ※{study.confidentialityNote}
                    </p>
                  </article>
                  {i < workCaseStudies.length - 1 ? (
                    <Divider className="mt-8" />
                  ) : null}
                </FadeInSection>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
