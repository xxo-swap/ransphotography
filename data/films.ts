export type FilmProject = {
  id: string
  title: string
  slug: string
  category: string
  location: string
  duration: string
  thumbnail: string
  youtubeId: string
  description: string
}

export const FILM_PROJECTS: FilmProject[] = [
  {
    id: "film-1",
    title: "Royal Wedding Teaser",
    slug: "royal-wedding-teaser",
    category: "Wedding Teaser",
    location: "Udaipur",
    duration: "2:40",
    thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    youtubeId: "amFaKvdzYRU",
    description:
      "A cinematic teaser capturing the elegance of a royal palace wedding."
  },
  {
    id: "film-2",
    title: "Beach Destination Wedding",
    slug: "beach-destination-film",
    category: "Feature Film",
    location: "Goa",
    duration: "4:10",
    thumbnail: "https://images.unsplash.com/photo-1507504031003-b417219a0fde",
    youtubeId: "Irs6YySkSMA",
    description:
      "Sunset vows and ocean breeze captured in a destination wedding film."
  },
  {
    id: "film-3",
    title: "Luxury Sangeet Film",
    slug: "luxury-sangeet-film",
    category: "Event Film",
    location: "Delhi",
    duration: "3:05",
    thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    youtubeId: "berW1l3HhsY",
    description:
      "A vibrant sangeet celebration with music, dance, and cinematic lighting."
  }
]