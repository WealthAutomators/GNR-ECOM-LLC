import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    slug: "electronics",
    name: "Electronics",
    image: "/categories/electronics.jpg",
    description: "Smart gadgets, audio gear, and everyday tech essentials.",
    productCount: 5,
  },
  {
    id: "2",
    slug: "home-kitchen",
    name: "Kitchen",
    image: "/categories/home-kitchen.jpg",
    description: "Appliances and tools to make cooking easier.",
    productCount: 4,
  },
  {
    id: "3",
    slug: "home",
    name: "Home",
    image: "/categories/home.jpg",
    description: "Comfort-forward finds for every room.",
    productCount: 2,
  },
  {
    id: "4",
    slug: "bathroom",
    name: "Bathroom",
    image: "/categories/bathroom.jpg",
    description: "Towels, organizers, and bathroom essentials.",
    productCount: 2,
  },
  {
    id: "5",
    slug: "beauty",
    name: "Beauty",
    image: "/categories/beauty.jpg",
    description: "Skincare, color, and personal care favorites.",
    productCount: 2,
  },
  {
    id: "6",
    slug: "gaming",
    name: "Gaming",
    image: "/categories/gaming.jpg",
    description: "Headsets, peripherals, and accessories for every gamer.",
    productCount: 4,
  },
  {
    id: "7",
    slug: "sports-outdoors",
    name: "Sports",
    image: "/categories/sports-outdoors.jpg",
    description: "Gear for fitness, yoga, and active living.",
    productCount: 2,
  },
  {
    id: "8",
    slug: "office-supplies",
    name: "Office",
    image: "/categories/office-supplies.jpg",
    description: "Desk accessories and workspace upgrades.",
    productCount: 2,
  },
  {
    id: "9",
    slug: "fashion-accessories",
    name: "Fashion",
    image: "/categories/fashion-accessories.jpg",
    description: "Accessories to complete your everyday look.",
    productCount: 2,
  },
  {
    id: "10",
    slug: "baby-products",
    name: "Baby",
    image: "/categories/baby-products.jpg",
    description: "Safe, thoughtful products for little ones.",
    productCount: 1,
  },
  {
    id: "11",
    slug: "pet-supplies",
    name: "Pet",
    image: "/categories/pet-supplies.jpg",
    description: "Comfort and care products for your pets.",
    productCount: 2,
  },
  {
    id: "12",
    slug: "health-wellness",
    name: "Health",
    image: "/categories/health-wellness.jpg",
    description: "Products to support your wellness routine.",
    productCount: 2,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
