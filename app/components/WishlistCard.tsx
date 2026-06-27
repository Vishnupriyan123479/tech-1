import Image from "next/image";
import Link from "next/link";

export interface WishlistCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  onRemove: (id: number) => void;
  onAddToCart: (id: number) => void;
}

export default function WishlistCard({
  id,
  name,
  price,
  image,
  onRemove,
  onAddToCart,
}: WishlistCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col sm:flex-row items-center gap-4">

      {/* Image */}
      <Link href={`/stationery/${id}`}>
        <div className="relative w-24 h-24">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </Link>

      {/* Info */}
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-green-600 font-bold">₹{price}</p>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={() => onAddToCart(id)}
          className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition text-sm"
        >
          Add to Cart
        </button>

        <button
          onClick={() => onRemove(id)}
          className="bg-red-100 text-red-600 px-3 py-2 rounded-lg hover:bg-red-200 transition text-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
}