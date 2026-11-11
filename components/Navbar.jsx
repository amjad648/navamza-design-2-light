"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-brand-grey-200/80 transition-all duration-200">
      <div className="max-w-6xl mx-auto px-6 h-18 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo with Light Theme */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/assets/logo-prism.svg"
            alt="Navamza"
            className="h-10 w-auto transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Nav Links (Clean Grey to Blue hover, No CTA button) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-brand-grey-600">
          <Link href="#about" className="hover:text-brand-blue-600 transition-colors">
            About Us
          </Link>
          <Link href="#services" className="hover:text-brand-blue-600 transition-colors">
            Capabilities
          </Link>
          <Link href="#products" className="hover:text-brand-blue-600 transition-colors">
            Product Lab
          </Link>
          <Link href="#contact" className="hover:text-brand-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Subtitle / Availability Badge (Replaces aggressive CTA button) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue-50 border border-brand-blue-100 text-xs font-medium text-brand-blue-700">
          <span className="w-2 h-2 rounded-full bg-brand-blue-600 animate-pulse"></span>
          <span>Web &amp; Mobile Studio</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-brand-grey-600 hover:text-brand-grey-900 hover:bg-brand-grey-100 focus:outline-none transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-brand-grey-700" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-3 pb-6 bg-white border-b border-brand-grey-200 shadow-lg flex flex-col gap-3 text-sm font-semibold text-brand-grey-700">
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-brand-blue-600 border-b border-brand-grey-100"
          >
            About Us
          </Link>
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-brand-blue-600 border-b border-brand-grey-100"
          >
            Capabilities
          </Link>
          <Link
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-brand-blue-600 border-b border-brand-grey-100"
          >
            Product Lab
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-brand-blue-600"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
