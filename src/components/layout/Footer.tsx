import Link from "next/link";
import { footerLinks, profile } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-14">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="text-lg font-semibold text-foreground">Shingo</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{profile.roles}</p>
            <Link
              href={profile.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
            >
              X {profile.handle}
            </Link>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="フッター">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-12 text-center text-xs leading-relaxed text-muted">
          © {new Date().getFullYear()} Shingo. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
