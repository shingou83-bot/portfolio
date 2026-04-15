import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <CaseStudiesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ProcessSection />
      <FAQSection />
      <ProfileSection />
      <ContactSection />
    </>
  );
}
