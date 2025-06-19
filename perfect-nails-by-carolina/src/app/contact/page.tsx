"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail} from "lucide-react"
import Link from "next/link"
import { config } from "../config/constants"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {`Ready to book your appointment or have questions? We'd love to hear from you! Get in touch and let us help
            you achieve perfect nails.`}
          </p>
          <div className="w-24 h-1 bg-rose-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <Phone className="h-6 w-6 text-rose-600" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">Call us to book your appointment</p>
                    {/* <p className="text-rose-600 font-medium">(Your phone number here)</p> */}
                    <Link href={`tel:${config.COMPANY.PHONE}`}>
                  <span className="text-rose-600 font-medium">{config.COMPANY.PHONE}</span>
                </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">Send us your questions</p>
                    <p className="text-rose-600 font-medium">{config.COMPANY.EMAIL}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Visit our cozy salon</p>
                    {/* <p className="text-rose-600 font-medium">Address to be provided</p> */}
                    <Link href='https://maps.apple.com/place?address=60+Connecticut+Ave%2C+Norwalk%2C+CT++06850%2C+United+States&coordinate=41.1075606%2C-73.4226649&name=60+Connecticut+Ave' target="_blank">
                    <span className="text-rose-600 font-medium">{config.COMPANY.ADDRESS}</span>
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Hours</h3>
                    <p className="text-gray-600">{`We're here when you need us`}</p>
                    <div className="text-rose-600 font-medium space-y-1">
                      <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">Stay connected and see our latest work on social media!</p>
                <div className="flex gap-4">
                  {/* <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 dark:text-black rounded-md py-3 px-4 hover:bg-gray-100 transition-colors">
                    <Instagram className="h-5 w-5" />
                    Instagram
                  </button> */}
                  {/* <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 dark:text-black rounded-md py-3 px-4 hover:bg-gray-100 transition-colors">
                    <Facebook className="h-5 w-5" />
                    Facebook
                  </button> */}
                  <Link
                        href="https://www.instagram.com"
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-2 border border-gray-300 dark:text-black rounded-md py-3 px-4 hover:bg-gray-100 transition-colors"
                        aria-label="Instagram"
                    > 
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                    >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    Instagram
                    </Link>
                    <Link
                        href= "https://www.facebook.com"
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-2 border border-gray-300 dark:text-black rounded-md py-3 px-4 hover:bg-gray-100 transition-colors"
                        aria-label="Facebook"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                        Facebook
                    </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Section */}
          <div className="space-y-8">
            <Card className="shadow-lg border-2 border-rose-200">
              <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-t-lg p-6">
                <h2 className="text-2xl font-bold">Book Your Appointment</h2>
              </div>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-gray-600 text-lg">
                    Ready to treat yourself to beautiful nails? Book your appointment online through our convenient
                    booking system.
                  </p>

                  <div className="bg-rose-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Why Book Online?</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-rose-600 rounded-full" />
                        Choose your preferred time slot
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-rose-600 rounded-full" />
                        Select your desired services
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-rose-600 rounded-full" />
                        Instant confirmation
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-rose-600 rounded-full" />
                        Easy rescheduling if needed
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => window.open("https://fresha.com", "_blank", "noopener,noreferrer")}
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white py-6 text-lg rounded-md"
                  >
                    Book Online Now
                  </button>

                  <p className="text-center text-gray-500 text-sm">Powered by Fresha - Secure & Easy Booking</p>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Quick Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">How far in advance should I book?</h4>
                  <p className="text-gray-600 text-sm">
                    We recommend booking 1-2 weeks in advance, especially for weekend appointments.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">What should I bring to my appointment?</h4>
                  <p className="text-gray-600 text-sm">
                    Just bring yourself! We provide all the tools and products needed for your service.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Do you accept walk-ins?</h4>
                  <p className="text-gray-600 text-sm">
                    {`While we prefer appointments, we'll do our best to accommodate walk-ins based on availability.`}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
