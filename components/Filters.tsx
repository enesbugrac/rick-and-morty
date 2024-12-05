"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Filters({
  currentFilters,
}: {
  currentFilters: { status: string; gender: string };
}) {
  const router = useRouter();
  const [filters, setFilters] = useState(currentFilters);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    const params = new URLSearchParams(filters);
    router.push(`/?${params}`);
  };

  return (
    <div className="flex justify-center mb-6 space-x-4">
      <select
        name="status"
        value={filters.status}
        onChange={handleChange}
        className="bg-gray-700 text-white p-2 rounded"
      >
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        name="gender"
        value={filters.gender}
        onChange={handleChange}
        className="bg-gray-700 text-white p-2 rounded"
      >
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <button
        onClick={applyFilters}
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
      >
        Apply Filters
      </button>
    </div>
  );
}
