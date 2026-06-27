import Link from "next/link";

export interface CategoryCardProps {
  id: number;
  name: string;
  description: string;
  emoji: string;
  color?: string;
}

export default function CategoryCard({
  id,
  name,
  description,
  emoji,
  color = "from-green-100 to-green-200",
}: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${id}`}
      className={`block rounded-xl p-5 shadow-md hover:shadow-lg transition bg-gradient-to-r ${color}`}
    >
      {/* Icon */}
      <div className="text-4xl mb-3">{emoji}</div>

      {/* Name */}
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-1">{description}</p>

      {/* Button style text */}
      <div className="mt-4 text-green-700 font-medium">
        Explore →
      </div>
    </Link>
  );
}