"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function GalleryPage() {
  // Placeholder images - you'll replace these with actual photos
  const galleryImages = [
    { id: 1, source: '/img/gallery/manicure1.jpg', alt: "Beautiful manicure with gold design" },
    { id: 2, source: '/img/gallery/manicure2.jpg', alt: "Beautiful manicure with floral design" },
    { id: 3, source: '/img/gallery/manicure3.jpg', alt: "Beautiful manicure with glitter and bowtie" },
    { id: 4, source: '/img/gallery/manicure4.jpg', alt: "Classic red manicure" },
    { id: 5, source: '/img/gallery/pedicure1.jpg', alt: "Beatiful pedicure with floral design" },
    { id: 6, source: '/img/gallery/pedicure2.jpg', alt: "Beatiful pedicure with floral design" },
    { id: 7, source: '/img/gallery/manicure5.jpg', alt: "Beatiful manicure with floral design" },
    { id: 8, source: '/img/gallery/manicure6.jpg', alt: "Beatiful manicure with floral design" },
    { id: 9, source: '/img/gallery/manicure7.jpg', alt: "Beatiful manicure with floral design" },
    { id: 10, source: '/img/gallery/manicure8.jpg', alt: "Beatiful manicure" },

    // { id: 7, alt: "Nude manicure with gold details" },
    // { id: 8, alt: "Seasonal nail art design" },
    // { id: 9, alt: "Professional pedicure result" },
    // { id: 10, alt: "Bridal nail design" },
    // { id: 11, alt: "Creative nail art showcase" },
    // { id: 12, alt: "Perfect cuticle care result" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Work Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of beautiful nail designs and professional results. Each creation is a testament to
            our commitment to excellence and artistry.
          </p>
          <div className="w-24 h-1 bg-rose-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <Card key={image.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative aspect-square">
                <Image
                  src={`${image.source}?height=400&width=400&text=Nail+Art+${image.id}`}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <p className="text-gray-900 font-medium text-sm text-center">{image.alt}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Love What You See?</h3>
          <p className="text-gray-600 mb-6">
            Book your appointment today and let us create something beautiful for you too!
          </p>
          <button
            onClick={() => window.open("https://fresha.com", "_blank", "noopener,noreferrer")}
            className="inline-flex items-center px-8 py-4 bg-rose-600 text-white font-semibold rounded-lg hover:bg-rose-700 transition-colors"
          >
            Book Your Appointment
          </button>
        </div>

        {/* Note for replacing images */}
        {/* <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-800 text-sm text-center">
            <strong>Note:</strong> These are placeholder images. Replace them with your actual nail art photos by
            updating the image sources in the code.
          </p>
        </div> */}
      </div>
    </div>
  )
}
