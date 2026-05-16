import { faqItems } from "@/content/site";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQSection() {
  const items = faqItems.map((item, index) => ({
    id: `faq-${index}`,
    question: item.q,
    answer: item.a,
  }));

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-navy-50 py-24 md:py-32"
      aria-labelledby="faq-heading"
    >
      <Container>
        <FadeInSection>
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="よくある質問"
            description="導入前によくあるご質問です。"
          />
        </FadeInSection>
        <FadeInSection>
          <Accordion items={items} />
        </FadeInSection>
      </Container>
    </section>
  );
}
