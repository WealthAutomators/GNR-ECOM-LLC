"use client";

import { Zap } from "lucide-react";
import { dealsEndTime, homepageDealsSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { Carousel } from "@/components/ui/carousel";
import { ProductCard } from "@/components/product/product-card";

export function DealsOfTheDay() {
  const deals = getProductsBySlugs(homepageDealsSlugs);

  return (
    <section className="bg-dark-section py-14 md:py-20">
      <Container>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-2 inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
              <Zap className="h-3.5 w-3.5" /> Flash Sale
            </span>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Flash Deals
            </h2>
            <p className="mt-2 text-sm text-white/70">Limited-time savings across the catalog.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-white/60">Ends in:</span>
            <CountdownTimer endTime={dealsEndTime} light />
          </div>
        </div>
        <Carousel slidesToShow={4} className="px-8">
          {deals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
