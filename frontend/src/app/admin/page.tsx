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
      {categories.map((category) => {
        const foodsInCategory = foods.filter((food) =>
          food.categoryIds.some((cat) => cat._id === category._id),
        );

        return (
          <Card className="mb-8 p-5" key={category._id}>
            <h2 className="text-[20px] text-[#09090B] font-semibold">
              {category.name} ({foodsInCategory.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-3">
              <CreateFoodDialog />
              {foodsInCategory.map((food) => (
                <FoodCard
                  key={food._id}
                  id={food._id}
                  name={food.name}
                  price={food.price}
                  ingredients={food.ingredients}
                  image={food.image}
                />
              ))}
            </div>
          </Card>
        );
      })}
    </main>
  );
}
