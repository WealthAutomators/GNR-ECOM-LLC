"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

/** Trending masonry: Electronics, Home, Beauty, Kitchen, Gaming, Sports, Office, Fashion */
const trendingSlugs = [
  "electronics",
  "home",
  "beauty",
  "home-kitchen",
  "gaming",
  "sports-outdoors",
  "office-supplies",
  "fashion-accessories",
] as const;

/** Staggered masonry spans for visual energy */
const masonryClass = [
  "md:row-span-2 md:col-span-2", // large
  "md:row-span-1",
  "md:row-span-1",
  "md:row-span-2",
  "md:row-span-1 md:col-span-2",
  "md:row-span-1",
  "md:row-span-1",
  "md:row-span-1",
];

export function CategoryCarousel() {
  const trending = trendingSlugs
    .map((slug) => categories.find((c) => c.slug === slug))
    .filter((c): c is (typeof categories)[number] => Boolean(c));

  return (
    <section className="bg-background py-14 md:py-20">
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">Explore</p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Trending Categories
          </h2>
          <p className="mt-3 text-muted-foreground">
            Large photography, bold departments — find your next favorite aisle.
          </p>
        </div>

        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[180px] md:grid-cols-4 md:gap-4 lg:auto-rows-[200px]">
          {trending.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={cn(masonryClass[i])}
            >
              <Link
                href={`/categories/${category.slug}`}
                className="group relative block h-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-section/90 via-dark-section/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-4 md:p-5">
                  <span className="font-heading text-lg font-bold text-white md:text-xl">
                    {category.name}
                  </span>
                  <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Shop now <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
