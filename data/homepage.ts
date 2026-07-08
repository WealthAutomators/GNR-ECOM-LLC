import {
  Feature,
  HeroSlide,
  PromoBanner,
} from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "Find More. Spend Less.",
    description:
      "Discover top-rated electronics, home essentials, beauty products, toys and more, all in one trusted marketplace.",
    ctaText: "Shop Now",
    ctaLink: "/shop",
    secondaryCtaText: "Browse Deals",
    secondaryCtaLink: "/shop?sale=true",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "star",
    title: "Premium Selection",
    description: "A broad mix of household favorites, electronics, fashion, and family essentials chosen for dependable quality.",
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
    description: "From everyday staples to last-minute gifts, your orders move quickly with reliable shipping updates along the way.",
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
  "wireless-earbuds",
  "electric-kettle",
  "air-fryer",
  "dog-bed",
  "sunglasses-classic",
  "rgb-gaming-keyboard",
] as const;

export const homepageTrendingSlugs = [
  "wireless-earbuds",
  "bluetooth-speaker",
  "air-fryer",
  "kids-learning-tablet",
  "yoga-mat",
  "gaming-headset",
  "vitamin-c-serum-set",
  "standing-desk-lamp",
] as const;

export const homepageBestsellerSlugs = [
  "wireless-earbuds",
  "bluetooth-speaker",
  "bath-towel-set",
  "yoga-mat",
  "kids-learning-tablet",
  "coffee-grinder",
  "dog-bed",
  "electric-kettle",
] as const;

export const homepageFeaturedSlugs = [
  "wireless-earbuds",
  "electric-kettle",
  "bath-towel-set",
  "kids-learning-tablet",
  "standing-desk-lamp",
  "air-fryer",
  "yoga-mat",
  "dog-bed",
  "coffee-grinder",
  "bluetooth-speaker",
] as const;

export const homepageNewArrivalSlugs = [
  "stem-robot-kit",
  "vitamin-c-serum-set",
  "baby-monitor",
  "foam-roller",
  "rgb-gaming-keyboard",
  "controller-charging-dock",
] as const;

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "Everything Your Family Needs",
  description:
    "Quality products from every category delivered with convenience and value.",
  buttonText: "Explore Collection",
  buttonLink: "/categories",
  image: "/banners/featured.jpg",
};

export const featuredCollection = {
  title: "Featured Products",
  description:
    "A curated mix of customer favorites across tech, home, wellness, family, and lifestyle essentials.",
  bannerImage: "/banners/featured.jpg",
  categorySlug: "electronics",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Electronics", slug: "electronics" },
  { label: "Home & Kitchen", slug: "home-kitchen" },
  { label: "Beauty", slug: "beauty" },
  { label: "Fashion", slug: "fashion-accessories" },
];

export const newsletter = {
  title: "Be First To Know About New Deals",
  description:
    "Join our mailing list and receive exclusive discounts, product launches and seasonal offers.",
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
  title: "Everyday Value. Premium Selection.",
  description:
    "MAA PARTNERS LLC brings together quality products across electronics, home, beauty, toys, wellness, and more so families can shop confidently from one trusted store. We focus on dependable selection, everyday value, and a warm, convenient experience from browse to checkout.",
  checklist: [
    "Wide marketplace selection across 13 departments",
    "Curated products for home, family, and lifestyle needs",
    "Dependable delivery and simple returns",
    "Friendly support focused on everyday shoppers",
  ],
  buttonText: "Learn More About Us",
  buttonLink: "/about",
  image: "/banners/about.jpg",
};
