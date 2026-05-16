import Link from "next/link";
import { hero } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";

export function HeroSection() {
  return (
    <section
      className="border-b border-border bg-surface pb-20 pt-28 md:pb-28 md:pt-36"
      aria-labelledby="hero-heading"
    >
      <Container size="narrow">
        <FadeInSection>
          <div className="text-center">
            <p className="text-sm font-medium text-muted md:text-base">
              {hero.eyebrow}
            </p>
            <h1
              id="hero-heading"
              className="mt-4 text-balance text-4xl font-bold leading-snug tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              {hero.title}
            </h1>
            <p className="mt-6 text-balance text-base leading-relaxed text-muted sm:text-lg md:text-xl">
              {hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={hero.demoCtaHref}
                className="inline-flex min-h-11 min-w-[200px] items-center justify-center rounded-md bg-accent px-6 text-center text-base font-semibold text-white transition hover:bg-accent/90"
              >
                {hero.demoCtaLabel}
              </Link>
              <Link
                href="#contact"
                className="inline-flex min-h-11 min-w-[200px] items-center justify-center rounded-md border border-border bg-white px-6 text-center text-base font-semibold text-foreground transition hover:bg-black/[0.03]"
              >
                {hero.ctaLabel}
              </Link>
            </div>
            <p className="mt-5">
              <Link
                href="#services"
                className="text-sm font-medium text-accent hover:underline"
              >
                サービスを見る
              </Link>
            </p>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
