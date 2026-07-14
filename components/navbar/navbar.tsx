"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Menu, ShoppingBag, User, X } from "lucide-react";
import { company } from "@/data/company";
import { navigationLinks } from "@/data/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HeaderSearchBar } from "@/components/navbar/header-search-bar";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("?")[0]);

  return (
    <header className="bg-white">
      {/* Main header: Logo | Search | Wishlist Account Cart */}
      <Container>
        <div className="flex h-16 items-center gap-3 lg:h-[76px] lg:gap-6">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/logo/logo.svg"
              alt={company.name}
              width={248}
              height={44}
              priority
              className="h-9 w-auto sm:h-10 lg:h-11"
            />
          </Link>

          <div className="hidden min-w-0 flex-1 md:block">
            <HeaderSearchBar />
          </div>

          <div className="ml-auto flex items-center gap-0.5 sm:gap-1">
            <Button variant="ghost" size="icon" asChild className="relative h-10 w-10">
              <Link href="/wishlist" aria-label="Wishlist">
                <Heart className="h-[18px] w-[18px]" />
                {wishlist.length > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="h-10 w-10">
              <Link href="/profile" aria-label="Account">
                <User className="h-[18px] w-[18px]" />
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="relative h-10 w-10">
              <Link href="/cart" aria-label="Cart">
                <ShoppingBag className="h-[18px] w-[18px]" />
                {itemCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-foreground">
                    {itemCount}
                  </span>
                )}
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="pb-3 md:hidden">
          <HeaderSearchBar />
        </div>
      </Container>

      {/* Navigation row below */}
      <div className="hidden border-t border-border/80 bg-white lg:block">
        <Container>
          <nav aria-label="Primary">
            <ul className="flex items-center justify-center gap-1 py-2.5">
              {navigationLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors",
                      isActive(link.href)
                        ? "bg-primary text-white"
                        : "text-foreground/80 hover:bg-muted hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-white lg:hidden"
          >
            <Container className="py-3">
              <ul className="space-y-0.5">
                {navigationLinks.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="block rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-muted"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
