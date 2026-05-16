import { stats } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StatsSection() {
  return (
    <section
      id="stats"
      className="scroll-mt-24 bg-navy-50 py-16 md:py-20"
      aria-labelledby="stats-heading"
    >
      <Container>
        <FadeInSection>
          <SectionHeading
            id="stats-heading"
            eyebrow="Track record"
            title="数字で見る実績"
            description="相談受付・研修設計・反復開発の目安です。"
            density="compact"
          />
        </FadeInSection>
        <ul className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
          {stats.map((stat, i) => (
            <li key={stat.label} className="min-w-0 flex-1 sm:max-w-[14rem] sm:flex-initial">
              <FadeInSection delay={i * 0.08}>
                <div className="rounded-2xl border border-navy-100 bg-white px-5 py-5 text-center shadow-sm sm:py-6">
                  <p className="text-2xl font-bold leading-tight text-gold-600 md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-sm font-bold text-navy-900 md:text-base">
                    {stat.label}
                  </p>
                  {stat.note ? (
                    <p className="mt-1.5 text-xs leading-[1.85] text-navy-600 md:text-sm md:leading-[1.85]">
                      {stat.note}
                    </p>
                  ) : null}
                </div>
              </FadeInSection>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
