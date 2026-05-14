import { services, servicesSectionDescription } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-white py-24 md:py-32"
      aria-labelledby="services-heading"
    >
      <Container>
        <FadeInSection>
          <SectionHeading
            id="services-heading"
            eyebrow="Services"
            title="提供サービス"
            description={servicesSectionDescription}
          />
        </FadeInSection>
        <ul className="grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-12 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-14">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <li key={service.title}>
                <FadeInSection delay={i * 0.05}>
                  <article className="flex h-full flex-col rounded-2xl border border-navy-100 bg-navy-50/80 p-6 shadow-sm transition hover:border-gold-300 hover:shadow-md md:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-600 text-navy-950">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-navy-700 leading-[1.85]">
                      {service.description}
                    </p>
                    <ul className="mt-4 flex flex-1 flex-col gap-3 text-sm leading-[1.85] text-navy-800 md:text-base md:leading-[1.85]">
                      {service.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </FadeInSection>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
