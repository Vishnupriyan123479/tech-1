"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/app/data/products";
import Image from "next/image";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Premium",
    "Daily",
    "Art Supplies",
    "Office",
    "Writing",
    "Exotic",
    "School Supplies",
    "Study",
  ];

  const filteredProducts = products.filter((product) => {
    const matchName = product.name
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    return matchName && matchCategory;
  });

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 fade-in">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-green-600">
        🔍 Search Stationery
      </h1>

      <p className="text-center text-gray-500 mt-2 mb-8">
        Find stationery items instantly ✏️📒🎨
      </p>

      {/* Search Box */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search stationery..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-1/2 p-3 border rounded-lg shadow-sm focus:outline-green-500"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mt-6 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              category === cat
                ? "bg-green-600 text-white"
                : "bg-white text-gray-600 hover:bg-green-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No items found 😢
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="bg-white shadow-md rounded-xl p-4 card-hover"
            >

              {/* Image */}
              <div className="relative h-28 w-full bg-green-50 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h2 className="text-lg font-bold mt-3">
                {product.name}
              </h2>

              {/* Category */}
              <p className="text-sm text-gray-500">
                {product.category}
              </p>

              {/* Price */}
              <p className="text-green-600 font-bold mt-2">
                ₹{product.price}
              </p>

            </Link>
          ))}
        </div>
      )}
    </div>
  );
}