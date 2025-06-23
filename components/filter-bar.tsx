"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const categories = ["All", "Singer", "Dancer", "DJ", "Speaker"];
const locations = ["All", "Mumbai", "Delhi", "Chennai", "Bangalore", "Amritsar"];
const priceOptions = ["10000", "20000", "30000", "40000", "50000"];

export default function FilterBar({
  currentCategory,
  currentLocation,
  currentPrice
}: {
  currentCategory?: string;
  currentLocation?: string;
  currentPrice?: number | null;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [category, setCategory] = useState(currentCategory || "All");
  const [location, setLocation] = useState(currentLocation || "All");
  const [price, setPrice] = useState(currentPrice?.toString() || "");

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    if (location === "All") {
      params.delete("location");
    } else {
      params.set("location", location);
    }

    if (price === "") {
      params.delete("price");
    } else {
      params.set("price", price);
    }

    router.push(`?${params.toString()}`);
  }, [category, location, price]);

  return (
    <div className="flex z-40 flex-wrap gap-4 justify-center">
      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border rounded"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Location Filter */}
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="px-4 py-2 border rounded"
      >
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      {/* Price Filter */}
      <select
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="px-4 py-2 border rounded"
      >
        <option value="">Any Price</option>
        {priceOptions.map((p) => (
          <option key={p} value={p}>
            Up to ₹{p}
          </option>
        ))}
      </select>
    </div>
  );
}