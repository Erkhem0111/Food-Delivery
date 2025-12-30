"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Check, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export type FoodCardProps = {
  item: {
    name: string;
    price: number;
    description: string;
    image: string;
  };
};

export const FoodCard = ({ item }: FoodCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const a = (open: boolean) => {
    setOpen(open);
  };
  const increase = () => setQuantity(() => quantity + 1);
  const decrease = () => setQuantity(() => (quantity > 1 ? quantity - 1 : 1));
  const totalPrice = item.price * quantity;
  return (
    <Dialog open={open} onOpenChange={a}>
      <DialogTrigger asChild>
        <Button
          onClick={handleClick}
          variant="outline"
          className="rounded-full bg-white w-11 h-11 text-[#EF4444] flex items-center justify-center absolute bottom-3 right-3 cursor-pointer"
        >
          {open ? <Check /> : <Plus />}
        </Button>
      </DialogTrigger>
      <DialogContent className="flex sm:max-w-206 h-103">
        <img src={item.image} className="rounded-2xl w-93 h-91 object-cover" />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <p className="text-[28px] leading-8 text-[#EF4444] font-bold">
              {item.name}
            </p>
            <p className="text-[16px] leading-5 text-[#09090B] font-medium font-sans pt-3">
              {item.description}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <div>
                <p className="text-[16px] leading-5 text-[#09090B] font-medium font-sans">
                  Total price
                </p>
                <p className="text-[20px] leading-7 text-[#09090B] font-bold">
                  {totalPrice}$
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={decrease}
                  variant="outline"
                  className="w-9 h-9 rounded-full bg-[#F4F4F5] text-[#18181B] flex items-center justify-center border-2 cursor-pointer"
                >
                  <Minus />
                </Button>
                <h1 className="text-[20px] text-[#09090B] font-semibold">
                  {quantity}
                </h1>
                <Button
                  onClick={increase}
                  variant="ghost"
                  className="w-9 h-9 rounded-full bg-[#F4F4F5] text-[#18181B] flex items-center justify-center border-2 cursor-pointer"
                >
                  <Plus />
                </Button>
              </div>
            </div>
            <Button
              className="w-full h-11 bg-[#18181B] text-[14px] leading-5 text-[#FAFAFA] font-medium flex items-center justify-center"
              onClick={() => toast.success("Food is being added to the cart!")}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
