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

// const foodItems = [
//   {
//     id: 1,
//     name: "Finger food",
//     price: "$12.99",
//     description:
//       "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//     image:
//       "https://images.unsplash.com/photo-1541599468348-e96984315921?w=400&h=300&fit=crop",
//   },
//   {
//     id: 2,
//     name: "Cranberry Brie Bites",
//     price: "$12.99",
//     description:
//       "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//     image:
//       "https://images.unsplash.com/photo-1559058789-672da06263d8?w=400&h=300&fit=crop",
//   },
//   {
//     id: 3,
//     name: "Sunshine Stackers",
//     price: "$12.99",
//     description:
//       "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//     image:
//       "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
//   },
//   {
//     id: 4,
//     name: "Brie Crostini Appetizer",
//     price: "$12.99",
//     description:
//       "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//     image:
//       "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
//   },
//   {
//     id: 5,
//     name: "Sunshine Stackers",
//     price: "$12.99",
//     description:
//       "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//     image:
//       "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
//   },
//   {
//     id: 6,
//     name: "Grilled chicken",
//     price: "$12.99",
//     description:
//       "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//     image:
//       "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
//   },
// ];

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

        <FoodGrid
          title="Appetizers"
          items={foods}
          onItemClick={setSelectedFood}
        />

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
