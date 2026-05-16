import { liveDemosSection } from "@/content/site";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LiveDemosSection() {
  return (
    <section
      id="live-demos"
      className="scroll-mt-24 bg-white py-24 md:py-32"
      aria-labelledby="live-demos-heading"
    >
      <Container>
        <FadeInSection>
          <SectionHeading
            id="live-demos-heading"
            eyebrow={liveDemosSection.eyebrow}
            title={liveDemosSection.title}
            description={liveDemosSection.description}
          />
        </FadeInSection>
        <CaseStudiesSection embedded />
        <div className="mt-16 md:mt-24">
          <PortfolioSection embedded />
        </div>
      </Container>
    </section>
  );
}
