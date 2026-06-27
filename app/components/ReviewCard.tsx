export interface ReviewCardProps {
  name: string;
  rating: number; // 1 to 5
  comment: string;
  date: string;
}

export default function ReviewCard({
  name,
  rating,
  comment,
  date,
}: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 border border-gray-100">

      {/* Top */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <span className="text-xs text-gray-500">{date}</span>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
          >
            ★
          </span>
        ))}
      </div>

      {/* Comment */}
      <p className="text-gray-600 text-sm mt-3 leading-relaxed">
        {comment}
      </p>
    </div>
  );
}