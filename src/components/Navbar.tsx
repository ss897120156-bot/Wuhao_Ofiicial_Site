"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "PRODUCTS", href: "/products" },
  { label: "NEWS", href: "/news" },
  { label: "ABOUT US", href: "/about" },
  { label: "CERTIFICATIONS", href: "/certifications" },
  { label: "CONTACT", href: "/contact" },
];

const languages = [
  { code: "EN", label: "English" },
  { code: "中文", label: "中文" },
  { code: "JP", label: "日本語" },
  { code: "AR", label: "العربية" },
];

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e6e6e6]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-lg font-bold tracking-[0.05em] text-[#000000]">
              Wuhao Industry & Trade
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold tracking-[0.1em] text-[#1a1c1c] hover:text-[#1c69d3] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Language + Search */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-xs font-semibold tracking-[0.1em] text-[#1a1c1c] hover:text-[#1c69d3] transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                  <path d="M2 12h20"/>
                </svg>
                <span>{currentLang.code}</span>
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-32 bg-white border border-[#e6e6e6] shadow-lg">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-semibold tracking-[0.05em] hover:bg-[#f4f3f3] transition-colors ${
                        currentLang.code === lang.code ? "text-[#1c69d3]" : "text-[#1a1c1c]"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Icon */}
            <button className="text-[#1a1c1c] hover:text-[#1c69d3] transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-[#1a1c1c]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileOpen ? (
                  <>
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </>
                ) : (
                  <>
                    <path d="M4 12h16"/>
                    <path d="M4 18h16"/>
                    <path d="M4 6h16"/>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#e6e6e6]">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-xs font-semibold tracking-[0.1em] text-[#1a1c1c] hover:text-[#1c69d3] transition-colors duration-200 border-b border-[#eeeeee] last:border-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
