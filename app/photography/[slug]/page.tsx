import { notFound } from "next/navigation"
import Image from "next/image"
import { PHOTOGRAPHY_CATEGORIES } from "@/data/photography"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function PhotographyCategoryPage({ params }: Props) {

  const { slug } = await params

  const category = PHOTOGRAPHY_CATEGORIES.find(
    (c) => c.slug === slug
  )

  if (!category) notFound()

  return (
    <main className="bg-dark min-h-screen text-white">

      {/* HERO */}
      <section className="py-32 text-center max-w-4xl mx-auto px-6">

        <p className="uppercase tracking-[0.6em] text-xs text-primary mb-6">
          Photography Collection
        </p>

        <h1 className="text-6xl md:text-7xl italic font-display">
          {category.title}
        </h1>

        <p className="text-white/60 mt-6">
          {category.description}
        </p>

      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-10 pb-32 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {category.gallery.map((image, index) => (

          <div
            key={index}
            className="relative aspect-[4/5] overflow-hidden rounded-xl group"
          >

            <Image
              src={image}
              alt={`${category.title} ${index}`}
              fill
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />

          </div>

        ))}

      </section>

    </main>
  )
}