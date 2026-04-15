import { portfolioItems } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink, LayoutGrid } from "lucide-react";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-24 bg-navy-50 py-24 md:py-32"
      aria-labelledby="portfolio-heading"
    >
      <Container>
        <FadeInSection>
          <SectionHeading
            id="portfolio-heading"
            eyebrow="Portfolio"
            title="制作実績・デモギャラリー"
            description="サムネイルはイメージ用のプレースホルダです。各カードから公開デモを新しいタブで開けます。"
          />
        </FadeInSection>
        <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
          {portfolioItems.map((item, i) => {
            const card = (
              <article className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition hover:shadow-md">
                <div
                  className={`relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${item.gradient} p-6`}
                >
                  <LayoutGrid
                    className="absolute right-4 top-4 h-8 w-8 text-white/30"
                    aria-hidden
                  />
                  <div className="relative text-center text-white">
                    <p className="text-xl font-bold drop-shadow md:text-2xl">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-[1.75] text-white/90">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-lg font-bold text-navy-900 md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-[1.85] text-navy-600">
                    {item.subtitle}
                  </p>
                  {item.demoUrl ? (
                    <p className="mt-3 flex items-center gap-1.5 text-sm font-bold text-gold-700">
                      <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                      ライブデモを開く
                    </p>
                  ) : null}
                </div>
              </article>
            );

            return (
              <li key={item.title}>
                <FadeInSection delay={i * 0.07}>
                  {item.demoUrl ? (
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-2xl text-inherit no-underline outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-600"
                      aria-label={`${item.title}のライブデモを新しいタブで開く`}
                    >
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </FadeInSection>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
