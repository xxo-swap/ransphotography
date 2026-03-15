"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ATMOSPHERIC_IMAGES } from "@/data/site-data";

export default function AtmosphericStills() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // The horizontal scroll
      gsap.to(".marquee-content", {
        xPercent: -50,
        ease: "none",
        duration: 60, // Slower is more cinematic
        repeat: -1,
      });

      // Individual parallax for each frame to give depth
      const frames = gsap.utils.toArray<HTMLElement>(".still-frame");
      frames.forEach((frame, i) => {
        gsap.to(frame, {
          y: i % 2 === 0 ? -20 : 20, // Alternating float
          duration: 3 + i % 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, marqueeRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={marqueeRef} className="py-40 overflow-hidden bg-[var(--color-dark)] flex flex-col items-center">
      
      {/* Narrative Label */}
      <div className="mb-20 text-center">
        <span className="font-body text-[8px] uppercase tracking-[1em] text-[var(--color-primary)]">
          Fragmented Memories
        </span>
        <p className="font-title text-white/20 italic text-sm mt-4">
          The quiet rhythm of the day, observed.
        </p>
      </div>

      <div className="marquee-content flex w-fit gap-12 items-center">
        {[...ATMOSPHERIC_IMAGES, ...ATMOSPHERIC_IMAGES].map((src, i) => {
          // Create varied heights for a "film strip" look
          const isTall = i % 3 === 0;
          const isSmall = i % 4 === 0;

          return (
            <div 
              key={i} 
              className={`still-frame relative flex-shrink-0 transition-all duration-1000 border border-white/5 bg-white/5
                ${isTall ? "w-[30vw] aspect-[2/3]" : isSmall ? "w-[15vw] aspect-square mt-20" : "w-[22vw] aspect-[3/4] -mt-10"}
                ${i % 2 === 0 ? "grayscale group-hover:grayscale-0" : "grayscale-0"} 
                hover:grayscale-0 hover:z-10 hover:scale-105 group
              `}
            >
              <Image
                src={src}
                alt="Atmospheric Still"
                fill
                className="object-cover transition-opacity duration-700 opacity-60 hover:opacity-100"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              
              {/* Technical Detail - Mimicking a film negative/viewfinder */}
              <div className="absolute top-2 left-2 flex gap-1 items-center opacity-30">
                 <div className="w-[3px] h-[3px] rounded-full bg-white" />
                 <span className="font-body text-[6px] text-white tracking-widest uppercase">
                   Frame {i + 102}
                 </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Aesthetic Line */}
      <div className="w-px h-32 bg-gradient-to-b from-[var(--color-primary)]/40 to-transparent mt-32" />
    </section>
  );
}