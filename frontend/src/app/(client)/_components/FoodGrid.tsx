"use client";

import { FoodCard, FoodItem } from "./FoodCard";

interface FoodGridProps {
  title: string;
  items: FoodItem[];
  onItemClick: (item: FoodItem) => void;
}

export function FoodGrid({ title, items, onItemClick }: FoodGridProps) {
  return (
    <div className="px-22 py-8">
      <h3 className="text-[30px] leading-6 text-white font-semibold mb-6">
        {title}
      </h3>

      <div className="grid grid-cols-3 gap-6">
        {items.map((item) => (
          <FoodCard key={item.name} item={item} onClick={onItemClick} />
        ))}
      </div>
    </div>
  );
}
