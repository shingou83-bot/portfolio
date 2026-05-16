import { testimonials } from "@/content/site";
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
            title="お客さまの声"
            description="デモ・講座・協業パートナーからの声です。"
          />
        </FadeInSection>
        <ul className="space-y-10">
          {testimonials.map((t, i) => (
            <li key={t.name}>
              <FadeInSection disabled>
                <blockquote className="border-l-2 border-border pl-4">
                  <p className="leading-relaxed text-foreground">{t.quote}</p>
                  <footer className="mt-4">
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="text-sm text-muted">{t.role}</p>
                  </footer>
                </blockquote>
                {i < testimonials.length - 1 ? (
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
