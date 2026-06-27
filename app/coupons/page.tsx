"use client";

import { useState } from "react";

type Coupon = {
  id: number;
  code: string;
  discount: string;
  desc: string;
};

const coupons: Coupon[] = [
  {
    id: 2,
    code: "STUDY20",
    discount: "20% OFF",
    desc: "Flat 20% off on premium stationery items",
  },
  {
    id: 3,
    code: "WELCOME50",
    discount: "₹50 OFF",
    desc: "Flat ₹50 off for new users",
  },
  {
    id: 4,
    code: "SCHOOL15",
    discount: "15% OFF",
    desc: "Back to school stationery discount",
  },
];

export default function CouponsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);

    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 fade-in">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-green-600 mb-3">
        🎟️ Coupons & Offers
      </h1>

      <p className="text-center text-gray-500 mb-10">
        Save more on your stationery shopping ✏️📒
      </p>

      {/* Coupons Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map((c) => (
          <div
            key={c.id}
            className="bg-white shadow-md rounded-2xl p-6 border border-green-100 card-hover"
          >
            {/* Discount */}
            <h2 className="text-2xl font-bold text-green-600">
              {c.discount}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mt-2">{c.desc}</p>

            {/* Code box */}
            <div className="mt-4 flex items-center justify-between bg-gray-100 p-3 rounded-lg">
              <span className="font-mono font-bold text-gray-700">
                {c.code}
              </span>

              <button
                onClick={() => handleCopy(c.code)}
                className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
              >
                Copy
              </button>
            </div>

            {/* Copied message */}
            {copied === c.code && (
              <p className="text-green-600 text-sm mt-2">
                Copied ✅
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}