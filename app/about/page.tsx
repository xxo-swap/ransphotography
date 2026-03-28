"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FOUNDER_DATA } from "@/data/site-data";
import HomePortfolio from "@/components/HomePortfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FounderAboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      const revealBlocks = gsap.utils.toArray<HTMLElement>(".reveal-block");
      revealBlocks.forEach((block) => {
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
            },
          }
        );
      });

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
      className="bg-[var(--color-dark)] text-white overflow-x-hidden w-full"
    >
      {/* HERO */}
      <section className="relative min-h-[80vh] flex flex-col justify-center px-6 md:px-16 lg:px-24  border-b border-white/[0.03]">
        <div className="z-10">
          <span className="hero-text font-body text-[10px] uppercase tracking-[1em] text-[var(--color-primary)] block mb-6">
            The Archivist
          </span>
          <h1 className="hero-text font-display text-[18vw] sm:text-[14vw] md:text-[10vw] italic leading-[0.9] tracking-tighter opacity-90">
            Deepak <br /> Singh.
          </h1>
        </div>

        <div className="absolute inset-0 flex items-center justify-end pointer-events-none select-none">
          <div className="font-display text-[30vw] md:text-[22vw] italic text-white/[0.02] uppercase leading-none pr-10">
            Vision
          </div>
        </div>
      </section>

      {/* PORTRAIT */}
      <section className="portrait-container relative px-6 md:px-16 lg:px-24 py-24 md:py-40 flex flex-col md:flex-row md:justify-end gap-16">
        {/* Image */}
        <div className="relative w-full md:w-5/12 aspect-square overflow-hidden border border-white/10 shadow-2xl portrait-parallax">
  <Image
    src={FOUNDER_DATA.image}
    alt={FOUNDER_DATA.name}
    fill
    className="object-cover transition-all duration-1000 scale-110"
    sizes="(max-width: 768px) 100vw, 40vw"
    priority
  />
</div>

        {/* Quote */}
        <div className="max-w-lg reveal-block md:absolute md:left-16 md:bottom-24">
          <p className="font-title text-2xl md:text-5xl italic leading-tight text-white/90">
            &ldquo;I observe the{" "}
            <span className="text-[var(--color-primary)]">unspoken</span> rhythm of the day.&rdquo;
          </p>
        </div>
      </section>

      {/* NARRATIVE */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-40 max-w-7xl mx-auto space-y-32 md:space-y-56">
        {FOUNDER_DATA.bio.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:items-start" : "md:items-end"
            } reveal-block`}
          >
            <div className="max-w-xl space-y-8">
              <div className="flex items-baseline gap-4 border-b border-white/5 pb-6">
                <span className="font-display text-4xl md:text-6xl italic text-[var(--color-accent)] opacity-10">
                  0{index + 1}
                </span>
                <h2 className="font-title text-2xl md:text-4xl uppercase tracking-tighter text-white/80">
                  {section.heading}
                </h2>
              </div>
              <p className="font-body text-white/40 text-xs md:text-sm leading-relaxed tracking-widest uppercase font-light">
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* SIGNATURE */}
      <section className="py-32 md:py-56 flex flex-col items-center justify-center text-center space-y-16 reveal-block relative overflow-hidden px-6">
        <div className="absolute w-[400px] md:w-[600px] h-[400px] md:h-[600px] border border-white/[.25] rounded-full pointer-events-none" />

        <div className="relative group">
          {FOUNDER_DATA.signature && (
            <Image
              src={FOUNDER_DATA.signature}
              alt="Signature Seal"
              width={300}
              height={150}
              className="opacity-70 brightness-150 invert group-hover:opacity-100 transition-opacity duration-700"
            />
          )}
          <div className="absolute inset-0 m-auto w-56 h-56 md:w-80 md:h-80 border border-[var(--color-primary)] rounded-full animate-[spin_50s_linear_infinite] border-dashed" />
        </div>

        <div className="space-y-8 z-10">
          <p className="font-body text-[10px] uppercase tracking-[0.8em] text-white/30">
            Crafting visual legacies from Noida to Worldwide
          </p>
          <a
            href="/contact"
            className="group font-display text-3xl md:text-5xl italic text-white/90 hover:text-[var(--color-primary)] transition-colors inline-block"
          >
            Let&apos;s tell your story.
            <div className="h-[1px] bg-[var(--color-primary)] w-0 group-hover:w-full transition-all duration-700 mt-4 mx-auto" />
          </a>
        </div>
      </section>

      <HomePortfolio/>
      
    </main>
  );
}