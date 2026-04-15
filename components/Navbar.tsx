"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone, MessageCircle, Plane } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_NUMBER = "918955751229";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Dhruv!%20I%27m%20interested%20in%20a%20travel%20package.`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-sand-100"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sand-400 to-sand-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Plane className="w-5 h-5 text-white rotate-45" />
                </div>
              </div>
              <div>
                <div className="font-display text-xl font-bold text-stone-800 leading-tight">
                  Tripsathi Travels
                </div>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium font-body transition-all duration-200",
                    activeLink === link.href
                      ? "bg-sand-50 text-sand-600"
                      : scrolled
                      ? "text-stone-600 hover:text-sand-600 hover:bg-sand-50"
                      : "text-stone-700 hover:text-sand-600 hover:bg-white/60"
                  )}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="flex items-center gap-1.5 text-sm text-stone-600 hover:text-sand-600 transition-colors font-body"
              >
                <Phone className="w-4 h-4" />
                <span>+91 89557 51229</span>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="sm" className="gap-2 rounded-full px-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-sand-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-stone-700" />
              ) : (
                <Menu className="w-6 h-6 text-stone-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-sand-100",
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-3 rounded-xl text-stone-600 hover:text-sand-600 hover:bg-sand-50 transition-all font-body text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="flex items-center gap-2 px-4 py-2 text-stone-600 font-body text-sm"
              >
                <Phone className="w-4 h-4 text-sand-500" />
                +91 89557 51229 — Dhruv Bhardwaj
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" className="w-full gap-2 rounded-xl">
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-30 group-hover:opacity-50" />
          <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-stone-800 text-white text-xs rounded-lg px-3 py-1.5 whitespace-nowrap shadow-lg">
              Chat with Dhruv
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-stone-800" />
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
