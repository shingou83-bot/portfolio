import { Quote } from "lucide-react";
import { testimonials } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-white py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <FadeInSection>
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Voices"
            title="お客さまの声"
            description="デモ・講座・協業パートナーからの声です。"
          />
        </FadeInSection>
        <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <li key={t.name}>
              <FadeInSection delay={i * 0.06}>
                <blockquote className="flex h-full flex-col rounded-2xl border border-navy-100 bg-navy-50/90 p-6 shadow-sm md:p-8">
                  <Quote
                    className="h-8 w-8 text-gold-500/80"
                    aria-hidden
                  />
                  <p className="mt-4 flex-1 text-sm leading-[1.9] text-navy-800 md:text-base md:leading-[1.9]">
                    {t.quote}
                  </p>
                  <footer className="mt-6 border-t border-navy-100 pt-4">
                    <p className="font-bold text-navy-900">{t.name}</p>
                    <p className="text-xs leading-[1.85] text-navy-600 md:text-sm md:leading-[1.85]">
                      {t.role}
                    </p>
                  </footer>
                </blockquote>
              </FadeInSection>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
