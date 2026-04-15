import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-sand-400 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-sand-500 text-white hover:bg-sand-600",
        secondary:
          "border-transparent bg-stone-100 text-stone-800 hover:bg-stone-200",
        ocean:
          "border-transparent bg-ocean-500 text-white hover:bg-ocean-600",
        outline: "border-stone-200 text-stone-700 bg-transparent",
        destructive:
          "border-transparent bg-red-600 text-white hover:bg-red-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
