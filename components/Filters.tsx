"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState, setFilters } from "@/redux/store";

export default function Filters() {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Redux durumunu güncelle
    const updatedFilters = { ...filters, [name]: value };
    dispatch(setFilters(updatedFilters));

    // URL'yi güncelle
    const params = new URLSearchParams(updatedFilters);
    router.push(`/?${params.toString()}`);
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
    </div>
  );
}
