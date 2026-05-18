"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// 产品分类数据
const categories = [
  { id: 1, name: "Industrial Wire Container", active: false },
  { id: 2, name: "Collapsible Wire Container", active: true },
  { id: 3, name: "Wire Mesh Container", active: false },
  { id: 4, name: "Industrial Plastic Pallet", active: false },
  { id: 5, name: "IBC Liquid Storage Tank", active: false },
  { id: 6, name: "Roll Cage Trolley", active: false },
  { id: 7, name: "Warehouse Shelving Rack", active: false },
  { id: 8, name: "Pallet Rack Wire Decking", active: false },
  { id: 9, name: "Plastic Storage Crate", active: false },
  { id: 10, name: "Metal Storage Pallet", active: false },
  { id: 11, name: "EPS Pallet", active: false },
];

// 产品数据
const products = [
  {
    id: 1,
    name: "Industrial Wire Container",
    tag: "Heavy Duty",
    categoryId: 1,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    id: 2,
    name: "Collapsible Wire Container Pro",
    tag: "Space Saving",
    categoryId: 2,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    id: 3,
    name: "Wire Mesh Container XL",
    tag: "Ventilated",
    categoryId: 3,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    id: 4,
    name: "Industrial Plastic Pallet",
    tag: "Eco-Friendly",
    categoryId: 4,
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
  },
  {
    id: 5,
    name: "IBC Liquid Storage Tank",
    tag: "Chemical Storage",
    categoryId: 5,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
  },
  {
    id: 6,
    name: "Roll Cage Trolley",
    tag: "Transport",
    categoryId: 6,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: 7,
    name: "Warehouse Shelving Rack",
    tag: "Logistics",
    categoryId: 7,
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
  },
  {
    id: 8,
    name: "Pallet Rack Wire Decking",
    tag: "Reinforced",
    categoryId: 8,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    id: 9,
    name: "Plastic Storage Crate",
    tag: "Organization",
    categoryId: 9,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    id: 10,
    name: "Metal Storage Pallet",
    tag: "Heavy Load",
    categoryId: 10,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    id: 11,
    name: "EPS Pallet Lightweight",
    tag: "Insulated",
    categoryId: 11,
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
  },
];

const PRODUCTS_PER_PAGE = 9;

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = activeCategory === 0
    ? products
    : products.filter((p) => p.categoryId === activeCategory);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <main className="pt-16 min-h-screen bg-[#f9f9f9]">
      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-12 lg:py-16">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-[0.05em] text-[#000000] uppercase">
            PRODUCTS
          </h1>
          <div className="h-1 w-24 bg-[#1c69d3] mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar Navigation */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-white border border-[#e2e2e2]">
              {/* Categories Header */}
              <div className="p-4 border-b border-[#e2e2e2]">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#848484]">
                  Categories
                </span>
              </div>

              {/* Category List */}
              <ul className="divide-y divide-[#eeeeee]">
                {/* All Products */}
                <li>
                  <button
                    onClick={() => { setActiveCategory(0); setCurrentPage(1); }}
                    className={`relative group w-full flex items-center justify-between p-4 transition-all duration-200 ${
                      activeCategory === 0
                        ? "bg-[#f4f3f3] text-[#000000]"
                        : "hover:bg-[#000000] hover:text-white"
                    }`}
                  >
                    {activeCategory === 0 && (
                      <motion.div
                        layoutId="activeCategoryIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-black"
                        transition={{ type: "spring", stiffness: 500, damping: 45 }}
                      />
                    )}
                    <span className="text-xs font-semibold uppercase tracking-tight">
                      All Products
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-opacity ${
                        activeCategory === 0
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => { setActiveCategory(category.id); setCurrentPage(1); }}
                      className={`relative group w-full flex items-center justify-between p-4 transition-all duration-200 ${
                        activeCategory === category.id
                          ? "bg-[#f4f3f3] text-[#000000]"
                          : "hover:bg-[#000000] hover:text-white"
                      }`}
                    >
                      {activeCategory === category.id && (
                        <motion.div
                          layoutId="activeCategoryIndicator"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-black"
                          transition={{ type: "spring", stiffness: 500, damping: 45 }}
                        />
                      )}
                      <span className="text-xs font-semibold uppercase tracking-tight">
                        {category.name}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-opacity ${
                          activeCategory === category.id
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right Content Area */}
          <section className="flex-1">
            {/* Download Catalog Button */}
            <button className="w-full mb-8 flex items-center justify-center gap-4 py-6 bg-[#001a41] hover:bg-[#004493] transition-all duration-300 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white group-hover:scale-110 transition-transform"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-white">
                Download Full Product Catalog
              </span>
              <span className="text-xs text-white/70 ml-2">(PDF, 12.4 MB)</span>
            </button>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {paginatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white border border-[#e2e2e2] hover:border-[#000000] transition-all duration-300"
                >
                  {/* Product Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-[#eeeeee]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#004493] mb-2 block">
                      {product.tag}
                    </span>
                    <h3 className="font-display text-lg font-semibold uppercase tracking-[0.03em] text-[#000000]">
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-sm text-[#848484]">No products found in this category.</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16 flex justify-center items-center gap-4">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 border border-[#e2e2e2] hover:bg-[#eeeeee] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#000000]"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 flex items-center justify-center text-xs font-semibold transition-all ${
                        currentPage === page
                          ? "bg-[#000000] text-white"
                          : "border border-[#e2e2e2] hover:bg-[#eeeeee]"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-[#e2e2e2] hover:bg-[#eeeeee] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#000000]"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
