"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Phone, Mail, MapPin, Instagram, Facebook, Youtube, Plane, Heart } from "lucide-react";

const WHATSAPP_URL = `https://wa.me/918955751229?text=Hi%20Dhruv!%20I%27m%20interested%20in%20planning%20a%20trip.`;

export default function ContactFooter() {
  return (
    <>
      {/* Contact / CTA Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-sand-500 via-amber-500 to-orange-500 rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/10 rounded-full" />
              <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 rounded-full" />
              <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 400 400">
                <defs>
                  <pattern id="contact-dots" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#contact-dots)" />
              </svg>
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-white/20 text-white border-white/30 text-xs rounded-full px-3">
                  Let's Plan Together
                </Badge>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                  Ready for Your
                  <br />
                  Dream Trip?
                </h2>
                <p className="text-white/85 font-body text-lg leading-relaxed mb-8 max-w-md">
                  Drop Dhruv a WhatsApp message and get a personalized itinerary within 24 hours. No commitment, just possibilities.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button
                      className="gap-2 rounded-full bg-white text-sand-600 hover:bg-sand-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 font-semibold px-7 h-12 text-base"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                  <a href="tel:+918955751229">
                    <Button
                      variant="outline"
                      className="gap-2 rounded-full border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/70 h-12 text-base px-7 bg-transparent"
                    >
                      <Phone className="w-5 h-5" />
                      Call Dhruv
                    </Button>
                  </a>
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 space-y-5">
                <h3 className="font-display text-xl font-bold text-white">Get in Touch</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white/70 text-xs font-body mb-0.5">WhatsApp</div>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white font-semibold font-body hover:underline">
                        +91 89557 51229
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white/70 text-xs font-body mb-0.5">Phone</div>
                      <a href="tel:+918955751229" className="text-white font-semibold font-body hover:underline">
                        +91 89557 51229
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white/70 text-xs font-body mb-0.5">Address</div>
                     <div className="text-white font-semibold font-body">Subhashpura, Bikaner</div>
                    </div>
                  </div>

                </div>

                <div className="pt-2 border-t border-white/20">
                  <p className="text-white/70 text-xs font-body mb-1">Your Travel Expert</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center font-display font-bold text-white text-sm border-2 border-white/40">
                      DB
                    </div>
                    <div>
                      <div className="text-white font-semibold font-body">Dhruv Bhardwaj</div>
                      <div className="text-white/70 text-xs font-body">Travel Consultant & Planner</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sand-400 to-sand-600 flex items-center justify-center">
                  <Plane className="w-4 h-4 text-white rotate-45" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-white">Tripsathi Travels</div>
                  <div className="text-[10px] text-sand-400 tracking-widest uppercase leading-none font-body">by Dhruv Bhardwaj</div>
                </div>
              </div>
              <p className="text-stone-400 font-body text-sm leading-relaxed max-w-xs mb-5">
                Creating unforgettable travel memories across Asia and beyond. Every trip is a story — let's write yours together.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/_tripsathi.travels_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on Instagram"
                  className="group relative flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Instagram className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                  
                  <span className="text-sm text-white font-medium hidden sm:inline">
                    Connect on Instagram
                  </span>

                  {/* Tooltip */}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Instagram
                  </span>
                </a>
              </div>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="font-display text-white font-semibold mb-4 text-sm tracking-wide">Destinations</h4>
              <ul className="space-y-2">
                {["Goa", "Thailand", "Singapore", "Malaysia", "Ladakh", "Vietnam", "Bali", "Dubai"].map((d) => (
                  <li key={d}>
                    <a
                      href="#destinations"
                      onClick={(e) => { e.preventDefault(); document.querySelector("#destinations")?.scrollIntoView({ behavior: "smooth" }); }}
                      className="text-stone-400 hover:text-sand-400 font-body text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-stone-600 group-hover:bg-sand-400 transition-colors" />
                      {d}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-white font-semibold mb-4 text-sm tracking-wide">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: "Our Packages", href: "#packages" },
                  { label: "Why Choose Us", href: "#why-us" },
                  { label: "Testimonials", href: "#testimonials" },
                  { label: "Contact Us", href: "#contact" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={(e) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); }}
                      className="text-stone-400 hover:text-sand-400 font-body text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-stone-600 group-hover:bg-sand-400 transition-colors" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <h4 className="font-display text-white font-semibold mb-3 text-sm tracking-wide">Contact</h4>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-stone-400 hover:text-green-400 transition-colors font-body">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
                <a href="tel:+918955751229" className="flex items-center gap-2 text-sm text-stone-400 hover:text-sand-400 transition-colors font-body mt-1.5">
                  <Phone className="w-4 h-4" />
                  +91 89557 51229
                </a>
              </div>
            </div>
          </div>

          <Separator className="bg-stone-700 mb-6" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-body">
            <p>© {new Date().getFullYear()} Dhruv Travels by Dhruv Bhardwaj. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 fill-red-500 text-red-500" /> for wanderers everywhere
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
