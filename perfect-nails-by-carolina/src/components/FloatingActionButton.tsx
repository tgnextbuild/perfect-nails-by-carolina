"use client"

import { useState, useRef, useEffect } from "react"
import { Phone, Calendar, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { config } from "@/app/config/constants"
import Link from "next/link"

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        buttonRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popup Menu */}
      {isOpen && (
        <Card
          ref={popupRef}
          className="absolute bottom-16 right-0 w-64 shadow-2xl border-2 border-rose-200 animate-in slide-in-from-bottom-2 duration-200"
        >
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-900">Get In Touch</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 p-0 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <Link
                href={`tel:${config.COMPANY.PHONE}`}
              className="w-full flex items-center justify-start gap-3 h-15 border border-rose-200 rounded-md hover:bg-rose-50 px-4"
            >
              <Phone className="h-5 w-5 text-rose-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Call Now</p>
                <p className="text-xs text-gray-500">Quick questions & booking</p>
              </div>
            </Link>

            <Link
            //   onClick={handleBookOnline}
            href="https://www.fresha.com"
            target="_blank"
              className="w-full flex items-center justify-start gap-3 h-15 bg-rose-600 hover:bg-rose-700 text-white rounded-md px-4"
            >
              <Calendar className="h-5 w-5" />
              <div className="text-left">
                <p className="font-medium">Book Online</p>
                <p className="text-xs opacity-90">Schedule your appointment</p>
              </div>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Floating Action Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`h-14 w-14 rounded-full shadow-2xl transition-all duration-200 flex items-center justify-center ${
          isOpen ? "bg-gray-600 hover:bg-gray-700 rotate-45" : "bg-rose-600 hover:bg-rose-700 hover:scale-110"
        }`}
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <Phone className="h-6 w-6 text-white" />}
      </button>
    </div>
  )
}
