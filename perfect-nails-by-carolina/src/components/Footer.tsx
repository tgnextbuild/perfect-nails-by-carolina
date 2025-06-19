"use client"

import {Sparkles, Heart, Clock, MapPin, Phone, Mail } from "lucide-react"
import { config } from "@/app/config/constants"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => {
                window.location.href = "/"
                window.scrollTo({ top: 0 })
              }}
            >
              <Sparkles className="h-8 w-8 text-rose-400" />
              <div>
                <h1 className="text-xl font-bold">Perfect Nails</h1>
                <p className="text-sm text-rose-400 -mt-1">By Carolina</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Professional nail care in a modern, cozy atmosphere. Your satisfaction is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => {
                  window.location.href = "/"
                  window.scrollTo({ top: 0 })
                }}
                className="block text-gray-400 hover:text-white transition-colors text-sm text-left"
              >
                Services
              </button>
              <button
                onClick={() => {
                  window.location.href = "/about"
                  window.scrollTo({ top: 0 })
                }}
                className="block text-gray-400 hover:text-white transition-colors text-sm text-left"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  window.location.href = "/gallery"
                  window.scrollTo({ top: 0 })
                }}
                className="block text-gray-400 hover:text-white transition-colors text-sm text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => {
                  window.location.href = "/contact"
                  window.scrollTo({ top: 0 })
                }}
                className="block text-gray-400 hover:text-white transition-colors text-sm text-left"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Contact Info */}
          {/* <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Phone: {config.COMPANY.PHONE}</p>
              <p>Email: {config.COMPANY.EMAIL}</p>
              <p>Address: {config.COMPANY.ADDRESS}</p>
            </div>
          </div> */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2 ">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <Link href='https://maps.apple.com/place?address=60+Connecticut+Ave%2C+Norwalk%2C+CT++06850%2C+United+States&coordinate=41.1075606%2C-73.4226649&name=60+Connecticut+Ave' target="_blank">
                  <span className="text-slate-300">{config.COMPANY.ADDRESS}</span>
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <Link href={`tel:${config.COMPANY.PHONE}`}>
                  <span className="text-slate-300">{config.COMPANY.PHONE}</span>
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {/* <Link href="/contact"> */}
                  <span className="text-slate-300">{config.COMPANY.EMAIL}</span>
                {/* </Link> */}
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-slate-300">{config.COMPANY.HOURS}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-gray-400 mt-4 md:mt-0">
            <span>Website built with</span>
            <Heart className="h-4 w-4 text-rose-400" />
            <span>by</span>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:text-rose-300 transition-colors font-medium"
            >
              TG NextBuild
            </a>
          </div>
          <p className="text-gray-400 text-sm"> © {new Date().getFullYear()} {config.COMPANY.NAME}. All rights
          reserved.</p>
        </div>
      </div>
    </footer>
  )
}
