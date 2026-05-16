import Link from "next/link";
import { footerLinks, profile } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-white py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="text-xl font-bold text-navy-900">Shingo</p>
            <p className="mt-1 text-sm leading-[1.85] text-navy-600">{profile.roles}</p>
            <Link
              href={profile.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-bold text-gold-600 hover:underline"
            >
              X {profile.handle}
            </Link>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="フッター">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-navy-600 hover:text-gold-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-10 text-center text-xs leading-[1.85] text-navy-500">
          © {new Date().getFullYear()} Shingo. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
