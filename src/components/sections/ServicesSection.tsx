import { services, servicesSectionDescription } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-surface py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <Container size="narrow">
        <FadeInSection disabled>
          <SectionHeading
            id="services-heading"
            variant="document"
            title="提供サービス"
            description={servicesSectionDescription}
          />
        </FadeInSection>
        <ul className="space-y-12">
          {services.map((service, i) => (
            <li key={service.title}>
              <FadeInSection disabled>
                <article>
                  <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
                    {service.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </article>
                {i < services.length - 1 ? <Divider className="mt-12" /> : null}
              </FadeInSection>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
