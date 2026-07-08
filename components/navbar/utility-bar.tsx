"use client";

import Link from "next/link";
import { utilityBarLinks } from "@/data/navigation";
import { Container } from "@/components/ui/container";

export function UtilityBar() {
  return (
    <div className="border-b border-border/70 bg-muted/70">
      <Container>
        <div className="flex min-h-9 items-center justify-center py-1 text-[11px] text-muted-foreground sm:text-xs">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-x-4">
            {utilityBarLinks.map((link, i) => (
              <span key={link.label} className="flex items-center gap-3 sm:gap-4">
                {i > 0 && <span className="hidden text-border sm:inline">|</span>}
                <Link
                  href={link.href}
                  className="whitespace-nowrap transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
