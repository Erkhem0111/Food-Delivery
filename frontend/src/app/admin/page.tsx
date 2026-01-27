"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { FoodCard } from "./_components/FoodCard";
import { api } from "@/lib/axios";
import { CreateFoodDialog } from "./_components/CreateFoodDialog";
import { CreateCategory } from "./_components/CreateCategory";
import { Categoryname } from "./_components/CategoryName";

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

export default function AdminPage() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [categoryName, setCategoryNames] = useState<Food["categoryIds"]>([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get<Food[]>("/foods");
      // Request failed with status code 404
      setFoods(data);
    };

    getData();
  }, []);

  return (
    <main className="flex-1 p-8">
      <Card className="">
        <title className="text-[20px] text-[#09090B] font-semibold">
          Dishes category
        </title>
        <CreateCategory />
        {categoryName.map((name) => (
          <Categoryname key={name._id} name={name.name} />
        ))}
      </Card>
      <Card className="grid grid-cols-4 gap-4 p-5">
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
