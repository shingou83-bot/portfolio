import { profile } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UserRound } from "lucide-react";

export function ProfileSection() {
  return (
    <section
      id="profile"
      className="scroll-mt-24 bg-white py-24 md:py-32"
      aria-labelledby="profile-heading"
    >
      <Container>
        <FadeInSection>
          <SectionHeading
            id="profile-heading"
            eyebrow="Profile"
            title="プロフィール"
            description="臨床の現場感と、AI・Web実装を組み合わせて伴走します。"
          />
        </FadeInSection>
        <FadeInSection>
          <div className="mx-auto max-w-3xl rounded-2xl border border-navy-100 bg-navy-50/80 p-6 shadow-sm md:flex md:gap-10 md:p-10">
            <div className="mb-6 flex justify-center md:mb-0 md:flex-col md:items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-navy-900 text-gold-400 md:h-28 md:w-28">
                <UserRound className="h-12 w-12 md:h-14 md:w-14" aria-hidden />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-2xl font-bold text-navy-900">
                {profile.name}{" "}
                <span className="text-base font-normal text-gold-600 md:text-lg">
                  {profile.handle}
                </span>
              </p>
              <p className="mt-1 text-sm font-medium text-navy-600 md:text-base">
                {profile.tradeName}
              </p>
              <p className="mt-1 text-sm font-bold text-navy-700 md:text-base">
                {profile.roles}
              </p>
              <p className="mt-2 text-sm md:text-base">
                <a
                  href={`mailto:${profile.email}`}
                  className="font-medium text-gold-700 underline-offset-2 hover:underline"
                >
                  {profile.email}
                </a>
              </p>
              <div className="mt-6 space-y-4 text-sm leading-[1.9] text-navy-800 md:text-base md:leading-[1.9]">
                {profile.story.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wide text-navy-600">
                  使用ツール・技術
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {profile.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-gold-200 bg-white px-3 py-1 text-xs font-medium text-gold-800 md:text-sm"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 border-l-4 border-gold-500 pl-4 text-sm italic leading-[1.9] text-navy-800 md:text-base md:leading-[1.9]">
                {profile.mission}
              </p>
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
