"use client"

import Image from "next/image"
import { Heart, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 to-pink-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="leading-tight">
                  <span className="font-great-vibes text-6xl md:text-8xl block mb-2 text-gray-900">Perfect Nails</span>
                  <span className="font-playfair-display text-2xl md:text-3xl block text-rose-600 font-medium tracking-wide">
                    By Carolina
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {`Experience the art of beautiful nails in a modern, cozy atmosphere. Professional nail care that makes
                  you feel pampered and confident.`}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 text-lg h-auto"
                  onClick={() => window.open("https://fresha.com", "_blank", "noopener,noreferrer")}
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Book Now
                </Button>
                <button
                  onClick={() => {
                    window.location.href = "/"
                    window.scrollTo({ top: 0 })
                  }}
                  className="border border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg rounded-md"
                >
                  View Services
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">Trusted by 100+ happy clients</p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/about_us_pedicure.jpg?height=600&width=500"
                  alt="Beautiful nail art showcase"
                  width={500}
                  height={600}
                  className="object-cover w-full h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-rose-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Premium Care</p>
                    <p className="text-sm text-gray-600">Every detail matters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Carolina</h2>
            <div className="w-24 h-1 bg-rose-600 mx-auto rounded-full" />
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {`Welcome to my nail sanctuary! I'm Carolina, and I've been passionate about nail art and care for
                    over 8 years. What started as a hobby quickly became my calling when I realized how much joy I could
                    bring to others through beautiful, healthy nails.`}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {`I believe that nail care is more than just beauty – it's about self-care, confidence, and taking a
                    moment to pamper yourself. Every client who sits in my chair receives personalized attention and
                    care, because you deserve nothing less than perfection.`}
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-rose-600">8+</p>
                      <p className="text-sm text-gray-600">Years Experience</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-rose-600">100+</p>
                      <p className="text-sm text-gray-600">Happy Clients</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-rose-600">100%</p>
                      <p className="text-sm text-gray-600">Satisfaction</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="img/placeholder.svg?height=400&width=400"
                    alt="Carolina - Professional Nail Technician"
                    width={400}
                    height={400}
                    className="rounded-2xl object-cover w-full h-[400px] shadow-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for Perfect Nails?</h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the difference that professional, personalized nail care can
            make.
          </p>
          <button
            onClick={() => window.open("https://fresha.com", "_blank", "noopener,noreferrer")}
            className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-md inline-flex items-center"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Book Your Appointment
          </button>
        </div>
      </section>
    </div>
  )
}
