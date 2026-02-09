"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { FoodCard } from "./_components/FoodCard";
import { api } from "@/lib/axios";
import { CreateFoodDialog } from "./_components/CreateFoodDialog";

type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredients: string;
  categoryIds: {
    _id: string;
    name: string;
  }[];
};

type Category = {
  name: string;
  _id: string;
};

export default function AdminPage() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get<Food[]>("/foods");
      setFoods(data);

      const catMap = new Map<string, string>();
      data.forEach((food) =>
        food.categoryIds.forEach((cat) => {
          if (!catMap.has(cat._id)) {
            catMap.set(cat._id, cat.name);
          }
        }),
      );

      const uniqueCategories = Array.from(catMap.entries()).map(
        ([id, name]) => ({
          _id: id,
          name,
        }),
      );

      setCategories(uniqueCategories);
      setCount(uniqueCategories.length);
    };

    getData();
  }, []);

  return (
    <main className="flex-1 p-8">
      <Card className="grid grid-cols-5 gap-4 p-6">
        <CreateFoodDialog />

        {foods.map((food) => (
          <FoodCard
            key={food._id}
            id={food._id}
            name={food.name}
            price={food.price}
            ingredients={food.ingredients}
            image={food.image}
          />
        ))}
      </Card>
    </main>
  );
}
