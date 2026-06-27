"use client";

import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Premium",
    desc: "High quality imported stationery",
    color: "from-yellow-100 to-yellow-300",
    emoji: "📒",
  },
  {
    id: 2,
    name: "Daily",
    desc: "Everyday essential stationery items",
    color: "from-green-100 to-green-300",
    emoji: "✏️",
  },
  {
    id: 3,
    name: "Art Supplies",
    desc: "Creative drawing & painting tools",
    color: "from-orange-100 to-orange-300",
    emoji: "🎨",
  },
  {
    id: 4,
    name: "Office",
    desc: "Professional office stationery",
    color: "from-pink-100 to-pink-300",
    emoji: "📎",
  },
  {
    id: 5,
    name: "Writing",
    desc: "Pens, pencils & writing essentials",
    color: "from-lime-100 to-lime-300",
    emoji: "🖊️",
  },
  {
    id: 6,
    name: "Exotic",
    desc: "Unique imported stationery items",
    color: "from-purple-100 to-purple-300",
    emoji: "📚",
  },
  {
    id: 7,
    name: "School Supplies",
    desc: "Back to school essentials",
    color: "from-amber-100 to-amber-300",
    emoji: "🎒",
  },
  {
    id: 8,
    name: "Study",
    desc: "Useful items for studying",
    color: "from-sky-100 to-sky-300",
    emoji: "📓",
  },
];

export default function CategoriesPage() {
  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 fade-in">
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-green-600 mb-3">
        Stationery Categories 🖊️
      </h1>

      <p className="text-center text-gray-500 mb-10">
        Choose your favorite stationery category
      </p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/stationery?category=${cat.name}`}
            className={`p-6 rounded-2xl shadow-md bg-gradient-to-br ${cat.color} card-hover transition`}
          >
            <div className="text-5xl">{cat.emoji}</div>

            <h2 className="text-xl font-bold mt-4">
              {cat.name}
            </h2>

            <p className="text-gray-600 mt-2 text-sm">
              {cat.desc}
            </p>

            <button className="mt-4 text-green-700 font-semibold">
              Explore →
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}