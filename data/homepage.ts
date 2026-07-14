import {
  Feature,
  HeroSlide,
  PromoBanner,
} from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "Everything You Need.\nOne Modern Marketplace.",
    description:
      "Shop electronics, home, beauty, gaming, fashion and more — bold finds curated for everyday success.",
    ctaText: "Shop Now",
    ctaLink: "/shop",
    secondaryCtaText: "Today's Deals",
    secondaryCtaLink: "/shop?sale=true",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "star",
    title: "Premium Selection",
    description: "A bold mix of tech, home, fashion, and lifestyle essentials chosen for dependable quality.",
  },
  {
    id: "2",
    icon: "shield",
    title: "Secure Payments",
    description: "Shop with confidence using a polished, encrypted checkout experience designed to keep every order secure.",
  },
  {
    id: "3",
    icon: "truck",
    title: "Fast Delivery",
    description: "From everyday staples to last-minute upgrades, your orders move quickly with reliable shipping updates.",
  },
  {
    id: "4",
    icon: "rotate",
    title: "Easy Returns",
    description: "Need to send something back? Our return process is simple, straightforward, and built around customer convenience.",
  },
];

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageDealsSlugs = [
  "noise-cancelling-headphones",
  "ceramic-cookware-set",
  "robot-vacuum",
  "smartwatch-fitness",
  "adjustable-dumbbells",
  "crossbody-sling-bag",
] as const;

export const homepageTrendingSlugs = [
  "noise-cancelling-headphones",
  "bluetooth-speaker",
  "ceramic-cookware-set",
  "robot-vacuum",
  "yoga-mat",
  "gaming-headset",
  "vitamin-c-serum-set",
  "aluminum-laptop-stand",
] as const;

export const homepageBestsellerSlugs = [
  "noise-cancelling-headphones",
  "bluetooth-speaker",
  "bath-towel-set",
  "yoga-mat",
  "robot-vacuum",
  "coffee-grinder",
  "dog-bed",
  "electric-kettle",
] as const;

export const homepageFeaturedSlugs = [
  "noise-cancelling-headphones",
  "smartwatch-fitness",
  "ceramic-cookware-set",
  "robot-vacuum",
  "weighted-throw-blanket",
  "matte-lipstick-set",
  "adjustable-dumbbells",
  "aluminum-laptop-stand",
  "crossbody-sling-bag",
  "smart-body-scale",
] as const;

export const homepageNewArrivalSlugs = [
  "portable-mini-projector",
  "matte-lipstick-set",
  "bamboo-bath-organizer",
  "aluminum-laptop-stand",
  "smart-body-scale",
  "crossbody-sling-bag",
] as const;

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "Designed For Everyday Success.",
  description:
    "Premium products selected to improve work, home and lifestyle.",
  buttonText: "Explore Collection",
  buttonLink: "/categories",
  image: "/banners/featured.jpg",
};

export const featuredCollection = {
  title: "Featured Products",
  description:
    "Fresh picks across tech, home, wellness, and lifestyle — rotated for the season.",
  bannerImage: "/banners/featured.jpg",
  categorySlug: "electronics",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Electronics", slug: "electronics" },
  { label: "Kitchen", slug: "home-kitchen" },
  { label: "Beauty", slug: "beauty" },
  { label: "Fashion", slug: "fashion-accessories" },
];

export const newsletter = {
  title: "Never Miss A Deal.",
  description:
    "Subscribe for exclusive offers, seasonal promotions and new product launches.",
  placeholder: "Enter your email address",
  buttonText: "Subscribe",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export const aboutSection = {
  title: "Shop Better. Live Smarter.",
  description:
    "GNR ECOM LLC brings together quality products across electronics, home, beauty, gaming, wellness, and more so you can shop confidently from one modern marketplace. We focus on bold selection, everyday value, and a dynamic retail experience from browse to checkout.",
  checklist: [
    "Wide marketplace selection across 12 departments",
    "Curated products for work, home, and lifestyle",
    "Dependable delivery and simple returns",
    "Support built for modern shoppers",
  ],
  buttonText: "Learn More About Us",
  buttonLink: "/about",
  image: "/banners/about.jpg",
};

export const announcementText = "Summer Savings • Free Shipping Over $75";
