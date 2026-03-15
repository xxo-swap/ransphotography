"use client"

import Image from "next/image"
import Link from "next/link"
import { PHOTOGRAPHY_CATEGORIES } from "@/data/photography"

export default function PhotographyPage() {
  return (
    <main className="bg-dark min-h-screen text-white">

      {/* HERO */}
      <section className="py-32 text-center">
        <p className="uppercase tracking-[0.6em] text-xs text-primary mb-6">
          Wedding Photography
        </p>

        <h1 className="text-6xl md:text-8xl italic font-display">
          Photography
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-white/60">
          From timeless traditional portraits to candid storytelling,
          our photography captures every emotion and moment of the wedding journey.
        </p>
      </section>

      {/* CATEGORY GRID */}
      <section className="max-w-7xl mx-auto px-10 pb-32 grid md:grid-cols-2 lg:grid-cols-3 gap-16">

        {PHOTOGRAPHY_CATEGORIES.map((category) => (

          <Link
            key={category.id}
            href={`/photography/${category.slug}`}
            className="group"
          >

            {/* IMAGE */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">

              <Image
                src={category.coverImage}
                alt={category.title}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

            </div>

            {/* TEXT */}
            <div className="mt-6">

              <h3 className="text-3xl font-display group-hover:italic transition">
                {category.title}
              </h3>

              <p className="text-sm text-white/50 mt-2">
                {category.description}
              </p>

            </div>

          </Link>

        ))}

      </section>

    </main>
  )
}