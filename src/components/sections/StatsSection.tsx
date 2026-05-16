import { stats } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StatsSection() {
  return (
    <section
      id="stats"
      className="scroll-mt-24 bg-white py-20 md:py-28"
      aria-labelledby="stats-heading"
    >
      <Container size="narrow">
        <FadeInSection disabled>
          <SectionHeading
            id="stats-heading"
            variant="document"
            title="数字で見る実績"
            description="相談受付・研修設計・反復開発の目安です。"
            density="compact"
          />
        </FadeInSection>
        <ul className="grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <li key={stat.label}>
              <FadeInSection disabled>
                <p className="text-2xl font-bold text-foreground md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {stat.label}
                </p>
                {stat.note ? (
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {stat.note}
                  </p>
                ) : null}
              </FadeInSection>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
