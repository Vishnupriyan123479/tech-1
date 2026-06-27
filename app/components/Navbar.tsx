"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-green-600"
        >
          📚 StationeryStore
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          <Link href="/home" className="hover:text-green-600">Home</Link>
          <Link href="/products" className="hover:text-green-600">Stationery</Link>
          <Link href="/categories" className="hover:text-green-600">Categories</Link>
          <Link href="/search" className="hover:text-green-600">Search</Link>
          <Link href="/coupons" className="hover:text-green-600">Coupons</Link>
          <Link href="/cart" className="hover:text-green-600">Cart</Link>
          <Link href="/address" className="hover:text-green-600">Address</Link>
          <Link href="/payment" className="hover:text-green-600">Payment</Link>
          <Link href="/tracking" className="hover:text-green-600">Tracking</Link>
          <Link href="/orders" className="hover:text-green-600">Orders</Link>
          <Link href="/reviews" className="hover:text-green-600">Reviews</Link>
          <Link href="/wishlist" className="hover:text-green-600">Wishlist</Link>
        </nav>

        {/* Right Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-1 border rounded-lg hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-4 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Register
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3 text-gray-700">

          <Link href="/home" onClick={() => setOpen(false)} className="block">
            Home
          </Link>

          <Link href="/stationery" onClick={() => setOpen(false)} className="block">
            Stationery
          </Link>

          <Link href="/categories" onClick={() => setOpen(false)} className="block">
            Categories
          </Link>

          <Link href="/search" onClick={() => setOpen(false)} className="block">
            Search
          </Link>

          <Link
            href="/coupons"
            onClick={() => setOpen(false)}
            className="block"
          >
            Coupons
          </Link>

          <Link href="/cart" onClick={() => setOpen(false)} className="block">
            Cart
          </Link>

          <Link href="/address" onClick={() => setOpen(false)} className="block">
            Address
          </Link>

          <Link href="/payment" onClick={() => setOpen(false)} className="block">
            Payment
          </Link>

          <Link href="/tracking" onClick={() => setOpen(false)} className="block">
            Tracking
          </Link>

          <Link href="/orders" onClick={() => setOpen(false)} className="block">
            Orders
          </Link>

          <Link href="/reviews" onClick={() => setOpen(false)} className="block">
            Reviews
          </Link>

          <Link href="/wishlist" onClick={() => setOpen(false)} className="block">
            Wishlist
          </Link>

          <div className="pt-3 flex flex-col gap-2">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="border rounded-lg px-4 py-2 text-center"
            >
              Login
            </Link>

            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="bg-green-600 text-white rounded-lg px-4 py-2 text-center"
            >
              Register 
            </Link>
          </div>

        </div>
      )}
    </header>
  );
}