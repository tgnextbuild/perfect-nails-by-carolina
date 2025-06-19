"use client"

import { Sparkles, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const featuredServices = [
    { name: "Gel Color Set - Fill", description: "Refresh your existing gel manicure with new color" },
    { name: "Gel Color Set - Full", description: "Complete gel manicure with long-lasting color" },
    { name: "Express Manicure", description: "Quick and professional nail care for busy schedules" },
    { name: "Express Pedicure", description: "Fast, refreshing pedicure treatment" },
  ]

  const manicureServices = [
    { name: "Express Manicure", description: "Quick nail shaping, cuticle care, and polish" },
    { name: "Children Manicure", description: "Gentle nail care designed especially for kids" },
    { name: "Traditional", description: "Traditional nail polish" },
    { name: "Gel Color Set", description: "Complete or refresh gel manicure with long-lasting color" },
    { name: "Gel Polish", description: "Long-lasting gel topcoat for extended wear" },
    { name: "Gel Removal", description: "Safe and gentle removal of existing gel polish" },
  ]

  const pedicureServices = [
    { name: "Express Pedicure", description: "Quick foot care with nail shaping and polish" },
    // { name: "Callus Treatment", description: "Professional callus removal for smooth feet" },
    { name: "Traditional", description: "Traditional nail polish" },
    { name: "Gel Polish", description: "Durable gel polish for long-lasting pedicures" },
  ]


  const artificialNailCare = [
    { name: "Acrylic", description: "" },
    { name: "White Tip", description: "" },
    { name: "Pink & White", description: "" },
    { name: "Gel Color Set", description: "" },
    { name: "Dip Powder on nail", description: "" },
    { name: "Ombre", description: "" },
  ]

  const addOn = [
    { name: "Polish Change Hands", description: "" },
    { name: "Polish Change Feet", description: "" },
    { name: "Gel Color Change", description: "" },
    { name: "French", description: "" },
    { name: "Extra Long Nail", description: "" },
  ]


  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="leading-tight mb-6">
            <span className="font-great-vibes text-6xl md:text-8xl block mb-2 text-gray-900">Perfect Nails</span>
            <span className="font-playfair-display text-2xl md:text-3xl block text-rose-600 font-medium tracking-wide">
              By Carolina
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of professional nail care services, each designed to pamper and perfect your nails with
            attention to every detail.
          </p>
          <div className="w-24 h-1 bg-rose-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Featured Services */}
        <section className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
            <h2 className="text-3xl font-bold text-gray-900">Featured Services</h2>
            <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredServices.map((service, index) => (
              <Card key={index} className="border-2 border-rose-200 hover:border-rose-400 transition-colors shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-gray-900">{service.name}</CardTitle>
                    <Badge className="bg-rose-600 text-white">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Manicure Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Manicure Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manicureServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-rose-100">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-900">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pedicure Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Pedicure Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pedicureServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-rose-100">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-900">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Artificial Nail Care */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Artificial Nail Care</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artificialNailCare.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-rose-100">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-900">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Add on */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Add on</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOn.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-rose-100">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-900">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Book Your Service?</h3>
          <p className="text-gray-600 mb-6">
            Choose from our professional services and treat yourself to the perfect nail experience.
          </p>
          <button
            onClick={() => window.open("https://fresha.com", "_blank", "noopener,noreferrer")}
            className="inline-flex items-center px-8 py-4 bg-rose-600 text-white font-semibold rounded-lg hover:bg-rose-700 transition-colors"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}
