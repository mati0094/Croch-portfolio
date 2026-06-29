import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-violet-600 to-emerald-500 text-white shadow-[0_0_40px_rgba(124,58,237,0.25)] hover:translate-y-[-2px] hover:shadow-[0_0_50px_rgba(124,58,237,0.3)]",
        secondary: "border border-white/10 bg-white/5 text-zinc-100 hover:border-violet-400/40 hover:bg-white/10",
        outline: "border border-violet-400/30 bg-transparent text-violet-200 hover:border-violet-400/60 hover:bg-violet-500/10",
        ghost: "bg-transparent text-zinc-200 hover:bg-white/10",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-full px-3",
        lg: "h-12 px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { 
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
