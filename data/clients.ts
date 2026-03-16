export type WeddingEvent = {
  id: string;
  title: string;
  slug: string;
  description: string;
  featuredImage: string;
  gallery: string[];
};

export type ClientProject = {
  slug: string;
  couple: string;
  location: string;
  date: string;
  coverImage: string;
  summary: string;
  // --- Video Specific Data ---
  videoUrl: string; // Link to Vimeo/YouTube
  videoPreview: string; // A short, muted .mp4 for background hover effects
  filmCategory: string; // e.g., "Feature Film", "Teaser", "Documentary"
  duration: string; // e.g., "4:20"
  // ---------------------------
  events: WeddingEvent[];
};

export const CLIENT_PROJECTS: ClientProject[] = [
  {
    slug: "rajini-priyansh",
    couple: "Rajini & Priyansh",
    location: "Govardhan, Uttar Pradesh",
    date: "December 2025",
    coverImage: "/clients/rajiniPriyansh/cover.jpeg",
    summary:
      "A three-day celebration of heritage and love, set against the golden architecture of Udaipur.",
    videoUrl: "https://vimeo.com/123456789",
    videoPreview: "/videos/rajini-priyansh-preview.mp4",
    filmCategory: "Cinematic Teaser",
    duration: "3:45",
    events: [
      {
        id: "haldi-01",
        title: "The Haldi Ritual",
        slug: "haldi",
        description: "A morning of turmeric, marigolds, and laughter.",
        featuredImage:
          "https://images.unsplash.com/photo-1519741497674-611481863552",
        gallery: [
          "/clients/rajiniPriyansh/1.jpeg",
          "/clients/rajiniPriyansh/2.jpeg",
          "/clients/rajiniPriyansh/3.jpeg",
        ],
      },
      {
        id: "sangeet-01",
        title: "Sangeet Night",
        slug: "sangeet",
        description:
          "Music, dance, and colorful lights filled the palace courtyard.",
        featuredImage:
          "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
        gallery: [
          "/clients/rajiniPriyansh/4.jpeg",
          "/clients/rajiniPriyansh/5.jpeg",
          "/clients/rajiniPriyansh/6.jpeg",
        ],
      },
      {
        id: "wedding-01",
        title: "The Wedding Ceremony",
        slug: "wedding",
        description: "Sacred vows exchanged beneath a floral mandap.",
        featuredImage:
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
        gallery: [
          "/clients/rajiniPriyansh/7.jpeg",
          // "/clients/rajiniPriyansh/8.jpeg",
          // "/clients/rajiniPriyansh/9.jpeg"
        ],
      },
    ],
  },

  {
    slug: "princy-rajat",
    couple: "Princy & Rajat",
    location: "Jaipur, Rajasthan",
    date: "February 2025",
    coverImage: "/clients/princyRajat/cover.jpeg",
    summary:
      "A vibrant palace wedding filled with royal colors, music, and timeless romance.",
    videoUrl: "https://vimeo.com/987654321",
    videoPreview: "/videos/princy-rajat-preview.mp4",
    filmCategory: "Feature Film",
    duration: "5:20",
    events: [
      {
        id: "mehendi-02",
        title: "Mehendi Ceremony",
        slug: "mehendi",
        description: "Intricate henna designs and joyful traditions.",
        featuredImage:
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff",
        gallery: [
          "/clients/princyRajat/1.jpeg",
          "/clients/princyRajat/2.jpeg",
          "/clients/princyRajat/3.jpeg",
          "/clients/princyRajat/4.jpeg",
          "/clients/princyRajat/5.jpeg",
          "/clients/princyRajat/6.jpeg",
          "/clients/princyRajat/7.jpeg",
          "/clients/princyRajat/8.jpeg",
        ],
      },
      {
        id: "sangeet-02",
        title: "Royal Sangeet",
        slug: "sangeet",
        description: "A dazzling night of performances and celebration.",
        featuredImage:
          "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
        gallery: [
          "/clients/princyRajat/9.jpeg",
          "/clients/princyRajat/10.jpeg",
          "/clients/princyRajat/11.jpeg",
          "/clients/princyRajat/12.jpeg",
          "/clients/princyRajat/13.jpeg",
          "/clients/princyRajat/14.jpeg",
          "/clients/princyRajat/15.jpeg",
          "/clients/princyRajat/16.jpeg",
        ],
      },
      {
        id: "wedding-02",
        title: "Sacred Wedding",
        slug: "wedding",
        description: "Traditional rituals and sacred fire blessings.",
        featuredImage:
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
        gallery: [
          "/clients/princyRajat/17.jpeg",
          "/clients/princyRajat/18.jpeg",
          "/clients/princyRajat/19.jpeg",
          "/clients/princyRajat/20.jpeg",
          "/clients/princyRajat/21.jpeg",
          "/clients/princyRajat/22.jpeg",
          "/clients/princyRajat/23.jpeg",
          "/clients/princyRajat/24.jpeg",
          "/clients/princyRajat/25.jpeg",
        ],
      },
    ],
  },

  {
    slug: "ananya-vir",
    couple: "Ananya & Vir",
    location: "Goa, India",
    date: "November 2024",
    coverImage: "https://images.unsplash.com/photo-1507504031003-b417219a0fde",
    summary: "A seaside destination wedding where sunsets met sacred vows.",
    videoUrl: "https://vimeo.com/456123789",
    videoPreview: "/videos/ananya-vir-preview.mp4",
    filmCategory: "Documentary Film",
    duration: "6:10",
    events: [
      {
        id: "beach-party",
        title: "Beach Welcome Party",
        slug: "beach-party",
        description:
          "Friends and family gathered on the beach for music and cocktails.",
        featuredImage:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        gallery: [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
          "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
          "https://images.unsplash.com/photo-1473116763249-2faaef81ccda",
        ],
      },
      {
        id: "haldi-goa",
        title: "Haldi by the Sea",
        slug: "haldi",
        description: "Turmeric rituals under the open sky near the ocean.",
        featuredImage:
          "https://images.unsplash.com/photo-1519741497674-611481863552",
        gallery: [
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
          "https://images.unsplash.com/photo-1606800052052-a08af7148866",
          "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
        ],
      },
      {
        id: "goa-wedding",
        title: "Sunset Wedding",
        slug: "wedding",
        description: "A breathtaking ceremony at sunset by the sea.",
        featuredImage:
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
        gallery: [
          "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
          "https://images.unsplash.com/photo-1529636798458-92182e662485",
          "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57",
        ],
      },
    ],
  },

  {
    slug: "tara-ishaaan",
    couple: "Tara & Ishaan",
    location: "Delhi, India",
    date: "January 2025",
    coverImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    summary:
      "A modern luxury wedding combining tradition with contemporary style.",
    videoUrl: "https://vimeo.com/654987321",
    videoPreview: "/videos/tara-ishaan-preview.mp4",
    filmCategory: "Luxury Highlight Film",
    duration: "4:50",
    events: [
      {
        id: "cocktail-night",
        title: "Cocktail Night",
        slug: "cocktail",
        description: "An elegant evening of music, champagne, and dance.",
        featuredImage:
          "https://images.unsplash.com/photo-1530023367847-a683933f4172",
        gallery: [
          "https://images.unsplash.com/photo-1544078751-58fee2d8a03b",
          "https://images.unsplash.com/photo-1530023367847-a683933f4172",
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
        ],
      },
      {
        id: "mehendi-delhi",
        title: "Mehendi Ceremony",
        slug: "mehendi",
        description: "Colorful decor, laughter, and beautiful henna art.",
        featuredImage:
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff",
        gallery: [
          "https://images.unsplash.com/photo-1583391733956-6c78276477e3",
          "https://images.unsplash.com/photo-1519741347686-c1e331fcb6e6",
          "https://images.unsplash.com/photo-1606800052052-a08af7148866",
        ],
      },
      {
        id: "delhi-wedding",
        title: "Grand Wedding",
        slug: "wedding",
        description: "A luxurious ceremony in a grand Delhi venue.",
        featuredImage:
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
        gallery: [
          "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
          "https://images.unsplash.com/photo-1529636798458-92182e662485",
          "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57",
        ],
      },
    ],
  },
];
