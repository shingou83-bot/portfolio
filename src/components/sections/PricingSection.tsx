import { pricingPlans } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-surface py-20 md:py-28"
      aria-labelledby="pricing-heading"
    >
      <Container size="narrow">
        <FadeInSection disabled>
          <SectionHeading
            id="pricing-heading"
            variant="document"
            title="料金プラン"
            description="無料相談で業務を伺い、プランをご提案します。"
          />
        </FadeInSection>
        <ul className="space-y-10">
          {pricingPlans.map((plan, i) => (
            <li key={plan.name}>
              <FadeInSection disabled>
                <article>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground md:text-xl">
                      {plan.name}
                    </h3>
                    {plan.badge != null && plan.badge !== "" ? (
                      <span className="text-xs font-medium text-muted">
                        {plan.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-xl font-bold text-foreground md:text-2xl">
                    {plan.price}
                  </p>
                  <p className="mt-2 leading-relaxed text-muted">
                    {plan.description}
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
                    {plan.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
                {i < pricingPlans.length - 1 ? (
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
