"use client"

import { Sparkles, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const featuredServices = [
    { name: "Acrylic Fullset", description: "Complete acrylic set" },
    { name: "Gel Color Set", description: "Complete gel manicure with long-lasting color" },
    { name: "Express Manicure", description: "Quick and professional nail care for busy schedules" },
    { name: "Express Pedicure", description: "Fast, refreshing pedicure treatment" },
  ]

  const manicureServices = [
    { name: "Regular Manicure", description: "A classic manicure with nail shaping, cuticle care, and polish application." },  
    { name: "Color Gel Manicure", description: "Long-lasting gel polish cured under UV light for a chip-resistant shine." },  
    { name: "Color Acrylic + Gel Polish", description: "Acrylic nails with a durable gel polish finish for extended wear." },  
    { name: "Color Acrylic", description: "Custom acrylic nails with your choice of color for strength and style." },  
    { name: "Apres Nail Ext.", description: "Apres nail extensions for a lightweight, natural-looking nail enhancement." },  
    { name: "UV Gel on Natural nail", description: "A gel overlay on natural nails for added strength and glossy shine." },  
    { name: "UV Gel Ext.", description: "Gel extensions for a durable, flexible, and natural-looking manicure." },  
    { name: "Sculpted Nails", description: "Handcrafted acrylic or gel nails shaped to your desired length and style." },  
  ]

  const pedicureServices = [
    { name: "Regular Pedicure", description: "A relaxing foot treatment with nail shaping, cuticle care, and polish." },  
    { name: "Color Gel", description: "Chip-resistant gel polish for long-lasting pedicure perfection." },  
    { name: "Acrylic Fullset Ext.", description: "Full acrylic nail extensions for added length and durability." },  
    { name: "Acrylic Fullset", description: "Custom acrylic nails applied for strength and a polished look." },  
    { name: "Acrylic Refill", description: "Maintenance service to refresh and extend your acrylic pedicure." },  
  ]

  const addOn = [
    { name: "Poly Gel Removal", description: "Safe and gentle removal of polygel extensions." },  
    { name: "French for acrylic/gel", description: "Elegant white-tip French design on acrylic or gel nails." },  
    { name: "Acrylic Removal", description: "Professional removal of acrylic nails without damage." },  
    { name: "UV Gel Removal", description: "Careful removal of UV gel polish or extensions." },  
    { name: "Apres Removal", description: "Gentle removal of Apres gel extensions." },  
    { name: "Color Gel Removal", description: "Safe removal of gel polish to prep for a new color." },  
    { name: "Length Change", description: "Adjusting nail length to your desired style." },  
    { name: "Shape Change", description: "Reshaping nails to square, round, almond, or stiletto." },  
    { name: "French", description: "Classic white-tip French manicure for a timeless look." },  
    { name: "Nail Repair", description: "Fixing broken or damaged nails for a flawless finish." },  
    { name: "Designs", description: "Custom nail art, glitter, or embellishments for a unique touch." },  
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
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-rose-100">
          <CardContent className="p-8">
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
          </CardContent>
          </Card>
        </section>

        {/* Manicure Services */}
        <section className="mb-16">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-rose-100">
          <CardContent className="p-8">
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
          </CardContent>
          </Card>
        </section>

        {/* Pedicure Services */}
        <section className="mb-16">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-rose-100">
          <CardContent className="p-8">
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
          </CardContent>
          </Card>
        </section>
        
        {/* Add on */}
        <section>
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-rose-100">
          <CardContent className="p-8">
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
          </CardContent>
          </Card>
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
