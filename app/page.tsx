import { HeroBanner } from "@/components/homepage/hero-banner";
import { FeaturedCollection } from "@/components/homepage/featured-collection";
import { CategoryCarousel } from "@/components/homepage/category-carousel";
import { BestSellers } from "@/components/homepage/best-sellers";
import { FeaturesRow } from "@/components/homepage/features-row";
import { PromotionalBanner } from "@/components/homepage/promotional-banner";
import { DealsOfTheDay } from "@/components/homepage/deals-of-the-day";
import { CustomerReviews } from "@/components/homepage/customer-reviews";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturedCollection />
      <CategoryCarousel />
      <FeaturesRow />
      <DealsOfTheDay />
      <PromotionalBanner />
      <BestSellers />
      <CustomerReviews />
      <Newsletter />
    </>
  );
}
