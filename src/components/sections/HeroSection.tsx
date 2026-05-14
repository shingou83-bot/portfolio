import Link from "next/link";
import { Sparkles } from "lucide-react";
import { hero } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-900 pb-28 pt-32 text-white md:pb-36 md:pt-40"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgb(212 169 74 / 0.32), transparent 45%), radial-gradient(circle at 80% 0%, rgb(184 144 58 / 0.22), transparent 40%)",
        }}
      />
      <Container className="relative">
        <FadeInSection>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gold-300 backdrop-blur sm:text-sm">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              {hero.eyebrow}
            </p>
            <h1
              id="hero-heading"
              className="text-balance text-4xl font-bold leading-snug tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {hero.title}
            </h1>
            <p className="mt-6 text-base leading-[1.9] text-white/75 sm:text-lg md:text-xl md:leading-[1.9]">
              {hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex min-h-12 min-w-[200px] items-center justify-center rounded-full bg-gold-500 px-8 text-base font-bold text-navy-950 shadow-xl shadow-gold-900/40 ring-2 ring-gold-300/70 transition hover:bg-gold-400 hover:shadow-gold-500/35 hover:ring-gold-200/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-200"
              >
                {hero.ctaLabel}
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium text-gold-200 underline-offset-4 hover:underline"
              >
                サービスを見る
              </Link>
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
