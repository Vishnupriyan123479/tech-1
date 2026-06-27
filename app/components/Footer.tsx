import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-green-500">
            📚 StationeryStore
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Premium stationery delivered daily with quality and fast delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <Link href="/">Home</Link>
            <Link href="/products">Stationery</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/cart">Cart</Link>
          </div>
        </div>

        {/* Customer */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Customer</h3>
          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <Link href="/orders">My Orders</Link>
            <Link href="/wishlist">Wishlist</Link>
            <Link href="/coupons">Coupons</Link>
            <Link href="/profile">Profile</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">
            Email: support@stationerystore.com
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Phone: +91 98765 43210
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Location: India
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        ©️ {new Date().getFullYear()} StationeryStore. All rights reserved.
      </div>
    </footer>
  );
}