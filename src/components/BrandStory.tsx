"use client";

import Image from "next/image";
import Link from "next/link";

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-[120px] bg-[#1a1c1c]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div>
            <span className="font-body text-xs font-semibold tracking-[0.1em] text-[#7e7576] mb-4 block">
              ESTABLISHED 2004
            </span>
            <h2 className="font-display text-3xl lg:text-[48px] font-bold leading-[1.2] tracking-[0.02em] text-white mb-6">
              Two Decades of
              <br />
              Industrial
              <br />
              Excellence
            </h2>
            <div className="space-y-4 mb-10">
              <p className="font-body text-base leading-[1.6] text-white/70">
                Wuhao Industry & Trade has evolved from a local manufacturing hub into a premier international trading powerhouse. Our commitment to ISO 9001 standards ensures that every product leaving our facilities meets the most rigorous global benchmarks.
              </p>
              <p className="font-body text-base leading-[1.6] text-white/70">
                Our integrated approach combines advanced manufacturing capabilities with a sophisticated global logistics network, providing seamless solutions worldwide.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-12 mb-10">
              <div>
                <span className="font-display text-4xl lg:text-5xl font-bold text-white">20+</span>
                <p className="font-body text-xs font-semibold tracking-[0.1em] text-[#7e7576] mt-2">YEARS OF EXPERIENCE</p>
              </div>
              <div>
                <span className="font-display text-4xl lg:text-5xl font-bold text-white">ISO</span>
                <p className="font-display text-2xl font-bold text-white">9001</p>
                <p className="font-body text-xs font-semibold tracking-[0.1em] text-[#7e7576] mt-1">QUALITY CERTIFIED</p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 border border-white text-white text-xs font-semibold tracking-[0.1em] hover:bg-white hover:text-black transition-all duration-200"
            >
              LEARN MORE ABOUT US
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
              alt="Wuhao Factory"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
