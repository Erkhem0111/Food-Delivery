"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FoodCardProps } from "./FoodCard";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { StoreCard } from "./StoreCard";

export const StoreSheet = ({ item }: FoodCardProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="w-9 h-9 rounded-full bg-[#F4F4F5] flex items-center justify-center cursor-pointer"
        >
          <ShoppingCartIcon className="size-4 text-[#18181B]" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <StoreCard item={item} />
      </SheetContent>
    </Sheet>
  );
};
