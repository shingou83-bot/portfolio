import { workCaseStudies } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted md:text-base">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

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
            description="守秘義務の範囲で掲載している制作事例です。"
          />
        </FadeInSection>
        <ul className="space-y-10">
          {workCaseStudies.map((study, i) => (
            <li key={study.title}>
              <FadeInSection disabled>
                <article>
                  <h3 className="text-lg font-semibold text-foreground md:text-xl">
                    {study.title}
                  </h3>
                  <div className="mt-4 space-y-8">
                    <div>
                      <p className="text-sm font-medium text-foreground md:text-base">
                        クライアント
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted md:text-base">
                        {study.client}
                      </p>
                      {study.clientNote != null && study.clientNote !== "" ? (
                        <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                          ※{study.clientNote}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <h4 className="text-base font-semibold text-foreground md:text-lg">
                        背景・課題
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                        {study.backgroundIntro}
                      </p>
                      <p className="mt-4 text-sm font-medium text-foreground md:text-base">
                        ご要望
                      </p>
                      <BulletList items={study.needs} />
                      <p className="mt-4 text-sm font-medium text-foreground md:text-base">
                        お悩み
                      </p>
                      <BulletList items={study.painPoints} />
                    </div>

                    <div>
                      <h4 className="text-base font-semibold text-foreground md:text-lg">
                        アプローチ・対応内容
                      </h4>
                      <div className="mt-4 space-y-6">
                        {study.approachSections.map((section) => (
                          <div key={section.heading}>
                            <p className="text-sm font-medium text-foreground md:text-base">
                              {section.heading}
                            </p>
                            <BulletList items={section.bullets} />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base font-semibold text-foreground md:text-lg">
                        成果
                      </h4>
                      <BulletList items={study.outcomes} />
                      {study.followUpNote != null && study.followUpNote !== "" ? (
                        <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                          {study.followUpNote}
                        </p>
                      ) : null}
                    </div>

                    <p className="border-t border-border pt-6 text-sm leading-relaxed text-muted">
                      ※{study.confidentialityNote}
                    </p>
                  </div>
                </article>
                {i < workCaseStudies.length - 1 ? (
                  <Divider className="mt-10" />
                ) : null}
              </FadeInSection>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
