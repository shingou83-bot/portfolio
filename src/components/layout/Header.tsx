"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-950/90 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between md:h-16">
        <Link
          href="/"
          className="text-sm font-bold tracking-tight text-white md:text-base"
          onClick={() => setOpen(false)}
        >
          Shingo
          <span className="ml-2 font-normal text-gold-400">医療AI</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="メイン">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-white lg:hidden"
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
        className={`border-t border-white/10 bg-navy-950 lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/10"
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
