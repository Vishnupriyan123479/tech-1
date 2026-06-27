import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-green-100">
      <div className="container flex flex-col lg:flex-row items-center justify-between py-16 gap-10">

        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Premium & Creative <br />
            <span className="text-green-600">Stationery Delivered</span> To You
          </h1>

          <p className="text-gray-600 mt-4 text-base sm:text-lg">
            Get high quality stationery products directly with fast delivery and best price.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/products"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Shop Now
            </Link>

            <Link
              href="/categories"
              className="bg-white border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition"
            >
              View Categories
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/shop.avif"
            alt="Stationery Items"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}