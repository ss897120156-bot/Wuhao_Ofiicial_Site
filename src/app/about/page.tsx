import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Company Profile | Wuhao Industry & Trade",
  description: "Established in 2007, Xiamen Wuhao Industry & Trade Co., Ltd. is a leading professional manufacturer specializing in R&D, design, production, sales, and service of logistics equipment.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <header className="relative w-full h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover brightness-50"
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
              alt="Modern manufacturing facility"
            />
          </div>
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-16">
            <div className="max-w-2xl">
              <h1 className="font-[var(--font-hanken-grotesk)] text-5xl md:text-7xl lg:text-[80px] font-bold text-white leading-[1.1] uppercase mb-6 tracking-tighter">
                LEVEL UP TO<br />
                <span className="text-white">ULTIMATE.</span>
              </h1>
              <h2 className="font-[var(--font-hanken-grotesk)] text-2xl md:text-4xl lg:text-[48px] font-bold text-white mb-8 border-l-8 border-[#000000] pl-6">
                Company Profile
              </h2>
              <p className="font-[var(--font-inter)] text-base md:text-lg text-[#e2e2e2] max-w-lg mb-10 leading-relaxed">
                Established in April 2007, Xiamen Wuhao Industry & Trade Co., Ltd. (WUHAO) is a leading professional manufacturer specializing in the R&D, design, production, sales, and service of logistics equipment.
              </p>
              <button className="bg-[#000000] border border-white text-white px-10 py-4 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300">
                DISCOVER OUR ROOTS
              </button>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-black/20 backdrop-blur-sm hidden lg:block" style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}></div>
        </header>

        {/* Module 1: Core Products */}
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px] border-b border-[#000000]/10">
          <div className="relative h-[400px] lg:h-full overflow-hidden bg-[#000000]">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80"
              alt="Industrial wire containers and metal storage solutions"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          <div className="flex flex-col justify-center px-8 lg:px-24 py-20 bg-white">
            <span className="font-[var(--font-inter)] text-xs font-semibold uppercase tracking-[0.2em] text-[#000000] mb-6 block">
              — CORE PRODUCTS
            </span>
            <h2 className="font-[var(--font-hanken-grotesk)] text-3xl md:text-4xl lg:text-[48px] font-bold uppercase tracking-tighter mb-10 leading-tight">
              ENGINEERED FOR<br />EFFICIENCY
            </h2>
            <div className="space-y-12">
              <div>
                <h3 className="font-[var(--font-inter)] text-xs font-bold uppercase tracking-widest mb-3 text-[#000000]">
                  Metal & Plastic Series
                </h3>
                <p className="font-[var(--font-inter)] text-base text-[#4c4546] max-w-md">
                  From collapsible wire containers and metal storage cages to professional-grade plastic pallets and turnover boxes. Leveraging advanced equipment for industrial longevity.
                </p>
              </div>
              <div>
                <h3 className="font-[var(--font-inter)] text-xs font-bold uppercase tracking-widest mb-3 text-[#000000]">
                  Customized Solutions
                </h3>
                <p className="font-[var(--font-inter)] text-base text-[#4c4546] max-w-md">
                  Design and manufacturing of non-standard logistics products tailored to specific needs (OEM/ODM). Transforming complex challenges into streamlined workflows.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <a
                href="/products"
                className="inline-flex items-center gap-4 font-[var(--font-inter)] text-xs font-bold uppercase tracking-widest hover:translate-x-2 transition-transform"
              >
                Explore Catalog
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Module 2: Global Trade (Flipped Layout) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px] border-b border-[#000000]/10">
          <div className="flex flex-col justify-center px-8 lg:px-24 py-20 bg-[#000000] text-white order-2 lg:order-1">
            <span className="font-[var(--font-inter)] text-xs font-semibold uppercase tracking-[0.2em] text-[#c6c6c6] mb-6 block">
              — GLOBAL REACH
            </span>
            <h2 className="font-[var(--font-hanken-grotesk)] text-3xl md:text-4xl lg:text-[48px] font-bold uppercase tracking-tighter mb-10 leading-tight">
              BOUNDLESS<br />LOGISTICS
            </h2>
            <div className="space-y-8">
              <p className="font-[var(--font-inter)] text-lg text-[#c6c6c6] max-w-md italic">
                "With independent import and export authority, our products are exported worldwide to the USA, EU, Japan, Thailand, and beyond."
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/20">
                <div>
                  <span className="block font-[var(--font-hanken-grotesk)] text-2xl font-bold">15+</span>
                  <span className="font-[var(--font-inter)] text-xs uppercase tracking-widest text-[#c6c6c6]">Global Hubs</span>
                </div>
                <div>
                  <span className="block font-[var(--font-hanken-grotesk)] text-2xl font-bold">2007</span>
                  <span className="font-[var(--font-inter)] text-xs uppercase tracking-widest text-[#c6c6c6]">Est. Year</span>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <a
                href="/contact"
                className="inline-flex items-center gap-4 font-[var(--font-inter)] text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 transition-opacity"
              >
                Our Locations
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-full overflow-hidden order-1 lg:order-2">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80"
              alt="Global shipping port with containers"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </section>

        {/* Module 3: Our Mission */}
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">
          <div className="relative h-[400px] lg:h-full overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
              alt="Modern industrial complex representing innovation"
            />
          </div>
          <div className="flex flex-col justify-center px-8 lg:px-24 py-20 bg-white">
            <span className="font-[var(--font-inter)] text-xs font-semibold uppercase tracking-[0.2em] text-[#000000] mb-6 block">
              — THE MISSION
            </span>
            <h2 className="font-[var(--font-hanken-grotesk)] text-3xl md:text-4xl lg:text-[48px] font-bold uppercase tracking-tighter mb-10 leading-tight">
              REDUCING COSTS.<br />IMPROVING EFFICIENCY.
            </h2>
            <div className="space-y-12">
              <div className="border-l-4 border-[#000000] pl-8">
                <h3 className="font-[var(--font-hanken-grotesk)] text-xl md:text-2xl font-semibold uppercase mb-2">Innovation</h3>
                <p className="font-[var(--font-inter)] text-base text-[#4c4546]">
                  Based in China with a global vision, "WUHAO" is dedicated to helping customers maximize space utilization through relentless R&D.
                </p>
              </div>
              <div className="border-l-4 border-[#000000] pl-8">
                <h3 className="font-[var(--font-hanken-grotesk)] text-xl md:text-2xl font-semibold uppercase mb-2">Excellence</h3>
                <p className="font-[var(--font-inter)] text-base text-[#4c4546]">
                  Our professional team is committed to serving every client with excellence, aiming for communal development and a glorious future.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <a
                href="/contact"
                className="inline-flex items-center px-10 py-4 bg-[#000000] text-white text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#474747] transition-all"
              >
                Work With Us
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
