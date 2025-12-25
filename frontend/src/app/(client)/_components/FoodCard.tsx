"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, Minus, Plus, X } from "lucide-react";
import { useState } from "react";
import { FoodListProps } from "./Foodlist";

export const FoodCard = ({ item }: FoodListProps) => {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setChecked((prev) => !prev);
    setOpen(true);
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <form>
          <DialogTrigger asChild>
            <Button
              onClick={handleClick}
              variant="outline"
              className="rounded-full bg-white w-11 h-11 text-[#EF4444] flex items-center justify-center absolute bottom-3 right-3 cursor-pointer"
            >
              {checked ? <Check /> : <Plus />}
            </Button>
          </DialogTrigger>
          {item.map((item, index) => (
            <DialogContent key={index}>
              <DialogHeader className="flex">
                <img
                  src={item.image}
                  className="rounded-2xl w-full h-full object-cover"
                />
                <Button
                  variant="ghost"
                  className="w-9 h-9 rounded-full bg-[#F4F4F5] text-[#18181B] flex items-center justify-center"
                  onClick={() => setOpen(false)}
                >
                  <X />
                </Button>
                <DialogTitle className="text-[28px] leading-8 text-[#EF4444] font-bold">
                  {item.name}
                </DialogTitle>
                <DialogDescription className="text-[16px] leading-5 text-[#09090B] font-medium font-sans">
                  {item.description}
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-between">
                <div>
                  <p className="text-[16px] leading-5 text-[#09090B] font-medium font-sans">
                    Total price
                  </p>
                  <p className="text-[20px] leading-7 text-[#09090B] font-bold">
                    {item.price}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    className="w-9 h-9 rounded-full bg-[#F4F4F5] text-[#18181B] flex items-center justify-center"
                  >
                    <Minus />
                  </Button>
                  <h1 className="text-[20px] text-[#09090B] font-bold">1</h1>
                  <Button
                    variant="ghost"
                    className="w-9 h-9 rounded-full bg-[#F4F4F5] text-[#18181B] flex items-center justify-center"
                  >
                    <Plus />
                  </Button>
                </div>
              </div>
              <DialogFooter>
                <Button className="w-full h-11 bg-[#18181B] text-[14px] leading-5 text-[#FAFAFA] font-medium flex items-center justify-center">
                  Add to cart
                </Button>
              </DialogFooter>
            </DialogContent>
          ))}
        </form>
      </Dialog>
    );
  };
};
