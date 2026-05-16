import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LiveDemosSection } from "@/components/sections/LiveDemosSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LiveDemosSection />
      <ServicesSection />
      <StatsSection />
      <PricingSection />
      <TestimonialsSection />
      <ProcessSection />
      <FAQSection />
      <ProfileSection />
      <ContactSection />
    </>
  );
}
