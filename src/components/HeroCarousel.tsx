"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80",
    title: "Xiamen's Top\nLogistics Equipment\nManufacturer",
    subtitle: "Delivering precision-engineered manufacturing and comprehensive trade solutions to over 50 countries worldwide. Reliability and quality excellence since 2004.",
    ctaPrimary: { label: "EXPLORE OUR PRODUCTS", href: "/products" },
    ctaSecondary: { label: "DOWNLOAD CATALOG", href: "/download" },
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80",
    title: "Precision Tools\nfor Global\nIndustries",
    subtitle: "Advanced manufacturing capabilities meeting ISO 9001 standards. Engineered for performance, built to last.",
    ctaPrimary: { label: "VIEW PRODUCTS", href: "/products" },
    ctaSecondary: { label: "CONTACT US", href: "/contact" },
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1920&q=80",
    title: "Sustainable\nManufacturing\nSolutions",
    subtitle: "Committed to eco-friendly production processes while maintaining the highest quality standards in the industry.",
    ctaPrimary: { label: "OUR STORY", href: "/about" },
    ctaSecondary: { label: "GET IN TOUCH", href: "/contact" },
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title.replace(/\n/g, " ")}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full">
              <div className="max-w-2xl">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[80px] font-bold leading-[1.1] tracking-[-0.02em] text-white mb-6 whitespace-pre-line">
                  {slide.title}
                </h1>
                <p className="font-body text-base lg:text-lg leading-[1.6] text-white/80 mb-10 max-w-lg">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={slide.ctaPrimary.href}
                    className="inline-flex items-center px-8 py-4 bg-white text-black text-xs font-semibold tracking-[0.1em] hover:bg-[#1c69d3] hover:text-white transition-all duration-200"
                  >
                    {slide.ctaPrimary.label}
                  </Link>
                  <Link
                    href={slide.ctaSecondary.href}
                    className="inline-flex items-center px-8 py-4 border border-white text-white text-xs font-semibold tracking-[0.1em] hover:bg-white hover:text-black transition-all duration-200"
                  >
                    {slide.ctaSecondary.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-12 h-[2px] transition-all duration-300 ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
