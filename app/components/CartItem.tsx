"use client";

import Image from "next/image";

export interface CartItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  onRemove: (id: number) => void;
  onUpdateQty: (id: number, qty: number) => void;
}

export default function CartItem({
  id,
  name,
  price,
  image,
  quantity,
  onRemove,
  onUpdateQty,
}: CartItemProps) {
  const increaseQty = () => {
    onUpdateQty(id, quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity <= 1) return;
    onUpdateQty(id, quantity - 1);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white rounded-xl shadow-md p-4 gap-4">

      {/* Product Info */}
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="rounded-lg object-cover"
        />

        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-green-600 font-medium">₹{price}</p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={decreaseQty}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>

        <span className="font-semibold">{quantity}</span>

        <button
          onClick={increaseQty}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Total Price */}
      <div className="font-semibold text-gray-700">
        ₹{price * quantity}
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(id)}
        className="text-red-500 hover:text-red-700 font-medium"
      >
        Remove
      </button>
    </div>
  );
}