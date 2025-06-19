import React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
          {
            "bg-rose-600 text-white hover:bg-rose-700": variant === "default",
            "border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-900": variant === "outline",
            "bg-transparent hover:bg-gray-100 text-gray-900": variant === "ghost",
            "bg-transparent underline-offset-4 hover:underline text-gray-900": variant === "link",
            "h-10 px-4 py-2": size === "default",
            "h-9 px-3 text-sm": size === "sm",
            "h-12 px-6 text-lg": size === "lg",
            "h-10 w-10 p-0": size === "icon",
          },
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"

export { Button }
