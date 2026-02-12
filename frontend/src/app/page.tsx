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
import { FoodGridSkeleton } from "./(client)/_components/FoodGridSkeleton";

export default function Home() {
  const { addToCart, setIsCartOpen, getTotalItems } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [foodsByCategory, setFoodsByCategory] = useState<{
    [categoryName: string]: FoodItem[];
  }>({});

  const handleAddToCart = (food: FoodItem, quantity: number) => {
    const itemForCart = {
      id: food._id,
      name: food.name,
      price: food.price,
      image: food.image,
      ingredients: food.ingredients,
    };
    for (let i = 0; i < quantity; i++) addToCart(itemForCart);
    setSelectedFood(null);
    toast.success("Food is being added to the cart!");
  };

  useEffect(() => {
    const getFoods = async () => {
      try {
        setIsLoading(true);
        const response = await api.get("/foods");
        console.log("RESPONSE:", response);
        const foodsData: FoodItem[] = response.data;
        console.log("DATA:", foodsData);

        setFoods(foodsData);

        const grouped: { [key: string]: FoodItem[] } = {};

        for (const food of foodsData) {
          const categoryName = food.categoryIds.name;

          if (!grouped[categoryName]) {
            grouped[categoryName] = [];
          }
          grouped[categoryName].push(food);
        }

        setFoodsByCategory(grouped);
      } catch (error) {
        console.error("FETCH ERROR:", error);
        toast.error("Failed to fetch foods");
      } finally {
        setIsLoading(false);
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

        {isLoading ? (
          <>
            <FoodGridSkeleton />
            <FoodGridSkeleton />
            <FoodGridSkeleton />
          </>
        ) : (
          Object.keys(foodsByCategory)
            .filter((categoryName) => foodsByCategory[categoryName].length > 0)
            .map((categoryName) => (
              <FoodGrid
                key={categoryName}
                title={categoryName}
                items={foodsByCategory[categoryName]}
                onItemClick={setSelectedFood}
              />
            ))
        )}

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
