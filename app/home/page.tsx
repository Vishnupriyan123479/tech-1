import HeroBanner from "@/app/components/HeroBanner";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <HeroBanner />

      {/* Welcome */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="text-green-600 font-semibold uppercase tracking-widest">
          Premium Stationery Store
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mt-4">
          Premium Stationery Delivered
          <span className="text-green-600"> Every Day</span>
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-600">
          Experience premium stationery items like notebooks, pens, pencils,
          office supplies, secure ordering, and fast doorstep delivery for a productive lifestyle.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Link
            href="/products"
            className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Shop Stationery
          </Link>

          <Link
            href="/categories"
            className="border border-slate-300 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition"
          >
            Explore Categories
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-xl font-bold mb-3">
              Fast Delivery
            </h3>
            <p className="text-slate-600">
              Get stationery items delivered to your doorstep quickly and safely.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">🖊️</div>
            <h3 className="text-xl font-bold mb-3">
              Premium Quality
            </h3>
            <p className="text-slate-600">
              Handpicked stationery products from trusted brands and suppliers.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">💳</div>
            <h3 className="text-xl font-bold mb-3">
              Secure Payments
            </h3>
            <p className="text-slate-600">
              Safe checkout experience with reliable payment methods.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-600 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-4xl font-bold">5000+</h2>
              <p className="mt-2">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">100+</h2>
              <p className="mt-2">Products</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">50+</h2>
              <p className="mt-2">Categories</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">24/7</h2>
              <p className="mt-2">Customer Support</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          Start Your Productive Journey Today
        </h2>

        <p className="text-slate-600 mt-4">
          Browse our collection of premium stationery and boost your productivity with the best tools.
        </p>

        <Link
          href="/products"
          className="inline-block mt-8 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition"
        >
          Start Shopping
        </Link>
      </section>

    </main>
  );
}