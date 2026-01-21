import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#0039A6] text-white hover:bg-[#002d85] hover:shadow-lg active:scale-95 border border-[#0039A6]",
        destructive:
          "bg-[#DA020E] text-white hover:bg-[#b8010b] hover:shadow-lg active:scale-95 border border-[#DA020E]",
        outline:
          "border-2 border-[#0039A6] bg-transparent text-[#0039A6] hover:bg-[#0039A6]/10 hover:border-[#002d85] active:scale-95",
        secondary:
          "bg-white border-2 border-[#0039A6] text-[#0039A6] hover:bg-[#0039A6]/5 active:scale-95",
        ghost: "hover:bg-[#0039A6]/10 hover:text-[#0039A6] active:scale-95 text-foreground",
        link: "text-[#0039A6] underline-offset-4 hover:underline hover:text-[#002d85]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 py-3 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }