import { processSteps } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="scroll-mt-24 bg-surface py-20 md:py-28"
      aria-labelledby="process-heading"
    >
      <Container size="narrow">
        <FadeInSection disabled>
          <SectionHeading
            id="process-heading"
            variant="document"
            title="導入の流れ"
            description="相談から公開・運用まで、段階を明示します。"
          />
        </FadeInSection>
        <FadeInSection disabled>
          <ol className="list-decimal space-y-4 pl-5 text-foreground">
            {processSteps.map((step) => (
              <li key={step.title} className="pl-2 leading-relaxed">
                <span className="font-semibold">{step.title}</span>
                <span className="text-muted"> — {step.description}</span>
              </li>
            ))}
          </ol>
        </FadeInSection>
      </Container>
    </section>
  );
}
