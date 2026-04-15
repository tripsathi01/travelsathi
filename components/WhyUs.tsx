"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Shield, HeadphonesIcon, Wallet, Map, Clock, Award, Star, Quote } from "lucide-react";

const features = [
  {
    icon: HeadphonesIcon,
    title: "24/7 WhatsApp Support",
    desc: "Dhruv is always a message away — before, during, and after your trip. No bots, just real human care.",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Wallet,
    title: "Best Price Guarantee",
    desc: "We work directly with hotels and airlines to get you unbeatable prices. No hidden fees, ever.",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Map,
    title: "Tailor-Made Itineraries",
    desc: "Every trip is crafted uniquely for you — your budget, your interests, your pace. Not cookie-cutter packages.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Shield,
    title: "Safe & Trusted",
    desc: "All our packages include travel insurance options and verified accommodation partners.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Clock,
    title: "Quick Planning",
    desc: "Get a complete itinerary within 24 hours of contacting us. We move as fast as you do.",
    color: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: Award,
    title: "Experienced Team",
    desc: "Dhruv has personally travelled to every destination we offer — your guide knows the ground.",
    color: "bg-teal-50",
    iconColor: "text-teal-600",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    city: "Delhi",
    trip: "Bali · 7 nights",
    rating: 5,
    text: "Dhruv planned the most perfect Bali trip for our honeymoon. Every tiny detail was sorted. The villa he chose was breathtaking and the itinerary was exactly what we wanted!",
    avatar: "PS",
  },
  {
    name: "Rahul Mehta",
    city: "Mumbai",
    trip: "Ladakh · 10 nights",
    rating: 5,
    text: "Ladakh with Tripsathi Travels was a life-changing experience. From Pangong to Nubra, everything was smooth. He even arranged permits without any hassle. Highly recommended!",
    avatar: "RM",
  },
  {
    name: "Sneha Kapoor",
    city: "Jaipur",
    trip: "Thailand · 6 nights",
    rating: 5,
    text: "Best Thailand trip ever! Dhruv suggested places we'd never find on our own. The street food tour in Bangkok was the highlight. Already planning next trip with him!",
    avatar: "SK",
  },
  {
    name: "Amit Verma",
    city: "Pune",
    trip: "Dubai · 5 nights",
    rating: 5,
    text: "Dhruv got us an incredible deal on a Dubai trip with desert safari included. The hotel was amazing and WhatsApp response was instant. Will definitely book again.",
    avatar: "AV",
  },
  {
    name: "Kavya Nair",
    city: "Bangalore",
    trip: "Goa · 4 nights",
    rating: 5,
    text: "A solo Goa trip planned by Dhruv was a game changer. Felt safe and well-taken care of throughout. The beach shack recommendations were spot on!",
    avatar: "KN",
  },
  {
    name: "Rohan Joshi",
    city: "Hyderabad",
    trip: "Singapore · 5 nights",
    rating: 5,
    text: "Seamless Singapore experience. Airport pickup, hotel, attractions — all sorted before we even landed. The budget was perfectly matched too. 5 stars!",
    avatar: "RJ",
  },
];

export default function WhyUs() {
  return (
    <>
      {/* Why Us Section */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-3 py-1 rounded-full text-xs">
              Why Travelers Choose Us
            </Badge>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-800 mb-4">
              Travel Smarter,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand-500 to-amber-600">
                Not Harder
              </span>
            </h2>
            <p className="text-lg text-stone-500 font-body max-w-xl mx-auto">
              We take the stress out of trip planning so you can focus on creating beautiful memories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc, color, iconColor }) => (
              <div
                key={title}
                className="group p-6 rounded-2xl border border-stone-100 hover:border-sand-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <h3 className="font-display text-lg font-bold text-stone-800 mb-2">{title}</h3>
                <p className="text-sm text-stone-500 font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-amber-50/50 to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="ocean" className="mb-4 px-3 py-1 rounded-full text-xs gap-1.5">
              <Star className="w-3 h-3 fill-current" />
              500+ Happy Travelers
            </Badge>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-800 mb-4">
              Stories from the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand-500 to-amber-600">
                Road
              </span>
            </h2>
            <p className="text-lg text-stone-500 font-body max-w-xl mx-auto">
              Real experiences from real travelers who trusted Dhruv with their dream trips.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-sand-100" />

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-stone-600 font-body leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sand-400 to-sand-600 flex items-center justify-center text-white font-display font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-stone-800 font-body text-sm">{t.name}</div>
                    <div className="text-xs text-stone-400 font-body">{t.city} · {t.trip}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
