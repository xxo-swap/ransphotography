"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function FinalCTA() {
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background zoom on scroll
      gsap.to(".cta-bg", {
        scale: 1.15,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Subtle reveal for text
      gsap.from(".cta-content", {
        opacity: 0,
        y: 40,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 60%",
        }
      });
    }, ctaRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ctaRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-[var(--color-dark)] px-6 md:px-10">
      
      {/* Cinematic Background Image */}
      <div className="cta-bg absolute inset-0 opacity-15 grayscale contrast-[1.1]">
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070"
          fill
          className="w-full h-full object-cover"
          alt="The Archive Background"
          priority
        />
        {/* Vignette for cinematic focus */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[var(--color-dark)]/90" />
      </div>

      <div className="relative text-center z-10 cta-content">
        <div className="space-y-6 mb-16">
          <span className="font-body text-[9px] uppercase tracking-[1em] text-[var(--color-primary)] block">
            The Final Act
          </span>
          <h2 className="font-display text-7xl md:text-[11rem] italic text-white/95 leading-[0.8] tracking-tighter">
            Archive <br /> Your Soul.
          </h2>
          <p className="font-title text-lg md:text-xl text-white/40 italic max-w-lg mx-auto pt-6">
            Beyond the noise, your story remains.
          </p>
        </div>

        <Link 
          href="/contact" 
          className="group relative inline-flex items-center gap-6 px-12 py-6 border border-white/5 overflow-hidden transition-all duration-700 hover:border-[var(--color-primary)]/40 bg-white/[0.02]"
        >
          {/* Subtle Hover Slide */}
          <div className="absolute inset-0 bg-[var(--color-primary)]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
          
          <span className="relative font-body text-[10px] uppercase tracking-[0.6em] text-white/80 group-hover:text-white">
            Begin Your Narrative
          </span>

          <svg 
            width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" 
            className="relative -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 text-[var(--color-primary)]"
          >
            <path d="M17 7l-10 10M17 7h-10M17 7v10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        
        <div className="mt-20 pt-10 border-t border-white/5 max-w-[200px] mx-auto">
          <p className="font-body text-[8px] text-white/20 uppercase tracking-[0.5em] leading-relaxed">
            Preserving legacies <br /> for 2026 / 2027
          </p>
        </div>
      </div>

      {/* Aesthetic Side Label */}
      <div className="absolute bottom-12 right-12 hidden md:block">
        <p className="font-body text-[7px] uppercase tracking-[0.8em] text-white/10 rotate-90 origin-bottom-right">
          Rans Photography — Established in India
        </p>
      </div>
    </section>
  );
}