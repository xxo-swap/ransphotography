"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FOUNDER_DATA } from "@/data/site-data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FounderAboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Parallax effect for the large portrait
      gsap.to(".portrait-parallax", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".portrait-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // 2. Fade in text blocks as they enter the screen
      const revealBlocks = gsap.utils.toArray(".reveal-block");
      revealBlocks.forEach((block: any) => {
        gsap.fromTo(
          block,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 3. Hero Text Entrance
      gsap.from(".hero-text", {
        opacity: 0,
        x: -50,
        duration: 1.5,
        stagger: 0.3,
        ease: "expo.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main 
      ref={containerRef} 
      className="bg-[var(--color-dark)] text-white overflow-x-hidden relative w-full"
    >
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-24 overflow-hidden border-b border-white/[0.03]">
        <div className="z-10 relative">
          <span className="hero-text font-body text-[10px] uppercase tracking-[1.2em] text-[var(--color-primary)] block mb-6">
            The Archivist
          </span>
          <h1 className="hero-text font-display text-[15vw] md:text-[11vw] italic leading-[0.9] tracking-tighter opacity-90">
            Deepak <br /> Singh.
          </h1>
        </div>
        
        {/* Background Ghost Text - Positioned carefully to prevent overflow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 font-display text-[28vw] italic text-white/[0.02] pointer-events-none select-none uppercase leading-none z-0 overflow-hidden translate-x-1/4">
          Vision
        </div>
      </section>

      {/* 2. IMAGE SECTION: Floating Portrait */}
      <section className="portrait-container relative py-32 md:py-48 px-6 md:px-24 flex justify-end">
        <div className="relative w-full md:w-5/12 aspect-[4/5] overflow-hidden border border-white/10 shadow-2xl z-10 portrait-parallax">
          <Image
            src={FOUNDER_DATA.image}
            alt={FOUNDER_DATA.name}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        
        {/* Overlapping Narrative */}
        <div className="absolute left-6 md:left-24 bottom-10 md:bottom-32 z-20 max-w-lg reveal-block">
          <p className="font-title text-3xl md:text-5xl italic leading-tight text-white/90">
            &ldquo;I observe the <span className="text-[var(--color-primary)]">unspoken</span> rhythm of the day.&rdquo;
          </p>
        </div>
      </section>

      {/* 3. NARRATIVE SECTION: Staggered Blocks */}
      <section className="py-24 md:py-40 space-y-48 md:space-y-72 px-6 md:px-24 max-w-7xl mx-auto w-full">
        {FOUNDER_DATA.bio.map((section, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${index % 2 === 0 ? "md:items-start" : "md:items-end"} reveal-block`}
          >
            <div className="max-w-xl space-y-8">
              <div className="flex items-baseline gap-4 border-b border-white/5 pb-6">
                <span className="font-display text-4xl md:text-6xl italic text-[var(--color-accent)] opacity-10">0{index + 1}</span>
                <h2 className="font-title text-3xl md:text-4xl uppercase tracking-tighter text-white/80">{section.heading}</h2>
              </div>
              <p className="font-body text-white/40 text-xs md:text-sm leading-relaxed tracking-widest uppercase font-light">
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* 4. SIGNATURE SECTION: The Seal */}
      <section className="py-48 md:py-64 flex flex-col items-center justify-center text-center space-y-16 reveal-block relative overflow-hidden">
        
        {/* Animated Background Ring */}
        <div className="absolute w-[600px] h-[600px] border border-white/[0.02] rounded-full pointer-events-none" />

        <div className="relative group">
          {FOUNDER_DATA.signature && (
            <div className="relative z-10 p-4">
              <Image
                src={FOUNDER_DATA.signature}
                alt="Signature Seal"
                width={350}
                height={175}
                className="opacity-70 brightness-150 filter invert group-hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          )}
          {/* Rotating Stamp Border */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 border border-[var(--color-primary)]/10 rounded-full animate-[spin_30s_linear_infinite] border-dashed" />
        </div>
        
        <div className="space-y-8 z-10">
          <p className="font-body text-[10px] uppercase tracking-[0.8em] text-white/30 px-6">
            Crafting visual legacies from Noida to Worldwide
          </p>
          <a 
            href="/contact" 
            className="group relative font-display text-4xl md:text-5xl italic text-white/90 hover:text-[var(--color-primary)] transition-colors inline-block"
          >
            Let&apos;s tell your story.
            <div className="h-[1px] bg-[var(--color-primary)] w-0 group-hover:w-full transition-all duration-700 mt-4 mx-auto" />
          </a>
        </div>
      </section>

    </main>
  );
}