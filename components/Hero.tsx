"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HERO_SLIDES } from "@/data/site-data";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".hero-slide");
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${containerRef.current?.offsetWidth ?? 0 * 2}`,
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen overflow-hidden bg-[var(--color-dark)]">
      <div className="flex h-screen w-[300vw] items-center px-[10vw]">
        {HERO_SLIDES.map((slide) => (
          <div key={slide.id} className="hero-slide w-full h-[75vh] px-6 flex-shrink-0">
            <div
              className="relative w-full h-full bg-cover bg-center transition-all duration-1000 grayscale-[60%] hover:grayscale-0 border border-white/5"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute bottom-16 left-16">
                <p className="font-body text-[10px] uppercase tracking-[0.5em] text-[var(--color-primary)] mb-3">
                  {slide.subtitle}
                </p>
                <h2 className="font-display text-7xl md:text-8xl italic text-white/90 leading-tight">
                  {slide.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}