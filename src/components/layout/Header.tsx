"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { headerNavLinks } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between md:h-16">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground md:text-base"
          onClick={() => setOpen(false)}
        >
          Shingo
          <span className="ml-2 font-normal text-muted">AI × Web</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="メイン">
          {headerNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-black/5 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>
      <div
        id="mobile-nav"
        className={`border-t border-border bg-white lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {headerNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-black/5"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </Container>
      </div>
    </header>
  );
}
