"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS_STEPS } from "@/data/site-data";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Correctly type the array as HTMLElement[]
      const steps = gsap.utils.toArray<HTMLElement>(".process-step");

      steps.forEach((step) => {
        gsap.fromTo(
          step.querySelectorAll(".reveal"),
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: step, // TypeScript now knows this is an element
              start: "top 80%",
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);
  return (
    <main ref={pageRef} className="bg-dark pt-32 pb-20 overflow-x-hidden">
      {/* Header Section */}
      <section className="px-10 mb-32 text-center">
        <span className="font-body text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">
          Our Method
        </span>
        <h1 className="font-display text-7xl md:text-9xl italic text-white/90">
          The Journey
        </h1>
      </section>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto px-10 space-y-40 md:space-y-64">
        {PROCESS_STEPS.map((step, index) => (
          <div
            key={step.id}
            className={`process-step flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-10 md:gap-24`}
          >
            {/* Image Box */}
            <div className="reveal w-full md:w-1/2 aspect-[4/5] relative overflow-hidden bg-white/5 border border-white/5">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text Box */}
            <div className="reveal w-full md:w-1/2 space-y-6">
              <span className="font-display text-8xl text-primary opacity-20 block leading-none">
                {step.id}
              </span>
              <div className="space-y-2">
                <p className="font-body text-[10px] uppercase tracking-[0.4em] text-accent">
                  {step.subtitle}
                </p>
                <h2 className="font-title text-4xl md:text-5xl text-white">
                  {step.title}
                </h2>
              </div>
              <p className="font-body text-white/40 leading-relaxed max-w-md">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="mt-64 text-center px-10">
        <h3 className="font-display text-4xl italic text-white/60 mb-10">
          Ready to start your story?
        </h3>
        <a
          href="/contact"
          className="inline-block border border-primary px-12 py-4 font-body text-[10px] uppercase tracking-[0.4em] text-white hover:bg-primary transition-all duration-500"
        >
          Book Your Date
        </a>
      </section>
    </main>
  );
}
