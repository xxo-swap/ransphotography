export type PhotographyCategory = {
  id: string
  title: string
  slug: string
  description: string
  coverImage: string
  gallery: string[]
}

export const PHOTOGRAPHY_CATEGORIES: PhotographyCategory[] = [
  {
    id: "cat-1",
    title: "Traditional Wedding",
    slug: "traditional-wedding",
    description:
      "Classic wedding photography capturing rituals, family moments, and timeless compositions.",
    coverImage:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486"
    ]
  },

  {
    id: "cat-2",
    title: "Candid Moments",
    slug: "candid-wedding",
    description:
      "Natural and emotional moments captured as they happen during the celebration.",
    coverImage:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    gallery: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
      "https://images.unsplash.com/photo-1501901609772-df0848060b33"
    ]
  },

  {
    id: "cat-3",
    title: "Portraits",
    slug: "wedding-portraits",
    description:
      "Elegant portraits of couples and families crafted with artistic lighting.",
    coverImage:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    gallery: [
      "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
      "https://images.unsplash.com/photo-1503342452485-86ff0a1a7c5f",
      "https://images.unsplash.com/photo-1516589091380-5d8e87df6999"
    ]
  },

  {
    id: "cat-4",
    title: "Pre Wedding",
    slug: "pre-wedding",
    description:
      "Romantic pre-wedding shoots capturing the story of the couple before the big day.",
    coverImage:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
    gallery: [
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
      "https://images.unsplash.com/photo-1501901609772-df0848060b33",
      "https://images.unsplash.com/photo-1519741497674-611481863552"
    ]
  },

  {
    id: "cat-5",
    title: "Wedding Details",
    slug: "wedding-details",
    description:
      "Decor, jewelry, outfits, and artistic details that define the wedding aesthetics.",
    coverImage:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
    gallery: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e"
    ]
  }
]