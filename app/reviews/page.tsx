"use client";

import { useState } from "react";

type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  item: string;
};

const initialReviews: Review[] = [
  {
    id: 1,
    name: "Arjun",
    rating: 5,
    comment: "Very good quality notebooks 📒 Loved it!",
    item: "Notebook",
  },
  {
    id: 2,
    name: "Priya",
    rating: 4,
    comment: "Nice pens ✏️ smooth writing",
    item: "Pen Pack",
  },
  {
    id: 3,
    name: "Kumar",
    rating: 5,
    comment: "Sketch pens are amazing 🎨",
    item: "Sketch Pens",
  },
];

export default function ReviewsPage() {
  const [reviews] = useState<Review[]>(initialReviews);

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 fade-in">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-green-600 mb-3">
        ⭐ Customer Reviews
      </h1>

      <p className="text-center text-gray-500 mb-10">
        What our customers say about stationery products
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-white shadow-md rounded-2xl p-6 card-hover"
          >

            {/* Item */}
            <p className="text-sm text-green-600 font-semibold">
              {r.item}
            </p>

            {/* Name */}
            <h2 className="text-xl font-bold mt-1">
              {r.name}
            </h2>

            {/* Stars */}
            <div className="flex text-yellow-400 mt-2">
              {"⭐".repeat(r.rating)}
              {"☆".repeat(5 - r.rating)}
            </div>

            {/* Comment */}
            <p className="text-gray-600 mt-3">
              "{r.comment}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}