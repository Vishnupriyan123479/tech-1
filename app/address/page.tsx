"use client";

import { useState } from "react";

export default function AddressPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pincode: "",
    city: "",
    state: "",
    address: "",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // simple validation
    if (
      !form.name ||
      !form.phone ||
      !form.pincode ||
      !form.city ||
      !form.state ||
      !form.address
    ) {
      alert("Please fill all fields");
      return;
    }

    // save to localStorage (for cart/payment use later)
    localStorage.setItem("address", JSON.stringify(form));

    setSaved(true);
    alert("Address saved successfully ✅");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl fade-in">
      
      <h1 className="text-3xl font-bold text-green-600 text-center">
        Delivery Address 🏠
      </h1>

      <p className="text-gray-500 text-center mt-2">
        Enter your delivery details for premium stationery delivery
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-green-500"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-green-500"
        />

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={form.pincode}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-green-500"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-green-500"
          />
        </div>

        <input
          type="text"
          name="state"
          placeholder="State"
          value={form.state}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-green-500"
        />

        <textarea
          name="address"
          placeholder="Full Address (Street, House No, Area)"
          value={form.address}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 border rounded-lg focus:outline-green-500"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Save Address
        </button>
      </form>

      {saved && (
        <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
          ✅ Address is saved and ready for delivery
        </div>
      )}
    </div>
  );
}