import Image from "next/image";
import Link from "next/link";

export interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
  onAddToCart: (id: number) => void;
  onAddToWishlist: (id: number) => void;
}

export default function StationeryCard({
  id,
  name,
  price,
  image,
  category,
  onAddToCart,
  onAddToWishlist,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col">

      {/* Image */}
      <Link href={`/products/${id}`}>
        <div className="relative w-full h-40 sm:h-48">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </Link>

      {/* Info */}
      <div className="mt-4 flex-1">
        {category && (
          <p className="text-xs text-gray-500 uppercase">{category}</p>
        )}

        <h2 className="text-lg font-semibold">{name}</h2>

        <p className="text-green-600 font-bold mt-1">₹{price}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-4">

        <button
          onClick={() => onAddToCart(id)}
          className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition text-sm"
        >
          Add to Cart
        </button>

        <button
          onClick={() => onAddToWishlist(id)}
          className="px-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
        >
          ♥️
        </button>

      </div>
    </div>
  );
}