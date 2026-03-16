"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CLIENT_PROJECTS } from "@/data/clients";

export default function HomePortfolio() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeProject = activeIndex !== null ? CLIENT_PROJECTS[activeIndex] : null;

  return (
    <section className="relative py-40 bg-[var(--color-dark)] overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="relative z-10 px-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="space-y-4">
            <span className="font-body text-[10px] uppercase tracking-[0.8em] text-[var(--color-primary)]">
              Selected Films
            </span>
            <h2 className="font-display text-6xl md:text-8xl italic text-white/90 leading-none">
              The Archives
            </h2>
          </div>
          <Link
            href="/galleries"
            className="font-body text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-white border-b border-white/10 pb-2 transition-colors"
          >
            View All Stories
          </Link>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {CLIENT_PROJECTS.map((client, index) => (
            <Link
              key={client.slug}
              href={`/galleries/${client.slug}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="group py-12 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between transition-all duration-700 hover:px-8"
            >
              <div className="flex items-center gap-10">
                <span className="font-display text-2xl text-white/10 group-hover:text-[var(--color-primary)] transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-4xl md:text-6xl text-white/70 group-hover:text-white transition-all group-hover:italic group-hover:translate-x-4 duration-500">
                    {client.couple}
                  </h3>
                  <p className="font-body text-[9px] uppercase tracking-[0.4em] text-white/20 mt-2 md:hidden">
                    {client.location}
                  </p>
                </div>
              </div>

              <div className="hidden md:block text-right">
                <p className="font-body text-[10px] uppercase tracking-[0.5em] text-white/20 group-hover:text-[var(--color-primary)] transition-colors">
                  {client.location}
                </p>
                <p className="font-title text-sm italic text-white/10 group-hover:text-white/40 transition-colors mt-1">
                  {client.filmCategory}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Floating Preview Card */}
      {activeProject && (
        <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative w-[420px] h-[650px] rounded-sm overflow-hidden shadow-2xl border border-white/10 animate-fade-in">
            <Image
              src={activeProject.coverImage}
              alt={activeProject.couple}
              fill
              className="object-cover grayscale-[40%]"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="font-body text-[9px] uppercase tracking-widest text-[var(--color-primary)] mb-1">
                {activeProject.location}
              </p>
              <h4 className="font-display text-3xl italic">
                {activeProject.couple}
              </h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}