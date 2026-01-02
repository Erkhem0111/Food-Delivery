"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export type CardItemProps = {
  item: {
    name: string;
    price: number;
    description: string;
    image: string;
  };
};

export const CartItem = ({ item }: CardItemProps) => {
  if (!item) return null;
  const [quantity, setQuantity] = useState(1);
  const increase = () => setQuantity(() => quantity + 1);
  const decrease = () => setQuantity(() => (quantity > 1 ? quantity - 1 : 1));
  const totalPrice = item.price * quantity;
  console.log(item);
  return (
    <div className="w-110 h-30 flex">
      <img src={item.image} className="rounded-2xl w-32 h-30 object-cover" />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <p className="text-[16px] leading-8 text-[#EF4444] font-bold">
            {item.name}
          </p>
          <p className="text-[12px] leading-5 text-[#09090B] font-medium font-sans">
            {item.description}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Button
              onClick={decrease}
              variant="outline"
              className="w-9 h-9 rounded-full bg-[#F4F4F5] text-[#18181B] flex items-center justify-center cursor-pointer"
            >
              <Minus />
            </Button>
            <h1 className="text-[18px] text-[#09090B] font-semibold">
              {quantity}
            </h1>
            <Button
              onClick={increase}
              variant="outline"
              className="w-9 h-9 rounded-full bg-[#F4F4F5] text-[#18181B] flex items-center justify-center cursor-pointer"
            >
              <Plus />
            </Button>
          </div>
          <div>
            <p className="text-[16px] leading-7 text-[#09090B] font-bold">
              {totalPrice}$
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
