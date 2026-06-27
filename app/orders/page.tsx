"use client";

import { useEffect, useState } from "react";

type OrderItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

type Order = {
  id: number;
  items: OrderItem[];
  total: number;
  status: "Processing" | "Delivered";
  date: string;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("orders");

    if (data) {
      setOrders(JSON.parse(data));
    } else {
      // demo data (first time only)
      const demo: Order[] = [
        {
          id: 1,
          items: [
            { id: 1, name: "Notebook", price: 80, qty: 2 },
            { id: 2, name: "Pen Pack", price: 50, qty: 3 },
          ],
          total: 310,
          status: "Delivered",
          date: "2026-06-20",
        },
        {
          id: 2,
          items: [
            { id: 3, name: "Sketch Pens", price: 150, qty: 2 },
          ],
          total: 300,
          status: "Processing",
          date: "2026-06-22",
        },
      ];

      setOrders(demo);
      localStorage.setItem("orders", JSON.stringify(demo));
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4 fade-in">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-green-600 mb-3">
        📦 My Orders
      </h1>

      <p className="text-center text-gray-500 mb-10">
        Track your stationery purchases easily
      </p>

      {/* Orders */}
      {orders.length === 0 ? (
        <p className="text-center text-gray-500 mt-20">
          No orders found 🛒
        </p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white shadow-md rounded-2xl p-6 card-hover"
            >

              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h2 className="text-xl font-bold text-gray-800">
                  Order #{order.id}
                </h2>

                <span
                  className={`mt-2 md:mt-0 px-3 py-1 rounded-full text-sm font-semibold ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              {/* Date */}
              <p className="text-gray-500 text-sm mt-2">
                Date: {order.date}
              </p>

              {/* Items */}
              <div className="mt-4 space-y-2">
                {order.items.map((item) => (
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

              {/* Total */}
              <div className="mt-4 border-t pt-3 flex justify-between font-bold text-green-600">
                <span>Total</span>
                <span>₹{order.total}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}