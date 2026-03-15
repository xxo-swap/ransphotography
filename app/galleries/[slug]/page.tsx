"use client";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CLIENT_PROJECTS } from "@/data/clients";

gsap.registerPlugin(ScrollTrigger);

export default function ClientGalleryPage() {
  const { slug } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Find the specific client from your Master Object
  const client = CLIENT_PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    if (!client) return;

    const ctx = gsap.context(() => {
      // Parallax effect on the hero title
      gsap.to(".hero-content", {
        yPercent: 30,
        opacity: 0.5,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Reveal events as you scroll
      const events = gsap.utils.toArray<HTMLElement>(".event-section");
      events.forEach((event) => {
        gsap.from(event.querySelectorAll(".reveal"), {
          y: 60,
          opacity: 0,
          duration: 1.5,
          stagger: 0.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: event,
            start: "top 80%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [client]);

  if (!client) return notFound();

  return (
    <main ref={containerRef} className="bg-dark min-h-screen text-white">
      
      {/* 1. CINEMATIC HERO */}
      <section className="hero-section relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Video Preview */}
        <video 
          autoPlay muted loop playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
        >
          <source src={client.videoPreview} type="video/mp4" />
        </video>
        
        <div className="hero-content relative z-10 text-center px-10">
          <span className="font-body text-[10px] uppercase tracking-[0.8em] text-primary mb-6 block animate-pulse">
            {client.location}
          </span>
          <h1 className="font-display text-7xl md:text-[10rem] italic leading-none mb-4">
            {client.couple}
          </h1>
          <p className="font-title text-xl opacity-60 italic">{client.date}</p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
      </section>

      {/* 2. THE FILM PREMIERE */}
      <section className="py-32 px-10 max-w-6xl mx-auto text-center">
        <div className="mb-20 space-y-6">
          <span className="font-body text-[9px] uppercase tracking-widest text-primary italic">The Feature Film</span>
          <div className="aspect-video w-full bg-white/5 border border-white/5 shadow-2xl overflow-hidden group">
            <iframe 
              src={client.videoUrl} 
              className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
              allow="autoplay; fullscreen"
            />
          </div>
        </div>
        <p className="font-body text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed italic">
          &quot;{client.summary}&quot;
        </p>
      </section>

      {/* 3. EVENT-WISE JOURNEY */}
      <div className="space-y-40 pb-40">
        {client.events.map((event, index) => (
          <section key={event.id} className="event-section px-6 md:px-10 max-w-7xl mx-auto">
            
            {/* Event Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="reveal">
                <span className="font-display text-5xl text-primary/20 block mb-2 leading-none">0{index + 1}</span>
                <h2 className="font-title text-4xl md:text-5xl border-l-2 border-primary pl-6 tracking-tight">
                  {event.title}
                </h2>
              </div>
              <p className="reveal max-w-sm font-body text-[11px] text-white/40 uppercase tracking-[0.3em] leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Artistic Masonry-style Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {event.gallery.map((img, i) => (
                <div key={i} className="reveal relative overflow-hidden group border border-white/5">
                  <Image
                    src={img}
                    alt={`${event.title} image ${i}`}
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* 4. SHARE FOOTER */}
      <section className="py-20 border-t border-white/5 text-center">
         <h3 className="font-display text-3xl italic text-white/30 mb-8">Part of their forever.</h3>
         <button 
           onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
           className="font-body text-[9px] uppercase tracking-[0.6em] text-primary hover:text-white transition-colors"
         >
           Back to Top
         </button>
      </section>
    </main>
  );
}