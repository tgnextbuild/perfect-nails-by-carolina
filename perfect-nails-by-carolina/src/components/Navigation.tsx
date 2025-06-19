"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
//   const router = useRouter()

  const navItems = [
    { href: "/", label: "Services" }, // Services is now the home page
    { href: "/about", label: "About Us" }, // Previous home page is now About Us
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ]

  // Function to handle navigation and scroll to top
//   const handleNavigation = (href: string) => {
//     // Close mobile menu if open
//     setIsOpen(false)

//     // Small delay to allow menu to close
//     setTimeout(() => {
//       // If we're already on the page, just scroll to top
//       if (pathname === href) {
//         window.scrollTo({ top: 0, behavior: "smooth" })
//       } else {
//         // Otherwise navigate to the new page
//         router.push(href)
//         // Scroll to top after navigation
//         window.scrollTo({ top: 0 })
//       }
//     }, 100)
//   }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-white backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href='/'>
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="flex items-center gap-2">
                <Sparkles className="h-8 w-8 text-rose-600" />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Perfect Nails</h1>
                  <p className="text-xs text-rose-600 -mt-1">By Carolina</p>
                </div>
              </div>
            </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                // <button
                //   key={item.href}
                //   onClick={() => handleNavigation(item.href)}
                //   className={cn(
                //     "text-sm font-medium transition-colors hover:text-rose-600",
                //     pathname === item.href ? "text-rose-600" : "text-gray-700",
                //   )}
                // >
                //   {item.label}
                // </button>
                <Link 
                    key={item.href}
                    href={item.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-rose-600",
                        pathname === item.href ? "text-rose-600" : "text-gray-700",
                    )}
                >
                {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Book Now Button */}
            <Button
              className="hidden md:flex"
              onClick={() => window.open("https://fresha.com", "_blank", "noopener,noreferrer")}
            >
              Book Now
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-rose-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />

          {/* Menu Panel */}
          <div className="fixed top-16 right-0 bottom-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="p-6 border-b">
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-6 w-6 text-rose-600" />
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Perfect Nails</h2>
                    <p className="text-xs text-rose-600">By Carolina</p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 px-6 py-6 space-y-4">
                {navItems.map((item) => (
                //   <button
                //     key={item.href}
                //     onClick={() => handleNavigation(item.href)}
                //     className={cn(
                //       "block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors",
                //       pathname === item.href
                //         ? "text-rose-600 bg-rose-50"
                //         : "text-gray-700 hover:text-rose-600 hover:bg-gray-50",
                //     )}
                //   >
                //     {item.label}
                //   </button>
                <Link 
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors",
                      pathname === item.href
                        ? "text-rose-600 bg-rose-50"
                        : "text-gray-700 hover:text-rose-600 hover:bg-gray-50",
                    )}
                >
                {item.label}
                </Link>
                ))}
              </nav>

              {/* Book Now Button */}
              {/* <div className="p-6 border-t">
                <button
                  onClick={() => {
                    setIsOpen(false)
                    window.open("https://fresha.com", "_blank", "noopener,noreferrer")
                  }}
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  Book Now
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
