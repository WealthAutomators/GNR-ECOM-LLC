import Link from "next/link";
import Image from "next/image";
import { promotionalBanner } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="grid overflow-hidden rounded-[24px] border border-border bg-card shadow-md lg:grid-cols-2">
          <div className="relative min-h-[280px]">
            <Image
              src={promotionalBanner.image}
              alt={promotionalBanner.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-primary/10 to-transparent" />
          </div>
          <div className="relative flex flex-col items-start justify-center bg-primary p-8 md:p-12 lg:p-16">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-secondary/20 blur-2xl" />
            <div className="absolute -bottom-20 left-1/4 h-48 w-48 rounded-full bg-accent/15 blur-2xl" />
            <span className="relative mb-4 inline-block rounded-full bg-white/12 px-3 py-1 text-xs font-bold uppercase tracking-widest text-secondary">
              MAA PARTNERS LLC
            </span>
            <h2 className="relative max-w-2xl text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
              {promotionalBanner.title}
            </h2>
            <p className="relative mt-4 max-w-xl leading-relaxed text-white/80">{promotionalBanner.description}</p>
            <Button asChild size="lg" variant="emerald" className="relative mt-8">
              <Link href={promotionalBanner.buttonLink}>{promotionalBanner.buttonText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
