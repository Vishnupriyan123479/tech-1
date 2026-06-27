"use client";

import { useEffect, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart
  useEffect(() => {
    const data = localStorage.getItem("cart");
    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  // Save cart
  const saveCart = (updated: CartItem[]) => {
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Increase qty
  const increaseQty = (id: number) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    saveCart(updated);
  };

  // Decrease qty
  const decreaseQty = (id: number) => {
    const updated = cart
      .map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter((item) => item.qty > 0);

    saveCart(updated);
  };

  // Remove item
  const removeItem = (id: number) => {
    const updated = cart.filter((item) => item.id !== id);
    saveCart(updated);
  };

  // Total price
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4 fade-in">
      <h1 className="text-3xl font-bold text-green-600 text-center mb-6">
        🛒 Your Stationery Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">
          Your cart is empty 📚
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md p-4 rounded-xl card-hover"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />

              {/* Name */}
              <h2 className="text-lg font-semibold">{item.name}</h2>

              {/* Price */}
              <p className="text-green-600 font-bold">
                ₹{item.price}
              </p>

              {/* Quantity */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Section */}
          <div className="mt-8 p-6 bg-green-50 rounded-xl shadow text-right">
            <h2 className="text-2xl font-bold text-green-700">
              Total: ₹{total}
            </h2>

            <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}