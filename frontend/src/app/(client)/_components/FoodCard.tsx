"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

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
    <Card className="w-full relative">
      <CardContent>
        <div className="relative h-64 overflow-hidden rounded-2xl">
          <img
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            src={item.image}
          />
          <Button
            size="icon"
            className="absolute bottom-3 right-3 w-11 h-11 bg-white hover:bg-white rounded-full shadow-3xl cursor-pointer"
            onClick={() => onClick(item)}
          >
            <Plus className="text-[#EF4444] size-4 stroke-4" />
          </Button>
        </div>
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
      </CardContent>
    </Card>
  );
}
