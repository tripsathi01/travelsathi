"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Users, Globe, ArrowDown, MessageCircle } from "lucide-react";

const WHATSAPP_URL = `https://wa.me/918955751229?text=Hi%20Dhruv!%20I%27m%20interested%20in%20a%20travel%20package.`;

const heroDestinations = ["Goa", "Thailand", "Bali", "Dubai", "Singapore", "Ladakh"];

const stats = [
  { icon: Users, value: "2,500+", label: "Happy Travelers" },
  { icon: Globe, value: "8", label: "Destinations" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: MapPin, value: "100+", label: "Packages" },
];

export default function Hero() {
  const [currentDest, setCurrentDest] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentDest((prev) => (prev + 1) % heroDestinations.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-sky-50">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-sand-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-ocean-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-3xl" />

        {/* Floating map pins */}
        <div className="absolute top-32 left-[15%] animate-float" style={{ animationDelay: "0s" }}>
          <div className="bg-white rounded-full p-2 shadow-lg border border-sand-100">
            <MapPin className="w-4 h-4 text-sand-500" />
          </div>
        </div>
        <div className="absolute top-48 right-[20%] animate-float" style={{ animationDelay: "1.5s" }}>
          <div className="bg-white rounded-full p-2 shadow-lg border border-ocean-100">
            <MapPin className="w-4 h-4 text-ocean-500" />
          </div>
        </div>
        <div className="absolute bottom-48 right-[12%] animate-float" style={{ animationDelay: "0.8s" }}>
          <div className="bg-white rounded-full p-2 shadow-lg border border-green-100">
            <MapPin className="w-4 h-4 text-forest-500" />
          </div>
        </div>

        {/* Dotted pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#92400e" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <div className="space-y-2 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
              <Badge variant="ocean" className="gap-1.5 px-3 py-1 text-xs font-semibold rounded-full">
                <Star className="w-3 h-3 fill-current" />
                India's Trusted Travel Partner
              </Badge>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-800 leading-[1.05]">
                Explore the
                <br />
                World with{" "}
                <span className="relative">
                  <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-sand-500 to-amber-600 transition-all duration-400"
                    style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)", display: "inline-block" }}
                  >
                    {heroDestinations[currentDest]}
                  </span>
                </span>
              </h1>
              <p className="mt-6 text-lg text-stone-600 font-body leading-relaxed max-w-lg">
                Handcrafted travel experiences to the world's most stunning destinations. Your dream vacation is just one WhatsApp message away — talk to Dhruv today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.35s", opacity: 0 }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="xl" className="gap-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5" />
                  Plan My Trip Now
                </Button>
              </a>
              <Button
                variant="whatsapp"
                size="xl"
                className="gap-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                onClick={() => {
                  const el = document.querySelector("#destinations");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Destinations
              </Button>
            </div>

            {/* Destinations Pills */}
            <div className="flex flex-wrap gap-2 animate-fade-up" style={{ animationDelay: "0.45s", opacity: 0 }}>
              {["Goa", "Thailand", "Singapore", "Malaysia", "Ladakh", "Vietnam", "Bali", "Dubai"].map((dest) => (
                <span
                  key={dest}
                  className="inline-flex items-center gap-1 text-xs font-medium bg-white border border-sand-200 text-stone-600 px-3 py-1.5 rounded-full shadow-sm hover:border-sand-400 hover:text-sand-700 cursor-default transition-all"
                >
                  <MapPin className="w-2.5 h-2.5 text-sand-400" />
                  {dest}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Visual card grid */}
          <div className="hidden lg:block relative animate-fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
            <div className="relative w-full h-[520px]">
              {/* Main large card placeholder */}
              <div className="absolute top-0 right-0 w-[320px] h-[360px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-sand-100 to-amber-100 border-2 border-dashed border-sand-300 flex flex-col items-center justify-center gap-3 group hover:shadow-3xl transition-shadow">
                <img src="/posters/goa.png" alt="Goa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>

              {/* Small card 1 */}
              <div className="absolute bottom-0 left-0 w-[220px] h-[200px] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-ocean-50 to-sky-100 border-2 border-dashed border-ocean-200 flex flex-col items-center justify-center gap-2">
                <img src="/posters/thailand.png" alt="Goa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>

              {/* Small card 2 */}
              <div className="absolute top-[200px] left-[30px] w-[180px] h-[160px] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-dashed border-green-200 flex flex-col items-center justify-center gap-2">
                <img src="/posters/singapore.png" alt="Goa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>

              {/* Rating card */}
              <div className="absolute bottom-[160px] right-0 bg-white rounded-2xl shadow-xl p-4 border border-sand-100">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-stone-800 font-body">4.9 / 5.0 Rating</p>
                <p className="text-xs text-stone-500 font-body">from 500+ reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-sand-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-10 h-10 bg-sand-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-sand-500" />
              </div>
              <div className="font-display text-2xl font-bold text-stone-800">{value}</div>
              <div className="text-xs text-stone-500 font-body mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12 animate-bounce">
          <button
            onClick={() => {
              const el = document.querySelector("#destinations");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-1 text-stone-400 hover:text-sand-500 transition-colors group"
          >
            <span className="text-xs font-body tracking-widest uppercase">Explore</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
