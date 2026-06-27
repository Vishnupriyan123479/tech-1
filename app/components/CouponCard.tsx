import { useState } from "react";

export interface CouponCardProps {
  code: string;
  discount: string; // e.g. "10% OFF" or "₹100 OFF"
  description: string;
  validTill?: string;
  onApply: (code: string) => void;
}

export default function CouponCard({
  code,
  discount,
  description,
  validTill,
  onApply,
}: CouponCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 border border-gray-100">

      {/* Discount */}
      <h2 className="text-xl font-bold text-green-600">
        {discount}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-1">
        {description}
      </p>

      {/* Coupon Code Box */}
      <div className="mt-4 flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
        <span className="font-semibold tracking-wider">{code}</span>

        <button
          onClick={handleCopy}
          className="text-sm text-blue-600 font-medium"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Validity */}
      {validTill && (
        <p className="text-xs text-gray-500 mt-2">
          Valid till: {validTill}
        </p>
      )}

      {/* Apply Button */}
      <button
        onClick={() => onApply(code)}
        className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
      >
        Apply Coupon
      </button>
    </div>
  );
}