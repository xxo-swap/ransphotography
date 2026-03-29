"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { CLIENT_PROJECTS } from "@/data/clients";

export default function AllGalleriesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-dark min-h-screen pt-40 pb-20 px-6 md:px-10">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-20 text-center space-y-4">
        <span className="font-body text-[10px] uppercase tracking-[0.8em] text-primary block">
          The Archives
        </span>
        <h1 className="font-display text-6xl md:text-8xl italic text-white/90">
          All Stories
        </h1>
        <p className="font-body text-white/30 text-[11px] uppercase tracking-widest max-w-md mx-auto leading-relaxed">
          A collection of cinematic moments and timeless stills.
        </p>
      </header>

      {/* Masonry-Style Grid */}
      <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {CLIENT_PROJECTS.map((client) => (
          <Link 
            key={client.slug} 
            href={`/galleries/${client.slug}`}
            className="gallery-card group relative block overflow-hidden border border-white/5 bg-white/5"
          >
            {/* Image Wrapper */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={client.coverImage}
                alt={client.couple}
                fill
                className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="font-body text-[10px] uppercase tracking-[0.4em] text-white border border-white/20 px-6 py-2">
                  View Film
                </span>
              </div>
            </div>

            {/* Client Info */}
            <div className="p-6 space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="font-display text-2xl text-white/80 group-hover:text-primary transition-colors">
                  {client.couple}
                </h3>
                <span className="font-title text-[10px] text-white/20 mt-2">
                  {client.date.split(' ').pop()}
                </span>
              </div>
              
              <div className="flex items-center gap-3 text-[9px] uppercase tracking-widest text-white/40">
                <span>{client.location}</span>
                <span className="w-1 h-[1px] bg-primary/40" />
                <span>{client.filmCategory}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State / Coming Soon */}
      <div className="mt-32 text-center border-t border-white/5 pt-20">
        <p className="font-body text-[9px] uppercase tracking-[0.5em] text-white/20">
          More stories currently in post-production
        </p>
      </div>
    </main>
  );
}
