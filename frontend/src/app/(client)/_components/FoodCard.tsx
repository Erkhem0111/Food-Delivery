"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { CartContent } from "./CartContent";

export interface FoodItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

interface FoodCardProps {
  item: FoodItem;
  onClick: (item: FoodItem) => void;
}

export function FoodCard({ item, onClick }: FoodCardProps) {
  return (
    <div className="grid grid-cols-3 gap-16">
      <Card className="w-full relative">
        <div className="relative h-64 overflow-hidden rounded-2xl">
          <img
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            src={item.image}
          />
          <Button
            size="icon"
            className="absolute bottom-3 right-3 w-8 h-8 bg-white text-gray-900 rounded-full shadow-md hover:bg-red-500 hover:text-white hover:shadow-lg transition-all"
            onClick={() => onClick(item)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <CartContent>
          <div className="flex justify-between pt-5">
            <p className="text-[28px] leading-8 text-[#EF4444] font-bold">
              {item.name}
            </p>
            <p className="text-[20px] leading-7 text-[#09090B] font-bold">
              {item.price}$
            </p>
          </div>
          <p className="text-[16px] leading-5 text-[#09090B] font-medium font-sans pt-2">
            {item.description}
          </p>
        </CartContent>
      </Card>
    </div>
  );
}
