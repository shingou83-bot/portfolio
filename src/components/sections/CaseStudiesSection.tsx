import { Building2, GraduationCap, Stethoscope } from "lucide-react";
import { caseStudies } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Stethoscope, Building2, GraduationCap];

export function CaseStudiesSection() {
  return (
    <section
      id="cases"
      className="scroll-mt-24 bg-white py-24 md:py-32"
      aria-labelledby="cases-heading"
    >
      <Container>
        <FadeInSection>
          <SectionHeading
            id="cases-heading"
            eyebrow="Case studies"
            title="導入事例（代表シナリオ）"
            description="制作実績・デモギャラリーの3本柱（問診AI・SOAP記録・プロンプト講座）に対応する代表シナリオです。詳細は個別にご相談ください。"
          />
        </FadeInSection>
        <ul className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {caseStudies.map((c, i) => {
            const Icon = icons[i] ?? Building2;
            return (
              <li key={c.industry}>
                <FadeInSection delay={i * 0.06}>
                  <article className="flex h-full flex-col rounded-2xl border border-navy-100 bg-gradient-to-b from-white to-navy-50 p-6 shadow-sm md:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="text-xl font-bold text-navy-900 md:text-2xl">
                        {c.industry}
                      </h3>
                    </div>
                    <div className="space-y-3 text-sm leading-[1.85] md:text-base md:leading-[1.85]">
                      <div>
                        <p className="font-bold text-navy-800">課題</p>
                        <p className="mt-1 text-navy-700">{c.challenge}</p>
                      </div>
                      <div>
                        <p className="font-bold text-gold-700">成果・方向性</p>
                        <p className="mt-1 text-navy-700">{c.outcome}</p>
                      </div>
                    </div>
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
