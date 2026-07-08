"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroSlides } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const slide = heroSlides[0];

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.headline}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/45" />
      </div>

      <Container className="relative flex min-h-[460px] flex-col items-center justify-center py-20 text-center md:min-h-[560px] md:py-28">
        <div className="absolute right-6 top-10 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-foreground shadow-lg sm:right-10 sm:top-12">
          Up to 50% OFF
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block rounded-full bg-white/12 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-white shadow-sm backdrop-blur-sm">
            Everyday Value. Premium Selection.
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {slide.headline}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            {slide.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" variant="emerald">
              <Link href={slide.ctaLink}>{slide.ctaText}</Link>
            </Button>
            {slide.secondaryCtaText && slide.secondaryCtaLink && (
              <Button
                asChild
                size="lg"
                className="border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary"
              >
                <Link href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
