"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type WishItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishItem[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("wishlist");
    if (data) {
      setWishlist(JSON.parse(data));
    }
  }, []);

  const removeItem = (id: number) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 fade-in">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-green-600 mb-3">
        ❤️ My Wishlist
      </h1>

      <p className="text-center text-gray-500 mb-10">
        Save your favorite stationery items for later
      </p>

      {/* Empty state */}
      {wishlist.length === 0 ? (
        <div className="text-center mt-20 text-gray-500">
          Your wishlist is empty 💔
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-2xl p-4 card-hover"
            >

              {/* Image */}
              <div className="relative h-32 w-full bg-green-50 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h2 className="text-lg font-bold mt-3">
                {item.name}
              </h2>

              {/* Category */}
              <p className="text-sm text-gray-500">
                {item.category}
              </p>

              {/* Price */}
              <p className="text-green-600 font-bold mt-2">
                ₹{item.price}
              </p>

              {/* Actions */}
              <div className="flex gap-2 mt-4">

                <Link
                  href={`/stationery/${item.id}`}
                  className="flex-1 text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                  View
                </Link>

                <button
                  onClick={() => removeItem(item.id)}
                  className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}