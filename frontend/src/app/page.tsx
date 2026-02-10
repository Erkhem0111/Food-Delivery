"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useCart } from "./(client)/context/CartContext";
import { FoodItem } from "./(client)/_components/FoodCard";
import { Header } from "./(client)/_components/Header";
import { FoodGrid } from "./(client)/_components/FoodGrid";
import { FoodDetailDialog } from "./(client)/_components/FoodDetailDialog";
import { Footer } from "./(client)/_components/Footer";
import { api } from "@/lib/axios";

export default function Home() {
  const { addToCart, setIsCartOpen, getTotalItems } = useCart();
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [foods, setFoods] = useState<FoodItem[]>([]);

  const handleAddToCart = (food: FoodItem, quantity: number) => {
    for (let i = 0; i < quantity; i++) addToCart(food);
    setSelectedFood(null);
    toast.success("Food is being added to the cart!");
  };

  useEffect(() => {
    const getFoods = async () => {
      try {
        const { data } = await api.get("/foods", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        setFoods(data);
      } catch {
        toast.error("Failed to fetch foods");
      }
    };
    getFoods();
  }, []);

  return (
    <>
      <div className="bg-[#404040]">
        <Header
          totalItems={getTotalItems()}
          onCartClick={() => setIsCartOpen(true)}
        />
        <img src="/BG.png" />

        <FoodGrid title={} items={foods} onItemClick={setSelectedFood} />

        <FoodDetailDialog
          food={selectedFood}
          onClose={() => setSelectedFood(null)}
          onAddToCart={handleAddToCart}
        />
      </div>
      <Footer />
    </>
  );
}
