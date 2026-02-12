"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { CartItemType } from "../context/CartContext";
import { Separator } from "@/components/ui/separator";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export const CartItem = ({ item, onUpdateQuantity }: CartItemProps) => {
  return (
    <>
      <div className="w-110 h-30 flex gap-3">
        <img src={item.image} className="rounded-2xl w-32 h-30 object-cover" />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <p className="text-[18px] leading-8 text-[#EF4444] font-semibold">
              {item.name}
            </p>
            <p className="text-[14px] leading-5 text-[#09090B] font-medium font-sans">
              {item.ingredients}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <Button
                variant="outline"
                className="w-9 h-9 rounded-full bg-[#F4F4F5] text-[#18181B] flex items-center justify-center cursor-pointer"
                onClick={() =>
                  onUpdateQuantity(Number(item.id), Number(item.quantity) - 1)
                }
              >
                <Minus />
              </Button>
              <h1 className="text-[18px] text-[#09090B] font-semibold">
                {item.quantity}
              </h1>
              <Button
                variant="outline"
                className="w-9 h-9 rounded-full bg-[#F4F4F5] text-[#18181B] flex items-center justify-center cursor-pointer"
                onClick={() =>
                  onUpdateQuantity(Number(item.id), Number(item.quantity) + 1)
                }
              >
                <Plus />
              </Button>
            </div>
            <div>
              <span className="text-[16px] leading-7 text-[#09090B] font-bold">
                {item.price}$
              </span>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};
