export interface Poster {
  id: number;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export const posters: Poster[] = [
  {
    id: 1,
    title: "NEON DREAMS",
    category: "Abstract",
    price: 29.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&h=900&fit=crop",
    isBestseller: true,
  },
  {
    id: 2,
    title: "TOKYO NIGHTS",
    category: "Urban",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=900&fit=crop",
    isNew: true,
  },
  {
    id: 3,
    title: "COSMIC VOYAGE",
    category: "Space",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&h=900&fit=crop",
  },
  {
    id: 4,
    title: "RETRO WAVE",
    category: "Retro",
    price: 27.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&h=900&fit=crop",
  },
  {
    id: 5,
    title: "MINIMALIST BLOOM",
    category: "Minimal",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=600&h=900&fit=crop",
    isNew: true,
  },
  {
    id: 6,
    title: "CYBERPUNK CITY",
    category: "Urban",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=900&fit=crop",
    isBestseller: true,
  },
  {
    id: 7,
    title: "AURORA BOREALIS",
    category: "Nature",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=900&fit=crop",
  },
  {
    id: 8,
    title: "GEOMETRIC FUSION",
    category: "Abstract",
    price: 26.99,
    originalPrice: 34.99,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=900&fit=crop",
  },
  {
    id: 9,
    title: "VINTAGE CINEMA",
    category: "Retro",
    price: 31.99,
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=900&fit=crop",
    isNew: true,
  },
  {
    id: 10,
    title: "OCEAN DEPTHS",
    category: "Nature",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=900&fit=crop",
  },
  {
    id: 11,
    title: "PIXEL ART HERO",
    category: "Gaming",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=900&fit=crop",
    isBestseller: true,
  },
  {
    id: 12,
    title: "BOTANICAL STUDY",
    category: "Minimal",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=900&fit=crop",
  },
];

export const categories = [
  "All",
  "Abstract",
  "Urban",
  "Space",
  "Retro",
  "Minimal",
  "Nature",
  "Gaming",
];

export const heroPosters = [
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=600&fit=crop",
];
