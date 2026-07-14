import Link from "next/link";
import Image from "next/image";
import { promotionalBanner } from "@/data/homepage";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
  return (
    <section className="relative isolate min-h-[420px] overflow-hidden md:min-h-[480px]">
      <Image
        src={promotionalBanner.image}
        alt={promotionalBanner.title}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-dark-section/70" />
      <div className="relative z-10 flex min-h-[420px] flex-col items-center justify-center px-6 py-16 text-center md:min-h-[480px]">
        <h2 className="max-w-3xl font-heading text-3xl font-extrabold tracking-tight text-white md:text-5xl">
          {promotionalBanner.title}
        </h2>
        <p className="mt-4 max-w-xl text-base text-white/85 md:text-lg">
          {promotionalBanner.description}
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href={promotionalBanner.buttonLink}>{promotionalBanner.buttonText}</Link>
        </Button>
      </div>
    </section>
  );
}
