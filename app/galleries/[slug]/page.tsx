"use client";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CLIENT_PROJECTS } from "@/data/clients";

gsap.registerPlugin(ScrollTrigger);

// --- Helper to extract YouTube ID from full URL ---
function getYouTubeId(url: string): string {
  const reg =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(reg);
  return match ? match[1] : "";
}

export default function ClientGalleryPage() {
  const { slug } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);

  const client = CLIENT_PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    if (!client) return;

    const ctx = gsap.context(() => {
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

  const heroId = getYouTubeId(client.videoPreview);
  const teaserId = getYouTubeId(client.videoUrl);

  return (
    <main ref={containerRef} className="bg-dark min-h-screen text-white">
      {/* HERO */}
      <section className="hero-section relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* YouTube Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <iframe
            className="absolute top-1/2 left-1/2 min-w-[120%] min-h-[120%] -translate-x-1/2 -translate-y-1/2 opacity-40 grayscale"
            src={`https://www.youtube.com/embed/${heroId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${heroId}&modestbranding=1&rel=0`}
            allow="autoplay"
          />
        </div>

        <div className="hero-content relative z-10 text-center px-10">
          <span className="font-body text-[10px] uppercase tracking-[0.8em] text-primary mb-6 block animate-pulse">
            {client.location}
          </span>
          <h1 className="font-display text-7xl md:text-[10rem] italic leading-none mb-4">
            {client.couple}
          </h1>
          <p className="font-title text-xl opacity-60 italic">{client.date}</p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
      </section>

      {/* TEASER */}
      <section className="py-32 px-10 max-w-6xl mx-auto text-center">
        <div className="mb-20 space-y-6">
          <span className="font-body text-[9px] uppercase tracking-widest text-primary italic">
            Cinematic Teaser
          </span>
          <div className="aspect-video w-full bg-white/5 border border-white/5 shadow-2xl overflow-hidden group">
            <iframe
              src={`https://www.youtube.com/embed/${teaserId}?controls=1&modestbranding=1&rel=0`}
              className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
              allow="autoplay; fullscreen"
            />
          </div>
        </div>

        <p className="font-body text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed italic">
          &quot;{client.summary}&quot;
        </p>
      </section>

      {/* EVENTS */}
      <div className="space-y-40 pb-40">
        {client.events.map((event, index) => (
          <section
            key={event.id}
            className="event-section px-6 md:px-10 max-w-7xl mx-auto"
          >
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="reveal">
                <span className="font-display text-5xl text-primary/20 block mb-2 leading-none">
                  0{index + 1}
                </span>
                <h2 className="font-title text-4xl md:text-5xl border-l-2 border-primary pl-6 tracking-tight">
                  {event.title}
                </h2>
              </div>
              <p className="reveal max-w-sm font-body text-[11px] text-white/40 uppercase tracking-[0.3em] leading-relaxed">
                {event.description}
              </p>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {event.gallery.map((img, i) => (
                <div
                  key={i}
                  className="reveal relative overflow-hidden group border border-white/5"
                >
                  <Image
                    src={img}
                    alt={`${event.title} image ${i}`}
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* FOOTER */}
      <section className="py-20 border-t border-white/5 text-center">
        <h3 className="font-display text-3xl italic text-white/30 mb-8">
          Part of their forever.
        </h3>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-body text-[9px] uppercase tracking-[0.6em] text-primary hover:text-white transition-colors"
        >
          Back to Top
        </button>
      </section>
    </main>
  );
}
