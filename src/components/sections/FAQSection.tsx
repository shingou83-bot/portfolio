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
      className="scroll-mt-24 bg-white py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      <Container size="narrow">
        <FadeInSection disabled>
          <SectionHeading
            id="faq-heading"
            variant="document"
            title="よくある質問"
            description="導入前によくあるご質問です。"
          />
        </FadeInSection>
        <FadeInSection disabled>
          <Accordion items={items} />
        </FadeInSection>
      </Container>
    </section>
  );
}
