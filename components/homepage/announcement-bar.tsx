"use client";

import Link from "next/link";
import { announcementText } from "@/data/homepage";
import { Container } from "@/components/ui/container";

export function AnnouncementBar() {
  return (
    <div className="bg-secondary text-center text-xs font-semibold text-white sm:text-sm">
      <Container className="py-2.5">
        <p>
          {announcementText}{" "}
          <Link
            href="/shop?sale=true"
            className="ml-1 font-bold underline underline-offset-2 transition-colors hover:text-white/90"
          >
            Shop Now →
          </Link>
        </p>
      </Container>
    </div>
  );
}
