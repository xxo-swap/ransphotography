"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_IDENTITY } from "@/data/site-data";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 p-8 flex justify-between items-center bg-dark/20 backdrop-blur-sm border-b border-white/5">
      <Link href="/" className="group flex flex-col leading-none">
        <span className="font-title text-2xl tracking-[0.2em] text-white">
          {SITE_IDENTITY.firstName}
        </span>
        <span className="font-body text-[8px] tracking-[0.6em] text-[var(--color-primary)] group-hover:text-white transition-colors uppercase mt-1">
          {SITE_IDENTITY.lastName}
        </span>
      </Link>

      <div className="hidden md:flex gap-10">
        {NAV_LINKS.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            className={`font-body text-[10px] uppercase tracking-[0.4em] transition-all hover:text-white ${
              pathname === link.href ? "text-[var(--color-primary)]" : "text-white/40"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}