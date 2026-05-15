"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "50+",
    label: "COUNTRIES SERVED",
    description: "Global reach across continents",
  },
  {
    value: "500+",
    label: "STRATEGIC CLIENTS",
    description: "Trusted partnerships worldwide",
  },
  {
    value: "2.4k",
    label: "ANNUAL EXPORTS",
    description: "Tons shipped per year",
  },
  {
    value: "100%",
    label: "QA COMPLIANCE",
    description: "Quality assured every time",
  },
];

function AnimatedCounter({ target, inView }: { target: string; inView: boolean }) {
  const [display, setDisplay] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const numericPart = target.replace(/[^0-9.]/g, "");
    const suffix = target.replace(/[0-9.]/g, "");
    const targetNum = parseFloat(numericPart);
    const isDecimal = numericPart.includes(".");
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;
    const increment = targetNum / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNum) {
        setDisplay(target);
        clearInterval(timer);
      } else {
        if (isDecimal) {
          setDisplay(current.toFixed(1) + suffix);
        } else {
          setDisplay(Math.floor(current) + suffix);
        }
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{display}</span>;
}

export default function StatsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-[120px] bg-[#f9f9f9]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl lg:text-[48px] font-bold tracking-[0.05em] text-[#1a1c1c] mb-4">
            OUR GLOBAL IMPACT
          </h2>
          <p className="font-body text-sm lg:text-base text-[#4c4546] leading-[1.6] max-w-2xl mx-auto">
            Providing stability and excellence in a complex global market through precision and reliability.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl lg:text-6xl font-bold tracking-[-0.02em] text-[#1a1c1c] mb-3">
                <AnimatedCounter target={stat.value} inView={inView} />
              </div>
              <p className="font-body text-xs font-semibold tracking-[0.1em] text-[#7e7576] mb-2">
                {stat.label}
              </p>
              <p className="font-body text-sm text-[#4c4546]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications Row */}
        <div className="mt-16 pt-12 border-t border-[#e6e6e6]">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {["ISO 9001", "CE MARK", "SGS AUDITED", "GLOBAL REACH", "ROHS COMPLIANT"].map((cert) => (
              <div key={cert} className="flex items-center gap-2 text-[#7e7576]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span className="font-body text-xs font-semibold tracking-[0.05em]">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
