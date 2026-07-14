"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroSlides } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const slide = heroSlides[0];
  const [line1, line2] = slide.headline.split("\n");

  return (
    <section className="relative isolate min-h-[70vh] overflow-hidden bg-[#1D3557]">
      {/* Layered navy gradient + geometric shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2744] via-[#1D3557] to-[#2a4a6e]" />
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute right-10 top-24 h-40 w-40 rotate-12 border border-white/10" />
      <div className="absolute bottom-20 left-[40%] h-24 w-24 -rotate-6 border border-white/10" />

      <Container className="relative grid min-h-[70vh] items-center gap-10 py-14 lg:grid-cols-2 lg:gap-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          className="relative z-10 max-w-xl"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.28em] text-accent">
            Shop Better. Live Smarter.
          </span>
          <h1 className="mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {line1}
            {line2 && (
              <>
                <br />
                {line2}
              </>
            )}
          </h1>
          <p className="mt-5 max-w-md text-base text-white/85 sm:text-lg">{slide.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={slide.ctaLink}>{slide.ctaText}</Link>
            </Button>
            {slide.secondaryCtaText && slide.secondaryCtaLink && (
              <Button asChild size="lg" variant="secondary" className="border-white text-primary hover:border-primary">
                <Link href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 lg:aspect-[5/4]">
            <Image
              src={slide.image}
              alt="Lifestyle products across multiple categories"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D3557]/40 via-transparent to-transparent" />
          </div>

          {/* Floating promo badge — only one, as specified */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.4 }}
            className="absolute -bottom-4 left-4 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-foreground shadow-lg sm:left-6 sm:text-base"
          >
            Up to 50% Off This Week
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
