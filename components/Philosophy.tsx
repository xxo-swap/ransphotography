"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PHILOSOPHY } from "@/data/site-data";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle reveal for the text elements
      gsap.from(".reveal-text", {
        y: 30,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      // Floating animation for the quote to make it feel "untethered"
      gsap.to(".floating-quote", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-60 px-6 md:px-10 bg-[var(--color-dark)] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: The Tagline & Title */}
        <div className="lg:col-span-7 space-y-12">
          <div className="reveal-text flex items-center gap-4">
            <div className="w-12 h-px bg-[var(--color-primary)]" />
            <span className="font-body text-[9px] uppercase tracking-[0.8em] text-[var(--color-primary)]">
              {PHILOSOPHY.tagline}
            </span>
          </div>
          
          <h2 className="reveal-text font-display text-7xl md:text-[9rem] italic text-white/90 leading-[0.85] tracking-tighter">
            {PHILOSOPHY.title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? "pl-8 md:pl-20 block text-[var(--color-accent)]" : "block"}>
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Right Column: The Narrative & Quote */}
        <div className="lg:col-span-5 lg:pt-40 space-y-16">
          <div className="reveal-text space-y-6">
            <p className="font-body text-white/50 leading-relaxed text-xs md:text-sm uppercase tracking-[0.3em]">
              The best moments aren&apos;t curated. They aren&lsquo;t posed. They are the 
              shaking hands, the stolen glances, and the unbridled laughter 
              that happens when you think the camera is off.
            </p>
            <p className="font-body text-white/30 leading-relaxed text-[11px] max-w-sm italic">
              {PHILOSOPHY.description}
            </p>
          </div>

          <div className="reveal-text floating-quote border-t border-white/5 pt-12 relative">
             {/* Decorative element to suggest "observation" */}
            <div className="absolute -top-[1px] left-0 w-12 h-[2px] bg-[var(--color-accent)]" />
            
            <p className="font-display text-3xl md:text-4xl text-white/80 italic leading-snug">
              &quot;{PHILOSOPHY.quote}&quot;
            </p>
            <span className="font-body text-[8px] uppercase tracking-[0.4em] text-[var(--color-primary)] mt-4 block">
              — The Rans Ethos
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}