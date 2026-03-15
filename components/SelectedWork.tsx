"use client";
import { SELECTED_WORKS } from "@/data/site-data";
import Image from "next/image";
import Link from "next/link";

export default function SelectedWork() {
  return (
    <section className="py-40 px-6 md:px-10 bg-[var(--color-dark)]">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-24 space-y-4">
        <span className="font-body text-[10px] uppercase tracking-[0.8em] text-[var(--color-primary)] block">
          Portfolio
        </span>
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <h2 className="font-display text-5xl md:text-7xl italic text-white/90 leading-tight">
            Featured <br /> Commissions
          </h2>
          <p className="font-body text-[11px] text-white/30 uppercase tracking-[0.3em] max-w-xs leading-relaxed border-l border-white/10 pl-6">
            A curation of films that define our commitment to timeless storytelling.
          </p>
        </div>
      </div>

      {/* Works Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {SELECTED_WORKS.map((work) => (
          <Link 
            key={work.id} 
            href={`/galleries/${work.slug}`} 
            className="group block cursor-pointer"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-white/5 border border-white/5">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            
            <div className="mt-8 flex justify-between items-start">
              <div>
                <p className="font-body text-[9px] uppercase tracking-[0.4em] text-[var(--color-primary)] mb-2">
                  {work.category}
                </p>
                <h3 className="font-display text-3xl md:text-4xl italic text-white/80 group-hover:text-white transition-colors">
                  {work.title}
                </h3>
              </div>
              
              {/* Decorative arrow or icon */}
              <div className="pt-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[var(--color-primary)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M17 7l-10 10M17 7h-10M17 7v10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}