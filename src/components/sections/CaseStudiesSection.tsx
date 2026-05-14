import Link from "next/link";
import {
  Building2,
  Scissors,
  ShoppingCart,
  Stethoscope,
} from "lucide-react";
import { caseStudies } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Stethoscope, Building2, Scissors, ShoppingCart];

const defaultDemoLabel = "実際に触ってみる";

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
            title="導入事例"
            description="医療・不動産・美容・ECなど、業種を問わず公開デモでご確認いただけます。各カードから実際の対話デモをお試しください。"
          />
        </FadeInSection>
        <ul className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {caseStudies.map((c, i) => {
            const Icon = icons[i] ?? Building2;
            const demoLabel = c.demoLabel ?? defaultDemoLabel;
            const isDemoPlaceholder =
              c.demoUrl === "" || c.demoUrl === "#";

            return (
              <li key={`${c.industry}-${i}`}>
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
                    <div className="flex flex-1 flex-col space-y-3 text-sm leading-[1.85] md:text-base md:leading-[1.85]">
                      <div>
                        <p className="font-bold text-navy-800">悩み</p>
                        <p className="mt-1 text-navy-700">{c.challenge}</p>
                      </div>
                      {c.approach != null && c.approach !== "" ? (
                        <div>
                          <p className="font-bold text-navy-800">取り組み</p>
                          <p className="mt-1 text-navy-700">{c.approach}</p>
                        </div>
                      ) : null}
                      {c.result != null && c.result !== "" ? (
                        <div>
                          <p className="font-bold text-gold-700">効果</p>
                          <p className="mt-1 text-navy-700">{c.result}</p>
                        </div>
                      ) : null}
                      {c.outcome != null && c.outcome !== "" ? (
                        <div>
                          <p className="font-bold text-gold-700">成果・方向性</p>
                          <p className="mt-1 text-navy-700">{c.outcome}</p>
                        </div>
                      ) : null}
                      <div className="mt-auto pt-4">
                        {isDemoPlaceholder ? (
                          <span
                            className="inline-flex w-full min-h-12 cursor-not-allowed items-center justify-center rounded-full border border-navy-200 bg-navy-100/80 px-4 text-center text-sm font-bold text-navy-500"
                            aria-disabled="true"
                          >
                            {demoLabel}（準備中）
                          </span>
                        ) : (
                          <Link
                            href={c.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gold-500 px-4 text-center text-sm font-bold text-navy-950 shadow-md ring-2 ring-gold-300/60 transition hover:bg-gold-400 hover:ring-gold-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600"
                          >
                            {demoLabel}
                          </Link>
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
