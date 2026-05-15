"use client";

import Image from "next/image";
import Link from "next/link";

const businesses = [
  {
    id: 1,
    title: "Heavy Machinery",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    href: "/products/heavy-machinery",
  },
  {
    id: 2,
    title: "Precision Tools",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80",
    href: "/products/precision-tools",
  },
  {
    id: 3,
    title: "Industrial Parts",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80",
    href: "/products/industrial-parts",
  },
  {
    id: 4,
    title: "Sustainable Tech",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    href: "/products/sustainable-tech",
  },
];

export default function BusinessCards() {
  return (
    <section className="py-20 lg:py-[120px] bg-[#f9f9f9]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-2xl lg:text-[48px] font-bold tracking-[0.05em] text-[#1a1c1c] mb-2">
              CORE BUSINESS UNITS
            </h2>
            <p className="font-body text-sm lg:text-base text-[#4c4546] leading-[1.6]">
              Defining the standard of excellence in global industrial manufacturing and trade.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-[#1a1c1c] hover:text-[#1c69d3] transition-colors duration-200"
          >
            ALL CAPABILITIES
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {businesses.map((business) => (
            <Link
              key={business.id}
              href={business.href}
              className="group relative aspect-[3/4] overflow-hidden bg-[#1a1c1c]"
            >
              {/* Image */}
              <Image
                src={business.image}
                alt={business.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl lg:text-2xl font-bold tracking-[0.02em] text-white mb-4">
                  {business.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-white/80 group-hover:text-white transition-colors duration-200">
                  EXPLORE
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile "All Capabilities" Link */}
        <div className="mt-8 lg:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-[#1a1c1c] hover:text-[#1c69d3] transition-colors duration-200"
          >
            ALL CAPABILITIES
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
