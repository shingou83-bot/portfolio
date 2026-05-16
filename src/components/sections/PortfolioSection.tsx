import Image from "next/image";
import { liveDemosSection, portfolioItems } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink, LayoutGrid } from "lucide-react";

function isLiveDemoUrl(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

function PortfolioCardHeader({
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: {
  title: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  if (imageSrc != null && imageSrc !== "") {
    return (
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[4/3] flex-col items-center justify-center bg-neutral-100 p-6">
      <LayoutGrid
        className="absolute right-4 top-4 h-8 w-8 text-neutral-300"
        aria-hidden
      />
      <div className="relative text-center">
        <p className="text-lg font-semibold text-foreground md:text-xl">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{subtitle}</p>
      </div>
    </div>
  );
}

function PortfolioList() {
  return (
    <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
      {portfolioItems.map((item, i) => {
        const live = isLiveDemoUrl(item.demoUrl);

        return (
          <li key={item.title}>
            <FadeInSection delay={i * 0.07}>
              <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-white">
                <PortfolioCardHeader
                  title={item.title}
                  subtitle={item.subtitle}
                  imageSrc={item.imageSrc}
                  imageAlt={item.imageAlt}
                />
                <div className="flex flex-1 flex-col p-4 md:p-5">
                  <h3 className="text-lg font-semibold text-foreground md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.summary}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-border bg-neutral-50 px-2.5 py-0.5 text-xs font-medium text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 flex flex-1 flex-col justify-end">
                    {live ? (
                      <a
                        href={item.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-accent px-4 text-sm font-semibold text-accent transition hover:bg-accent/5"
                      >
                        <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                        デモを見る
                      </a>
                    ) : (
                      <span className="inline-flex min-h-10 cursor-default items-center justify-center rounded-md border border-dashed border-border bg-neutral-50 px-4 text-sm font-medium text-muted">
                        デモを見る
                      </span>
                    )}
                  </p>
                </div>
              </article>
            </FadeInSection>
          </li>
        );
      })}
    </ul>
  );
}

type PortfolioSectionProps = {
  embedded?: boolean;
};

export function PortfolioSection({ embedded = false }: PortfolioSectionProps) {
  if (embedded) {
    return (
      <div id="portfolio" className="scroll-mt-24 space-y-6">
        <FadeInSection>
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              {liveDemosSection.portfolioSubheading}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
              {liveDemosSection.portfolioLead}
            </p>
          </div>
        </FadeInSection>
        <PortfolioList />
      </div>
    );
  }

  return (
    <section
      id="portfolio"
      className="scroll-mt-24 bg-surface py-24 md:py-32"
      aria-labelledby="portfolio-heading"
    >
      <Container>
        <FadeInSection>
          <SectionHeading
            id="portfolio-heading"
            variant="marketing"
            eyebrow="Portfolio"
            title="制作実績・デモギャラリー"
            description="公開サイト・問診デモ・教材など。ブラウザから開いてご確認ください。"
          />
        </FadeInSection>
        <PortfolioList />
      </Container>
    </section>
  );
}
