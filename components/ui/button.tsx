import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        /* Primary: navy bg + white text → red bg + white text */
        default:
          "bg-primary text-white shadow-sm hover:bg-secondary hover:text-white focus-visible:text-white",
        /* Secondary: white bg + navy text → navy bg + white text */
        secondary:
          "border-2 border-primary bg-white text-primary shadow-sm hover:bg-primary hover:text-white focus-visible:text-white",
        /* Outline: transparent + navy → navy bg + white text */
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white focus-visible:text-white",
        ghost: "bg-transparent text-foreground hover:bg-muted hover:text-foreground",
        /* Sale / accent CTA: orange + dark text (never white-on-orange for AA) */
        emerald:
          "bg-accent text-foreground shadow-sm hover:bg-[#e08f4d] hover:text-foreground",
        accent:
          "bg-accent text-foreground hover:bg-[#e08f4d] hover:text-foreground",
        link: "h-auto bg-transparent p-0 text-primary underline-offset-4 hover:bg-transparent hover:text-secondary hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
