"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
};

export default function PaymentPage() {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [method, setMethod] = useState("UPI");

  useEffect(() => {
    const data = localStorage.getItem("cart");
    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    const oldOrders = JSON.parse(localStorage.getItem("orders") || "[]");

    const newOrder = {
      id: Date.now(),
      items: cart,
      total,
      status: "Processing",
      date: new Date().toISOString().split("T")[0],
    };

    localStorage.setItem(
      "orders",
      JSON.stringify([...oldOrders, newOrder])
    );

    localStorage.removeItem("cart");

    alert("Order Placed Successfully ✅");

    router.push("/orders");
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 fade-in">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-green-600 mb-3">
        💳 Payment
      </h1>

      <p className="text-center text-gray-500 mb-10">
        Complete your order securely
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {/* LEFT - Payment Methods */}
        <div className="bg-white shadow-md rounded-2xl p-6">

          <h2 className="text-xl font-bold mb-4">
            Choose Payment Method
          </h2>

          {/* UPI */}
          <div
            onClick={() => setMethod("UPI")}
            className={`p-4 border rounded-lg mb-3 cursor-pointer ${
              method === "UPI"
                ? "border-green-600 bg-green-50"
                : ""
            }`}
          >
            💸 UPI Payment
          </div>

          {/* COD */}
          <div
            onClick={() => setMethod("COD")}
            className={`p-4 border rounded-lg mb-3 cursor-pointer ${
              method === "COD"
                ? "border-green-600 bg-green-50"
                : ""
            }`}
          >
            🚚 Cash on Delivery
          </div>

          {/* Card */}
          <div
            onClick={() => setMethod("CARD")}
            className={`p-4 border rounded-lg cursor-pointer ${
              method === "CARD"
                ? "border-green-600 bg-green-50"
                : ""
            }`}
          >
            💳 Credit / Debit Card
          </div>

          {/* UPI Info */}
          {method === "UPI" && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg text-sm">
              Pay using GPay / PhonePe / Paytm  
              <br />
              UPI ID: <b>fruitstore@upi</b>
            </div>
          )}

          {/* Card Info */}
          {method === "CARD" && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg text-sm">
              Card payment will be processed securely 🔐
            </div>
          )}
        </div>

        {/* RIGHT - Order Summary */}
        <div className="bg-white shadow-md rounded-2xl p-6">

          <h2 className="text-xl font-bold mb-4">
            Order Summary
          </h2>

          <div className="space-y-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-gray-700"
              >
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>₹{item.price * item.qty}</span>
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-4 flex justify-between font-bold text-green-600">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          {/* Pay Button */}
          <button
            onClick={placeOrder}
            className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Pay & Place Order
          </button>
        </div>
      </div>
    </div>
  );
}