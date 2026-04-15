"use client";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, MessageCircle, Upload, ChevronRight } from "lucide-react";

const WHATSAPP_URL = (dest: string) =>
  `https://wa.me/918955751229?text=Hi%20Dhruv!%20I%27m%20interested%20in%20a%20${encodeURIComponent(dest)}%20travel%20package.`;

interface Destination {
  id: string;
  name: string;
  country: string;
  tagline: string;
  duration: string;
  rating: number;
  reviews: number;
  priceFrom: string;
  tags: string[];
  color: string;
  accent: string;
  emoji: string;
  featured?: boolean;
}

const destinations: Destination[] = [
  {
    id: "goa",
    name: "Goa",
    country: "India",
    tagline: "Sun, Sand & Serenity",
    duration: "3–7 nights",
    rating: 4.8,
    reviews: 312,
    priceFrom: "₹12,999",
    tags: ["Beach", "Nightlife", "Heritage"],
    color: "from-amber-100 to-orange-100",
    accent: "border-amber-300",
    emoji: "🏖️",
    featured: true,
  },
  {
    id: "thailand",
    name: "Thailand",
    country: "Southeast Asia",
    tagline: "Land of Smiles",
    duration: "5–10 nights",
    rating: 4.9,
    reviews: 428,
    priceFrom: "₹34,999",
    tags: ["Culture", "Temples", "Islands"],
    color: "from-yellow-50 to-amber-100",
    accent: "border-yellow-300",
    emoji: "🛕",
    featured: true,
  },
  {
    id: "singapore",
    name: "Singapore",
    country: "Southeast Asia",
    tagline: "The Lion City",
    duration: "4–6 nights",
    rating: 4.7,
    reviews: 189,
    priceFrom: "₹42,999",
    tags: ["City", "Shopping", "Food"],
    color: "from-red-50 to-rose-100",
    accent: "border-red-200",
    emoji: "🦁",
  },
  {
    id: "malaysia",
    name: "Malaysia",
    country: "Southeast Asia",
    tagline: "Truly Asia",
    duration: "5–8 nights",
    rating: 4.7,
    reviews: 156,
    priceFrom: "₹38,999",
    tags: ["Nature", "Culture", "Islands"],
    color: "from-blue-50 to-indigo-100",
    accent: "border-blue-200",
    emoji: "🌴",
  },
  {
    id: "ladakh",
    name: "Ladakh",
    country: "India",
    tagline: "Land of High Passes",
    duration: "7–12 nights",
    rating: 5.0,
    reviews: 267,
    priceFrom: "₹22,999",
    tags: ["Adventure", "Mountains", "Monasteries"],
    color: "from-stone-100 to-slate-100",
    accent: "border-stone-300",
    emoji: "⛰️",
    featured: true,
  },
  {
    id: "vietnam",
    name: "Vietnam",
    country: "Southeast Asia",
    tagline: "Timeless Beauty",
    duration: "6–10 nights",
    rating: 4.8,
    reviews: 203,
    priceFrom: "₹36,999",
    tags: ["History", "Food", "Cruises"],
    color: "from-green-50 to-emerald-100",
    accent: "border-green-200",
    emoji: "🌾",
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    tagline: "Island of the Gods",
    duration: "5–9 nights",
    rating: 4.9,
    reviews: 389,
    priceFrom: "₹39,999",
    tags: ["Spiritual", "Beaches", "Wellness"],
    color: "from-teal-50 to-cyan-100",
    accent: "border-teal-200",
    emoji: "🌺",
    featured: true,
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    tagline: "City of Gold",
    duration: "4–7 nights",
    rating: 4.8,
    reviews: 341,
    priceFrom: "₹49,999",
    tags: ["Luxury", "Desert", "Shopping"],
    color: "from-yellow-50 to-sand-100",
    accent: "border-yellow-200",
    emoji: "🏙️",
  },
];

function DestinationCard({ dest }: { dest: Destination }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-stone-100 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Poster Placeholder Area */}
      <div className={`relative h-52 bg-gradient-to-br ${dest.color} border-b-2 border-dashed ${dest.accent} flex flex-col items-center justify-center gap-3 overflow-hidden`}>

        <img src={`/posters/${dest.id}.png`} alt={`${dest.name} Poster`} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300" />

        {/* Featured badge */}
        {dest.featured && (
          <div className="absolute top-3 left-3">
            <Badge variant="default" className="text-[10px] px-2 py-0.5 rounded-full bg-sand-500">
              ⭐ Popular
            </Badge>
          </div>
        )}

        {/* Hover CTA overlay */}
        <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
          <a
            href={WHATSAPP_URL(dest.name)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Button variant="whatsapp" size="sm" className="gap-1.5 rounded-full shadow-lg">
              <MessageCircle className="w-3.5 h-3.5" />
              Book {dest.name}
            </Button>
          </a>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-display text-xl font-bold text-stone-800 group-hover:text-sand-600 transition-colors">
              {dest.name}
            </h3>
            <div className="flex items-center gap-1 text-stone-400">
              <MapPin className="w-3 h-3" />
              <span className="text-xs font-body">{dest.country}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-stone-500 font-body italic mb-3">{dest.tagline}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {dest.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-[10px] px-2 py-0.5 rounded-full">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-stone-500 font-body">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{dest.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-stone-700">{dest.rating}</span>
            <span className="text-stone-400">({dest.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="ocean" className="mb-4 px-3 py-1 rounded-full text-xs gap-1.5">
            <MapPin className="w-3 h-3" />
            8 Incredible Destinations
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-800 mb-4">
            Your Next Adventure
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sand-500 to-amber-600">
              Awaits Here
            </span>
          </h2>
          <p className="text-lg text-stone-500 font-body max-w-2xl mx-auto">
            From the golden beaches of Goa to the towering peaks of Ladakh — we craft personalized journeys that become lifelong memories.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} dest={dest} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-stone-500 font-body mb-3">
            Don't see your dream destination? We can plan it for you!
          </p>

          {/* Services Info */}
          <div className="flex items-center justify-center gap-4 text-sm text-stone-600 mb-5">
            <span className="flex items-center gap-1">
              ✈️ Air Ticket Service Available
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              🛂 Visa Booking Available
            </span>
          </div>

          <a
            href={`https://wa.me/918955751229?text=Hi%20Dhruv!%20I%20have%20a%20custom%20destination%20in%20mind.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="whatsapp"
              size="lg"
              className="gap-2 rounded-full hover:border-sand-500 text-stone-700 shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 text-green-500" />
              Ask for Custom Package
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
