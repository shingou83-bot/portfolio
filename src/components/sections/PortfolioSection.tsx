import { portfolioItems } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink, LayoutGrid } from "lucide-react";

function isLiveDemoUrl(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

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
            description="医療向けの公開サイト・デモに加え、業種横断のチャットボットや教材を掲載しています。各カードの技術タグと概要をご確認ください。"
          />
        </FadeInSection>
        <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
          {portfolioItems.map((item, i) => {
            const live = isLiveDemoUrl(item.demoUrl);

            return (
              <li key={item.title}>
                <FadeInSection delay={i * 0.07}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition hover:shadow-md">
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
                    <div className="flex flex-1 flex-col p-4 md:p-5">
                      <h3 className="text-lg font-bold text-navy-900 md:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-[1.85] text-navy-600">
                        {item.summary}
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-gold-200 bg-navy-50 px-2.5 py-0.5 text-xs font-medium text-navy-800"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-1 flex-col justify-end">
                        {live ? (
                          <a
                            href={item.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold-500 px-4 text-sm font-bold text-navy-950 shadow-md ring-2 ring-gold-300/60 transition hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600"
                          >
                            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                            デモを見る
                          </a>
                        ) : (
                          <span
                            className="inline-flex min-h-11 cursor-default items-center justify-center rounded-full border border-dashed border-navy-200 bg-navy-50 px-4 text-sm font-bold text-navy-500"
                            title="URL は準備中です"
                          >
                            デモを見る
                          </span>
                        )}
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
