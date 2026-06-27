import Link from "next/link";

export interface OrderItem {
  name: string;
  quantity: number;
}

export interface OrderCardProps {
  id: number;
  status: "Pending" | "Processing" | "Delivered" | "Cancelled";
  total: number;
  items: OrderItem[];
  date: string;
}

export default function OrderCard({
  id,
  status,
  total,
  items,
  date,
}: OrderCardProps) {
  const statusColor =
    status === "Delivered"
      ? "text-green-600"
      : status === "Processing"
      ? "text-blue-600"
      : status === "Cancelled"
      ? "text-red-500"
      : "text-yellow-600";

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 border border-gray-100">

      {/* Top Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h2 className="font-bold text-lg">Order #{id}</h2>

        <span className={`font-semibold ${statusColor}`}>
          {status}
        </span>
      </div>

      {/* Date */}
      <p className="text-sm text-gray-500 mt-1">
        Placed on: {date}
      </p>

      {/* Items */}
      <div className="mt-3 space-y-1 text-sm text-gray-700">
        {items.map((item, index) => (
          <p key={index}>
            {item.name} × {item.quantity}
          </p>
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-4 flex items-center justify-between">
        <p className="font-bold text-green-600">₹{total}</p>

        <Link
          href={`/orders/${id}`}
          className="text-sm text-blue-600 hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}