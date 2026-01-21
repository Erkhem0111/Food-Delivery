import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Minus, Plus, X } from "lucide-react";
import { FoodItem } from "./FoodCard";

interface FoodDetailDialogProps {
  food: FoodItem | null;
  onClose: () => void;
  onAddToCart: (food: FoodItem, quantity: number) => void;
}

export function FoodDetailDialog({
  food,
  onClose,
  onAddToCart,
}: FoodDetailDialogProps) {
  const [quantity, setQuantity] = useState(1);

  const getTotalPrice = () => {
    if (!food) return "$0.00";
    const price = parseFloat(food.price.replace("$", ""));
    return `$${(price * quantity).toFixed(2)}`;
  };

  const handleAddToCart = () => {
    if (food) {
      onAddToCart(food, quantity);
      setQuantity(1);
    }
  };
  return (
    <Dialog open={!!food} onOpenChange={onClose}>
      <DialogContent className="flex sm:max-w-206 h-103">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-3 rounded-full bg-white/90 backdrop-blur-sm shadow-md z-10 hover:bg-white h-8 w-8 cursor-pointer"
          onClick={onClose}
        >
          <X className="text-black size-4 stroke-3" />
        </Button>
        {food && (
          <div className="flex gap-6">
            <img
              src={food.image}
              className="rounded-2xl w-93 h-91 object-cover "
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <p className="text-[28px] leading-8 text-[#EF4444] font-bold">
                  {food.name}
                </p>
                <p className="text-[16px] leading-5 text-[#09090B] font-medium font-sans pt-3">
                  {food.description}
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex justify-between">
                  <div>
                    <p className="text-[16px] leading-5 text-[#09090B] font-medium font-sans">
                      Total price
                    </p>
                    <p className="text-[20px] leading-7 text-[#09090B] font-bold">
                      {food.price}
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Button
                      variant="outline"
                      className="w-9 h-9 rounded-full bg-[#F4F4F5] text-[#18181B] flex items-center justify-center border-2 cursor-pointer"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus />
                    </Button>
                    <span className="text-[20px] text-[#09090B] font-semibold">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      className="w-9 h-9 rounded-full bg-[#F4F4F5] text-[#18181B] flex items-center justify-center border-2 cursor-pointer"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus />
                    </Button>
                  </div>
                </div>
                <Button className="cursor-pointer" onClick={handleAddToCart}>
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
