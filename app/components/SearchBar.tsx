"use client";

import { useState } from "react";

export interface SearchBarProps {
  onSearch: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  onSearch,
  placeholder = "Search stationery...",
}: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(value.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-center bg-white shadow-md rounded-xl overflow-hidden border border-gray-100"
    >
      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 outline-none text-gray-700"
      />

      {/* Search Button */}
      <button
        type="submit"
        className="bg-green-600 text-white px-5 py-3 hover:bg-green-700 transition"
      >
        Search
      </button>
    </form>
  );
}