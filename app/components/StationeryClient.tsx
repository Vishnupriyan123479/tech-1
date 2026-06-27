"use client";

import Link from "next/link";
import { products } from "@/app/data/products";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function StationeryClient() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const filteredItems = selectedCategory
    ? products.filter((item) => item.category === selectedCategory)
    : products;

  const addToCart = (item: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const exists = cart.find((i: any) => i.id === item.id);

    let updated;

    if (exists) {
      updated = cart.map((i: any) =>
        i.id === item.id ? { ...i, qty: i.qty + 1 } : i
      );
    } else {
      updated = [...cart, { ...item, qty: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updated));
    alert("Added to cart 🛒");
  };

  const addToWishlist = (item: any) => {
    const list = JSON.parse(localStorage.getItem("wishlist") || "[]");

    const exists = list.find((i: any) => i.id === item.id);

    if (!exists) {
      const updated = [...list, item];
      localStorage.setItem("wishlist", JSON.stringify(updated));
      alert("Added to wishlist ❤️");
    } else {
      alert("Already in wishlist");
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">

      <h1 className="text-4xl font-bold text-center text-green-600">
        🖊️ Stationery Collection
      </h1>

      <p className="text-center text-gray-500 mt-2 mb-10">
        Premium quality stationery delivered daily
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden"
          >
            <Link href={`/products/${item.id}`}>
              <div className="relative h-40 w-full bg-green-50">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>

            <div className="p-4">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="text-green-600 font-bold mt-2">₹{item.price}</p>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => addToCart(item)}
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg"
                >
                  Add 🛒
                </button>

                <button
                  onClick={() => addToWishlist(item)}
                  className="flex-1 bg-red-500 text-white py-2 rounded-lg"
                >
                  ❤️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}