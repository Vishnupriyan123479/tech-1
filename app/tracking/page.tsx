"use client";

import { useEffect, useState } from "react";

type Order = {
  id: number;
  status: "Processing" | "Shipped" | "Out for Delivery" | "Delivered";
  date: string;
  total: number;
};

export default function TrackingPage() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("orders");

    if (data) {
      const orders: Order[] = JSON.parse(data);
      setOrder(orders[orders.length - 1]); // latest order
    }
  }, []);

  const steps = [
    "Processing",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];

  const currentIndex = steps.findIndex(
    (s) => s === order?.status
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 fade-in">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-green-600 mb-3">
        🚚 Track Your Order
      </h1>

      <p className="text-center text-gray-500 mb-10">
        Live order status tracking
      </p>

      {!order ? (
        <p className="text-center text-gray-500 mt-20">
          No orders to track 📦
        </p>
      ) : (
        <div className="bg-white shadow-md rounded-2xl p-6">

          {/* Order Info */}
          <div className="flex justify-between mb-6">
            <h2 className="font-bold text-lg">
              Order #{order.id}
            </h2>
            <p className="text-gray-500">{order.date}</p>
          </div>

          {/* Progress Tracker */}
          <div className="flex justify-between items-center mb-8">

            {steps.map((step, index) => (
              <div
                key={step}
                className="flex-1 text-center relative"
              >
                {/* Circle */}
                <div
                  className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-sm font-bold ${
                    index <= currentIndex
                      ? "bg-green-600 text-white"
                      : "bg-gray-300"
                  }`}
                >
                  {index + 1}
                </div>

                {/* Label */}
                <p className="text-xs mt-2 text-gray-600">
                  {step}
                </p>

                {/* Line */}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute top-4 left-1/2 w-full h-1 ${
                      index < currentIndex
                        ? "bg-green-600"
                        : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Status */}
          <div className="text-center">
            <p className="text-lg font-semibold text-green-600">
              Current Status: {order.status}
            </p>

            <p className="text-gray-500 mt-2">
              Total Paid: ₹{order.total}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}