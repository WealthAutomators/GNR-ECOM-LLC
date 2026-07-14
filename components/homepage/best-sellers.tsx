"use client";

import { homepageBestsellerSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Carousel } from "@/components/ui/carousel";
import { ProductCard } from "@/components/product/product-card";

export function BestSellers() {
  const bestsellers = getProductsBySlugs(homepageBestsellerSlugs);

  return (
    <section className="bg-dark-section py-14 md:py-20">
      <Container>
        <SectionHeading
          title="Best Sellers"
          subtitle="Customer favorites with quick add and larger merchandising cards."
          viewMoreLink="/best-sellers"
          className="[&_h2]:!text-white [&_p]:!text-white/70 [&_a]:!text-accent hover:[&_a]:!text-white"
        />
        <Carousel slidesToShow={4} className="px-8">
          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="[&_.aspect-\[4\/5\]]:shadow-lg"
            />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
