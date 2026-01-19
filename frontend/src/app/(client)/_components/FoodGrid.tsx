"use client";

import { FoodCard, FoodItem } from "./FoodCard";

interface FoodGridProps {
  title: string;
  items: FoodItem[];
  onItemClick: (item: FoodItem) => void;
}

export function FoodGrid({ title, items, onItemClick }: FoodGridProps) {
  return (
    <div className="px-8 py-8">
      <h3 className="text-white text-2xl font-bold mb-6">{title}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <FoodCard key={item.id} item={item} onClick={onItemClick} />
        ))}
      </div>
    </div>
  );
}
