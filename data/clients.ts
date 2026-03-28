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
    videoUrl: "https://www.youtube.com/watch?v=RTbOXV5enV4",
    videoPreview: "https://www.youtube.com/watch?v=RTbOXV5enV4",
    filmCategory: "Cinematic Teaser",
    duration: "3:45",
    events: [
      {
        id: "wedding-01",
        title: "The Wedding Ceremony",
        slug: "wedding",
        description: "Sacred vows exchanged beneath a floral mandap.",
        featuredImage:
          "https://images.unsplash.com/photo-1519741497674-611481863552",
        gallery: [
          "/clients/rajiniPriyansh/1.jpeg",
          "/clients/rajiniPriyansh/2.jpeg",
          "/clients/rajiniPriyansh/3.jpeg",
          "/clients/rajiniPriyansh/4.jpeg",
          "/clients/rajiniPriyansh/5.jpeg",
          "/clients/rajiniPriyansh/11.jpeg",

          "/clients/rajiniPriyansh/6.jpeg",
          "/clients/rajiniPriyansh/7.jpeg",
          "/clients/rajiniPriyansh/8.jpeg",
          "/clients/rajiniPriyansh/9.jpeg",
          "/clients/rajiniPriyansh/10.jpeg",
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
    videoUrl: "https://www.youtube.com/watch?v=raJnOuGlcd4",
    videoPreview: "https://www.youtube.com/watch?v=raJnOuGlcd4",
    filmCategory: "Feature Film",
    duration: "5:20",
    events: [
      {
        id: "Wedding-01",
        title: "Wedding",
        slug: "wedding",
        description: "A regal celebration of love amidst the opulence of Jaipur's palaces.",
        featuredImage:
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff",
        gallery: [
          
          "/clients/princyRajat/5.jpeg",
          "/clients/princyRajat/6.jpeg",
          "/clients/princyRajat/7.jpeg",
          
          "/clients/princyRajat/15.jpeg",
          "/clients/princyRajat/16.jpeg",
          "/clients/princyRajat/17.jpeg",
          "/clients/princyRajat/18.jpeg",
          "/clients/princyRajat/19.jpeg",
          "/clients/princyRajat/20.jpeg",
        ],
      },
      {
        id: "reception-02",
        title: "Reception",
        slug: "reception",
        description: "An elegant evening of celebration with music, dance, and heartfelt toasts.",
        featuredImage:
          "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
        gallery: [
          "/clients/princyRajat/4.jpeg",
          "/clients/princyRajat/8.jpeg",
           "/clients/princyRajat/9.jpeg",
          "/clients/princyRajat/10.jpeg",
          "/clients/princyRajat/11.jpeg",
          "/clients/princyRajat/12.jpeg",
          "/clients/princyRajat/13.jpeg",
          "/clients/princyRajat/14.jpeg",
        ],
      },
      ],
  },
];
