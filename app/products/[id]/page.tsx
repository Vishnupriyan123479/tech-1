"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { products } from "@/app/data/products";
import type { Product } from "@/app/types/product";
import Image from "next/image";

type CartItem = {
id: number;
name: string;
price: number;
category: Product["category"];
image: string;
desc: string;
qty: number;
};

export default function ProductDetailPage() {
const params = useParams();
const id = Number(params?.id);

const [product, setProduct] = useState<Product | null>(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
if (!id || isNaN(id)) {
setLoading(false);
return;
}


const found = products.find((p) => p.id === id);

setProduct(found || null);
setLoading(false);


}, [id]);

const addToCart = () => {
if (!product) return;


const cart: CartItem[] = JSON.parse(
  localStorage.getItem("cart") ?? "[]"
);

const existing = cart.find(
  (cartItem) => cartItem.id === product.id
);

let updated: CartItem[];

if (existing) {
  updated = cart.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, qty: cartItem.qty + 1 }
      : cartItem
  );
} else {
  updated = [...cart, { ...product, qty: 1 }];
}

localStorage.setItem("cart", JSON.stringify(updated));
alert("Added to cart 🛒");


};

const addToWishlist = () => {
if (!product) return;


const list: Product[] = JSON.parse(
  localStorage.getItem("wishlist") ?? "[]"
);

const exists = list.find(
  (wishlistItem) => wishlistItem.id === product.id
);

if (!exists) {
  const updated = [...list, product];
  localStorage.setItem(
    "wishlist",
    JSON.stringify(updated)
  );
  alert("Added to wishlist ❤️");
} else {
  alert("Already in wishlist");
}


};

if (loading) {
return ( <div className="text-center mt-20 text-gray-500">
Loading product details... </div>
);
}

if (!product) {
return ( <div className="text-center mt-20 text-gray-500">
Product not found 📦 </div>
);
}

return ( <div className="max-w-5xl mx-auto mt-10 px-4 fade-in"> <div className="grid md:grid-cols-2 gap-10 bg-white shadow-md rounded-2xl p-6">


    <div className="relative h-80 w-full bg-gray-100 rounded-xl overflow-hidden">
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover"
      />
    </div>

    <div>
      <h1 className="text-3xl font-bold text-blue-600">
        {product.name}
      </h1>

      <p className="text-gray-500 mt-2">
        Category: {product.category}
      </p>

      <p className="mt-4 text-gray-600">
        {product.desc || "No description available"}
      </p>

      <h2 className="text-2xl font-bold text-blue-700 mt-4">
        ₹{product.price}
      </h2>

      <div className="flex gap-3 mt-6">
        <button
          onClick={addToCart}
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart 🛒
        </button>

        <button
          onClick={addToWishlist}
          className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
        >
          Wishlist ❤️
        </button>
      </div>
    </div>
  </div>
</div>
);
}
