import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";

export function CustomerReviews() {
  return (
    <section className="bg-muted/60 py-14 md:py-20">
      <Container>
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">Reviews</p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight md:text-4xl">
            Customer Reviews
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Verified shoppers across electronics, home, beauty, and more.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full bg-primary/10">
                  {t.avatar ? (
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="44px" />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-sm font-bold text-primary">
                      {t.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <StarRating rating={t.rating} showCount={false} size="sm" />
                <span className="inline-flex items-center gap-1 rounded-md bg-primary/8 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                  <BadgeCheck className="h-3 w-3" /> Verified Purchase
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
              {t.category && (
                <p className="mt-3 text-xs font-medium text-secondary">{t.category}</p>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
