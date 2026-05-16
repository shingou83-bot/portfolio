import { pricingPlans } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-navy-50 py-24 md:py-32"
      aria-labelledby="pricing-heading"
    >
      <Container>
        <FadeInSection>
          <SectionHeading
            id="pricing-heading"
            eyebrow="Pricing"
            title="料金プラン"
            description="無料相談で業務を伺い、プランをご提案します。"
          />
        </FadeInSection>
        <ul className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {pricingPlans.map((plan, i) => (
            <li key={plan.name}>
              <FadeInSection delay={i * 0.05}>
                <article className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-navy-900 md:text-2xl">
                      {plan.name}
                    </h3>
                    {plan.badge != null && plan.badge !== "" ? (
                      <span className="shrink-0 rounded-full bg-gold-500/20 px-3 py-1 text-xs font-bold text-navy-900">
                        {plan.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 text-2xl font-bold text-gold-700 md:text-3xl">
                    {plan.price}
                  </p>
                  <p className="mt-3 text-sm leading-[1.85] text-navy-700 md:text-base md:leading-[1.85]">
                    {plan.description}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2 text-sm leading-[1.85] text-navy-800 md:text-base md:leading-[1.85]">
                    {plan.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeInSection>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
