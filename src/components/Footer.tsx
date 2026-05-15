"use client";

import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Product Catalog", href: "/products" },
  { label: "Trade Solutions", href: "/solutions" },
  { label: "Quality Control", href: "/quality" },
  { label: "Global Logistics", href: "/logistics" },
];

const supportLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Settings", href: "/cookies" },
  { label: "Global Locations", href: "/locations" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1c1c] text-white">
      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-xl font-bold tracking-[0.05em] mb-4">
              Wuhao
            </h3>
            <p className="font-body text-sm leading-[1.6] text-white/60 mb-6 max-w-xs">
              Leading international trade partner specializing in industrial manufacturing and global supply chain solutions.
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-body text-xs font-semibold tracking-[0.1em] text-white/40 mb-6">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h4 className="font-body text-xs font-semibold tracking-[0.1em] text-white/40 mb-6">
              SUPPORT
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="font-body text-xs font-semibold tracking-[0.1em] text-white/40 mb-6">
              NEWSLETTER
            </h4>
            <p className="font-body text-sm text-white/60 mb-4">
              Stay updated with the latest in global industrial manufacturing.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Business Email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#1c69d3] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black text-xs font-semibold tracking-[0.1em] hover:bg-[#1c69d3] hover:text-white transition-all duration-200"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Factory Image Strip */}
      <div className="relative w-full h-[200px] lg:h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80"
          alt="Wuhao Factory"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-white/40">
              © 2024 Wuhao Industry & Trade. Engineering Excellence. ISO 9001 Certified.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="font-body text-xs text-white/40 hover:text-white transition-colors duration-200">
                Privacy
              </Link>
              <Link href="/terms" className="font-body text-xs text-white/40 hover:text-white transition-colors duration-200">
                Terms
              </Link>
              <Link href="/sitemap" className="font-body text-xs text-white/40 hover:text-white transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
