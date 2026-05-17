import Image from "next/image";
import { profile } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LineAddFriendButton } from "@/components/ui/LineAddFriendButton";
import { UserRound } from "lucide-react";

export function ProfileSection() {
  const hasPhoto =
    profile.imageSrc != null && profile.imageSrc !== "";

  return (
    <section
      id="profile"
      className="scroll-mt-24 bg-surface py-20 md:py-28"
      aria-labelledby="profile-heading"
    >
      <Container size="narrow">
        <FadeInSection disabled>
          <SectionHeading
            id="profile-heading"
            variant="document"
            title="プロフィール"
            description="臨床の現場感と、AI・Web実装を組み合わせて伴走します。"
          />
        </FadeInSection>
        <FadeInSection disabled>
          <article>
            <header className="flex items-start gap-5">
              {hasPhoto ? (
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-border bg-neutral-100 md:h-24 md:w-24">
                  <Image
                    src={profile.imageSrc}
                    alt={profile.imageAlt ?? profile.name}
                    fill
                    className="object-cover object-top"
                    sizes="96px"
                    priority
                  />
                </div>
              ) : (
                <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border border-border bg-neutral-100 text-muted md:h-24 md:w-24">
                  <UserRound className="h-8 w-8 md:h-9 md:w-9" aria-hidden />
                </span>
              )}
              <div>
                <p className="text-xl font-semibold text-foreground">
                  {profile.name}{" "}
                  <span className="text-base font-normal text-muted">
                    {profile.handle}
                  </span>
                </p>
                <p className="mt-1 text-sm text-muted">{profile.tradeName}</p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {profile.roles}
                </p>
                <p className="mt-2 text-sm">
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-medium text-accent hover:underline"
                  >
                    {profile.email}
                  </a>
                </p>
                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground">LINE公式</p>
                  <div className="mt-2">
                    <LineAddFriendButton />
                  </div>
                </div>
              </div>
            </header>
            <div className="mt-8 space-y-4 leading-relaxed text-muted">
              {profile.story.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">使用ツール・技術</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {profile.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-md border border-border bg-white px-3 py-1 text-sm text-muted"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-8 border-l-2 border-border pl-4 leading-relaxed text-muted">
              {profile.mission}
            </p>
          </article>
        </FadeInSection>
      </Container>
    </section>
  );
}
