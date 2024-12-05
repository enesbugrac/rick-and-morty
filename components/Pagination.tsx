"use client";

import { useRouter } from "next/navigation";

export default function Pagination({
  currentPage,
  totalPages,
  filters = {}
}: {
  currentPage: number;
  totalPages: number;
  filters: Record<string, string> 
}) {
  const router = useRouter();

  const navigateToPage = (page: number) => {
    const params = new URLSearchParams({ page: page.toString(), ...filters });

    router.push(`/?${params}`);
  };

  return (
    <div className="flex justify-center mt-6 space-x-4">
      <button
        onClick={() => navigateToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded ${
          currentPage === 1 ? "bg-gray-600" : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
      >
        Previous
      </button>
      <span className="p-2">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        onClick={() => navigateToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded ${
          currentPage === totalPages
            ? "bg-gray-600"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
      >
        Next
      </button>
    </div>
  );
}
