"use client"

import { useState } from "react"
import Image from "next/image"
import { FILM_PROJECTS } from "@/data/films"

export default function FilmsPage() {

  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <main className="bg-dark min-h-screen text-white">

      {/* HERO */}
      <section className="py-32 text-center">
        <p className="uppercase tracking-[0.6em] text-xs text-primary mb-6">
          Cinematic Stories
        </p>

        <h1 className="text-6xl md:text-8xl italic font-display">
          Films
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-white/60">
          A collection of wedding teasers, cinematic films, and destination stories
          crafted with emotion and storytelling.
        </p>
      </section>

      {/* FILM GRID */}
      <section className="max-w-7xl mx-auto px-10 pb-32 grid md:grid-cols-2 lg:grid-cols-3 gap-16">

        {FILM_PROJECTS.map((film) => (

          <div
            key={film.id}
            className="group cursor-pointer"
            onClick={() => setActiveVideo(film.youtubeId)}
          >

            {/* CARD */}
            <div className="relative aspect-video overflow-hidden rounded-xl">

              <Image
                src={film.thumbnail}
                alt={film.title}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={false}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">

                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition">

                  ▶

                </div>

              </div>

            </div>

            {/* INFO */}
            <div className="mt-4">

              <p className="text-xs uppercase tracking-widest text-primary">
                {film.category}
              </p>

              <h3 className="text-2xl mt-2">
                {film.title}
              </h3>

              <p className="text-sm text-white/50 mt-1">
                {film.location} • {film.duration}
              </p>

            </div>

          </div>

        ))}

      </section>

      {/* VIDEO MODAL */}
      {activeVideo && (

        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
          onClick={() => setActiveVideo(null)}
        >

          <div className="relative w-full max-w-5xl aspect-video">

            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />

          </div>

        </div>

      )}

    </main>
  )
}