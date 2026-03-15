"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TESTIMONIAL } from "@/data/site-data";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-content", {
        opacity: 0,
        y: 30,
        duration: 2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-60 px-6 md:px-10 bg-[var(--color-dark)] border-y border-white/5 relative overflow-hidden"
    >
      {/* Background Decorative Element - Suggests a "letter" or "journal" */}
      <div className="absolute top-10 left-10 font-display text-[20rem] text-white/[0.02] pointer-events-none select-none italic">
        &ldquo;
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Vertical Label */}
        <div className="hidden lg:block lg:col-span-1">
          <span className="font-body text-[8px] uppercase tracking-[1em] text-[var(--color-primary)] -rotate-90 origin-left whitespace-nowrap opacity-50">
            Kind Words
          </span>
        </div>

        {/* Right Column: The Narrative Quote */}
        <div className="lg:col-span-11 space-y-20 testimonial-content">
          <div className="relative">
            <h2 className="font-display text-3xl md:text-6xl italic text-white/80 leading-[1.6] max-w-5xl">
              &ldquo;{TESTIMONIAL.quote}&rdquo;
            </h2>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 border-t border-white/5 pt-12">
            <div className="space-y-2">
              <p className="font-title text-3xl text-white/90 tracking-tight">
                {TESTIMONIAL.client}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-[var(--color-accent)]/40" />
                <p className="font-body text-[9px] uppercase tracking-[0.6em] text-[var(--color-primary)]">
                  {TESTIMONIAL.location}
                </p>
              </div>
            </div>

            <div className="max-w-xs">
              <p className="font-body text-[10px] text-white/20 uppercase tracking-[0.2em] leading-relaxed">
                A reflection on their feature film premiere, documented in late {new Date().getFullYear() - 1}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}