"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // simple validation
    if (!form.email || !form.password) {
      setError("Please fill all fields");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Enter valid email");
      return;
    }

    // fake login (frontend only)
    localStorage.setItem("user", JSON.stringify(form));

    setError("");

    alert("Login successful ✅");

    // redirect to home
    localStorage.setItem("isLoggedIn", "true");

router.push("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-orange-50 px-4">
      
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 fade-in">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-green-600">
          Welcome Back 👋
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login to continue shopping premium stationeries 🖊️

        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-green-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-green-500"
          />

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span
  onClick={() => router.push("/register")}
  className="text-green-600 font-semibold cursor-pointer"
>
  Register
</span>
        </p>
      </div>
    </div>
  );
}