"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Plane, Bed, Utensils, Camera, Shield } from "lucide-react";

const WHATSAPP_URL = (pkg: string) =>
  `https://wa.me/918955751229?text=Hi%20Dhruv!%20I%27m%20interested%20in%20the%20${encodeURIComponent(pkg)}%20package.`;

const packages = [
  {
    name: "Explorer",
    tagline: "Perfect for First-Timers",
    price: "₹15,999",
    duration: "3 nights / 4 days",
    color: "from-blue-50 to-sky-50",
    borderColor: "border-blue-200",
    badgeColor: "bg-blue-100 text-blue-700",
    includes: [
      "Return Airfare",
      "3-Star Hotel Stay",
      "Daily Breakfast",
      "Airport Transfers",
      "Basic Sightseeing",
    ],
    icon: Plane,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    popular: false,
  },
  {
    name: "Voyager",
    tagline: "Our Most Popular Pick",
    price: "₹28,999",
    duration: "5 nights / 6 days",
    color: "from-amber-50 to-orange-50",
    borderColor: "border-sand-400",
    badgeColor: "bg-sand-100 text-sand-700",
    includes: [
      "Return Airfare",
      "4-Star Hotel Stay",
      "Breakfast + 2 Dinners",
      "Airport Transfers",
      "Guided City Tour",
      "Day Excursion Included",
      "Travel Insurance",
    ],
    icon: Camera,
    iconBg: "bg-sand-100",
    iconColor: "text-sand-600",
    popular: true,
  },
  {
    name: "Luxe",
    tagline: "Travel in Style",
    price: "₹54,999",
    duration: "7 nights / 8 days",
    color: "from-purple-50 to-violet-50",
    borderColor: "border-purple-200",
    badgeColor: "bg-purple-100 text-purple-700",
    includes: [
      "Business Class Flights",
      "5-Star Hotel / Resort",
      "All Meals Included",
      "Private Transfers",
      "Private Guide",
      "Spa & Wellness",
      "Premium Travel Insurance",
      "Personalized Concierge",
    ],
    icon: Shield,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    popular: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-stone-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-3 py-1 rounded-full text-xs gap-1.5">
            <Bed className="w-3 h-3" />
            Travel Packages
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-800 mb-4">
            Pick Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand-500 to-amber-600">
              Perfect Plan
            </span>
          </h2>
          <p className="text-lg text-stone-500 font-body max-w-xl mx-auto">
            Every package can be customized to your destination and preferences. These are just starting points — the world is your canvas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-gradient-to-br ${pkg.color} rounded-3xl border-2 ${pkg.borderColor} p-7 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${pkg.popular ? "shadow-xl" : "shadow-sm"}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-sand-500 text-white text-xs px-4 py-1 rounded-full shadow-md">
                    ⭐ Most Popular
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <div className={`w-12 h-12 ${pkg.iconBg} rounded-2xl flex items-center justify-center mb-4`}>
                  <pkg.icon className={`w-6 h-6 ${pkg.iconColor}`} />
                </div>
                <Badge className={`${pkg.badgeColor} border-0 text-xs rounded-full px-3 mb-3`}>{pkg.tagline}</Badge>
                <h3 className="font-display text-2xl font-bold text-stone-800">{pkg.name}</h3>
                <p className="text-stone-500 font-body text-sm mt-1">{pkg.duration}</p>
              </div>

              <div className="space-y-2.5 mb-8 flex-1">
                {pkg.includes.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-sm text-stone-600 font-body">{item}</span>
                  </div>
                ))}
              </div>

              <a href={WHATSAPP_URL(pkg.name)} target="_blank" rel="noopener noreferrer">
                <Button
                  className={`w-full gap-2 rounded-xl h-11 transition-all duration-300 ${pkg.popular ? "bg-sand-500 hover:bg-sand-600 text-white shadow-md hover:shadow-lg" : "bg-white hover:bg-stone-50 text-stone-800 border border-stone-200"}`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Get {pkg.name} Package
                </Button>
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-stone-400 font-body text-sm mt-8">
          All prices are indicative and vary by destination, season & group size. Contact Dhruv for exact quotes.
        </p>
      </div>
    </section>
  );
}
