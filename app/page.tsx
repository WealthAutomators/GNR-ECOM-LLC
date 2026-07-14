import { HeroBanner } from "@/components/homepage/hero-banner";
import { CategoryCarousel } from "@/components/homepage/category-carousel";
import { DealsOfTheDay } from "@/components/homepage/deals-of-the-day";
import { FeaturedCollection } from "@/components/homepage/featured-collection";
import { PromotionalBanner } from "@/components/homepage/promotional-banner";
import { BestSellers } from "@/components/homepage/best-sellers";
import { NewArrivals } from "@/components/homepage/new-arrivals";
import { CustomerReviews } from "@/components/homepage/customer-reviews";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategoryCarousel />
      <DealsOfTheDay />
      <FeaturedCollection />
      <PromotionalBanner />
      <BestSellers />
      <NewArrivals />
      <CustomerReviews />
      <Newsletter />
    </>
  );
}
