import React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "secondary"
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ className, variant = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "bg-rose-600 text-white": variant === "default",
          "border border-rose-600 text-rose-600": variant === "outline",
          "bg-gray-100 text-gray-900": variant === "secondary",
        },
        className,
      )}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge }
