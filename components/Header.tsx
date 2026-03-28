"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/site-data";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-10 py-6 flex justify-between items-center bg-dark/20 backdrop-blur-sm border-b border-white/5">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/logo.jpg" alt="Logo" width={95} height={40} />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`font-body text-[10px] uppercase tracking-[0.4em] transition-all hover:text-white ${
              pathname === link.href
                ? "text-[var(--color-primary)]"
                : "text-white/40"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Hamburger (Mobile & Tablet) */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="md:hidden flex flex-col gap-1"
        aria-label="Menu"
      >
        <span className="w-6 h-[1px] bg-white"></span>
        <span className="w-6 h-[1px] bg-white"></span>
        <span className="w-6 h-[1px] bg-white"></span>
      </button>

      {/* Mobile / Tablet Dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md md:hidden flex flex-col items-center py-8 gap-6 border-b border-white/10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-body text-xs uppercase tracking-[0.4em] transition-all ${
                pathname === link.href
                  ? "text-[var(--color-primary)]"
                  : "text-white/60"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
