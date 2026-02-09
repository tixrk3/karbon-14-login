import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 overflow-hidden group hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97] active:translate-y-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:shadow-xl hover:shadow-primary/25",
        destructive: "bg-destructive text-destructive-foreground hover:shadow-xl hover:shadow-destructive/25",
        outline: "border-2 border-border bg-background text-foreground hover:border-primary/50 hover:shadow-lg",
        secondary: "bg-secondary text-secondary-foreground hover:shadow-lg",
        ghost: "text-foreground hover:bg-muted",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-lg px-4",
        lg: "h-12 rounded-xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    if (asChild) {
      return <Slot className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>{children}</Slot>;
    }
    
    return (
      <button 
        className={cn(buttonVariants({ variant, size, className }))} 
        ref={ref} 
        {...props}
      >
        {/* Shine effect */}
        <span className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
        </span>
        
        {/* Glow effect for primary buttons */}
        {(variant === "default" || variant === undefined) && (
          <span 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 blur-xl bg-primary transition-opacity duration-300 pointer-events-none" 
            style={{ transform: "translateY(6px) scale(0.9)" }} 
          />
        )}
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
