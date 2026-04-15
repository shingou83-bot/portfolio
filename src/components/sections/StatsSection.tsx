import { stats } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StatsSection() {
  return (
    <section
      id="stats"
      className="scroll-mt-24 bg-navy-50 py-24 md:py-32"
      aria-labelledby="stats-heading"
    >
      <Container>
        <FadeInSection>
          <SectionHeading
            id="stats-heading"
            eyebrow="Track record"
            title="数字で見る実績"
            description="反復改善と現場志向の開発・研修の積み重ねです。"
          />
        </FadeInSection>
        <ul className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <li key={stat.label}>
              <FadeInSection delay={i * 0.08}>
                <div className="rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-sm md:p-8">
                  <p className="text-3xl font-bold leading-tight text-gold-600 md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-base font-bold text-navy-900 md:text-lg">
                    {stat.label}
                  </p>
                  {stat.note ? (
                    <p className="mt-2 text-xs leading-[1.85] text-navy-600 md:text-sm md:leading-[1.85]">
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
